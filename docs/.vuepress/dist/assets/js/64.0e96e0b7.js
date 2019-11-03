(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{264:function(e,a,t){"use strict";t.r(a);var n=t(0),o=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"hdfs-federation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hdfs-federation","aria-hidden":"true"}},[e._v("#")]),e._v(" HDFS Federation")]),e._v(" "),t("ul",[t("li",[e._v("Background")]),e._v(" "),t("li",[e._v("Multiple Namenodes/Namespaces\n"),t("ul",[t("li",[e._v("Key Benefits")])])]),e._v(" "),t("li",[e._v("Federation Configuration\n"),t("ul",[t("li",[e._v("Configuration:")]),e._v(" "),t("li",[e._v("Formatting Namenodes")]),e._v(" "),t("li",[e._v("Upgrading from an older release and configuring federation")]),e._v(" "),t("li",[e._v("Adding a new Namenode to an existing HDFS cluster")])])]),e._v(" "),t("li",[e._v("Managing the cluster\n"),t("ul",[t("li",[e._v("Starting and stopping cluster")]),e._v(" "),t("li",[e._v("Balancer")]),e._v(" "),t("li",[e._v("Decommissioning")]),e._v(" "),t("li",[e._v("Cluster Web Console")])])])]),e._v(" "),t("p",[e._v("This guide provides an overview of the HDFS Federation feature and how to configure and manage the federated cluster.")]),e._v(" "),t("h2",{attrs:{id:"background"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background","aria-hidden":"true"}},[e._v("#")]),e._v(" Background")]),e._v(" "),t("img",{attrs:{src:"/images/federation-background.gif",alt:"HDFS Layers"}}),e._v(" "),t("p",[e._v("HDFS has two main layers:")]),e._v(" "),t("ul",[t("li",[e._v("Namespace\n"),t("ul",[t("li",[e._v("Consists of directories, files and blocks.")]),e._v(" "),t("li",[e._v("It supports all the namespace related file system operations such as create, delete, modify and list files and directories.")])])]),e._v(" "),t("li",[e._v("Block Storage Service, which has two parts:\n"),t("ul",[t("li",[e._v("Block Management (performed in the Namenode)\n"),t("ul",[t("li",[e._v("Provides Datanode cluster membership by handling registrations, and periodic heart beats.")]),e._v(" "),t("li",[e._v("Processes block reports and maintains location of blocks.")]),e._v(" "),t("li",[e._v("Supports block related operations such as create, delete, modify and get block location.")]),e._v(" "),t("li",[e._v("Manages replica placement, block replication for under replicated blocks, and deletes blocks that are over replicated.")])])]),e._v(" "),t("li",[e._v("Storage - is provided by Datanodes by storing blocks on the local file system and allowing read/write access.")])])])]),e._v(" "),t("p",[e._v("The prior HDFS architecture allows only a single namespace for the entire cluster. In that configuration, a single Namenode manages the namespace. HDFS Federation addresses this limitation by adding support for multiple Namenodes/namespaces to HDFS.")]),e._v(" "),t("h2",{attrs:{id:"multiple-namenodes-namespaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multiple-namenodes-namespaces","aria-hidden":"true"}},[e._v("#")]),e._v(" Multiple Namenodes/Namespaces")]),e._v(" "),t("p",[e._v("In order to scale the name service horizontally, federation uses multiple independent Namenodes/namespaces. The Namenodes are federated; the Namenodes are independent and do not require coordination with each other. The Datanodes are used as common storage for blocks by all the Namenodes. Each Datanode registers with all the Namenodes in the cluster. Datanodes send periodic heartbeats and block reports. They also handle commands from the Namenodes.")]),e._v(" "),t("p",[e._v("Users may use "),t("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-hdfs/ViewFs.html"}},[e._v("ViewFs")]),e._v(" to create personalized namespace views. ViewFs is analogous to client side mount tables in some Unix/Linux systems.")],1),e._v(" "),t("img",{attrs:{src:"/images/federation.gif",alt:"HDFS Federation Architecture"}}),e._v(" "),t("p",[e._v("Block Pool")]),e._v(" "),t("p",[e._v("A Block Pool is a set of blocks that belong to a single namespace. Datanodes store blocks for all the block pools in the cluster. Each Block Pool is managed independently. This allows a namespace to generate Block IDs for new blocks without the need for coordination with the other namespaces. A Namenode failure does not prevent the Datanode from serving other Namenodes in the cluster.")]),e._v(" "),t("p",[e._v("A Namespace and its block pool together are called Namespace Volume. It is a self-contained unit of management. When a Namenode/namespace is deleted, the corresponding block pool at the Datanodes is deleted. Each namespace volume is upgraded as a unit, during cluster upgrade.")]),e._v(" "),t("p",[e._v("ClusterID")]),e._v(" "),t("p",[e._v("A ClusterID identifier is used to identify all the nodes in the cluster. When a Namenode is formatted, this identifier is either provided or auto generated. This ID should be used for formatting the other Namenodes into the cluster.")]),e._v(" "),t("h3",{attrs:{id:"key-benefits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#key-benefits","aria-hidden":"true"}},[e._v("#")]),e._v(" Key Benefits")]),e._v(" "),t("ul",[t("li",[e._v("Namespace Scalability - Federation adds namespace horizontal scaling. Large deployments or deployments using lot of small files benefit from namespace scaling by allowing more Namenodes to be added to the cluster.")]),e._v(" "),t("li",[e._v("Performance - File system throughput is not limited by a single Namenode. Adding more Namenodes to the cluster scales the file system read/write throughput.")]),e._v(" "),t("li",[e._v("Isolation - A single Namenode offers no isolation in a multi user environment. For example, an experimental application can overload the Namenode and slow down production critical applications. By using multiple Namenodes, different categories of applications and users can be isolated to different namespaces.")])]),e._v(" "),t("h2",{attrs:{id:"federation-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#federation-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Federation Configuration")]),e._v(" "),t("p",[e._v("Federation configuration is backward compatible and allows existing single Namenode configurations to work without any change. The new configuration is designed such that all the nodes in the cluster have the same configuration without the need for deploying different configurations based on the type of the node in the cluster.")]),e._v(" "),t("p",[e._v("Federation adds a new NameServiceID abstraction. A Namenode and its corresponding secondary/backup/checkpointer nodes all belong to a NameServiceId. In order to support a single configuration file, the Namenode and secondary/backup/checkpointer configuration parameters are suffixed with the NameServiceID.")]),e._v(" "),t("h3",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration:")]),e._v(" "),t("p",[e._v("Step 1: Add the dfs.nameservices parameter to your configuration and configure it with a list of comma separated NameServiceIDs. This will be used by the Datanodes to determine the Namenodes in the cluster.")]),e._v(" "),t("p",[e._v("Step 2: For each Namenode and Secondary Namenode/BackupNode/Checkpointer add the following configuration parameters suffixed with the corresponding NameServiceID into the common configuration file:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Daemon")]),e._v(" "),t("th",[e._v("Configuration Parameter")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Namenode")]),e._v(" "),t("td",[e._v("dfs.namenode.rpc-address dfs.namenode.servicerpc-address dfs.namenode.http-address dfs.namenode.https-address dfs.namenode.keytab.file dfs.namenode.name.dir dfs.namenode.edits.dir dfs.namenode.checkpoint.dir dfs.namenode.checkpoint.edits.dir")])]),e._v(" "),t("tr",[t("td",[e._v("Secondary Namenode")]),e._v(" "),t("td",[e._v("dfs.namenode.secondary.http-address dfs.secondary.namenode.keytab.file")])]),e._v(" "),t("tr",[t("td",[e._v("BackupNode")]),e._v(" "),t("td",[e._v("dfs.namenode.backup.address dfs.secondary.namenode.keytab.file")])])])]),e._v(" "),t("p",[e._v("Here is an example configuration with two Namenodes:")]),e._v(" "),t("pre",[t("code",[e._v("<configuration>\n  <property>\n    <name>dfs.nameservices</name>\n    <value>ns1,ns2</value>\n  </property>\n  <property>\n    <name>dfs.namenode.rpc-address.ns1</name>\n    <value>nn-host1:rpc-port</value>\n  </property>\n  <property>\n    <name>dfs.namenode.http-address.ns1</name>\n    <value>nn-host1:http-port</value>\n  </property>\n  <property>\n    <name>dfs.namenode.secondary.http-address.ns1</name>\n    <value>snn-host1:http-port</value>\n  </property>\n  <property>\n    <name>dfs.namenode.rpc-address.ns2</name>\n    <value>nn-host2:rpc-port</value>\n  </property>\n  <property>\n    <name>dfs.namenode.http-address.ns2</name>\n    <value>nn-host2:http-port</value>\n  </property>\n  <property>\n    <name>dfs.namenode.secondary.http-address.ns2</name>\n    <value>snn-host2:http-port</value>\n  </property>\n\n  .... Other common configuration ...\n</configuration>\n")])]),e._v(" "),t("h3",{attrs:{id:"formatting-namenodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#formatting-namenodes","aria-hidden":"true"}},[e._v("#")]),e._v(" Formatting Namenodes")]),e._v(" "),t("p",[e._v("Step 1: Format a Namenode using the following command:")]),e._v(" "),t("pre",[t("code",[e._v("[hdfs]$ $HADOOP_HOME/bin/hdfs namenode -format [-clusterId <cluster_id>]\n")])]),e._v(" "),t("p",[e._v("Choose a unique cluster_id which will not conflict other clusters in your environment. If a cluster_id is not provided, then a unique one is auto generated.")]),e._v(" "),t("p",[e._v("Step 2: Format additional Namenodes using the following command:")]),e._v(" "),t("pre",[t("code",[e._v("[hdfs]$ $HADOOP_HOME/bin/hdfs namenode -format -clusterId <cluster_id>\n")])]),e._v(" "),t("p",[e._v("Note that the cluster_id in step 2 must be same as that of the cluster_id in step 1. If they are different, the additional Namenodes will not be part of the federated cluster.")]),e._v(" "),t("h3",{attrs:{id:"upgrading-from-an-older-release-and-configuring-federation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-from-an-older-release-and-configuring-federation","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrading from an older release and configuring federation")]),e._v(" "),t("p",[e._v("Older releases only support a single Namenode. Upgrade the cluster to newer release in order to enable federation During upgrade you can provide a ClusterID as follows:")]),e._v(" "),t("pre",[t("code",[e._v("[hdfs]$ $HADOOP_HOME/bin/hdfs --daemon start namenode -upgrade -clusterId <cluster_ID>\n")])]),e._v(" "),t("p",[e._v("If cluster_id is not provided, it is auto generated.")]),e._v(" "),t("h3",{attrs:{id:"adding-a-new-namenode-to-an-existing-hdfs-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-namenode-to-an-existing-hdfs-cluster","aria-hidden":"true"}},[e._v("#")]),e._v(" Adding a new Namenode to an existing HDFS cluster")]),e._v(" "),t("p",[e._v("Perform the following steps:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Add dfs.nameservices to the configuration.")])]),e._v(" "),t("li",[t("p",[e._v("Update the configuration with the NameServiceID suffix. Configuration key names changed post release 0.20. You must use the new configuration parameter names in order to use federation.")])]),e._v(" "),t("li",[t("p",[e._v("Add the new Namenode related config to the configuration file.")])]),e._v(" "),t("li",[t("p",[e._v("Propagate the configuration file to the all the nodes in the cluster.")])]),e._v(" "),t("li",[t("p",[e._v("Start the new Namenode and Secondary/Backup.")])]),e._v(" "),t("li",[t("p",[e._v("Refresh the Datanodes to pickup the newly added Namenode by running the following command against all the Datanodes in the cluster:")]),e._v(" "),t("pre",[t("code",[e._v("[hdfs]$ $HADOOP_HOME/bin/hdfs dfsadmin -refreshNamenodes <datanode_host_name>:<datanode_rpc_port>\n")])])])]),e._v(" "),t("h2",{attrs:{id:"managing-the-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#managing-the-cluster","aria-hidden":"true"}},[e._v("#")]),e._v(" Managing the cluster")]),e._v(" "),t("h3",{attrs:{id:"starting-and-stopping-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#starting-and-stopping-cluster","aria-hidden":"true"}},[e._v("#")]),e._v(" Starting and stopping cluster")]),e._v(" "),t("p",[e._v("To start the cluster run the following command:")]),e._v(" "),t("pre",[t("code",[e._v("[hdfs]$ $HADOOP_HOME/sbin/start-dfs.sh\n")])]),e._v(" "),t("p",[e._v("To stop the cluster run the following command:")]),e._v(" "),t("pre",[t("code",[e._v("[hdfs]$ $HADOOP_HOME/sbin/stop-dfs.sh\n")])]),e._v(" "),t("p",[e._v("These commands can be run from any node where the HDFS configuration is available. The command uses the configuration to determine the Namenodes in the cluster and then starts the Namenode process on those nodes. The Datanodes are started on the nodes specified in the workers file. The script can be used as a reference for building your own scripts to start and stop the cluster.")]),e._v(" "),t("h3",{attrs:{id:"balancer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#balancer","aria-hidden":"true"}},[e._v("#")]),e._v(" Balancer")]),e._v(" "),t("p",[e._v("The Balancer has been changed to work with multiple Namenodes. The Balancer can be run using the command:")]),e._v(" "),t("pre",[t("code",[e._v("[hdfs]$ $HADOOP_HOME/bin/hdfs --daemon start balancer [-policy <policy>]\n")])]),e._v(" "),t("p",[e._v("The policy parameter can be any of the following:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("datanode - this is the default policy. This balances the storage at the Datanode level. This is similar to balancing policy from prior releases.")])]),e._v(" "),t("li",[t("p",[e._v("blockpool - this balances the storage at the block pool level which also balances at the Datanode level.")])])]),e._v(" "),t("p",[e._v("Note that Balancer only balances the data and does not balance the namespace. For the complete command usage, see "),t("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-hdfs/HDFSCommands.html#balancer"}},[e._v("balancer")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"decommissioning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decommissioning","aria-hidden":"true"}},[e._v("#")]),e._v(" Decommissioning")]),e._v(" "),t("p",[e._v("Decommissioning is similar to prior releases. The nodes that need to be decomissioned are added to the exclude file at all of the Namenodes. Each Namenode decommissions its Block Pool. When all the Namenodes finish decommissioning a Datanode, the Datanode is considered decommissioned.")]),e._v(" "),t("p",[e._v("Step 1: To distribute an exclude file to all the Namenodes, use the following command:")]),e._v(" "),t("pre",[t("code",[e._v("[hdfs]$ $HADOOP_HOME/sbin/distribute-exclude.sh <exclude_file>\n")])]),e._v(" "),t("p",[e._v("Step 2: Refresh all the Namenodes to pick up the new exclude file:")]),e._v(" "),t("pre",[t("code",[e._v("[hdfs]$ $HADOOP_HOME/sbin/refresh-namenodes.sh\n")])]),e._v(" "),t("p",[e._v("The above command uses HDFS configuration to determine the configured Namenodes in the cluster and refreshes them to pick up the new exclude file.")]),e._v(" "),t("h3",{attrs:{id:"cluster-web-console"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cluster-web-console","aria-hidden":"true"}},[e._v("#")]),e._v(" Cluster Web Console")]),e._v(" "),t("p",[e._v("Similar to the Namenode status web page, when using federation a Cluster Web Console is available to monitor the federated cluster at http://<any_nn_host:port>/dfsclusterhealth.jsp. Any Namenode in the cluster can be used to access this web page.")]),e._v(" "),t("p",[e._v("The Cluster Web Console provides the following information:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("A cluster summary that shows the number of files, number of blocks, total configured storage capacity, and the available and used storage for the entire cluster.")])]),e._v(" "),t("li",[t("p",[e._v("A list of Namenodes and a summary that includes the number of files, blocks, missing blocks, and live and dead data nodes for each Namenode. It also provides a link to access each Namenode’s web UI.")])]),e._v(" "),t("li",[t("p",[e._v("The decommissioning status of Datanodes.")])])])])}),[],!1,null,null,null);a.default=o.exports}}]);