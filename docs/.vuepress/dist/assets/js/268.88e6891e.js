(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{468:function(e,s,r){"use strict";r.r(s);var a=r(0),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"system-services"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#system-services"}},[e._v("#")]),e._v(" System Services")]),e._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[e._v("System services are admin configured services which are auto deployed during bootstrap of ResourceManager. This would work only when API-Server is started as part of ResourceManager. Refer "),r("router-link",{attrs:{to:"/en/docs/hadoop-yarn/hadoop-yarn-site/yarn-service/QuickStart.html#Manage_services_on_YARN_via_REST_API"}},[e._v("Manage services on YARN")]),e._v(". This document describes how to configure and deploy system services.")],1),e._v(" "),r("h2",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("yarn.service.system-service.dir")]),e._v(" "),r("td",[e._v("FS directory path to load and deploy admin configured services. These service spec files should be kept with proper hierarchy.")])])])]),e._v(" "),r("h2",{attrs:{id:"hierarchy-of-fs-path"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hierarchy-of-fs-path"}},[e._v("#")]),e._v(" Hierarchy of FS path")]),e._v(" "),r("p",[e._v("After configuring yarn.service.system-service.dir path, the spec files should be kept with below hierarchy.")]),e._v(" "),r("pre",[r("code",[e._v("$SYSTEM_SERVICE_DIR_PATH/<Launch-Mode>/<Users>/<Yarnfiles>.\n")])]),e._v(" "),r("h3",{attrs:{id:"launch-mode"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#launch-mode"}},[e._v("#")]),e._v(" Launch-Mode")]),e._v(" "),r("p",[e._v("Launch-Mode indicates that how the service should be deployed. Services can be auto deployed either synchronously or asynchronously.")]),e._v(" "),r("h4",{attrs:{id:"sync"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sync"}},[e._v("#")]),e._v(" sync")]),e._v(" "),r("p",[e._v("These services are started synchronously along with RM. This might delay a bit RM transition to active period. This is useful when deploying critical services to get started sooner.")]),e._v(" "),r("h4",{attrs:{id:"async"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#async"}},[e._v("#")]),e._v(" async")]),e._v(" "),r("p",[e._v("These services are started asynchronously without impacting RM transition period.")]),e._v(" "),r("h3",{attrs:{id:"users"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#users"}},[e._v("#")]),e._v(" Users")]),e._v(" "),r("p",[e._v("Users are the owner of the system service who has full access to modify it. Each users can own multiple services. Note that service names are unique per user.")]),e._v(" "),r("h3",{attrs:{id:"yarnfiles"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yarnfiles"}},[e._v("#")]),e._v(" Yarnfiles")]),e._v(" "),r("p",[e._v("YarnFiles are the spec files to launch services. These files must have .yarnfile extension otherwise those files are ignored.")]),e._v(" "),r("h3",{attrs:{id:"example-of-hierarchy-to-configure-system-services"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-of-hierarchy-to-configure-system-services"}},[e._v("#")]),e._v(" Example of hierarchy to configure system services.")]),e._v(" "),r("pre",[r("code",[e._v("SYSTEM_SERVICE_DIR_PATH\n|---- sync\n|     |--- user1\n|     |    |---- service1.yarnfile\n|     |    |---- service2.yarnfile\n|     |--- user2\n|     |    |---- service3.yarnfile\n|     |    ....\n|     |\n|---- async\n|     |--- user3\n|     |    |---- service1.yarnfile\n|     |    |---- service2.yarnfile\n|     |--- user4\n|     |    |---- service3.yarnfile\n|     |    ....\n|     |\n")])])])}),[],!1,null,null,null);s.default=t.exports}}]);