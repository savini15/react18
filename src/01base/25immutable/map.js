import { Map,List } from "immutable";
let obj1 = Map({
    a:1,
    info:Map({
        name:99,
        age:78
    })
})
let arr1 = List([1,2,3])
let arr2 = arr1.push(4)
let obj2 = obj1.set('a',8) //会重新返回一个新对象，而不影响obj1
export default function App(){
    return (<div>

            <span>{obj2.get('a')}</span>
            <span>{arr2}</span>

    </div>)
}