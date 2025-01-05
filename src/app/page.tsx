import { Header } from "./components/organisms/header/header";
import { NewsOverview } from "./components/organisms/news-overview/news-overview";
import pageContext from "./api/mock/pageContext.json";
import { pageContextRegion } from "./helpers/pageContextRegion";
import { NewsTeaser } from "./components/organisms/news-teaser/news-teaser";
import { ContentContainer } from "./components/atoms/content-container/content-container";


export default function Home() {
    const headerData = pageContextRegion(pageContext, 'header');
    const newsData = pageContextRegion(pageContext, 'content');

    return (
        <ContentContainer>
            <Header menuData={headerData.blocks}></Header>
            <NewsTeaser news={newsData.blocks[0].news.slice(0, 5)}></NewsTeaser>
            <NewsOverview news={newsData.blocks}></NewsOverview>
        </ContentContainer>
    );
}
