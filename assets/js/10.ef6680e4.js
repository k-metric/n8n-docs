(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1347:function(e,t,o){"use strict";o.r(t);var n=o(25),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"coingecko"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#coingecko"}},[e._v("#")]),e._v(" CoinGecko")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.coingecko.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("CoinGecko"),n("OutboundLink")],1),e._v(" provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalization, CoinGecko tracks community growth, open-source code development, major events, and on-chain metrics.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("The CoinGecko node does not require authentication.")])]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Coin")]),e._v(" "),n("ul",[n("li",[e._v("Get a candlestick open-high-low-close chart for the selected currency")]),e._v(" "),n("li",[e._v("Get current data for a coin")]),e._v(" "),n("li",[e._v("Get all coins")]),e._v(" "),n("li",[e._v("Get historical data (name, price, market, stats) at a given date for a coin")]),e._v(" "),n("li",[e._v("Get prices and market-related data for all trading pairs that match the selected currency")]),e._v(" "),n("li",[e._v("Get historical market data that includes the price, market cap, and 24 hours volume (granularity auto)")]),e._v(" "),n("li",[e._v("Get the current price of any cryptocurrencies in any other supported currencies that you need")]),e._v(" "),n("li",[e._v("Get coin tickers")])])]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Event")]),e._v(" "),n("ul",[n("li",[e._v("Get all events")])])]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to get the price of BTC in EUR using the CoinGecko node and send an SMS when the price is greater than or equal to €9000. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/704",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Cron/"}},[e._v("Cron")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("CoinGecko")])]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/If/"}},[e._v("IF")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Twilio/"}},[e._v("Twilio")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/NoOperationDoNothing/"}},[e._v("No Operation, do nothing")])],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(648),alt:"A workflow with the CoinGecko node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-cron-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-cron-node"}},[e._v("#")]),e._v(" 1. Cron node")]),e._v(" "),n("p",[e._v("The Cron node will trigger the workflow every minute.")]),e._v(" "),n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Cron Time")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select 'Every Minute' from the "),n("em",[n("strong",[e._v("Mode")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(649),alt:"Using the Cron node to trigger the workflow"}})]),e._v(" "),n("h3",{attrs:{id:"_2-coingecko-node-price-coin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-coingecko-node-price-coin"}},[e._v("#")]),e._v(" 2. CoinGecko node (price: coin)")]),e._v(" "),n("p",[e._v("This node will get the price of BTC in EUR using the CoinGecko API. Feel free to select a different Coin ID and Currency.")]),e._v(" "),n("ol",[n("li",[e._v("Select 'Price' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'BTC' from the "),n("em",[n("strong",[e._v("Coin IDs")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select 'EUR' from the "),n("em",[n("strong",[e._v("Currencies")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node fetches the price of 1 BTC in EUR. This information will be passed on to the next nodes in the workflow.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(650),alt:"Using the CoinGecko node to get the price"}})]),e._v(" "),n("div",{pre:!0},[n("h3",{pre:!0,attrs:{id:"_3-if-node"}},[n("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-if-node"}},[e._v("#")]),e._v(" 3. IF node")]),e._v(" "),n("p",[e._v("This node will compare the price that we got from the CoinGecko node. If the price is greater than or equal to 9000, it will return true otherwise false.")]),e._v(" "),n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Condition")])]),e._v(" and select 'Number' from the dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value 1")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > CoinGecko > Output Data > JSON > bitcoin > eur. You can also add the following expression: "),n("code",[e._v('{{$node["CoinGecko"].json["bitcoin"]["eur"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Select 'Larger Equal' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Set "),n("em",[n("strong",[e._v("Value 2")])]),e._v(" to 9000.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node returns an output for "),n("strong",[e._v("true")]),e._v(" when the price is greater than 9000.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(651),alt:"Using the IF node to check if the price is larger than 9000"}})]),e._v(" "),n("h3",{attrs:{id:"_4-twilio-node-send-sms"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-twilio-node-send-sms"}},[e._v("#")]),e._v(" 4. Twilio node (send: sms)")]),e._v(" "),n("p",[e._v("This node sends an SMS to a number when the price is greater than or equal to 9000.")]),e._v(" "),n("ol",[n("li",[e._v("Connect this node with the "),n("strong",[e._v("true")]),e._v(" output of the IF node.")]),e._v(" "),n("li",[e._v("You'll have to enter credentials for the Twilio node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Twilio/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Enter the Twilio phone number in the "),n("em",[n("strong",[e._v("From")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter the receiver's phone number in the "),n("em",[n("strong",[e._v("To")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Message")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),n("div",{pre:!0},[n("ol",{pre:!0,attrs:{start:"6"}},[n("li",[e._v("Enter "),n("code",[e._v('The price went up! The new price is €{{$node["CoinGecko"].json["bitcoin"]["eur"]}}')]),e._v(" in the "),n("em",[n("strong",[e._v("Expression")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node sends an SMS with the price that we obtained from the CoinGecko node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(652),alt:"Using the Twilio node to send an SMS"}})]),e._v(" "),n("div",{pre:!0},[n("h3",{pre:!0,attrs:{id:"_5-noop-node"}},[n("a",{pre:!0,attrs:{class:"header-anchor",href:"#_5-noop-node"}},[e._v("#")]),e._v(" 5. NoOp node")]),e._v(" "),n("p",[e._v("Adding this node here is optional, as the absence of this node won't make a difference to the functioning of the workflow.")]),e._v(" "),n("ol",[n("li",[e._v("Connect this node with the "),n("strong",[e._v("false")]),e._v(" output of the IF node.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[n("img",{attrs:{src:o(653),alt:"Using the NoOp node"}})])])}),[],!1,null,null,null);t.default=i.exports},648:function(e,t,o){e.exports=o.p+"assets/img/workflow.6ebfab08.png"},649:function(e,t,o){e.exports=o.p+"assets/img/Cron_node.dbee25d7.png"},650:function(e,t,o){e.exports=o.p+"assets/img/CoinGecko_node.508ca8fc.png"},651:function(e,t,o){e.exports=o.p+"assets/img/IF_node.c3677052.png"},652:function(e,t,o){e.exports=o.p+"assets/img/Twilio_node.8beada8f.png"},653:function(e,t,o){e.exports=o.p+"assets/img/NoOp_node.5beae3e9.png"}}]);