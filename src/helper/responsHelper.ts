class ResponseHelper {

    public async responseHandler(res: any, statusCode: number, statusText: boolean, message: string, data: any,token?: string){
        res.status(statusCode).json({ status: statusCode, statusText, message: message, data: data,token});
    }
}

export default new ResponseHelper();