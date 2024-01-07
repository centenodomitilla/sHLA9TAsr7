import { Request, Response } from "express";
import {IpInfo} from "../../config/ipinfo";
export class IpInfoController {
    public getIpInfo = async (req: Request, res: Response) => {
        const {ip} = req.body;

        if (!ip) return res.status(400).json({ error: "IP property is required." });
        const {getInfo} = new IpInfo(ip);
        const response = await getInfo();

        res.json(response);
    }
}