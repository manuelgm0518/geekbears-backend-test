import { Document } from 'mongoose';
export declare type OperationDocument = Operation & Document;
export declare class Operation {
    url: string;
    shortened: string;
    operationType: string;
}
export declare class OperationDocumentDto {
    url: string;
    shortened: string;
    operationType: string;
    constructor(url: string, shortened: string, operationType: string);
}
export declare const OperationSchema: import("mongoose").Schema<Document<Operation, any, any>, import("mongoose").Model<Document<Operation, any, any>, any, any, any>, any>;
