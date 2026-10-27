// Builds the people cards and image galleries from the lists in js/data.js.
// A page opts in with an empty container:
//   <div class="people" id="people"></div>            -> pastors
//   <div class="team" data-team="coordinators"></div> -> any list in `team`
//   <div class="gallery" data-gallery="mtpic"></div>  -> any list in `galleries`

const memberCard = p => `
  <div class="member${p.featured ? " featured" : ""}">
    <img loading="lazy" src="${TEAM + p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.role}</p>
  </div>`;

const peopleEl = document.getElementById("people");
if (peopleEl) peopleEl.innerHTML = pastors.map(memberCard).join("");

document.querySelectorAll("[data-team]").forEach(el => {
  el.innerHTML = team[el.dataset.team].map(memberCard).join("");
});

document.querySelectorAll("[data-gallery]").forEach(el => {
  galleries[el.dataset.gallery].forEach((id, i) => {
    const btn = document.createElement("button");
    btn.innerHTML = `<img loading="lazy" src="${IMG + id}" alt="${el.dataset.gallery} image ${i + 1}">`;
    el.appendChild(btn);
  });
});
