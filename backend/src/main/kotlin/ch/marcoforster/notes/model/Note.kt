package ch.marcoforster.notes.model

import org.springframework.data.annotation.Id
import org.springframework.data.relational.core.mapping.Table

@Table("NOTES")
data class Note(
    @Id val id: String?,
    val title: String,
    val description: String
)
