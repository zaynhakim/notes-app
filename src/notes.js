/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

const starterNotes = [
  {
    id: "note-001",
    title: "What is Tabindex?",
    description:
      "The `tabindex` global attribute indicates that its element can be focused, and where it participates in sequential keyboard navigation (usually with the Tab key, hence the name).",
    body: "### tabindex\nThe `tabindex` global attribute indicates that its element can be focused, and where it participates in sequential keyboard navigation (usually with the Tab key, hence the name).",
    createdAt: 1667028916689,
  },
  {
    id: "note-002",
    title: "Vanilla CSS is Awesome!",
    description:
      "Did you know that you can create an artwork just using vanilla CSS in an HTML file?",
    body: "### Write your own CSS artwork now!\nGrab your keyboard and start creating awesome art!",
    createdAt: 1667028916687,
  },
];

export async function getNotes(query) {
  await fakeNetwork(`getNotes:${query}`);
  let notes = await localforage.getItem("notes");
  if (!notes) notes = starterNotes;
  await set(starterNotes);
  if (query) {
    notes = matchSorter(notes, query, { keys: ["createdAt", "title"] });
  }
  return notes.sort(sortBy("title", "createdAt"));
}

export async function createNote() {
  await fakeNetwork();
  const id =
    Math.random().toString(36).substring(2, 4) +
    Date.now().toString(36) +
    Math.random().toString(36).substring(5, 7);
  const note = { id, createdAt: Date.now() };
  const notes = await getNotes();
  notes.unshift(note);
  await set(notes);
  return note;
}

export async function getNote(id) {
  await fakeNetwork(`note:${id}`);
  const notes = await localforage.getItem("notes");
  const note = notes.find((note) => note.id === id);
  return note ?? null;
}

export async function updateNote(id, updates) {
  await fakeNetwork();
  const notes = await localforage.getItem("notes");
  const note = notes.find((note) => note.id === id);
  if (!note) throw new Error("No note for", id);
  Object.assign(note, updates);
  await set(notes);
  return note;
}

export async function deleteNote(id) {
  const notes = await localforage.getItem("notes");
  const index = notes.findIndex((note) => note.id === id);
  if (index > -1) {
    notes.splice(index, 1);
    await set(notes);
    return true;
  }
  return false;
}

function set(notes) {
  return localforage.setItem("notes", notes);
}

let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  return new Promise((resolve) => {
    setTimeout(resolve, Math.random() * 1);
  });
}

export const showFormattedDate = (date, locale) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(locale, options);
};
