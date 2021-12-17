import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Operation, OperationSchema } from './operation.schema';

@Module({
  imports: [
    // NASA security
    MongooseModule.forRoot(
      'mongodb+srv://el_sujeto:la_clave@shortener-cluster.ffmna.mongodb.net/url-shortener?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([
      { name: Operation.name, schema: OperationSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
