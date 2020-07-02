// 使用commonjs的模快画规范
const {add, mul} = require('./mathUtils')
console.log(add(10,77))
console.log(mul(10,77))

// 使用ES6的模块化的规范
import {name,age,height} from "./info";
console.log(name)
console.log(age)
console.log(height)