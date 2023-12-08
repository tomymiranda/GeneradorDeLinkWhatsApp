import PropTypes from 'prop-types';
import { Modal, Box, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalData = ({ isOpen, onClose, linkWsp }) => {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Aca se encuentra generado el link de WhatsApp
          </Typography>
          <a href={linkWsp} target="_blank" rel="noreferrer">
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Haciendo clic acá vas a ir al chat
            </Typography>
          </a>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            También puedes escanear el código QR para dirigirte al chat.
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${linkWsp}`} alt="qr" />
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

ModalData.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  linkWsp: PropTypes.string.isRequired,
};

export default ModalData;