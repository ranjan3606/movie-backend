import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const uri = configService.get<string>('MONGODB_URI');
        
        if (!uri) {
          throw new Error('MONGODB_URI environment variable is required');
        }
        
        return {
          uri,
          // Connection options for production stability
          serverSelectionTimeoutMS: 10000, // 10 seconds timeout
          socketTimeoutMS: 45000,
          retryWrites: true,
          w: 'majority',
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {} 