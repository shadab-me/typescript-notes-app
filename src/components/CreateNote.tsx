import React from "react";
import { Form } from "react-bootstrap";

interface Props {}

export const CreateNote = (props: Props) => {
  return (
    <div>
      <h2>Create Notes</h2>
      <Form.Group className="mt-3 mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Title for the note"
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mt-3 mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Title for the note"
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mt-3 mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Title for the note"
        ></Form.Control>
      </Form.Group>
    </div>
  );
};
