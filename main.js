// import "./sass/main.scss";
("use strict");

let ratings = document.querySelectorAll("[data-rating]");
let num = 1;
ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    num = parseInt(rating.getAttribute("data-value"));
    activeNumber();
    submitRating(event);
  });
});

function activeNumber() {
  // remove all active
  ratings.forEach((remove) => {
    remove.classList.remove("active");
  });

  // add class active
  ratings[num - 1].classList.add("active");
}

function submitRating(event) {
  let values = event.target.dataset.value;
  let stars = Array.from({ length: values }, (v, i) => i + 1);
  stars.forEach((star) => {
    let message = document.querySelector("[data-message]");
    let submit = document.querySelector("[data-submit]");

    submit.addEventListener("click", () => {
      message.innerHTML = `
        <div class="card">
          <div>
            <img
              class="margin-block-start-3 margin-block-end-7 margin-in"
              src="./images/illustration-thank-you.svg"
              alt="icon star" />
          </div>
          <button
            class="radius-extra-large bg-neutral-dark-blue padding-3 clr-primary-orange margin-block-end-6">
            You selected ${star} out of 5
          </button>
          <h2 class="heading-2 padding-block-end-3">Thank you!</h2>
          <p class="padding-block-end-7 clr-neutral-light-grey">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
        </div>
    `;
    });
  });
}
