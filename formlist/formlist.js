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
}
