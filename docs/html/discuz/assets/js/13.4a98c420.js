(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{205:function(e,t,a){"use strict";a.r(t);var i=a(0),o=Object(i.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"more"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more","aria-hidden":"true"}},[e._v("#")]),e._v(" More")]),e._v(" "),a("p",[e._v("Each of the following solutions has been proven to be effective and we hope to be helpful to you.")]),e._v(" "),a("h2",{attrs:{id:"domain-binding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#domain-binding","aria-hidden":"true"}},[e._v("#")]),e._v(" Domain binding")]),e._v(" "),a("p",[e._v("The precondition for "),a("strong",[e._v("Domain binding")]),e._v(" is have completed the "),a("strong",[e._v("Domain resolution")]),e._v(" for Discuz Instance.")]),e._v(" "),a("p",[e._v("From the perspective of server security and subsequent maintenance considerations, the "),a("strong",[e._v("Domain Binding")]),e._v(" step cannot be omitted.")]),e._v(" "),a("p",[e._v("Discuz domain name binding steps:")]),e._v(" "),a("ol",[a("li",[e._v("Connect your Cloud Server")]),e._v(" "),a("li",[e._v("Modify "),a("router-link",{attrs:{to:"/stack-components.html#apache"}},[e._v("vhost configuration file")]),e._v(", change the domain name item for you"),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('#### Discuz (LAMP) bind domain #### \n\n  <VirtualHost *:80>\n  ServerName joomla.mydomain.com # modify it for you\n  DocumentRoot "/data/wwwroot/Discuz"\n  ...\n  \n#### Discuz (LEMP) bind domain #### \n\n  server {\n   listen 80;\n   server_name joomla.example.com; # modify it for you\n  ...\n\n')])])])],1),e._v(" "),a("li",[e._v("Save it and restart "),a("router-link",{attrs:{to:"/admin-services.html#apache"}},[e._v("Web Service")])],1)]),e._v(" "),a("h2",{attrs:{id:"discuz-change-domain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discuz-change-domain","aria-hidden":"true"}},[e._v("#")]),e._v(" Discuz Change domain")]),e._v(" "),a("p",[e._v("Refer to "),a("a",{attrs:{href:"https://www.discuz.net/thread-3528253-1-1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("discuz! X3 更改域名全程记录"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"discuz-modify-database-connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discuz-modify-database-connection","aria-hidden":"true"}},[e._v("#")]),e._v(" Discuz modify database connection")]),e._v(" "),a("p",[e._v("In your Discuz installation directory, there are three database-related configuration files:")]),e._v(" "),a("ul",[a("li",[e._v("config/config_global.php")]),e._v(" "),a("li",[e._v("config/config_ucenter.php")]),e._v(" "),a("li",[e._v("uc_server/data/config.inc.php")])]),e._v(" "),a("p",[e._v("Once you have modified the database information used to initialize the installation, you will need to modify the above three files to apply the new database configuration.")]),e._v(" "),a("h2",{attrs:{id:"discuz-recover-administrator-password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discuz-recover-administrator-password","aria-hidden":"true"}},[e._v("#")]),e._v(" Discuz recover administrator password")]),e._v(" "),a("ol",[a("li",[e._v("Use SFTP to login Server, edit the "),a("em",[e._v("uc_server/data/config.inc.php")]),e._v(" file in the root directory of Discuz")]),e._v(" "),a("li",[e._v("Replace two items below with"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("define('UC_FOUNDERPW','047099adb883dc19616dae0ef2adc5b6');\ndefine('UC_FOUNDERSALT','311254');\n")])])])]),e._v(" "),a("li",[a("router-link",{attrs:{to:"/admin-services.html"}},[e._v("Restart Service")])],1),e._v(" "),a("li",[e._v("Then, your Ucenter administrator password is: "),a("code",[e._v("123456789")])]),e._v(" "),a("li",[e._v("Visit URL "),a("em",[e._v("http://Internet IP/uc_server")]),e._v(", us "),a("code",[e._v("123456789")]),e._v(" as your password to login Ucenter\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/discuz/discuz-ucpwlogin-websoft9.png",alt:""}})]),e._v(" "),a("li",[e._v("Modify adminitrator password from 【用户管理】\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/discuz/discuz-ucentermodifyadmin-websoft9.png",alt:""}})])]),e._v(" "),a("h2",{attrs:{id:"discuz-change-logo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discuz-change-logo","aria-hidden":"true"}},[e._v("#")]),e._v(" Discuz change Logo")]),e._v(" "),a("p",[e._v("Refer to Discuz forum "),a("a",{attrs:{href:"http://www.discuz.net/thread-3185527-1-1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何替换程序默认Logo"),a("OutboundLink")],1)])])},[],!1,null,null,null);t.default=o.exports}}]);