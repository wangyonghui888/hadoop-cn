(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{411:function(e,a,t){"use strict";t.r(a);var o=t(0),s=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"hdfs-provided-storage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hdfs-provided-storage"}},[e._v("#")]),e._v(" HDFS Provided Storage")]),e._v(" "),t("p",[e._v("Provided storage allows data stored outside HDFS to be mapped to and addressed from HDFS. It builds on "),t("router-link",{attrs:{to:"/en/docs/hadoop-project-dist/hadoop-hdfs/ArchivalStorage.html"}},[e._v("heterogeneous storage")]),e._v(" by introducing a new storage type, PROVIDED, to the set of media in a datanode. Clients accessing data in PROVIDED storages can cache replicas in local media, enforce HDFS invariants (e.g., security, quotas), and address more data than the cluster could persist in the storage attached to DataNodes. This architecture is particularly useful in scenarios where HDFS clusters are ephemeral (e.g., cloud scenarios), and/or require to read data that lives in other storage systems (e.g., blob stores).")],1),e._v(" "),t("p",[e._v("Provided storage is an experimental feature in HDFS.")]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("As of this writing, support for mounting external storage as PROVIDED blocks is limited to creating a read-only image of a remote namespace that implements the org.apache.hadoop.fs.FileSystem interface, and starting a NameNode to serve the image. Specifically, reads from a snapshot of a remote namespace are supported. Adding a remote namespace to an existing/running namenode, refreshing the remote snapshot, unmounting, and writes are not available in this release. One can use "),t("router-link",{attrs:{to:"/en/docs/hadoop-project-dist/hadoop-hdfs/ViewFs.html"}},[e._v("ViewFs")]),e._v(" and "),t("router-link",{attrs:{to:"/en/docs/hadoop-project-dist/hadoop-hdfs-rbf/HDFSRouterFederation.html"}},[e._v("RBF")]),e._v(" to integrate namespaces with PROVIDED storage into an existing deployment.")],1),e._v(" "),t("h2",{attrs:{id:"creating-hdfs-clusters-with-provided-storage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-hdfs-clusters-with-provided-storage"}},[e._v("#")]),e._v(" Creating HDFS Clusters with PROVIDED Storage")]),e._v(" "),t("p",[e._v("One can create snapshots of the remote namespace using the fs2img tool. Given a path to a remote FileSystem, the tool creates an image mirroring the namespace and an alias map that maps blockIDs in the generated image to a FileRegion in the remote filesystem. A FileRegion contains sufficient information to address a fixed sequence of bytes in the remote FileSystem (e.g., file, offset, length) and a nonce to verify that the region is unchanged since the image was generated.")]),e._v(" "),t("p",[e._v("After the NameNode image and alias map are created, the NameNode and DataNodes must be configured to consistently reference this address space. When a DataNode registers with an attached, PROVIDED storage, the NameNode considers all the external blocks to be addressable through that DataNode, and may begin to direct clients to it. Symmetrically, the DataNode must be able to map every block in the PROVIDED storage to remote data.")]),e._v(" "),t("p",[e._v("Deployment details vary depending on the configured alias map implementation.")]),e._v(" "),t("h3",{attrs:{id:"provided-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#provided-configuration"}},[e._v("#")]),e._v(" PROVIDED Configuration")]),e._v(" "),t("p",[e._v("Each NameNode supports one alias map. When PROVIDED storage is enabled, the storage ID configured on the NameNode and DataNodes must match. All other details are internal to the alias map implementation.")]),e._v(" "),t("p",[e._v("The configuration to enable PROVIDED storage is as follows. The configuration options available for the alias map implementations are available below.")]),e._v(" "),t("pre",[t("code",[e._v("<configuration>\n\n  <property>\n    <name>dfs.namenode.provided.enabled</name>\n    <value>true</value>\n    <description>Enabled provided storage on the Namenode</description>\n  </property>\n\n  <property>\n     <name>dfs.datanode.data.dir</name>\n     <value>[DISK]/local/path/to/blocks/, [PROVIDED]remoteFS://remoteFS-authority/path/to/data/</value>\n  </property>\n\n  <property>\n      <name>dfs.provided.storage.id</name>\n      <value>DS-PROVIDED</value>\n      <description>The storage ID used for provided storages in the cluster.</description>\n  </property>\n\n  <property>\n    <name>dfs.provided.aliasmap.class</name>\n    <value>org.apache.hadoop.hdfs.server.common.blockaliasmap.impl.TextFileRegionAliasMap</value>\n  </property>\n\n</configuration>\n")])]),e._v(" "),t("h3",{attrs:{id:"fs2img-tool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fs2img-tool"}},[e._v("#")]),e._v(" fs2img tool")]),e._v(" "),t("p",[e._v("The fs2img tool “walks” over a remote namespace by recursively enumerating children of a remote URI to produce an FSImage. Some attributes can be controlled by plugins, such as owner/group mappings from the remote filesystem to HDFS and the mapping of files to HDFS blocks.")]),e._v(" "),t("p",[e._v("The various options available in running the tool are:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Option")]),e._v(" "),t("th",[e._v("Property")]),e._v(" "),t("th",[e._v("Default")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("-o, --outdir")]),e._v(" "),t("td",[e._v("dfs.namenode.name.dir")]),e._v(" "),t("td",[e._v("<file://${hadoop.tmp.dir}/dfs/name>")]),e._v(" "),t("td",[e._v("Output directory")])]),e._v(" "),t("tr",[t("td",[e._v("-b, --blockclass")]),e._v(" "),t("td",[e._v("dfs.provided.aliasmap.class")]),e._v(" "),t("td",[e._v("NullBlocksMap")]),e._v(" "),t("td",[e._v("Block output class")])]),e._v(" "),t("tr",[t("td",[e._v("-u, --ugiclass")]),e._v(" "),t("td",[e._v("hdfs.image.writer.ugi.class")]),e._v(" "),t("td",[e._v("SingleUGIResolver")]),e._v(" "),t("td",[e._v("UGI resolver class")])]),e._v(" "),t("tr",[t("td",[e._v("-i, --blockidclass")]),e._v(" "),t("td",[e._v("hdfs.image.writer.blockresolver.class")]),e._v(" "),t("td",[e._v("FixedBlockResolver")]),e._v(" "),t("td",[e._v("Block resolver class")])]),e._v(" "),t("tr",[t("td",[e._v("-c, --cachedirs")]),e._v(" "),t("td",[e._v("hdfs.image.writer.cache.entries")]),e._v(" "),t("td",[e._v("100")]),e._v(" "),t("td",[e._v("Max active dirents")])]),e._v(" "),t("tr",[t("td",[e._v("-cid, --clusterID")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td",[e._v("Cluster ID")])]),e._v(" "),t("tr",[t("td",[e._v("-bpid, --blockPoolID")]),e._v(" "),t("td"),e._v(" "),t("td"),e._v(" "),t("td",[e._v("Block pool ID")])])])]),e._v(" "),t("h4",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("p",[e._v("Assign all files to be owned by “rmarathe”, write to gzip compressed text:")]),e._v(" "),t("pre",[t("code",[e._v("hadoop org.apache.hadoop.hdfs.server.namenode.FileSystemImage \\\n  -Dhdfs.image.writer.ugi.single.user=rmarathe \\\n  -Ddfs.provided.aliasmap.text.codec=gzip \\\n  -Ddfs.provided.aliasmap.text.write.dir=file:///tmp/\n  -b org.apache.hadoop.hdfs.server.common.blockaliasmap.impl.TextFileRegionAliasMap \\\n  -u org.apache.hadoop.hdfs.server.namenode.SingleUGIResolver \\\n  -o file:///tmp/name \\\n  hdfs://afreast/projects/ydau/onan\n")])]),e._v(" "),t("p",[e._v("Assign ownership based on a custom UGIResolver, in LevelDB:")]),e._v(" "),t("pre",[t("code",[e._v("hadoop org.apache.hadoop.hdfs.server.namenode.FileSystemImage \\\n  -Ddfs.provided.aliasmap.leveldb.path=/path/to/leveldb/map/dingos.db \\\n  -b org.apache.hadoop.hdfs.server.common.blockaliasmap.impl.LevelDBFileRegionAliasMap \\\n  -o file:///tmp/name \\\n  -u CustomResolver \\\n  hdfs://enfield/projects/ywqmd/incandenza\n")])]),e._v(" "),t("h2",{attrs:{id:"alias-map-implementations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alias-map-implementations"}},[e._v("#")]),e._v(" Alias Map Implementations")]),e._v(" "),t("p",[e._v("The alias map implementation to use is configured using the dfs.provided.aliasmap.class parameter. Currently, the following two types of alias maps are supported.")]),e._v(" "),t("h3",{attrs:{id:"inmemoryaliasmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inmemoryaliasmap"}},[e._v("#")]),e._v(" InMemoryAliasMap")]),e._v(" "),t("p",[e._v("This is a LevelDB-based alias map that runs as a separate server in Namenode. The alias map itself can be created using the fs2img tool using the option -Ddfs.provided.aliasmap.leveldb.path=file:///path/to/leveldb/map/dingos.db -b org.apache.hadoop.hdfs.server.common.blockaliasmap.impl.LevelDBFileRegionAliasMap as in the example above.")]),e._v(" "),t("p",[e._v("Datanodes contact this alias map using the org.apache.hadoop.hdfs.server.aliasmap.InMemoryAliasMapProtocol protocol.")]),e._v(" "),t("h4",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),t("pre",[t("code",[e._v("<configuration>\n  <property>\n    <name>dfs.provided.aliasmap.inmemory.batch-size</name>\n    <value>500</value>\n    <description>\n      The batch size when iterating over the database backing the aliasmap\n    </description>\n  </property>\n\n  <property>\n    <name>dfs.provided.aliasmap.inmemory.dnrpc-address</name>\n    <value>namenode:rpc-port</value>\n    <description>\n      The address where the aliasmap server will be running\n    </description>\n  </property>\n\n  <property>\n    <name>dfs.provided.aliasmap.inmemory.leveldb.dir</name>\n    <value>/path/to/leveldb/map/dingos.db</value>\n    <description>\n      The directory where the leveldb files will be kept\n    </description>\n  </property>\n\n  <property>\n    <name>dfs.provided.aliasmap.inmemory.enabled</name>\n    <value>true</value>\n    <description>Enable the inmemory alias map on the NameNode. Defaults to false.</description>\n  </property>\n\n  <property>\n    <name>dfs.provided.aliasmap.class</name>\n    <value>org.apache.hadoop.hdfs.server.common.blockaliasmap.impl.InMemoryLevelDBAliasMapClient</value>\n  </property>\n</configuration>\n")])]),e._v(" "),t("h3",{attrs:{id:"textfileregionaliasmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#textfileregionaliasmap"}},[e._v("#")]),e._v(" TextFileRegionAliasMap")]),e._v(" "),t("p",[e._v("This alias map implementation stores the mapping from blockIDs to FileRegions in a delimited text file. This format is useful for test environments, particularly single-node.")]),e._v(" "),t("h4",{attrs:{id:"configuration-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-2"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),t("pre",[t("code",[e._v("<configuration>\n  <property>\n    <name>dfs.provided.aliasmap.text.delimiter</name>\n    <value>,</value>\n    <description>\n        The delimiter used when the alias map is specified as\n        a text file.\n    </description>\n  </property>\n\n  <property>\n    <name>dfs.provided.aliasmap.text.read.file</name>\n    <value>file:///path/to/aliasmap/blocks_blocPoolID.csv</value>\n    <description>\n        The path specifying the alias map as a text file,\n        specified as a URI.\n    </description>\n  </property>\n\n  <property>\n    <name>dfs.provided.aliasmap.text.codec</name>\n    <value></value>\n    <description>\n        The codec used to de-compress the alias map. Default value is empty.\n    </description>\n  </property>\n\n  <property>\n    <name>dfs.provided.aliasmap.text.write.dir</name>\n    <value>file:///path/to/aliasmap/</value>\n    <description>\n        The path to which the alias map should be written as a text\n        file, specified as a URI.\n    </description>\n  </property>\n</configuration>\n")])])])}),[],!1,null,null,null);a.default=s.exports}}]);