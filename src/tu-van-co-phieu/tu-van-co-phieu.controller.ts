import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TuVanCoPhieuService } from './tu-van-co-phieu.service';
import { CreateTuVanCoPhieuDto } from './dto/create-tu-van-co-phieu.dto';
import { UpdateTuVanCoPhieuDto } from './dto/update-tu-van-co-phieu.dto';
import { Crud } from '@nestjsx/crud';
import { TuVanCoPhieu } from './entities/tu-van-co-phieu.entity';

@Crud({
  model: {
      type: TuVanCoPhieu
  },
})
@Controller('tu-van-co-phieu')
export class TuVanCoPhieuController {
  constructor(private readonly tuVanCoPhieuService: TuVanCoPhieuService) {}
}
