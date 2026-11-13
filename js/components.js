import { icon } from "./icons.js";
export const money = (cur, n) => cur + n.toLocaleString("en-IN");

export const featureCard = (f, i) => `
  <article class="card feature reveal" style="--d:${i * 90}ms">
    <span class="ico">${icon(f.icon, 28)}</span><h3>${f.title}</h3><p>${f.text}</p>
  </article>`;

export const stepCard = (s, i) => `
  <article class="step reveal" style="--d:${i * 110}ms">
    <span class="ico">${icon(s.icon, 26)}</span><b>${i + 1}. ${s.title}</b><p>${s.text}</p>
  </article>`;

export const cakeCard = (c, cur, i) => `
  <article class="card cake reveal" style="--d:${i * 110}ms">
    <div class="photo"><img src="${c.image}" alt="${c.name}" loading="lazy" onerror="this.style.visibility='hidden'">
      <span class="badge">${c.badge || ""}</span></div>
    <div class="body"><h3>${c.name}</h3><p>${c.description}</p>
      <ul class="chips">${c.options.map(o => `<li>${o.label} <b>${money(cur, o.price)}</b></li>`).join("")}</ul>
      <button class="btn btn-green" data-cake="${c.id}">${icon("cake", 18)} Order this</button></div>
  </article>`;
