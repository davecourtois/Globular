import * as jspb from 'google-protobuf'



export class Account extends jspb.Message {
  getId(): string;
  setId(value: string): Account;

  getName(): string;
  setName(value: string): Account;

  getEmail(): string;
  setEmail(value: string): Account;

  getPassword(): string;
  setPassword(value: string): Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    id: string,
    name: string,
    email: string,
    password: string,
  }
}

export class Role extends jspb.Message {
  getId(): string;
  setId(value: string): Role;

  getName(): string;
  setName(value: string): Role;

  getActionsList(): Array<string>;
  setActionsList(value: Array<string>): Role;
  clearActionsList(): Role;
  addActions(value: string, index?: number): Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Role.AsObject;
  static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
  static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Role;
  static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
  export type AsObject = {
    id: string,
    name: string,
    actionsList: Array<string>,
  }
}

export class RegisterAccountRqst extends jspb.Message {
  getAccount(): Account | undefined;
  setAccount(value?: Account): RegisterAccountRqst;
  hasAccount(): boolean;
  clearAccount(): RegisterAccountRqst;

  getPassword(): string;
  setPassword(value: string): RegisterAccountRqst;

  getConfirmPassword(): string;
  setConfirmPassword(value: string): RegisterAccountRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterAccountRqst.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterAccountRqst): RegisterAccountRqst.AsObject;
  static serializeBinaryToWriter(message: RegisterAccountRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterAccountRqst;
  static deserializeBinaryFromReader(message: RegisterAccountRqst, reader: jspb.BinaryReader): RegisterAccountRqst;
}

export namespace RegisterAccountRqst {
  export type AsObject = {
    account?: Account.AsObject,
    password: string,
    confirmPassword: string,
  }
}

export class RegisterAccountRsp extends jspb.Message {
  getResult(): string;
  setResult(value: string): RegisterAccountRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterAccountRsp.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterAccountRsp): RegisterAccountRsp.AsObject;
  static serializeBinaryToWriter(message: RegisterAccountRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterAccountRsp;
  static deserializeBinaryFromReader(message: RegisterAccountRsp, reader: jspb.BinaryReader): RegisterAccountRsp;
}

export namespace RegisterAccountRsp {
  export type AsObject = {
    result: string,
  }
}

export class DeleteAccountRqst extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteAccountRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAccountRqst.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAccountRqst): DeleteAccountRqst.AsObject;
  static serializeBinaryToWriter(message: DeleteAccountRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAccountRqst;
  static deserializeBinaryFromReader(message: DeleteAccountRqst, reader: jspb.BinaryReader): DeleteAccountRqst;
}

export namespace DeleteAccountRqst {
  export type AsObject = {
    id: string,
  }
}

export class DeleteAccountRsp extends jspb.Message {
  getResult(): string;
  setResult(value: string): DeleteAccountRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAccountRsp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAccountRsp): DeleteAccountRsp.AsObject;
  static serializeBinaryToWriter(message: DeleteAccountRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAccountRsp;
  static deserializeBinaryFromReader(message: DeleteAccountRsp, reader: jspb.BinaryReader): DeleteAccountRsp;
}

export namespace DeleteAccountRsp {
  export type AsObject = {
    result: string,
  }
}

export class AuthenticateRqst extends jspb.Message {
  getName(): string;
  setName(value: string): AuthenticateRqst;

  getPassword(): string;
  setPassword(value: string): AuthenticateRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticateRqst.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticateRqst): AuthenticateRqst.AsObject;
  static serializeBinaryToWriter(message: AuthenticateRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticateRqst;
  static deserializeBinaryFromReader(message: AuthenticateRqst, reader: jspb.BinaryReader): AuthenticateRqst;
}

export namespace AuthenticateRqst {
  export type AsObject = {
    name: string,
    password: string,
  }
}

export class AuthenticateRsp extends jspb.Message {
  getToken(): string;
  setToken(value: string): AuthenticateRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticateRsp.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticateRsp): AuthenticateRsp.AsObject;
  static serializeBinaryToWriter(message: AuthenticateRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticateRsp;
  static deserializeBinaryFromReader(message: AuthenticateRsp, reader: jspb.BinaryReader): AuthenticateRsp;
}

export namespace AuthenticateRsp {
  export type AsObject = {
    token: string,
  }
}

export class RefreshTokenRqst extends jspb.Message {
  getToken(): string;
  setToken(value: string): RefreshTokenRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshTokenRqst.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshTokenRqst): RefreshTokenRqst.AsObject;
  static serializeBinaryToWriter(message: RefreshTokenRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshTokenRqst;
  static deserializeBinaryFromReader(message: RefreshTokenRqst, reader: jspb.BinaryReader): RefreshTokenRqst;
}

export namespace RefreshTokenRqst {
  export type AsObject = {
    token: string,
  }
}

export class RefreshTokenRsp extends jspb.Message {
  getToken(): string;
  setToken(value: string): RefreshTokenRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshTokenRsp.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshTokenRsp): RefreshTokenRsp.AsObject;
  static serializeBinaryToWriter(message: RefreshTokenRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshTokenRsp;
  static deserializeBinaryFromReader(message: RefreshTokenRsp, reader: jspb.BinaryReader): RefreshTokenRsp;
}

export namespace RefreshTokenRsp {
  export type AsObject = {
    token: string,
  }
}

export class AddAccountRoleRqst extends jspb.Message {
  getAccountid(): string;
  setAccountid(value: string): AddAccountRoleRqst;

  getRoleid(): string;
  setRoleid(value: string): AddAccountRoleRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddAccountRoleRqst.AsObject;
  static toObject(includeInstance: boolean, msg: AddAccountRoleRqst): AddAccountRoleRqst.AsObject;
  static serializeBinaryToWriter(message: AddAccountRoleRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddAccountRoleRqst;
  static deserializeBinaryFromReader(message: AddAccountRoleRqst, reader: jspb.BinaryReader): AddAccountRoleRqst;
}

export namespace AddAccountRoleRqst {
  export type AsObject = {
    accountid: string,
    roleid: string,
  }
}

export class AddAccountRoleRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): AddAccountRoleRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddAccountRoleRsp.AsObject;
  static toObject(includeInstance: boolean, msg: AddAccountRoleRsp): AddAccountRoleRsp.AsObject;
  static serializeBinaryToWriter(message: AddAccountRoleRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddAccountRoleRsp;
  static deserializeBinaryFromReader(message: AddAccountRoleRsp, reader: jspb.BinaryReader): AddAccountRoleRsp;
}

export namespace AddAccountRoleRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class RemoveAccountRoleRqst extends jspb.Message {
  getAccountid(): string;
  setAccountid(value: string): RemoveAccountRoleRqst;

  getRoleid(): string;
  setRoleid(value: string): RemoveAccountRoleRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveAccountRoleRqst.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveAccountRoleRqst): RemoveAccountRoleRqst.AsObject;
  static serializeBinaryToWriter(message: RemoveAccountRoleRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveAccountRoleRqst;
  static deserializeBinaryFromReader(message: RemoveAccountRoleRqst, reader: jspb.BinaryReader): RemoveAccountRoleRqst;
}

export namespace RemoveAccountRoleRqst {
  export type AsObject = {
    accountid: string,
    roleid: string,
  }
}

export class RemoveAccountRoleRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): RemoveAccountRoleRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveAccountRoleRsp.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveAccountRoleRsp): RemoveAccountRoleRsp.AsObject;
  static serializeBinaryToWriter(message: RemoveAccountRoleRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveAccountRoleRsp;
  static deserializeBinaryFromReader(message: RemoveAccountRoleRsp, reader: jspb.BinaryReader): RemoveAccountRoleRsp;
}

export namespace RemoveAccountRoleRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class CreateRoleRqst extends jspb.Message {
  getRole(): Role | undefined;
  setRole(value?: Role): CreateRoleRqst;
  hasRole(): boolean;
  clearRole(): CreateRoleRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoleRqst.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoleRqst): CreateRoleRqst.AsObject;
  static serializeBinaryToWriter(message: CreateRoleRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoleRqst;
  static deserializeBinaryFromReader(message: CreateRoleRqst, reader: jspb.BinaryReader): CreateRoleRqst;
}

export namespace CreateRoleRqst {
  export type AsObject = {
    role?: Role.AsObject,
  }
}

export class CreateRoleRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): CreateRoleRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoleRsp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoleRsp): CreateRoleRsp.AsObject;
  static serializeBinaryToWriter(message: CreateRoleRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoleRsp;
  static deserializeBinaryFromReader(message: CreateRoleRsp, reader: jspb.BinaryReader): CreateRoleRsp;
}

export namespace CreateRoleRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class DeleteRoleRqst extends jspb.Message {
  getRoleid(): string;
  setRoleid(value: string): DeleteRoleRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoleRqst.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoleRqst): DeleteRoleRqst.AsObject;
  static serializeBinaryToWriter(message: DeleteRoleRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoleRqst;
  static deserializeBinaryFromReader(message: DeleteRoleRqst, reader: jspb.BinaryReader): DeleteRoleRqst;
}

export namespace DeleteRoleRqst {
  export type AsObject = {
    roleid: string,
  }
}

export class DeleteRoleRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): DeleteRoleRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoleRsp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoleRsp): DeleteRoleRsp.AsObject;
  static serializeBinaryToWriter(message: DeleteRoleRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoleRsp;
  static deserializeBinaryFromReader(message: DeleteRoleRsp, reader: jspb.BinaryReader): DeleteRoleRsp;
}

export namespace DeleteRoleRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class AddRoleActionRqst extends jspb.Message {
  getRoleid(): string;
  setRoleid(value: string): AddRoleActionRqst;

  getAction(): string;
  setAction(value: string): AddRoleActionRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRoleActionRqst.AsObject;
  static toObject(includeInstance: boolean, msg: AddRoleActionRqst): AddRoleActionRqst.AsObject;
  static serializeBinaryToWriter(message: AddRoleActionRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRoleActionRqst;
  static deserializeBinaryFromReader(message: AddRoleActionRqst, reader: jspb.BinaryReader): AddRoleActionRqst;
}

export namespace AddRoleActionRqst {
  export type AsObject = {
    roleid: string,
    action: string,
  }
}

export class AddRoleActionRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): AddRoleActionRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRoleActionRsp.AsObject;
  static toObject(includeInstance: boolean, msg: AddRoleActionRsp): AddRoleActionRsp.AsObject;
  static serializeBinaryToWriter(message: AddRoleActionRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRoleActionRsp;
  static deserializeBinaryFromReader(message: AddRoleActionRsp, reader: jspb.BinaryReader): AddRoleActionRsp;
}

export namespace AddRoleActionRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class RemoveRoleActionRqst extends jspb.Message {
  getRoleid(): string;
  setRoleid(value: string): RemoveRoleActionRqst;

  getAction(): string;
  setAction(value: string): RemoveRoleActionRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRoleActionRqst.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRoleActionRqst): RemoveRoleActionRqst.AsObject;
  static serializeBinaryToWriter(message: RemoveRoleActionRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRoleActionRqst;
  static deserializeBinaryFromReader(message: RemoveRoleActionRqst, reader: jspb.BinaryReader): RemoveRoleActionRqst;
}

export namespace RemoveRoleActionRqst {
  export type AsObject = {
    roleid: string,
    action: string,
  }
}

export class RemoveRoleActionRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): RemoveRoleActionRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRoleActionRsp.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRoleActionRsp): RemoveRoleActionRsp.AsObject;
  static serializeBinaryToWriter(message: RemoveRoleActionRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRoleActionRsp;
  static deserializeBinaryFromReader(message: RemoveRoleActionRsp, reader: jspb.BinaryReader): RemoveRoleActionRsp;
}

export namespace RemoveRoleActionRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class AddApplicationActionRqst extends jspb.Message {
  getApplicationid(): string;
  setApplicationid(value: string): AddApplicationActionRqst;

  getAction(): string;
  setAction(value: string): AddApplicationActionRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddApplicationActionRqst.AsObject;
  static toObject(includeInstance: boolean, msg: AddApplicationActionRqst): AddApplicationActionRqst.AsObject;
  static serializeBinaryToWriter(message: AddApplicationActionRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddApplicationActionRqst;
  static deserializeBinaryFromReader(message: AddApplicationActionRqst, reader: jspb.BinaryReader): AddApplicationActionRqst;
}

export namespace AddApplicationActionRqst {
  export type AsObject = {
    applicationid: string,
    action: string,
  }
}

export class AddApplicationActionRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): AddApplicationActionRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddApplicationActionRsp.AsObject;
  static toObject(includeInstance: boolean, msg: AddApplicationActionRsp): AddApplicationActionRsp.AsObject;
  static serializeBinaryToWriter(message: AddApplicationActionRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddApplicationActionRsp;
  static deserializeBinaryFromReader(message: AddApplicationActionRsp, reader: jspb.BinaryReader): AddApplicationActionRsp;
}

export namespace AddApplicationActionRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class RemoveApplicationActionRqst extends jspb.Message {
  getApplicationid(): string;
  setApplicationid(value: string): RemoveApplicationActionRqst;

  getAction(): string;
  setAction(value: string): RemoveApplicationActionRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveApplicationActionRqst.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveApplicationActionRqst): RemoveApplicationActionRqst.AsObject;
  static serializeBinaryToWriter(message: RemoveApplicationActionRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveApplicationActionRqst;
  static deserializeBinaryFromReader(message: RemoveApplicationActionRqst, reader: jspb.BinaryReader): RemoveApplicationActionRqst;
}

export namespace RemoveApplicationActionRqst {
  export type AsObject = {
    applicationid: string,
    action: string,
  }
}

export class RemoveApplicationActionRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): RemoveApplicationActionRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveApplicationActionRsp.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveApplicationActionRsp): RemoveApplicationActionRsp.AsObject;
  static serializeBinaryToWriter(message: RemoveApplicationActionRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveApplicationActionRsp;
  static deserializeBinaryFromReader(message: RemoveApplicationActionRsp, reader: jspb.BinaryReader): RemoveApplicationActionRsp;
}

export namespace RemoveApplicationActionRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class GetAllActionsRqst extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllActionsRqst.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllActionsRqst): GetAllActionsRqst.AsObject;
  static serializeBinaryToWriter(message: GetAllActionsRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllActionsRqst;
  static deserializeBinaryFromReader(message: GetAllActionsRqst, reader: jspb.BinaryReader): GetAllActionsRqst;
}

export namespace GetAllActionsRqst {
  export type AsObject = {
  }
}

export class GetAllActionsRsp extends jspb.Message {
  getActionsList(): Array<string>;
  setActionsList(value: Array<string>): GetAllActionsRsp;
  clearActionsList(): GetAllActionsRsp;
  addActions(value: string, index?: number): GetAllActionsRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllActionsRsp.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllActionsRsp): GetAllActionsRsp.AsObject;
  static serializeBinaryToWriter(message: GetAllActionsRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllActionsRsp;
  static deserializeBinaryFromReader(message: GetAllActionsRsp, reader: jspb.BinaryReader): GetAllActionsRsp;
}

export namespace GetAllActionsRsp {
  export type AsObject = {
    actionsList: Array<string>,
  }
}

export class DeleteApplicationRqst extends jspb.Message {
  getApplicationid(): string;
  setApplicationid(value: string): DeleteApplicationRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteApplicationRqst.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteApplicationRqst): DeleteApplicationRqst.AsObject;
  static serializeBinaryToWriter(message: DeleteApplicationRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteApplicationRqst;
  static deserializeBinaryFromReader(message: DeleteApplicationRqst, reader: jspb.BinaryReader): DeleteApplicationRqst;
}

export namespace DeleteApplicationRqst {
  export type AsObject = {
    applicationid: string,
  }
}

export class DeleteApplicationRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): DeleteApplicationRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteApplicationRsp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteApplicationRsp): DeleteApplicationRsp.AsObject;
  static serializeBinaryToWriter(message: DeleteApplicationRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteApplicationRsp;
  static deserializeBinaryFromReader(message: DeleteApplicationRsp, reader: jspb.BinaryReader): DeleteApplicationRsp;
}

export namespace DeleteApplicationRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class RessourcePermission extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): RessourcePermission;

  getPath(): string;
  setPath(value: string): RessourcePermission;

  getUser(): string;
  setUser(value: string): RessourcePermission;

  getRole(): string;
  setRole(value: string): RessourcePermission;

  getApplication(): string;
  setApplication(value: string): RessourcePermission;

  getService(): string;
  setService(value: string): RessourcePermission;

  getOwnerCase(): RessourcePermission.OwnerCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RessourcePermission.AsObject;
  static toObject(includeInstance: boolean, msg: RessourcePermission): RessourcePermission.AsObject;
  static serializeBinaryToWriter(message: RessourcePermission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RessourcePermission;
  static deserializeBinaryFromReader(message: RessourcePermission, reader: jspb.BinaryReader): RessourcePermission;
}

export namespace RessourcePermission {
  export type AsObject = {
    number: number,
    path: string,
    user: string,
    role: string,
    application: string,
    service: string,
  }

  export enum OwnerCase { 
    OWNER_NOT_SET = 0,
    USER = 3,
    ROLE = 4,
    APPLICATION = 5,
    SERVICE = 6,
  }
}

export class GetPermissionsRqst extends jspb.Message {
  getPath(): string;
  setPath(value: string): GetPermissionsRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPermissionsRqst.AsObject;
  static toObject(includeInstance: boolean, msg: GetPermissionsRqst): GetPermissionsRqst.AsObject;
  static serializeBinaryToWriter(message: GetPermissionsRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPermissionsRqst;
  static deserializeBinaryFromReader(message: GetPermissionsRqst, reader: jspb.BinaryReader): GetPermissionsRqst;
}

export namespace GetPermissionsRqst {
  export type AsObject = {
    path: string,
  }
}

export class GetPermissionsRsp extends jspb.Message {
  getPermissions(): string;
  setPermissions(value: string): GetPermissionsRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPermissionsRsp.AsObject;
  static toObject(includeInstance: boolean, msg: GetPermissionsRsp): GetPermissionsRsp.AsObject;
  static serializeBinaryToWriter(message: GetPermissionsRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPermissionsRsp;
  static deserializeBinaryFromReader(message: GetPermissionsRsp, reader: jspb.BinaryReader): GetPermissionsRsp;
}

export namespace GetPermissionsRsp {
  export type AsObject = {
    permissions: string,
  }
}

export class SetPermissionRqst extends jspb.Message {
  getPermission(): RessourcePermission | undefined;
  setPermission(value?: RessourcePermission): SetPermissionRqst;
  hasPermission(): boolean;
  clearPermission(): SetPermissionRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPermissionRqst.AsObject;
  static toObject(includeInstance: boolean, msg: SetPermissionRqst): SetPermissionRqst.AsObject;
  static serializeBinaryToWriter(message: SetPermissionRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPermissionRqst;
  static deserializeBinaryFromReader(message: SetPermissionRqst, reader: jspb.BinaryReader): SetPermissionRqst;
}

export namespace SetPermissionRqst {
  export type AsObject = {
    permission?: RessourcePermission.AsObject,
  }
}

export class SetPermissionRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): SetPermissionRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPermissionRsp.AsObject;
  static toObject(includeInstance: boolean, msg: SetPermissionRsp): SetPermissionRsp.AsObject;
  static serializeBinaryToWriter(message: SetPermissionRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPermissionRsp;
  static deserializeBinaryFromReader(message: SetPermissionRsp, reader: jspb.BinaryReader): SetPermissionRsp;
}

export namespace SetPermissionRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class DeletePermissionsRqst extends jspb.Message {
  getPath(): string;
  setPath(value: string): DeletePermissionsRqst;

  getOwner(): string;
  setOwner(value: string): DeletePermissionsRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePermissionsRqst.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePermissionsRqst): DeletePermissionsRqst.AsObject;
  static serializeBinaryToWriter(message: DeletePermissionsRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePermissionsRqst;
  static deserializeBinaryFromReader(message: DeletePermissionsRqst, reader: jspb.BinaryReader): DeletePermissionsRqst;
}

export namespace DeletePermissionsRqst {
  export type AsObject = {
    path: string,
    owner: string,
  }
}

export class DeletePermissionsRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): DeletePermissionsRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePermissionsRsp.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePermissionsRsp): DeletePermissionsRsp.AsObject;
  static serializeBinaryToWriter(message: DeletePermissionsRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePermissionsRsp;
  static deserializeBinaryFromReader(message: DeletePermissionsRsp, reader: jspb.BinaryReader): DeletePermissionsRsp;
}

export namespace DeletePermissionsRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class GetAllFilesInfoRqst extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllFilesInfoRqst.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllFilesInfoRqst): GetAllFilesInfoRqst.AsObject;
  static serializeBinaryToWriter(message: GetAllFilesInfoRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllFilesInfoRqst;
  static deserializeBinaryFromReader(message: GetAllFilesInfoRqst, reader: jspb.BinaryReader): GetAllFilesInfoRqst;
}

export namespace GetAllFilesInfoRqst {
  export type AsObject = {
  }
}

export class GetAllFilesInfoRsp extends jspb.Message {
  getResult(): string;
  setResult(value: string): GetAllFilesInfoRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllFilesInfoRsp.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllFilesInfoRsp): GetAllFilesInfoRsp.AsObject;
  static serializeBinaryToWriter(message: GetAllFilesInfoRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllFilesInfoRsp;
  static deserializeBinaryFromReader(message: GetAllFilesInfoRsp, reader: jspb.BinaryReader): GetAllFilesInfoRsp;
}

export namespace GetAllFilesInfoRsp {
  export type AsObject = {
    result: string,
  }
}

export class GetAllApplicationsInfoRqst extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllApplicationsInfoRqst.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllApplicationsInfoRqst): GetAllApplicationsInfoRqst.AsObject;
  static serializeBinaryToWriter(message: GetAllApplicationsInfoRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllApplicationsInfoRqst;
  static deserializeBinaryFromReader(message: GetAllApplicationsInfoRqst, reader: jspb.BinaryReader): GetAllApplicationsInfoRqst;
}

export namespace GetAllApplicationsInfoRqst {
  export type AsObject = {
  }
}

export class GetAllApplicationsInfoRsp extends jspb.Message {
  getResult(): string;
  setResult(value: string): GetAllApplicationsInfoRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllApplicationsInfoRsp.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllApplicationsInfoRsp): GetAllApplicationsInfoRsp.AsObject;
  static serializeBinaryToWriter(message: GetAllApplicationsInfoRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllApplicationsInfoRsp;
  static deserializeBinaryFromReader(message: GetAllApplicationsInfoRsp, reader: jspb.BinaryReader): GetAllApplicationsInfoRsp;
}

export namespace GetAllApplicationsInfoRsp {
  export type AsObject = {
    result: string,
  }
}

export class UserSyncInfos extends jspb.Message {
  getBase(): string;
  setBase(value: string): UserSyncInfos;

  getQuery(): string;
  setQuery(value: string): UserSyncInfos;

  getId(): string;
  setId(value: string): UserSyncInfos;

  getEmail(): string;
  setEmail(value: string): UserSyncInfos;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSyncInfos.AsObject;
  static toObject(includeInstance: boolean, msg: UserSyncInfos): UserSyncInfos.AsObject;
  static serializeBinaryToWriter(message: UserSyncInfos, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSyncInfos;
  static deserializeBinaryFromReader(message: UserSyncInfos, reader: jspb.BinaryReader): UserSyncInfos;
}

export namespace UserSyncInfos {
  export type AsObject = {
    base: string,
    query: string,
    id: string,
    email: string,
  }
}

export class GroupSyncInfos extends jspb.Message {
  getBase(): string;
  setBase(value: string): GroupSyncInfos;

  getQuery(): string;
  setQuery(value: string): GroupSyncInfos;

  getId(): string;
  setId(value: string): GroupSyncInfos;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupSyncInfos.AsObject;
  static toObject(includeInstance: boolean, msg: GroupSyncInfos): GroupSyncInfos.AsObject;
  static serializeBinaryToWriter(message: GroupSyncInfos, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupSyncInfos;
  static deserializeBinaryFromReader(message: GroupSyncInfos, reader: jspb.BinaryReader): GroupSyncInfos;
}

export namespace GroupSyncInfos {
  export type AsObject = {
    base: string,
    query: string,
    id: string,
  }
}

export class LdapSyncInfos extends jspb.Message {
  getLdapseriveid(): string;
  setLdapseriveid(value: string): LdapSyncInfos;

  getConnectionid(): string;
  setConnectionid(value: string): LdapSyncInfos;

  getRefresh(): number;
  setRefresh(value: number): LdapSyncInfos;

  getUsersyncinfos(): UserSyncInfos | undefined;
  setUsersyncinfos(value?: UserSyncInfos): LdapSyncInfos;
  hasUsersyncinfos(): boolean;
  clearUsersyncinfos(): LdapSyncInfos;

  getGroupsyncinfos(): GroupSyncInfos | undefined;
  setGroupsyncinfos(value?: GroupSyncInfos): LdapSyncInfos;
  hasGroupsyncinfos(): boolean;
  clearGroupsyncinfos(): LdapSyncInfos;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LdapSyncInfos.AsObject;
  static toObject(includeInstance: boolean, msg: LdapSyncInfos): LdapSyncInfos.AsObject;
  static serializeBinaryToWriter(message: LdapSyncInfos, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LdapSyncInfos;
  static deserializeBinaryFromReader(message: LdapSyncInfos, reader: jspb.BinaryReader): LdapSyncInfos;
}

export namespace LdapSyncInfos {
  export type AsObject = {
    ldapseriveid: string,
    connectionid: string,
    refresh: number,
    usersyncinfos?: UserSyncInfos.AsObject,
    groupsyncinfos?: GroupSyncInfos.AsObject,
  }
}

export class SynchronizeLdapRqst extends jspb.Message {
  getSyncinfo(): LdapSyncInfos | undefined;
  setSyncinfo(value?: LdapSyncInfos): SynchronizeLdapRqst;
  hasSyncinfo(): boolean;
  clearSyncinfo(): SynchronizeLdapRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SynchronizeLdapRqst.AsObject;
  static toObject(includeInstance: boolean, msg: SynchronizeLdapRqst): SynchronizeLdapRqst.AsObject;
  static serializeBinaryToWriter(message: SynchronizeLdapRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SynchronizeLdapRqst;
  static deserializeBinaryFromReader(message: SynchronizeLdapRqst, reader: jspb.BinaryReader): SynchronizeLdapRqst;
}

export namespace SynchronizeLdapRqst {
  export type AsObject = {
    syncinfo?: LdapSyncInfos.AsObject,
  }
}

export class SynchronizeLdapRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): SynchronizeLdapRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SynchronizeLdapRsp.AsObject;
  static toObject(includeInstance: boolean, msg: SynchronizeLdapRsp): SynchronizeLdapRsp.AsObject;
  static serializeBinaryToWriter(message: SynchronizeLdapRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SynchronizeLdapRsp;
  static deserializeBinaryFromReader(message: SynchronizeLdapRsp, reader: jspb.BinaryReader): SynchronizeLdapRsp;
}

export namespace SynchronizeLdapRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class SetRessourceOwnerRqst extends jspb.Message {
  getPath(): string;
  setPath(value: string): SetRessourceOwnerRqst;

  getOwner(): string;
  setOwner(value: string): SetRessourceOwnerRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetRessourceOwnerRqst.AsObject;
  static toObject(includeInstance: boolean, msg: SetRessourceOwnerRqst): SetRessourceOwnerRqst.AsObject;
  static serializeBinaryToWriter(message: SetRessourceOwnerRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetRessourceOwnerRqst;
  static deserializeBinaryFromReader(message: SetRessourceOwnerRqst, reader: jspb.BinaryReader): SetRessourceOwnerRqst;
}

export namespace SetRessourceOwnerRqst {
  export type AsObject = {
    path: string,
    owner: string,
  }
}

export class SetRessourceOwnerRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): SetRessourceOwnerRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetRessourceOwnerRsp.AsObject;
  static toObject(includeInstance: boolean, msg: SetRessourceOwnerRsp): SetRessourceOwnerRsp.AsObject;
  static serializeBinaryToWriter(message: SetRessourceOwnerRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetRessourceOwnerRsp;
  static deserializeBinaryFromReader(message: SetRessourceOwnerRsp, reader: jspb.BinaryReader): SetRessourceOwnerRsp;
}

export namespace SetRessourceOwnerRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class GetRessourceOwnersRqst extends jspb.Message {
  getPath(): string;
  setPath(value: string): GetRessourceOwnersRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRessourceOwnersRqst.AsObject;
  static toObject(includeInstance: boolean, msg: GetRessourceOwnersRqst): GetRessourceOwnersRqst.AsObject;
  static serializeBinaryToWriter(message: GetRessourceOwnersRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRessourceOwnersRqst;
  static deserializeBinaryFromReader(message: GetRessourceOwnersRqst, reader: jspb.BinaryReader): GetRessourceOwnersRqst;
}

export namespace GetRessourceOwnersRqst {
  export type AsObject = {
    path: string,
  }
}

export class GetRessourceOwnersRsp extends jspb.Message {
  getOwnersList(): Array<string>;
  setOwnersList(value: Array<string>): GetRessourceOwnersRsp;
  clearOwnersList(): GetRessourceOwnersRsp;
  addOwners(value: string, index?: number): GetRessourceOwnersRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRessourceOwnersRsp.AsObject;
  static toObject(includeInstance: boolean, msg: GetRessourceOwnersRsp): GetRessourceOwnersRsp.AsObject;
  static serializeBinaryToWriter(message: GetRessourceOwnersRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRessourceOwnersRsp;
  static deserializeBinaryFromReader(message: GetRessourceOwnersRsp, reader: jspb.BinaryReader): GetRessourceOwnersRsp;
}

export namespace GetRessourceOwnersRsp {
  export type AsObject = {
    ownersList: Array<string>,
  }
}

export class DeleteRessourceOwnerRqst extends jspb.Message {
  getPath(): string;
  setPath(value: string): DeleteRessourceOwnerRqst;

  getOwner(): string;
  setOwner(value: string): DeleteRessourceOwnerRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRessourceOwnerRqst.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRessourceOwnerRqst): DeleteRessourceOwnerRqst.AsObject;
  static serializeBinaryToWriter(message: DeleteRessourceOwnerRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRessourceOwnerRqst;
  static deserializeBinaryFromReader(message: DeleteRessourceOwnerRqst, reader: jspb.BinaryReader): DeleteRessourceOwnerRqst;
}

export namespace DeleteRessourceOwnerRqst {
  export type AsObject = {
    path: string,
    owner: string,
  }
}

export class DeleteRessourceOwnerRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): DeleteRessourceOwnerRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRessourceOwnerRsp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRessourceOwnerRsp): DeleteRessourceOwnerRsp.AsObject;
  static serializeBinaryToWriter(message: DeleteRessourceOwnerRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRessourceOwnerRsp;
  static deserializeBinaryFromReader(message: DeleteRessourceOwnerRsp, reader: jspb.BinaryReader): DeleteRessourceOwnerRsp;
}

export namespace DeleteRessourceOwnerRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class DeleteRessourceOwnersRqst extends jspb.Message {
  getPath(): string;
  setPath(value: string): DeleteRessourceOwnersRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRessourceOwnersRqst.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRessourceOwnersRqst): DeleteRessourceOwnersRqst.AsObject;
  static serializeBinaryToWriter(message: DeleteRessourceOwnersRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRessourceOwnersRqst;
  static deserializeBinaryFromReader(message: DeleteRessourceOwnersRqst, reader: jspb.BinaryReader): DeleteRessourceOwnersRqst;
}

export namespace DeleteRessourceOwnersRqst {
  export type AsObject = {
    path: string,
  }
}

export class DeleteRessourceOwnersRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): DeleteRessourceOwnersRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRessourceOwnersRsp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRessourceOwnersRsp): DeleteRessourceOwnersRsp.AsObject;
  static serializeBinaryToWriter(message: DeleteRessourceOwnersRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRessourceOwnersRsp;
  static deserializeBinaryFromReader(message: DeleteRessourceOwnersRsp, reader: jspb.BinaryReader): DeleteRessourceOwnersRsp;
}

export namespace DeleteRessourceOwnersRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class ValidateTokenRqst extends jspb.Message {
  getToken(): string;
  setToken(value: string): ValidateTokenRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateTokenRqst.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateTokenRqst): ValidateTokenRqst.AsObject;
  static serializeBinaryToWriter(message: ValidateTokenRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateTokenRqst;
  static deserializeBinaryFromReader(message: ValidateTokenRqst, reader: jspb.BinaryReader): ValidateTokenRqst;
}

export namespace ValidateTokenRqst {
  export type AsObject = {
    token: string,
  }
}

export class ValidateTokenRsp extends jspb.Message {
  getClientid(): string;
  setClientid(value: string): ValidateTokenRsp;

  getExpired(): number;
  setExpired(value: number): ValidateTokenRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateTokenRsp.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateTokenRsp): ValidateTokenRsp.AsObject;
  static serializeBinaryToWriter(message: ValidateTokenRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateTokenRsp;
  static deserializeBinaryFromReader(message: ValidateTokenRsp, reader: jspb.BinaryReader): ValidateTokenRsp;
}

export namespace ValidateTokenRsp {
  export type AsObject = {
    clientid: string,
    expired: number,
  }
}

export class ValidateApplicationAccessRqst extends jspb.Message {
  getName(): string;
  setName(value: string): ValidateApplicationAccessRqst;

  getMethod(): string;
  setMethod(value: string): ValidateApplicationAccessRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateApplicationAccessRqst.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateApplicationAccessRqst): ValidateApplicationAccessRqst.AsObject;
  static serializeBinaryToWriter(message: ValidateApplicationAccessRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateApplicationAccessRqst;
  static deserializeBinaryFromReader(message: ValidateApplicationAccessRqst, reader: jspb.BinaryReader): ValidateApplicationAccessRqst;
}

export namespace ValidateApplicationAccessRqst {
  export type AsObject = {
    name: string,
    method: string,
  }
}

export class ValidateApplicationAccessRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): ValidateApplicationAccessRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateApplicationAccessRsp.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateApplicationAccessRsp): ValidateApplicationAccessRsp.AsObject;
  static serializeBinaryToWriter(message: ValidateApplicationAccessRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateApplicationAccessRsp;
  static deserializeBinaryFromReader(message: ValidateApplicationAccessRsp, reader: jspb.BinaryReader): ValidateApplicationAccessRsp;
}

export namespace ValidateApplicationAccessRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class ValidateUserAccessRqst extends jspb.Message {
  getToken(): string;
  setToken(value: string): ValidateUserAccessRqst;

  getMethod(): string;
  setMethod(value: string): ValidateUserAccessRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateUserAccessRqst.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateUserAccessRqst): ValidateUserAccessRqst.AsObject;
  static serializeBinaryToWriter(message: ValidateUserAccessRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateUserAccessRqst;
  static deserializeBinaryFromReader(message: ValidateUserAccessRqst, reader: jspb.BinaryReader): ValidateUserAccessRqst;
}

export namespace ValidateUserAccessRqst {
  export type AsObject = {
    token: string,
    method: string,
  }
}

export class ValidateUserAccessRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): ValidateUserAccessRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateUserAccessRsp.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateUserAccessRsp): ValidateUserAccessRsp.AsObject;
  static serializeBinaryToWriter(message: ValidateUserAccessRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateUserAccessRsp;
  static deserializeBinaryFromReader(message: ValidateUserAccessRsp, reader: jspb.BinaryReader): ValidateUserAccessRsp;
}

export namespace ValidateUserAccessRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class ValidateUserRessourceAccessRqst extends jspb.Message {
  getToken(): string;
  setToken(value: string): ValidateUserRessourceAccessRqst;

  getMethod(): string;
  setMethod(value: string): ValidateUserRessourceAccessRqst;

  getPath(): string;
  setPath(value: string): ValidateUserRessourceAccessRqst;

  getPermission(): number;
  setPermission(value: number): ValidateUserRessourceAccessRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateUserRessourceAccessRqst.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateUserRessourceAccessRqst): ValidateUserRessourceAccessRqst.AsObject;
  static serializeBinaryToWriter(message: ValidateUserRessourceAccessRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateUserRessourceAccessRqst;
  static deserializeBinaryFromReader(message: ValidateUserRessourceAccessRqst, reader: jspb.BinaryReader): ValidateUserRessourceAccessRqst;
}

export namespace ValidateUserRessourceAccessRqst {
  export type AsObject = {
    token: string,
    method: string,
    path: string,
    permission: number,
  }
}

export class ValidateUserRessourceAccessRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): ValidateUserRessourceAccessRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateUserRessourceAccessRsp.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateUserRessourceAccessRsp): ValidateUserRessourceAccessRsp.AsObject;
  static serializeBinaryToWriter(message: ValidateUserRessourceAccessRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateUserRessourceAccessRsp;
  static deserializeBinaryFromReader(message: ValidateUserRessourceAccessRsp, reader: jspb.BinaryReader): ValidateUserRessourceAccessRsp;
}

export namespace ValidateUserRessourceAccessRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class ValidateApplicationRessourceAccessRqst extends jspb.Message {
  getName(): string;
  setName(value: string): ValidateApplicationRessourceAccessRqst;

  getMethod(): string;
  setMethod(value: string): ValidateApplicationRessourceAccessRqst;

  getPath(): string;
  setPath(value: string): ValidateApplicationRessourceAccessRqst;

  getPermission(): number;
  setPermission(value: number): ValidateApplicationRessourceAccessRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateApplicationRessourceAccessRqst.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateApplicationRessourceAccessRqst): ValidateApplicationRessourceAccessRqst.AsObject;
  static serializeBinaryToWriter(message: ValidateApplicationRessourceAccessRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateApplicationRessourceAccessRqst;
  static deserializeBinaryFromReader(message: ValidateApplicationRessourceAccessRqst, reader: jspb.BinaryReader): ValidateApplicationRessourceAccessRqst;
}

export namespace ValidateApplicationRessourceAccessRqst {
  export type AsObject = {
    name: string,
    method: string,
    path: string,
    permission: number,
  }
}

export class ValidateApplicationRessourceAccessRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): ValidateApplicationRessourceAccessRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidateApplicationRessourceAccessRsp.AsObject;
  static toObject(includeInstance: boolean, msg: ValidateApplicationRessourceAccessRsp): ValidateApplicationRessourceAccessRsp.AsObject;
  static serializeBinaryToWriter(message: ValidateApplicationRessourceAccessRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidateApplicationRessourceAccessRsp;
  static deserializeBinaryFromReader(message: ValidateApplicationRessourceAccessRsp, reader: jspb.BinaryReader): ValidateApplicationRessourceAccessRsp;
}

export namespace ValidateApplicationRessourceAccessRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class CreateDirPermissionsRqst extends jspb.Message {
  getToken(): string;
  setToken(value: string): CreateDirPermissionsRqst;

  getPath(): string;
  setPath(value: string): CreateDirPermissionsRqst;

  getName(): string;
  setName(value: string): CreateDirPermissionsRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDirPermissionsRqst.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDirPermissionsRqst): CreateDirPermissionsRqst.AsObject;
  static serializeBinaryToWriter(message: CreateDirPermissionsRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDirPermissionsRqst;
  static deserializeBinaryFromReader(message: CreateDirPermissionsRqst, reader: jspb.BinaryReader): CreateDirPermissionsRqst;
}

export namespace CreateDirPermissionsRqst {
  export type AsObject = {
    token: string,
    path: string,
    name: string,
  }
}

export class CreateDirPermissionsRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): CreateDirPermissionsRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDirPermissionsRsp.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDirPermissionsRsp): CreateDirPermissionsRsp.AsObject;
  static serializeBinaryToWriter(message: CreateDirPermissionsRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDirPermissionsRsp;
  static deserializeBinaryFromReader(message: CreateDirPermissionsRsp, reader: jspb.BinaryReader): CreateDirPermissionsRsp;
}

export namespace CreateDirPermissionsRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class RenameFilePermissionRqst extends jspb.Message {
  getPath(): string;
  setPath(value: string): RenameFilePermissionRqst;

  getOldname(): string;
  setOldname(value: string): RenameFilePermissionRqst;

  getNewname(): string;
  setNewname(value: string): RenameFilePermissionRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameFilePermissionRqst.AsObject;
  static toObject(includeInstance: boolean, msg: RenameFilePermissionRqst): RenameFilePermissionRqst.AsObject;
  static serializeBinaryToWriter(message: RenameFilePermissionRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameFilePermissionRqst;
  static deserializeBinaryFromReader(message: RenameFilePermissionRqst, reader: jspb.BinaryReader): RenameFilePermissionRqst;
}

export namespace RenameFilePermissionRqst {
  export type AsObject = {
    path: string,
    oldname: string,
    newname: string,
  }
}

export class RenameFilePermissionRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): RenameFilePermissionRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenameFilePermissionRsp.AsObject;
  static toObject(includeInstance: boolean, msg: RenameFilePermissionRsp): RenameFilePermissionRsp.AsObject;
  static serializeBinaryToWriter(message: RenameFilePermissionRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenameFilePermissionRsp;
  static deserializeBinaryFromReader(message: RenameFilePermissionRsp, reader: jspb.BinaryReader): RenameFilePermissionRsp;
}

export namespace RenameFilePermissionRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class DeleteDirPermissionsRqst extends jspb.Message {
  getPath(): string;
  setPath(value: string): DeleteDirPermissionsRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDirPermissionsRqst.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDirPermissionsRqst): DeleteDirPermissionsRqst.AsObject;
  static serializeBinaryToWriter(message: DeleteDirPermissionsRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDirPermissionsRqst;
  static deserializeBinaryFromReader(message: DeleteDirPermissionsRqst, reader: jspb.BinaryReader): DeleteDirPermissionsRqst;
}

export namespace DeleteDirPermissionsRqst {
  export type AsObject = {
    path: string,
  }
}

export class DeleteDirPermissionsRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): DeleteDirPermissionsRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDirPermissionsRsp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDirPermissionsRsp): DeleteDirPermissionsRsp.AsObject;
  static serializeBinaryToWriter(message: DeleteDirPermissionsRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDirPermissionsRsp;
  static deserializeBinaryFromReader(message: DeleteDirPermissionsRsp, reader: jspb.BinaryReader): DeleteDirPermissionsRsp;
}

export namespace DeleteDirPermissionsRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class DeleteFilePermissionsRqst extends jspb.Message {
  getPath(): string;
  setPath(value: string): DeleteFilePermissionsRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFilePermissionsRqst.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFilePermissionsRqst): DeleteFilePermissionsRqst.AsObject;
  static serializeBinaryToWriter(message: DeleteFilePermissionsRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFilePermissionsRqst;
  static deserializeBinaryFromReader(message: DeleteFilePermissionsRqst, reader: jspb.BinaryReader): DeleteFilePermissionsRqst;
}

export namespace DeleteFilePermissionsRqst {
  export type AsObject = {
    path: string,
  }
}

export class DeleteFilePermissionsRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): DeleteFilePermissionsRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFilePermissionsRsp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFilePermissionsRsp): DeleteFilePermissionsRsp.AsObject;
  static serializeBinaryToWriter(message: DeleteFilePermissionsRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFilePermissionsRsp;
  static deserializeBinaryFromReader(message: DeleteFilePermissionsRsp, reader: jspb.BinaryReader): DeleteFilePermissionsRsp;
}

export namespace DeleteFilePermissionsRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class AccountExistRqst extends jspb.Message {
  getId(): string;
  setId(value: string): AccountExistRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountExistRqst.AsObject;
  static toObject(includeInstance: boolean, msg: AccountExistRqst): AccountExistRqst.AsObject;
  static serializeBinaryToWriter(message: AccountExistRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountExistRqst;
  static deserializeBinaryFromReader(message: AccountExistRqst, reader: jspb.BinaryReader): AccountExistRqst;
}

export namespace AccountExistRqst {
  export type AsObject = {
    id: string,
  }
}

export class AccountExistRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): AccountExistRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountExistRsp.AsObject;
  static toObject(includeInstance: boolean, msg: AccountExistRsp): AccountExistRsp.AsObject;
  static serializeBinaryToWriter(message: AccountExistRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountExistRsp;
  static deserializeBinaryFromReader(message: AccountExistRsp, reader: jspb.BinaryReader): AccountExistRsp;
}

export namespace AccountExistRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class DeleteAccountPermissionsRqst extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteAccountPermissionsRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAccountPermissionsRqst.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAccountPermissionsRqst): DeleteAccountPermissionsRqst.AsObject;
  static serializeBinaryToWriter(message: DeleteAccountPermissionsRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAccountPermissionsRqst;
  static deserializeBinaryFromReader(message: DeleteAccountPermissionsRqst, reader: jspb.BinaryReader): DeleteAccountPermissionsRqst;
}

export namespace DeleteAccountPermissionsRqst {
  export type AsObject = {
    id: string,
  }
}

export class DeleteAccountPermissionsRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): DeleteAccountPermissionsRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAccountPermissionsRsp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAccountPermissionsRsp): DeleteAccountPermissionsRsp.AsObject;
  static serializeBinaryToWriter(message: DeleteAccountPermissionsRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAccountPermissionsRsp;
  static deserializeBinaryFromReader(message: DeleteAccountPermissionsRsp, reader: jspb.BinaryReader): DeleteAccountPermissionsRsp;
}

export namespace DeleteAccountPermissionsRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class DeleteRolePermissionsRqst extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteRolePermissionsRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRolePermissionsRqst.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRolePermissionsRqst): DeleteRolePermissionsRqst.AsObject;
  static serializeBinaryToWriter(message: DeleteRolePermissionsRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRolePermissionsRqst;
  static deserializeBinaryFromReader(message: DeleteRolePermissionsRqst, reader: jspb.BinaryReader): DeleteRolePermissionsRqst;
}

export namespace DeleteRolePermissionsRqst {
  export type AsObject = {
    id: string,
  }
}

export class DeleteRolePermissionsRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): DeleteRolePermissionsRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRolePermissionsRsp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRolePermissionsRsp): DeleteRolePermissionsRsp.AsObject;
  static serializeBinaryToWriter(message: DeleteRolePermissionsRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRolePermissionsRsp;
  static deserializeBinaryFromReader(message: DeleteRolePermissionsRsp, reader: jspb.BinaryReader): DeleteRolePermissionsRsp;
}

export namespace DeleteRolePermissionsRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class LogInfo extends jspb.Message {
  getDate(): number;
  setDate(value: number): LogInfo;

  getType(): LogType;
  setType(value: LogType): LogInfo;

  getApplication(): string;
  setApplication(value: string): LogInfo;

  getUserid(): string;
  setUserid(value: string): LogInfo;

  getUsername(): string;
  setUsername(value: string): LogInfo;

  getMethod(): string;
  setMethod(value: string): LogInfo;

  getMessage(): string;
  setMessage(value: string): LogInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LogInfo): LogInfo.AsObject;
  static serializeBinaryToWriter(message: LogInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogInfo;
  static deserializeBinaryFromReader(message: LogInfo, reader: jspb.BinaryReader): LogInfo;
}

export namespace LogInfo {
  export type AsObject = {
    date: number,
    type: LogType,
    application: string,
    userid: string,
    username: string,
    method: string,
    message: string,
  }
}

export class LogRqst extends jspb.Message {
  getInfo(): LogInfo | undefined;
  setInfo(value?: LogInfo): LogRqst;
  hasInfo(): boolean;
  clearInfo(): LogRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogRqst.AsObject;
  static toObject(includeInstance: boolean, msg: LogRqst): LogRqst.AsObject;
  static serializeBinaryToWriter(message: LogRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogRqst;
  static deserializeBinaryFromReader(message: LogRqst, reader: jspb.BinaryReader): LogRqst;
}

export namespace LogRqst {
  export type AsObject = {
    info?: LogInfo.AsObject,
  }
}

export class LogRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): LogRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogRsp.AsObject;
  static toObject(includeInstance: boolean, msg: LogRsp): LogRsp.AsObject;
  static serializeBinaryToWriter(message: LogRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogRsp;
  static deserializeBinaryFromReader(message: LogRsp, reader: jspb.BinaryReader): LogRsp;
}

export namespace LogRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class DeleteLogRqst extends jspb.Message {
  getLog(): LogInfo | undefined;
  setLog(value?: LogInfo): DeleteLogRqst;
  hasLog(): boolean;
  clearLog(): DeleteLogRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLogRqst.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLogRqst): DeleteLogRqst.AsObject;
  static serializeBinaryToWriter(message: DeleteLogRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLogRqst;
  static deserializeBinaryFromReader(message: DeleteLogRqst, reader: jspb.BinaryReader): DeleteLogRqst;
}

export namespace DeleteLogRqst {
  export type AsObject = {
    log?: LogInfo.AsObject,
  }
}

export class DeleteLogRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): DeleteLogRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLogRsp.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLogRsp): DeleteLogRsp.AsObject;
  static serializeBinaryToWriter(message: DeleteLogRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLogRsp;
  static deserializeBinaryFromReader(message: DeleteLogRsp, reader: jspb.BinaryReader): DeleteLogRsp;
}

export namespace DeleteLogRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class SetLogMethodRqst extends jspb.Message {
  getMethod(): string;
  setMethod(value: string): SetLogMethodRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetLogMethodRqst.AsObject;
  static toObject(includeInstance: boolean, msg: SetLogMethodRqst): SetLogMethodRqst.AsObject;
  static serializeBinaryToWriter(message: SetLogMethodRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetLogMethodRqst;
  static deserializeBinaryFromReader(message: SetLogMethodRqst, reader: jspb.BinaryReader): SetLogMethodRqst;
}

export namespace SetLogMethodRqst {
  export type AsObject = {
    method: string,
  }
}

export class SetLogMethodRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): SetLogMethodRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetLogMethodRsp.AsObject;
  static toObject(includeInstance: boolean, msg: SetLogMethodRsp): SetLogMethodRsp.AsObject;
  static serializeBinaryToWriter(message: SetLogMethodRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetLogMethodRsp;
  static deserializeBinaryFromReader(message: SetLogMethodRsp, reader: jspb.BinaryReader): SetLogMethodRsp;
}

export namespace SetLogMethodRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class ResetLogMethodRqst extends jspb.Message {
  getMethod(): string;
  setMethod(value: string): ResetLogMethodRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetLogMethodRqst.AsObject;
  static toObject(includeInstance: boolean, msg: ResetLogMethodRqst): ResetLogMethodRqst.AsObject;
  static serializeBinaryToWriter(message: ResetLogMethodRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetLogMethodRqst;
  static deserializeBinaryFromReader(message: ResetLogMethodRqst, reader: jspb.BinaryReader): ResetLogMethodRqst;
}

export namespace ResetLogMethodRqst {
  export type AsObject = {
    method: string,
  }
}

export class ResetLogMethodRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): ResetLogMethodRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetLogMethodRsp.AsObject;
  static toObject(includeInstance: boolean, msg: ResetLogMethodRsp): ResetLogMethodRsp.AsObject;
  static serializeBinaryToWriter(message: ResetLogMethodRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetLogMethodRsp;
  static deserializeBinaryFromReader(message: ResetLogMethodRsp, reader: jspb.BinaryReader): ResetLogMethodRsp;
}

export namespace ResetLogMethodRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class GetLogMethodsRqst extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLogMethodsRqst.AsObject;
  static toObject(includeInstance: boolean, msg: GetLogMethodsRqst): GetLogMethodsRqst.AsObject;
  static serializeBinaryToWriter(message: GetLogMethodsRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLogMethodsRqst;
  static deserializeBinaryFromReader(message: GetLogMethodsRqst, reader: jspb.BinaryReader): GetLogMethodsRqst;
}

export namespace GetLogMethodsRqst {
  export type AsObject = {
  }
}

export class GetLogMethodsRsp extends jspb.Message {
  getMethodsList(): Array<string>;
  setMethodsList(value: Array<string>): GetLogMethodsRsp;
  clearMethodsList(): GetLogMethodsRsp;
  addMethods(value: string, index?: number): GetLogMethodsRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLogMethodsRsp.AsObject;
  static toObject(includeInstance: boolean, msg: GetLogMethodsRsp): GetLogMethodsRsp.AsObject;
  static serializeBinaryToWriter(message: GetLogMethodsRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLogMethodsRsp;
  static deserializeBinaryFromReader(message: GetLogMethodsRsp, reader: jspb.BinaryReader): GetLogMethodsRsp;
}

export namespace GetLogMethodsRsp {
  export type AsObject = {
    methodsList: Array<string>,
  }
}

export class GetLogRqst extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): GetLogRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLogRqst.AsObject;
  static toObject(includeInstance: boolean, msg: GetLogRqst): GetLogRqst.AsObject;
  static serializeBinaryToWriter(message: GetLogRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLogRqst;
  static deserializeBinaryFromReader(message: GetLogRqst, reader: jspb.BinaryReader): GetLogRqst;
}

export namespace GetLogRqst {
  export type AsObject = {
    query: string,
  }
}

export class GetLogRsp extends jspb.Message {
  getInfoList(): Array<LogInfo>;
  setInfoList(value: Array<LogInfo>): GetLogRsp;
  clearInfoList(): GetLogRsp;
  addInfo(value?: LogInfo, index?: number): LogInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLogRsp.AsObject;
  static toObject(includeInstance: boolean, msg: GetLogRsp): GetLogRsp.AsObject;
  static serializeBinaryToWriter(message: GetLogRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLogRsp;
  static deserializeBinaryFromReader(message: GetLogRsp, reader: jspb.BinaryReader): GetLogRsp;
}

export namespace GetLogRsp {
  export type AsObject = {
    infoList: Array<LogInfo.AsObject>,
  }
}

export class ClearAllLogRqst extends jspb.Message {
  getType(): LogType;
  setType(value: LogType): ClearAllLogRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearAllLogRqst.AsObject;
  static toObject(includeInstance: boolean, msg: ClearAllLogRqst): ClearAllLogRqst.AsObject;
  static serializeBinaryToWriter(message: ClearAllLogRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearAllLogRqst;
  static deserializeBinaryFromReader(message: ClearAllLogRqst, reader: jspb.BinaryReader): ClearAllLogRqst;
}

export namespace ClearAllLogRqst {
  export type AsObject = {
    type: LogType,
  }
}

export class ClearAllLogRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): ClearAllLogRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearAllLogRsp.AsObject;
  static toObject(includeInstance: boolean, msg: ClearAllLogRsp): ClearAllLogRsp.AsObject;
  static serializeBinaryToWriter(message: ClearAllLogRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearAllLogRsp;
  static deserializeBinaryFromReader(message: ClearAllLogRsp, reader: jspb.BinaryReader): ClearAllLogRsp;
}

export namespace ClearAllLogRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class Ressource extends jspb.Message {
  getPath(): string;
  setPath(value: string): Ressource;

  getName(): string;
  setName(value: string): Ressource;

  getModified(): number;
  setModified(value: number): Ressource;

  getSize(): number;
  setSize(value: number): Ressource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ressource.AsObject;
  static toObject(includeInstance: boolean, msg: Ressource): Ressource.AsObject;
  static serializeBinaryToWriter(message: Ressource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ressource;
  static deserializeBinaryFromReader(message: Ressource, reader: jspb.BinaryReader): Ressource;
}

export namespace Ressource {
  export type AsObject = {
    path: string,
    name: string,
    modified: number,
    size: number,
  }
}

export class SetRessourceRqst extends jspb.Message {
  getRessource(): Ressource | undefined;
  setRessource(value?: Ressource): SetRessourceRqst;
  hasRessource(): boolean;
  clearRessource(): SetRessourceRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetRessourceRqst.AsObject;
  static toObject(includeInstance: boolean, msg: SetRessourceRqst): SetRessourceRqst.AsObject;
  static serializeBinaryToWriter(message: SetRessourceRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetRessourceRqst;
  static deserializeBinaryFromReader(message: SetRessourceRqst, reader: jspb.BinaryReader): SetRessourceRqst;
}

export namespace SetRessourceRqst {
  export type AsObject = {
    ressource?: Ressource.AsObject,
  }
}

export class SetRessourceRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): SetRessourceRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetRessourceRsp.AsObject;
  static toObject(includeInstance: boolean, msg: SetRessourceRsp): SetRessourceRsp.AsObject;
  static serializeBinaryToWriter(message: SetRessourceRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetRessourceRsp;
  static deserializeBinaryFromReader(message: SetRessourceRsp, reader: jspb.BinaryReader): SetRessourceRsp;
}

export namespace SetRessourceRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class SetActionPermissionRqst extends jspb.Message {
  getAction(): string;
  setAction(value: string): SetActionPermissionRqst;

  getPermission(): number;
  setPermission(value: number): SetActionPermissionRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetActionPermissionRqst.AsObject;
  static toObject(includeInstance: boolean, msg: SetActionPermissionRqst): SetActionPermissionRqst.AsObject;
  static serializeBinaryToWriter(message: SetActionPermissionRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetActionPermissionRqst;
  static deserializeBinaryFromReader(message: SetActionPermissionRqst, reader: jspb.BinaryReader): SetActionPermissionRqst;
}

export namespace SetActionPermissionRqst {
  export type AsObject = {
    action: string,
    permission: number,
  }
}

export class SetActionPermissionRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): SetActionPermissionRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetActionPermissionRsp.AsObject;
  static toObject(includeInstance: boolean, msg: SetActionPermissionRsp): SetActionPermissionRsp.AsObject;
  static serializeBinaryToWriter(message: SetActionPermissionRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetActionPermissionRsp;
  static deserializeBinaryFromReader(message: SetActionPermissionRsp, reader: jspb.BinaryReader): SetActionPermissionRsp;
}

export namespace SetActionPermissionRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class GetActionPermissionRqst extends jspb.Message {
  getAction(): string;
  setAction(value: string): GetActionPermissionRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionPermissionRqst.AsObject;
  static toObject(includeInstance: boolean, msg: GetActionPermissionRqst): GetActionPermissionRqst.AsObject;
  static serializeBinaryToWriter(message: GetActionPermissionRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActionPermissionRqst;
  static deserializeBinaryFromReader(message: GetActionPermissionRqst, reader: jspb.BinaryReader): GetActionPermissionRqst;
}

export namespace GetActionPermissionRqst {
  export type AsObject = {
    action: string,
  }
}

export class GetActionPermissionRsp extends jspb.Message {
  getPermission(): number;
  setPermission(value: number): GetActionPermissionRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionPermissionRsp.AsObject;
  static toObject(includeInstance: boolean, msg: GetActionPermissionRsp): GetActionPermissionRsp.AsObject;
  static serializeBinaryToWriter(message: GetActionPermissionRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActionPermissionRsp;
  static deserializeBinaryFromReader(message: GetActionPermissionRsp, reader: jspb.BinaryReader): GetActionPermissionRsp;
}

export namespace GetActionPermissionRsp {
  export type AsObject = {
    permission: number,
  }
}

export class RemoveRessourceRqst extends jspb.Message {
  getRessource(): Ressource | undefined;
  setRessource(value?: Ressource): RemoveRessourceRqst;
  hasRessource(): boolean;
  clearRessource(): RemoveRessourceRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRessourceRqst.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRessourceRqst): RemoveRessourceRqst.AsObject;
  static serializeBinaryToWriter(message: RemoveRessourceRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRessourceRqst;
  static deserializeBinaryFromReader(message: RemoveRessourceRqst, reader: jspb.BinaryReader): RemoveRessourceRqst;
}

export namespace RemoveRessourceRqst {
  export type AsObject = {
    ressource?: Ressource.AsObject,
  }
}

export class RemoveRessourceRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): RemoveRessourceRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRessourceRsp.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRessourceRsp): RemoveRessourceRsp.AsObject;
  static serializeBinaryToWriter(message: RemoveRessourceRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRessourceRsp;
  static deserializeBinaryFromReader(message: RemoveRessourceRsp, reader: jspb.BinaryReader): RemoveRessourceRsp;
}

export namespace RemoveRessourceRsp {
  export type AsObject = {
    result: boolean,
  }
}

export class GetRessourcesRqst extends jspb.Message {
  getPath(): string;
  setPath(value: string): GetRessourcesRqst;

  getName(): string;
  setName(value: string): GetRessourcesRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRessourcesRqst.AsObject;
  static toObject(includeInstance: boolean, msg: GetRessourcesRqst): GetRessourcesRqst.AsObject;
  static serializeBinaryToWriter(message: GetRessourcesRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRessourcesRqst;
  static deserializeBinaryFromReader(message: GetRessourcesRqst, reader: jspb.BinaryReader): GetRessourcesRqst;
}

export namespace GetRessourcesRqst {
  export type AsObject = {
    path: string,
    name: string,
  }
}

export class GetRessourcesRsp extends jspb.Message {
  getRessourcesList(): Array<Ressource>;
  setRessourcesList(value: Array<Ressource>): GetRessourcesRsp;
  clearRessourcesList(): GetRessourcesRsp;
  addRessources(value?: Ressource, index?: number): Ressource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRessourcesRsp.AsObject;
  static toObject(includeInstance: boolean, msg: GetRessourcesRsp): GetRessourcesRsp.AsObject;
  static serializeBinaryToWriter(message: GetRessourcesRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRessourcesRsp;
  static deserializeBinaryFromReader(message: GetRessourcesRsp, reader: jspb.BinaryReader): GetRessourcesRsp;
}

export namespace GetRessourcesRsp {
  export type AsObject = {
    ressourcesList: Array<Ressource.AsObject>,
  }
}

export class RemoveActionPermissionRqst extends jspb.Message {
  getAction(): string;
  setAction(value: string): RemoveActionPermissionRqst;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveActionPermissionRqst.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveActionPermissionRqst): RemoveActionPermissionRqst.AsObject;
  static serializeBinaryToWriter(message: RemoveActionPermissionRqst, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveActionPermissionRqst;
  static deserializeBinaryFromReader(message: RemoveActionPermissionRqst, reader: jspb.BinaryReader): RemoveActionPermissionRqst;
}

export namespace RemoveActionPermissionRqst {
  export type AsObject = {
    action: string,
  }
}

export class RemoveActionPermissionRsp extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): RemoveActionPermissionRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveActionPermissionRsp.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveActionPermissionRsp): RemoveActionPermissionRsp.AsObject;
  static serializeBinaryToWriter(message: RemoveActionPermissionRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveActionPermissionRsp;
  static deserializeBinaryFromReader(message: RemoveActionPermissionRsp, reader: jspb.BinaryReader): RemoveActionPermissionRsp;
}

export namespace RemoveActionPermissionRsp {
  export type AsObject = {
    result: boolean,
  }
}

export enum LogType { 
  INFO_MESSAGE = 0,
  ERROR_MESSAGE = 1,
}