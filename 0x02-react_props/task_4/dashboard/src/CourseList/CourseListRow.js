import React from "react";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  return (
    <tr>
      {isHeader && textSecondCell === null ? (
        <th colSpan="2">{textFirstCell}</th>
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

export default CourseListRow;