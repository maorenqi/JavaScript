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


## JavaScript常用的几种模式
### 1.原始模式
    //1.原始模式，对象字面量方式
	var person = { 
	    name: 'Jack',
	    age: 18,
	    sayName: function () { alert(this.name); }
	};
	//1.原始模式，Object构造函数方式
	var person = new Object();
	person.name = 'Jack';
	person.age = 18;
	person.sayName = function () {
	    alert(this.name);
	};

> 显然，当我们要创建批量的person1、person2……时，
每次都要敲很多代码，资深copypaster都吃不消！
然后就有了批量生产的工厂模式。
 
 
### 2.工厂模式
//2.工厂模式，定义一个函数创建对象

	function creatPerson (name, age) {
	    var person = new Object(); 
	    person.name = name;
	    person.age = age;
	    person.sayName = function () {
	        alert(this.name);
	    };
	    return person; 
	}
> 工厂模式就是批量化生产，简单调用就可以进入造人模式（啪啪啪……）。
 指定姓名年龄就可以造一堆小宝宝啦，解放双手。
 但是由于是工厂暗箱操作的，所以你不能识别这个对象到底是什么类型、
 是人还是狗傻傻分不清（instanceof 测试为 Object），
 另外每次造人时都要创建一个独立的temp对象，代码臃肿。

### 3.构造函数
//3.构造函数模式，为对象定义一个构造函数

	function Person (name, age) {
	    this.name = name;
	    this.age = age;
	    this.sayName = function () {
	        alert(this.name);
	    };    
	}
	var p1 = new Person('Jack', 18); //创建一个p1对象
	Person('Jack', 18);   
> 属性方法都给window对象，window.name='Jack'，window.sayName()会输出Jack
  
  
### 4.原型模式
 //4.原型模式，直接定义prototype属性

	function Person () {}
	Person.prototype.name = 'Jack';
	Person.prototype.age = 18;
	Person.prototype.sayName = function () { alert(this.name); };
	//4.原型模式，字面量定义方式
	function Person () {}
	Person.prototype = {
	    name: 'Jack',
	    age: 18,
	    sayName: function () { alert(this.name); }
	};
	var p1 = new Person(); //name='Jack'
	var p2 = new Person(); //name='Jack'
	 
> 这里需要注意的是原型属性和方法的共享，即所有实例中   
> 都只是引用原型中的属性方法，任何一个地方产生的改动会引起其他实例的变化。
 
### 5.混合模式（构造+原型）

	function Person (name, age) {
	    this.name = name;
	    this.age = age;
	}
	Person.prototype = {
	    hobby: ['running','football'];
	    sayName: function () { alert(this.name); },
	    sayAge: function () { alert(this.age); }
	};
	var p1 = new Person('Jack', 20); 
	//p1:'Jack',20; __proto__: ['running','football'],sayName,sayAge
	var p2 = new Person('Mark', 18); 
	//p1:'Mark',18;__proto__: ['running','football'],sayName,sayAge
	 

## 函数闭包
	function a(){
		var i=0;
		function b(){
		alert(++i);
		}
		return b;
	}
	var c=a();
	c();

>函数b就是一个闭包（闭包就是能够读取其他函数内部变量的函数。） 要怎样才能使用外部函数能读取内部函数变量？在函数内部定义一个函数并返回就OK了，定义的函数就是闭包。在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
 
> 特点  
> 这段代码有两个特点：  
> 1、函数b嵌套在函数a内部；  
> 2、函数a返回函数b。  
> 这样在执行完var c=a( )后，变量c实际上是指向了函数b，再执行c( )后就会弹出一个窗口显示i的值（第一次为1）。这段代码其实就创建了一个闭包，这是因为函数a外的变量c引用了函数a内的函数b。也就是说，当函数a的内部函数b被函数a外的一个变量引用的时候，就创建了一个闭包。  

> 闭包作用：它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。  























