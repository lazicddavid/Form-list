const form = document.getElementById("birthdayForm");
const list = document.getElementById("addedList");
const nameEl = document.getElementById("name");
const lastEl = document.getElementById("last-name");
const imgEl = document.getElementById("imageUrl");

let birthdays = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!nameEl.value || !lastEl.value || !imgEl.value) return;

  // 1) Dodaj u array
  birthdays.push({
    name: nameEl.value,
    lastName: lastEl.value,
    img: imgEl.value,
  });

  // 2) Prikaži ceo array forEach-om
  list.innerHTML = "";
  birthdays.forEach((p) => {
    const li = document.createElement("li");
    li.className = "person";

    const img = document.createElement("img");
    img.className = "avatar";
    img.src = p.img;
    img.alt = `${p.name} ${p.lastName}`;

    const nameLast = document.createElement("span");
    nameLast.className = "name-lastName";
    nameLast.textContent = `${p.name} ${p.lastName}`;

    li.appendChild(img);
    li.appendChild(nameLast);
    list.appendChild(li);
  });

  form.reset();
});
