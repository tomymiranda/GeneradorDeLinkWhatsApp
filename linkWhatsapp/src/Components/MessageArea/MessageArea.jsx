import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import PropTypes from 'prop-types';

const MessageArea = ({ message, setMessage }) => {
    return(
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '8px' }} >
            <div style={{alignItems:'flex-start'}}> 
                <Typography>
                    Mensaje de WhatsApp
                </Typography>
            </div>
            <div style={{alignItems: 'center'}}>
                <TextField 
                    variant='outlined'
                    placeholder='Ingrese mensaje que desee enviar'
                    minRows={12}
                    maxRows={16}
                    style={{
                    width: '80%',
                    minHeight: '40px',
                    overflowY: 'auto',
                    }}
                    multiline
                    onChange={(e) => {
                    setMessage(e.target.value)
                    }}>
                    {message}
                </TextField>
            </div>
        </div>
        
    )

};

MessageArea.propTypes = {
    message: PropTypes.string.isRequired,
    setMessage: PropTypes.func.isRequired
};

export default MessageArea;