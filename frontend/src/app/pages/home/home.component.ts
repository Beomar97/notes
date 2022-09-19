import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotesService } from '../../core/services/notes.service';
import { Note } from '../../core/models/note.model';
import { map, Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateNoteDialogComponent } from '../../components/create-note-dialog/create-note-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  notes?: Note[];
  filteredNotes?: Note[];
  formControl = new FormControl('');

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private notesService: NotesService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.notesService.getNotes().subscribe((notes) => {
      this.notes = [...notes].reverse();
      this.filteredNotes = [...this.notes];
    });

    this.formControl.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        map((value) => this._filter(value || ''))
      )
      .subscribe((filteredNotes) => (this.filteredNotes = filteredNotes));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

  openCreateNoteDialog(): void {
    const dialogRef = this.dialog.open(CreateNoteDialogComponent);

    dialogRef.afterClosed().subscribe((note: Note) => {
      if (note && note.title && note.description) {
        this.createNote(note);
      }
    });
  }

  createNote(note: Note) {
    this.notesService.createNote(note).subscribe(() => {
      this.notes?.unshift(note);
      this.updateFilteredNotes();
      this._snackBar.open('Successfully created', 'Dismiss', {
        duration: 2000,
      });
    });
  }

  saveNote(note: Note) {
    this.notesService.saveNote(note).subscribe(() => {
      this.updateFilteredNotes();
      this._snackBar.open('Successfully saved', 'Dismiss', { duration: 2000 });
    });
  }

  deleteNote(noteId: string) {
    this.notesService.deleteNote(noteId).subscribe(() => {
      this.notes?.forEach((note, idx) => {
        if (note.id === noteId) this.notes?.splice(idx, 1);
      });
      this.updateFilteredNotes();
      this._snackBar.open('Successfully deleted', 'Dismiss', {
        duration: 2000,
      });
    });
  }

  private _filter(value: string): Note[] {
    const filterValue = value.toLowerCase();

    return (
      this.notes?.filter((note) =>
        note.title.toLowerCase().includes(filterValue)
      ) || []
    );
  }

  private updateFilteredNotes() {
    this.filteredNotes = this._filter(this.formControl.value || '');
  }
}
