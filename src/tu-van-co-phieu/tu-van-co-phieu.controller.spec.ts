import { Test, TestingModule } from '@nestjs/testing';
import { TuVanCoPhieuController } from './tu-van-co-phieu.controller';
import { TuVanCoPhieuService } from './tu-van-co-phieu.service';

describe('TuVanCoPhieuController', () => {
  let controller: TuVanCoPhieuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TuVanCoPhieuController],
      providers: [TuVanCoPhieuService],
    }).compile();

    controller = module.get<TuVanCoPhieuController>(TuVanCoPhieuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
