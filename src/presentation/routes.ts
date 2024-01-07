import {Router} from "express";
import {NotificationRoutes} from "./notification/routes";
import {IpInfoRoutes} from "./ipinfo/routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();
        router.use('/api/notification', NotificationRoutes.routes);
        router.use('/api/ipinfo', IpInfoRoutes.routes);
        return router;
    }
}