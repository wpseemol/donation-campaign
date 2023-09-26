import useMySiteDataFatch from "../../myHooks/MySiteDataFatch/MySiteDataFatch";

const SearchComponet = (srceText) => {
  const allDatas = useMySiteDataFatch();
  const searchData = allDatas.filter(
    (data) => data.category.toLowerCase() === srceText
  );
  return searchData;
};

export default SearchComponet;
