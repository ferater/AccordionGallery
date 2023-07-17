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
    let accordions = this.accordionContainer.querySelectorAll(".accordion");
    accordions.forEach((item, index) => {
      index == this.firstActive ? item.classList.add("active") : null;
      item.addEventListener("click", () => {
        this.removeActive(accordions, item);
        item.classList.toggle("active");
      });
    });
  };

  removeActive = (arr, obj) => {
    arr.forEach((item) => {
      if (item !== obj) {
        item.classList.remove("active");
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
