/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default ({ hiddenForm, validateTitleEventHandler, handleBodyInputChange, handleSubmit }) => {
    return (
        <section className="add-notes hidden-form">
            <div className="add-notes-title">
                <h2>Create New Notes</h2>
                <img src="/assets/minus.png" alt="Tombol Menutup Form" onClick={hiddenForm} />
            </div>
            <div className="alert-input d-none">
                <p>Note Created Successfully!</p>
            </div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <p>Remaining characters: <span>50</span></p>
                <input type="text" placeholder="Title" autoComplete="off" onChange={(event) => validateTitleEventHandler(event)}/>
                <textarea cols="40" rows="10" placeholder="Write your note" autoComplete="off" onChange={(event) => handleBodyInputChange(event)}></textarea>
                <button type="submit">Create</button>
            </form>
        </section>
    );
};