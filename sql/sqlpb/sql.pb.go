// Code generated by protoc-gen-go. DO NOT EDIT.
// source: sql/sqlpb/sql.proto

package sqlpb

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

type Connection struct {
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Host                 string   `protobuf:"bytes,3,opt,name=host,proto3" json:"host,omitempty"`
	Charset              string   `protobuf:"bytes,4,opt,name=charset,proto3" json:"charset,omitempty"`
	Driver               string   `protobuf:"bytes,5,opt,name=driver,proto3" json:"driver,omitempty"`
	User                 string   `protobuf:"bytes,6,opt,name=user,proto3" json:"user,omitempty"`
	Password             string   `protobuf:"bytes,7,opt,name=password,proto3" json:"password,omitempty"`
	Port                 int32    `protobuf:"varint,8,opt,name=port,proto3" json:"port,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Connection) Reset()         { *m = Connection{} }
func (m *Connection) String() string { return proto.CompactTextString(m) }
func (*Connection) ProtoMessage()    {}
func (*Connection) Descriptor() ([]byte, []int) {
	return fileDescriptor_2da55317ac97bdd2, []int{0}
}

func (m *Connection) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Connection.Unmarshal(m, b)
}
func (m *Connection) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Connection.Marshal(b, m, deterministic)
}
func (m *Connection) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Connection.Merge(m, src)
}
func (m *Connection) XXX_Size() int {
	return xxx_messageInfo_Connection.Size(m)
}
func (m *Connection) XXX_DiscardUnknown() {
	xxx_messageInfo_Connection.DiscardUnknown(m)
}

var xxx_messageInfo_Connection proto.InternalMessageInfo

func (m *Connection) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Connection) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Connection) GetHost() string {
	if m != nil {
		return m.Host
	}
	return ""
}

func (m *Connection) GetCharset() string {
	if m != nil {
		return m.Charset
	}
	return ""
}

func (m *Connection) GetDriver() string {
	if m != nil {
		return m.Driver
	}
	return ""
}

func (m *Connection) GetUser() string {
	if m != nil {
		return m.User
	}
	return ""
}

func (m *Connection) GetPassword() string {
	if m != nil {
		return m.Password
	}
	return ""
}

func (m *Connection) GetPort() int32 {
	if m != nil {
		return m.Port
	}
	return 0
}

// Create connection
type CreateConnectionRqst struct {
	Connection           *Connection `protobuf:"bytes,1,opt,name=connection,proto3" json:"connection,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *CreateConnectionRqst) Reset()         { *m = CreateConnectionRqst{} }
func (m *CreateConnectionRqst) String() string { return proto.CompactTextString(m) }
func (*CreateConnectionRqst) ProtoMessage()    {}
func (*CreateConnectionRqst) Descriptor() ([]byte, []int) {
	return fileDescriptor_2da55317ac97bdd2, []int{1}
}

func (m *CreateConnectionRqst) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateConnectionRqst.Unmarshal(m, b)
}
func (m *CreateConnectionRqst) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateConnectionRqst.Marshal(b, m, deterministic)
}
func (m *CreateConnectionRqst) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateConnectionRqst.Merge(m, src)
}
func (m *CreateConnectionRqst) XXX_Size() int {
	return xxx_messageInfo_CreateConnectionRqst.Size(m)
}
func (m *CreateConnectionRqst) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateConnectionRqst.DiscardUnknown(m)
}

var xxx_messageInfo_CreateConnectionRqst proto.InternalMessageInfo

func (m *CreateConnectionRqst) GetConnection() *Connection {
	if m != nil {
		return m.Connection
	}
	return nil
}

type CreateConnectionRsp struct {
	Result               bool     `protobuf:"varint,1,opt,name=result,proto3" json:"result,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CreateConnectionRsp) Reset()         { *m = CreateConnectionRsp{} }
func (m *CreateConnectionRsp) String() string { return proto.CompactTextString(m) }
func (*CreateConnectionRsp) ProtoMessage()    {}
func (*CreateConnectionRsp) Descriptor() ([]byte, []int) {
	return fileDescriptor_2da55317ac97bdd2, []int{2}
}

func (m *CreateConnectionRsp) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateConnectionRsp.Unmarshal(m, b)
}
func (m *CreateConnectionRsp) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateConnectionRsp.Marshal(b, m, deterministic)
}
func (m *CreateConnectionRsp) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateConnectionRsp.Merge(m, src)
}
func (m *CreateConnectionRsp) XXX_Size() int {
	return xxx_messageInfo_CreateConnectionRsp.Size(m)
}
func (m *CreateConnectionRsp) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateConnectionRsp.DiscardUnknown(m)
}

var xxx_messageInfo_CreateConnectionRsp proto.InternalMessageInfo

func (m *CreateConnectionRsp) GetResult() bool {
	if m != nil {
		return m.Result
	}
	return false
}

// Delete connection
type DeleteConnectionRqst struct {
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteConnectionRqst) Reset()         { *m = DeleteConnectionRqst{} }
func (m *DeleteConnectionRqst) String() string { return proto.CompactTextString(m) }
func (*DeleteConnectionRqst) ProtoMessage()    {}
func (*DeleteConnectionRqst) Descriptor() ([]byte, []int) {
	return fileDescriptor_2da55317ac97bdd2, []int{3}
}

func (m *DeleteConnectionRqst) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteConnectionRqst.Unmarshal(m, b)
}
func (m *DeleteConnectionRqst) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteConnectionRqst.Marshal(b, m, deterministic)
}
func (m *DeleteConnectionRqst) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteConnectionRqst.Merge(m, src)
}
func (m *DeleteConnectionRqst) XXX_Size() int {
	return xxx_messageInfo_DeleteConnectionRqst.Size(m)
}
func (m *DeleteConnectionRqst) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteConnectionRqst.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteConnectionRqst proto.InternalMessageInfo

func (m *DeleteConnectionRqst) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

type DeleteConnectionRsp struct {
	Result               bool     `protobuf:"varint,1,opt,name=result,proto3" json:"result,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteConnectionRsp) Reset()         { *m = DeleteConnectionRsp{} }
func (m *DeleteConnectionRsp) String() string { return proto.CompactTextString(m) }
func (*DeleteConnectionRsp) ProtoMessage()    {}
func (*DeleteConnectionRsp) Descriptor() ([]byte, []int) {
	return fileDescriptor_2da55317ac97bdd2, []int{4}
}

func (m *DeleteConnectionRsp) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteConnectionRsp.Unmarshal(m, b)
}
func (m *DeleteConnectionRsp) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteConnectionRsp.Marshal(b, m, deterministic)
}
func (m *DeleteConnectionRsp) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteConnectionRsp.Merge(m, src)
}
func (m *DeleteConnectionRsp) XXX_Size() int {
	return xxx_messageInfo_DeleteConnectionRsp.Size(m)
}
func (m *DeleteConnectionRsp) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteConnectionRsp.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteConnectionRsp proto.InternalMessageInfo

func (m *DeleteConnectionRsp) GetResult() bool {
	if m != nil {
		return m.Result
	}
	return false
}

// Ping Connection
type PingConnectionRqst struct {
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PingConnectionRqst) Reset()         { *m = PingConnectionRqst{} }
func (m *PingConnectionRqst) String() string { return proto.CompactTextString(m) }
func (*PingConnectionRqst) ProtoMessage()    {}
func (*PingConnectionRqst) Descriptor() ([]byte, []int) {
	return fileDescriptor_2da55317ac97bdd2, []int{5}
}

func (m *PingConnectionRqst) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PingConnectionRqst.Unmarshal(m, b)
}
func (m *PingConnectionRqst) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PingConnectionRqst.Marshal(b, m, deterministic)
}
func (m *PingConnectionRqst) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PingConnectionRqst.Merge(m, src)
}
func (m *PingConnectionRqst) XXX_Size() int {
	return xxx_messageInfo_PingConnectionRqst.Size(m)
}
func (m *PingConnectionRqst) XXX_DiscardUnknown() {
	xxx_messageInfo_PingConnectionRqst.DiscardUnknown(m)
}

var xxx_messageInfo_PingConnectionRqst proto.InternalMessageInfo

func (m *PingConnectionRqst) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

type PingConnectionRsp struct {
	Result               string   `protobuf:"bytes,1,opt,name=result,proto3" json:"result,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PingConnectionRsp) Reset()         { *m = PingConnectionRsp{} }
func (m *PingConnectionRsp) String() string { return proto.CompactTextString(m) }
func (*PingConnectionRsp) ProtoMessage()    {}
func (*PingConnectionRsp) Descriptor() ([]byte, []int) {
	return fileDescriptor_2da55317ac97bdd2, []int{6}
}

func (m *PingConnectionRsp) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PingConnectionRsp.Unmarshal(m, b)
}
func (m *PingConnectionRsp) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PingConnectionRsp.Marshal(b, m, deterministic)
}
func (m *PingConnectionRsp) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PingConnectionRsp.Merge(m, src)
}
func (m *PingConnectionRsp) XXX_Size() int {
	return xxx_messageInfo_PingConnectionRsp.Size(m)
}
func (m *PingConnectionRsp) XXX_DiscardUnknown() {
	xxx_messageInfo_PingConnectionRsp.DiscardUnknown(m)
}

var xxx_messageInfo_PingConnectionRsp proto.InternalMessageInfo

func (m *PingConnectionRsp) GetResult() string {
	if m != nil {
		return m.Result
	}
	return ""
}

type Query struct {
	ConnectionId         string   `protobuf:"bytes,1,opt,name=connectionId,proto3" json:"connectionId,omitempty"`
	Query                string   `protobuf:"bytes,2,opt,name=query,proto3" json:"query,omitempty"`
	Parameters           string   `protobuf:"bytes,3,opt,name=parameters,proto3" json:"parameters,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Query) Reset()         { *m = Query{} }
func (m *Query) String() string { return proto.CompactTextString(m) }
func (*Query) ProtoMessage()    {}
func (*Query) Descriptor() ([]byte, []int) {
	return fileDescriptor_2da55317ac97bdd2, []int{7}
}

func (m *Query) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Query.Unmarshal(m, b)
}
func (m *Query) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Query.Marshal(b, m, deterministic)
}
func (m *Query) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Query.Merge(m, src)
}
func (m *Query) XXX_Size() int {
	return xxx_messageInfo_Query.Size(m)
}
func (m *Query) XXX_DiscardUnknown() {
	xxx_messageInfo_Query.DiscardUnknown(m)
}

var xxx_messageInfo_Query proto.InternalMessageInfo

func (m *Query) GetConnectionId() string {
	if m != nil {
		return m.ConnectionId
	}
	return ""
}

func (m *Query) GetQuery() string {
	if m != nil {
		return m.Query
	}
	return ""
}

func (m *Query) GetParameters() string {
	if m != nil {
		return m.Parameters
	}
	return ""
}

type QueryContextRqst struct {
	Query                *Query   `protobuf:"bytes,1,opt,name=query,proto3" json:"query,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *QueryContextRqst) Reset()         { *m = QueryContextRqst{} }
func (m *QueryContextRqst) String() string { return proto.CompactTextString(m) }
func (*QueryContextRqst) ProtoMessage()    {}
func (*QueryContextRqst) Descriptor() ([]byte, []int) {
	return fileDescriptor_2da55317ac97bdd2, []int{8}
}

func (m *QueryContextRqst) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_QueryContextRqst.Unmarshal(m, b)
}
func (m *QueryContextRqst) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_QueryContextRqst.Marshal(b, m, deterministic)
}
func (m *QueryContextRqst) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryContextRqst.Merge(m, src)
}
func (m *QueryContextRqst) XXX_Size() int {
	return xxx_messageInfo_QueryContextRqst.Size(m)
}
func (m *QueryContextRqst) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryContextRqst.DiscardUnknown(m)
}

var xxx_messageInfo_QueryContextRqst proto.InternalMessageInfo

func (m *QueryContextRqst) GetQuery() *Query {
	if m != nil {
		return m.Query
	}
	return nil
}

type QueryContextRsp struct {
	// The header contain result columns information and can be usefull to display data.
	// - DatabaseTypeName The sql type name
	// - Name The name of the column
	// - Scale The digit scale.
	// - Precision The digit precision
	// - IsNillable True if the value can be null
	// The header is alwas send in the first message of the stream
	// Name are alwas given but DatabaseTypeName can be empty depending of the
	// driver use, mySql has value but odbc donsent have it.
	//
	// Types that are valid to be assigned to Result:
	//	*QueryContextRsp_Header
	//	*QueryContextRsp_Rows
	Result               isQueryContextRsp_Result `protobuf_oneof:"result"`
	XXX_NoUnkeyedLiteral struct{}                 `json:"-"`
	XXX_unrecognized     []byte                   `json:"-"`
	XXX_sizecache        int32                    `json:"-"`
}

func (m *QueryContextRsp) Reset()         { *m = QueryContextRsp{} }
func (m *QueryContextRsp) String() string { return proto.CompactTextString(m) }
func (*QueryContextRsp) ProtoMessage()    {}
func (*QueryContextRsp) Descriptor() ([]byte, []int) {
	return fileDescriptor_2da55317ac97bdd2, []int{9}
}

func (m *QueryContextRsp) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_QueryContextRsp.Unmarshal(m, b)
}
func (m *QueryContextRsp) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_QueryContextRsp.Marshal(b, m, deterministic)
}
func (m *QueryContextRsp) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryContextRsp.Merge(m, src)
}
func (m *QueryContextRsp) XXX_Size() int {
	return xxx_messageInfo_QueryContextRsp.Size(m)
}
func (m *QueryContextRsp) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryContextRsp.DiscardUnknown(m)
}

var xxx_messageInfo_QueryContextRsp proto.InternalMessageInfo

type isQueryContextRsp_Result interface {
	isQueryContextRsp_Result()
}

type QueryContextRsp_Header struct {
	Header string `protobuf:"bytes,1,opt,name=header,proto3,oneof"`
}

type QueryContextRsp_Rows struct {
	Rows string `protobuf:"bytes,2,opt,name=rows,proto3,oneof"`
}

func (*QueryContextRsp_Header) isQueryContextRsp_Result() {}

func (*QueryContextRsp_Rows) isQueryContextRsp_Result() {}

func (m *QueryContextRsp) GetResult() isQueryContextRsp_Result {
	if m != nil {
		return m.Result
	}
	return nil
}

func (m *QueryContextRsp) GetHeader() string {
	if x, ok := m.GetResult().(*QueryContextRsp_Header); ok {
		return x.Header
	}
	return ""
}

func (m *QueryContextRsp) GetRows() string {
	if x, ok := m.GetResult().(*QueryContextRsp_Rows); ok {
		return x.Rows
	}
	return ""
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*QueryContextRsp) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*QueryContextRsp_Header)(nil),
		(*QueryContextRsp_Rows)(nil),
	}
}

type ExecContextRqst struct {
	Query                *Query   `protobuf:"bytes,1,opt,name=query,proto3" json:"query,omitempty"`
	Tx                   bool     `protobuf:"varint,2,opt,name=tx,proto3" json:"tx,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ExecContextRqst) Reset()         { *m = ExecContextRqst{} }
func (m *ExecContextRqst) String() string { return proto.CompactTextString(m) }
func (*ExecContextRqst) ProtoMessage()    {}
func (*ExecContextRqst) Descriptor() ([]byte, []int) {
	return fileDescriptor_2da55317ac97bdd2, []int{10}
}

func (m *ExecContextRqst) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ExecContextRqst.Unmarshal(m, b)
}
func (m *ExecContextRqst) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ExecContextRqst.Marshal(b, m, deterministic)
}
func (m *ExecContextRqst) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ExecContextRqst.Merge(m, src)
}
func (m *ExecContextRqst) XXX_Size() int {
	return xxx_messageInfo_ExecContextRqst.Size(m)
}
func (m *ExecContextRqst) XXX_DiscardUnknown() {
	xxx_messageInfo_ExecContextRqst.DiscardUnknown(m)
}

var xxx_messageInfo_ExecContextRqst proto.InternalMessageInfo

func (m *ExecContextRqst) GetQuery() *Query {
	if m != nil {
		return m.Query
	}
	return nil
}

func (m *ExecContextRqst) GetTx() bool {
	if m != nil {
		return m.Tx
	}
	return false
}

type ExecContextRsp struct {
	AffectedRows         int64    `protobuf:"varint,1,opt,name=affectedRows,proto3" json:"affectedRows,omitempty"`
	LastId               int64    `protobuf:"varint,2,opt,name=lastId,proto3" json:"lastId,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ExecContextRsp) Reset()         { *m = ExecContextRsp{} }
func (m *ExecContextRsp) String() string { return proto.CompactTextString(m) }
func (*ExecContextRsp) ProtoMessage()    {}
func (*ExecContextRsp) Descriptor() ([]byte, []int) {
	return fileDescriptor_2da55317ac97bdd2, []int{11}
}

func (m *ExecContextRsp) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ExecContextRsp.Unmarshal(m, b)
}
func (m *ExecContextRsp) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ExecContextRsp.Marshal(b, m, deterministic)
}
func (m *ExecContextRsp) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ExecContextRsp.Merge(m, src)
}
func (m *ExecContextRsp) XXX_Size() int {
	return xxx_messageInfo_ExecContextRsp.Size(m)
}
func (m *ExecContextRsp) XXX_DiscardUnknown() {
	xxx_messageInfo_ExecContextRsp.DiscardUnknown(m)
}

var xxx_messageInfo_ExecContextRsp proto.InternalMessageInfo

func (m *ExecContextRsp) GetAffectedRows() int64 {
	if m != nil {
		return m.AffectedRows
	}
	return 0
}

func (m *ExecContextRsp) GetLastId() int64 {
	if m != nil {
		return m.LastId
	}
	return 0
}

func init() {
	proto.RegisterType((*Connection)(nil), "sql.Connection")
	proto.RegisterType((*CreateConnectionRqst)(nil), "sql.CreateConnectionRqst")
	proto.RegisterType((*CreateConnectionRsp)(nil), "sql.CreateConnectionRsp")
	proto.RegisterType((*DeleteConnectionRqst)(nil), "sql.DeleteConnectionRqst")
	proto.RegisterType((*DeleteConnectionRsp)(nil), "sql.DeleteConnectionRsp")
	proto.RegisterType((*PingConnectionRqst)(nil), "sql.PingConnectionRqst")
	proto.RegisterType((*PingConnectionRsp)(nil), "sql.PingConnectionRsp")
	proto.RegisterType((*Query)(nil), "sql.Query")
	proto.RegisterType((*QueryContextRqst)(nil), "sql.QueryContextRqst")
	proto.RegisterType((*QueryContextRsp)(nil), "sql.QueryContextRsp")
	proto.RegisterType((*ExecContextRqst)(nil), "sql.ExecContextRqst")
	proto.RegisterType((*ExecContextRsp)(nil), "sql.ExecContextRsp")
}

func init() { proto.RegisterFile("sql/sqlpb/sql.proto", fileDescriptor_2da55317ac97bdd2) }

var fileDescriptor_2da55317ac97bdd2 = []byte{
	// 534 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x94, 0xdd, 0x6e, 0xd3, 0x30,
	0x14, 0xc7, 0xfb, 0xdd, 0xee, 0x6c, 0x5a, 0xc7, 0x69, 0x19, 0xa6, 0x17, 0xa8, 0xb2, 0x10, 0x9a,
	0x84, 0xd8, 0xd0, 0xe0, 0x06, 0x6e, 0x90, 0x56, 0x10, 0xab, 0xe0, 0x02, 0xbc, 0x3b, 0xee, 0xbc,
	0xe4, 0x8c, 0x46, 0xca, 0xf2, 0x61, 0xbb, 0x5b, 0x79, 0x35, 0x1e, 0x85, 0xa7, 0x41, 0x76, 0xd2,
	0x36, 0x4d, 0x22, 0xd0, 0x6e, 0x22, 0x9f, 0xbf, 0xff, 0xfe, 0xd9, 0xe7, 0x43, 0x81, 0x91, 0x4e,
	0xc3, 0x33, 0x9d, 0x86, 0xc9, 0xb5, 0xfd, 0x9e, 0x26, 0x2a, 0x36, 0x31, 0xb6, 0x75, 0x1a, 0xf2,
	0xdf, 0x4d, 0x80, 0x59, 0x1c, 0x45, 0xe4, 0x99, 0x20, 0x8e, 0xf0, 0x10, 0x5a, 0x81, 0xcf, 0x9a,
	0xd3, 0xe6, 0xc9, 0x9e, 0x68, 0x05, 0x3e, 0x22, 0x74, 0x22, 0x79, 0x4b, 0xac, 0xe5, 0x14, 0xb7,
	0xb6, 0xda, 0x22, 0xd6, 0x86, 0xb5, 0x33, 0xcd, 0xae, 0x91, 0x41, 0xdf, 0x5b, 0x48, 0xa5, 0xc9,
	0xb0, 0x8e, 0x93, 0xd7, 0x21, 0x1e, 0x43, 0xcf, 0x57, 0xc1, 0x1d, 0x29, 0xd6, 0x75, 0x1b, 0x79,
	0x64, 0x29, 0x4b, 0x4d, 0x8a, 0xf5, 0x32, 0x8a, 0x5d, 0xe3, 0x04, 0x06, 0x89, 0xd4, 0xfa, 0x3e,
	0x56, 0x3e, 0xeb, 0x3b, 0x7d, 0x13, 0x5b, 0x7f, 0x12, 0x2b, 0xc3, 0x06, 0xd3, 0xe6, 0x49, 0x57,
	0xb8, 0x35, 0xff, 0x0c, 0xe3, 0x99, 0x22, 0x69, 0x68, 0x9b, 0x81, 0x48, 0xb5, 0xc1, 0x33, 0x00,
	0x6f, 0xa3, 0xb8, 0x6c, 0xf6, 0xcf, 0x87, 0xa7, 0x36, 0xf3, 0x82, 0xb1, 0x60, 0xe1, 0xaf, 0x60,
	0x54, 0x01, 0xe9, 0xc4, 0xbe, 0x5d, 0x91, 0x5e, 0x86, 0xc6, 0x31, 0x06, 0x22, 0x8f, 0xf8, 0x0b,
	0x18, 0x7f, 0xa4, 0x90, 0x2a, 0xf7, 0x96, 0xaa, 0x67, 0xb1, 0x15, 0xdf, 0x3f, 0xb0, 0xcf, 0x01,
	0xbf, 0x05, 0xd1, 0xcf, 0xff, 0x40, 0x5f, 0xc2, 0xa3, 0x92, 0xab, 0x82, 0xdc, 0xdb, 0x20, 0x25,
	0x74, 0xbf, 0x2f, 0x49, 0xfd, 0x42, 0x0e, 0x07, 0xdb, 0x7c, 0xe7, 0x6b, 0xde, 0x8e, 0x86, 0x63,
	0xe8, 0xa6, 0xd6, 0x9c, 0x77, 0x3b, 0x0b, 0xf0, 0x19, 0x40, 0x22, 0x95, 0xbc, 0x25, 0x43, 0x4a,
	0xe7, 0x4d, 0x2f, 0x28, 0xfc, 0x2d, 0x1c, 0xb9, 0x2b, 0x66, 0x71, 0x64, 0x68, 0x65, 0xdc, 0x9b,
	0xa7, 0x6b, 0x52, 0x56, 0x7b, 0x70, 0xb5, 0x77, 0xae, 0x9c, 0xca, 0xbf, 0xc0, 0x70, 0xe7, 0x94,
	0x4e, 0x90, 0x41, 0x6f, 0x41, 0xd2, 0x27, 0x95, 0x3d, 0xee, 0xb2, 0x21, 0xf2, 0x18, 0xc7, 0xd0,
	0x51, 0xf1, 0xbd, 0xce, 0xde, 0x75, 0xd9, 0x10, 0x2e, 0xba, 0x18, 0xac, 0x73, 0xe6, 0x33, 0x18,
	0x7e, 0x5a, 0x91, 0xf7, 0xa0, 0x17, 0xd8, 0xba, 0x9a, 0x95, 0x43, 0x0e, 0x44, 0xcb, 0xac, 0xf8,
	0x57, 0x38, 0x2c, 0x42, 0x74, 0x62, 0x6b, 0x26, 0x6f, 0x6e, 0xc8, 0x33, 0xe4, 0x0b, 0x7b, 0xbd,
	0x45, 0xb5, 0xc5, 0x8e, 0x66, 0x0b, 0x1f, 0x4a, 0x6d, 0xe6, 0xbe, 0x23, 0xb5, 0x45, 0x1e, 0x9d,
	0xff, 0x69, 0x01, 0x5c, 0xa5, 0xe1, 0x15, 0xa9, 0xbb, 0xc0, 0x23, 0x9c, 0xc3, 0x51, 0x79, 0xc0,
	0xf0, 0x69, 0x36, 0x91, 0x35, 0x03, 0x3c, 0x61, 0xf5, 0x5b, 0x3a, 0xe1, 0x0d, 0x8b, 0x2a, 0x0f,
	0x55, 0x8e, 0xaa, 0x9b, 0xc9, 0x1c, 0x55, 0x33, 0x86, 0xbc, 0x81, 0xef, 0xa0, 0x63, 0x47, 0x09,
	0x9f, 0x38, 0x4f, 0x75, 0xf6, 0x26, 0xc7, 0x75, 0x1b, 0xee, 0xe8, 0x07, 0x38, 0x28, 0xf6, 0x0f,
	0x1f, 0x6f, 0x0b, 0x5c, 0x68, 0xc3, 0x64, 0x5c, 0x95, 0xed, 0xf1, 0xd7, 0x4d, 0x7c, 0x0f, 0xfb,
	0x85, 0x72, 0x63, 0x66, 0x2c, 0x75, 0x71, 0x32, 0xaa, 0xa8, 0xf6, 0xf4, 0x45, 0xff, 0x47, 0xd7,
	0xfd, 0xcc, 0xae, 0x7b, 0xee, 0x4f, 0xf6, 0xe6, 0x6f, 0x00, 0x00, 0x00, 0xff, 0xff, 0x7d, 0x63,
	0xbf, 0xd0, 0xe0, 0x04, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// SqlServiceClient is the client API for SqlService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type SqlServiceClient interface {
	// Create a connection.
	CreateConnection(ctx context.Context, in *CreateConnectionRqst, opts ...grpc.CallOption) (*CreateConnectionRsp, error)
	// Delete a connection.
	DeleteConnection(ctx context.Context, in *DeleteConnectionRqst, opts ...grpc.CallOption) (*DeleteConnectionRsp, error)
	// Ping existing connection.
	Ping(ctx context.Context, in *PingConnectionRqst, opts ...grpc.CallOption) (*PingConnectionRsp, error)
	// That query return zero or more Rows as a reults, SQL SELECT
	QueryContext(ctx context.Context, in *QueryContextRqst, opts ...grpc.CallOption) (SqlService_QueryContextClient, error)
	// Exec Query SQL CREATE and INSERT. Return number of affected rows and last id
	// if there is an id.
	ExecContext(ctx context.Context, in *ExecContextRqst, opts ...grpc.CallOption) (*ExecContextRsp, error)
}

type sqlServiceClient struct {
	cc *grpc.ClientConn
}

func NewSqlServiceClient(cc *grpc.ClientConn) SqlServiceClient {
	return &sqlServiceClient{cc}
}

func (c *sqlServiceClient) CreateConnection(ctx context.Context, in *CreateConnectionRqst, opts ...grpc.CallOption) (*CreateConnectionRsp, error) {
	out := new(CreateConnectionRsp)
	err := c.cc.Invoke(ctx, "/sql.SqlService/CreateConnection", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sqlServiceClient) DeleteConnection(ctx context.Context, in *DeleteConnectionRqst, opts ...grpc.CallOption) (*DeleteConnectionRsp, error) {
	out := new(DeleteConnectionRsp)
	err := c.cc.Invoke(ctx, "/sql.SqlService/DeleteConnection", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sqlServiceClient) Ping(ctx context.Context, in *PingConnectionRqst, opts ...grpc.CallOption) (*PingConnectionRsp, error) {
	out := new(PingConnectionRsp)
	err := c.cc.Invoke(ctx, "/sql.SqlService/Ping", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sqlServiceClient) QueryContext(ctx context.Context, in *QueryContextRqst, opts ...grpc.CallOption) (SqlService_QueryContextClient, error) {
	stream, err := c.cc.NewStream(ctx, &_SqlService_serviceDesc.Streams[0], "/sql.SqlService/QueryContext", opts...)
	if err != nil {
		return nil, err
	}
	x := &sqlServiceQueryContextClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type SqlService_QueryContextClient interface {
	Recv() (*QueryContextRsp, error)
	grpc.ClientStream
}

type sqlServiceQueryContextClient struct {
	grpc.ClientStream
}

func (x *sqlServiceQueryContextClient) Recv() (*QueryContextRsp, error) {
	m := new(QueryContextRsp)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *sqlServiceClient) ExecContext(ctx context.Context, in *ExecContextRqst, opts ...grpc.CallOption) (*ExecContextRsp, error) {
	out := new(ExecContextRsp)
	err := c.cc.Invoke(ctx, "/sql.SqlService/ExecContext", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// SqlServiceServer is the server API for SqlService service.
type SqlServiceServer interface {
	// Create a connection.
	CreateConnection(context.Context, *CreateConnectionRqst) (*CreateConnectionRsp, error)
	// Delete a connection.
	DeleteConnection(context.Context, *DeleteConnectionRqst) (*DeleteConnectionRsp, error)
	// Ping existing connection.
	Ping(context.Context, *PingConnectionRqst) (*PingConnectionRsp, error)
	// That query return zero or more Rows as a reults, SQL SELECT
	QueryContext(*QueryContextRqst, SqlService_QueryContextServer) error
	// Exec Query SQL CREATE and INSERT. Return number of affected rows and last id
	// if there is an id.
	ExecContext(context.Context, *ExecContextRqst) (*ExecContextRsp, error)
}

// UnimplementedSqlServiceServer can be embedded to have forward compatible implementations.
type UnimplementedSqlServiceServer struct {
}

func (*UnimplementedSqlServiceServer) CreateConnection(ctx context.Context, req *CreateConnectionRqst) (*CreateConnectionRsp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateConnection not implemented")
}
func (*UnimplementedSqlServiceServer) DeleteConnection(ctx context.Context, req *DeleteConnectionRqst) (*DeleteConnectionRsp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteConnection not implemented")
}
func (*UnimplementedSqlServiceServer) Ping(ctx context.Context, req *PingConnectionRqst) (*PingConnectionRsp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Ping not implemented")
}
func (*UnimplementedSqlServiceServer) QueryContext(req *QueryContextRqst, srv SqlService_QueryContextServer) error {
	return status.Errorf(codes.Unimplemented, "method QueryContext not implemented")
}
func (*UnimplementedSqlServiceServer) ExecContext(ctx context.Context, req *ExecContextRqst) (*ExecContextRsp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ExecContext not implemented")
}

func RegisterSqlServiceServer(s *grpc.Server, srv SqlServiceServer) {
	s.RegisterService(&_SqlService_serviceDesc, srv)
}

func _SqlService_CreateConnection_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateConnectionRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SqlServiceServer).CreateConnection(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/sql.SqlService/CreateConnection",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SqlServiceServer).CreateConnection(ctx, req.(*CreateConnectionRqst))
	}
	return interceptor(ctx, in, info, handler)
}

func _SqlService_DeleteConnection_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteConnectionRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SqlServiceServer).DeleteConnection(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/sql.SqlService/DeleteConnection",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SqlServiceServer).DeleteConnection(ctx, req.(*DeleteConnectionRqst))
	}
	return interceptor(ctx, in, info, handler)
}

func _SqlService_Ping_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PingConnectionRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SqlServiceServer).Ping(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/sql.SqlService/Ping",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SqlServiceServer).Ping(ctx, req.(*PingConnectionRqst))
	}
	return interceptor(ctx, in, info, handler)
}

func _SqlService_QueryContext_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(QueryContextRqst)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(SqlServiceServer).QueryContext(m, &sqlServiceQueryContextServer{stream})
}

type SqlService_QueryContextServer interface {
	Send(*QueryContextRsp) error
	grpc.ServerStream
}

type sqlServiceQueryContextServer struct {
	grpc.ServerStream
}

func (x *sqlServiceQueryContextServer) Send(m *QueryContextRsp) error {
	return x.ServerStream.SendMsg(m)
}

func _SqlService_ExecContext_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ExecContextRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SqlServiceServer).ExecContext(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/sql.SqlService/ExecContext",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SqlServiceServer).ExecContext(ctx, req.(*ExecContextRqst))
	}
	return interceptor(ctx, in, info, handler)
}

var _SqlService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "sql.SqlService",
	HandlerType: (*SqlServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateConnection",
			Handler:    _SqlService_CreateConnection_Handler,
		},
		{
			MethodName: "DeleteConnection",
			Handler:    _SqlService_DeleteConnection_Handler,
		},
		{
			MethodName: "Ping",
			Handler:    _SqlService_Ping_Handler,
		},
		{
			MethodName: "ExecContext",
			Handler:    _SqlService_ExecContext_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "QueryContext",
			Handler:       _SqlService_QueryContext_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "sql/sqlpb/sql.proto",
}
