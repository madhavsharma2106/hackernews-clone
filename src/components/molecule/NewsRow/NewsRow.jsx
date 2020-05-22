import React from "react";
import Text, { TextVariant } from "../../atoms/Text/Text";
import { calculateTimeLapsed, extractHostNameFromUrl } from "../../../utils";

function NewsRow({ id, votes, row, addVote, hideRow }) {
  return (
    <tr>
      <td>
        <Text variant={TextVariant.regular}>{row.num_comments}</Text>
      </td>

      <td>
        <Text variant={TextVariant.regular}>{votes ?? 0}</Text>
      </td>
      <td>
        <Text
          variant={TextVariant.regular}
          clickable
          onClick={() => addVote(id)}
        >
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
          {row.url && extractHostNameFromUrl(row.url)}
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
          onClick={() => hideRow(id)}
        >
          hide
        </Text>
      </td>
    </tr>
  );
}

export default NewsRow;
