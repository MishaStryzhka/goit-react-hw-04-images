import { createPortal } from "react-dom";
import { Component } from "react";
import { Audio } from "react-loader-spinner";

import css from "./Modal.module.css"

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    state = {
        isShowLoader: true,
    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handelKeyDown)
    }

    componentWillUnmount = () => {
        window.removeEventListener('keydown', this.handelKeyDown)
    }

    handelKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.handleCloseModal()
        }
    }

    handleClick = e => {
        if (e.target.id === "overlay") {
            this.props.handleCloseModal()
        }
    }

    showLoader = () => {
        this.setState({ isShowLoader: false });
    };

    render() {
        return createPortal(
            <div className={css.Overlay} onClick={this.handleClick} id={"overlay"}>
                <div className={css.Modal}>
                    {this.state.isShowLoader && <Audio />}
                    <img style={{ display: this.state.isShowLoader ? "none" : "block" }} onLoad={() => this.showLoader()} src={this.props.selectedFoto.largeImageURL} alt={this.props.selectedFoto.id} />
                </div>
            </div>, modalRoot,
        );
    }
};