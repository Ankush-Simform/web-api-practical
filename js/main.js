import {
  getProductDetails,
  addProduct,
  updateProduct,
  updateWithPatch,
  deleteProduct,
} from "./product.js";

import { isLoading } from "./helpers.js";

$(document).ready(function () {
  $("#tableBody").empty();

  $("#openFormBtn, #cancelBtn").click(function () {
    isLoading(true);
    getProductDetails();
    isLoading(false);
  });

  $("#post").click(function () {
    isLoading(true);
    addProduct();
    isLoading(false);
  });

  $("#put").click(function () {
    isLoading(true);
    updateProduct();
    isLoading(false);
  });

  $("#patch").click(function () {
    isLoading(true);
    updateWithPatch();
    isLoading(false);
  });

  $("#delete").click(function () {
    isLoading(true);
    deleteProduct();
    isLoading(false);
  });
});
