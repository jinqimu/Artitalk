(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{339:function(t,a,s){"use strict";s.r(a);var n=s(8),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"👀-前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#👀-前言"}},[t._v("#")]),t._v(" 👀 前言")]),t._v(" "),s("p",[t._v("Github："),s("a",{attrs:{href:"https://github.com/Drew233/Artitalk",target:"_blank",rel:"noopener noreferrer"}},[t._v("Artitalk.js"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("详细教程参考：")]),t._v(" "),s("ul",[s("li",[t._v("cungudafa："),s("a",{attrs:{href:"https://cungudafa.top/post/96c.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo（butterfly）添加说说页面（Artitalk可在线发布）"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Uncle_drew: "),s("a",{attrs:{href:"https://cndrew.cn/2020/04/10/hexo-shuoshuo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("为你的hexo博客添加动态的（可直接发布说说的）说说页面"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("视频教程：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.bilibili.com/video/BV1jf4y1m7LK#reply2862116366",target:"_blank",rel:"noopener noreferrer"}},[t._v("Artitalk更新说明以及教程"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.bilibili.com/video/BV16T4y1u7Yp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Artitalk--基于leancloud实现的可实时发布说说/微语的js"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.bilibili.com/video/BV16A411b7UF",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hexo-shuoshuo bilibili"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("因为项目初期版本更新较为频繁，所以教程仅作参考，请仔细阅读使用文档，以此为准。")]),t._v(" "),s("h3",{attrs:{id:"特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),s("ul",[s("li",[t._v("实时发布,点击删除")]),t._v(" "),s("li",[t._v("支持markdown语法")]),t._v(" "),s("li",[t._v("支持剪切板图片直接上传，支持点击上传图片")]),t._v(" "),s("li",[t._v("方便引用")])]),t._v(" "),s("h2",{attrs:{id:"🚀-开始使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🚀-开始使用"}},[t._v("#")]),t._v(" 🚀 开始使用")]),t._v(" "),s("h3",{attrs:{id:"🌈-leancloud的相关准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🌈-leancloud的相关准备"}},[t._v("#")]),t._v(" 🌈 leancloud的相关准备")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("🌍 使用国际版的leancloud")]),t._v(" "),s("p",[t._v("因为leancloud的国内节点需要接入备案域名作为安全域名。明显违背了适用性强的理念。这里推荐大家使用国际版，当然国内版的也可以，但是不要忘了填写severurl即可。")])]),t._v(" "),s("ol",[s("li",[t._v("前往"),s("a",{attrs:{href:"https://leancloud.app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("leancloud国际版"),s("OutboundLink")],1),t._v("，注册账号。")]),t._v(" "),s("li",[t._v("注册完成之后根据leancloud的提示绑定手机号和邮箱。")]),t._v(" "),s("li",[t._v("绑定完成之后点击"),s("code",[t._v("创建应用")]),t._v("，应用名称随意，接着在"),s("code",[t._v("结构化数据")]),t._v("中创建"),s("code",[t._v("class")]),t._v("，命名为"),s("code",[t._v("shuoshuo")]),t._v("。")]),t._v(" "),s("li",[t._v("在你新建的应用中找到"),s("code",[t._v("结构化数据")]),t._v("下的"),s("code",[t._v("用户")]),t._v("。点击"),s("code",[t._v("添加用户")]),t._v("，输入想用的用户名及密码。")]),t._v(" "),s("li",[t._v("回到"),s("code",[t._v("结构化数据")]),t._v("中，点击"),s("code",[t._v("class")]),t._v("下的"),s("code",[t._v("shuoshuo")]),t._v("。找到权限，在"),s("code",[t._v("Class 访问权限")]),t._v("中将"),s("code",[t._v("add_fields")]),t._v("以及"),s("code",[t._v("create")]),t._v("权限设置为指定用户，输入你刚才输入的用户名会自动匹配。为了安全起见，将"),s("code",[t._v("delete")]),t._v("和"),s("code",[t._v("update")]),t._v("也设置为跟它们一样的权限。")]),t._v(" "),s("li",[t._v("点击"),s("code",[t._v("class")]),t._v("下的"),s("code",[t._v("_User")]),t._v("添加列，列名称为"),s("code",[t._v("img")]),t._v("，默认值填上你这个账号想要用的头像url，这一项不进行配置，说说头像会显示为默认头像——Artitalk的logo。")]),t._v(" "),s("li",[t._v("在最菜单栏中找到设置->应用keys，记下来"),s("code",[t._v("AppID")]),t._v("和"),s("code",[t._v("AppKey")]),t._v("，一会会用。")]),t._v(" "),s("li",[t._v("最后将"),s("code",[t._v("_User")]),t._v("中的权限全部调为指定用户，或者数据创建者，为了保证不被篡改用户数据已达到强制发布说说。")]),t._v(" "),s("li",[t._v("因为leancloud功能的限制。若想同时使用valine和artitalk，请在"),s("code",[t._v("class")]),t._v("中添加名为"),s("code",[t._v("Comment")]),t._v("的class。不推荐在存储valine的应用中新建名为"),s("code",[t._v("shuoshuo")]),t._v("的class，可能会出现神奇的bug。")])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("❗ 关于设置权限的这几步")]),t._v(" "),s("p",[t._v("这几步一定要设置好，才可以保证不被“闲人”破解发布说说的验证")])]),t._v(" "),s("h3",{attrs:{id:"🌼-html片段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🌼-html片段"}},[t._v("#")]),t._v(" 🌼 HTML片段")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://libs.baidu.com/jquery/2.0.0/jquery.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" appID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" appKEY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lazy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("artitalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/artitalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("如果你加载本js后出现一直是加载页面的情况，请检查你的主题是否会对其中内容进行渲染（F12查看即可）。\n如果是因为渲染导致的问题，请在"),s("code",[t._v("<script>")]),t._v("标签外面使用"),s("code",[t._v("{% raw %}")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("点击查看代码")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://libs.baidu.com/jquery/2.0.0/jquery.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {% raw %}\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" appID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" appKEY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    {% endraw %}\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lazy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("artitalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/artitalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("h3",{attrs:{id:"🎅-配置项的说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🎅-配置项的说明"}},[t._v("#")]),t._v(" 🎅 配置项的说明")]),t._v(" "),s("p",[t._v("必要性为False的配置项可以不添加")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("变量名")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("作用")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("必要性")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{"text-align":"right"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("appID")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Leancloud中的应用ID")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("True")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("无")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("appKEY")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Leancloud中的应用KEY")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("True")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("无")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("slanguage")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Js的语言设置")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("False")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("zh")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("目前仅支持English(en)及Español(es)")])]),t._v(" "),s("tr",[s("td",[t._v("per")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("每页显示说说的数量")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("False")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("5")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("severurl")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("leancloud绑定的api域名")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("False")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("无")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("国内版用户需填写")])]),t._v(" "),s("tr",[s("td",[t._v("placeholder1")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("在编辑说说的输入框中的占位符")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("False")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v('""（空）')]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("placeholder2")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("输入头像url的输入框的占位符")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("False")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v('""（默认头像）')]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("lazy")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是否开启加载动画（1：开启  0：关闭）")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("False")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("1（默认开启）")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("bgimg")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("说说输入框背景图片（需为图片格式）")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("False")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v('""（空）')]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("无")])]),t._v(" "),s("tr",[s("td",[t._v("color1")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("说说背景颜色1&按钮颜色1")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("False")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v('"RGBA(255, 125, 73, 0.75)"')]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("原则上支持RGB和十六进制代表的颜色")])]),t._v(" "),s("tr",[s("td",[t._v("color2")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("说说背景颜色2&按钮颜色2")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("False")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v('"#9BCD9B"')]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("原则上支持RGB和十六进制代表的颜色")])]),t._v(" "),s("tr",[s("td",[t._v("color3")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("说说字体颜色1")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("False")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v('""（空）')]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("原则上支持RGB和十六进制代表的颜色")])]),t._v(" "),s("tr",[s("td",[t._v("atemoji_array")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("自定义表情")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("False")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("B站小电视表情包")]),t._v(" "),s("td",{staticStyle:{"text-align":"right"}},[t._v("需要遵守格式")])])])]),t._v(" "),s("p",[t._v("js自带三套表情包（贴吧，bilibili，qq），用户自定义的表情包在custom中")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("点击查看自定义表情包的格式")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" atemoji_array"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        huaji"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/smilies/icon_huaji.gif"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        baiyan"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baiyan.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        bishi"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bishi.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        bizui"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bizui.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        chan"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/chan.png"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("p",[t._v("在头像url中输入图片链接会在本次发布的说说中覆盖默认头像")]),t._v(" "),s("h3",{attrs:{id:"🔨-测试使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔨-测试使用"}},[t._v("#")]),t._v(" 🔨 测试使用")]),t._v(" "),s("p",[t._v("如果上面的配置没有问题，打开你的页面，点击页面右下角的登录输入用户密码后，点击发布说说即可。")]),t._v(" "),s("h3",{attrs:{id:"🔨-说说内容的删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔨-说说内容的删除"}},[t._v("#")]),t._v(" 🔨 说说内容的删除")]),t._v(" "),s("p",[t._v("登录后点击说说内容框右上角的查，点击确定删除即可。")]),t._v(" "),s("h3",{attrs:{id:"🔨-说说内容的修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔨-说说内容的修改"}},[t._v("#")]),t._v(" 🔨 说说内容的修改")]),t._v(" "),s("p",[t._v("在leancloud中找到自己添加的名为"),s("code",[t._v("shuoshuo")]),t._v("的class，在里面的"),s("code",[t._v("content")]),t._v("中编辑即可。")]),t._v(" "),s("h2",{attrs:{id:"🦄-在typecho中使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🦄-在typecho中使用"}},[t._v("#")]),t._v(" 🦄 在Typecho中使用")]),t._v(" "),s("ol",[s("li",[t._v("登陆后台后新增独立页面")]),t._v(" "),s("li",[t._v("标题随意填，内容填为")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("!!!\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://libs.baidu.com/jquery/2.0.0/jquery.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" appID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" appKEY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lazy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("artitalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/artitalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n!!!\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("发布页面")])]),t._v(" "),s("h2",{attrs:{id:"🕸-使用cdn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🕸-使用cdn"}},[t._v("#")]),t._v(" 🕸 使用cdn")]),t._v(" "),s("h3",{attrs:{id:"⭐-获取最新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#⭐-获取最新"}},[t._v("#")]),t._v(" ⭐ 获取最新")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("//默认获取最新，推荐使用\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/artitalk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"🍳-获取指定版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🍳-获取指定版本"}},[t._v("#")]),t._v(" 🍳 获取指定版本")]),t._v(" "),s("p",[t._v("使用指定版本，在版本号填上对应版本即可，例如：https://unpkg.com/artitalk@1.1.15/artitalk.js"),s("br"),t._v("\n关于版本可查看："),s("a",{attrs:{href:"https://unpkg.com/artitalk/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://unpkg.com/artitalk/"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/artitalk@版本号/artitalk.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);