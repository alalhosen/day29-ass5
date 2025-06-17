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

    event.target.parentNode.style.backgroundColor = "green"
    

    li.appendChild(p);
    li.appendChild(p2);
    

    const seat40 = document.getElementById("seat40").innerText;
    const convertedSeat40 = parseInt(seat40);
    document.getElementById("seat40").innerText = convertedSeat40 - 1;

    
    const seatLimitCount =
    document.getElementById("seat-limit-count").innerText;
    const convertedSeatLimit = parseInt(seatLimitCount);
    document.getElementById("seat-limit-count").innerText =
    convertedSeatLimit - 1;
    
    if (convertedSeatLimit <1) {
      alert("Don't over the limit. Please apply coupon.")
      return;
    }

    selectedContainer.appendChild(li);

    totalPrice("total-price", parseInt(seatPrice));

    grandTotalCost("grand-total", parseInt(seatPrice));

    setInnerText("seat-count", count);
  });
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function totalPrice(id, value) {
  const totalPrice = document.getElementById(id).innerText;
  const convertedTotalCost = parseInt(totalPrice);
  const sum = convertedTotalCost + parseInt(value);
  setInnerText("total-price", sum);
}

function grandTotalCost(category) {
  const totalPrice = document.getElementById("total-price").innerText;
  const convertedTotalCost = parseInt(totalPrice);

  if (category === "new15") {
    setInnerText("grand-total", convertedTotalCost - 15);
  } else if (category === "couple20") {
    setInnerText("grand-total", convertedTotalCost - 20);
  } else {
    setInnerText("grand-total", convertedTotalCost);
  }
}
