// SHOP SETTINGS - edit only this file for shop details
export const CONFIG = {
  shopName: "Susan's Cakes",
  tagline: "Homemade cakes, baked fresh for your Christmas table",
  whatsapp: "919446871029",        // country code + number, no + or spaces
  upiId: "yourname@upi",           // DUMMY - replace
  qrImage: "images/upi-qr.png",    // put your QR here with this name
  logoImage: "images/logo.png",    // put your logo here with this name (optional)
  currency: "₹",
  orderCutoff: "2026-12-20",       // DUMMY - last date customers can pick
  noticeDays: 2,
  advancePercent: 50,
  deliveryNote: "Pickup or local delivery (details to be added).",
  allergenNote: "Our cakes may contain nuts, eggs, milk and gluten.",
  features: [  // icon names come from js/icons.js
    { icon: "home",  title: "Homemade",       text: "Baked in a home kitchen, never mass produced." },
    { icon: "heart", title: "Made with love", text: "Real butter, fresh fruit and no shortcuts." },
    { icon: "clock", title: "Fresh to order", text: "Your cake is baked for your date." },
    { icon: "truck", title: "Easy pickup",    text: "Pickup or local delivery." }
  ],
  steps: [
    { icon: "cake",     title: "Choose",  text: "Pick a cake and size." },
    { icon: "whatsapp", title: "Book",    text: "Send your order on WhatsApp." },
    { icon: "wallet",   title: "Pay",     text: "Pay the advance by UPI." },
    { icon: "check",    title: "Enjoy",   text: "Collect your fresh cake." }
  ]
};
