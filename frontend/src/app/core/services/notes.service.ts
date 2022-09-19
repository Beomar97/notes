import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private http: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${environment.apiBasePath}/note/all`);
  }

  saveNote(note: Note): Observable<Note> {
    return this.http.put<Note>(`${environment.apiBasePath}/note/edit`, note);
  }

  deleteNote(noteId: string): Observable<string> {
    return this.http.delete<string>(
      `${environment.apiBasePath}/note/delete?id=${noteId}`
    );
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(`${environment.apiBasePath}/note/new`, note);
  }
}
