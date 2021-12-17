import { Model } from 'mongoose';
import { Operation, OperationDocument, OperationDocumentDto } from './operation.schema';
export declare class AppService {
    private operationModel;
    constructor(operationModel: Model<OperationDocument>);
    exists(url: string): Promise<Operation | undefined>;
    createOperation(operation: OperationDocumentDto): Promise<Operation>;
    getHello(): string;
}
