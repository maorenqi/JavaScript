# JavaScript
JavaScript编程

## 数组方法
### join()
> Array.join()方法将数组中所有元素都转化为字符串连接在一起，返回最后生成的字符串。  

    var a = [1,2,3];  
    a.join();  // '1,2,3'
	a.join(" ");	// '1 2 3'
> Array.join()方法是String.split()方法的逆向操作。
### reverse()
> Array.reverse()方法将数组中的元素颠倒顺序，返回逆序的数组。  

	var a = [1,2,3];
	a.reverse().join() // "3,2,1",a是[3,2,1]
	
### sort()
> Array.sort()方法将数组中的元素排序并返回排序后的数组。当不带参数调用sort()时，数组元素以字母顺序排序。

	var a = [33,4,1111,222];
	a.sort();
	a.sort(function(a,b){
		return a-b;		//数值大小相反的顺序
	}) ;
> 这里使用匿名函数表达式非常方便。既然比较函数只使用一次，就没必要给它们命名了

### concat()
> Array.concat()方法创建并返回一个新数组，它的元素包括调用concat()的原始数组的元素和concat()的每个参数。  

	var a=[1,2,3];
	a.concat(4,5);	//[1,2,3,4,5]
	a.concat([4,5]);	//[1,2,3,4,5]
	a.concat(4,[5,[6,7]]);	//[1,2,3,4,5,[6,7]]

### slice()
> Array.slice()方法返回指定数组的一个片段或子数组。参数分别指定了片段的开始和结束的位置。-1指定了最后一个元素，而-3指定了倒数第三个元素。

    var a = [1,2,3,4,5];
    a.slice(0,3);	//[1,2,3]
    a.slice(3);	//[4,5]
    a.slice(1,-1);	//[2,3,4]
    a.slice(-3,-2);	//[3]
### splice()
Array.splice()方法是在数组中插入或删除元素的通用方法。
	
	var a = [1,2,3,4,5,6,7,8];
	a.splice(4);	//[5,6,7,8]; a是[1,2,3,4]
	a.splice(1,2);	//[2,3]; a是[1,4]
	a.splice(1,1);	//[4];a是[1]
	
	var a = [1,2,3,4,5];
	a.splice(2,0,'a','b');	//[];a是[1,2,'a','b',3,4,5]
	a.splice(2,2,[1,2],3);	//['a','b']; a是[1,2[1,2],3,3,4,5]
### push()和pop()
> 允许数组当做栈来使用。  
> push()在数组尾部添加一个或多个元素  
> pop()删除数组的最后一个元素

	var stack = [];
	stack.push(1,2)
	stack.pop();

### unshift()和shift()
> unshift()在数组的头部添加一个或多个元素  
> shift()删除数组的第一个元素并将其返回

	var a = [];
	a.unshift(1);
	a.unshift(22);
	a.shift();
### toString()和toLocaleString()

	[1,2,3].toString()	//'1,2,3'

	//定义一个"2013-07-21 13:12:59 231"的Date对象
	var date = new Date(2013, 6, 21, 13, 12, 59, 231);
	document.writeln( date.toLocaleString() );
	// IE：      2013年7月21日 13:12:59
	// Chrome：  2013年7月21日 下午1:12:59
	// FireFox： 2013/7/21 下午1:12:59
	 
	//定义一个"公元前200-06-28 08:24:35 105"的Date对象
	var date2 = new Date(-199, 5, 28, 8, 24, 35, 105);
	document.writeln( date2.toLocaleString() );
	// IE：      Sun Jun 28 08:24:35 UTC+0800 200 B.C. 
	// Chrome：  200年7月1日 上午8:30:27 (缺少负号，日期存在问题)
	// FireFox：200/6/28 上午8:30:32 (缺少负号)

### forEach()
forEach()方法从头至尾遍历数组，为每个元素调用指定的函数。三个参数：数组元素、元素索引和数组本身

	var data = [1,2,3,4,5];
	var sum = 0;
	data.forEach(function(value){sum += value;});
	sum
	
	data.forEach(function(v,i,a){a[i] = v+i});
	data //[2,3,4,5,6]
	
	function forEach(a,f,t){
		try{a.forEach(f,t);}
		catch(e){
			if(e===foreach.break) return;
			else throw e;
		}
	}
	foreach.break = new Error("StopIteration");

### map()
map()方法将调用的数组的每个元素传递给指定的函数，并返回一个数组，它包含该函数的返回值。

	a = [1,2,3];
	b = a.map(function(x){return x*x;});

> map()有返回值：它不修改调用的数组。
### filter()
filter()方法返回的数组元素是调用的数组的一个子集。