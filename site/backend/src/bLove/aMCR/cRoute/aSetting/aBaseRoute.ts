import express from 'express';

import baseController from '../../bController/aSetting/aBaseController';
import validatorMiddleware, { baseCreateValidation } from '../../../bMiddleware/cValidatorMiddleware';


const router = express.Router();

router.route("/list").get(baseController().list);
router.route("/create").post(baseCreateValidation(), validatorMiddleware, baseController().create);
router.route("/retrieve/:id").get(baseController().retrieve);
router.route("/update/:id").put(baseController().update);
router.route("/delete/:id").delete(baseController().delete);

export const baseRouter = router;
