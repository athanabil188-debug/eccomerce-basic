// Ambil data keranjang dari localStorage
const cartItems = JSON.parse(localStorage.getItem("cart")) || [
  { name: "Hot Wheels - Mobil A", price: 75000 },
  { name: "Hot Wheels - Mobil B", price: 85000 },
];

const cartList = document.getElementById("cart-items");
const totalAmount = document.getElementById("total-amount");
let total = 0;

// Tampilkan item dalam keranjang
cartItems.forEach((item) => {
  const li = document.createElement("li");
  li.classList.add("border", "p-2", "rounded", "bg-gray-50");
  li.textContent = `${item.name} - Rp ${item.price.toLocaleString()}`;
  cartList.appendChild(li);
  total += item.price;
});
totalAmount.textContent = total.toLocaleString();

// Form handler
const form = document.getElementById("checkout-form");
const confirmation = document.getElementById("confirmation-message");
const confirmTitle = document.getElementById("confirm-title");
const confirmDetail = document.getElementById("confirm-detail");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const nama = data.get("nama");
  const alamat = data.get("alamat");
  const pembayaran = data.get("pembayaran");

  confirmTitle.textContent = `Terima kasih, ${nama}!`;
  confirmDetail.innerHTML = `
      Pesanan Anda akan dikirim ke: <strong>${alamat}</strong><br>
      Metode Pembayaran: <strong>${pembayaran}</strong><br>
      Total: <strong>Rp ${total.toLocaleString()}</strong>
    `;

  confirmation.classList.remove("hidden");
  form.reset();
  localStorage.removeItem("cart");
});
