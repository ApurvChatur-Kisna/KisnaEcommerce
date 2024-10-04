import express from 'express';

import productController from '../../../aMCR/bController/cMain/aProductController';


const router = express.Router();

router.route("/list").get(productController().list);
router.route("/create").post(productController().create);
router.route("/retrieve/:id").get(productController().retrieve);
router.route("/update/:id").put(productController().update);
router.route("/delete/:id").delete(productController().delete);

export const productRouter = router;
