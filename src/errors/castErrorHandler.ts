import mongoose from "mongoose";
import { TErrorSources, TGenericErrorResponse } from "../interfaces/errors/errors.intrface";

const castErrorHandler = (err: mongoose.Error.CastError):TGenericErrorResponse=>{
    const statusCode = 400;
    const errorSources:TErrorSources = [
        {
            path:err.path,
            message: err.message
        }
    ]
    return {
        statusCode,
        message: 'Cast Error: Invalid ID',
        errorSources,
      };
}

export default castErrorHandler;
