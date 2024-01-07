import {Server} from './presentation/server';
import {envs} from "./config/envs";
import {AppRoutes} from "./presentation/routes";
import {AppCors} from "./config/cors";

(async () => {
    main();
})();

function main() {
    const server = new Server({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH,
        routes: AppRoutes.routes,
        cors: AppCors.corsOptions
    });
    server.start();
}