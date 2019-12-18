(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{167:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"jenkins-ios-task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-ios-task"}},[t._v("#")]),t._v(" Jenkins iOS Task")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[t._v("#")]),t._v(" Dependencies")]),t._v(" "),a("h3",{attrs:{id:"environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment"}},[t._v("#")]),t._v(" Environment")]),t._v(" "),a("p",[t._v("Please install reliable-ios automation utils with following command.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://github.com/macacajs/reliable-ios/files/2114440/Makefile.txt -o Makefile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" init\n")])])]),a("h2",{attrs:{id:"sample-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-project"}},[t._v("#")]),t._v(" Sample Project")]),t._v(" "),a("p",[t._v("There are two sample projects, one for publish app and the other for publish private cocoapod pod frameworks:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"//github.com/app-bootstrap/ios-app-bootstrap"}},[t._v("ios-app-bootstrap - publish iOS App")])]),t._v(" "),a("li",[a("a",{attrs:{href:"//github.com/macacajs/reliable-ios/tree/master/Example"}},[t._v("publish cocoapod frameworks")])])]),t._v(" "),a("h2",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),a("h3",{attrs:{id:"step1-create-new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step1-create-new"}},[t._v("#")]),t._v(" Step1 - Create New")]),t._v(" "),a("p",[t._v("Create a new item named "),a("code",[t._v("ios-app-bootstrap")]),t._v(", and select the "),a("code",[t._v("Freestyle project")]),t._v(" mode.")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/reliable/assets/6d308bd9gy1ft3id6n0ajj21kw12rduv.jpg",width:"75%"}})]),t._v(" "),a("h3",{attrs:{id:"step2-scm-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step2-scm-config"}},[t._v("#")]),t._v(" Step2 - SCM Config")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/reliable/assets/6d308bd9gy1ft3id6gbmej21kw12r7hb.jpg",width:"75%"}})]),t._v(" "),a("p",[t._v("Please input the "),a("code",[t._v("ios-app-bootstrap")]),t._v(" git url, and set the clone depth to "),a("code",[t._v("1")]),t._v(", branch to "),a("code",[t._v("master")]),t._v(" is ok.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://github.com/app-bootstrap/ios-app-bootstrap.git\n")])])]),a("h3",{attrs:{id:"step3-build-scripts-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step3-build-scripts-config"}},[t._v("#")]),t._v(" Step3 - Build Scripts Config")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/reliable/assets/6d308bd9gy1ft3jq4frzjj21kw10nqek.jpg",width:"75%"}})]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("RELIABLE_SERVER_URL=http://127.0.0.1:9900 RELIABLE_IOS=true ./ci.sh\n")])])]),a("p",[a("strong",[t._v("Noted")])]),t._v(" "),a("ul",[a("li",[t._v("To release the app and sign, you may need to configure your developer certificate in Jenkins.")]),t._v(" "),a("li",[t._v("please confirm the RELIABLE_SERVER_URL has the correct address just like the IPV4 or some domain name which can be visited from the docker container, otherwise you will meet the problem below.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("error: TypeError: Cannot read property 'server' of undefined\n    at _.postToGW (/root/src/node_modules/reliable-cli/lib/helper.js:31:66)\n    at ReportCommand.pushToWebhook (/root/src/node_modules/reliable-cli/lib/report-command.js:130:18)\n    at ReportCommand._run (/root/src/node_modules/reliable-cli/lib/report-command.js:70:35)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)\nnpm ERR! code ELIFECYCLE\nnpm ERR! errno 1\nnpm ERR! ios-app-bootstrap@1.0.11 reliable: `reliable report -c ./reliable.config.js`\nnpm ERR! Exit status 1\n")])])]),a("h3",{attrs:{id:"step4-build-now"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step4-build-now"}},[t._v("#")]),t._v(" Step4 - Build Now")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/reliable/assets/6d308bd9gy1ft3jw0q7o0j21kw10ndql.jpg",width:"75%"}})]),t._v(" "),a("p",[t._v("After the building ready, you can get the final result from reliable-web.")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/reliable/assets/6d308bd9gy1ft3jw2iloqj21kw10nguj.jpg",width:"75%"}})]),t._v(" "),a("p",[t._v("We cat get the "),a("code",[t._v("debug")]),t._v(" package of the "),a("code",[t._v("ios-app-bootstrap")]),t._v(".")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/reliable/assets/6d308bd9gy1ft3jw318grj21kw10nwp4.jpg",width:"75%"}})]),t._v(" "),a("p",[t._v("Scan the QRCode, you can download and install it with your device.")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/reliable/assets/6d308bd9gy1ft3jw32rz0j21kw10ntma.jpg",width:"75%"}})]),t._v(" "),a("p",[t._v("You can also get other extra build infomation. If you want more, please tweak the "),a("a",{attrs:{href:"//github.com/macacajs/reliable-cli#configuration"}},[t._v("reliable-cli#configuration")]),t._v(" file.")]),t._v(" "),a("h3",{attrs:{id:"step5-test-reporter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step5-test-reporter"}},[t._v("#")]),t._v(" Step5 - Test Reporter")]),t._v(" "),a("p",[t._v("Reliable support the Unit and E2E test reporter, coverage based on Macaca is supported.")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/reliable/assets/6d308bd9gy1ftc4y26xzaj21kw10g12f.jpg",width:"75%"}})]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/reliable/assets/6d308bd9gy1ftc4y31cf5j21kw10g7kz.jpg",width:"75%"}})])])}],!1,null,null,null);e.default=r.exports}}]);