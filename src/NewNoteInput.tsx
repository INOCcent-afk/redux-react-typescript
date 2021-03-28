import React, { ChangeEvent } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}
const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState("");

  const updateNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <input
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        placeholder="Note"
      />
      <button onClick={onAddNoteClick}>ADD NOTE</button>
    </div>
  );
};

export default NewNoteInput;
