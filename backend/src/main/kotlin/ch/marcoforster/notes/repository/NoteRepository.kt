package ch.marcoforster.notes.repository

import ch.marcoforster.notes.model.Note
import org.springframework.data.jdbc.repository.query.Query
import org.springframework.data.repository.CrudRepository

interface NoteRepository : CrudRepository<Note, String> {

    @Query("select * from NOTES")
    fun selectAllNotes(): List<Note>
}