// 单例模式: 单例模式的定义是产生一个类的唯一实例
var singleton = function(fn) {
	var result;
	return function() {
		return result || (result = fn.apply(this.arguments));
	}
}

// 生成一个遮罩层
var createMask = singleton(function() {
	return document.body.appendChild(document.createElement('div'));
});



// 简单工厂模式: 主要用在所实例化的类型在编译期并不能确定,而是在执行期决定
构造函数就是一个简单工厂模式,



// 观察者模式(发布者-订阅者模式): 
//dom事件,就是js和dom之间实现的一种观察者模式
div.onclick = function click() {
	alert('click');
}
// 只要订阅了div的click事件,点击div的时候,function click就会触发
// 观察者模式可以实现2个模块的解耦

Events = function() {
 
           var listen, log, obj, one, remove, trigger, __this;
 
           obj = {};
 
           __this = this;
 
           listen = function( key, eventfn ) {  //把简历扔盒子, key就是联系方式.
 
             var stack, _ref;  //stack是盒子
 
             stack = ( _ref = obj[key] ) != null ? _ref : obj[ key ] = [];
 
             return stack.push( eventfn );
 
           };
 
           one = function( key, eventfn ) {
 
             remove( key );
 
             return listen( key, eventfn );
 
           };
 
           remove = function( key ) {
 
             var _ref;
 
             return ( _ref = obj[key] ) != null ? _ref.length = 0 : void 0;
 
           };
 
           trigger = function() {  //面试官打电话通知面试者
 
             var fn, stack, _i, _len, _ref, key;
 
             key = Array.prototype.shift.call( arguments );
 
             stack = ( _ref = obj[ key ] ) != null ? _ref : obj[ key ] = [];
 
             for ( _i = 0, _len = stack.length; _i < _len; _i++ ) {
 
               fn = stack[ _i ];
 
               if ( fn.apply( __this,  arguments ) === false) {
 
                 return false;
 
               }
 
             }
 
             return {
 
                listen: listen,
 
                one: one,
 
                remove: remove,
 
                trigger: trigger
 
             }
 
           }
       };
// 通过发布订阅者模式实现一个功能
var movieTv = Event();
// 订阅者
movieTv.listen('play', function(data) {
	alert('来看电影' + data.name);
})
// 发布者
movieTv.trigger('play', {'name': '烟花'})



// 适配器模式: 作用就像一个转接口
// 例子比如你现在正在用一个自定义的js库. 里面有个根据id获取节点的方法$id()
// 有天你觉得jquery里的$实现得更酷, 但你又不想让你的工程师去学习新的库和语法. 那一个适配器就能让你完成这件事情.
$id = function(id) {
	return jQuery('#'+id)[0];
}



// 代理模式: 把一个对象的访问,交给另一个对象来操作


// 桥接模式: 将实现部分和抽象部分分离开来
//forEach的实现就是桥接模式
forEach = function(arr, fn) {
	for (var i = 0; i < arr.length; i++) {
		var val = arr[i];
		if (fn.call(cal,i) === false) {
			return false;
		}
	}
}
forEach函数本身不关心fn里面的具体实现,fn里面的逻辑也不会被forEach函数的改写影响


外观模式: 提供一个高层接口,使得客户端和子系统更方便调用

var getName = function(){
  return ''svenzeng"
}
var getSex = function(){
   return 'man'
}
如果你需要分别调用getName和getSex函数. 那可以用一个更高层的接口getUserInfo来调用.
var getUserInfo = function(){
  var info = getName() + getSex();
  return info;
}
我们都用过的外观模式例子
var stopEvent = function( e ){   //同时阻止事件默认行为和冒泡
  e.stopPropagation();
  e.preventDefault();
}


策略模式: 定义一系列的算法,把它们一个个封装起来,并且使它们可以相互替换
nameInput.addValidata({
	notANull: true,
	dirtyWords: true,
	maxLength: 30	
})
而notNull，maxLength等方法只需要统一的返回true或者false，来表示是否通过了验证。
validataList = {
  notNull: function( value ){
     return value !== '';
  },
  maxLength: function( value, maxLen ){
     return value.length() > maxLen;
  }
}


中介者模式: 中介者对象可以让各个对象之间不需要显示的相互引用，从而使其耦合松散，而且可以独立的改变它们之间的交互。


迭代器模式: 迭代器模式提供一种方法顺序访问一个聚合对象中各个元素，而又不需要暴露该方法中的内部表示。

var handler = {
	get: function(target, name) {
		if (name === 'prototype') {
			return Object.proptotype;
		}
		return 'Hello, ' + name;
	},
	apply: function (target, this.Binding, args) {
		return args[0];
	},
	construct: function(target, args) {
		return {value: args[1]};
	}
}

var fproxy = new Proxy(function(x, y) {
	return x + y;
}, handler);




