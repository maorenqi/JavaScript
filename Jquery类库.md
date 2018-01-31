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