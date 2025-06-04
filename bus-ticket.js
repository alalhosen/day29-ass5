function play() {
    const bannerSection = document.getElementById('banner-section');
    bannerSection.classList.add('hidden');

    const bestSection = document.getElementById('best-section');
    bestSection.classList.add('hidden');

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
  div.addEventListener("click", function(){
    count = count + 1;
    console.log(count)
  })
}