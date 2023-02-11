import { Component } from '@angular/core';
import { catchError, of, switchMap, tap } from 'rxjs'
import { Note, NotesService } from 'src/app/notes.service';

@Component({
  selector: 'app-january',
  templateUrl: './january.component.html',
  styleUrls: ['./january.component.css'],
})

export class JanuaryComponent {
  title = 'frontend';
  public notes:Note[] = [];
  constructor(private noteService: NotesService){
    this.noteService.getNotes().subscribe(notes => this.notes=notes)
  }
  
}