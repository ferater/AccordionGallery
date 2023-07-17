import { firstActive, data } from "./data.js";
class Accordion {
  constructor(accordionContainer, firstActive, data) {
    this.accordionContainer = accordionContainer;
    this.firstActive = firstActive;
    this.data = data;
  }

  init() {
    this.populateAccordions();
    this.expandAccordion();
  }

  expandAccordion = () => {
    let accordions = document.querySelectorAll(".accordion .pic");
    accordions.forEach((accordion, index) => {
      index == this.firstActive
        ? accordion.parentElement.classList.add("active")
        : null;
      accordion.addEventListener("click", () => {
        this.removeActive(accordions, accordion);
        accordion.parentElement.classList.toggle("active");
      });
    });
  };

  removeActive = (arr, obj) => {
    arr.forEach((item) => {
      if (item !== obj) {
        item.parentElement.classList.remove("active");
      }
    });
  };

  populateAccordions = () => {
    accordionContainer.innerHTML = this.data
      .map((accordion) => {
        return `
      <div class="accordion">
        <div class="pic rounded p-rel">
          <img src="${accordion.pic}" alt="${accordion.name}" class="avatar" />
            <div class="social p-abs rounded d-grid">
            <span class="iconify icon-social x-g-center y-g-center"
          data-icon="${accordion.social}"
        ></span>
          </div>
          </div>
          <div class="detail">
          <h3>${accordion.name}</h3>
          <span class="sub-header">${accordion.slogan}</span>
          <p>${accordion.story}</p>
          </div>
          </div>`;
      })
      .join("");
  };
}

const accordionContainer = document.querySelector(".accordion-container");

const app = new Accordion(accordionContainer, firstActive, data);
window.onload = app.init();
