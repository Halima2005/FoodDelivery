import express from "express";
import multer from "multer";
import { addFood, listFood, removeFood } from "../controllers/foodControllers.js";
const foodRouter = express.Router();

//Image Storage Engine 

const storage= multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, '/tmp');//vercel directory
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + path.extname (file.originalname)); //add a unique suffix to the file
    }
});
const upload = multer ({storage:storage})
foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)

export default foodRouter;
