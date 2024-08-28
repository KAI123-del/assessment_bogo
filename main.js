let wrapperTag1 = document.getElementById("tagWrapper1");
let wrapperTag2 = document.getElementById("tagWrapper2");
let wrapperTag3 = document.getElementById("tagWrapper3");
let offer1 = document.getElementById("offer_1");
let offer2 = document.getElementById("offer_2");
let offer3 = document.getElementById("offer_3");

let leftChild1 = document.getElementById("leftChild1");
let colorAndSizeEl = document.getElementById("colorAndSize1");
let leftChild2 = document.getElementById("leftChild2");
let colorAndSizeEl2 = document.getElementById("colorAndSize2");
let leftChild3 = document.getElementById("leftChild3");
let colorAndSizeEl3 = document.getElementById("colorAndSize3");

let toggleOffer1 = false;
let toggleOffer2 = false;
let toggleOffer3 = false;

wrapperTag1.addEventListener("click", () => {
  if (toggleOffer1 === false) {
    colorAndSizeEl.style.height = "7rem";
    colorAndSizeEl.style.transitionDuration = "0.8s";
    colorAndSizeEl.style.paddingBottom = "1.5rem";
    if (window.innerWidth > 768) {
      leftChild1.style.width = "0px";
      leftChild1.style.transitionDuration = "0.5s";
      leftChild1.style.display = "block";
      leftChild1.style.padding = "0rem";
      leftChild1.style.fontWeight = 0;
    }
    toggleOffer1 = true;
    offer1.style.border = "2px solid #FF6B82";
  } else {
    colorAndSizeEl.style.height = "0px";
    colorAndSizeEl.style.transitionDuration = "0.8s";
    if (window.innerWidth > 768) {
      leftChild1.style.width = "7rem";
      leftChild1.style.transitionDuration = "0.5s";
      leftChild1.style.display = "flex";
      leftChild1.style.flexDirection = "column";
      leftChild1.style.padding = "1.8rem";
      leftChild1.style.fontWeight = 600;
    }
    toggleOffer1 = false;
    offer1.style.border = "none";
    colorAndSizeEl.style.paddingBottom = "0px";
  }
});

wrapperTag2.addEventListener("click", () => {
  if (toggleOffer2 === false) {
    colorAndSizeEl2.style.height = "7rem";
    colorAndSizeEl2.style.transitionDuration = "0.8s";
    colorAndSizeEl2.style.paddingBottom = "1.5rem";
    if (window.innerWidth > 768) {
      leftChild2.style.width = "0px";
      leftChild2.style.transitionDuration = "0.5s";
      leftChild2.style.display = "block";
      leftChild2.style.padding = "0rem";
      leftChild2.style.fontWeight = 0;
    }
    toggleOffer2 = true;
    offer2.style.border = "2px solid #FF6B82";
  } else {
    colorAndSizeEl2.style.height = "0px";
    colorAndSizeEl2.style.transitionDuration = "0.8s";
    if (window.innerWidth > 768) {
      leftChild2.style.width = "7rem";
      leftChild2.style.transitionDuration = "0.5s";
      leftChild2.style.display = "flex";
      leftChild2.style.flexDirection = "column";
      leftChild2.style.padding = "1.8rem";
      leftChild2.style.fontWeight = 600;
    }
    toggleOffer2 = false;
    colorAndSizeEl2.style.paddingBottom = "0px";
    offer2.style.border = "none";
  }
});

wrapperTag3.addEventListener("click", () => {
  if (toggleOffer3 === false) {
    colorAndSizeEl3.style.height = "7rem";
    colorAndSizeEl3.style.transitionDuration = "0.8s";
    colorAndSizeEl3.style.paddingBottom = "1.5rem";
    if (window.innerWidth > 768) {
      leftChild3.style.width = "0px";
      leftChild3.style.transitionDuration = "0.5s";
      leftChild3.style.display = "block";
      leftChild3.style.padding = "0rem";
      leftChild3.style.fontWeight = 0;
    }
    toggleOffer3 = true;
    offer3.style.border = "2px solid #FF6B82";
  } else {
    colorAndSizeEl3.style.height = "0px";
    colorAndSizeEl3.style.transitionDuration = "0.8s";
    if (window.innerWidth > 768) {
      leftChild3.style.width = "7rem";
      leftChild3.style.transitionDuration = "0.5s";
      leftChild3.style.display = "flex";
      leftChild3.style.flexDirection = "column";
      leftChild3.style.padding = "1.8rem";
      leftChild3.style.fontWeight = 600;
    }
    toggleOffer3 = false;
    colorAndSizeEl3.style.paddingBottom = "0px";
    offer3.style.border = "none";
  }
});
