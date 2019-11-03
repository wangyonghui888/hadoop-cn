(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{356:function(e,t,r){"use strict";r.r(t);var s=r(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"hadoop-encrypted-shuffle"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-encrypted-shuffle"}},[e._v("#")]),e._v(" Hadoop: Encrypted Shuffle")]),e._v(" "),r("h2",{attrs:{id:"introduction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),r("p",[e._v("The Encrypted Shuffle capability allows encryption of the MapReduce shuffle using HTTPS and with optional client authentication (also known as bi-directional HTTPS, or HTTPS with client certificates). It comprises:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("A Hadoop configuration setting for toggling the shuffle between HTTP and HTTPS.")])]),e._v(" "),r("li",[r("p",[e._v("A Hadoop configuration settings for specifying the keystore and truststore properties (location, type, passwords) used by the shuffle service and the reducers tasks fetching shuffle data.")])]),e._v(" "),r("li",[r("p",[e._v("A way to re-load truststores across the cluster (when a node is added or removed).")])])]),e._v(" "),r("h2",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),r("h3",{attrs:{id:"core-site-xml-properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#core-site-xml-properties"}},[e._v("#")]),e._v(" core-site.xml Properties")]),e._v(" "),r("p",[e._v("To enable encrypted shuffle, set the following properties in core-site.xml of all nodes in the cluster:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Property")]),e._v(" "),r("th",[e._v("Default Value")]),e._v(" "),r("th",[e._v("Explanation")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("hadoop.ssl.require.client.cert")]),e._v(" "),r("td",[e._v("false")]),e._v(" "),r("td",[e._v("Whether client certificates are required")])]),e._v(" "),r("tr",[r("td",[e._v("hadoop.ssl.hostname.verifier")]),e._v(" "),r("td",[e._v("DEFAULT")]),e._v(" "),r("td",[e._v("The hostname verifier to provide for HttpsURLConnections. Valid values are: DEFAULT, STRICT, STRICT_IE6, DEFAULT_AND_LOCALHOST and ALLOW_ALL")])]),e._v(" "),r("tr",[r("td",[e._v("hadoop.ssl.keystores.factory.class")]),e._v(" "),r("td",[e._v("org.apache.hadoop.security.ssl.FileBasedKeyStoresFactory")]),e._v(" "),r("td",[e._v("The KeyStoresFactory implementation to use")])]),e._v(" "),r("tr",[r("td",[e._v("hadoop.ssl.server.conf")]),e._v(" "),r("td",[e._v("ssl-server.xml")]),e._v(" "),r("td",[e._v("Resource file from which ssl server keystore information will be extracted. This file is looked up in the classpath, typically it should be in Hadoop conf/ directory")])]),e._v(" "),r("tr",[r("td",[e._v("hadoop.ssl.client.conf")]),e._v(" "),r("td",[e._v("ssl-client.xml")]),e._v(" "),r("td",[e._v("Resource file from which ssl server keystore information will be extracted. This file is looked up in the classpath, typically it should be in Hadoop conf/ directory")])]),e._v(" "),r("tr",[r("td",[e._v("hadoop.ssl.enabled.protocols")]),e._v(" "),r("td",[e._v("TLSv1,SSLv2Hello,TLSv1.1,TLSv1.2")]),e._v(" "),r("td",[e._v("The supported SSL protocols")])])])]),e._v(" "),r("p",[e._v("IMPORTANT: Currently requiring client certificates should be set to false. Refer the Client Certificates section for details.")]),e._v(" "),r("p",[e._v("IMPORTANT: All these properties should be marked as final in the cluster configuration files.")]),e._v(" "),r("h4",{attrs:{id:"example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example:")]),e._v(" "),r("pre",[r("code",[e._v("  <property>\n    <name>hadoop.ssl.require.client.cert</name>\n    <value>false</value>\n    <final>true</final>\n  </property>\n\n  <property>\n    <name>hadoop.ssl.hostname.verifier</name>\n    <value>DEFAULT</value>\n    <final>true</final>\n  </property>\n\n  <property>\n    <name>hadoop.ssl.keystores.factory.class</name>\n    <value>org.apache.hadoop.security.ssl.FileBasedKeyStoresFactory</value>\n    <final>true</final>\n  </property>\n\n  <property>\n    <name>hadoop.ssl.server.conf</name>\n    <value>ssl-server.xml</value>\n    <final>true</final>\n  </property>\n\n  <property>\n    <name>hadoop.ssl.client.conf</name>\n    <value>ssl-client.xml</value>\n    <final>true</final>\n  </property>\n")])]),e._v(" "),r("h3",{attrs:{id:"mapred-site-xml-properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mapred-site-xml-properties"}},[e._v("#")]),e._v(" mapred-site.xml Properties")]),e._v(" "),r("p",[e._v("To enable encrypted shuffle, set the following property in mapred-site.xml of all nodes in the cluster:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Property")]),e._v(" "),r("th",[e._v("Default Value")]),e._v(" "),r("th",[e._v("Explanation")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("mapreduce.shuffle.ssl.enabled")]),e._v(" "),r("td",[e._v("false")]),e._v(" "),r("td",[e._v("Whether encrypted shuffle is enabled")])])])]),e._v(" "),r("p",[e._v("IMPORTANT: This property should be marked as final in the cluster configuration files.")]),e._v(" "),r("h4",{attrs:{id:"example-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[e._v("#")]),e._v(" Example:")]),e._v(" "),r("pre",[r("code",[e._v("  <property>\n    <name>mapreduce.shuffle.ssl.enabled</name>\n    <value>true</value>\n    <final>true</final>\n  </property>\n")])]),e._v(" "),r("p",[e._v("The Linux container executor should be set to prevent job tasks from reading the server keystore information and gaining access to the shuffle server certificates.")]),e._v(" "),r("p",[e._v("Refer to Hadoop Kerberos configuration for details on how to do this.")]),e._v(" "),r("h2",{attrs:{id:"keystore-and-truststore-settings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keystore-and-truststore-settings"}},[e._v("#")]),e._v(" Keystore and Truststore Settings")]),e._v(" "),r("p",[e._v("Currently FileBasedKeyStoresFactory is the only KeyStoresFactory implementation. The FileBasedKeyStoresFactory implementation uses the following properties, in the ssl-server.xml and ssl-client.xml files, to configure the keystores and truststores.")]),e._v(" "),r("h3",{attrs:{id:"ssl-server-xml-shuffle-server-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssl-server-xml-shuffle-server-configuration"}},[e._v("#")]),e._v(" ssl-server.xml (Shuffle server) Configuration:")]),e._v(" "),r("p",[e._v("The mapred user should own the ssl-server.xml file and have exclusive read access to it.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Property")]),e._v(" "),r("th",[e._v("Default Value")]),e._v(" "),r("th",[e._v("Explanation")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("ssl.server.keystore.type")]),e._v(" "),r("td",[e._v("jks")]),e._v(" "),r("td",[e._v("Keystore file type")])]),e._v(" "),r("tr",[r("td",[e._v("ssl.server.keystore.location")]),e._v(" "),r("td",[e._v("NONE")]),e._v(" "),r("td",[e._v("Keystore file location. The mapred user should own this file and have exclusive read access to it.")])]),e._v(" "),r("tr",[r("td",[e._v("ssl.server.keystore.password")]),e._v(" "),r("td",[e._v("NONE")]),e._v(" "),r("td",[e._v("Keystore file password")])]),e._v(" "),r("tr",[r("td",[e._v("ssl.server.truststore.type")]),e._v(" "),r("td",[e._v("jks")]),e._v(" "),r("td",[e._v("Truststore file type")])]),e._v(" "),r("tr",[r("td",[e._v("ssl.server.truststore.location")]),e._v(" "),r("td",[e._v("NONE")]),e._v(" "),r("td",[e._v("Truststore file location. The mapred user should own this file and have exclusive read access to it.")])]),e._v(" "),r("tr",[r("td",[e._v("ssl.server.truststore.password")]),e._v(" "),r("td",[e._v("NONE")]),e._v(" "),r("td",[e._v("Truststore file password")])]),e._v(" "),r("tr",[r("td",[e._v("ssl.server.truststore.reload.interval")]),e._v(" "),r("td",[e._v("10000")]),e._v(" "),r("td",[e._v("Truststore reload interval, in milliseconds")])])])]),e._v(" "),r("h4",{attrs:{id:"example-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[e._v("#")]),e._v(" Example:")]),e._v(" "),r("pre",[r("code",[e._v("<configuration>\n\n  \x3c!-- Server Certificate Store --\x3e\n  <property>\n    <name>ssl.server.keystore.type</name>\n    <value>jks</value>\n  </property>\n  <property>\n    <name>ssl.server.keystore.location</name>\n    <value>${user.home}/keystores/server-keystore.jks</value>\n  </property>\n  <property>\n    <name>ssl.server.keystore.password</name>\n    <value>serverfoo</value>\n  </property>\n\n  \x3c!-- Server Trust Store --\x3e\n  <property>\n    <name>ssl.server.truststore.type</name>\n    <value>jks</value>\n  </property>\n  <property>\n    <name>ssl.server.truststore.location</name>\n    <value>${user.home}/keystores/truststore.jks</value>\n  </property>\n  <property>\n    <name>ssl.server.truststore.password</name>\n    <value>clientserverbar</value>\n  </property>\n  <property>\n    <name>ssl.server.truststore.reload.interval</name>\n    <value>10000</value>\n  </property>\n</configuration>\n")])]),e._v(" "),r("h3",{attrs:{id:"ssl-client-xml-reducer-fetcher-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssl-client-xml-reducer-fetcher-configuration"}},[e._v("#")]),e._v(" ssl-client.xml (Reducer/Fetcher) Configuration:")]),e._v(" "),r("p",[e._v("The mapred user should own the ssl-client.xml file and it should have default permissions.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Property")]),e._v(" "),r("th",[e._v("Default Value")]),e._v(" "),r("th",[e._v("Explanation")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("ssl.client.keystore.type")]),e._v(" "),r("td",[e._v("jks")]),e._v(" "),r("td",[e._v("Keystore file type")])]),e._v(" "),r("tr",[r("td",[e._v("ssl.client.keystore.location")]),e._v(" "),r("td",[e._v("NONE")]),e._v(" "),r("td",[e._v("Keystore file location. The mapred user should own this file and it should have default permissions.")])]),e._v(" "),r("tr",[r("td",[e._v("ssl.client.keystore.password")]),e._v(" "),r("td",[e._v("NONE")]),e._v(" "),r("td",[e._v("Keystore file password")])]),e._v(" "),r("tr",[r("td",[e._v("ssl.client.truststore.type")]),e._v(" "),r("td",[e._v("jks")]),e._v(" "),r("td",[e._v("Truststore file type")])]),e._v(" "),r("tr",[r("td",[e._v("ssl.client.truststore.location")]),e._v(" "),r("td",[e._v("NONE")]),e._v(" "),r("td",[e._v("Truststore file location. The mapred user should own this file and it should have default permissions.")])]),e._v(" "),r("tr",[r("td",[e._v("ssl.client.truststore.password")]),e._v(" "),r("td",[e._v("NONE")]),e._v(" "),r("td",[e._v("Truststore file password")])]),e._v(" "),r("tr",[r("td",[e._v("ssl.client.truststore.reload.interval")]),e._v(" "),r("td",[e._v("10000")]),e._v(" "),r("td",[e._v("Truststore reload interval, in milliseconds")])])])]),e._v(" "),r("h4",{attrs:{id:"example-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-4"}},[e._v("#")]),e._v(" Example:")]),e._v(" "),r("pre",[r("code",[e._v("<configuration>\n\n  \x3c!-- Client certificate Store --\x3e\n  <property>\n    <name>ssl.client.keystore.type</name>\n    <value>jks</value>\n  </property>\n  <property>\n    <name>ssl.client.keystore.location</name>\n    <value>${user.home}/keystores/client-keystore.jks</value>\n  </property>\n  <property>\n    <name>ssl.client.keystore.password</name>\n    <value>clientfoo</value>\n  </property>\n\n  \x3c!-- Client Trust Store --\x3e\n  <property>\n    <name>ssl.client.truststore.type</name>\n    <value>jks</value>\n  </property>\n  <property>\n    <name>ssl.client.truststore.location</name>\n    <value>${user.home}/keystores/truststore.jks</value>\n  </property>\n  <property>\n    <name>ssl.client.truststore.password</name>\n    <value>clientserverbar</value>\n  </property>\n  <property>\n    <name>ssl.client.truststore.reload.interval</name>\n    <value>10000</value>\n  </property>\n</configuration>\n")])]),e._v(" "),r("h2",{attrs:{id:"activating-encrypted-shuffle"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#activating-encrypted-shuffle"}},[e._v("#")]),e._v(" Activating Encrypted Shuffle")]),e._v(" "),r("p",[e._v("When you have made the above configuration changes, activate Encrypted Shuffle by re-starting all NodeManagers.")]),e._v(" "),r("p",[e._v("IMPORTANT: Using encrypted shuffle will incur in a significant performance impact. Users should profile this and potentially reserve 1 or more cores for encrypted shuffle.")]),e._v(" "),r("h2",{attrs:{id:"client-certificates"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#client-certificates"}},[e._v("#")]),e._v(" Client Certificates")]),e._v(" "),r("p",[e._v("Using Client Certificates does not fully ensure that the client is a reducer task for the job. Currently, Client Certificates (their private key) keystore files must be readable by all users submitting jobs to the cluster. This means that a rogue job could read such those keystore files and use the client certificates in them to establish a secure connection with a Shuffle server. However, unless the rogue job has a proper JobToken, it won’t be able to retrieve shuffle data from the Shuffle server. A job, using its own JobToken, can only retrieve shuffle data that belongs to itself.")]),e._v(" "),r("h2",{attrs:{id:"reloading-truststores"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reloading-truststores"}},[e._v("#")]),e._v(" Reloading Truststores")]),e._v(" "),r("p",[e._v("By default the truststores will reload their configuration every 10 seconds. If a new truststore file is copied over the old one, it will be re-read, and its certificates will replace the old ones. This mechanism is useful for adding or removing nodes from the cluster, or for adding or removing trusted clients. In these cases, the client or NodeManager certificate is added to (or removed from) all the truststore files in the system, and the new configuration will be picked up without you having to restart the NodeManager daemons.")]),e._v(" "),r("h2",{attrs:{id:"debugging"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#debugging"}},[e._v("#")]),e._v(" Debugging")]),e._v(" "),r("p",[e._v("NOTE: Enable debugging only for troubleshooting, and then only for jobs running on small amounts of data. It is very verbose and slows down jobs by several orders of magnitude. (You might need to increase mapred.task.timeout to prevent jobs from failing because tasks run so slowly.)")]),e._v(" "),r("p",[e._v("To enable SSL debugging in the reducers, set -Djavax.net.debug=all in the mapreduce.reduce.child.java.opts property; for example:")]),e._v(" "),r("pre",[r("code",[e._v("  <property>\n    <name>mapred.reduce.child.java.opts</name>\n    <value>-Xmx-200m -Djavax.net.debug=all</value>\n  </property>\n")])]),e._v(" "),r("p",[e._v("You can do this on a per-job basis, or by means of a cluster-wide setting in the mapred-site.xml file.")]),e._v(" "),r("p",[e._v("To set this property in NodeManager, set it in the yarn-env.sh file:")]),e._v(" "),r("pre",[r("code",[e._v('  YARN_NODEMANAGER_OPTS="-Djavax.net.debug=all"\n')])]),e._v(" "),r("h2",{attrs:{id:"encrypted-intermediate-data-spill-files"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#encrypted-intermediate-data-spill-files"}},[e._v("#")]),e._v(" Encrypted Intermediate Data Spill files")]),e._v(" "),r("p",[e._v("This capability allows encryption of the intermediate files generated during the merge and shuffle phases. It can be enabled by setting the mapreduce.job.encrypted-intermediate-data job property to true.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Type")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("mapreduce.job.encrypted-intermediate-data")]),e._v(" "),r("td",[e._v("boolean")]),e._v(" "),r("td",[e._v("Enable or disable encrypt intermediate mapreduce spill files.Default is false.")])]),e._v(" "),r("tr",[r("td",[e._v("mapreduce.job.encrypted-intermediate-data-key-size-bits")]),e._v(" "),r("td",[e._v("int")]),e._v(" "),r("td",[e._v("The key length used by keygenerator to encrypt data spilled to disk.")])]),e._v(" "),r("tr",[r("td",[e._v("mapreduce.job.encrypted-intermediate-data.buffer.kb")]),e._v(" "),r("td",[e._v("int")]),e._v(" "),r("td",[e._v("The buffer size in kb for stream written to disk after encryption.")])])])]),e._v(" "),r("p",[e._v("NOTE: Currently, enabling encrypted intermediate data spills would restrict the number of attempts of the job to 1.")])])}),[],!1,null,null,null);t.default=a.exports}}]);