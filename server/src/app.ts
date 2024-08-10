import express, { Response } from 'express'
import http from 'http';
import { Server } from 'socket.io';


const app = express();
const httpServer = http.createServer(app);

const io = new Server(httpServer);

io.on("connection", (socket) => {
    console.log("user connected")
})



app.get("/", (_, res: Response) => {
    res.send("hello world")
})

export default app;