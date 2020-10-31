import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Command } from './commands/models/Command'

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor (private http: HttpClient) { }

  fetchCommands () : Observable<Command[]> {
    return this.http.get<Command[]>('/api/commands')
  }

  updateCommand (command: Command)  {
    return this.http.put(`/api/commands/${command.id}`, command)
    debugger
  }


}