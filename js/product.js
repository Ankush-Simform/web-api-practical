import { api } from "./helpers.js";

export async function getProductDetails() {
  const res = await api("/products?limit=2", "GET");
  let html = "";
  res.products.forEach((product) => {
    html += `
      <tr>
        <td>
          <img src="${product.thumbnail}" alt="${product.title}" width="80" class="img-fluid">
        </td>
        <td>${product.title}</td>
        <td>$${product.price}</td>
        <td>
          <button class="btn btn-primary btn-sm" onclick="alert('Added ${product.title} to cart!')">
            Buy Now
          </button>
        </td>
      </tr>
    `;
  });
  $("#tableBody").html(html);
}

export async function addProduct() {
  const res = await api("/products/add", "POST", {
    id: 1,
    title: "BMW Pencil",
    category: "stationery",
    price: 10.5,
  });
  

  $("#tableBody").html(
    "<pre style='color:black; background:#f4f4f4; padding:10px;'>" +
      JSON.stringify(res, null, 2) +
      "</pre>",
  );
}

export async function updateProduct() {
  const res = await api("/products/1", "PUT", {
    title: "iPhone 17 Pro   Max",
  });

  $("#tableBody").html(
    "<pre style='color:black; background:#f4f4f4; padding:10px;'>" +
      JSON.stringify(res, null, 2) +
      "</pre>",
  );
}

export async function updateWithPatch() {
  const res = await api("/products/1", "PATCH", {
    title: "iPhone 18 pro max",
  });

  $("#tableBody").html(
    "<pre style='color:black; background:#f4f4f4; padding:10px;'>" +
      JSON.stringify(res, null, 2) +
      "</pre>",
  );
}

export async function deleteProduct() {
  const res = await api("/products/1", "DELETE");

  $("#tableBody").html(
    "<pre style='color:black; background:#f4f4f4; padding:10px;'>" +
      JSON.stringify(res, null, 2) +
      "</pre>",
  );
}
