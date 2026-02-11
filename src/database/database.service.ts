import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    private database: boolean = false;

    onModuleInit() {
        this.database = true;
        console.log(`Database connection opened`);
    }

    onApplicationShutdown(signal: string) {
        this.database = false;
        console.log(`Database connection closed due to ${signal}`);
    }
}
