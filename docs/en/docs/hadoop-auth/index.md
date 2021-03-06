

# Hadoop Auth, Java HTTP SPNEGO

Hadoop Auth is a Java library consisting of a client and a server components to enable Kerberos SPNEGO authentication for HTTP.

Hadoop Auth also supports additional authentication mechanisms on the client and the server side via 2 simple interfaces.

Additionally, it provides a partially implemented derivative of the Kerberos SPNEGO authentication to allow a “mixed” form of authentication where Kerberos SPNEGO is used by non-browsers while an alternate form of authentication (to be implemented by the user) is used for browsers.

## License

Hadoop Auth is distributed under [Apache License 2.0](http://www.apache.org/licenses/).

## How Does Auth Works?

Hadoop Auth enforces authentication on protected resources, once authentiation has been established it sets a signed HTTP Cookie that contains an authentication token with the user name, user principal, authentication type and expiration time.

Subsequent HTTP client requests presenting the signed HTTP Cookie have access to the protected resources until the HTTP Cookie expires.

The secret used to sign the HTTP Cookie has multiple implementations that provide different behaviors, including a hardcoded secret string, a rolling randomly generated secret, and a rolling randomly generated secret synchronized between multiple servers using ZooKeeper.

## User Documentation

  * [Examples](./Examples.html)
  * [Configuration](./Configuration.html)
  * [Building It](./BuildingIt.html)


