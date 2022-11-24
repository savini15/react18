import { Map,List } from "immutable";
let obj1 = Map({
    a:1,
    info:Map({
        name:'mnini',
        age:78
    })
})
let arr1 = List([1,2,3])
let arr2 = arr1.push(4)
let obj2 = obj1.set('a',8) //会重新返回一个新对象，而不影响obj1
//将Map 转为普通js
let obj3 = obj2.toJS()
console.log('obj3====',obj3)
export default function App(){
    return (<div>
            <span>{obj2.get('a')}</span>
            <hr/>
            <span>{obj2.get('info').get('name')}</span>
            <hr/>
            <span>{arr2}</span>
    </div>)
}