import { useState } from 'react'
import './App.css'
import { Modal } from './components/Modal'
import { Button, Grid } from '@mui/material'

function App() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <Grid container spacing={2} sx={{width: '100vw', height: '100vh', backgroundColor: 'rgb(47, 32, 255)'}}>

      <h2>Clique no meu botão</h2>
      <Button color='secondary' variant='contained' onClick={()=> setOpen(!open)}>Clique em mim 😈</Button>

      <Modal 
        isOpen={open} 
        setOpen={setOpen}
        title={'Bem Vindo!'}
        description={"Crie sua conta para pode fazer um teste grátis de 3 dias"}
      />
    </Grid>
  )
}

export default App