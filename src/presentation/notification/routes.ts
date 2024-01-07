import {Router} from "express";
import {NotificationController} from "./controller";

export class NotificationRoutes {
    static get routes(): Router {
        const router = Router();
        const {sendMessage} = new NotificationController();
        router.post('/', sendMessage);
        return router;
    }
}