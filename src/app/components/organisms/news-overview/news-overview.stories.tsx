import { NewsOverview } from "./news-overview";
import data from "../../../api/mock/pageContext.json";	
import type { Meta } from "@storybook/react";
import { pageContextRegion } from "@/app/helpers/pageContextRegion";

const meta: Meta = {
  title: "Organisms/News overview",
  tags: ['autodocs'],
  component: NewsOverview,
};

const newsData = pageContextRegion(data, 'content');

export const Default = () => {
  return <NewsOverview news={newsData.blocks[0].news}></NewsOverview>
}

export default meta;