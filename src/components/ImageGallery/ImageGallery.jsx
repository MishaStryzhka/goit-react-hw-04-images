import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import css from "./ImageGallery.module.css"

export const ImageGallery = ({ data }) => {
    // console.log(data.hits)
    return (
        <ul className={css.ImageGallery}>
            {data.map(data =>
                <ImageGalleryItem data={data} key={data.id} />
            )}
        </ul>
    )
}