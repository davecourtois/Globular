# [go to Globular website](https://globular.io)

## Why Globular?
If gRPC is of great help with service implementation, it does nothing about service management. In fact, service management is out of gRPC  scope, but it’s the main purpose of globular. Managing service manually can be easy if you have only couple of service, and the number of application is limited. Over time number of applications and services has tendency to increase, and when that happened, you can became a victim of your success.

What propertie must be define on a service to make it manageable? To be manageable a service must be,

* Identifiable: The service Id identified a running service on a given server with a given domain. The Id must be unique on the server, and must not change over time, or application that using it will stop working correctly.

* Nameable: Multiple instances of the same service must be able to run at the same time, in redundancy, instance must share the same service name.

* Versionable: Service interface can change overtime, application must be able to get access to specific service version. With version service functionality are not freeze in time.

* Maintainable: When many service instances are running it can be difficult and error prone to update them one by one.

* Available: If a service crash for any reason, it must be restart. Over time loosing service instances can result in unstable applications.

* Reachable: Here tree properties are requires, the domain and the port/proxy pair. Those properties are used to get the instance network address.

* Trustable: Https is here, and TLS is perfectly integrated in gRPC. Globular help you with the creation and the management of certificate. Easy and secure that's what Globular is all about. Not only you can secure the underlying data socket but also you can easly manage who can access ressource and execute method.

* Scalable: Almost every application start small, but with success cames demand, and scalibility must be part of the equation before everything else. Globular let you run your own cloud by creating a Globular Cluster, that's where the project get it's name. The architecture of Globular was created with scalability in mind before anything else.

By using Globular you will be able to manage your microservices and make them avaible to your web-applications.

Click [here](https://globular.io) and learn more about globular!

You can also install globular via docker's image's, [here](https://hub.docker.com/r/globular/globular)

** The vesion 1.0 is available. The website is not 100% finish but installation and quickstart are ready to help you to make your first step. A complete tutorial it's on the way to be complete. All documentation must be written before the end of feburary.

## First Step with Globular

### How to configure your server

Globular is all about gRpc, so the way you communicate with your backend is via gRpc Api. We made use of evan's. If your installation run at localhost without tls, simply run cmd,

``` sh
$ evans -port 10001 -r
```
If your server has a domain and he's secured with tls, you must get access to certificate. To do so execute the following command,

``` sh
$ Globular certificates -domain=globular.live -path=/tmp/tata -port=80
$ Your certificate are installed: 
$ cacert:  /tmp/tata/config/tls/globular.live/ca.crt
$ cert:  /tmp/tata/config/tls/globular.live/client.crt
$ certkey:  /tmp/tata/config/tls/globular.live/client.pem
```
** Note that you must have Globular in your path or be in the same directory as the exec.

So to log into evans you must do the following command,
``` sh
$ evans --host globular.live -r --tls --cacert "/tmp/tata/config/tls/globular.live/ca.crt" --cert  "/tmp/tata/config/tls/globular.live/client.crt" --certkey "/tmp/tata/config/tls/globular.live/client.pem" --port 10003
```
** if you got access denied try the command with sudo, or change permission on the certificate by given read access to your user.


