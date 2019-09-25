import * as jspb from "google-protobuf"

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class ReadDirRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getRecursive(): boolean;
  setRecursive(value: boolean): void;

  getThumnailwidth(): number;
  setThumnailwidth(value: number): void;

  getThumnailheight(): number;
  setThumnailheight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadDirRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadDirRequest): ReadDirRequest.AsObject;
  static serializeBinaryToWriter(message: ReadDirRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadDirRequest;
  static deserializeBinaryFromReader(message: ReadDirRequest, reader: jspb.BinaryReader): ReadDirRequest;
}

export namespace ReadDirRequest {
  export type AsObject = {
    path: string,
    recursive: boolean,
    thumnailwidth: number,
    thumnailheight: number,
  }
}

export class ReadDirResponse extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadDirResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadDirResponse): ReadDirResponse.AsObject;
  static serializeBinaryToWriter(message: ReadDirResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadDirResponse;
  static deserializeBinaryFromReader(message: ReadDirResponse, reader: jspb.BinaryReader): ReadDirResponse;
}

export namespace ReadDirResponse {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

export class CreateDirRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDirRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDirRequest): CreateDirRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDirRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDirRequest;
  static deserializeBinaryFromReader(message: CreateDirRequest, reader: jspb.BinaryReader): CreateDirRequest;
}

export namespace CreateDirRequest {
  export type AsObject = {
    path: string,
    name: string,
  }
}

export class CreateDirResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDirResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDirResponse): CreateDirResponse.AsObject;
  static serializeBinaryToWriter(message: CreateDirResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDirResponse;
  static deserializeBinaryFromReader(message: CreateDirResponse, reader: jspb.BinaryReader): CreateDirResponse;
}

export namespace CreateDirResponse {
  export type AsObject = {
    result: boolean,
  }
}

export class DeleteDirRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDirRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDirRequest): DeleteDirRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDirRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDirRequest;
  static deserializeBinaryFromReader(message: DeleteDirRequest, reader: jspb.BinaryReader): DeleteDirRequest;
}

export namespace DeleteDirRequest {
  export type AsObject = {
    path: string,
  }
}

export class DeleteDirResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDirResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDirResponse): DeleteDirResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteDirResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDirResponse;
  static deserializeBinaryFromReader(message: DeleteDirResponse, reader: jspb.BinaryReader): DeleteDirResponse;
}

export namespace DeleteDirResponse {
  export type AsObject = {
    result: boolean,
  }
}

export class RenameRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getNewName(): string;
  setNewName(value: string): void;

  getOldName(): string;
  setOldName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RenameRequest): RenameRequest.AsObject;
  static serializeBinaryToWriter(message: RenameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameRequest;
  static deserializeBinaryFromReader(message: RenameRequest, reader: jspb.BinaryReader): RenameRequest;
}

export namespace RenameRequest {
  export type AsObject = {
    path: string,
    newName: string,
    oldName: string,
  }
}

export class RenameResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RenameResponse): RenameResponse.AsObject;
  static serializeBinaryToWriter(message: RenameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameResponse;
  static deserializeBinaryFromReader(message: RenameResponse, reader: jspb.BinaryReader): RenameResponse;
}

export namespace RenameResponse {
  export type AsObject = {
    result: boolean,
  }
}

export class GetFileInfoRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getThumnailwidth(): number;
  setThumnailwidth(value: number): void;

  getThumnailheight(): number;
  setThumnailheight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileInfoRequest): GetFileInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetFileInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileInfoRequest;
  static deserializeBinaryFromReader(message: GetFileInfoRequest, reader: jspb.BinaryReader): GetFileInfoRequest;
}

export namespace GetFileInfoRequest {
  export type AsObject = {
    path: string,
    thumnailwidth: number,
    thumnailheight: number,
  }
}

export class GetFileInfoResponse extends jspb.Message {
  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileInfoResponse): GetFileInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetFileInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileInfoResponse;
  static deserializeBinaryFromReader(message: GetFileInfoResponse, reader: jspb.BinaryReader): GetFileInfoResponse;
}

export namespace GetFileInfoResponse {
  export type AsObject = {
    data: string,
  }
}

export class ReadFileRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadFileRequest): ReadFileRequest.AsObject;
  static serializeBinaryToWriter(message: ReadFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadFileRequest;
  static deserializeBinaryFromReader(message: ReadFileRequest, reader: jspb.BinaryReader): ReadFileRequest;
}

export namespace ReadFileRequest {
  export type AsObject = {
    path: string,
  }
}

export class ReadFileResponse extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadFileResponse): ReadFileResponse.AsObject;
  static serializeBinaryToWriter(message: ReadFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadFileResponse;
  static deserializeBinaryFromReader(message: ReadFileResponse, reader: jspb.BinaryReader): ReadFileResponse;
}

export namespace ReadFileResponse {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

export class SaveFileRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;
  hasPath(): boolean;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;
  hasData(): boolean;

  getFileCase(): SaveFileRequest.FileCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveFileRequest): SaveFileRequest.AsObject;
  static serializeBinaryToWriter(message: SaveFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveFileRequest;
  static deserializeBinaryFromReader(message: SaveFileRequest, reader: jspb.BinaryReader): SaveFileRequest;
}

export namespace SaveFileRequest {
  export type AsObject = {
    path: string,
    data: Uint8Array | string,
  }

  export enum FileCase { 
    FILE_NOT_SET = 0,
    PATH = 1,
    DATA = 2,
  }
}

export class SaveFileResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SaveFileResponse): SaveFileResponse.AsObject;
  static serializeBinaryToWriter(message: SaveFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveFileResponse;
  static deserializeBinaryFromReader(message: SaveFileResponse, reader: jspb.BinaryReader): SaveFileResponse;
}

export namespace SaveFileResponse {
  export type AsObject = {
    result: boolean,
  }
}

export class DeleteFileRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFileRequest): DeleteFileRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFileRequest;
  static deserializeBinaryFromReader(message: DeleteFileRequest, reader: jspb.BinaryReader): DeleteFileRequest;
}

export namespace DeleteFileRequest {
  export type AsObject = {
    path: string,
  }
}

export class DeleteFileResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFileResponse): DeleteFileResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFileResponse;
  static deserializeBinaryFromReader(message: DeleteFileResponse, reader: jspb.BinaryReader): DeleteFileResponse;
}

export namespace DeleteFileResponse {
  export type AsObject = {
    result: boolean,
  }
}

export class GetThumbnailsRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getRecursive(): boolean;
  setRecursive(value: boolean): void;

  getThumnailwidth(): number;
  setThumnailwidth(value: number): void;

  getThumnailheight(): number;
  setThumnailheight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetThumbnailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetThumbnailsRequest): GetThumbnailsRequest.AsObject;
  static serializeBinaryToWriter(message: GetThumbnailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetThumbnailsRequest;
  static deserializeBinaryFromReader(message: GetThumbnailsRequest, reader: jspb.BinaryReader): GetThumbnailsRequest;
}

export namespace GetThumbnailsRequest {
  export type AsObject = {
    path: string,
    recursive: boolean,
    thumnailwidth: number,
    thumnailheight: number,
  }
}

export class GetThumbnailsResponse extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetThumbnailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetThumbnailsResponse): GetThumbnailsResponse.AsObject;
  static serializeBinaryToWriter(message: GetThumbnailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetThumbnailsResponse;
  static deserializeBinaryFromReader(message: GetThumbnailsResponse, reader: jspb.BinaryReader): GetThumbnailsResponse;
}

export namespace GetThumbnailsResponse {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

export class WriteExcelFileRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteExcelFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WriteExcelFileRequest): WriteExcelFileRequest.AsObject;
  static serializeBinaryToWriter(message: WriteExcelFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteExcelFileRequest;
  static deserializeBinaryFromReader(message: WriteExcelFileRequest, reader: jspb.BinaryReader): WriteExcelFileRequest;
}

export namespace WriteExcelFileRequest {
  export type AsObject = {
    path: string,
    data: string,
  }
}

export class WriteExcelFileResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WriteExcelFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WriteExcelFileResponse): WriteExcelFileResponse.AsObject;
  static serializeBinaryToWriter(message: WriteExcelFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WriteExcelFileResponse;
  static deserializeBinaryFromReader(message: WriteExcelFileResponse, reader: jspb.BinaryReader): WriteExcelFileResponse;
}

export namespace WriteExcelFileResponse {
  export type AsObject = {
    result: boolean,
  }
}
