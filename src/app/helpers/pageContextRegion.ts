export const pageContextRegion = (pageContext, regionName) => {
    const regionData = pageContext.regions.find(region => region.name === regionName);
    return regionData;
}