(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{386:function(e,o,r){"use strict";r.r(o);var s=r(0),t=Object(s.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"proxy-user-superusers-acting-on-behalf-of-other-users"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proxy-user-superusers-acting-on-behalf-of-other-users"}},[e._v("#")]),e._v(" Proxy user - Superusers Acting On Behalf Of Other Users")]),e._v(" "),r("h2",{attrs:{id:"introduction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),r("p",[e._v("This document describes how a superuser can submit jobs or access hdfs on behalf of another user.")]),e._v(" "),r("h2",{attrs:{id:"use-case"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#use-case"}},[e._v("#")]),e._v(" Use Case")]),e._v(" "),r("p",[e._v("The code example described in the next section is applicable for the following use case.")]),e._v(" "),r("p",[e._v("A superuser with username ‘super’ wants to submit job and access hdfs on behalf of a user joe. The superuser has kerberos credentials but user joe doesn’t have any. The tasks are required to run as user joe and any file accesses on namenode are required to be done as user joe. It is required that user joe can connect to the namenode or job tracker on a connection authenticated with super’s kerberos credentials. In other words super is impersonating the user joe.")]),e._v(" "),r("p",[e._v("Some products such as Apache Oozie need this.")]),e._v(" "),r("h2",{attrs:{id:"code-example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#code-example"}},[e._v("#")]),e._v(" Code example")]),e._v(" "),r("p",[e._v("In this example super’s credentials are used for login and a proxy user ugi object is created for joe. The operations are performed within the doAs method of this proxy user ugi object.")]),e._v(" "),r("pre",[r("code",[e._v("    ...\n    //Create ugi for joe. The login user is 'super'.\n    UserGroupInformation ugi =\n            UserGroupInformation.createProxyUser(\"joe\", UserGroupInformation.getLoginUser());\n    ugi.doAs(new PrivilegedExceptionAction<Void>() {\n      public Void run() throws Exception {\n        //Submit a job\n        JobClient jc = new JobClient(conf);\n        jc.submitJob(conf);\n        //OR access hdfs\n        FileSystem fs = FileSystem.get(conf);\n        fs.mkdir(someFilePath);\n      }\n    }\n")])]),e._v(" "),r("h2",{attrs:{id:"configurations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configurations"}},[e._v("#")]),e._v(" Configurations")]),e._v(" "),r("p",[e._v("You can configure proxy user using properties hadoop.proxyuser.$superuser.hosts along with either or both of hadoop.proxyuser.$superuser.groups and hadoop.proxyuser.$superuser.users.")]),e._v(" "),r("p",[e._v("By specifying as below in core-site.xml, the superuser named super can connect only from host1 and host2 to impersonate a user belonging to group1 and group2.")]),e._v(" "),r("pre",[r("code",[e._v("   <property>\n     <name>hadoop.proxyuser.super.hosts</name>\n     <value>host1,host2</value>\n   </property>\n   <property>\n     <name>hadoop.proxyuser.super.groups</name>\n     <value>group1,group2</value>\n   </property>\n")])]),e._v(" "),r("p",[e._v("If these configurations are not present, impersonation will not be allowed and connection will fail.")]),e._v(" "),r("p",[e._v("If more lax security is preferred, the wildcard value * may be used to allow impersonation from any host or of any user. For example, by specifying as below in core-site.xml, user named oozie accessing from any host can impersonate any user belonging to any group.")]),e._v(" "),r("pre",[r("code",[e._v("  <property>\n    <name>hadoop.proxyuser.oozie.hosts</name>\n    <value>*</value>\n  </property>\n  <property>\n    <name>hadoop.proxyuser.oozie.groups</name>\n    <value>*</value>\n  </property>\n")])]),e._v(" "),r("p",[e._v("The hadoop.proxyuser.$superuser.hosts accepts list of ip addresses, ip address ranges in CIDR format and/or host names. For example, by specifying as below, user named super accessing from hosts in the range 10.222.0.0-15 and 10.113.221.221 can impersonate user1 and user2.")]),e._v(" "),r("pre",[r("code",[e._v("   <property>\n     <name>hadoop.proxyuser.super.hosts</name>\n     <value>10.222.0.0/16,10.113.221.221</value>\n   </property>\n   <property>\n     <name>hadoop.proxyuser.super.users</name>\n     <value>user1,user2</value>\n   </property>\n")])]),e._v(" "),r("h2",{attrs:{id:"caveats"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#caveats"}},[e._v("#")]),e._v(" Caveats")]),e._v(" "),r("p",[e._v("If the cluster is running in "),r("router-link",{attrs:{to:"/en/docs/hadoop-project-dist/hadoop-common/SecureMode.html"}},[e._v("Secure Mode")]),e._v(", the superuser must have kerberos credentials to be able to impersonate another user.")],1),e._v(" "),r("p",[e._v("It cannot use delegation tokens for this feature. It would be wrong if superuser adds its own delegation token to the proxy user ugi, as it will allow the proxy user to connect to the service with the privileges of the superuser.")]),e._v(" "),r("p",[e._v("However, if the superuser does want to give a delegation token to joe, it must first impersonate joe and get a delegation token for joe, in the same way as the code example above, and add it to the ugi of joe. In this way the delegation token will have the owner as joe.")])])}),[],!1,null,null,null);o.default=t.exports}}]);