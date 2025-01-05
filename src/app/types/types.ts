import { NewsBlockSizes } from "../components/molecules/news-block/news-block-type";

export type PageContext = {
    regions: Region[];
};

export type Region = {
    name: string;
    blocks: Block[];
};

export type Block = {
    id: string;
    type: string;
    fields: Field[];
};

export type Field = {
    name: string;
    value: string;
};

export interface NewsItem {
    id: number;
    urlAlias: string;
    titel: string;
    type: string;
    imageSize: NewsBlockSizes;
    afbeelding: {
        afbeelding: string;
    };
}

export type NewsSet = {
    news: NewsItem[];
}

export interface NewsOverviewProps {
    news: NewsSet[];
}