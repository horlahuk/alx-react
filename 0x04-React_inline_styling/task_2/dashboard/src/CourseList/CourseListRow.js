import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const rowStyle = {
  backgroundColor: "#f5f5f5ab",
};

const headerStyle = {
  backgroundColor: "#deb5b545",
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr className={isHeader ? css(styles.header) : css(styles.normal)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th style={headerStyle} colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th style={headerStyle}>{textFirstCell}</th>
            <th style={headerStyle}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#deb5b545",
  },

  normal: {
    backgroundColor: "#f5f5f5ab",
  },
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;