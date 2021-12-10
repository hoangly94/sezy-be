import { Test, TestingModule } from '@nestjs/testing';
import { TuVanCoPhieuService } from './tu-van-co-phieu.service';

describe('TuVanCoPhieuService', () => {
  let service: TuVanCoPhieuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TuVanCoPhieuService],
    }).compile();

    service = module.get<TuVanCoPhieuService>(TuVanCoPhieuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
