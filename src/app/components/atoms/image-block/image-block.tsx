import { getImageProps } from "next/image"
import styles from './image-block.module.scss'
import { ImageType } from "./image-block-type"

export const ImageBlock = ({ src, alt, sizes }: ImageType) => {
    const common = { alt: alt }
    const {
        props: { srcSet: desktop },
    } = getImageProps({
        ...common,
        width: sizes.desktop.width,
        height: sizes.desktop.height,
        quality: 80,
        src: src,
    })
    const {
        props: { srcSet: mobile, ...rest },
    } = getImageProps({
        ...common,
        width: sizes.mobile.width,
        height: sizes.mobile.height,
        quality: 70,
        src: src
    })
    return (
        <picture className={styles['image-block']}>
            <source media="(min-width: 1000px)" srcSet={desktop} />
            <source media="(min-width: 500px)" srcSet={mobile} />
            <img {...rest} style={{ width: '100%', height: 'auto' }} />
        </picture>
    )
}

