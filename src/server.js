import express from "express";
import morgan from "morgan";
import superSexyRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from ",/routers/userRouter";

const PORT =  4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

app.user("/", globlaRouter); // 내 url이 '/'로 시작되면 여기로 온다. 
app.user("/videos", videoRouter);
app.user("/users", userRouter);

const handleListening = () =>
    console.log(`☑️Server listening on port http://localhost:${PORT}❣️`);

app.listen(PORT, handleListening);

//라우터는 url이 어떻게 시작하는지에 따라 나누는 방법이다.