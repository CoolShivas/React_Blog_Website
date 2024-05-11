import styles from "./ModalLayout.module.css";
import { createPortal } from "react-dom";


const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.hidePostBlog}></div>
};

const Modal = (props) => {
    return <div className={styles.modal}>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>
};

const portalElement = document.getElementById("overlay");

const ModalLayout = (props) => {
    return (
        <>
            {createPortal(<Backdrop hidePostBlog={props.hidePostBlog}></Backdrop>, portalElement)}
            {createPortal(<Modal> {props.children} </Modal>, portalElement)}
        </>
    )
}

export default ModalLayout;