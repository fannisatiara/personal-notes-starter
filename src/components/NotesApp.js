/* eslint-disable eqeqeq */
import React from "react";
import NotesSearch from "./NotesSearch";
import NotesInput from "./NotesInput";
import NotesItemList from "./NotesItemList";
import NotesArchiveList from "./NotesArchiveList";
import { getInitialData } from "../utils/index";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            titleNewNotes: '',
            body: '',
            NotesSearch: [],
            searchKeyword: '',
        }

        this.showFormEventHandler = this.showFormEventHandler.bind(this);
        this.hiddenFormEventHandler = this.hiddenFormEventHandler.bind(this);
        this.getNotesItemList = this.getNotesItemList.bind(this);
        this.getNotesArchiveList = this.getNotesArchiveList.bind(this);
        this.onDeleteNotesEventHandler = this.onDeleteNotesEventHandler.bind(this);
        this.onNotesItemEventHandler = this.onNotesItemEventHandler.bind(this);
        this.onNotesArchiveEventHandler = this.onNotesArchiveEventHandler.bind(this);
        this.validateTitleEventHandler = this.validateTitleEventHandler.bind(this);
        this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
        this.handleBodyInputChange = this.handleBodyInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearchNotes = this.handleSearchNotes.bind(this);
    }

    showFormEventHandler(event) {
        const form = document.querySelector('.add-notes');
        const notes = document.querySelector('.notes');
        if (form.classList.contains('hidden-form')) {
          form.classList.remove('hidden-form');
          form.classList.add('show-form');
          notes.classList.remove('up-notes');
          notes.classList.add('down-notes');
        }
    }

    hiddenFormEventHandler(event) {
        const form = document.querySelector('.add-notes');
        const notes = document.querySelector('.notes');
        if (form.classList.contains('show-form')) {
          form.classList.remove('show-form');
          form.classList.add('hidden-form');
          notes.classList.remove('down-notes');
          notes.classList.add('up-notes');
        }
    }
    
    onDeleteNotesEventHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }
    
    onNotesArchiveEventHandler(id) {
        const note = this.state.notes.find((note) => note.id == id);
        note.archived = true;
        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
            ]
          }
        })
    }
    
    onNotesItemEventHandler(id) {
        const note = this.state.notes.find((note) => note.id == id);
        note.archived = false;
        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
            ]
          }
        })
    }

    validateTitleEventHandler(event) {
        const countCharacter = event.target.value.length;
        const inputTitleElement = document.querySelector('form input');
        const countCharacterSpan = document.querySelector('form p span');
        countCharacterSpan.innerHTML = 50 - countCharacter;
        if (countCharacter >= 50) {
          inputTitleElement.setAttribute('onkeypress', 'return false;');
        }
        else {
          inputTitleElement.setAttribute('onkeypress', 'return true;');
        }
    
        this.handleTitleInputChange(event);
    }
    
    handleTitleInputChange(event) {
        this.setState({
          titleNewNote: event.target.value
        });
    }
    
    handleBodyInputChange(event) {
        this.setState({
          body: event.target.value
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const newNote = {
          id: +new Date(),
          title: this.state.titleNewNote,
          body: this.state.body,
          archived: false,
          createdAt: new Date(),
        }
        this.setState((prevState) => {
          return {
            notes: [
              ...prevState.notes,
              newNote,
            ]
          }
        })
        event.target.reset();
        const alertInput = document.querySelector('.alert-input');
        alertInput.classList.remove('d-none');
        setTimeout(() => {
          alertInput.classList.add('d-none');
        }, 2000)
    }
    
    handleSearchNotes(event) {
        const searchKeyword = event.target.value.toLowerCase();
        const notesSearch = this.state.notes.filter((note) => note.title.toLowerCase().includes(searchKeyword));
        this.setState({ notesSearch, searchKeyword });
    }
    
    getNotesItemList() {
        const notes = this.state.searchKeyword.length == 0 ? this.state.notes : this.state.notesSearch;
        return notes.filter((note) => note.archived === false);
    }
    
    getNotesArchiveList() {
        const notes = this.state.searchKeyword.length == 0 ? this.state.notes : this.state.notesSearch;
        return notes.filter((note) => note.archived === true);
    }

    render() {
        return (
            <>
                <header className="notes-app">
                    <h1>My Personal Notes</h1>
                </header>
                <main>
                    <NotesSearch showForm={this.showFormEventHandler} handlerSearchNotes={this.handleSearchNotes} />
                    <NotesInput hiddenForm={this.hiddenFormEventHandler} validateTitleEventHandler={this.validateTitleEventHandler} handleTitleInputChange={this.handleTitleInputChange} handleBodyInputChange={this.handleBodyInputChange} handleSubmit={this.handleSubmit} />
                    <section className="notes animation-up-notes">
                        <h2>Notes</h2>
                        <NotesItemList notes={this.getNotesItemList} onDelete={this.onDeleteNotesEventHandler} onArchive={this.onNotesArchiveEventHandler} />
                        <h2>Archive</h2>
                        <NotesArchiveList notes={this.getNotesArchiveList} onDelete={this.onDeleteNotesEventHandler} onItem={this.onNotesItemEventHandler} />
                    </section>
                </main>
            </>
        );
    }
}

export default NotesApp;