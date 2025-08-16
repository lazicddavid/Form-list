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

// Prazan niz
let birthdays = [];

function addBirthday(person) {
  const li = document.createElement("li");
  li.className = "person";
  li.setAttribute("data-id", person.id);
  li.innerHTML = `
    <img class="avatar" src="${person.img}">
    <span>${person.name} ${person.lastName}</span>
    <button class="remove-btn">X</button>
  `;
  list.appendChild(li);
}

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-btn")) {
    const li = e.target.parentElement;
    const id = Number(li.getAttribute("data-id"));
    birthdays = birthdays.filter((person) => person.id !== id);
    li.remove();
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = nameEl.value.trim();
  const lastName = lastEl.value.trim();
  const img = imgEl.value.trim();
  if (!name || !lastName || !img) return;

  const person = {
    id: Date.now(),
    name: name,
    lastName: lastName,
    img: img,
  };

  birthdays.push(person);
  addBirthday(person);
  form.reset();
});
