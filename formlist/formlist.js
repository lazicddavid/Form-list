//pokusaj da ne koristis render metodu
//umesto toga kad dodas rodjendan u array, dodaj jedan rodjendan na ekran
//kad izbrises rodjendan, izbrisi samo taj rodjenda sa ekran
//umesto check box-a stavi button x;
//iskoristi innerHTML da popunis html novog rodjendan

// Selektori
const form = document.getElementById("birthdayForm");
const list = document.getElementById("addedList");
const nameEl = document.getElementById("name");
const lastEl = document.getElementById("last-name");
const imgEl = document.getElementById("imageUrl");
const nameEl
// Prazan niz
let birthdays = [];

// Dodaj jedan rođendan u DOM
function addBirthday(p) {
  const li = document.createElement("li");
  li.className = "person";
  li.dataset.id = p.id;
  li.innerHTML = `
    <img class="avatar" src="${p.img}" alt="${p.name} ${p.lastName}">
    <span class="name-lastName">${p.name} ${p.lastName}</span>
    <button class="remove-btn"   type="button"   title="Remove">×</button>
  `;
  list.appendChild(li);
}

// Brisanje samo jednog reda (delegacija)
list.addEventListener("click", (e) => {
  if (!e.target.classList.contains("remove-btn")) return;
  const li = e.target.closest("li");
  const id = Number(li.dataset.id);
  birthdays = birthdays.filter((x) => x.id !== id);
  li.remove();
});

// Dodavanje u niz + prikaz jednog reda
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameEl.value.trim();
  const lastName = lastEl.value.trim();
  const img = imgEl.value.trim();
  if (!name || !lastName || !img) return;

  const p = { id: Date.now(), name, lastName, img };
  birthdays.push(p); // 1) dodaj u niz
  addBirthday(p); // 2) dodaj jedan red na ekran
  form.reset();
});
