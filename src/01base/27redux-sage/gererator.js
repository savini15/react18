function *test(){
    console.log(111)
    // yield;//
   let params =  yield '111执行完了'
    console.log(222,params)//222 传个参数
    yield;

    console.log(333)
}

let fn =test()
let res1 = fn.next()//  执行111

console.log('res1',res1)// { value: '111执行完了', done: false }
fn.next('传个参数')//  执行222
let res3 = fn.next()//  执行333

console.log('res33---',res3)//{ value: undefined, done: true }