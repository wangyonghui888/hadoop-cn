(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{272:function(e,t,s){"use strict";s.r(t);var o=s(0),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"offline-edits-viewer-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offline-edits-viewer-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" Offline Edits Viewer Guide")]),e._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),s("p",[e._v("Offline Edits Viewer is a tool to parse the Edits log file. The current processors are mostly useful for conversion between different formats, including XML which is human readable and easier to edit than native binary format.")]),e._v(" "),s("p",[e._v("The tool can parse the edits formats -18 (roughly Hadoop 0.19) and later. The tool operates on files only, it does not need Hadoop cluster to be running.")]),e._v(" "),s("p",[e._v("Input formats supported:")]),e._v(" "),s("ol",[s("li",[e._v("binary: native binary format that Hadoop uses internally")]),e._v(" "),s("li",[e._v("xml: XML format, as produced by xml processor, used if filename has .xml (case insensitive) extension")])]),e._v(" "),s("p",[e._v("Note: XML/Binary format input file is not allowed to be processed by the same type processor.")]),e._v(" "),s("p",[e._v("The Offline Edits Viewer provides several output processors (unless stated otherwise the output of the processor can be converted back to original edits file):")]),e._v(" "),s("ol",[s("li",[e._v("binary: native binary format that Hadoop uses internally")]),e._v(" "),s("li",[e._v("xml: XML format")]),e._v(" "),s("li",[e._v("stats: prints out statistics, this cannot be converted back to Edits file")])]),e._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("h3",{attrs:{id:"xml-processor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xml-processor","aria-hidden":"true"}},[e._v("#")]),e._v(" XML Processor")]),e._v(" "),s("p",[e._v("XML processor can create an XML file that contains the edits log information. Users can specify input and output file via -i and -o command-line.")]),e._v(" "),s("pre",[s("code",[e._v("   bash$ bin/hdfs oev -p xml -i edits -o edits.xml\n")])]),e._v(" "),s("p",[e._v("XML processor is the default processor in Offline Edits Viewer, users can also use the following command:")]),e._v(" "),s("pre",[s("code",[e._v("   bash$ bin/hdfs oev -i edits -o edits.xml\n")])]),e._v(" "),s("p",[e._v("This would result in the following output:")]),e._v(" "),s("pre",[s("code",[e._v('   <?xml version="1.0" encoding="UTF-8"?>\n   <EDITS>\n     <EDITS_VERSION>-64</EDITS_VERSION>\n     <RECORD>\n       <OPCODE>OP_START_LOG_SEGMENT</OPCODE>\n       <DATA>\n         <TXID>1</TXID>\n       </DATA>\n     </RECORD>\n     <RECORD>\n       <OPCODE>OP_UPDATE_MASTER_KEY</OPCODE>\n       <DATA>\n         <TXID>2</TXID>\n         <DELEGATION_KEY>\n           <KEY_ID>1</KEY_ID>\n           <EXPIRY_DATE>1487921580728</EXPIRY_DATE>\n           <KEY>2e127ca41c7de215</KEY>\n         </DELEGATION_KEY>\n       </DATA>\n     </RECORD>\n     <RECORD>\n   ...remaining output omitted...\n')])]),e._v(" "),s("h3",{attrs:{id:"binary-processor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binary-processor","aria-hidden":"true"}},[e._v("#")]),e._v(" Binary Processor")]),e._v(" "),s("p",[e._v("Binary processor is the opposite of the XML processor. Users can specify input XML file and output file via -i and -o command-line.")]),e._v(" "),s("pre",[s("code",[e._v("   bash$ bin/hdfs oev -p binary -i edits.xml -o edits\n")])]),e._v(" "),s("p",[e._v("This will reconstruct an edits log file from an XML file.")]),e._v(" "),s("h3",{attrs:{id:"stats-processor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stats-processor","aria-hidden":"true"}},[e._v("#")]),e._v(" Stats Processor")]),e._v(" "),s("p",[e._v("Stats processor is used to aggregate counts of op codes contained in the edits log file. Users can specify this processor by -p option.")]),e._v(" "),s("pre",[s("code",[e._v("   bash$ bin/hdfs oev -p stats -i edits -o edits.stats\n")])]),e._v(" "),s("p",[e._v("The output result of this processor should be like the following output:")]),e._v(" "),s("pre",[s("code",[e._v("   VERSION                             : -64\n   OP_ADD                         (  0): 8\n   OP_RENAME_OLD                  (  1): 1\n   OP_DELETE                      (  2): 1\n   OP_MKDIR                       (  3): 1\n   OP_SET_REPLICATION             (  4): 1\n   OP_DATANODE_ADD                (  5): 0\n   OP_DATANODE_REMOVE             (  6): 0\n   OP_SET_PERMISSIONS             (  7): 1\n   OP_SET_OWNER                   (  8): 1\n   OP_CLOSE                       (  9): 9\n   OP_SET_GENSTAMP_V1             ( 10): 0\n   ...some output omitted...\n   OP_APPEND                      ( 47): 1\n   OP_SET_QUOTA_BY_STORAGETYPE    ( 48): 1\n   OP_ADD_ERASURE_CODING_POLICY   ( 49): 0\n   OP_ENABLE_ERASURE_CODING_POLICY  ( 50): 1\n   OP_DISABLE_ERASURE_CODING_POLICY ( 51): 0\n   OP_REMOVE_ERASURE_CODING_POLICY  ( 52): 0\n   OP_INVALID                     ( -1): 0\n")])]),e._v(" "),s("p",[e._v("The output is formatted as a colon separated two column table: OpCode and OpCodeCount. Each OpCode corresponding to the specific operation(s) in NameNode.")]),e._v(" "),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[e._v("#")]),e._v(" Options")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Flag")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("[-i ; --inputFile] input file")]),e._v(" "),s("td",[e._v("Specify the input edits log file to process. Xml (case insensitive) extension means XML format otherwise binary format is assumed. Required.")])]),e._v(" "),s("tr",[s("td",[e._v("[-o ; --outputFile] output file")]),e._v(" "),s("td",[e._v("Specify the output filename, if the specified output processor generates one. If the specified file already exists, it is silently overwritten. Required.")])]),e._v(" "),s("tr",[s("td",[e._v("[-p ; --processor] processor")]),e._v(" "),s("td",[e._v("Specify the image processor to apply against the image file. Currently valid options are binary, xml (default) and stats.")])]),e._v(" "),s("tr",[s("td",[e._v("[-v ; --verbose]")]),e._v(" "),s("td",[e._v("Print the input and output filenames and pipe output of processor to console as well as specified file. On extremely large files, this may increase processing time by an order of magnitude.")])]),e._v(" "),s("tr",[s("td",[e._v("[-f ; --fix-txids]")]),e._v(" "),s("td",[e._v("Renumber the transaction IDs in the input, so that there are no gaps or invalid transaction IDs.")])]),e._v(" "),s("tr",[s("td",[e._v("[-r ; --recover]")]),e._v(" "),s("td",[e._v("When reading binary edit logs, use recovery mode. This will give you the chance to skip corrupt parts of the edit log.")])]),e._v(" "),s("tr",[s("td",[e._v("[-h ; --help]")]),e._v(" "),s("td",[e._v("Display the tool usage and help information and exit.")])])])]),e._v(" "),s("h2",{attrs:{id:"case-study-hadoop-cluster-recovery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#case-study-hadoop-cluster-recovery","aria-hidden":"true"}},[e._v("#")]),e._v(" Case study: Hadoop cluster recovery")]),e._v(" "),s("p",[e._v("In case there is some problem with hadoop cluster and the edits file is corrupted it is possible to save at least part of the edits file that is correct. This can be done by converting the binary edits to XML, edit it manually and then convert it back to binary. The most common problem is that the edits file is missing the closing record (record that has opCode -1). This should be recognized by the tool and the XML format should be properly closed.")]),e._v(" "),s("p",[e._v("If there is no closing record in the XML file you can add one after last correct record. Anything after the record with opCode -1 is ignored.")]),e._v(" "),s("p",[e._v("Example of a closing record (with opCode -1):")]),e._v(" "),s("pre",[s("code",[e._v("  <RECORD>\n    <OPCODE>-1</OPCODE>\n    <DATA>\n    </DATA>\n  </RECORD>\n")])])])}),[],!1,null,null,null);t.default=i.exports}}]);