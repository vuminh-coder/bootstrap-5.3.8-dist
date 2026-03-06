const dragonBallFigures = [
  {
    src: "./assets/img/s-l1200.webp",
    name: "[Resin] Goku 1/4 cực nét",
    dimensions: {
      length: "40cm",
      height: "56cm",
      depth: "24cm",
    },
    weight: "3kg",
    description:
      "Mô hình Goku Resin kích thước 1/4 cực nét, đầy đủ phụ kiện, box. Nếu anh em cần mod led thì vui lòng liên hệ shop khi order nha.",
    status: "In Stock",
  },
  {
    src: "./assets/img/original_dragonball_goku_super_1649412048_ec3eb94f_progressive.jpg",
    name: "[Resin] Goku SSJ 4 1/4 cực nét",
    dimensions: {
      length: "22cm",
      height: "56cm",
      depth: "22cm",
    },
    weight: "3kg",
    description:
      "Mô hình Goku Resin kích thước 1/4 cực nét, đầy đủ phụ kiện, box. Nếu anh em cần mod led thì vui lòng liên hệ shop khi order nha.",
    status: "In Stock",
  },
  {
    src: "./assets/img/B169DB90-2CDC-4AB7-AE16-57A43041367E.webp",
    name: "[Resin] Broly",
    dimensions: {
      length: "24cm",
      height: "42cm",
      depth: "14cm",
    },
    weight: "2.1kg",
    description:
      "Mô hình Broly Resin cực nét, đầy đủ phụ kiện, box. Nếu anh em cần mod led thì vui lòng liên hệ shop khi order nha.",
    status: "In Stock",
  },
  {
    src: "./assets/img/_20231012202426__22780.jpg",
    name: "[Resin] Vegeta bán thân",
    dimensions: {
      length: "28cm",
      height: "37cm",
      depth: "15cm",
    },
    weight: "1.6kg",
    description:
      "Mô hình Vegeta bán thân Resin cực nét, đầy đủ phụ kiện, box. Hàng nét đến từng sợi tóc nhé anh em. Hàng order trước từ 7 - 15 ngày nha.",
    status: "Pre-order",
  },
];

const productContainer = document.querySelector("main .container .row");

let productsHTML = "";
dragonBallFigures.forEach((product) => {
  productsHTML += `
    <div class="col-3">
      <img
        src="${product.src}"
        alt="${product.name}"
        class="w-100 border-radius-10px"
        height="300px"
      />
      <h4 class="h-45px">${product.name}</h4>
      <p class="h-35px">Kích thước: ${product.dimensions.length} * ${product.dimensions.height} * ${product.dimensions.depth}</p>
      <p class="h-35px">Nặng: ${product.weight}</p>
      <p class="h-100px">${product.description}</p>
      <button class="btn btn-success">Thêm vào giỏ hàng</button>
    </div>
  `;
});

if (productContainer) {
  productContainer.innerHTML = productsHTML;
}
