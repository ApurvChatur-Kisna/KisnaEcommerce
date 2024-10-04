import express from 'express';

import menuController from '../../../aMCR/bController/bUserAdministration/aMenuController';


const router = express.Router();

router.route("/list").get(menuController().list);
router.route("/create").post(menuController().create);
router.route("/retrieve/:id").get(menuController().retrieve);
router.route("/update/:id").put(menuController().update);
router.route("/delete/:id").delete(menuController().delete);

export const menuRouter = router;
