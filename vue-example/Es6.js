// function Timer() {
//     this.s1 = 0;
//     this.s2 = 0;
//     // 箭头函数
//     setInterval(() => this.s1++, 1000);
//     // 普通函数
//     setInterval(function () {
//       this.s2++;
//     }, 1000);
//   }

//   var timer = new Timer();

//   setTimeout(() => console.log('s1: ', timer.s1), 3100);
//   setTimeout(() => console.log('s2: ', timer.s2), 3100);
//   console.log(NaN++)
// const obj = {
//   f(){
//     this.foo = 'bar'
//   }
// }

// const per = new obj.f();
// console.log(per)

// const newObj = Object.create({})
// newObj.foo = 'foo'
// console.log(newObj)
// newObj.hasOwnProperty('foo')
// console.log(Object.hasOwn(newObj,'foo'))

// const a = {
//   b:'c',
// }
// console.log((a?.b).c)
// console.log(Symbol().description)

// const obj1 = {1:2}
// const set = new Set()
// set.add({1:2})
// set.add({1:2})
// console.log(set.size)

// const rawObj = {
//   a: 'a', b: function () {
//     console.log(this === rawObj)
//   }
// }
//const proxy = new Proxy(rawObj, {
  // get:function(target,name,receiver){
  //   // console.log(target)
  //   // console.log(receiver)
  //   return target[name]
  // },
  // defineProperty(target,key,descriptor){
  //   // console.log(descriptor)
  //   target[key] = descriptor.value
  //   return false
  // }
//})
// proxy.foo = 'bar'
// proxy.a = 'b'
// console.log(proxy)
// console.log(proxy.a)
// console.log(proxy.foo)
// rawObj.b()
// proxy.b()


// var promise = new Promise((resolve, reject) => {
//   return resolve('2')
//   // return reject('1')
//   // console.log('2')
// }).then(
//   value => {
//   console.log(value)
// }, 
// // error => console.log('错误：' + error)
// ).catch(
//   error => console.log('catch' + error)
// )
// console.log(promise)
// console.log(3)

// const something = function(){
//   return new Promise(function(resolve,reject){
//     resolve(x+ 2)
//   })
// }
// something().then(function(){
//   console.log('everything is ok')
// })
// setTimeout(()=> {console.log(123)},2000)

// console.log(Promise.resolve(2).then(()=>{},()=>{}))


// console.log(1)
// new Promise((resolve)=> {
//   setTimeout(()=> {
//     console.log(3)
//     resolve(4)
//     console.log(5)
//   },1000)
//   console.log(6)
// }).then(value=> console.log(value))
// setTimeout(()=> console.log(0),1000)
// Promise.resolve().then(()=> console.log(7))

// console.log(8)

// var a;
// function* generator(){
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
//   return 6;
// }
// var hello = generator()
// for(let i=0;i<6;i++) {
//   console.log(hello.next())
// }
// var g= function*(){
//   try {
//     yield;
//   } catch(e){
//     console.log('内部捕获',e)
//   }
// }

// var i = g()
// i.next()

// try{
//   i.throw('a');
//   i.throw('b')
// } catch(e) {
//   console.log('外部捕获',e)
// }
// function* g() {
//   yield 1;
//   console.log('throwing an exception');
//   throw new Error('generator broke!');
//   yield 2;
//   yield 3;
// }

// function log(generator) {
//   var v;
//   console.log('starting generator');
//   try {
//     v = generator.next();
//     console.log('第一次运行next方法', v);
//   } catch (err) {
//     console.log('捕捉错误', v);
//   }
//   try {
//     v = generator.next();
//     console.log('第二次运行next方法', v);
//   } catch (err) {
//     console.log('捕捉错误', v);
//   }
//   // try {
//   //   v = generator.next();
//   //   console.log('第三次运行next方法', v);
//   // } catch (err) {
//   //   console.log('捕捉错误', v);
//   // }
//   console.log('caller done');
// }

// log(g());


// function* numbers () {
//   yield 1;
//   try {
//     yield 2;
//     yield 3;
//   } finally {
//     console.log('aaa');
//     yield 4;
//     yield 5;
//   }
//   yield 6;
// }
// var g = numbers();
// g.next() // { value: 1, done: false }
// g.next() // { value: 2, done: false }
// console.log(g.return(7)) // { value: 4, done: false }
// g.next() // { value: 5, done: false }
// g.next() // { value: 7, done: true }

// function* genFuncWithReturn() {
//   yield 'a';
//   yield 'b';
//   return 'The result';
// }
// function* logReturned(genObj) {
//   let result = yield* genObj;
//   console.log(result);
// }
// var a = [...logReturned(genFuncWithReturn())]
// console.log(a)
// The result
// 值为 [ 'a', 'b' ]
// function* iterTree(tree) {
//   if (Array.isArray(tree)) {
//     for(let i=0; i < tree.length; i++) {
//       yield* iterTree(tree[i]);
//     }
//   } else {
//     yield tree;
//   }
// }

// const tree = [ 'a', ['b', 'c'], ['d', 'e'] ];
// var hello = iterTree(tree)
// console.log(hello.next().value)
// hello.next()
// var clock = function* () {
//   while (true) {
//     console.log('Tick!');
//     yield;
//     console.log('Tock!');
//     yield;
//   }
// };
// var a = clock()
// a.next()
// a.next()
// a.next()
// a.next()
// a.next()
// a.next()
// class Point {
//   count = 0;
//   constructor(){
//     console.log('Point')
//     this.a = 'a'
//   }
//   increament(){
//     this.count++
//   }
// }

// // var point = new Point()
// // console.log(point.hasOwnProperty('count'))
// // console.log(point.hasOwnProperty('a'))
// // console.log(point.hasOwnProperty('increament'))
// class ColorPoint extends Point{
// }

// class AcolorPoint extends ColorPoint {

// }
// console.log(AcolorPoint)
// const a = new AcolorPoint()
// console.log(a)
// let person = {
//   a: 2
// }

// const a = Object.getOwnPropertyDescriptor(person, 'a')
// console.log(a)
// function PersonO(){
//   // this.name = 'aaa'
// }
// console.log(PersonO.prototype.constructor.prototype)
// console.log(PersonO.prototype)
// console.log(PersonO.prototype.__proto__)
// const person = new PersonO()
// console.log(person.__proto__.__proto__)
// const newperson = Object.create(person)
// console.log(newperson.__proto__)

// function SuperType (){
//   this.property = true
// }
// function SubType(){
//   this.subProperty = false
// }
// SubType.prototype = new SuperType()
// const instance = new SubType()
// console.log(instance)
// console.log(SubType)
// console.log(SuperType.prototype.isPrototypeOf(SubType.prototype))
// console.log(SubType.prototype.isPrototypeOf(in
// const array = [1,2,3,4]
// console.log(array.splice(0))

// console.log(array)


// let blocked = false

// try{
//   let wroxwin = window.open('https://wwww.baidu.com')
//   console.log(wroxwin)
//   if(wroxwin == null) blocked = true;
// } catch{
//   console.log('抛出错误')
//   blocked = true
// }
// if(blocked) {
//   alert('浏览器窗口被屏蔽')

// }

// setTimeout(()=> location.assign('https://www.baidu.com'),3000)
// history.pushState({
//   state: 'vue3'
// })


// document.compatMode ='CSS1Compat' || 'BackCompat'

const promise = window.Notification.requestPermission().then((value)=> {
  console.log(value)
})
console.log(promise)

const notification = new Notification('测试',{
  body: '测试主题',
  vibrate: true
})