import express from 'express';

import catchAsyncMiddleware from '../../../bMiddleware/bCatchAsyncMiddleware';
import { ProductModel } from '../../../aMCR/aModel/cMain/aProductModel';


const productController = (Model=ProductModel, Label="Product") => ({
  // List
  list: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, nex: express.NextFunction) => {
      
      // List
      const object_list = await Model.find();
      
      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Listed Successfully`,
        total_count: await Model.countDocuments(),
        list: object_list,
      })
    }
  ),

  // Create
  create: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Create
      const object_create = await Model.create(request.body)

      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Created Successfully`,
        create: object_create
      })
    }
  ),

  // Retrieve
  retrieve: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Retrieve
      const object_retrieve = await Model.findById(request.params.id);

      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Retrieved Successfully`,
        retrieve: object_retrieve
      })
    }
  ),

  // Update
  update: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Retrieve
      let object_update = await Model.findById(request.params.id);

      // Update
      object_update = await Model.findByIdAndUpdate(
				request.params.id,
				request.body, {
					new: true,
					runValidators: true,
					useFindAndModify: false
				}
      )
      
      // Response
      response.status(200).json({
        success: true,
        message: `${Label} Updated Successfully`,
        update: object_update
      })
    }
  ),

  // Delete
  delete: catchAsyncMiddleware(
    async (request: express.Request, response: express.Response, next: express.NextFunction) => {

      // Retrieve
      let object_delete = await Model.findById(request.params.id);

      // Delete
			await object_delete?.deleteOne({"_id": "_id"})

      //Response
      response.status(200).json({
        success: true,
        message: `${Label} Deleted Successfully`,
        delete: object_delete
      })
    }
  )

})

export default productController;
