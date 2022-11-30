import Store from './store'
export default function Child (props){
   
  const  {count} =props
    function add(){
        Store.dispatch({type:'addCount'})

       // setCount(Store.getState().count)
    }

    //minCount

    function min(){
        Store.dispatch({type:'minCount'})

        //setCount(Store.getState().count)
    }
    return (

        <div>


            <h1>{count}</h1>

            <input onChange={add}/>

            <button onClick={min}>min </button>
        </div>
    )
}