import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OperationDocument = Operation & Document;

@Schema()
export class Operation {
  @Prop() url: string;

  @Prop() shortened: string;

  @Prop() operationType: string;
}

export class OperationDocumentDto {
  url: string;
  shortened: string;
  operationType: string;

  constructor(url: string, shortened: string, operationType: string) {
    this.url = url;
    this.shortened = shortened;
    this.operationType = operationType;
  }
}

export const OperationSchema = SchemaFactory.createForClass(Operation);
