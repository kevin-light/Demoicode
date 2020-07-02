const app = new Vue({
    el:'#app',
    data:{
        books:[{
            id:1,
            name:'《C++》',
            price:99.00,
            count:1
        },
            {
                id:2,
                name:'《python》',
                price:88.00,
                count:1
            },
            {
                id:3,
                name:'《golang》',
                price:77.00,
                count:1
            },
            {
                id:4,
                name:'《vue.js》',
                price:66.00,
                count:1
            },
            {
                id:5,
                name:'《java》',
                price:99.00,
                count:1
            },
        ]

    },
    filters: {
        showPrice(price) {
            return '¥' + price.toFixed(2)    // 保留两位小数
        }
    },
    methods:{
        // getFinalPrice(price) {
        //   return '¥' + price.toFixed(2)      // 保留两位小数
        // }

        increment(index){
            this.books[index].count++
        },
        decrement(index){
            this.books[index].count--
        },
        removeHeadle(index){
            this.books.splice(index, 1)
        }

    },
    computed: {
        totalPrice(){
            // 1.普通的for循环
            // let totalPrice = 0
            // for (let i=0;i<this.books.length;i++){
            //     totalPrice+=this.books[i].price*this.books[i].count
            // }
            // return totalPrice

            // 3.for循环 == for (let i of this.books)
            // let totalPrice = 0
            // for (let item of this.books){
            //     totalPrice += item.price*item.count
            // }
            // return totalPrice

            // 4 声明式编程 ; 函数式编程：filter/map/reduce
            // 编程范式： 面向对象编程（第一公民：对象）、函数式编程（第一公民：函数）
            return this.books.reduce(function (preValue,book) {
                return preValue+book.price*book.count
            },0)

        },

    }
})