function menudonateAnimation() {
  const menupage = document.querySelector("#menu");
  const menuicon = document.querySelector("#icons .menuu");
  const menuclose = document.querySelector(".close");
  const donateicon = document.querySelector(".donate");
  const navv = document.querySelector("#nav svg");
  const menudonate = document.querySelector(".menudonate");
  const menudonatebtn = document.querySelectorAll(".menudonatebtn");
  const donatedonate = document.querySelector(".donatedonate");
  const menufooter = document.querySelector(".menufooter");
  menuicon.addEventListener("click", function () {
    menupage.style.transform = "translateY(-0%)";
    setTimeout(() => {
      menuicon.style.display = "none";
      menuclose.style.display = "inline";
      donateicon.style.color = "#F7F7F7";
      navv.style.color = "#F7F7F7";
    }, 400);
    setTimeout(() => {
      menudonate.style.opacity = "1";
      menudonate.style.display = "flex";
      menudonate.style.transform = "scale(1)";
    }, 500);
    setTimeout(() => {
      menufooter.style.transform = "scale(1)";
    }, 600);
  });

  menuclose.addEventListener("click", function () {
    menupage.style.transform = "translateY(-100%)";
    menuicon.style.display = "inline";
    menuclose.style.display = "none";
    donateicon.style.color = "#333";
    navv.style.color = "black";
    menudonate.style.opacity = "0";
    menudonate.style.display = "none";
    menufooter.style.transform = "scale(0)";
  });

  donateicon.addEventListener("click", function () {
    menupage.style.transform = "translateY(-0%)";
    setTimeout(() => {
      menuicon.style.display = "none";
      menuclose.style.display = "inline";
      donateicon.style.color = "#F7F7F7";
      navv.style.color = "#F7F7F7";
    }, 400);
    setTimeout(() => {
      menufooter.style.transform = "scale(1)";
    }, 600);
  });

  menudonatebtn.forEach((e) => {
    e.addEventListener("click", function () {
      setTimeout(() => {
        menudonate.style.opacity = "0";
        menudonate.style.display = "none";
        donatedonate.style.opacity = "1";
        donatedonate.style.display = "flex";
      }, 500);
    });
  });

  menuclose.addEventListener("click", function () {
    menupage.style.transform = "translateY(-100%)";
    donateicon.style.color = "#333";
    navv.style.color = "black";
    donatedonate.style.opacity = "0";
    donatedonate.style.display = "none";
    menufooter.style.transform = "scale(0)";
  });
}
menudonateAnimation();

const CONVENIENCE_FEES = 99;
let bagItemObjects;

onLoad();

function onLoad() {
  loadBagItemObjects();
  displayBagItems();
  displayBagSummary();
}

function displayBagSummary() {
  let BagSummaryElement = document.querySelector(".bag-summary");
  let totalItem = bagItemObjects.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  bagItemObjects.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let fianlPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
  BagSummaryElement.innerHTML = `
  <div class="bag-details-container">
                    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
                    <div class="price-item">
                      <span class="price-item-tag">Total MRP</span>
                      <span class="price-item-value">₹${totalMRP}</span>
                    </div>
                    <div class="price-item">
                      <span class="price-item-tag">Discount on MRP</span>
                      <span class="price-item-value priceDetail-base-discount">₹${totalDiscount}</span>
                    </div>
                    <div class="price-item">
                      <span class="price-item-tag">Convenience Fee</span>
                      <span class="price-item-value">₹99</span>
                    </div>
                    <hr>
                    <div class="price-footer">
                      <span class="price-item-tag">Total Amount</span>
                      <span class="price-item-value">₹${fianlPayment}</span>
                    </div>
                  </div>
                  <button class="btn-place-order">
                    <div class="css-xjhrni">PLACE ORDER</div>
                  </button>
                </div>
  `;
}

function loadBagItemObjects() {
  console.log(bagItems);

  bagItemObjects = bagItems.map((itemId) => {
    for (let i = 0; i < items.length; i++) {
      if (itemId == items[i].id) {
        return items[i];
      }
    }
  });
  console.log(bagItemObjects);
}

function displayBagItems() {
  let containerElement = document.querySelector(".bag-items-container");
  let innerHTML = ``;
  bagItemObjects.forEach((bagItem) => {
    innerHTML += generateItemHtml(bagItem);
  });
  containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId) {
  bagItems = bagItems.filter((bagItemId) => bagItemId !== itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  loadBagItemObjects();
  displayBagIcon();
  displayBagItems();
  displayBagSummary();
}

function generateItemHtml(item) {
  return `<div class="bag-item-container" data-scroll data-scroll-speed="2">
                        <div class="item-left-part">
                          <img class="bag-item-img" src="${item.image}" title="image">
                        </div>
                        <div class="item-right-part">
                            <div class="company">${item.company}</div>
                            <div class="item-name">${item.item_name}</div>
                            <div class="price-container">
                                <span class="current-price">${item.current_price}</span>
                                <span class="original-price">${item.original_price}</span>
                                <span class="discount-percentage">(${item.discount_percentage}%)</span>
                            </div>
                            <div class="return-period">
                                <span class="return-period-days">${item.return_period}</span> return available
                            </div>
                            <div class="delivery-details">
                            Delivery by
                            <span class="delivery-details-days">${item.delivery_date}</span>
                        </div>
                    </div>
        
                    <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
            </div>`;
}
