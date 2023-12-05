import { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { QrArea } from './components/QrArea'
import { Container } from 'react-bootstrap'
import Button  from '@mui/material/Button';
import MessageArea from './Components/MessageArea/MessageArea'
import NumberArea from './Components/NumberArea/NumberArea'
import Chat from './Components/Chat/Chat'

function App() {
  
  const [message, setMessage] = useState('Ingrese el mensaje que desea enviar')
  const [number, setNumber] = useState('')
  const [linkWsp, setLinkWsp] = useState('')
  const [itsReady,setItsReady] = useState(false)
  
  //para setear qeu este todo listo para q se envie el wsp
  //const [messageReady, setMessageReady] = useState(false)
  //hacer un boton que genere el link y este se setee en el linkWsp
  console.log('mensaje', message)
  const generateLink = () => {
    var enlaceWhatsApp = "https://api.whatsapp.com/send?phone="
    var mensajeCodificado = encodeURIComponent(message)
    var link = enlaceWhatsApp + number + "&text=" + mensajeCodificado
    setLinkWsp(link)
    setItsReady(true)
  }

  /**
   * 
   * verde claro: Hex color:	#25D366
   * verde oscuro: Hex color:	#075E54
   * gris oscuro: Hex color:	#EBE5DE
   */

  return (
    <Container style={{ padding: 'none' }}>
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',padding: 'none' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Generador de enlaces de WhatsApp
        </Typography>
      </Container>
      <Grid container style={{ width: '100%', paddingTop:'8px', borderRadius:'4px', border:'1px' }}>
        <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ width: '100%', marginLeft: '1rem' }}>
            <div>
              <NumberArea number={number} setNumber={setNumber} />
            </div>
            <div >
              <MessageArea message={message} setMessage={setMessage} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button style={{background:'#075E54'}} variant="contained" onClick={generateLink}>Generar link</Button>
            </div>
            {itsReady ? (
              <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'16px'}}>
              <Grid item xs={6} alignItems='center' justifyContent='center'>
                <Button style={{background:'#25D366'}} variant="contained" href={linkWsp} target="_blank">Ir al chat</Button>
              </Grid>
              <Grid item xs={6}>
                <QrArea link={linkWsp} />
              </Grid>
              </div>   
            ) : null  
            }
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ width: '100%', marginLeft: '0.625rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Chat number={number} message={message} />
          </Box>
        </Grid>
      </Grid>
    </Container> 
  )
}

export default App
