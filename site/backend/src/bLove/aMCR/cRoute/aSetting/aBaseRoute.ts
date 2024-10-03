import express from 'express';

import baseController from '../../bController/aSetting/aBaseController';
import validatorMiddleware, { baseCreateValidation } from '../../../bMiddleware/cValidatorMiddleware';


const router = express.Router();

router.route("/list").get(baseController().list);
router.route("/create").post(baseCreateValidation(), validatorMiddleware, baseController().create);

export const baseRouter = router;
