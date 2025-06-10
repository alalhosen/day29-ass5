function play() {
  const bannerSection = document.getElementById("banner-section");
  bannerSection.classList.add("hidden");

  const bestSection = document.getElementById("best-section");
  bestSection.classList.add("hidden");

  // const ticketSection = document.getElementById('ticket-section');
  // ticketSection.classList.replace('ticket-section')
  // console.log(ticketSection)
}

// const allBtn = document.getElementsByClassName("btn-icon");
// let count = 0;

// for (const btn of allBtn) {
//     btn.addEventListener("click", function (e) {
//         count = count + 1;
//         setInnerText("cart-count", count);
//     });
// }

// function setInnerText(id, value){
//     document.getElementById(id).innerText = value;
// }

// select ticket seat//

// function handleClick (event) {
//     console.log(event.target.parentNode.parentNode.childNodes[5].innerText);
// }

const allDiv = document.getElementsByClassName("seat-btn-icon");
let count = 0;

for (const div of allDiv) {
  div.addEventListener("click", function (event) {
    count = count + 1;

    const seatNumber = event.target.innerText;

    const seatPrice =
      event.target.parentNode.parentNode.parentNode.parentNode.parentNode
        .childNodes[5].childNodes[5].childNodes[3].innerText;

    const selectedContainer = document.getElementById(
      "selected-price-container"
    );

    const li = document.createElement("li");

    const p = document.createElement("p");
    p.innerText = seatNumber;
    const p2 = document.createElement("p");
    p2.innerText = seatPrice;

    li.appendChild(p);
    li.appendChild(p2);
    selectedContainer.appendChild(li);

    const totalCost = document.getElementById("total-price").innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + parseInt(seatPrice);

    const grandTotal = document.getElementById("grand-total").innerText;
    const convertedGrandTotal = parseInt(grandTotal);
    const sum2 = convertedGrandTotal + parseInt(seatPrice);
    // console.log(sum2)

    setInnerText("total-price", sum);
    setInnerText("grand-total", sum2);

    setInnerText("seat-count", count);
  });
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value; 
}
