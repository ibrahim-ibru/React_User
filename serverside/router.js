import { Router } from "express";
import * as cntrl from "./controller/controller.js"
import Auth from "./middleware/auth.js";

const router=Router()

router.route("/adduser").post(cntrl.addUser)
router.route("/login").post(cntrl.loginUser)
router.route("/home").get(Auth,cntrl.Home)
router.route("/verifyemail").post(cntrl.verifyEmail)

export default router