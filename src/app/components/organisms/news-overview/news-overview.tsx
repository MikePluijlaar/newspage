import { NewsOverviewProps } from "@/app/types/types";
import { NewsBlock } from "../../molecules/news-block/news-block";
import styles from "./news-overview.module.scss"

export const NewsOverview = ({ news }: NewsOverviewProps) => {
    const newsData = news[0].news;
    return (
        <div className={styles["news-overview"]}>
            {newsData.map((newsItem, index) => (
                <div key={index} className={styles['news-overview__item']}>
                    <NewsBlock key={index} news={newsItem} variant={"medium"} />
                </div>
            ))}
        </div>
    );
}