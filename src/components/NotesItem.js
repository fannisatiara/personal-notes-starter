/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { showFormattedDate } from "../utils/index";

export default ({note, onDelete, onArchive}) => {
    return (
        <div className="notes-app-list-item" key={note.id}>
            <article>
                <header>
                    <h3>{note.title}</h3>
                    <p className="notes-date">{showFormattedDate(note.createdAt)}</p>
                </header>
                <p className="notes-desc">{note.body}</p>
            </article>
            <div className="notes-action">
                <div className="btn-delete" onClick={() => onDelete(note.id)}>Delete</div>
                <div className="btn-move-notes" onClick={() => onArchive(note.id)}>Archive</div>
            </div>
        </div>
    );
};