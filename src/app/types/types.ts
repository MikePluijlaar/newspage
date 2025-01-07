//Global types for the application that are used on more than one place
import { NewsBlockSizes } from "../components/molecules/news-block/news-block-type";
export interface NewsItem {
    id: number;
    urlAlias: string;
    titel: string;
    type: string;
    afbeelding: {
        afbeelding: string;
    };
}

export interface NewsOverviewProps {
    news: NewsItem[];
}