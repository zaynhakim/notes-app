import { Link, Form, redirect, useLoaderData } from "react-router-dom";
import { createNote, getNotes, showFormattedDate } from "../notes";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const notes = await getNotes(q);
  return { notes, q };
}

export async function action() {
  const note = await createNote();
  return redirect(`/notes/${note.id}/edit`);
}

export default function Home() {
  const { notes } = useLoaderData();

  return (
    <div className="container">
      <div className="content-header">
        <h1 className="annotation">Your Notes</h1>
        <Form method="post">
          <button type="submit" className="button primary">
            New
          </button>
        </Form>
      </div>
      <div className="cards">
        {notes.length ? (
          notes.map((note) => (
            <Link
              to={`notes/${note.id}`}
              key={note.id}
              className="card no-decoration color-inherit hover-accent"
            >
              <article>
                <h2 className="card-title">
                  {note.title ? note.title : "untitled"}
                </h2>
                <p className="timestamp">
                  {showFormattedDate(note.createdAt, "id-ID")}
                </p>
                <div className="card-body">
                  {note.description ? note.description : ""}
                </div>
              </article>
            </Link>
          ))
        ) : (
          <p>Try to create a note</p>
        )}
      </div>
    </div>
  );
}
