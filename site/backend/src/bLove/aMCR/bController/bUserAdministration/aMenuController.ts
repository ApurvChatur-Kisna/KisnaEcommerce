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
    ),

    // Create Controller
    create: catchAsyncMiddleware(
      async (request: express.Request, response: express.Response, next: express.NextFunction) => {

        // Create
        const create_object = await Model.create(request.body);

        // Response
        response.status(201).json({
          success: true,
          message: `${Label} Created Successfully`,
          create: create_object
        })
      }
    ),

    // Retrieve
    retrieve: catchAsyncMiddleware(
      async (request: express.Request, response: express.Response, next: express.NextFunction) => {

        // Retrieve
        const retrieve_object = await Model.findById(request.params.id);

        // Response
        response.status(200).json({
          success: true,
          message: `${Label} Retrieve Successfully`,
          retrieve: retrieve_object
        })
      }
    ),

    // Update
    update: catchAsyncMiddleware(
      async (request: express.Request, response: express.Response, next: express.NextFunction) => {

        // Retrieve
        let retrieve_object = await Model.findById(request.params.id);

        // Update
        retrieve_object = await Model.findByIdAndUpdate(
          request.params.id,
          request.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
          }
        )

        // Response
        response.status(201).json({
          success: true,
          message: `${Label} Updated Successsfully`,
          update: retrieve_object
        })
      }
    ),

    // Delete
    delete: catchAsyncMiddleware(
      async (request: express.Request, response: express.Response, next: express.NextFunction) => {

        // Retrieve
        let retrieve_object = await Model.findById(request.params.id);

        // Delete
        await Model.findByIdAndDelete(request.params._id);

        // Response
        response.status(200).json({
          success: true,
          message: `${Label} Deleted Successfully`
        })
      }
    )
  }
}

export default menuController;
