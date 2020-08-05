import * as jspb from "google-protobuf"

export class GetVersionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVersionRequest): GetVersionRequest.AsObject;
  static serializeBinaryToWriter(message: GetVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVersionRequest;
  static deserializeBinaryFromReader(message: GetVersionRequest, reader: jspb.BinaryReader): GetVersionRequest;
}

export namespace GetVersionRequest {
  export type AsObject = {
  }
}

export class GetVersionResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVersionResponse): GetVersionResponse.AsObject;
  static serializeBinaryToWriter(message: GetVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVersionResponse;
  static deserializeBinaryFromReader(message: GetVersionResponse, reader: jspb.BinaryReader): GetVersionResponse;
}

export namespace GetVersionResponse {
  export type AsObject = {
    message: string,
  }
}

export class IndexJsonObjectRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getJsonstr(): string;
  setJsonstr(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getId(): string;
  setId(value: string): void;

  getIndexsList(): Array<string>;
  setIndexsList(value: Array<string>): void;
  clearIndexsList(): void;
  addIndexs(value: string, index?: number): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexJsonObjectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IndexJsonObjectRequest): IndexJsonObjectRequest.AsObject;
  static serializeBinaryToWriter(message: IndexJsonObjectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexJsonObjectRequest;
  static deserializeBinaryFromReader(message: IndexJsonObjectRequest, reader: jspb.BinaryReader): IndexJsonObjectRequest;
}

export namespace IndexJsonObjectRequest {
  export type AsObject = {
    path: string,
    jsonstr: string,
    language: string,
    id: string,
    indexsList: Array<string>,
    data: string,
  }
}

export class IndexJsonObjectResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexJsonObjectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IndexJsonObjectResponse): IndexJsonObjectResponse.AsObject;
  static serializeBinaryToWriter(message: IndexJsonObjectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexJsonObjectResponse;
  static deserializeBinaryFromReader(message: IndexJsonObjectResponse, reader: jspb.BinaryReader): IndexJsonObjectResponse;
}

export namespace IndexJsonObjectResponse {
  export type AsObject = {
  }
}

export class IndexFileRequest extends jspb.Message {
  getDbpath(): string;
  setDbpath(value: string): void;

  getFilepath(): string;
  setFilepath(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IndexFileRequest): IndexFileRequest.AsObject;
  static serializeBinaryToWriter(message: IndexFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexFileRequest;
  static deserializeBinaryFromReader(message: IndexFileRequest, reader: jspb.BinaryReader): IndexFileRequest;
}

export namespace IndexFileRequest {
  export type AsObject = {
    dbpath: string,
    filepath: string,
    language: string,
  }
}

export class IndexFileResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IndexFileResponse): IndexFileResponse.AsObject;
  static serializeBinaryToWriter(message: IndexFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexFileResponse;
  static deserializeBinaryFromReader(message: IndexFileResponse, reader: jspb.BinaryReader): IndexFileResponse;
}

export namespace IndexFileResponse {
  export type AsObject = {
  }
}

export class IndexDirRequest extends jspb.Message {
  getDbpath(): string;
  setDbpath(value: string): void;

  getDirpath(): string;
  setDirpath(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexDirRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IndexDirRequest): IndexDirRequest.AsObject;
  static serializeBinaryToWriter(message: IndexDirRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexDirRequest;
  static deserializeBinaryFromReader(message: IndexDirRequest, reader: jspb.BinaryReader): IndexDirRequest;
}

export namespace IndexDirRequest {
  export type AsObject = {
    dbpath: string,
    dirpath: string,
    language: string,
  }
}

export class IndexDirResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexDirResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IndexDirResponse): IndexDirResponse.AsObject;
  static serializeBinaryToWriter(message: IndexDirResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexDirResponse;
  static deserializeBinaryFromReader(message: IndexDirResponse, reader: jspb.BinaryReader): IndexDirResponse;
}

export namespace IndexDirResponse {
  export type AsObject = {
  }
}

export class DeleteDocumentRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDocumentRequest): DeleteDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDocumentRequest;
  static deserializeBinaryFromReader(message: DeleteDocumentRequest, reader: jspb.BinaryReader): DeleteDocumentRequest;
}

export namespace DeleteDocumentRequest {
  export type AsObject = {
    path: string,
    id: string,
  }
}

export class DeleteDocumentResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDocumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDocumentResponse): DeleteDocumentResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteDocumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDocumentResponse;
  static deserializeBinaryFromReader(message: DeleteDocumentResponse, reader: jspb.BinaryReader): DeleteDocumentResponse;
}

export namespace DeleteDocumentResponse {
  export type AsObject = {
  }
}

export class CountRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CountRequest): CountRequest.AsObject;
  static serializeBinaryToWriter(message: CountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountRequest;
  static deserializeBinaryFromReader(message: CountRequest, reader: jspb.BinaryReader): CountRequest;
}

export namespace CountRequest {
  export type AsObject = {
    path: string,
  }
}

export class CountResponse extends jspb.Message {
  getResult(): number;
  setResult(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountResponse): CountResponse.AsObject;
  static serializeBinaryToWriter(message: CountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountResponse;
  static deserializeBinaryFromReader(message: CountResponse, reader: jspb.BinaryReader): CountResponse;
}

export namespace CountResponse {
  export type AsObject = {
    result: number,
  }
}

export class SearchResult extends jspb.Message {
  getRank(): number;
  setRank(value: number): void;

  getDocid(): string;
  setDocid(value: string): void;

  getData(): string;
  setData(value: string): void;

  getSnippetsList(): Array<string>;
  setSnippetsList(value: Array<string>): void;
  clearSnippetsList(): void;
  addSnippets(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchResult.AsObject;
  static toObject(includeInstance: boolean, msg: SearchResult): SearchResult.AsObject;
  static serializeBinaryToWriter(message: SearchResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchResult;
  static deserializeBinaryFromReader(message: SearchResult, reader: jspb.BinaryReader): SearchResult;
}

export namespace SearchResult {
  export type AsObject = {
    rank: number,
    docid: string,
    data: string,
    snippetsList: Array<string>,
  }
}

export class SearchDocumentsRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getQuery(): string;
  setQuery(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getFieldsList(): Array<string>;
  setFieldsList(value: Array<string>): void;
  clearFieldsList(): void;
  addFields(value: string, index?: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getPagesize(): number;
  setPagesize(value: number): void;

  getSnippetlength(): number;
  setSnippetlength(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchDocumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchDocumentsRequest): SearchDocumentsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchDocumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchDocumentsRequest;
  static deserializeBinaryFromReader(message: SearchDocumentsRequest, reader: jspb.BinaryReader): SearchDocumentsRequest;
}

export namespace SearchDocumentsRequest {
  export type AsObject = {
    path: string,
    query: string,
    language: string,
    fieldsList: Array<string>,
    offset: number,
    pagesize: number,
    snippetlength: number,
  }
}

export class SearchDocumentsResponse extends jspb.Message {
  getResultsList(): Array<SearchResult>;
  setResultsList(value: Array<SearchResult>): void;
  clearResultsList(): void;
  addResults(value?: SearchResult, index?: number): SearchResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchDocumentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchDocumentsResponse): SearchDocumentsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchDocumentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchDocumentsResponse;
  static deserializeBinaryFromReader(message: SearchDocumentsResponse, reader: jspb.BinaryReader): SearchDocumentsResponse;
}

export namespace SearchDocumentsResponse {
  export type AsObject = {
    resultsList: Array<SearchResult.AsObject>,
  }
}

export enum EngineType { 
  XAPIAN = 0,
}
