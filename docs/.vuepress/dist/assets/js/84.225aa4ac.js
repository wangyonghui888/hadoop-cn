(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{284:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"memory-storage-support-in-hdfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memory-storage-support-in-hdfs","aria-hidden":"true"}},[e._v("#")]),e._v(" Memory Storage Support in HDFS")]),e._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("HDFS supports writing to off-heap memory managed by the Data Nodes. The Data Nodes will flush in-memory data to disk asynchronously thus removing expensive disk IO and checksum computations from the performance-sensitive IO path, hence we call such writes Lazy Persist writes. HDFS provides best-effort persistence guarantees for Lazy Persist Writes. Rare data loss is possible in the event of a node restart before replicas are persisted to disk. Applications can choose to use Lazy Persist Writes to trade off some durability guarantees in favor of reduced latency.")]),e._v(" "),a("p",[e._v("This feature is available starting with Apache Hadoop 2.6.0 and was developed under Jira "),a("a",{attrs:{href:"https://issues.apache.org/jira/browse/HDFS-6581",target:"_blank",rel:"noopener noreferrer"}},[e._v("HDFS-6581"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("img",{attrs:{src:"/LazyPersistWrites.png",alt:"Lazy Persist Writes"}}),e._v(" "),a("p",[e._v("The target use cases are applications that would benefit from writing relatively low amounts of data (from a few GB up to tens of GBs depending on available memory) with low latency. Memory storage is for applications that run within the cluster and collocated with HDFS Data Nodes. We have observed that the latency overhead from network replication negates the benefits of writing to memory.")]),e._v(" "),a("p",[e._v("Applications that use Lazy Persist Writes will continue to work by falling back to DISK storage if memory is insufficient or unconfigured.")]),e._v(" "),a("h2",{attrs:{id:"administrator-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#administrator-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Administrator Configuration")]),e._v(" "),a("p",[e._v("This section enumerates the administrative steps required before applications can start using the feature in a cluster.")]),e._v(" "),a("h2",{attrs:{id:"limit-ram-used-for-replicas-in-memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limit-ram-used-for-replicas-in-memory","aria-hidden":"true"}},[e._v("#")]),e._v(" Limit RAM used for replicas in Memory")]),e._v(" "),a("p",[e._v("First decide the amount of memory to be dedicated for replicas stored in memory. Set dfs.datanode.max.locked.memory accordingly in hdfs-site.xml. This is the same setting used by the "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-hdfs/CentralizedCacheManagement.html"}},[e._v("Centralized Cache Management")]),e._v(" feature. The Data Node will ensure that the combined memory used by Lazy Persist Writes and Centralized Cache Management does not exceed the amount configured in dfs.datanode.max.locked.memory.")],1),e._v(" "),a("p",[e._v("E.g. To reserve 32 GB for in-memory replicas")]),e._v(" "),a("pre",[a("code",[e._v("    <property>\n      <name>dfs.datanode.max.locked.memory</name>\n      <value>34359738368</value>\n    </property>\n")])]),e._v(" "),a("p",[e._v("This memory is not allocated by the Data Node on startup.")]),e._v(" "),a("p",[e._v("On Unix-like systems, the “locked-in-memory size” ulimit (ulimit -l) of the Data Node user also needs to be increased to match this parameter (see the related section on "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-hdfs/CentralizedCacheManagement.html#OS_Limits"}},[e._v("OS Limits")]),e._v("). When setting this value, please remember that you will need space in memory for other things as well, such as the Data Node and application JVM heaps and the operating system page cache. You will also need memory for YARN containers if there is a YARN Node Manager process running on the same node as the Data Node.")],1),e._v(" "),a("h2",{attrs:{id:"setup-ram-disks-on-data-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-ram-disks-on-data-nodes","aria-hidden":"true"}},[e._v("#")]),e._v(" Setup RAM Disks on Data Nodes")]),e._v(" "),a("p",[e._v("Initialize a RAM disk on each Data Node. The choice of RAM Disk allows better data persistence across Data Node process restarts. The following setup will work on most Linux distributions. Using RAM disks on other platforms is not currently supported.")]),e._v(" "),a("h3",{attrs:{id:"choosing-tmpfs-vs-ramfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#choosing-tmpfs-vs-ramfs","aria-hidden":"true"}},[e._v("#")]),e._v(" Choosing tmpfs (vs ramfs)")]),e._v(" "),a("p",[e._v("Linux supports using two kinds of RAM disks - tmpfs and ramfs. The size of tmpfs is limited by the Linux kernel while ramfs grows to fill all available system memory. There is a downside to tmpfs since its contents can be swapped to disk under memory pressure. However many performance-sensitive deployments run with swapping disabled so we do not expect this to be an issue in practice.")]),e._v(" "),a("p",[e._v("HDFS currently supports using tmpfs partitions. Support for adding ramfs is in progress (See "),a("a",{attrs:{href:"https://issues.apache.org/jira/browse/HDFS-8584",target:"_blank",rel:"noopener noreferrer"}},[e._v("HDFS-8584"),a("OutboundLink")],1),e._v(").")]),e._v(" "),a("h3",{attrs:{id:"mount-ram-disks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mount-ram-disks","aria-hidden":"true"}},[e._v("#")]),e._v(" Mount RAM Disks")]),e._v(" "),a("p",[e._v("Mount the RAM Disk partition with the Unix mount command. E.g. to mount a 32 GB tmpfs partition under /mnt/dn-tmpfs/")]),e._v(" "),a("pre",[a("code",[e._v("    sudo mount -t tmpfs -o size=32g tmpfs /mnt/dn-tmpfs/\n")])]),e._v(" "),a("p",[e._v("It is recommended you create an entry in the /etc/fstab so the RAM Disk is recreated automatically on node restarts. Another option is to use a sub-directory under /dev/shm which is a tmpfs mount available by default on most Linux distributions. Ensure that the size of the mount is greater than or equal to your dfs.datanode.max.locked.memory setting else override it in /etc/fstab. Using more than one tmpfs partition per Data Node for Lazy Persist Writes is not recommended.")]),e._v(" "),a("h3",{attrs:{id:"tag-tmpfs-volume-with-the-ram-disk-storage-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tag-tmpfs-volume-with-the-ram-disk-storage-type","aria-hidden":"true"}},[e._v("#")]),e._v(" Tag tmpfs volume with the RAM_DISK Storage Type")]),e._v(" "),a("p",[e._v("Tag the tmpfs directory with the RAM_DISK storage type via the dfs.datanode.data.dir configuration setting in hdfs-site.xml. E.g. On a Data Node with three hard disk volumes /grid/0, /grid/1 and /grid/2 and a tmpfs mount /mnt/dn-tmpfs, dfs.datanode.data.dir must be set as follows:")]),e._v(" "),a("pre",[a("code",[e._v("    <property>\n      <name>dfs.datanode.data.dir</name>\n      <value>/grid/0,/grid/1,/grid/2,[RAM_DISK]/mnt/dn-tmpfs</value>\n    </property>\n")])]),e._v(" "),a("p",[e._v("This step is crucial. Without the RAM_DISK tag, HDFS will treat the tmpfs volume as non-volatile storage and data will not be saved to persistent storage. You will lose data on node restart.")]),e._v(" "),a("h3",{attrs:{id:"ensure-storage-policies-are-enabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ensure-storage-policies-are-enabled","aria-hidden":"true"}},[e._v("#")]),e._v(" Ensure Storage Policies are enabled")]),e._v(" "),a("p",[e._v("Ensure that the global setting to turn on Storage Policies is enabled "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-hdfs/ArchivalStorage.html#Configuration"}},[e._v("as documented here")]),e._v(". This setting is on by default.")],1),e._v(" "),a("h2",{attrs:{id:"application-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Application Usage")]),e._v(" "),a("h2",{attrs:{id:"use-the-lazy-persist-storage-policy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-the-lazy-persist-storage-policy","aria-hidden":"true"}},[e._v("#")]),e._v(" Use the LAZY_PERSIST Storage Policy")]),e._v(" "),a("p",[e._v("Applications indicate that HDFS can use Lazy Persist Writes for a file with the LAZY_PERSIST storage policy. Administrative privileges are not required to set the policy and it can be set in one of three ways.")]),e._v(" "),a("h3",{attrs:{id:"invoke-hdfs-storagepolicies-command-for-directories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invoke-hdfs-storagepolicies-command-for-directories","aria-hidden":"true"}},[e._v("#")]),e._v(" Invoke hdfs storagepolicies command for directories")]),e._v(" "),a("p",[e._v("Setting the policy on a directory causes it to take effect for all new files in the directory. The hdfs storagepolicies command can be used to set the policy as described in the "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-hdfs/ArchivalStorage.html#Storage_Policy_Commands"}},[e._v("Storage Policies documentation")]),e._v(".")],1),e._v(" "),a("pre",[a("code",[e._v("    hdfs storagepolicies -setStoragePolicy -path <path> -policy LAZY_PERSIST\n")])]),e._v(" "),a("h3",{attrs:{id:"call-setstoragepolicy-method-for-directories"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call-setstoragepolicy-method-for-directories","aria-hidden":"true"}},[e._v("#")]),e._v(" Call setStoragePolicy method for directories")]),e._v(" "),a("p",[e._v("Starting with Apache Hadoop 2.8.0, an application can programmatically set the Storage Policy with FileSystem.setStoragePolicy. E.g.")]),e._v(" "),a("pre",[a("code",[e._v('    fs.setStoragePolicy(path, "LAZY_PERSIST");\n')])]),e._v(" "),a("h3",{attrs:{id:"pass-lazy-persist-createflag-for-new-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pass-lazy-persist-createflag-for-new-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Pass LAZY_PERSIST CreateFlag for new files")]),e._v(" "),a("p",[e._v("An application can pass CreateFlag#LAZY_PERSIST when creating a new file with FileSystem#create API. E.g.")]),e._v(" "),a("pre",[a("code",[e._v("    FSDataOutputStream fos =\n        fs.create(\n            path,\n            FsPermission.getFileDefault(),\n            EnumSet.of(CreateFlag.CREATE, CreateFlag.LAZY_PERSIST),\n            bufferLength,\n            replicationFactor,\n            blockSize,\n            null);\n")])])])}),[],!1,null,null,null);t.default=r.exports}}]);