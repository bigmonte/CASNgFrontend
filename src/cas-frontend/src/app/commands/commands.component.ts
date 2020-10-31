import { Component, OnInit } from '@angular/core'
import { Command } from './models/Command'
import { ApiService } from '../api.service'

@Component({
  selector: 'app-commands',
  templateUrl: 'commands.component.html',
})
export class CommandsComponent implements OnInit {

  public selectedCommand: Command
  public isDetailView = true

  public commands: Command[] = []
  
  constructor (private apiService: ApiService) { }

  public ngOnInit(): void {
    this.fetchCommands()
    console.log(this.commands)
  }

  public getSelectedCommandCopy() {
    return {...this.selectedCommand}
  }

  private fetchCommands() {
    this.apiService
      .fetchCommands()
      .subscribe((commands: Command[]) => {
        console.log(commands)
        this.commands = commands
        this.selectedCommand = this.commands[0]
        console.log(commands)
      })
  }
  
  public addCommand () {
    const command: Command = { id: 1, commandLine: "dotnet ef ", howTo: "Print EF Help", platform: ".NET Core EF CLI" }
    this.commands.unshift(command)
  }

  public toggleView () {
    this.isDetailView = !this.isDetailView
  }

  private _selectCommand (command: Command) {
    if(!command) { alert ('command is corrupted')}
    this.selectedCommand = {...command}
  }

  get btnViewClass(): String {
    return this.isDetailView ? 'btn-primary' : 'btn-secondary'
  }

  public handleCommandSelect (command: Command) {
    this._selectCommand(command)
  }
}

