// start show the list-links when click on the menu-buuton
let menuButton = document.querySelector(".menu");

//define the list-links
let listLinks = document.querySelector(".list-menu");

menuButton.addEventListener("click", () => {
  listLinks.style.left = "0";

  overlay.style.display = "block";
});
// end show the list-links when click on the menu-button

// start hide the list-links when click on the close button
let closeButton = document.querySelector("i.close");

closeButton.addEventListener("click", () => {
  listLinks.style.left = "-252px";

  overlay.style.transition = "0.3s";

  overlay.style.display = "none";
});
// end hide the list-links when click on the close button

// start with chane the img when click on on of the tumbinails
let thumbinals = [...document.querySelectorAll("li img")];

// define the title-img
let titleImg = document.querySelector(".title-img");

thumbinals.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    thumbinals.forEach((ele) => {
      ele.style.filter = "none";

      ele.parentElement.style.borderColor = "transparent";
    });
    thumb.style.filter = "opacity(0.6)";

    thumb.parentElement.style.borderColor = "hsl(26, 100%, 55%)";

    // replace the thumbanail src with imges src
    let newSrc = thumb.src.replace("-thumbnail", "");

    //add the src to the main img (title)
    titleImg.src = newSrc;
  });
});
// end with chane the img when click on on of the tumbinails

//define the imges src
let imgesSrc = thumbinals.map((e) => {
  return e.src.replace("-thumbnail", "");
});

// start show next and previos img when click on one of the buttons

// define previour button
let previous = document.querySelector(".previous");

//defien the next button
let next = document.querySelector(".next");

document.querySelector(".title-img").src;

if (document.querySelector(".title-img").src === imgesSrc[0]) {
  previous.style.display = "none";
}

next.addEventListener("click", () => {
  previous.style.display = "block";

  let titleImg = document.querySelector(".title-img");

  let sorce;

  imgesSrc.forEach((src) => {
    if (src === titleImg.src) {
      sorce = imgesSrc[imgesSrc.indexOf(src) + 1];

      //hide the next button when the imges are done
      if (sorce === imgesSrc[imgesSrc.length - 1]) {
        next.style.display = "none";
      }
    }
  });
  titleImg.src = sorce;
});

// start with previos

previous.addEventListener("click", () => {
  next.style.display = "block";

  let titleImg = document.querySelector(".title-img");

  let sorce;

  imgesSrc.forEach((src) => {
    if (src === titleImg.src) {
      sorce = imgesSrc[imgesSrc.indexOf(src) - 1];
    }
  });
  titleImg.src = sorce;

  if (document.querySelector(".title-img").src === imgesSrc[0]) {
    previous.style.display = "none";
  }
});

// end with previos

// end show next and previos img when click on one of the buttons

// start show the orders in the cart when click on the cart img
let cartImg = document.querySelector("img.cart");

//define the cart div
let cartDiv = document.querySelector(".orders");

cartImg.addEventListener("click", () => {
  cartDiv.classList.toggle("show");
});
// end show the orders in the cart when click on the cart img

// start with plus and minus

let plus = document.querySelector(".plus");

let minus = document.querySelector(".minus");

let counter = document.querySelector("span.counter");

let notification = document.querySelector(".notification");

window.onload = function () {
  if (+counter.textContent === 0) {
    minus.style.opacity = "0";
    minus.style.pointerEvents = "none";
  }
};

//plus
plus.addEventListener("click", () => {
  counter.textContent = +counter.textContent + 1;
  if (counter.textContent > 0) {
    minus.style.opacity = "1";
    minus.style.pointerEvents = "inherit";
  }
});

//minus
minus.addEventListener("click", () => {
  counter.textContent = +counter.textContent - 1;
  if (+counter.textContent === 0) {
    minus.style.opacity = "0";
    minus.style.pointerEvents = "none";
  }
});
// end with plus and minus

// start  change the vlaue of notification when clickon the add button
let addButton = document.querySelector(".button");
addButton.addEventListener("click", () => {
  notification.textContent = counter.textContent;

  let para = document.querySelector(".para");

  if (counter.textContent > 0) {
    let orderContent = document.querySelector(".orderContent");
    //start  remove the children from  orderContent

    [...orderContent.children].forEach((e) => {
      e.remove();
    });

    //end  remove the children from  orderContent

    // hide the paragraph
    // document.querySelector("p.para").style.display = "none";

    // start adding the order to the order box when click on the button

    // start creatting the orderbox

    let orderBox = document.createElement("div");

    orderBox.classList.add("orderBox");

    // start creating the children

    //start creat the img
    let orderImg = document.createElement("img");
    orderImg.classList.add("orderImg");
    orderImg.src = document.querySelector(".title-img").src;
    //end creat the img

    // start creat the text and price div
    let textandPrice = document.createElement("div");
    textandPrice.classList.add("textandPrice");

    //start  creat the children of the text and price

    let boxorderPara = document.createElement("p");
    boxorderPara.classList.add("boxorderPara");
    boxorderPara.textContent = "Fall Limited Edition Sneakers";
    //end  creat the children of the text and price

    // start append the children to the parnt

    textandPrice.append(boxorderPara);

    //end  append the children to the parnt

    // end creat the text and price div

    // start create the final prices

    let finalPrice = document.createElement("div");
    finalPrice.classList.add("finalPrice");

    //start final price children

    let priceSpan = document.createElement("span");
    priceSpan.classList.add("priceSpan");

    priceSpan.textContent = "$125.00";

    let amount = document.createElement("span");
    amount.classList.add("amount");

    amount.textContent =
      "x" + document.querySelector("span.counter").textContent;

    let tottalPrice = document.createElement("span");
    tottalPrice.classList.add("tottalPrice");

    tottalPrice.textContent = `$${(amount.textContent.slice(1) * 125).toFixed(
      2
    )}`;

    //appen them to the finalPrice

    finalPrice.append(priceSpan);
    finalPrice.append(amount);
    finalPrice.append(tottalPrice);

    //append the finalPrice to text and price div

    textandPrice.append(finalPrice);

    // end final price children

    // end create the final prices

    // end creatting the orderbox

    //append the boxorderPara

    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-trash", "trash");

    orderBox.append(orderImg);
    orderBox.append(textandPrice);

    // appen the trash icon
    orderBox.append(icon);

    //append the orderbox to the content
    orderContent.append(orderBox);

    // end adding the order to the order box when click on the button

    // start remove the order
    document.querySelector(".trash").addEventListener("click", () => {
      [...orderContent.children].forEach((e) => {
        e.remove();
      });
      document.querySelector("span.notification").textContent = 0;
      document.querySelector("span.counter").textContent = 0;
      document.querySelector(".minus").style.cssText =
        "opacity:0; pointerEvents:none;";

      orderContent.append(para);
    });
    // end remove the order
  }
});

// /// the i trash
// <i class="fa-solid fa-trash"></i>;
// /// the i  trash
