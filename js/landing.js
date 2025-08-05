//inisialisi elemen
const productList = document.getElementById("product-list");
const productDetail = document.getElementById("product-detail");
const cartPage = document.getElementById("cart-page");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartButton = document.getElementById("cart-btn");

let cart = [];
let allProducts = [];

function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (e) {
      cart = [];
    }
  }
}

//Fetch Produk dari API
async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  allProducts = await res.json();
  renderProducts(allProducts);
}

//searc bar
function renderProducts(products) {
  console.log("Rendering Products:", products);
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>Harga: Rp ${convertToRupiah(product.price)}</p>
      <button class="cart-btn" onclick="addToCart(${product.id})">🛒 Tambah ke Keranjang</button>
      <button class="beli-btn" onclick="buyProduct(${product.id})">🛍 Beli</button>
    `;

    productElement.onclick = () => showDetail(product.id);
    productList.appendChild(productElement);
  });
}

    if (cartButton) {
  cartButton.onclick = showCart;
}


function showDetail(productId) {
  const product = allProducts.find((p) => p.id === productId);
  if (!product) return alert("Produk tidak ditemukan.");

  productList.style.display = "none";
  cartPage.style.display = "none";
  productDetail.style.display = "block";
  productDetail.innerHTML = `
    <h2>${product.title}</h2>
    <img src="${product.image}" width="150" />
    <p>${product.description}</p>
    <h3>${convertToRupiah(product.price)}</h3>
    <button onclick='addToCart(${product.id})'>+ Tambah ke Keranjang</button>
    <button class="back-btn" onclick="showProducts()">← Kembali</button>
  `;
}

function showProducts() {
  productDetail.style.display = "none";
  cartPage.style.display = "none";
  productList.style.display = "flex";
}

function showCart() {
  productDetail.style.display = "none";
  productList.style.display = "none";
  cartPage.style.display = "block";
  renderCart();
}


function addToCart(productId) {
  const product = allProducts.find((p) => p.id === productId);
  if (!product) return alert("Produk tidak ditemukan.");

  const existingItem = cart.find((item) => item.product.id === productId);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ product, quantity: 1 });
  }

  updateCartCount();
  saveCartToLocalStorage();
  alert("Produk ditambahkan ke keranjang!");
}

function removeFromCart(productId) {
  const index = cart.findIndex((item) => item.product.id === productId);
  if (index !== -1) {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
    } else {
      cart.splice(index, 1);
    }
  }

  updateCartCount();
  saveCartToLocalStorage();
  renderCart();
}

function clearCart() {
  cart = [];
  updateCartCount();
  saveCartToLocalStorage();
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Keranjang kosong</p>";
    return;
  }

  cart.forEach((item) => {
    const { product, quantity } = item;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${product.image}" />
      <h4>${product.title}</h4>
      <p>Harga: $${product.price}</p>
      <p>Jumlah: ${quantity}</p>
      <button onclick="removeFromCart(${product.id})">🗑 Hapus 1</button>
    `;
    cartItems.appendChild(div);
  });
}

function updateCartCount() {
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.innerText = total;
}

function searchProducts(keyword) {
  const keywordLower = keyword.toLowerCase();
  const filtered = allProducts.filter((product) =>
    product.title.toLowerCase().includes(keywordLower)
  );
  renderProducts(filtered);
}

function checkout() {
  if (cart.length === 0) {
    alert("Keranjang kosong!");
    return;
  }
  alert("Terima kasih telah membeli!");
  clearCart();
}

// Init
loadCartFromLocalStorage();
fetchProducts();
updateCartCount();

// Slider promo sederhana
const promoSlides = document.querySelectorAll(".promo-slide");
let currentSlide = 0;

function showPromoSlide(index) {
  promoSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextPromoSlide() {
  currentSlide = (currentSlide + 1) % promoSlides.length;
  showPromoSlide(currentSlide);
}

// Start auto slide setiap 4 detik
if (promoSlides.length > 0) {
  setInterval(nextPromoSlide, 4000);
}


function buyProduct(productId) {
  const product = allProducts.find((p) => p.id === productId);
  if (!product) return alert("Produk tidak ditemukan.");

  alert(`Anda membeli: ${product.title}\nHarga: Rp ${product.price}`);
}


function convertToRupiah(usd) {
  const rate = 16000; // contoh kurs USD ke IDR
  return "Rp " + (usd * rate).toLocaleString("id-ID");
}




