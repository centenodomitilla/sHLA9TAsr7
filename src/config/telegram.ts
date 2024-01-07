import {envs} from "./envs";

export class Telegram {

    /*message*/
    private message: string;
    private token: string;
    private chatId: string;
    constructor(message: string) {
        this.message = message;
        this.token = envs.TELEGRAM_TOKEN;
        this.chatId = envs.TELEGRAM_CHAT_ID;
    }

    protected sendMessageUrl(): string {
        return `https://api.telegram.org/bot${this.token}/sendMessage`;
    }

    private sendMessageParams = () => ({
        chat_id: this.chatId,
        text: this.message,
        parse_mode: 'HTML'
    });

    private sendMessageOptions(): any {
        return {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.sendMessageParams())
        };
    }

    public sendMessage = async () => {
        try {
            const response = await fetch(this.sendMessageUrl(), this.sendMessageOptions());
            const data = await response.json();
            if (data.ok) return "Message sent";
            if (!data.ok) return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}