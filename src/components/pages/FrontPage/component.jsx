import React, { useState, useEffect } from "react";
import Text, { TextVariant } from "../../atoms/Text/Text";

import "./FrontPage.scss";
import moment from "moment";
import Paginator from "../../molecule/Paginator/Paginator";

function FrontPageComponent({ tableData, nextPage, previousPage, pageInfo }) {
  const [tableInfo, setTableInfo] = useState({});
  useEffect(() => {}, [tableInfo]);

  const hideRow = (id) => {
    setTableInfo({ ...tableInfo, id: true });
  };

  const calculateTimeLapsed = (time) => {
    return moment().diff(time, "hours");
  };

  const extractHostName = (url) => {
    // Taken from : https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string
    let hostname;
    if (url.indexOf("//") > -1) {
      hostname = url.split("/")[2];
    } else {
      hostname = url.split("/")[0];
    }
    hostname = hostname.split(":")[0];
    hostname = hostname.split("?")[0];

    return `(${hostname})`;
  };

  const renderTableBody = () => {
    console.log(tableData);
    return tableData?.map((row) => (
      <tr key={row.created_at_i} hidden={tableInfo[row.created_at_i]?.hidden}>
        <td>
          <Text variant={TextVariant.regular}>{row.num_comments}</Text>
        </td>

        <td>
          <Text variant={TextVariant.regular}>96</Text>
        </td>
        <td>
          <Text variant={TextVariant.regular} clickable>
            &#8679;
          </Text>
        </td>
        <td className="news-details">
          <Text variant={TextVariant.regular} inline>
            {row.title}
          </Text>
          <Text
            variant={TextVariant.subText}
            inline
            clickable
            onClick={() => {
              window.open(row.url, "_blank");
            }}
          >
            {row.url && extractHostName(row.url)}
          </Text>
          <Text variant={TextVariant.subText} inline>
            by
          </Text>
          <Text variant={TextVariant.subTextDark} inline>
            {row.author}
          </Text>
          <Text variant={TextVariant.subText} inline>
            {`${calculateTimeLapsed(row.created_at)} hours ago`}
          </Text>
          <Text
            variant={TextVariant.subTextDark}
            inline
            clickable
            onClick={() => hideRow(row.created_at_i)}
          >
            hide
          </Text>
        </td>
      </tr>
    ));
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
    </>
  );
}

export default FrontPageComponent;
