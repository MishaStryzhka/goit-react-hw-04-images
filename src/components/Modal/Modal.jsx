import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { Audio } from "react-loader-spinner";

import css from "./Modal.module.css"

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ handleCloseModal, selectedFoto }) => {
    const [isShowLoader, setIsShowLoader] = useState(true)

    useEffect(() => {
        const handelKeyDown = e => {
            if (e.code === 'Escape') {
                handleCloseModal();
            };
        };

        window.addEventListener('keydown', handelKeyDown)

        return () => {
            window.removeEventListener('keydown', handelKeyDown)
        }
    }, [handleCloseModal])


    const handleClick = e => {
        if (e.target.id === "overlay") {
            handleCloseModal()
        }
    }

    const showLoader = () => {
        setIsShowLoader(false);
    };


    return createPortal(
        <div className={css.Overlay} onClick={handleClick} id={"overlay"}>
            <div className={css.Modal}>
                {isShowLoader && <Audio />}
                <img style={{ display: isShowLoader ? "none" : "block" }} onLoad={() => showLoader()} src={selectedFoto.largeImageURL} alt={selectedFoto.id} />
            </div>
        </div>, modalRoot,
    );
};



//     componentDidMount = () => {
//         window.addEventListener('keydown', this.handelKeyDown)
//     }

//     componentWillUnmount = () => {
//         window.removeEventListener('keydown', this.handelKeyDown)
//     }

//     handelKeyDown = e => {
//         if (e.code === 'Escape') {
//             this.props.handleCloseModal()
//         }
//     }

//     handleClick = e => {
//         if (e.target.id === "overlay") {
//             this.props.handleCloseModal()
//         }
//     }

//     showLoader = () => {
//         this.setState({ isShowLoader: false });
//     };

//     render() {
//         return createPortal(
//             <div className={css.Overlay} onClick={this.handleClick} id={"overlay"}>
//                 <div className={css.Modal}>
//                     {this.state.isShowLoader && <Audio />}
//                     <img style={{ display: this.state.isShowLoader ? "none" : "block" }} onLoad={() => this.showLoader()} src={this.props.selectedFoto.largeImageURL} alt={this.props.selectedFoto.id} />
//                 </div>
//             </div>, modalRoot,
//         );
//     }
// };