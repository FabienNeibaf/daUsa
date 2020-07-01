import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client/build'),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST', 'localhost'),
        port: configService.get<number>('DATABASE_PORT', 5432),
        username: configService.get('DATABASE_USER', 'postgres'),
        password: configService.get('DATABASE_PASS', 'postgres'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
