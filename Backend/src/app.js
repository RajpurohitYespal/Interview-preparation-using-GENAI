const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cookieParser())

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000"
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman or server-to-server)
    if (!origin) return callback(null, true);

    // Allow local development ports or any *.vercel.app deployment
    if (
      allowedOrigins.includes(origin) ||
      origin.endsWith(".vercel.app")
    ) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
};

// Apply CORS middleware globally
app.use(cors(corsOptions));

app.use(cors(corsOptions));

/* require all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")

/* using all the routes here */
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)

module.exports = app