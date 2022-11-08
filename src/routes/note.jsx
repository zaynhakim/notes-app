import { Form, useLoaderData, json } from "react-router-dom";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { getNote, showFormattedDate } from "../notes";

export async function loader({ params }) {
  const note = await getNote(params.noteId);
  if (!note) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found"
    });
  }
  if (note.body) {
    const noteBody = marked(note.body);
    const body = DOMPurify.sanitize(noteBody);
    return json({ note, body });
  }
  return json({ note });
}

export default function Note() {
  const { note, body } = useLoaderData();

  return (
    <article className="detail">
      <div className="fr-space-between">
        <h2>{note?.title ? note.title : "untitled"}</h2>
        <div className="dropdown-container" tabIndex="-1">
          <div className="three-dots" />
          <div className="dropdown">
            <div>click here for a scam</div>
            <div>even more scams</div>
            <div>still some money left?</div>
          </div>
        </div>
      </div>

      <p className="timestamp">{showFormattedDate(note?.createdAt, "id-ID")}</p>
      <div className="note-body" dangerouslySetInnerHTML={{ __html: body }} />
      <div className="form-action">
        <Form action="edit">
          <button className="button secondary" type="submit">
            Edit
          </button>
        </Form>
        <Form
          method="post"
          action="destroy"
          onSubmit={(event) => {
            if (!confirm("Please confirm you want to delete this record.")) {
              event.preventDefault();
            }
          }}
        >
          <button className="button secondary" type="submit">
            Delete
          </button>
        </Form>
      </div>
    </article>
  );
}
