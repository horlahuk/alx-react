import $ from "jquery";

$(document).ready(function () {
  const para1 = $('<p>').text('Holberton Dashboard');
  const para2 = $('<p>').text('Dashboard data for the students');
  const para3 = $('<p>').text('Copyright - Holberton School');

  $('body').append(para1, para2, para3);
});
