import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import { NotesList } from "./components/NotesList";
import { Note } from "./models/note.model";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, labore. Et quo numquam voluptatem iste consequatur recusandae, culpa hic ex architecto cupiditate, esse omnis, repellat eligendi est mollitia alias vel.",
      color: "#ffffff",
      date: new Date().toString(),
    },
  ]);

  const changeNotes = () => {};
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
