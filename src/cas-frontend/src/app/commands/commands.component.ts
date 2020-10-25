import { Component, OnInit } from '@angular/core'
import { Command } from './models/Command'

@Component({
  selector: 'app-commands',
  templateUrl: 'commands.component.html',
})
export class CommandsComponent implements OnInit {

  public selectedCommand: Command
  public isDetailView = true

  public commands: Command[] = [
    { id: 1, commandLine: "dotnet ef ", howTo: "Print EF Help", platform: ".NET Core EF CLI" },
    { id: 2, commandLine: "dotnet build", howTo: "Build dotnet Project", platform: ".NET Core CLI" },
    { id: 3, commandLine: "dotnet run", howTo: "Run dotnet Project", platform: ".NET Core CLI" },
    { id: 4, commandLine: "dotnet new", howTo: "Show help in creating projects", platform: ".NET Core CLI" },
    { id: 5, commandLine: "dotnet ef migrations add", howTo: "Code first migration", platform: ".NET Core EF CLI" },
  ]
  
  public ngOnInit(): void {
    this.selectedCommand = this.commands[0]
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

