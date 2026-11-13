import { CONFIG as C } from "../data/config.js";
import { CAKES } from "../data/cakes.js";
import { icon } from "./icons.js";
import { money, featureCard, stepCard, cakeCard } from "./components.js";

const $ = id => document.getElementById(id);
const wa = text => `https://wa.me/${C.whatsapp}${text ? "?text=" + encodeURIComponent(text) : ""}`;
const toast = msg => { const t = $("toast"); t.textContent = msg; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 2500); };

function renderStatic() {
  document.title = C.shopName;
  document.querySelectorAll("[data-shop]").forEach(e => e.textContent = C.shopName);
  $("tagline").textContent = C.tagline;
  $("features").innerHTML = C.features.map(featureCard).join("");
  $("steps").innerHTML = C.steps.map(stepCard).join("");
  $("menu").innerHTML = CAKES.map((c, i) => cakeCard(c, C.currency, i)).join("");
  $("allergen").textContent = C.allergenNote;
  $("delivery").textContent = C.deliveryNote;
  $("upi").textContent = C.upiId;
  $("advance").textContent = `Pay ${C.advancePercent}% advance to confirm, then send the screenshot on WhatsApp.`;
  document.querySelectorAll("[data-icon]").forEach(e => e.innerHTML = icon(e.dataset.icon, +e.dataset.size || 22));
  document.querySelectorAll("[data-wa]").forEach(e => e.href = wa("Hello! I'd like to know more about your cakes."));
  const logo = $("logo"); logo.onload = () => { logo.hidden = false; $("logoIcon").hidden = true; }; logo.src = C.logoImage;
  const qr = $("qr"); qr.onload = () => { qr.hidden = false; $("qrEmpty").hidden = true; }; qr.src = C.qrImage;
}

function setupOrder() {
  const cake = $("cake"), size = $("size"), qty = $("qty"), date = $("date");
  const cur = () => CAKES.find(c => c.id === cake.value);
  const total = () => { const t = cur().options[size.value].price * (+qty.value || 1);
    $("total").textContent = "Total: " + money(C.currency, t); return t; };
  const sizes = () => { size.innerHTML = cur().options.map((o, i) => `<option value="${i}">${o.label} - ${money(C.currency, o.price)}</option>`).join(""); total(); };
  cake.innerHTML = CAKES.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
  cake.onchange = sizes; size.onchange = total; qty.oninput = total; sizes();

  const min = new Date(); min.setDate(min.getDate() + C.noticeDays);
  date.min = min.toISOString().slice(0, 10); date.max = C.orderCutoff;
  $("dateNote").textContent = `Pick a date up to ${C.orderCutoff}. Minimum ${C.noticeDays} days' notice.`;

  $("menu").addEventListener("click", e => {
    const b = e.target.closest("[data-cake]"); if (!b) return;
    cake.value = b.dataset.cake; sizes(); $("order").scrollIntoView({ behavior: "smooth" });
  });
  $("send").onclick = () => {
    if (!$("name").value.trim() || !date.value) return toast("Please enter your name and date needed");
    const c = cur(), o = c.options[size.value], t = total();
    window.open(wa(`Hello ${C.shopName}, I'd like to order:\nName: ${$("name").value.trim()}\nCake: ${c.name} (${o.label}) x ${qty.value}\nDate needed: ${date.value}\nNotes: ${$("notes").value.trim() || "-"}\nTotal: ${money(C.currency, t)}\nAdvance (${C.advancePercent}%): ${money(C.currency, Math.round(t * C.advancePercent / 100))}`), "_blank");
  };
  $("copy").onclick = () => navigator.clipboard.writeText(C.upiId).then(() => toast("UPI ID copied"));
}

function effects() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .15 });
  document.querySelectorAll(".reveal").forEach(e => io.observe(e));
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  $("snow").innerHTML = Array.from({ length: 26 }, () =>
    `<i style="left:${Math.random() * 100}%;--s:${4 + Math.random() * 6}px;animation-duration:${8 + Math.random() * 10}s;animation-delay:-${Math.random() * 14}s"></i>`).join("");
}

renderStatic(); setupOrder(); effects();
