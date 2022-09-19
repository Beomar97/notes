package ch.marcoforster.notes.service

import ch.marcoforster.notes.model.Note
import ch.marcoforster.notes.repository.NoteRepository
import org.springframework.stereotype.Service

@Service
class NoteService(val db: NoteRepository) {

    fun findMessages(): List<Note> = db.selectAllNotes()

    fun saveNote(note: Note) = db.save(note)

    fun deleteNote(noteId: String) = db.deleteById(noteId)
}