import PropTypes from 'prop-types';
import './Chat.module.css';
import styles from './Chat.module.css';
import perfilImage from '../Chat/perfil.jpg';

const Chat = ({number,message}) => {
    return (
        <div className={styles["chat-box"]}>
          <div className={styles['chat-header']}>
              <div className={styles['img-content']}>
                <ion-icon name="arrow-back-outline"></ion-icon>
                <div className={styles['img-box']}>
                  <img src={perfilImage} ></img>
                </div>
                <h3>{number}<br></br><span>Online</span></h3>
              </div>
              <div className={styles['action-bts']}>
                  <ion-icon name="videocam"></ion-icon>
                  <ion-icon name="call"></ion-icon>
                  <ion-icon name="ellipsis-vertical"></ion-icon>
              </div>
          </div>
          <div className={styles['message-box']}>
            <div className={styles['message']}>
              {message}<span className={styles['time']}>10:00</span>
            </div>
            <div className={styles['message-input']}>
              <div className={styles['input']}>
                  <ion-icon name="happy-outline"></ion-icon>
                  <input type='text' placeholder='Escribe un mensaje'></input>
                  <ion-icon name="attach-outline" class="deg45"></ion-icon>
                  <ion-icon name="camera"></ion-icon>
              </div>
              <div className={styles['mic']}>
                  <ion-icon name="mic-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      );
};
Chat.propTypes = {
    message: PropTypes.string.isRequired,
    number: PropTypes.func.isRequired
};
export default Chat;