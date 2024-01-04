const getFullYear = () => {
  return new Date().getFullYear();
}

const getFooterCopy = (isIndex) => {
  if (isIndex) {
    return "Holberton School";
  } else {
    return "Holberton School main dashboard";
  }
}

const getLatestNotification = () => {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}

module.exports = {
  getFullYear,
  getFooterCopy,
  getLatestNotification,
};