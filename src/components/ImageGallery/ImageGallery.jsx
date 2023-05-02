import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import css from "./ImageGallery.module.css"
import PropTypes from 'prop-types';

export const ImageGallery = ({ data }) => {
    return (
        <ul className={css.ImageGallery}>
            {data.map(data =>
                <ImageGalleryItem data={data} key={data.id} />
            )}
        </ul>
    )
}

ImageGallery.propTypes = {
    data: PropTypes.array,
}