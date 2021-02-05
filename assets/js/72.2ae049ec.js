(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1440:function(e,t,o){"use strict";o.r(t);var a=o(25),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"s3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s3"}},[e._v("#")]),e._v(" S3")]),e._v(" "),a("p",[e._v("S3 is an object storage service that allows you to block public access to all of your objects at the bucket or the account level with S3 Block Public Access. S3 maintains compliance programs, such as PCI-DSS, HIPAA/HITECH, FedRAMP, EU Data Protection Directive, and FISMA, to help you meet regulatory requirements.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/S3/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Bucket")]),e._v(" "),a("ul",[a("li",[e._v("Create a bucket")]),e._v(" "),a("li",[e._v("Get all buckets")]),e._v(" "),a("li",[e._v("Search within a bucket")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("File")]),e._v(" "),a("ul",[a("li",[e._v("Copy a file")]),e._v(" "),a("li",[e._v("Delete a file")]),e._v(" "),a("li",[e._v("Download a file")]),e._v(" "),a("li",[e._v("Get all files")]),e._v(" "),a("li",[e._v("Upload a file")])])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Folder")]),e._v(" "),a("ul",[a("li",[e._v("Create a folder")]),e._v(" "),a("li",[e._v("Delete a folder")]),e._v(" "),a("li",[e._v("Get all folders")])])]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" To attach a file for upload, you will need to use an additional node such as the "),a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/ReadBinaryFile/"}},[e._v("Read Binary File")]),e._v(" node or the "),a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")]),e._v(" node to pass the file as a data property.")],1),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to upload a file to an S3 compatible server and get a list of all the files in a bucket using the S3 node. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/674",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("S3")])])]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(903),alt:"A workflow with the S3 node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-start-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),a("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),a("h3",{attrs:{id:"_2-http-request-node-get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-request-node-get"}},[e._v("#")]),e._v(" 2. HTTP Request node (GET)")]),e._v(" "),a("ol",[a("li",[e._v("Enter the URL of the file in the "),a("em",[a("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Select 'File' from the "),a("em",[a("strong",[e._v("Response Format")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[a("img",{attrs:{src:o(904),alt:"Using the HTTP Request node to get a file"}})]),e._v(" "),a("h3",{attrs:{id:"_3-s3-node-upload-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-s3-node-upload-file"}},[e._v("#")]),e._v(" 3. S3 node (upload: file)")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the S3 node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/S3/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Select 'Upload' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Enter the bucket name in the "),a("em",[a("strong",[e._v("Bucket Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("File Name")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),a("div",{pre:!0},[a("ol",{pre:!0,attrs:{start:"5"}},[a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > HTTP Request > Output Data > Binary > data > fileName. You can also add the following expression: "),a("code",[e._v('{{$node["HTTP Request"].binary.data.fileName}}')])]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),a("p",[a("img",{attrs:{src:o(905),alt:"Using the S3 node to upload a file to a bucket"}})]),e._v(" "),a("h3",{attrs:{id:"_4-s-node-getall-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-s-node-getall-file"}},[e._v("#")]),e._v(" 4. S node (getAll: file)")]),e._v(" "),a("ol",[a("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),a("li",[e._v("Select 'Get All' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Enter the bucket name in the "),a("em",[a("strong",[e._v("Bucket Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Toggle "),a("em",[a("strong",[e._v("Return All")])]),e._v(" to true.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[a("img",{attrs:{src:o(906),alt:"Using the S3 node to get a list of all the files in a bucket"}})])])}),[],!1,null,null,null);t.default=s.exports},903:function(e,t,o){e.exports=o.p+"assets/img/workflow.6e241177.png"},904:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest_node.5416465e.png"},905:function(e,t,o){e.exports=o.p+"assets/img/S3_node.741f1b70.png"},906:function(e,t,o){e.exports=o.p+"assets/img/S_node.8b339e53.png"}}]);