import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http'
import { ThisReceiver } from '@angular/compiler';

const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

type Note = {
  id: number
  day: number
  month: number
  comments: string
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private _httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
  constructor(private _http: HttpClient){}



  createNote(note: Note) {
    const url = `http://localhost:3000/note/`

    return this._http.post<Note>(url, note, options)
  }

  deleteNote(note: Note) {
    const url = `http://localhost:3000/note/${note.id}`

    return this._http.delete<number>(url, options)
  }

  getNote(noteID: number) {
    const url = `http://localhost:3000/note/${noteID}`

    return this._http.get<Note>(url, options)
  }

  getNotes() {
    const url = `http://localhost:3000/notes/`
    return this._http.get<Note[]>(url, options)
  }

  updateNote(note: Note) {
    const url = `http://localhost:3000/note/${note.id}`

    return this._http.put<number>(url, note, options)
  }

}
