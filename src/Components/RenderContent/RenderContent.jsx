import ContentCarousel from "../ContentCarousel/ContentCarousel";

const RenderContent = ({ error, isLoading, data }) => {
  if (error) return <h1 className="text-white">Error...{error.message}</h1>;
  if (isLoading) return <h1 className="text-white">Loading...</h1>;

  return data.map((list) =>
    list.contentList.length ? (
      <ContentCarousel
        key={list._id}
        data={list.contentList}
        listTitle={list.name}
      />
    ) : null
  );
};

export default RenderContent;
