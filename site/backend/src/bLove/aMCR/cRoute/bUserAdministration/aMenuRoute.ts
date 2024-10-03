import menuController from 'bLove/aMCR/bController/bUserAdministration/aMenuController';
import express from 'express';


const router = express.Router();

router.route("/list").get(menuController().list);

export const menuRouter = router;
