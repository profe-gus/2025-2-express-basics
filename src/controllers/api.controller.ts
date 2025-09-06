import { Request, Response } from "express";

export class ApiController{

    sayHello(req: Request, res: Response){
        try{
            const response = {
                status: 200,
                message: "Hello"
            }
            res.status(200).json(response)
        }catch(error){
            res.status(500).json(error)
            console.log("🚀 ~ :9 ~ ApiController ~ sayHello ~ error:", error);
        }
    }

    sendParamsByUrl(req: Request, res: Response){
       try{
            const {id} = req.query;

            const response = {
                status: 200,
                message: `User id sended is: ${id}`
            }
            res.status(200).json(response)
        }catch(error){
            res.status(500).json(error)
            console.log("🚀 ~ :9 ~ ApiController ~ sayHello ~ error:", error);
        }
    }

    sendParamsByBody(req: Request, res: Response){
        try{
            const body = req.body;

            const response = {
                status: 200,
                body
            }
            res.status(200).json(response)
        }catch(error){
            res.status(500).json(error)
            console.log("🚀 ~ :9 ~ ApiController ~ sayHello ~ error:", error);
        }


    }

}