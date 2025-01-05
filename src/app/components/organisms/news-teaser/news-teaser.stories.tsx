import { NewsTeaser } from "./news-teaser";
import data from "../../../api/mock/pageContext.json";
import type { Meta } from "@storybook/react";
import { pageContextRegion } from "@/app/helpers/pageContextRegion";

const meta: Meta = {
    title: "Organisms/News teaser",
    tags: ['autodocs'],
    component: NewsTeaser,
};

const newsData = pageContextRegion(data, 'content');

export const Default = () => {
    return <NewsTeaser news={newsData.blocks[0].news.slice(0, 5)}></NewsTeaser>
}

export default meta;