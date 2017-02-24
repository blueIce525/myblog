# css hack大全



### 1、什么是CSS hack
由于不同厂商的流览器或某浏览器的不同版本（如IE6-IE11,Firefox/Safari/Opera/Chrome等），对CSS的支持、解析不一样，导致在不同浏览器的环境中呈现出不一致的页面展现效果。这时，我们为了获得统一的页面效果，就需要针对不同的浏览器或不同版本写特定的CSS样式，我们把这个针对不同的浏览器/不同版本写相应的CSS code的过程，叫做CSS hack!

### 2、CSS hack的原理

由于不同的浏览器和浏览器各版本对CSS的支持及解析结果不一样，以及CSS优先级对浏览器展现效果的影响，我们可以据此针对不同的浏览器情景来应用不同的CSS。

### 3、CSS hack分类

#### 3.1 条件注释法

这种方式是IE浏览器专有的Hack方式，微软官方推荐使用的hack方式。举例如下
只在IE下生效

	<!--[if IE]>
	这段文字只在IE浏览器显示
	<![endif]-->
	
	只在IE6下生效
	<!--[if IE 6]>
	这段文字只在IE6浏览器显示
	<![endif]-->
	
	只在IE6以上版本生效
	<!--[if gte IE 6]>
	这段文字只在IE6以上(包括)版本IE浏览器显示
	<![endif]-->
	
	只在IE8上不生效
	<!--[if ! IE 8]>
	这段文字在非IE8浏览器显示
	<![endif]-->
	
	非IE浏览器生效
	<!--[if !IE]>
	这段文字只在非IE浏览器显示
	<![endif]-->


#### 3.2 类内属性前缀法

* “-″减号是IE6专有的hack
* “\9″ IE6/IE7/IE8/IE9/IE10都生效
* “\0″ IE8/IE9/IE10都生效，是IE8/9/10的hack
* “\9\0″ 只对IE9/IE10生效，是IE9/10的hack


#### 3.3 选择器前缀法

选择器前缀法是针对一些页面表现不一致或者需要特殊对待的浏览器，在CSS选择器前加上一些只有某些特定浏览器才能识别的前缀进行hack。

目前最常见的是

	*html *前缀只对IE6生效
	*+html *+前缀只对IE7生效
	@media screen\9{...}只对IE6/7生效
	@media \0screen {body { background: red; }}只对IE8有效
	@media \0screen\,screen\9{body { background: blue; }}只对IE6/7/8有效
	@media screen\0 {body { background: green; }} 只对IE8/9/10有效
	@media screen and (min-width:0\0) {body { background: gray; }} 只对IE9/10有效
	@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) 	{body { background: orange; }} 只对IE10有效
等等

### 4、css hack速查表

针对以上3.2类内属性前缀法和3.3选择器前缀法,可查下表


![image](https://raw.githubusercontent.com/blueIce525/myblog/master/images/css-hack.png)

FF:firefox; OP:opera; SA:safari; CH:chrome; Y代表支持，N代表不支持。

要是看不清，可以移步到[http://www.wufangbo.com/demo/tool/11/index.html](http://www.wufangbo.com/demo/tool/11/index.html)查看


### 5、推荐写法

demo:

        .eq {
             color:#f00;/*标准浏览器*/
             color:#f30\0;/*IE8,IE9,opera*/
             *color:#c00;/*IE7及IE6*/
             _color:#600;/*IE6专属*/
            }
        :root .eq {color:#a00\9;}/*IE9专属*/
        @media all and (-webkit-min-device-pixel-ratio:10000), not all and (-webkit-min-device-pixel-ratio:0){.eq {color:#450;}}/*opera专属*/
        @media screen and (-webkit-min-device-pixel-ratio:0){.eq {color:#879;}}/*webkit专属*/
        @-moz-document url-prefix(){ .eq {color:#4dd;}}/*firefox专属*/
  

### 6、注意事项

由于各浏览器更新神速，所以有些HACK可能会有变化，所以请大家注意。

* [;此种方式会影响后续样式，不可取。
* \9\0并非对所有属性都能区分IE8和IE9.比如：background-color可以，但background不可以，还有border也不可以。所以在实际用时要测试下。
* 当同时出现\0;*;_;时，推荐将\0写在*和_前面。例如:color:red\0;*color:blue;_color:green;可行，否则IE7和IE6里的效果会失效。但border例外，放在前后都可以。保险起见，还是放在前面。

一般情况下，我们尽量避免使用CSS hack，但是有些情况为了顾及用户体验实现向下兼容，不得已才使用hack。

虽然这个文档叫大全，实际上不全，此文档查不到的问题，可以Google或是百度下，网上解决方案很多。

参考链接：

[http://www.wufangbo.com/demo/tool/11/index.html](http://www.wufangbo.com/demo/tool/11/index.html)

[http://www.kwstu.com/Admin/ViewArticle/201409011604277330](http://www.kwstu.com/Admin/ViewArticle/201409011604277330)

[http://blog.csdn.net/freshlover/article/details/12132801](http://blog.csdn.net/freshlover/article/details/12132801)

