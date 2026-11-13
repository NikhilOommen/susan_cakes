// CAKE MENU - change prices, add or remove cakes here.
// To add a cake, copy one block. Photo: put the file in /images and set "image".
export const CAKES = [
  { id: "plum", name: "Christmas Plum Cake", badge: "Bestseller", image: "images/plum.svg",
    description: "Rich, dark fruit cake soaked in spices and cashews (dummy text).",
    options: [{ label: "500 g", price: 600 }, { label: "1 kg", price: 1100 }] },
  { id: "butter", name: "Butter Cake", badge: "Classic", image: "images/butter.svg",
    description: "Soft, golden and buttery, perfect with tea (dummy text).",
    options: [{ label: "500 g", price: 400 }, { label: "1 kg", price: 750 }] },
  { id: "treats", name: "Cookies & Treats", badge: "New", image: "images/treats.svg",
    description: "Festive cookies in gift boxes (dummy text).",
    options: [{ label: "Box of 10", price: 250 }, { label: "Box of 20", price: 450 }] }
];
