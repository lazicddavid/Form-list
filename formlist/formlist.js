//pokusaj da ne koristis render metodu
//umesto toga kad dodas rodjendan u array, dodaj jedan rodjendan na ekran
//kad izbrises rodjendan, izbrisi samo taj rodjenda sa ekran
//umesto check box-a stavi button x;
//iskoristi innerHTML da popunis html novog rodjendan

const form = document.getElementById("birthdayForm");
const list = document.getElementById("addedList");
const nameEl = document.getElementById("name");
const lastEl = document.getElementById("last-name");
const imgEl = document.getElementById("imageUrl");

let birthdays = [];

function render() {
  list.innerHTML = "";

  birthdays.forEach((p) => {
    const li = document.createElement("li");
    li.innerHTML = `<div class="birthday`>
    li.className = "person";

    const img = document.createElement("img");
    img.className = "avatar";
    img.src = p.img;

    const nameLast = document.createElement("span");
    nameLast.className = "name-lastName";
    nameLast.textContent = `${p.name} ${p.lastName}`;

    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "remove-check";
    check.title = "Remove";

    check.addEventListener("change", () => {
      birthdays = birthdays.filter((item) => item.id !== p.id);
      render();
    });

    li.appendChild(img);
    li.appendChild(nameLast);
    li.appendChild(check);
    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!nameEl.value || !lastEl.value || !imgEl.value) return;

  birthdays.push({
    id: Date.now(),
    name: nameEl.value,
    lastName: lastEl.value,
    img: imgEl.value,
  });

  render();
  form.reset();
});

form