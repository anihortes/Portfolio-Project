import { Component } from '@angular/core';
import { catchError, of, switchMap, tap } from 'rxjs'
import { NotesService } from 'src/app/notes.service';

@Component({
  selector: 'app-january',
  templateUrl: './january.component.html',
  styleUrls: ['./january.component.css']
})
export class JanuaryComponent {
  title = 'frontend';

  constructor(noteService: NotesService){

    noteService.getNotes().pipe(  // Get all notes
      tap(notes => console.log(notes)),
      switchMap(notes => {
        const note = { ...notes[0] }
        note.comments += ' ADDED NOTES'
        return noteService.updateNote(note)
      }),
      catchError(() => {
        console.warn('Could not update user that does not exist')
        return of([])
      }),
      switchMap(() => noteService.getNotes()), // Get all notes
      tap(notes => console.log(notes)),
      switchMap(notes => noteService.deleteNote(notes[0])), // Delete first note
      catchError(() => {
        console.warn('Could not delete user that does not exist')
        return of([])
      }),
      switchMap(() => noteService.getNotes()), // Get all notes
      tap(users => console.log(users)),
    ).subscribe()
    
  }
}
