## Jquery 类库
jQuery类库定义了一个全局函数：jQuery()。 快捷别名：$。

**链式调用：**
$("p.details").css("background-color","yellow").show("fast");

**jQuery()方法，也是$().4种不同的调用方式：**

1. 传递css选择器（字符串）给$()方法。返回当前文档中匹配该选择器的元素集。
1. 传递一个Element、Document或Window对象给$()方法。$(document)或$(this)
1. 传递HTML文本字符串给$()方法。$("<img>"),{})
1. 传入一个函数给$()方法。jQuery(function(){});

老式写法 $(f)  完整写法：$(document).ready(f);

**jquery术语**

- jQuery函数	$.each(a,f)
- jQuery对象	jQuery函数返回的对象
- 选中元素
- jQuery方法	$("a").each(f)

**获取和设置HTML属性**
-
- attr()
- removeAttr()

**获取和设置CSS属性**
- 
- css()

**获取和设置CSS类**
- 
- addClass()
- removeClass()
- toggleClass()
- hasClass()

**获取和设置HTML表单值**
- 
- val()

**设置和获取元素内容**
- 
- text()
- html()
- X[0].innerHTML

**获取和设置元素的位置高度**
- 
- offset()
- position()
- offsetParent()
- width()
- height()
- outerWidth()
- outerHeight()
- scrollTop()
- scrollLeft()

**获取和设置元素数据**
- 
- data()
- removeDate()

**修改文档-插入和替换文档**
- 
- $("h1").append("<br/\>")
- prepend()
- before()
- after()
- replaceWith()
- each()
- map()

- appendTo()
- prependTo()
- insertAfter()
- insertBefore()
- replaceAll()


**复制元素**
- 
- clone()

**包装元素**
- 
- wrap()
- wrapInner()
- wrapAll()

**删除元素**
- 
- empty()
- remove()
- filter()
- detach()
- unwrap

**事件处理程序的简单注册**
- 
- click()
- $("p").click(function(){$(this).css("background-color","gray");});
- addEventListener()
- attachEvent()

**事件处理程序的高级注册**
- 
- $('p').click(f) 等价于：
- $('p').bind('click',f);

**实时事件**
- 
- delegate()
- undelegate()
- live()
- die()

动画效果
