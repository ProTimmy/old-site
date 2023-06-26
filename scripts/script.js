/* global $ */

$(document).ready(function () {
  let githubURL =
    "https://api.github.com/users/protimmy/repos?sort=updated&type=all";
  $.ajax({
    url: githubURL,
    type: "GET",
    success: function (result) {
      console.log(result);
      for (var i = 0; i < 6; i++) {
        if (i === 3) {
          $("#repo_container").append(
            "<a href=" +
              result[i].html_url +
              ' class="repo mobile-short"><h2>' +
              result[i].name +
              "</h2><h3>" +
              (result[i].description === null
                ? "No Description"
                : result[i].description) +
              "</h3></a>"
          );
        } else if (i > 2) {
          $("#repo_container").append(
            "<a href=" +
              result[i].html_url +
              ' class="repo mobile"><h2>' +
              result[i].name +
              "</h2><h3>" +
              (result[i].description === null
                ? "No Description"
                : result[i].description) +
              "</h3></a>"
          );
        } else {
          $("#repo_container").append(
            "<a href=" +
              result[i].html_url +
              ' class="repo"><h2>' +
              result[i].name +
              "</h2><h3>" +
              (result[i].description === null
                ? "No Description"
                : result[i].description) +
              "</h3></a>"
          );
        }
      }
    },
    error: function (result) {
      window.alert("Failed to connect to Github API. Please reload the page!");
    },
  });

  $("#back_button").click(function () {
    $("#contact").toggle("slide", { direction: "right" });
  });

  $("#contact_button").click(function () {
    $("#contact").toggle("slide", { direction: "right" });
  });
});
