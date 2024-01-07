import {envs} from "./envs";
import {CorsOptions} from "cors";
export class AppCors {
    static get corsOptions(): CorsOptions {
        return {
            origin: envs.DEBUG ? envs.URL_DEBUG : envs.URL_PROD,
            methods: 'GET,POST,PUT,DELETE'
        };
    }
}
