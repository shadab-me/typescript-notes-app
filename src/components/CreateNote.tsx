import Button from "@restart/ui/esm/Button";
import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { Note } from "../models/note.model";

interface Props {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

export const CreateNote: React.FC<Props> = ({ notes, setNotes }) => {
  const [error, setError] = useState<string>("");
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value == "") {
      return setError("All Field are mandatory");
    }
    setError("");
    let newOb = {
      id: new Date().toString(),
      title: (titleRef.current as HTMLInputElement).value,
      text: (textRef.current as HTMLTextAreaElement).value,
      color: (colorRef.current as HTMLInputElement).value,
      date: new Date().toString(),
    };

    console.log(newOb);
    setNotes([...notes, newOb]);
    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
    (colorRef.current as HTMLInputElement).value = "";
  };

  return (
    <div>
      <h2>Create Notes</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mt-3 mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title for the note"
            ref={titleRef}
          />
        </Form.Group>
        <Form.Group className="mt-3 mb-3" controlId="formBasicText">
          <Form.Label>Text</Form.Label>
          <Form.Control
            placeholder="Enter your notes"
            as="textarea"
            rows={3}
            ref={textRef}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mt-3 mb-3">
          <Form.Label htmlFor="colorInput">Notes color</Form.Label>
          <Form.Control
            type="color"
            defaultValue="#dfdfdf"
            title="Choose your Color"
            ref={colorRef}
          ></Form.Control>
        </Form.Group>
        <Button className="btn btn-primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
