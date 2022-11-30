
import shallowRender from 'react-test-renderer/shallow'

import ReactTestUtil from 'react-dom/test-utils'
import App from '../index'
describe('react-test-render',function(){
    it('todo',function(){
     const render = new shallowRender()
     render.render(<App/>)
     console.log(render.getRenderOutput())
    })

    it('删除',function(){
        const app = ReactTestUtil.renderIntoDocument(<App/>);
        let toDos = ReactTestUtil.scryRenderedDOMComponentsWithTag('p');
         let delBtn = toDos[0].querySelector('button')
         ReactTestUtil.Simulate.click(delBtn)
         //然后去写一些预期结果检验
    
    })
})