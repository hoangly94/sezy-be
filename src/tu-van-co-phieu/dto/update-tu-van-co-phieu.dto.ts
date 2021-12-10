import { PartialType } from '@nestjs/mapped-types';
import { CreateTuVanCoPhieuDto } from './create-tu-van-co-phieu.dto';

export class UpdateTuVanCoPhieuDto extends PartialType(CreateTuVanCoPhieuDto) {}
