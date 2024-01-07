import express, {Router} from 'express';
import cors from 'cors';

interface Options {
    port: number;
    routes: Router;
    public_path?: string;
    cors: cors.CorsOptions;
}

export class Server {
    private app = express();
    private readonly port: number;
    private readonly publicPath: string;
    private readonly routes: Router;
    private readonly cors: cors.CorsOptions;

    constructor(options: Options) {
        const { port, public_path= "public", routes, cors} = options;
        this.port = port;
        this.publicPath = public_path;
        this.routes = routes;
        this.cors = cors;
    }

    async start() {
        this.app.use(cors(this.cors));

        this.app.use(express.json());// raw json
        this.app.use(express.urlencoded({ extended: true }));// x-www-form-urlencoded

        this.app.use(express.static(this.publicPath));

        this.app.use(this.routes);

        this.app.get('*', (req, res) => {
            res.sendFile(`index.html`, { root: this.publicPath });
            return;
        });

        this.app.listen(this.port, () => {
            console.log(`Server running at http://localhost:${this.port}`);
        });
    }
}