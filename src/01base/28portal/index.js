import React from 'react'
import { createPortal } from 'react-dom'
export default function index() {
  return (
    // 可以在和body（可自定义层级） 同级位置生成html ,但是依旧可以应用在其他组件
   // 是为了不受其他的组件影响 ，尤其是设置了position  zindex的问题
    // 例如 ： 自定义一个弹框
    createPortal(<div>hhhhh</div>,document.body)

    
  )
}
