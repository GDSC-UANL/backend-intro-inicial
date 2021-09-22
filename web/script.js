const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const notesContainer = document.getElementById("notes");

async function getNotes() {

}

async function addNote() {

}

async function deleteNote(id) {

}

async function updateNote(note) {
  
}

function addNoteToHTML(note) {
  const cardContainer = document.createElement("div");
  const card = document.createElement("div");
  const cardContent = document.createElement("div");

  cardContainer.classList.add("col", "xl6", "s12", "offset-xl3");
  card.classList.add("card");
  cardContent.classList.add("card-content");

  card.appendChild(cardContent);
  cardContainer.appendChild(card);

  const title = document.createElement("span");
  const date = document.createElement("p");
  const formattedDate = new Date(note.datePublished);
  const content = document.createElement("span");
  const cardActions = document.createElement("div");
  const deleteBtn = document.createElement("a");
  const updateBtn = document.createElement("a");

  cardActions.classList.add("card-action");
  title.classList.add("card-title");
  title.innerHTML = note.title;
  content.innerHTML = note.content;
  date.innerHTML = "<br>Creado el " + formattedDate.toLocaleDateString("es-MX");
  content.contentEditable = true;
  title.contentEditable = true;

  title.addEventListener("input", (val) => {
    note.title = val.target.innerHTML;
  });
  content.addEventListener("input", (val) => {
    note.content = val.target.innerHTML;
  });

  deleteBtn.innerHTML = "ELIMINAR NOTA";
  deleteBtn.classList.add("indigo-text");
  deleteBtn.href = "#";
  deleteBtn.onclick = () => deleteNote(note.id);

  updateBtn.innerHTML = "ACTUALIZAR NOTA";
  updateBtn.classList.add("indigo-text");
  updateBtn.href = "#";
  updateBtn.onclick = () => updateNote(note);

  cardActions.appendChild(deleteBtn);
  cardActions.appendChild(updateBtn);

  cardContent.appendChild(title);
  cardContent.appendChild(content);
  cardContent.appendChild(date);
  card.appendChild(cardActions);

  notesContainer.appendChild(cardContainer);
}

