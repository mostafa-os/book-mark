let first = document.querySelectorAll(".options div"),
  contents = document.querySelectorAll(".content");

first.forEach((el) => {
  el.addEventListener("click", () => {
    first.forEach((element) => {
      element.classList.remove("active");
    });
    el.classList.contains("active") === false ? el.classList.add("active") : "";

    contents.forEach((ele) => {
      ele.classList.contains("d-none") === false
        ? ele.classList.add("d-none")
        : "";
      ele.getAttribute("data-index") === el.getAttribute("data-index")
        ? ele.classList.remove("d-none")
        : "";
    });
  });
});

let ques = document.querySelectorAll(".ask>div");

ques.forEach((el) => {
  el.addEventListener("click", () => {
    !el.classList.contains("h-fit")
      ? el.classList.add("h-fit")
      : el.classList.remove("h-fit");
  });
});

let form = document.querySelector("form"),
  div = document.querySelector("form > div");
(mail = document.querySelector("form input.mail")),
  (icon = document.querySelector("form i")),
  (error = document.querySelector(".error")),
  (input = document.querySelector("form > input"));

form.onsubmit = function (e) {
  let re = /\w+@gmail.com/gi;
  if (!re.test(mail.value) || mail.value === null) {
    e.preventDefault();
    if (window.innerWidth >= 640) {
      div.style.transform = "translateY(13.5px)";
    }
    mail.style.borderColor = "hsl(0, 94%, 66%)";
    icon.style.display = "inline";
    error.style.display = "flex";
  }
};

input.addEventListener("click", (e) => {
  let re = /\w+@gmail.com/gi;
  if (!re.test(mail.value) || mail.value === null) {
    e.preventDefault();
    if (window.innerWidth >= 640) {
      div.style.transform = "translateY(13.5px)";
    }
    mail.style.borderColor = "hsl(0, 94%, 66%)";
    icon.style.display = "inline";
    error.style.display = "flex";
  }
});
