import React from 'react'
import { skChase_dot, skChase } from './index.module.css'

function Loder() {
  return (
    <div>
      <div className={skChase}>
        <div className={skChase_dot}></div>
        <div className={skChase_dot}></div>
        <div className={skChase_dot}></div>
        <div className={skChase_dot}></div>
        <div className={skChase_dot}></div>
        <div className={skChase_dot}></div>
      </div>
    </div>
  )
}

export default Loder