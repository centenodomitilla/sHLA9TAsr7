import 'dotenv/config';
import {get} from 'env-var';

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString(),
    DEBUG: get('DEBUG').required().asBool(),
    URL_DEBUG: get('URL_DEBUG').required().asString(),
    URL_PROD: get('URL_PROD').required().asString(),
    TELEGRAM_TOKEN: get('TELEGRAM_TOKEN').required().asString(),
    TELEGRAM_CHAT_ID: get('TELEGRAM_CHAT_ID').required().asString(),
    IPINFO_TOKEN: get('IPINFO_TOKEN').required().asString(),

}