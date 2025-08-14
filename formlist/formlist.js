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

function addBirthday(p) {
  const li = document.createElement("li");
  li.className = "person";
  lidataset.id = personalbar.id;
  li.innerHTML = `
    <img class="avatar" src="${p.img}" alt="${p.name} ${p.lastName}">
    <span class="name-lastName">${p.name} ${p.lastName}</span>
    <button class="remove-btn" title="Remove">×</button>
  `;
  list.appendChild(li);
}

list.addEventListener("click", (e) => {
  if (!e.target.classList.contains("remove-btn")) return;
  const li = e.target.closest("li");
  const id = Number(li.dataset.id);
  birthdays = birthdays.filter((x) => x.id !== id);
  li.remove();
});

  const p = { id: Date.now(), name, lastName, img };
  birthdays.push(p);     
  addBirthday(p);        
  form.reset();
});
