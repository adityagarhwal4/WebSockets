import express, { Response } from 'express'


const app = express();



app.get("/", (_, res: Response) => {
    res.send("hello world")
})

export default app;