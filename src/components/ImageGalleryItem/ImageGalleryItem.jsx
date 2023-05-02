import { Component } from "react"
import css from "./ImageGalleryItem.module.css"

import { Modal } from "components/Modal/Modal"

export class ImageGalleryItem extends Component {
    state = {
        isOpenModal: false,
    }

    onClick = (e) => {
        if (e.target.id === "") {
            this.setState({ isOpenModal: true });
        }
    }

    handleCloseModal = () => {
        this.setState({ isOpenModal: false });
    }


    render() {
        return (
            <li className={css.ImageGalleryItem} onClick={this.onClick}>
                <img className={css.ImageGalleryItemImage} src={this.props.data.webformatURL} alt={this.props.data.id} />
                {this.state.isOpenModal && <Modal selectedFoto={this.props.data} handleCloseModal={this.handleCloseModal} />}
            </li>
        )
    }
}
