


import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import Home from './home'
import Game from './game'
import NotFound from './404'
export default function App(){

    return (

        <div>

            <HashRouter>
              <Switch>
                {/* 匹配到就停止匹配 */}
               <Route path='/game' component={Game}/>
               <Route path='/home' component={Home}/>
               <Redirect from='/' to='/home' exact></Redirect>
               <Route component={NotFound}/>
              </Switch>
             
            </HashRouter>
        </div>
    )

}