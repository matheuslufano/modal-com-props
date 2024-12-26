import { useState } from 'react'
import './App.css'
import { Modal } from './components/Modal'

function App() {
  const [open, setOpen] = useState<boolean>(false)
  console.log('🚀~ file: app.tsx:7 ~ App ~ open:', open)
  return (
    <div className='App'>
      <h2>Clique no meu botão</h2>
      <button onClick={()=> setOpen(!open)}>Clique em mim 😈</button>

      <Modal 
        isOpen={open} 
        setOpen={setOpen}
        title={'Bem Vindo!'}
        description={"Crie sua conta para pode fazer um teste grátis de 3 dias"}
      />
    </div>
  )
}

export default App