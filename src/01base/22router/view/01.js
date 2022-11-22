


import {HashRouter,Route,Redirect,Switch,NavLink} from 'react-router-dom'
import Home from './home'
import Game from './game'
import NotFound from './404'
export default function App(){
    function checkToken(){
        return true//false
    }
    return (

        <div>

            <HashRouter>
            <NavLink to='/home'>home </NavLink>
            <NavLink to='/game'>game </NavLink>
              <Switch>
               
                {/* 匹配到就停止匹配 */}
               <Route path='/game' component={Game}/>
               {/* <Route path='/home' component={Home}/> */}
               {/* 路由的拦截 */}
               <Route path='/home' render = {
                ()=> {
                    return checkToken()?<Home/>:<NotFound/>
                }
               }/>

               <Redirect from='/' to='/home' exact></Redirect>
               <Route component={NotFound}/>
              </Switch>
             
            </HashRouter>
        </div>
    )

}