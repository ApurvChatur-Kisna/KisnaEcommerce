import express from 'express';
import morganMiddleware from 'morgan';
import corsMiddleware from 'cors';
import bodyParserMiddleware from 'body-parser';
import cookieParserMiddleware from 'cookie-parser';
import compressionMiddleware from 'compression';

import errorMiddleware from '../bLove/bMiddleware/aErrorMiddleware';
import { baseRouter } from '../bLove/aMCR/cRoute/aSetting/aBaseRoute';
import { menuRouter } from '../bLove/aMCR/cRoute/bUserAdministration/aMenuRoute';
import { productRouter } from '../bLove/aMCR/cRoute/cMain/aProductRoute';


const appConnection = express();

// Third Party Middleware
appConnection.use(morganMiddleware("dev"));
appConnection.use(corsMiddleware({ credentials: true }));
appConnection.use(bodyParserMiddleware.urlencoded({ extended: true }));
appConnection.use(bodyParserMiddleware.json());
appConnection.use(cookieParserMiddleware());
appConnection.use(compressionMiddleware());

// Routing Middleware
appConnection.use("/api/v1/base", baseRouter)

appConnection.use("/api/v1/menu", menuRouter)

appConnection.use("/api/v1/product", productRouter)

// Error Middleware
appConnection.use(errorMiddleware)

export default appConnection;