import React from 'react'
import datas from './data.json'
import Slider from './Slider'
import './App.css'
const App = () => {
  console.log(datas)
  return (
    <div>
      <Slider datas = {datas} />
    </div>
  )
}

export default App