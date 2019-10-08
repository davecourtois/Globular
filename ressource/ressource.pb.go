// Code generated by protoc-gen-go. DO NOT EDIT.
// source: ressource/ressource.proto

package ressource

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

//* Account *
type Account struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Email                string   `protobuf:"bytes,2,opt,name=email,proto3" json:"email,omitempty"`
	Password             string   `protobuf:"bytes,3,opt,name=password,proto3" json:"password,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Account) Reset()         { *m = Account{} }
func (m *Account) String() string { return proto.CompactTextString(m) }
func (*Account) ProtoMessage()    {}
func (*Account) Descriptor() ([]byte, []int) {
	return fileDescriptor_f22aaa66144afcde, []int{0}
}

func (m *Account) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Account.Unmarshal(m, b)
}
func (m *Account) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Account.Marshal(b, m, deterministic)
}
func (m *Account) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Account.Merge(m, src)
}
func (m *Account) XXX_Size() int {
	return xxx_messageInfo_Account.Size(m)
}
func (m *Account) XXX_DiscardUnknown() {
	xxx_messageInfo_Account.DiscardUnknown(m)
}

var xxx_messageInfo_Account proto.InternalMessageInfo

func (m *Account) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Account) GetEmail() string {
	if m != nil {
		return m.Email
	}
	return ""
}

func (m *Account) GetPassword() string {
	if m != nil {
		return m.Password
	}
	return ""
}

//* A role is simply a list of actions that an account can call *
type Role struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Actions              []string `protobuf:"bytes,2,rep,name=actions,proto3" json:"actions,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Role) Reset()         { *m = Role{} }
func (m *Role) String() string { return proto.CompactTextString(m) }
func (*Role) ProtoMessage()    {}
func (*Role) Descriptor() ([]byte, []int) {
	return fileDescriptor_f22aaa66144afcde, []int{1}
}

func (m *Role) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Role.Unmarshal(m, b)
}
func (m *Role) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Role.Marshal(b, m, deterministic)
}
func (m *Role) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Role.Merge(m, src)
}
func (m *Role) XXX_Size() int {
	return xxx_messageInfo_Role.Size(m)
}
func (m *Role) XXX_DiscardUnknown() {
	xxx_messageInfo_Role.DiscardUnknown(m)
}

var xxx_messageInfo_Role proto.InternalMessageInfo

func (m *Role) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Role) GetActions() []string {
	if m != nil {
		return m.Actions
	}
	return nil
}

type RegisterAccountRqst struct {
	Account              *Account `protobuf:"bytes,1,opt,name=account,proto3" json:"account,omitempty"`
	Password             string   `protobuf:"bytes,2,opt,name=password,proto3" json:"password,omitempty"`
	ConfirmPassword      string   `protobuf:"bytes,3,opt,name=confirm_password,json=confirmPassword,proto3" json:"confirm_password,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RegisterAccountRqst) Reset()         { *m = RegisterAccountRqst{} }
func (m *RegisterAccountRqst) String() string { return proto.CompactTextString(m) }
func (*RegisterAccountRqst) ProtoMessage()    {}
func (*RegisterAccountRqst) Descriptor() ([]byte, []int) {
	return fileDescriptor_f22aaa66144afcde, []int{2}
}

func (m *RegisterAccountRqst) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RegisterAccountRqst.Unmarshal(m, b)
}
func (m *RegisterAccountRqst) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RegisterAccountRqst.Marshal(b, m, deterministic)
}
func (m *RegisterAccountRqst) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RegisterAccountRqst.Merge(m, src)
}
func (m *RegisterAccountRqst) XXX_Size() int {
	return xxx_messageInfo_RegisterAccountRqst.Size(m)
}
func (m *RegisterAccountRqst) XXX_DiscardUnknown() {
	xxx_messageInfo_RegisterAccountRqst.DiscardUnknown(m)
}

var xxx_messageInfo_RegisterAccountRqst proto.InternalMessageInfo

func (m *RegisterAccountRqst) GetAccount() *Account {
	if m != nil {
		return m.Account
	}
	return nil
}

func (m *RegisterAccountRqst) GetPassword() string {
	if m != nil {
		return m.Password
	}
	return ""
}

func (m *RegisterAccountRqst) GetConfirmPassword() string {
	if m != nil {
		return m.ConfirmPassword
	}
	return ""
}

type RegisterAccountRsp struct {
	Result               string   `protobuf:"bytes,1,opt,name=result,proto3" json:"result,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RegisterAccountRsp) Reset()         { *m = RegisterAccountRsp{} }
func (m *RegisterAccountRsp) String() string { return proto.CompactTextString(m) }
func (*RegisterAccountRsp) ProtoMessage()    {}
func (*RegisterAccountRsp) Descriptor() ([]byte, []int) {
	return fileDescriptor_f22aaa66144afcde, []int{3}
}

func (m *RegisterAccountRsp) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RegisterAccountRsp.Unmarshal(m, b)
}
func (m *RegisterAccountRsp) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RegisterAccountRsp.Marshal(b, m, deterministic)
}
func (m *RegisterAccountRsp) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RegisterAccountRsp.Merge(m, src)
}
func (m *RegisterAccountRsp) XXX_Size() int {
	return xxx_messageInfo_RegisterAccountRsp.Size(m)
}
func (m *RegisterAccountRsp) XXX_DiscardUnknown() {
	xxx_messageInfo_RegisterAccountRsp.DiscardUnknown(m)
}

var xxx_messageInfo_RegisterAccountRsp proto.InternalMessageInfo

func (m *RegisterAccountRsp) GetResult() string {
	if m != nil {
		return m.Result
	}
	return ""
}

type DeleteAccountRqst struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteAccountRqst) Reset()         { *m = DeleteAccountRqst{} }
func (m *DeleteAccountRqst) String() string { return proto.CompactTextString(m) }
func (*DeleteAccountRqst) ProtoMessage()    {}
func (*DeleteAccountRqst) Descriptor() ([]byte, []int) {
	return fileDescriptor_f22aaa66144afcde, []int{4}
}

func (m *DeleteAccountRqst) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteAccountRqst.Unmarshal(m, b)
}
func (m *DeleteAccountRqst) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteAccountRqst.Marshal(b, m, deterministic)
}
func (m *DeleteAccountRqst) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteAccountRqst.Merge(m, src)
}
func (m *DeleteAccountRqst) XXX_Size() int {
	return xxx_messageInfo_DeleteAccountRqst.Size(m)
}
func (m *DeleteAccountRqst) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteAccountRqst.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteAccountRqst proto.InternalMessageInfo

func (m *DeleteAccountRqst) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type DeleteAccountRsp struct {
	Result               string   `protobuf:"bytes,1,opt,name=result,proto3" json:"result,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteAccountRsp) Reset()         { *m = DeleteAccountRsp{} }
func (m *DeleteAccountRsp) String() string { return proto.CompactTextString(m) }
func (*DeleteAccountRsp) ProtoMessage()    {}
func (*DeleteAccountRsp) Descriptor() ([]byte, []int) {
	return fileDescriptor_f22aaa66144afcde, []int{5}
}

func (m *DeleteAccountRsp) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteAccountRsp.Unmarshal(m, b)
}
func (m *DeleteAccountRsp) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteAccountRsp.Marshal(b, m, deterministic)
}
func (m *DeleteAccountRsp) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteAccountRsp.Merge(m, src)
}
func (m *DeleteAccountRsp) XXX_Size() int {
	return xxx_messageInfo_DeleteAccountRsp.Size(m)
}
func (m *DeleteAccountRsp) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteAccountRsp.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteAccountRsp proto.InternalMessageInfo

func (m *DeleteAccountRsp) GetResult() string {
	if m != nil {
		return m.Result
	}
	return ""
}

//* Authenticate the user *
type AuthenticateRqst struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Password             string   `protobuf:"bytes,2,opt,name=password,proto3" json:"password,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *AuthenticateRqst) Reset()         { *m = AuthenticateRqst{} }
func (m *AuthenticateRqst) String() string { return proto.CompactTextString(m) }
func (*AuthenticateRqst) ProtoMessage()    {}
func (*AuthenticateRqst) Descriptor() ([]byte, []int) {
	return fileDescriptor_f22aaa66144afcde, []int{6}
}

func (m *AuthenticateRqst) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_AuthenticateRqst.Unmarshal(m, b)
}
func (m *AuthenticateRqst) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_AuthenticateRqst.Marshal(b, m, deterministic)
}
func (m *AuthenticateRqst) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AuthenticateRqst.Merge(m, src)
}
func (m *AuthenticateRqst) XXX_Size() int {
	return xxx_messageInfo_AuthenticateRqst.Size(m)
}
func (m *AuthenticateRqst) XXX_DiscardUnknown() {
	xxx_messageInfo_AuthenticateRqst.DiscardUnknown(m)
}

var xxx_messageInfo_AuthenticateRqst proto.InternalMessageInfo

func (m *AuthenticateRqst) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *AuthenticateRqst) GetPassword() string {
	if m != nil {
		return m.Password
	}
	return ""
}

type AuthenticateRsp struct {
	Token                string   `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *AuthenticateRsp) Reset()         { *m = AuthenticateRsp{} }
func (m *AuthenticateRsp) String() string { return proto.CompactTextString(m) }
func (*AuthenticateRsp) ProtoMessage()    {}
func (*AuthenticateRsp) Descriptor() ([]byte, []int) {
	return fileDescriptor_f22aaa66144afcde, []int{7}
}

func (m *AuthenticateRsp) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_AuthenticateRsp.Unmarshal(m, b)
}
func (m *AuthenticateRsp) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_AuthenticateRsp.Marshal(b, m, deterministic)
}
func (m *AuthenticateRsp) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AuthenticateRsp.Merge(m, src)
}
func (m *AuthenticateRsp) XXX_Size() int {
	return xxx_messageInfo_AuthenticateRsp.Size(m)
}
func (m *AuthenticateRsp) XXX_DiscardUnknown() {
	xxx_messageInfo_AuthenticateRsp.DiscardUnknown(m)
}

var xxx_messageInfo_AuthenticateRsp proto.InternalMessageInfo

func (m *AuthenticateRsp) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

func init() {
	proto.RegisterType((*Account)(nil), "ressource.Account")
	proto.RegisterType((*Role)(nil), "ressource.Role")
	proto.RegisterType((*RegisterAccountRqst)(nil), "ressource.RegisterAccountRqst")
	proto.RegisterType((*RegisterAccountRsp)(nil), "ressource.RegisterAccountRsp")
	proto.RegisterType((*DeleteAccountRqst)(nil), "ressource.DeleteAccountRqst")
	proto.RegisterType((*DeleteAccountRsp)(nil), "ressource.DeleteAccountRsp")
	proto.RegisterType((*AuthenticateRqst)(nil), "ressource.AuthenticateRqst")
	proto.RegisterType((*AuthenticateRsp)(nil), "ressource.AuthenticateRsp")
}

func init() { proto.RegisterFile("ressource/ressource.proto", fileDescriptor_f22aaa66144afcde) }

var fileDescriptor_f22aaa66144afcde = []byte{
	// 348 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x53, 0x4d, 0x4f, 0xc2, 0x40,
	0x10, 0x4d, 0x01, 0x41, 0x06, 0x0d, 0x75, 0x34, 0xa6, 0xd6, 0x8f, 0x90, 0x5e, 0x40, 0x43, 0x30,
	0x41, 0xff, 0x00, 0xc4, 0xc4, 0xc4, 0x8b, 0xa4, 0xde, 0xbc, 0x98, 0x5a, 0x47, 0x6d, 0x2c, 0xdd,
	0x75, 0x67, 0xab, 0xff, 0xc1, 0x7f, 0xec, 0xcd, 0x50, 0x5a, 0x68, 0x2b, 0x70, 0xdb, 0x37, 0xf3,
	0xf6, 0xe5, 0xbd, 0xb7, 0x59, 0x38, 0x52, 0xc4, 0x2c, 0x62, 0xe5, 0xd3, 0xe5, 0xe2, 0x34, 0x90,
	0x4a, 0x68, 0x81, 0xcd, 0xc5, 0xc0, 0xb9, 0x87, 0xc6, 0xc8, 0xf7, 0x45, 0x1c, 0x69, 0x44, 0xa8,
	0x45, 0xde, 0x94, 0x2c, 0xa3, 0x63, 0xf4, 0x9a, 0x6e, 0x72, 0xc6, 0x03, 0xd8, 0xa2, 0xa9, 0x17,
	0x84, 0x56, 0x25, 0x19, 0xce, 0x01, 0xda, 0xb0, 0x2d, 0x3d, 0xe6, 0x6f, 0xa1, 0x5e, 0xac, 0x6a,
	0xb2, 0x58, 0x60, 0xe7, 0x1a, 0x6a, 0xae, 0x08, 0x69, 0xa5, 0x9a, 0x05, 0x0d, 0xcf, 0xd7, 0x81,
	0x88, 0xd8, 0xaa, 0x74, 0xaa, 0xbd, 0xa6, 0x9b, 0x41, 0xe7, 0xc7, 0x80, 0x7d, 0x97, 0xde, 0x02,
	0xd6, 0xa4, 0x52, 0x3f, 0xee, 0x27, 0x6b, 0xec, 0xcf, 0x6e, 0x24, 0x30, 0x11, 0x6a, 0x0d, 0x71,
	0xb0, 0x0c, 0x93, 0x11, 0x33, 0x4a, 0xc1, 0x57, 0xa5, 0xe8, 0x0b, 0xcf, 0xc1, 0xf4, 0x45, 0xf4,
	0x1a, 0xa8, 0xe9, 0x53, 0xc9, 0x7b, 0x3b, 0x9d, 0x4f, 0xb2, 0x08, 0x7d, 0xc0, 0xb2, 0x17, 0x96,
	0x78, 0x08, 0x75, 0x45, 0x1c, 0x87, 0x3a, 0x8d, 0x94, 0x22, 0xa7, 0x0b, 0x7b, 0x37, 0x14, 0x92,
	0xa6, 0xbc, 0xef, 0x15, 0xe9, 0x9d, 0x0b, 0x30, 0x8b, 0xc4, 0x0d, 0xa2, 0x63, 0x30, 0x47, 0xb1,
	0x7e, 0xa7, 0x48, 0x07, 0xbe, 0xa7, 0x69, 0x9d, 0xe6, 0xa6, 0xc4, 0x4e, 0x17, 0xda, 0x05, 0x0d,
	0x96, 0xb3, 0xe7, 0xd4, 0xe2, 0x83, 0xa2, 0x54, 0x63, 0x0e, 0x86, 0xbf, 0x06, 0x98, 0x6e, 0xd6,
	0xea, 0x03, 0xa9, 0xaf, 0xc0, 0x27, 0x9c, 0x40, 0xbb, 0x54, 0x02, 0x9e, 0xe5, 0xba, 0x5f, 0xf1,
	0x58, 0xf6, 0xe9, 0x86, 0x3d, 0x4b, 0xbc, 0x83, 0xdd, 0x42, 0x7e, 0x3c, 0xc9, 0xf1, 0xff, 0x55,
	0x68, 0x1f, 0xaf, 0xdd, 0xb2, 0xc4, 0x5b, 0xd8, 0xc9, 0x67, 0xc3, 0x3c, 0xb9, 0x5c, 0x9c, 0x6d,
	0xaf, 0x5b, 0xb2, 0x1c, 0xb7, 0x1e, 0x97, 0x9f, 0xe1, 0xb9, 0x9e, 0x7c, 0x8f, 0xab, 0xbf, 0x00,
	0x00, 0x00, 0xff, 0xff, 0x83, 0xbc, 0xe1, 0x4e, 0x3b, 0x03, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// RessourceServiceClient is the client API for RessourceService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type RessourceServiceClient interface {
	//* Register a new Account *
	RegisterAccount(ctx context.Context, in *RegisterAccountRqst, opts ...grpc.CallOption) (*RegisterAccountRsp, error)
	//* Delete an account *
	DeleteAccount(ctx context.Context, in *DeleteAccountRqst, opts ...grpc.CallOption) (*DeleteAccountRsp, error)
	//* Authenticate a user *
	Authenticate(ctx context.Context, in *AuthenticateRqst, opts ...grpc.CallOption) (*AuthenticateRsp, error)
}

type ressourceServiceClient struct {
	cc *grpc.ClientConn
}

func NewRessourceServiceClient(cc *grpc.ClientConn) RessourceServiceClient {
	return &ressourceServiceClient{cc}
}

func (c *ressourceServiceClient) RegisterAccount(ctx context.Context, in *RegisterAccountRqst, opts ...grpc.CallOption) (*RegisterAccountRsp, error) {
	out := new(RegisterAccountRsp)
	err := c.cc.Invoke(ctx, "/ressource.RessourceService/RegisterAccount", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ressourceServiceClient) DeleteAccount(ctx context.Context, in *DeleteAccountRqst, opts ...grpc.CallOption) (*DeleteAccountRsp, error) {
	out := new(DeleteAccountRsp)
	err := c.cc.Invoke(ctx, "/ressource.RessourceService/DeleteAccount", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ressourceServiceClient) Authenticate(ctx context.Context, in *AuthenticateRqst, opts ...grpc.CallOption) (*AuthenticateRsp, error) {
	out := new(AuthenticateRsp)
	err := c.cc.Invoke(ctx, "/ressource.RessourceService/Authenticate", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// RessourceServiceServer is the server API for RessourceService service.
type RessourceServiceServer interface {
	//* Register a new Account *
	RegisterAccount(context.Context, *RegisterAccountRqst) (*RegisterAccountRsp, error)
	//* Delete an account *
	DeleteAccount(context.Context, *DeleteAccountRqst) (*DeleteAccountRsp, error)
	//* Authenticate a user *
	Authenticate(context.Context, *AuthenticateRqst) (*AuthenticateRsp, error)
}

// UnimplementedRessourceServiceServer can be embedded to have forward compatible implementations.
type UnimplementedRessourceServiceServer struct {
}

func (*UnimplementedRessourceServiceServer) RegisterAccount(ctx context.Context, req *RegisterAccountRqst) (*RegisterAccountRsp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RegisterAccount not implemented")
}
func (*UnimplementedRessourceServiceServer) DeleteAccount(ctx context.Context, req *DeleteAccountRqst) (*DeleteAccountRsp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteAccount not implemented")
}
func (*UnimplementedRessourceServiceServer) Authenticate(ctx context.Context, req *AuthenticateRqst) (*AuthenticateRsp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Authenticate not implemented")
}

func RegisterRessourceServiceServer(s *grpc.Server, srv RessourceServiceServer) {
	s.RegisterService(&_RessourceService_serviceDesc, srv)
}

func _RessourceService_RegisterAccount_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RegisterAccountRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RessourceServiceServer).RegisterAccount(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ressource.RessourceService/RegisterAccount",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RessourceServiceServer).RegisterAccount(ctx, req.(*RegisterAccountRqst))
	}
	return interceptor(ctx, in, info, handler)
}

func _RessourceService_DeleteAccount_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteAccountRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RessourceServiceServer).DeleteAccount(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ressource.RessourceService/DeleteAccount",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RessourceServiceServer).DeleteAccount(ctx, req.(*DeleteAccountRqst))
	}
	return interceptor(ctx, in, info, handler)
}

func _RessourceService_Authenticate_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AuthenticateRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RessourceServiceServer).Authenticate(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ressource.RessourceService/Authenticate",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RessourceServiceServer).Authenticate(ctx, req.(*AuthenticateRqst))
	}
	return interceptor(ctx, in, info, handler)
}

var _RessourceService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ressource.RessourceService",
	HandlerType: (*RessourceServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "RegisterAccount",
			Handler:    _RessourceService_RegisterAccount_Handler,
		},
		{
			MethodName: "DeleteAccount",
			Handler:    _RessourceService_DeleteAccount_Handler,
		},
		{
			MethodName: "Authenticate",
			Handler:    _RessourceService_Authenticate_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ressource/ressource.proto",
}
