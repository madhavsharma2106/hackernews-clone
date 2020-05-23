import React, { useState, useEffect } from "react";
import Text, { TextVariant } from "../../atoms/Text/Text";

import "./FrontPage.scss";
import Paginator from "../../molecule/Paginator/Paginator";
import NewsRow from "../../molecule/NewsRow/NewsRow";
import Chart from "../../organism/Chart/Chart";

function FrontPageComponent({ tableData, nextPage, previousPage, pageInfo }) {
  const [tableInfo, setTableInfo] = useState({});
  useEffect(() => {
    window.localStorage.setItem("tableInfo", tableInfo);
    console.log(tableInfo);
  }, [tableInfo]);

  const prepDataForChart = (tableInfo) => {
    let finalData = [];
    for (let row in tableInfo) {
      finalData.push({ id: row, votes: tableInfo[row].votes });
    }
    return finalData;
  };

  const hideRow = (id) => {
    const update = (tableInfo[id] = { hidden: true });
    setTableInfo({ ...tableInfo, ...update });
  };

  const addVote = (id) => {
    if (tableInfo[id]) {
      const update = (tableInfo[id] = { votes: tableInfo[id].votes + 1 });
      setTableInfo({ ...tableInfo, ...update });
    } else {
      const update = (tableInfo[id] = { votes: 1 });
      setTableInfo({ ...tableInfo, ...update });
    }
  };

  const renderTableBody = () => {
    console.log(tableData);
    return tableData?.map((row) => {
      const id = row.objectID;

      return (
        !tableInfo[id]?.hidden && (
          <NewsRow
            key={id}
            id={id}
            votes={tableInfo[id]?.votes}
            row={row}
            addVote={addVote}
            hideRow={hideRow}
          />
        )
      );
    });
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="fixed">
              <Text variant={TextVariant.whiteHeading}>Comments</Text>
            </th>
            <th className="fixed">
              <Text variant={TextVariant.whiteHeading}>Vote Count</Text>
            </th>
            <th className="fixed">
              <Text variant={TextVariant.whiteHeading}>UpVote</Text>
            </th>
            <th>
              <Text variant={TextVariant.whiteHeading}>News Details</Text>
            </th>
          </tr>
        </thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
      <Paginator
        pageInfo={pageInfo}
        previousPage={previousPage}
        nextPage={nextPage}
      />

      <Chart data={prepDataForChart(tableInfo)} />
    </>
  );
}

export default FrontPageComponent;
