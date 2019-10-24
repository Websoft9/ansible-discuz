(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{195:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"故障处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#故障处理","aria-hidden":"true"}},[t._v("#")]),t._v(" 故障处理")]),t._v(" "),e("p",[t._v("此处收集使用 Discuz 过程中最常见的故障，供您参考")]),t._v(" "),e("blockquote",[e("p",[t._v("大部分故障与云平台密切相关，如果你可以确认故障的原因是云平台造成的，请参考"),e("a",{attrs:{href:"https://support.websoft9.com/docs/faq/zh/tech-instance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("云平台文档"),e("OutboundLink")],1)])]),t._v(" "),e("h4",{attrs:{id:"discuz-重定向错误？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discuz-重定向错误？","aria-hidden":"true"}},[t._v("#")]),t._v(" Discuz 重定向错误？")]),t._v(" "),e("p",[t._v("重定向错误比较常见。处理办法：分析网站根目录下的 "),e("code",[t._v(".htaccess")]),t._v(" 文件，看看有没有死循环规则")]),t._v(" "),e("h4",{attrs:{id:"discuz-密码输入错误多次被锁，怎么解决？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discuz-密码输入错误多次被锁，怎么解决？","aria-hidden":"true"}},[t._v("#")]),t._v(" Discuz 密码输入错误多次被锁，怎么解决？")]),t._v(" "),e("ol",[e("li",[t._v("10分钟后会自动解锁。")]),t._v(" "),e("li",[t._v("管理员登录，组织→用户 操作栏里有解锁按钮。")])]),t._v(" "),e("h4",{attrs:{id:"修改了数据库密码-discuz-不能访问？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改了数据库密码-discuz-不能访问？","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改了数据库密码 Discuz 不能访问？")]),t._v(" "),e("p",[t._v("若已完成 Discuz 安装，后通过 phpMyAdmin 修改数据库密码，Discuz 就会连不上数据库。解决办法"),e("router-link",{attrs:{to:"/zh/solution-more.html#discuz-修改数据库配置"}},[t._v("参考")])],1),t._v(" "),e("h4",{attrs:{id:"discuz-出现“对不起，您的网站已被设置禁止下载此应用”问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discuz-出现“对不起，您的网站已被设置禁止下载此应用”问题","aria-hidden":"true"}},[t._v("#")]),t._v(" Discuz 出现“对不起，您的网站已被设置禁止下载此应用”问题")]),t._v(" "),e("p",[t._v("该问题出现的原因：由于 Discuz 官方设置了一个应用中心开发平台"),e("a",{attrs:{href:"http://www.kuozhan.net/blacklist-index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discuz!扩展中心防骗云平台"),e("OutboundLink")],1),t._v("专门针对所谓的盗版网站进行屏蔽网站授权，导致众多无辜站长用户无法更新和下载应用中心插件、模板，并且出现”对不起，您的网站已被设置禁止下载此应用“的提示。")]),t._v(" "),e("p",[t._v("解决方法：")]),t._v(" "),e("ol",[e("li",[t._v("登录到phpmyadmin，找到pre_common_setting这个表（默认表前缀pre_，请以你自己的为准。）")]),t._v(" "),e("li",[t._v("在找到的表里删除掉siteuniqueid这个数据（pre_common_setting表中的第10页位置。）")]),t._v(" "),e("li",[t._v("再重新进入网站后台——应用——获取更多应用，再次下载更新试下吧！")])]),t._v(" "),e("h4",{attrs:{id:"discuz-gbk版本乱码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discuz-gbk版本乱码","aria-hidden":"true"}},[t._v("#")]),t._v(" Discuz GBK版本乱码?")]),t._v(" "),e("p",[t._v("Websoft9提供的 Discuz 部署包默认都是UTF-8，一般情况下也可以支持 GBK 版本的Discuz。即当您用Discuz(GBK) 替换 Discuz00(UTF-8) 源码的时候，安装或使用若出现乱码，请参考如下解决办法：")]),t._v(" "),e("ol",[e("li",[t._v("使用SFTP工具（例如“WinSCP”）连接服务器，修改 ect/php.ini 文件，保存"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('默认\ndefault_charset = "UTF-8"\n\n修改为\ndefault_charset = "GBK"\n')])])])]),t._v(" "),e("li",[t._v("重启服务或重启服务器后生效"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("systemctl restart httpd\n")])])])])]),t._v(" "),e("h4",{attrs:{id:"apache-httpd-服务无法启动？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache-httpd-服务无法启动？","aria-hidden":"true"}},[t._v("#")]),t._v(" Apache httpd 服务无法启动？")]),t._v(" "),e("p",[t._v("请通过分析日志文件定位原因： "),e("em",[t._v("/var/log/httpd")])]),t._v(" "),e("h4",{attrs:{id:"数据库服务无法启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库服务无法启动","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据库服务无法启动")]),t._v(" "),e("p",[t._v("数据库服务无法启动最常见的问题包括：磁盘空间不足，内存不足，配置文件错误。"),e("br"),t._v("\n建议先通过命令进行排查")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 查看磁盘空间\ndf -lh\n\n# 查看内存使用\nfree -lh\n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);