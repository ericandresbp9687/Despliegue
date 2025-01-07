import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import db from '../db/connection';
import routesProducto from '../routes/product';
import routesBrand from '../routes/brand';
import routesCategory from '../routes/category';
import routesSize from '../routes/size';
import routesCustomer from '../routes/customer';
import routesOrder from '../routes/order';
import routesOrderDetail from '../routes/order_detail';


class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API Working'
            })
        })
        this.app.use('/api/products', routesProducto)
        this.app.use('/api/brands', routesBrand)
        this.app.use('/api/categories', routesCategory)
        this.app.use('/api/sizes', routesSize)
        this.app.use('/api/customers', routesCustomer)
        this.app.use('/api/orders', routesOrder)
        this.app.use('/api/order-details', routesOrderDetail)
    }

    midlewares() {

        // Parseamos el body
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {

        try {
            await db.authenticate();
            console.log('Base de datos conectada')
        } catch (error) {
            console.log(error);
            console.log('Error al conectarse a la base de datos')
        }

       
    }


}

export default Server;