import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TuVanCoPhieu } from './tu-van-co-phieu/entities/tu-van-co-phieu.entity';
import { TuVanCoPhieuModule } from './tu-van-co-phieu/tu-van-co-phieu.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'online',
      entities: [TuVanCoPhieu],
      synchronize: true,
      dropSchema: false,
      logging: true,
      logger: "file"
    }), TuVanCoPhieuModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
