import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../../core/models/note.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input()
  set note(note: Note | null) {
    this.noteId = note?.id;
    this.form.patchValue({
      title: note?.title,
      description: note?.description,
    });
  }

  @Output()
  noteEditedEvent = new EventEmitter<Note>();

  @Output()
  noteDeletedEvent = new EventEmitter<string>();

  noteId?: string;

  form: FormGroup;
  editing = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', []],
      description: ['', []],
    });
  }

  ngOnInit(): void {}

  toggleEditing() {
    this.editing = !this.editing;
  }

  saveNote() {
    this.noteEditedEvent.emit({
      id: this.noteId,
      title: this.form.get('title')?.value,
      description: this.form.get('description')?.value,
    });
    this.toggleEditing();
  }

  deleteNote() {
    this.noteDeletedEvent.emit(this.noteId);
  }
}
