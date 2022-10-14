let ratingButtons = document.querySelectorAll("main > ul > li");
let submitButton = document.querySelector("button");
let ratingValue = 0;

ratingButtons.forEach((rate) => {
  rate.addEventListener("click", () => {
    changeBackgroundColor(rate);
  });
});

function changeBackgroundColor(rate) {
  let darkBlueColor = "very-dark-blue-bg";
  let orangeColor = "var(--primary-orange)";

  if (rate.className === darkBlueColor) {
    rate.className = "";
    rate.style.backgroundColor = orangeColor;
    ratingValue = rate.innerText;
    ratingButtons.forEach((element) => {
      if (element !== rate) {
        element.className = darkBlueColor;
      }
    });
  } else {
    rate.className = darkBlueColor;
    ratingValue = 0;
  }
}

submitButton.addEventListener("click", () => {
  changeState();
});

function changeState() {
  let starContainer = document.querySelector("main > div");
  let image = document.querySelector("img");
  let title = document.querySelector("h1");
  let rating = document.querySelector("#rating");
  let message = document.querySelector("#message");
  let ratingContainer = document.querySelector("ul");


  title.innerText = "Thank you!";
  rating.innerText = "You selected " + ratingValue + " out of 5";

  changeDisplayToBlock(image);
  changeDisplayToBlock(rating);

  changeDisplayToNone(starContainer);
  changeDisplayToNone(ratingContainer);
  changeDisplayToNone(submitButton);

  changeTextAlignToCenter(title);
  changeTextAlignToCenter(message);

  message.innerText =
    "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
}

function changeDisplayToNone(element){
  element.style.display = "none";
}

function changeDisplayToBlock(element){
  element.style.display = "block";
}

function changeTextAlignToCenter(element){
  element.style.textAlign = "center";
}
