package Interceptors

import "context"
import "log"
import "google.golang.org/grpc"
import "github.com/davecourtois/Globular/ressource"
import "google.golang.org/grpc/metadata"
import "strings"
import "errors"
import "github.com/davecourtois/Globular/file/filepb"

var (
	ressource_client *ressource.Ressource_Client
)

/**
 * Get a the local ressource client.
 */
func getRessourceClient() *ressource.Ressource_Client {
	if ressource_client == nil {
		ressource_client = ressource.NewRessource_Client("localhost", "Ressource")
	}

	return ressource_client
}

/**
 * Return the file permission necessary for a given method.
 */
func getFilePermissionForMethod(method string, req interface{}) (string, string) {
	var path string
	var permission string

	if method == "/file.FileService/ReadDir" {
		rqst := req.(*filepb.ReadDirRequest)
		if len(rqst.GetPath()) > 1 {
			path = rqst.GetPath()
		}
		permission = "read"
	} else if method == "/file.FileService/CreateDir" {
		rqst := req.(*filepb.CreateDirRequest)
		if len(rqst.GetPath()) > 1 {
			path = rqst.GetPath()
		}
		permission = "write"
	} else if method == "/file.FileService/DeleteDir" {
		rqst := req.(*filepb.DeleteDirRequest)
		if len(rqst.GetPath()) > 1 {
			path = rqst.GetPath()
		}
		permission = "delete"
	} else if method == "/file.FileService/Rename" {
		rqst := req.(*filepb.RenameRequest)
		if len(rqst.GetPath()) > 1 {
			path = rqst.GetPath() + "/" + rqst.GetOldName()
		} else {
			path = rqst.GetOldName()
		}
		permission = "write"
	} else if method == "/file.FileService/GetFileInfo" {
		rqst := req.(*filepb.ReadFileRequest)
		if len(rqst.GetPath()) > 1 {
			path = rqst.GetPath()
		}
		permission = "read"
	} else if method == "/file.FileService/ReadFile" {
		rqst := req.(*filepb.SaveFileRequest)
		if len(rqst.GetPath()) > 1 {
			path = rqst.GetPath()
		}
		permission = "read"
	} else if method == "/file.FileService/SaveFile" {
		rqst := req.(*filepb.SaveFileRequest)
		if len(rqst.GetPath()) > 1 {
			path = rqst.GetPath()
		}
		permission = "write"
	} else if method == "/file.FileService/DeleteFile" {
		rqst := req.(*filepb.DeleteFileRequest)
		if len(rqst.GetPath()) > 1 {
			path = rqst.GetPath()
		}
		permission = "delete"
	} else if method == "/file.FileService/GetThumbnails" {
		rqst := req.(*filepb.GetThumbnailsRequest)
		if len(rqst.GetPath()) > 1 {
			path = rqst.GetPath()
		}
		permission = "read"
	} else if method == "/file.FileService/WriteExcelFile" {
		rqst := req.(*filepb.WriteExcelFileRequest)
		if len(rqst.GetPath()) > 1 {
			path = rqst.GetPath()
		}
		permission = "write"
	} else if method == "/file.FileService/CreateAchive" {
		rqst := req.(*filepb.CreateArchiveRequest)
		if len(rqst.GetPath()) > 1 {
			path = rqst.GetPath()
		}
		permission = "read"
	} else if method == "/ressource.RessourceService/SetPermission" {
		rqst := req.(*ressource.SetPermissionRqst)
		if len(rqst.Permission.GetPath()) > 1 {
			path = rqst.Permission.GetPath()
		}
		permission = "write"
	} else if method == "/ressource.RessourceService/DeletePermissions" {
		rqst := req.(*ressource.DeletePermissionsRqst)
		if len(rqst.GetPath()) > 1 {
			path = rqst.GetPath()
		}
		permission = "delete"
	} else if method == "/ressource.RessourceService/SetRessourceOwner" {
		rqst := req.(*ressource.SetRessourceOwnerRqst)
		if len(rqst.GetPath()) > 1 {
			path = rqst.GetPath()
		}
		permission = "write"
	} else if method == "/ressource.RessourceService/DeleteRessourceOwner" {
		rqst := req.(*ressource.DeleteRessourceOwnerRqst)
		if len(rqst.GetPath()) > 1 {
			path = rqst.GetPath()
		}
		permission = "delete"
	}

	path = strings.ReplaceAll(path, "\\", "/")
	return path, permission

}

/**
 * Validate user file permission.
 */
func ValidateUserRessourceAccess(token string, method string, path string, permission string) error {
	hasAccess, err := getRessourceClient().ValidateUserRessourceAccess(token, path, method, permission)
	if err != nil {
		return err
	}
	if !hasAccess {
		return errors.New("Permission denied! for file " + path)
	}
	return nil
}

/**
 * Validate application file permission.
 */
func ValidateApplicationRessourceAccess(applicationName string, method string, path string, permission string) error {
	hasAccess, err := getRessourceClient().ValidateApplicationRessourceAccess(applicationName, path, method, permission)
	if err != nil {
		return err
	}
	if !hasAccess {
		return errors.New("Permission denied! for file " + path)
	}
	return nil
}

// That interceptor is use by all services except the ressource service who has
// it own interceptor.
func ServerUnaryInterceptor(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {

	// The token and the application id.
	var token string
	var application string

	if md, ok := metadata.FromIncomingContext(ctx); ok {
		application = strings.Join(md["application"], "")
		token = strings.Join(md["token"], "")
	}

	method := info.FullMethod
	hasAccess := false

	var err error
	// Here is the list of method accessible by default.
	if method == "/admin.AdminService/GetConfig" ||
		method == "/event.EventService/Subscribe" ||
		method == "/event.EventService/UnSubscribe" ||
		method == "/event.EventService/OnEvent" ||
		method == "/event.EventService/Quit" ||
		method == "/event.EventService/Publish" ||
		method == "/services.ServiceDiscovery/FindServices" ||
		method == "/services.ServiceDiscovery/GetServiceDescriptor" ||
		method == "/services.ServiceDiscovery/GetServicesDescriptor" ||
		method == "/services.ServiceRepository/downloadBundle" ||
		method == "/persistence.PersistenceService/CreateConnection" ||
		method == "/persistence.PersistenceService/Find" ||
		method == "/persistence.PersistenceService/FindOne" ||
		method == "/persistence.PersistenceService/Count" {
		hasAccess = true
	}

	// Test if the user has access to execute the method
	if len(token) > 0 && !hasAccess {
		hasAccess, err = getRessourceClient().ValidateUserAccess(token, method)
		if err != nil {
			return nil, err
		}
	}

	// Test if the application has access to execute the method.
	if len(application) > 0 && !hasAccess {
		hasAccess, err = getRessourceClient().ValidateApplicationAccess(application, method)
		if err != nil {
			return nil, err
		}
	}

	if !hasAccess {
		return nil, errors.New("Permission denied to execute method " + method)
	}

	// Now I will test file permission.
	if strings.HasPrefix(method, "/file.FileService/") {
		hasFilePermission := false
		path, permission := getFilePermissionForMethod(method, req)

		// I will test if the user has file permission.
		hasFilePermission, err = getRessourceClient().ValidateUserRessourceAccess(token, path, method, permission)
		if err != nil {
			return nil, err
		}

		if !hasFilePermission {
			hasFilePermission, err = getRessourceClient().ValidateApplicationRessourceAccess(application, path, method, permission)
			if err != nil {
				return nil, err
			}
		}

		// If permission is denied...
		if !hasFilePermission {
			return nil, errors.New("Permission denied for file " + path)
		}
	} else {
		log.Println("-----------> get Ressource Permission! ---> method | RessourcePermission (read|write|delete)")
	}

	// Execute the action.
	result, err := handler(ctx, req)

	// Send log event...
	clientId, _, _ := ValidateToken(token)
	getRessourceClient().Log(application, clientId, method, err)

	// Here depending of the request I will execute more actions.
	if err == nil {
		if method == "/file.FileService/CreateDir" {
			rqst := req.(*filepb.CreateDirRequest)
			err := getRessourceClient().CreateDirPermissions(token, rqst.GetPath(), rqst.GetName())
			if err != nil {
				log.Println(err)
			}
		} else if method == "/file.FileService/Rename" {
			rqst := req.(*filepb.RenameRequest)
			err := getRessourceClient().RenameFilePermission(rqst.GetPath(), rqst.GetOldName(), rqst.GetNewName())
			if err != nil {
				log.Println(err)
			}
		} else if method == "/file.FileService/DeleteFile" {
			rqst := req.(*filepb.DeleteFileRequest)
			err := getRessourceClient().DeleteFilePermissions(rqst.GetPath())
			if err != nil {
				log.Println(err)
			}
		} else if method == "/file.FileService/DeleteDir" {
			rqst := req.(*filepb.DeleteDirRequest)
			err := getRessourceClient().DeleteDirPermissions(rqst.GetPath())
			if err != nil {
				log.Println(err)
			}
		}
	}

	return result, err

}

// Stream interceptor.
func ServerStreamInterceptor(srv interface{}, stream grpc.ServerStream, info *grpc.StreamServerInfo, handler grpc.StreamHandler) error {

	// The token and the application id.
	var token string
	var application string

	if md, ok := metadata.FromIncomingContext(stream.Context()); ok {
		application = strings.Join(md["application"], "")
		token = strings.Join(md["token"], "")
	}

	method := info.FullMethod
	hasAccess := false
	var err error
	if method == "/persistence.PersistenceService/Find" {
		hasAccess = true
	}

	// Test if the user has access to execute the method
	if len(token) > 0 && !hasAccess {
		hasAccess, err = getRessourceClient().ValidateUserAccess(token, method)
		if err != nil {
			return err
		}
	}

	if !hasAccess {
		return errors.New("Permission denied to execute method " + method)
	}

	// Test if the application has access to execute the method.
	if len(application) > 0 && !hasAccess {
		hasAccess, err = getRessourceClient().ValidateApplicationAccess(application, method)
		if err != nil {
			return err
		}
	}

	err = handler(srv, stream)

	// TODO find when the stream is closing and log only one time.
	//if err == io.EOF {
	// Send log event...
	clientId, _, _ := ValidateToken(token)
	getRessourceClient().Log(application, clientId, method, err)
	//}

	if err != nil {
		return err
	}

	return nil
}
