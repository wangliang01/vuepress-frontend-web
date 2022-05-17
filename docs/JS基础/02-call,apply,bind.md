# 02-call, apply, bind
`call`, `apply`, `bind`这三个方法都是用来改变函数内部的`this`指向。

那这三个方法有什么区别呢？分别适合应用在哪些场景呢？

先来看一个例子

```js
var person = {
  name: 'wangliang',
  age: 18
}

function say(job) {
  console.log(this.name + ':' + this.age + ' ' + job)
}

say.call(person, 'FE')
say.apply(person, ['FE'])
var sayPerson = say.bind(person, 'FE')
sayPerson()

// 对于对象person而言，并没有say这样的一个方法，通过call/apply/bind就可能将外部的say方法用于这个对象中，其实就是将say内部的this指向person这个对象。
```

## call
___
`call`是属于所有`function`的方法，也就是`Function.prototype.call`。

它的语法是这样的：
```js
fun.call(thisArg[, arg1[, arg2, ...]])
```

### 实现一个自定义的call

那么我们该怎么模拟实现这两个效果呢？
* 1、将函数设为对象的属性
* 2、执行该函数
* 3、删除该函数

```js
Function.prototype.myCall = function(context) {
  var context = context || window 
//  1、将函数设为对象的属性
  context.fn = this 

  // 获取参数 
  var args = [...arguments].slice(1)

  // 2、执行该函数
  var result = context.fn(...args)

  // 3、删除该函数
  delete context.fn

  return result

}
```

## apply
___
`apply`的实现跟`call`类似，唯一不同点是对参数的处理，有些许不同。
```js
Function.prototype.myApply = function(context) {
  var context = context || window 

  context.fn = this

  var args = arguments[1] || []

  // 执行该函数
  var result = context.fn(...args)

  // 删除该函数
  delete context.fn

  return result

}
```

## bind
___

`bind`的实现跟`call`也类似，只是在返回值的处理上不一样，`bind`返回的是一个函数

```js
Function.prototype.myBind = function(context) {
  var context = context || window 

  context.fn = this 

  var args = [...arguments].slice(1)

  return function() {
    // 执行该函数
    var result = context.fn(...args)
    // 删除该函数
    delete context.fn

    return result
  }
}
```