import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import { Note } from "../models/note.model";
interface Props {
  note: Note;
  handleDelete: (id: string) => void;
}

export const Notes: React.FC<Props> = ({ note, handleDelete }) => {
  return (
    <div className="mb-3">
      <Card style={{ backgroundColor: note.color }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
          <Button
            className="mb-3 mt-2 btn btn-danger"
            onClick={() => handleDelete(note.id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
