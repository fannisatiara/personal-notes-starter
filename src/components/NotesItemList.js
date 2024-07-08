/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable eqeqeq */
import React from "react";
import NotesItem from "./NotesItem";

export default ({ notes, onDelete, onArchive }) => {
    const notesItem = notes();
    if(notesItem.length == 0) {
        return (
            <p className="not-found__notes">Not found</p>
        )
    } else {
        return (
            <div className="notes-list">
                {notesItem.map(note => (
                    <NotesItem note={note} onDelete={onDelete} onArchive={onArchive} />
                ))}
            </div>
        );
    }
};