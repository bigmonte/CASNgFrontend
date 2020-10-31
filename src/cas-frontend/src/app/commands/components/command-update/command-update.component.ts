import { Component, EventEmitter, Input, Output, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Alert, Command } from '../../models/Command';

@Component({
  selector: 'app-command-update',
  templateUrl: './command-update.component.html',
  styleUrls: ['./command-update.component.scss']
})
export class CommandUpdateComponent implements OnDestroy {

  @Input() set command (selectedCommand: Command) {
    
    if(this.selectedCommand && (this.selectedCommand.id !== selectedCommand.id)) {
      clearTimeout(this.timeOutPointer)
      this.alert = new Alert()
    }

    this.selectedCommand = { ...selectedCommand}

  }
  @Input() onSubmit: (command: Command) => Observable<Command>

  @Output() onCommandUpdated = new EventEmitter<Command>()

  selectedCommand: Command
  alert: Alert = new Alert()
  timeOutPointer: number

  constructor (private apiService: ApiService) { }

  ngOnDestroy(): void {
    clearTimeout(this.timeOutPointer)
  }



  private setAlert (status: string, message:string) {
    this.alert = new Alert()
    this.alert[status] = message

    this.timeOutPointer = setTimeout(() =>  this.alert = new Alert (), 2000)
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
