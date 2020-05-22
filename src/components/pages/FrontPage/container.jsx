import React, { useEffect, useState } from "react";
import FrontPageComponent from "./component";

function FrontPage() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (page = 0) => {
    fetch(`http://hn.algolia.com/api/v1/search?tags=front_page&page=${page}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => {
        console.error(err);
        setData("falied");
      });
  };

  const nextPage = () => {
    fetchData(data.page + 1);
  };
  const previousPage = () => {
    fetchData(data.page - 1);
  };

  return (
    <FrontPageComponent
      tableData={data?.hits}
      nextPage={nextPage}
      previousPage={previousPage}
      pageInfo={{ current: data?.page, total: data?.nbPages }}
    />
  );
}

export default FrontPage;
