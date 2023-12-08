import { Box, Button } from '@mui/material';
import ModalData from '../Modal/ModalData';
import NumberArea from '../NumberArea/NumberArea';
import MessageArea from '../MessageArea/MessageArea';
import PropTypes from 'prop-types';

const MessageForm = ({number,setNumber,message,setMessage,generateLink,open,handleClose,linkWsp}) => {
     return (
        <Box sx={{border: '2px solid #f8f4e4',bgcolor: 'background.paper',boxShadow: 24, width: '%'}}>
            <div style={{ margin: 'auto', width: '60%', paddingTop:'1rem' }}>
            <NumberArea number={number} setNumber={setNumber} />

            </div>
            
            <div style={{ margin: 'auto', width: '60%' }} > 
                <MessageArea message={message} setMessage={setMessage} />
            </div>
            <Box sx={{ width: '100%', marginLeft: '0.625rem', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom:'1rem' }}>
                <Button style={{background:'#075E54'}} variant="contained" onClick={generateLink}>Generar link</Button>
            </Box>
          {open  ? (
              <>
                <ModalData isOpen={open} onClose={handleClose} linkWsp={linkWsp} />
              </>
            ):null}
        </Box>
    )
}
export default MessageForm;
MessageForm.propTypes = {
    number: PropTypes.string.isRequired,
    setNumber: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    setMessage: PropTypes.func.isRequired,
    generateLink: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    linkWsp: PropTypes.string.isRequired,
};