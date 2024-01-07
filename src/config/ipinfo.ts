import axios from "axios";
import {envs} from "./envs";

export class IpInfo {
    private ip: string;
    private result: any;
    constructor(ip: string) {
        this.ip = ip;
    }

    public getInfo = async () => {
        const response = await axios.get(`https://ipinfo.io/${this.ip}?token=${envs.IPINFO_TOKEN}`);
        return response.data;
    }
}