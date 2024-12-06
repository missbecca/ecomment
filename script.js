const cartList = document.getElementById("cart-list");
const total = document.getElementById("total");
const productCon = document.getElementById("product-container");
const cartIncreament = document.querySelector(".cart-Quantity");

let cartQuantity = 0;
const products = [
  {
    title: "Candy",
    price: 30,
    image:
      "https://images.pexels.com/photos/1906435/pexels-photo-1906435.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "Cookie",
    price: 10,
    image:
      "https://images.pexels.com/photos/105589/pexels-photo-105589.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "Cake",
    price: 70,
    image:
      "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "Egg",
    price: 3,
    image:
      "https://images.pexels.com/photos/6962818/pexels-photo-6962818.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "Milk",
    price: 27,
    image:
      "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];
products.forEach((product) => {
  const productCard = `
      <div class="">
            <img
              src="${product.image}"
              alt=""
              class="w-[320px] h-[220px] object-cover rounded-2xl"
            />
            <h1 class="text-5xl">${product.title}</h1>
            <p class="text-3xl">$${product.price}</p>
            <button class="px-4 py-2 bg-amber-400"
            onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
          </div>
 `;
  productCon.innerHTML += productCard;
});
const cart = [];
function addToCart(product) {
  cart.push(product);
  displayCart();
  cartQuantity++;
  cartIncreament.innerText = cartQuantity;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  total.textContent = `Total : $${totalPrice}`;
}
const displayCart = () => {
  cartList.innerHTML = "";
  cart.forEach((item) => {
    const cartCard = `
      <div class="flex gap-10">
<img
  src="${item.image}"
  alt=""
  class="w-[100px] h-[100px] object-cover rounded-2xl"
/>
<div class="">
  <h1 class="text-5xl">${item.title}</h1>
  <p class="text-3xl">$${item.price}</p>
</div>
</div>
    `;
    cartList.innerHTML += cartCard;
  });
};
