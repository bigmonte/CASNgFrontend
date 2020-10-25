import { Component } from '@angular/core'
import { Command } from './models/Command'

@Component({
  selector: 'app-commands',
  templateUrl: 'commands.component.html',
})
export class CommandsComponent {

  public selectedCommand: Command
  public isDetailView = true

  public commands: Command[] = [
    { id: 1, commandLine: "dotnet ef ", description: "Print EF Help", platform: ".NET Core EF CLI" },
    { id: 2, commandLine: "dotnet build", description: "Build dotnet Project", platform: ".NET Core CLI" },
    { id: 3, commandLine: "dotnet run", description: "Run dotnet Project", platform: ".NET Core CLI" },
    { id: 4, commandLine: "dotnet new", description: "Show help in creating projects", platform: ".NET Core CLI" },
    { id: 5, commandLine: "dotnet ef migrations add", description: "Code first migration", platform: ".NET Core EF CLI" },
  ]

  public addCommand() {
    const command: Command = { id: 1, commandLine: "dotnet ef ", description: "Print EF Help", platform: ".NET Core EF CLI" }
    this.commands.unshift(command)
  }

  public toggleView() {
    this.isDetailView = !this.isDetailView
  }

  get btnViewClass(): String {
    return this.isDetailView ? 'btn-primary' : 'btn-secondary'
  }

  public handleCommandSelect (command: Command) {
    this.selectedCommand = {...command}
    alert(this.selectedCommand.platform)
  }
}

