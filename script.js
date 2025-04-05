function ShowDetails(CoffeeName) {
    alert(`You selected ${CoffeeName} This is one of our best coffee!`);
}

document.getElementById('darkModeToggle').addEventListener('click', () => {document.body.classList.toggle('dark-mode');});
document.getElementById('orderForm').addEventListener('submit', (e) => {e.preventDefault();const name = document.getElementById('name'). value; const coffee = document.getElementById('coffee'). value;alert(`thank you ${'name'}, your ${'coffee'} is being prepared!`);});
const cartItems = [] ;
const cartList = document.getElementById("cartItems") ;
const orderSummary = document.getElementById("orderSummary") ;
const summaryText = document.getElementById("summaryText") ;

document.getElementById("orderForm").addEventListener("submit", (e) => {
    e.preventDefault() ;
    const name = document.getElementById("name").value;
    const coffee = document.getElementById("coffee").value;

    cartItems.push(coffee);
    updateCart();

    saveOrder(name, coffee);

    summaryText.innerText = `Thank You, ${name}! You Ordered: ${cartItems.join(", ")}`;
    orderSummary.style.display = "block";
    orderSummary.classList.add("fade-in");
}) ;

function saveOrder(name, coffee) {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push({ name, coffee});
    localStorage.setItem("orders",JSON.stringify(orders))
}

function updateCart() {
    cartList.innerHTML = "";
    cartItems.forEach ((item, index) => {
        const li =document.createElement("li");
        li.innerText = `${index + 1}. ${item}`;
        cartList.appendChild(li);
    })
}