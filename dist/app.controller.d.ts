import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getEncoded(url: string): Promise<{
        url: string;
        shortened: string;
        message?: undefined;
    } | {
        message: string;
        url?: undefined;
        shortened?: undefined;
    }>;
    getDecoded(url: string): Promise<{
        url: string;
        shortened: string;
        message?: undefined;
    } | {
        message: string;
        url?: undefined;
        shortened?: undefined;
    }>;
}
