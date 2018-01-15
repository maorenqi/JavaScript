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
filter()方法返回的数组元素是调用的数组的一个子集。如果返回值为true或能转化为true的值，那么传递给判断函数的元素就是这个子集的成员，它将被添加到一个作为返回值的数组中。

	a = [5,4,3,2,1];
	samllvalues = a.filter(function(x){ return x<3});	//[2,1]
	everyother = a.filter(function(x,i){return i%2 == 0});	//[5,3,1]

### every()和some()
every()和some()方法是数组的逻辑判定：它们对数组元素应用指定的函数进行判定，返回true或false.

every():当且仅当针对数组中的所有元素调用判定函数都返回true,它才返回true

	a=[1,2,3,4,5];
	a.every(function(x){ return x<10;});	//true

some()：当数组中至少有一个元素调用判定函数返回true,它就返回true;

	a=[1,2,3,4,5];
	a.some(function(x){return x%2 ==0});	//true:a含有偶数值

### reduce()和reduceRight()
使用指定的函数将数组元素进行组合，生成单个值。

reduce()需要两个参数：第一个是执行化简操作的函数。第二个（可选）的参数是一个传递给函数的初始值。

	var a=[1,2,3,4,5];
	var sum = a.reduce(function(x,y){ return x+y},0);//第一次调用化简函数时的参数是0和1。将两者相加并返回1。再次是1和2，返回3.然后是3+3=6、6+4=10，最后计算10+5=15.reduce()返回15.
reduceRight(),按照数组索引从高到低处理数组。

### indexOf()和lastIndexOf()
搜索整个数组中具有给定值的元素，返回找到的第一个元素的索引或者如果没有找到就返回-1。indexOf()从头至尾搜索，lastIndexOf()反方向搜索。

	a=[1,2,3,4,5];
	a.indexOf(1)	//1:a[1]是1
	a.lastIndexOf(1)	//3：a[3]是1
	a.indexOf(3)	//-1:没有值为3的元素





##JavaScript定义类的三种方法
### 1、构造函数法
	function Cat(){
		this.name = 'da mao';
	}
	Cat.prototype.makeSound = function(){
		alert('miao miao');
	}
	var cat1 = new Cat();
	alert(cat1.name);
	cat1.makeSound();
	//缺点：比较复杂，用到了this和prototype
			
### 2、Object.creat()法
	var Cat = {
		name:'da mao',
		makeSound:function(){
			alert ('miao miao');
		}
	}
	
	var cat1 = Object.create(Cat);
	alert(cat1.name);
	cat1.makeSound();
	
	//老浏览器如果不支持，可以用以下代码自行部署
	if(!Object.create){
		Object.create = function(o){
			function F(){
			}
			F.prototype = o;
			return new F()
		};
	}
	//这种方法比“构造函数法”简单，但是不能实现私有属性和私有方法，实例对象之间也不能共享数据。

### 3、极简主义法
	var Cat = {
		createNew:function(){
			var cat = {}
			cat.name = 'da mao';
			cat.makeSound = function(){
				alert ('m  m ');
			};
			
			return cat;
		}
	};
	var cat1 = Cat.createNew();
	cat1.makeSound();	



























