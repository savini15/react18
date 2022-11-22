// 问题： 如果在某文件中import .css文件 
//在打包后涉及到的样式会被添加到head style中,会影响全部组件的样式
// 解决: 1.修改css文件命名为xxx.module.css 
   //  2. import style from xx.module.css ;
   // 3.  在标签上的使用  className = {style.class1}

   import style from './23css.module.css'

   export default function App(){
  return (
    <div>
        <span className={style.test_class}>ello</span>
    </div>
  )
   }