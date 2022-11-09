import { useState } from 'react'

import './styles.css'

import Title from './Title'
import NameLength from './NameLenght'
import ReverseName from './ReverseName'

export default function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
<Title name={name} setName={setName} age={32}/>
      <NameLength name={name}/>
      <ReverseName name={name}/>
    </div>
  )
}
