import Link from "next/link";
import { ImageBlock } from "../../atoms/image-block/image-block";
import styles from './news-block.module.scss'
import {  NewsBlockVariant, NewsItem } from "./news-block-type";

export const NewsBlock = ({ news, variant } : { news: NewsItem; variant: NewsBlockVariant }) => {
    const size = `news-block--${variant}`;
    let imageSize;
    switch (variant) {
        case 'large':
            imageSize = {
                mobile: {
                    width: 744,
                    height: 368
                },
                desktop: {
                    width: 744,
                    height: 368,
                }
            }
        case 'medium':
            imageSize = {
                mobile: {
                    width: 370,
                    height: 209
                },
                desktop: {
                    width: 300,
                    height: 169,
                }
            }
        case 'small':
            imageSize ={
                mobile: {
                    width: 370,
                    height: 209
                },
                desktop: {
                    width: 300,
                    height: 169,
                }
            }
    }

    
    return (
        <Link href={news.urlAlias} className={`${styles['news-block']} ${styles[size]}`}>
            <div className={styles['news-block__image']}>
                 <ImageBlock src={news.afbeelding.afbeelding} alt={news.titel} sizes={imageSize} />
            </div>
            <div className={styles['news-block__text']}>
                <span className={styles['tagline']}>{news.type}</span>
                <h3 className={styles['news-block__description']}>{news.titel}</h3>
            </div>
        </Link>
    );
}