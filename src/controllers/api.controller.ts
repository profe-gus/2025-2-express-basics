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

}