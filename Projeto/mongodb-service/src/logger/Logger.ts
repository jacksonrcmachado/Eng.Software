// src/logger/Logger.ts
import * as fs from 'fs';
import * as path from 'path';

class Logger {
    private static instance: Logger;
    private logFilePath: string;

    private constructor() {
        this.logFilePath = path.join(__dirname, 'application.log');
    }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public log(message: string): void {
        const timestamp = new Date().toISOString();
        fs.appendFileSync(this.logFilePath, `${timestamp} - ${message}\n`);
    }
}

export default Logger;
