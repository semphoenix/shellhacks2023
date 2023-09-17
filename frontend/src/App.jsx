import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home/Home"
import { NextUIProvider } from '@nextui-org/react'

export default function AppContainer() {
  return (<NextUIProvider><App /></NextUIProvider>)
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home/>
    </>
  )
}
