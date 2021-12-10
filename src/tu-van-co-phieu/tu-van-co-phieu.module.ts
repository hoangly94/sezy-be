import { Module } from '@nestjs/common';
import { TuVanCoPhieuService } from './tu-van-co-phieu.service';
import { TuVanCoPhieuController } from './tu-van-co-phieu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TuVanCoPhieu } from './entities/tu-van-co-phieu.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TuVanCoPhieu])],
  controllers: [TuVanCoPhieuController],
  providers: [TuVanCoPhieuService]
})
export class TuVanCoPhieuModule {}
