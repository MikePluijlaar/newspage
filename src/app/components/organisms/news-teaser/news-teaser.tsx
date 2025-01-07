import { NewsOverviewProps } from "@/app/types/types";
import { NewsBlock } from "../../molecules/news-block/news-block";
import styles from "./news-teaser.module.scss"

export const NewsTeaser = ({news}: NewsOverviewProps) => {
    const newsData = news;
    return (
        <div className={styles["news-teaser"]} data-testid="news-teaser">
                <div className={styles['news-teaser__headline']}>
                    <NewsBlock news={news[0]} variant={"large"} />
                </div>
                <div className={styles['news-teaser__container']}>
                    {newsData.slice(1).map((newsItem, index) => (
                        <div key={index} className={styles['news-teaser__item']}>
                            <NewsBlock key={index} news={newsItem} variant={"small"} />
                        </div>
                    ))}
                </div>
        </div>
    );
}