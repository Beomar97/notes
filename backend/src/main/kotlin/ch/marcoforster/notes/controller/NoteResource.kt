package ch.marcoforster.notes.controller

import ch.marcoforster.notes.model.Note
import ch.marcoforster.notes.service.NoteService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/note")
class NoteResource(val noteService: NoteService) {

    @GetMapping("/all")
    fun getNotes(): List<Note> = noteService.findMessages()

    @PostMapping("/new")
    fun postNote(@RequestBody note: Note) = noteService.saveNote(note)

    @PutMapping("/edit")
    fun putNote(@RequestBody note: Note) = noteService.saveNote(note)

    @DeleteMapping("/delete")
    fun deleteNote(@RequestParam(value = "id") noteId: String) = noteService.deleteNote(noteId)
}