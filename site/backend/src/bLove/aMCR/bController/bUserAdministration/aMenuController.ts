import express from 'express';
import catchAsyncMiddleware from "../../../bMiddleware/bCatchAsyncMiddleware"
import { MenuModel } from '../../aModel/bUserAdministration/aMenuModel';

const menuController = (Model= MenuModel, Label= "Menu") => {
  return {
    // List Controller
    list: catchAsyncMiddleware(
      async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        
        // List
        const list_object = await Model.find();

        // Response
        response.status(200).json({
          success: true,
          message: `${Label} Listed Successfully`,
          list: list_object
        })
      }
    )
  }
}

export default menuController;
