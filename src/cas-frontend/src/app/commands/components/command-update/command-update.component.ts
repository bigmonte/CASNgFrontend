import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Alert, Command } from '../../models/Command';

@Component({
  selector: 'app-command-update',
  templateUrl: './command-update.component.html',
  styleUrls: ['./command-update.component.scss']
})
export class CommandUpdateComponent {

  @Input() set command (selectedCommand: Command) {
    this.selectedCommand = { ...selectedCommand}
  }

  @Output() onCommandUpdated = new EventEmitter<Command>()

  constructor (private apiService: ApiService) { }
  @Input() onSubmit: (command: Command) => Observable<Command>

  selectedCommand: Command
  alert: Alert = new Alert()

  private setAlert (status: string, message:string) {
    this.alert = new Alert()
    this.alert[status] = message

    setTimeout(() => {this.alert = new Alert()}, 2000)
  }

  submitForm () {
    this.apiService
      .updateCommand(this.selectedCommand)
      .subscribe(cmd => {
        this.onCommandUpdated.emit(cmd)
        this.setAlert('success', 'Command was updated')
      }, (error: string) => {
        this.setAlert('error', error)
      })
  }


}
