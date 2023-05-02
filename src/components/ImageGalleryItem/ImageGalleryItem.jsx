import { useState } from "react";
import css from "./ImageGalleryItem.module.css"

import { Modal } from "components/Modal/Modal"
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ data }) => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const onClick = (e) => {
        if (e.target.nodeName === "IMG") {
            setIsOpenModal(true)
        }
    }

    return (
        <li className={css.ImageGalleryItem} onClick={onClick} id={data.id}>
            <img className={css.ImageGalleryItemImage} src={data.webformatURL} alt={data.id} />
            {isOpenModal && <Modal selectedFoto={data} handleCloseModal={() => setIsOpenModal(false)} />}
        </li>
    );
};

ImageGalleryItem.propTypes = {
    data: PropTypes.object,
}