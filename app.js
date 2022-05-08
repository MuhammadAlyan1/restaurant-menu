const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

let menuItems = document.querySelector(".menu-items");
let allBtn = document.querySelector("#all");
let breakfastBtn = document.querySelector("#breakfast");
let lunchBtn = document.querySelector("#lunch");
let shakesBtn = document.querySelector("#shakes");
let dinnerBtn = document.querySelector("#dinner");

let buttons = [allBtn, breakfastBtn, lunchBtn, shakesBtn, dinnerBtn];

window.addEventListener("DOMContentLoaded", () => {
  menu.forEach(showMenuItems);
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    menuItems.innerHTML = "";

    e.target.classList.add("active");

    for (let btn of buttons) {
      if (btn.id !== e.target.id) {
        btn.classList.remove("active");
      }
    }

    if (e.target.id === "all") {
      menu.forEach(showMenuItems);
    } else {
      menu
        .filter((item) => item.category === e.target.id)
        .forEach(showMenuItems);
    }
  });
});

function showMenuItems(item) {
  menuItems.innerHTML += `
    <section class="menu-item">
        <div class="image-div">
          <img src="${item.img}" alt="menu-item" />
        </div>
        <div class="content-div">
          <div class="title-price">
            <p id="title">${item.title}</p>
            <p id="price">$${item.price}</p>
          </div>
          <p id="description">${item.desc}</p>
        </div>
      </section>
`;
}
