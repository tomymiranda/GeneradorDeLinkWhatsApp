import { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { Container } from 'react-bootstrap'
import Chat from './Components/Chat/Chat'
import MessageForm from './Components/MessageForm/MessageForm';
function App() {
  
  const [message, setMessage] = useState('')
  const [number, setNumber] = useState('')
  const [linkWsp, setLinkWsp] = useState('')
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false);
  }
  const handleOpen = () => {
    setOpen(true);
  }
  console.log('mensaje', message)
  const generateLink = () => {
    var enlaceWhatsApp = "https://api.whatsapp.com/send?phone="
    var mensajeCodificado = encodeURIComponent(message)
    var link = enlaceWhatsApp + number + "&text=" + mensajeCodificado
    setLinkWsp(link)
    handleOpen()
  }
 return (
    <>
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',padding:0,  width: '100%'}}>
        <Typography variant="h4" component="h2" gutterBottom>
          Generador de enlaces de WhatsApp
        </Typography>
      </Container>
      <Grid container style={{ width: '100%', paddingTop:'8px', borderRadius:'4px', border:'1px' }}>
        <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', justifyContent:'center' }}>
        <MessageForm number={number} setNumber={setNumber} message={message} setMessage={setMessage} generateLink={generateLink} open={open} handleClose={handleClose} linkWsp={linkWsp} />
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ width: '100%', marginLeft: '0.625rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Chat number={number} message={message} />
          </Box>
        </Grid>
      </Grid>
    </> 
  )
}

export default App
