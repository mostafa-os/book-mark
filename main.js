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
