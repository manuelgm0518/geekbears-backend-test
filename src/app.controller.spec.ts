import { MongooseModule } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Operation, OperationSchema } from './operation.schema';


describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {

    const module = await Test.createTestingModule({
      imports: [
        // NASA security
        MongooseModule.forRoot(
          'mongodb+srv://el_sujeto:la_clave@shortener-cluster.ffmna.mongodb.net/url-shortener?retryWrites=true&w=majority',
        ),
        MongooseModule.forFeature([
          { name: Operation.name, schema: OperationSchema },
        ]),
      ],
      providers: [ AppService ],
    }).compile();
    appService = module.get(AppService);
    appController = new AppController(appService);
  });

  describe('decode', () => {
    it('should return the original url + shortened url', async () => {
      const result = {
          url: 'https://docs.nestjs.com/fundamentals/testing', 
          shortened: 'http://mgm.shrt/TbzThXVEG',
        } as Operation;
      
      jest.spyOn(appService, 'exists').mockResolvedValue(result);
      expect(appController.getDecoded('http://mgm.shrt/TbzThXVEG')).resolves.toEqual(result);
    });
  });

  describe('encode', () => {
    it('should return the original url + shortened url', async () => {
      const result = {
          url: 'https://docs.nestjs.com/fundamentals/testing', 
          shortened: 'http://mgm.shrt/TbzThXVEG',
        } as Operation;
      jest.spyOn(appService, 'exists').mockResolvedValue(result);
      expect(appController.getEncoded('https://docs.nestjs.com/fundamentals/testing')).resolves.toEqual(result);
    });
  });

});
