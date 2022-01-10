import { render } from "@testing-library/react";
import React from "react";
import { Note } from "../models/note.model";
import { Notes } from "./Notes";

interface Props {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

export const NotesList: React.FC<Props> = ({ notes, setNotes }) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  const renderNotes = () => {
    return notes.map((note) => {
      return <Notes note={note} key={note.id} handleDelete={handleDelete} />;
    });
  };
  return (
    <div>
      <h2 className="mt-3">Notes</h2>
      <div>{renderNotes()}</div>
    </div>
  );
};
