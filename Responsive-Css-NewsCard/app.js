let cards = [
  {
    img: "./images/img1.jpg",
    title: "Amazing First Title",
    date: "Jan 29, 2018",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur",
    readMore: "Read more"
  },
  {
    img: "./images/img2.jpg",
    title: "Amazing Second Title that is Quite Long",
    date: "Jan 29, 2018",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur",
    readMore: "Read more"
  },
  {
    img: "./images/img3.jpg",
    title: "Amazing Title",
    date: "Jan 29, 2018",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur",
    readMore: "Read more"
  },
  {
    img: "./images/img4.jpg",
    title: "Amazing Forth Title that is Quite Long",
    date: "Jan 29, 2018",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur",
    readMore: "Read more"
  },
  {
    img: "./images/img5.jpg",
    title: "Amazing Fifth Title",
    date: "Jan 29, 2018",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur",
    readMore: "Read more"
  },
  {
    img: "./images/img6.jpg",
    title: "Amazing 6<sup>th</sup> Title",
    date: "Jan 29, 2018",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur",
    readMore: "Read more"
  },
];

const contentWrapper = document.querySelector(".content-wrapper");

window.addEventListener("DOMContentLoaded", function() {
    let card = cards.map(function (item) {

        return `<div class="news-card">
        <a href="#" class="news-card__card-link"></a>
        <img src=${item.img} alt="" class="news-card__image">
        <div class="news-card__text-wrapper">
          <h2 class="news-card__title">${item.title}</h2>
          <div class="news-card__post-date">${item.date}</div>
          <div class="news-card__details-wrapper">
            <p class="news-card__excerpt">${item.description}</p>
            <a href="#" class="news-card__read-more">Read more <i class="fas fa-long-arrow-alt-right"></i></a>
          </div>
        </div>
      </div>`
    }).join("");

    contentWrapper.innerHTML = card;
})

