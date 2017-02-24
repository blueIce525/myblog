# HTML编码规范

## 1 前言

HTML作为描述网页结构的超文本标记语言，本文档的目标是使HTML代码风格保持一致，容易被理解和被维护。

## 2 代码风格

### 2.1 缩进与换行

#### [强制] 使用 `4` 个空格做为一个缩进层级，不允许使用 `2` 个空格,使用  `tab`时 ，需要设置tab为4个字符。

示例：

    <ul>
        <li>first</li>
        <li>second</li>
    </ul>

#### [建议] 每行不得超过 `120` 个字符。

解释：过长的代码不容易阅读与维护。但是考虑到 HTML 的特殊性，不做硬性要求。

### 2.2 命名

#### [强制] `class` 必须单词全字母小写，单词间以 `-` 分隔。

#### [强制] `class` 必须代表相应模块或部件的内容或功能，不得以样式信息进行命名。

示例：

    <!-- good -->
    <div class="sidebar"></div>

    <!-- bad -->
    <div class="left"></div>

#### [强制] 元素 `id` 必须保证页面唯一。

解释：同一个页面中，不同的元素包含相同的 id，不符合 id 的属性含义。并且使用 document.getElementById 时可能导致难以追查的问题。

#### [建议] `id` 建议单词全字母小写，单词间以 `-` 分隔。同项目必须保持风格一致。

#### [建议] `id`、`class` 命名，在避免冲突并描述清楚的前提下尽可能短。

示例：

    <!-- good -->
    <div id="nav"></div>
    <!-- bad -->
    <div id="navigation"></div>

    <!-- good -->
    <p class="comment"></p>
    <!-- bad -->
    <p class="com"></p>

    <!-- good -->
    <span class="author"></span>
    <!-- bad -->
    <span class="red"></span>

#### [强制] 同一页面，应避免使用相同的 `name` 与 `id`。

解释：IE 浏览器会混淆元素的 id 和 name 属性， document.getElementById 可能获得不期望的元素。所以在对元素的 id 与 name 属性的命名需要非常小心。

一个比较好的实践是，为 id 和 name 使用不同的命名法。

示例：

    <input name="foo">
    <div id="foo"></div>
    <script>
    // IE6 将显示 INPUT
    alert(document.getElementById('foo').tagName);
    </script>

### 2.3 标签

#### [强制] 标签名必须使用小写字母。

示例：

    <!-- good -->
    <p>Hello StyleGuide!</p>

    <!-- bad -->
    <P>Hello StyleGuide!</P>

#### [强制] 对于无需自闭合的标签，不要在自动闭合标签结尾处使用斜线。

解释：常见无需自闭合标签有input、br、img、hr等。

示例：

    <!-- good -->
    <input type="text" name="title">

    <!-- bad -->
    <input type="text" name="title" />

#### [强制] 标签使用必须符合标签嵌套规则。

解释：比如 div 不得置于 p 中，tbody 必须置于 table 中。

详细的标签嵌套规则参见[HTML DTD](http://www.cs.tut.fi/~jkorpela/html5.dtd)中的 `Elements` 定义部分。



#### [建议] `HTML` 标签的使用应该遵循标签的语义。

解释：下面是常见标签语义

##### 头部元素
* title 每个页面必须有且仅有一个 title 元素;
* base 可用场景：首页、频道等大部分链接都为新窗口打开的页面;
* link link 用于引入 css 资源时, 可省去 media(默认为all) 和 type(默认为text/css) 属性;
* style type 默认为 text/css, 可以省去;
* script type 属性可以省去; 不赞成使用lang属性; 不要使用古老的<!– //–>这种hack脚本, 它用于阻止第一代浏览器(Netscape 1和Mosaic)将脚本显示成文字;


##### 结构性元素
* p 表示段落. 只能包含内联元素, 不能包含块级元素;
* div 本身无特殊含义, 可用于布局. 几乎可以包含任何元素;
* br 表示换行符;
* hr 表示水平分割线;
* h1-h6 表示标题. 其中 h1 用于表示当前页面最重要的内容的标题;
* blockquote 表示引用, 可以包含多个段落. 请勿纯粹为了缩进而使用 blockquote, 大部分浏览器默认将 blockquote 渲染为带有左右缩进;
* pre 表示一段格式化好的文本;

##### 文本元素
* a 存在 href 属性时表示链接, 无 href 属性但有 name 属性表示锚点;
* em,strong em 表示句意强调, 加与不加会引起语义变化, 可用于表示不同的心情或语调; strong 表示重要性强调, 可用于局部或全局, strong强调的是重要性, 不会改变句意;
* abbr 表示缩写;
* sub,sup 主要用于数学和化学公式, sup还可用于脚注;
* span 本身无特殊含义;
* ins,del 分别表示从文档中增加(插入)和删除

##### 列表元素
* dl 表示关联列表, dd是对dt的解释; dt和dd的对应关系比较随意： 一个dt对应多个dd、多个dt对应一个dd、多个dt对应多个dd, 都合法; 可用于名词/单词解释、日程列表、站点目录;
* ul 表示无序列表;
* ol 表示有序列表, 可用于排行榜等;
* li 表示列表项, 必须是ul/ol的子元素;


##### 表单元素

* 推荐使用 button 代替 input, 但必须声明 type;
* 推荐使用 fieldset, legend 组织表单
* 表单元素的 name 不能设定为 action, enctype, method, novalidate, target, submit 会导致表单提交混乱


示例：

    <!-- good -->
    <p>Esprima serves as an important <strong>building block</strong> for some JavaScript language tools.</p>

    <!-- bad -->
    <div>Esprima serves as an important <span class="strong">building block</span> for some JavaScript language tools.</div>

#### [建议]除了表格， 在 `CSS` 可以实现相同需求的情况下不得使用表格进行布局。

解释：在兼容性允许的情况下应尽量保持语义正确性。对网格对齐和拉伸性有严格要求的场景允许例外，如多列复杂表单。

#### [建议] 标签的使用应尽量简洁，减少不必要的标签。

解释：在编写HTML代码时，需要尽量避免多余的父节点；很多时候，需要通过迭代和重构来使HTML变得更少。

示例：

    <!-- good -->
    <img class="avatar" src="image.png">

    <!-- bad -->
    <span class="avatar">
        <img src="image.png">
    </span>

### 2.4 属性

#### [强制] 属性名必须使用小写字母，属性值必须用双引号包围。

示例：

    <!-- good -->
    <table cellspacing="0">...</table>

    <!-- bad -->
    <table cellSpacing='0'>...</table>

#### [建议] 布尔类型的属性，建议不添加属性值。

示例：

    <input type="text" disabled>
    <input type="checkbox" value="1" checked>

#### [建议] 自定义属性建议使用 `data-`。

解释：使用前缀有助于区分自定义属性和标准定义的属性。

示例：

    <ol data-ui-type="Select"></ol>
    
#### 属性顺序

解释：属性应该按照特定的顺序出现以保证易读性。

* class
* id
* name
* data-*
* src, for, type, href, value , max-length, max, min, pattern
* placeholder, title, alt
* aria-*, role
* required, readonly, disabled

class是为高可复用组件设计的，所以应处在第一位；

id更加具体且应该尽量少使用，所以将它放在第二位。

示例：

	<a class="..." id="..." data-modal="toggle" href="#">Example link</a>

	<input class="form-control" type="text">

	<img src="..." alt="...">


## 3 通用

### 3.1 DOCTYPE

#### [强制] 使用 `HTML5` 的 `doctype` 来启用标准模式，建议使用大写的 `DOCTYPE`。

示例：

    <!DOCTYPE html>
    <html>
        ...
    </html>

#### [建议] 启用 IE Edge 模式。

示例：

    <meta http-equiv="X-UA-Compatible" content="IE=Edge">

#### [建议] 在 `html` 标签上设置正确的 lang 属性。

解释：有助于提高页面的可访问性，如：让语音合成工具确定其所应该采用的发音，令翻译工具确定其翻译语言等。

示例：

    <html lang="zh-CN">

### 3.2 编码

#### [强制] 页面必须使用精简形式，明确指定字符编码。指定字符编码的 `meta` 必须是 `head` 的第一个直接子元素。

解释：见 [HTML5 Charset能用吗](http://www.qianduan.net/html5-charset-can-it.html) 一文。

示例：

    <html>
        <head>
            <meta charset="UTF-8">
            ......
        </head>
        <body>
            ......
        </body>
    </html>

#### [建议] `HTML` 文件使用无 `BOM` 的 `UTF-8` 编码。

解释：UTF-8 编码具有更广泛的适应性。BOM 在使用程序或工具处理文件时可能造成不必要的干扰。

### 3.3 CSS和JavaScript引入

#### [强制] 引入 `CSS` 时必须指明 `rel="stylesheet"`。

示例：

    <link rel="stylesheet" src="page.css">

#### [建议] 引入 `CSS` 和 `JavaScript` 时无须指明 `type` 属性。

解释：`text/css` 和 `text/javascript` 是 type 的默认值。

#### [建议] 展现定义放置于外部 `CSS` 中，行为定义放置于外部 `JavaScript` 中。

解释：结构-样式-行为的代码分离，对于提高代码的可阅读性和维护性都有好处。

#### [建议] 在 `head` 中引入页面需要的所有 `CSS` 资源。

解释：在页面渲染的过程中，新的CSS可能导致元素的样式重新计算和绘制，页面闪烁。

#### [建议] `JavaScript` 应当放在页面末尾，或采用异步加载。

解释：将 script 放在页面中间将阻断页面的渲染。出于性能方面的考虑，如非必要，请遵守此条建议。

示例：

    <body>
        <!-- a lot of elements -->
        <script src="init-behavior.js"></script>
    </body>

#### [建议] 移动环境或只针对现代浏览器设计的 Web 应用，如果引用外部资源的 `URL` 协议部分与页面相同，建议省略协议前缀。

解释：忽略（Omit）协议：如 background: url(http://www.google.com/images/example); 应该写background: url(//www.google.com/images/example);以方便http与https协议切换，除非必须使用某个协议

示例：

    <script src="//s1.bdstatic.com/cache/static/jquery-1.10.2.min_f2fb5194.js"></script>

## 4 head

### 4.1 title

#### [强制] 页面必须包含 `title` 标签声明标题。

#### [强制] `title` 必须作为 `head` 的直接子元素，并紧随 `charset` 声明之后。

解释：title 中如果包含 ascii 之外的字符，浏览器需要知道字符编码类型才能进行解码，否则可能导致乱码。

示例：

    <head>
        <meta charset="UTF-8">
        <title>页面标题</title>
    </head>

### 4.2 favicon

#### [强制] 保证 `favicon` 可访问。

解释：在未指定 favicon 时，大多数浏览器会请求 Web Server 根目录下的 favicon.ico 。为了保证favicon可访问，避免404，必须遵循以下两种方法之一：

1. 在 Web Server 根目录放置 favicon.ico 文件。
2. 使用 link 指定 favicon。

示例：

    <link rel="shortcut icon" href="path/to/favicon.ico">

## 5 图片

#### [强制] 禁止 `img` 的 `src` 取值为空。延迟加载的图片也要增加默认的 `src`。

解释：src 取值为空，会导致部分浏览器重新加载一次当前页面，参考：<https://developer.yahoo.com/performance/rules.html#emptysrc>

#### [建议] 避免为 `img` 添加不必要的 `title` 属性。

解释：多余的 title 影响看图体验，并且增加了页面尺寸。

#### [建议] 为重要图片添加 `alt` 属性。

解释：可以提高图片加载失败时的用户体验。

#### [建议] 添加 `width` 和 `height` 属性，以避免页面抖动。

#### [建议] 有下载需求的图片采用 `img` 标签实现，无下载需求的图片采用 `CSS` 背景图实现。

解释：

1. 产品 logo、用户头像、用户产生的图片等有潜在下载需求的图片，以 img 形式实现，能方便用户下载。
2. 无下载需求的图片，比如：icon、背景、代码使用的图片等，尽可能采用 css 背景图实现。

## 6 表单

### 6.1 控件标题

#### [强制] 有文本标题的控件必须使用 `label` 标签将其与其标题相关联。

解释：

有两种方式：

1. 将控件置于 label 内。
2. label 的 for 属性指向控件的 id。

推荐使用第二种，减少不必要的 id。如果 DOM 结构不允许直接嵌套，则应使用第二种。

示例：

    <label for="username">用户名：</label> <input type="textbox" name="username" id="username">

### 6.2 按钮

#### [强制] 使用 `button` 元素时必须指明 `type` 属性值。

解释：button 元素的默认 type 为 submit，如果被置于 form 元素中，点击后将导致表单提交。为显示区分其作用方便理解，必须给出 type 属性。

示例：

    <button type="submit">提交</button>
    <button type="button">取消</button>

#### [建议] 尽量不要使用按钮类元素的 `name` 属性。

解释：由于浏览器兼容性问题，使用按钮的 name 属性会带来许多难以发现的问题。具体情况可参考[此文](http://w3help.org/zh-cn/causes/CM2001)。

### 6.3 可访问性 (A11Y)

#### [建议] 负责主要功能的按钮在 `DOM` 中的顺序应靠前。

解释：负责主要功能的按钮应相对靠前，以提高可访问性。如果在 CSS 中指定了 `float: right` 则可能导致视觉上主按钮在前，而 DOM 中主按钮靠后的情况。

示例：

    <!-- good -->
    <style>
    .buttons .button-group {
        float: right;
    }
    </style>

    <div class="buttons">
        <div class="button-group">
            <button type="submit">提交</button>
            <button type="button">取消</button>
        </div>
    </div>

    <!-- bad -->
    <style>
    .buttons button {
        float: right;
    }
    </style>

    <div class="buttons">
        <button type="button">取消</button>
        <button type="submit">提交</button>
    </div>

## 7 多媒体

#### [建议] 当在现代浏览器中使用 `audio` 以及 `video` 标签来播放音频、视频时，应当注意格式。

解释：

音频应尽可能覆盖到如下格式：

* MP3
* WAV
* Ogg

视频应尽可能覆盖到如下格式：

* MP4
* WebM
* Ogg

#### [建议] 在支持 `HTML5` 的浏览器中优先使用 `audio` 和 `video` 标签来定义音视频元素。

#### [建议] 使用退化到插件的方式来对多浏览器进行支持。

示例：

    <audio controls>
        <source src="audio.mp3" type="audio/mpeg">
        <source src="audio.ogg" type="audio/ogg">
        <object width="100" height="50" data="audio.mp3">
            <embed width="100" height="50" src="audio.swf">
        </object>
    </audio>

    <video width="100" height="50" controls>
        <source src="video.mp4" type="video/mp4">
        <source src="video.ogg" type="video/ogg">
        <object width="100" height="50" data="video.mp4">
            <embed width="100" height="50" src="video.swf">
        </object>
    </video>

#### [建议] 只在必要的时候开启音视频的自动播放。

#### [建议] 在 `object` 标签内部提供指示浏览器不支持该标签的说明。

示例：

    <object width="100" height="50" data="something.swf">DO NOT SUPPORT THIS TAG</object>

## 8 HTML文档模板

	<!DOCTYPE html>
	<html>
    	<head>
        	<meta charset="utf-8">
        	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
        	<title>Sample page</title>
        	<link rel="stylesheet" href="css_example_url">
    	</head>
    	<body>
        	<div id="page">
            	<div id="header">
                	页头
            	</div>
            	<div id="content">
                	主体
            	</div>
            	<div id="footer">
                	页尾
            	</div>
        	</div>
        	<script src="js_example_url"></script>       
    	</body>
	</html>
	
## 参考BAT的html规范链接
百度：[https://github.com/fex-team/styleguide/blob/master/html.md#3-%E9%80%9A%E7%94%A8](https://github.com/fex-team/styleguide/blob/master/html.md#3-%E9%80%9A%E7%94%A8)

阿里：[http://docs.kissyui.com/1.4/docs/html/tutorials/style-guide/html-coding-style.html](http://docs.kissyui.com/1.4/docs/html/tutorials/style-guide/html-coding-style.html)


腾讯：[http://alloyteam.github.io/CodeGuide/#html-boolean-attributes](http://alloyteam.github.io/CodeGuide/#html-boolean-attributes)
