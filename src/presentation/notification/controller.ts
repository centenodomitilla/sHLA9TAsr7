import { Request, Response } from "express";
import {Telegram} from "../../config/telegram";

export class NotificationController {
    public sendMessage = async (req: Request, res: Response) => {
        const {text:message} = req.body;

        if (!message) return res.status(400).json({ error: "Text property is required." });

        const {sendMessage} = new Telegram(message);
        const response = await sendMessage();

        if (!response.ok && response.error_code) return res.status(response.error_code).json({ error: `${response.description}` });

        res.json(response);
    }
}