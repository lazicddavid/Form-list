const form = document.getElementById("birthdayForm");
const list = document.getElementById("addedList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const lastName = document.getElementById("last-name").value;
  const imageUrl = document.getElementById("imageUrl").value;

  if (!name || !lastName || !imageUrl) {
    alert("Popunite podatke!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <img src="${imageUrl}" width="40" height="40" style="border-radius:50%; object-fit:cover; margin-right:8px;">
    ${name} ${lastName}
  `;
  list.appendChild(li);

  form.reset();
});
