/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default ({ showForm, handlerSearchNotes }) => {
    return (
        <section className="search-notes">
            <input type="text" placeholder="Find your notes" onChange={(event) => handlerSearchNotes(event)} />
            <div className="btn-add">
                <img src="/assets/plus.png"  alt="Tombol Menampilkan Form" onClick={showForm} />
            </div>
        </section>
    );
};