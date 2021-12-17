import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Operation,
  OperationDocument,
  OperationDocumentDto
} from './operation.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Operation.name)
    private operationModel: Model<OperationDocument>,
  ) {}

  async exists(url: string): Promise<Operation | undefined> {
    let long = await this.operationModel.findOne({ url: url });
    if (long != null) return long;
    let short = await this.operationModel.findOne({ shortened: url });
    if (short != null) return short;
  }

  async createOperation(operation: OperationDocumentDto): Promise<Operation> {
    return await this.operationModel.create(operation);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
