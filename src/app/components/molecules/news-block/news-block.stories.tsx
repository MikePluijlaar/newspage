import { NewsBlock } from "./news-block";
import data from "../../../api/mock/pageContext.json";
import type { Meta } from "@storybook/react";
import { pageContextRegion } from "@/app/helpers/pageContextRegion";

const meta: Meta = {
    title: "Molecules/News Block",
    tags: ['autodocs'],
    component: NewsBlock,
};

const newsData = pageContextRegion(data, 'content');
export const Large = () => {
    return <NewsBlock news={newsData.blocks[0].news[0]} variant="large"></NewsBlock>
}

export const Medium = () => {
    return <NewsBlock news={newsData.blocks[0].news[0]} variant="medium"></NewsBlock>
}

export const Small = () => {
    return <NewsBlock news={newsData.blocks[0].news[0]} variant="small"></NewsBlock>
}

export default meta;