/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable eqeqeq */
import React from "react";
import NotesArchive from "./NotesArchive";

export default ({ notes, onDelete, onItem }) => {
    const notesArchive = notes();
    if(notesArchive.length == 0) {
        return (
            <p className="not-found__notes">No archived notes</p>
        )
    } else {
        return (
            <div className="notes-list">
                {notesArchive.map((note) => (
                    <NotesArchive note={note} onDelete={onDelete} onItem={onItem} />
                ))}
            </div>
        )
    }
}