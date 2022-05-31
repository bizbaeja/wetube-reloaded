import express from "express";
import { edit, remove, logout, see } from "../controllers/usercontroller";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get(":id",see);
export default userRouter;
//:id 를 파라미터라 하는데 포인트는 이걸로 url안에 변수를 포함시킬 수 있다는 것이다. 
//브라우저의 강의 도메인넘버 숫자 그것이 바로 변수이다. 
//모든 영상마다 변수가 다를 것이다.
//근데 모든 동영상마다 라우터를 만들어주는것은 불가능하기 때문에 파라미터가 있는것
//url안에 변수를 넣는것을 허용해준다. 
//내가 브러우저로 가서 "/video/212121" 를 입력하면
//express는이걸 :id에 넣어줄것이다. 
//express는 이 라우터(userRouter.get(":id",see);) 를 부른다.
//계속 반복해서 저 변수안에 열심히 url 을 반복해서 넣어주는 미친짓을 할 수는 없으니까. 