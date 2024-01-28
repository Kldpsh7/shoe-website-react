import './Modal.css';
import reactDOM from 'react-dom';

const Backdrop = (props) => {
    return <div className='backdrop'/>
};

const ModalOverlay = (props) => {
    return <div className='modal'>
        <div className='content'>{props.children}</div>
    </div>
};

const Modal = (props) => {
    return <>
        {reactDOM.createPortal(<Backdrop/>,document.getElementById('overlays'))}
        {reactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById('overlays'))}
    </>
};

export default Modal;