export function api(url, method, data) {
  const BASE_URL = "https://dummyjson.com";
  return $.ajax({
    url: BASE_URL + url,
    type: method,
    contentType: "application/json",
    data: JSON.stringify(data),
    error: function (xhr, status, error) {
      console.error("Error:", error);
    },
  });
}

export function isLoading(load) {
  if (load === true) {
    $("#tableBody").html(`<tr><td colspan="6" class="text-center text-secondary">Loading...</td></tr>`);
  } else {
    $("#tableBody").html();
  }
}