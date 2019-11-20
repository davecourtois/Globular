package ldap_client

import (
	// "context"
	// "log"
	"strconv"

	"github.com/davecourtois/Globular/api"
	"github.com/davecourtois/Globular/ldap/ldappb"
	"google.golang.org/grpc"
)

////////////////////////////////////////////////////////////////////////////////
// LDAP Client Service
////////////////////////////////////////////////////////////////////////////////

type LDAP_Client struct {
	cc *grpc.ClientConn
	c  ldappb.LdapServiceClient

	// The name of the service
	name string

	// The ipv4 address
	addresse string

	// The client domain
	domain string

	// The port number
	port int

	// is the connection is secure?
	hasTLS bool

	// Link to client key file
	keyFile string

	// Link to client certificate file.
	certFile string

	// certificate authority file
	caFile string
}

// Create a connection to the service.
func NewLdap_Client(domain string, port int, hasTLS bool, keyFile string, certFile string, caFile string) *LDAP_Client {
	client := new(LDAP_Client)

	client.name = "ldap"
	client.hasTLS = hasTLS
	client.keyFile = keyFile
	client.certFile = certFile
	client.caFile = caFile
	client.domain = domain
	client.port = port
	client.cc = api.GetClientConnection(client)
	client.c = ldappb.NewLdapServiceClient(client.cc)

	return client
}

// Return the domain
func (self *LDAP_Client) GetDomain() string {
	return self.domain
}

func (self *LDAP_Client) GetAddress() string {
	return self.domain + ":" + strconv.Itoa(self.port)
}

// Return the name of the service
func (self *LDAP_Client) GetName() string {
	return self.name
}

// must be close when no more needed.
func (self *LDAP_Client) Close() {
	self.cc.Close()
}

////////////////// TLS ///////////////////

// Get if the client is secure.
func (self *LDAP_Client) HasTLS() bool {
	return self.hasTLS
}

// Get the TLS certificate file path
func (self *LDAP_Client) GetCertFile() string {
	return self.certFile
}

// Get the TLS key file path
func (self *LDAP_Client) GetKeyFile() string {
	return self.keyFile
}

// Get the TLS key file path
func (self *LDAP_Client) GetCaFile() string {
	return self.caFile
}
