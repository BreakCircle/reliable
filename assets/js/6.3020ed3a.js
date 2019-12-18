(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{173:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("hr"),t._v(" "),t._m(1),t._v(" "),t._m(2),s("p",[t._v("reliable_home requires the following sub-directories to be created.")]),t._v(" "),t._m(3),t._m(4),t._v(" "),s("ul",[t._m(5),t._v(" "),s("li",[t._v("Download official "),s("a",{attrs:{href:"http://mirrors.jenkins.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("War package"),s("OutboundLink")],1),t._v(" to $HOME/reliable_home directory")]),t._v(" "),s("li",[t._v("jenkins service launches at port 9910")])]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),s("hr"),t._v(" "),t._m(10),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"./jenkins-android.html"}},[t._v("jenkins-android.md")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"./jenkins-ios.html"}},[t._v("jenkins-ios.md")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"./jenkins-web.html"}},[t._v("jenkins-web.md")])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"integrate-with-jenkins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#integrate-with-jenkins"}},[this._v("#")]),this._v(" Integrate With Jenkins")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"reliable-home-path"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reliable-home-path"}},[this._v("#")]),this._v(" Reliable home path")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("mkdir")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[this._v("$HOME")]),this._v("/reliable_home\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(".\n├── static                               Static HTTP server root folder, containing build artifacts, reports, and archived files.\n├── mysql_data                           Mysql Database. Can be backed up easily.\n├── jenkins_home                         Jenkins root folder, containing configuration files and plugins.\n├── jenkins_tmp                          Jenkins temporary folder.\n└── jenkins.war                          Jenkins war package. Can execute programs.\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"reliable-jenkins-deployment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reliable-jenkins-deployment"}},[this._v("#")]),this._v(" Reliable Jenkins Deployment")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("In "),e("code",[this._v("$HOME/reliable_home")]),this._v(" directory, create jenkins_home, jenkins_tmp")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ java -Dfile.encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("UTF-8 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -XX:PermSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("256m "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -XX:MaxPermSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("512m "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -Xms256m "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -Xmx512m "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -DJENKINS_HOME"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/reliable_home/jenkins_home "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -Djava.io.tmpdir"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/reliable_home/jenkins_tmp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -jar "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/reliable_home/jenkins.war "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --httpPort"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9910")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Change "),e("code",[this._v("$HOME/reliable_home/jenkins_home/config.xml")]),this._v(" useSecurity to false, and restart the Jenkins.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("useSecurity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("false"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("useSecurity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"0"}},[e("li",[this._v("input the "),e("code",[this._v("initialAdminPassword")]),this._v(" and next.")]),this._v(" "),e("li",[this._v("select "),e("code",[this._v("Install suggested plugins")]),this._v(" and wait for Jenkins plugins installation ready.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"build-tasks-sample"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-tasks-sample"}},[this._v("#")]),this._v(" Build Tasks Sample")])}],!1,null,null,null);e.default=n.exports}}]);