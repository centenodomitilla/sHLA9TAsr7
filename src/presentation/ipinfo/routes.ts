import {Router} from "express";
import {IpInfoController} from "./controller";

export class IpInfoRoutes {
    static get routes(): Router {
        const router = Router();
        const {getIpInfo} = new IpInfoController();
        router.post('/', getIpInfo);
        return router;
    }
}