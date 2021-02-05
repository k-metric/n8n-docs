(window.webpackJsonp=window.webpackJsonp||[]).push([[445],{1555:function(t,e,a){"use strict";a.r(e);var s=a(25),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workflow"}},[t._v("#")]),t._v(" Workflow")]),t._v(" "),a("h2",{attrs:{id:"activate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activate"}},[t._v("#")]),t._v(" Activate")]),t._v(" "),a("p",[t._v("Activating a workflow means that the Trigger and Webhook nodes get activated and can trigger a workflow to run. By default all the newly created workflows are deactivated. That means that even if a Trigger node like the Cron node should start a workflow because a predefined time is reached, it will not unless the workflow gets activated. It is only possible to activate a workflow which contains a Trigger or a Webhook node.")]),t._v(" "),a("h2",{attrs:{id:"data-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-flow"}},[t._v("#")]),t._v(" Data Flow")]),t._v(" "),a("p",[t._v('Nodes do not only process one "item", they process multiple ones. So if the Trello node is set to "Create-Card" and it has an expression set for "Name" to be set depending on "name" property, it will create a card for each item, always choosing the name-property-value of the current one.')]),t._v(" "),a("p",[t._v('This data would, for example, create two boards. One named "test1" the other one named "test2":')]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test1"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test2"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"error-workflows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-workflows"}},[t._v("#")]),t._v(" Error Workflows")]),t._v(" "),a("p",[t._v('For each workflow, an optional "Error Workflow" can be set. It gets executed in case the execution of the workflow fails. That makes it possible to, for instance, inform the user via Email or Slack if something goes wrong. The same "Error Workflow" can be set on multiple workflows.')]),t._v(" "),a("p",[t._v('The only difference between a regular workflow and an "Error Workflow" is that it contains an "Error Trigger" node. So it is important to make sure that this node gets created before setting a workflow as "Error Workflow".')]),t._v(" "),a("p",[t._v('The "Error Trigger" node will trigger in case the execution fails and receives information about it. The data looks like this:')]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"execution"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"231"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://n8n.example.com/execution/231"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"retryOf"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"34"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Error Message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stack"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Stacktrace"')]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lastNodeExecuted"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Node With Error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"manual"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"workflow"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Workflow"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),a("p",[t._v("All information is always present except:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("execution.id")]),t._v(": Only present when the execution gets saved in the database")]),t._v(" "),a("li",[a("strong",[t._v("execution.url")]),t._v(": Only present when the execution gets saved in the database")]),t._v(" "),a("li",[a("strong",[t._v("execution.retryOf")]),t._v(": Only present when the execution is a retry of a previously failed execution")])]),t._v(" "),a("h3",{attrs:{id:"setting-error-workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-error-workflow"}},[t._v("#")]),t._v(" Setting Error Workflow")]),t._v(" "),a("p",[t._v('An "Error Workflow" can be set in the Workflow Settings which can be accessed by pressing the "Workflow" button in the menu on the on the left side. The last option is "Settings". In the window that appears, the "Error Workflow" can be selected via the Dropdown "Error Workflow".')]),t._v(" "),a("h2",{attrs:{id:"share-workflows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#share-workflows"}},[t._v("#")]),t._v(" Share Workflows")]),t._v(" "),a("p",[t._v("All workflows are JSON and can be shared with others.")]),t._v(" "),a("p",[t._v("There are multiple ways to download a workflow as JSON to then share it with other people via Email, Slack, Skype, Dropbox, …")]),t._v(" "),a("ol",[a("li",[t._v('Press the "Download" button under the Workflow menu in the sidebar on the left. It then downloads the workflow as a JSON file.')]),t._v(" "),a("li",[t._v("Select the nodes in the editor which should be exported and then copy them (Ctrl + c). The nodes then get saved as JSON in the clipboard and can be pasted wherever desired (Ctrl + v).")])]),t._v(" "),a("p",[t._v("Importing that JSON representation again into n8n can also be done in different ways:")]),t._v(" "),a("ol",[a("li",[t._v('Press "Import from File" or "Import from URL" under the Workflow menu in the sidebar on the left.')]),t._v(" "),a("li",[t._v("Copy the JSON workflow to the clipboard (Ctrl + c) and then pasting it directly into the editor (Ctrl + v).")])]),t._v(" "),a("h2",{attrs:{id:"workflow-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workflow-settings"}},[t._v("#")]),t._v(" Workflow Settings")]),t._v(" "),a("p",[t._v("On each workflow, it is possible to set some custom settings and overwrite some of the global default settings. Currently, the following settings can be set:")]),t._v(" "),a("h3",{attrs:{id:"error-workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-workflow"}},[t._v("#")]),t._v(" Error Workflow")]),t._v(" "),a("p",[t._v("Workflow to run in case the execution of the current workflow fails. More information in section "),a("a",{attrs:{href:"#error-workflows"}},[t._v("Error Workflows")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"timezone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timezone"}},[t._v("#")]),t._v(" Timezone")]),t._v(" "),a("p",[t._v('The timezone to use in the current workflow. If not set, the global Timezone (by default "New York" gets used). For instance, this is important for the Cron Trigger node.')]),t._v(" "),a("h3",{attrs:{id:"save-data-error-execution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#save-data-error-execution"}},[t._v("#")]),t._v(" Save Data Error Execution")]),t._v(" "),a("p",[t._v("If the Execution data of the workflow should be saved when it fails.")]),t._v(" "),a("h3",{attrs:{id:"save-data-success-execution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#save-data-success-execution"}},[t._v("#")]),t._v(" Save Data Success Execution")]),t._v(" "),a("p",[t._v("If the Execution data of the workflow should be saved when it succeeds.")]),t._v(" "),a("h3",{attrs:{id:"save-manual-executions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#save-manual-executions"}},[t._v("#")]),t._v(" Save Manual Executions")]),t._v(" "),a("p",[t._v("If executions started from the Editor UI should be saved.")])])}),[],!1,null,null,null);e.default=r.exports}}]);