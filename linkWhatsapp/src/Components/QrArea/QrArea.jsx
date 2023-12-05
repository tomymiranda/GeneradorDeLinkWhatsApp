import { Box } from "@material-ui/core"
import { QRCode }  from "react-qr-code";
import PropTypes from 'prop-types';

const QrArea = ({ link }) => {
    return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <QRCode size={40} value={link} />
    </Box>
    )
};

export default QrArea;

QrArea.propTypes = {
    link: PropTypes.string.isRequired,
};