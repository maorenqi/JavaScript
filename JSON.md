## JSON
### JSON语法：  
  ● 数据使用名/值对表示。  
  ● 使用大括号保存对象，每个名称后面跟着一个 ':'（冒号），名/值对使用 ,（逗号）分割。  
  ● 使用方括号保存数组，数组值使用 ,（逗号）分割。  

###JSON实例：
	{
		"employees": [
			{ "firstName":"John" , "lastName":"Doe" }, 
			{ "firstName":"Anna" , "lastName":"Smith" }, 
			{ "firstName":"Peter" , "lastName":"Jones" }
		]
	}

### JSON 值：
>   ● 数字（整数或浮点数）    
  ● 字符串（在双引号中）    
  ● 逻辑值（true 或 false）  
  ● 数组（在方括号中）  
  ● 对象（在花括号中）  
  ● null  

### 在PHP 中使用JSON
PHP 的 json_encode() 函数用于在 PHP 中编码 JSON。编码成功时这个函数返回给定值的 JSON 表示形式，失败则返回 FALSE。
#### 语法：
string json_encode ( $value [, $options = 0 ] )

#### 示例:
	<?php
	    $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
	    echo json_encode($arr);
	?>
#### 结果:
	{"a":1,"b":2,"c":3,"d":4,"e":5}

PHP 的 json-decode() 函数用于在 PHP 中解码 JSON。这个函数返回从 JSON 解码到适当 PHP 类型的值。
#### 语法：
	mixed json_decode ($json [,$assoc = false [, $depth = 512 [, $options = 0 ]]])
#### 示例:
	<?php
	    $json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';
	
	    var_dump(json_decode($json));
	    var_dump(json_decode($json, true));
	?>
#### 结果:
	object(stdClass)#1 (5) {
	    ["a"] => int(1)
	    ["b"] => int(2)
	    ["c"] => int(3)
	    ["d"] => int(4)
	    ["e"] => int(5)
	}

	array(5) {
	    ["a"] => int(1)
	    ["b"] => int(2)
	    ["c"] => int(3)
	    ["d"] => int(4)
	    ["e"] => int(5)
	}