import express from "express";
import { HelloWorld, HomePage, HandleRegister} from "../controllers/users";

const router = express.Router();

const InitRouter = (app) =>{
    // router.get("/", HelloWorld);
    router.get("/home", HomePage);
    router.get("/register", HandleRegister)


    return app.use("/", router);
}

export default InitRouter;