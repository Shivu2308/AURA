import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/posts.route.js";
import vibeRouter from "./routes/vibe.routes.js";
import storyRouter from "./routes/story.route.js";
import messageRouter from "./routes/message.routes.js";
import { app, server } from "./socket.js";
dotenv.config();





const port = process.env.PORT
const allowedOrigins = [
    'https://aura-eight-jet.vercel.app', 
    'http://localhost:5173'
];

app.use(cors({
    origin: function (origin, callback) {
        // !origin ka matlab hai server-to-server request (kabhi kabhi needed hota hai)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use("/api/vibe", vibeRouter);
app.use("/api/story", storyRouter);
app.use("/api/message", messageRouter);

server.listen(port, () => {
  connectDB();
  console.log("server started on http://localhost:" + port);
});
