import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { EntityRepository, Repository } from 'typeorm';
import { CreateTuVanCoPhieuDto } from './dto/create-tu-van-co-phieu.dto';
import { UpdateTuVanCoPhieuDto } from './dto/update-tu-van-co-phieu.dto';
import { TuVanCoPhieu } from './entities/tu-van-co-phieu.entity';

@Injectable()
export class TuVanCoPhieuService extends TypeOrmCrudService<TuVanCoPhieu> {
  // constructor(
  //     @InjectRepository(TuVanCoPhieu)
  //     private repo: Repository<TuVanCoPhieu>
  // ){}
  
  constructor (@InjectRepository(TuVanCoPhieu) repo) {
    super(repo)
}
  // create(createTuVanCoPhieuDto: CreateTuVanCoPhieuDto) {
  //   return this.save(book);
  // }

  // findAll(): Promise<TuVanCoPhieu[]> {
  //     return this.bookRepository.find();
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} tuVanCoPhieu`;
  // }

  // update(id: number, updateTuVanCoPhieuDto: UpdateTuVanCoPhieuDto) {
  //   return `This action updates a #${id} tuVanCoPhieu`;
  // }

  // remove(id: number) {
  // }
}
