import React ,{ useState } from "react";
import { fromJS } from "immutable";
export default function App(){
    let obj1 = fromJS({
        a:1,
        info:{
            name:'mnini',
            age:78
        },
        arr:[1,2,3,4]
    })
    let [obj,setObj] = useState(obj1)

    console.log('obj----',obj,obj1)
    function edit(){
     let newObj = obj1.set('a','0000').setIn(['info','name'],'newnanme')
     
     console.log('newObj----',newObj)

       setObj(newObj)
    }

    function deleteA(){
        let newObj = obj1.updateIn(['arr'],(list)=>{
            console.log('list',list) 
            return list.splice(0,1)
        })
     
      
          setObj(newObj)
    }
    return (<div>
            <span>{obj.get('a')}</span>
            <hr/>
           <button onClick={edit}>  修改信息</button>
           <hr/>
           <span>{obj.get('info').get('name')}</span>
           <hr/>
           <button onClick={deleteA}>  删除数组元素</button>
           <hr/>
             <span>{obj.get('arr')}</span>
    </div>)
}