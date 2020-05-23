import React from "react";
import Text, { TextVariant } from "../../atoms/Text/Text";
import "./Paginator.scss";

function Paginator({ pageInfo, previousPage, nextPage }) {
  return (
    <div className="pagination">
      {pageInfo.current !== 0 && (
        <Text variant={TextVariant.link} clickable onClick={previousPage}>
          Previous
        </Text>
      )}
      <Text variant={TextVariant.link}>|</Text>
      {pageInfo.current !== pageInfo.total - 1 && (
        <Text variant={TextVariant.link} clickable onClick={nextPage}>
          Next
        </Text>
      )}
    </div>
  );
}

export default Paginator;
