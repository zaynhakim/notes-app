/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import { useLoaderData, useNavigate, Form, redirect } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import { getNote, updateNote } from "../notes";

export function loader({ params }) {
  return getNote(params.noteId);
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateNote(params.noteId, updates);
  return redirect(`/notes/${params.noteId}`);
}

export default function Edit() {
  const note = useLoaderData();
  const navigate = useNavigate();
  const [value, setValue] = useState(note?.body || "");

  return (
    <Form method="post" id="note-form">
      <section className="page-section">
        <div className="note-editor">
          <label htmlFor="title">
            Title
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Note title"
              defaultValue={note.title}
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              type="text"
              name="description"
              id="description"
              className="input"
              placeholder="Note description"
              defaultValue={note?.description || ""}
            />
          </label>
          <label htmlFor="body">
            Body
            {/* <div
              id="body"
              className="input inputarea"
              contentEditable
              onInput={(e) => setValue(e.target.innerHTML)}
              suppressContentEditableWarning
            >
              {value}
            </div>
            <input type="hidden" name="body" value={value} /> */}
            <MDEditor
              value={value}
              onChange={setValue}
              textareaProps={{ name: "body", id: "body" }}
              previewOptions={{ rehypePlugins: [[rehypeSanitize]] }}
              className="editor"
              height={300}
            />
          </label>
          <div className="form-action">
            <button className="button primary" type="submit">
              Save
            </button>
            <button
              className="button secondary"
              type="button"
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </section>
    </Form>
  );
}
