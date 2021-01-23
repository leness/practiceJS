const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const finishBtn = document.querySelector(".finish");
const contentTitle = document.querySelector(".content-title");
const steps = [...document.querySelectorAll(".step-value")];

console.log(steps);

const MAX = 4;
let current = 1;

previousBtn.addEventListener("click", () => {
  console.log("previous");
  const previousValue = steps[current - 2];
  current -= 1;
  console.log(previousValue);
  previousValue.classList.remove("complete");
  finishBtn.disabled = true;
  nextBtn.disabled = false;

  if (current === 1) {
    previousBtn.disabled = true;
  }
  contentTitle.innerText = `Крок ${current}`;
});

nextBtn.addEventListener("click", () => {
  console.log("next");
  const currentValue = steps[current - 1];
  currentValue.classList.add("complete");
  current += 1;

  previousBtn.disabled = false;
  if (current === MAX) {
    nextBtn.disabled = true;
    finishBtn.disabled = false;
  }
  console.log(currentValue);
  contentTitle.textContent = `Крок ${current}`;
});

finishBtn.addEventListener("click", () => {
  console.log("finish");
  location.reload(); // скидаємо все в нуль, до всіх подій;
});
