import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Command } from '../../models/Command';

@Component({
  selector: 'app-command-update',
  templateUrl: './command-update.component.html',
  styleUrls: ['./command-update.component.scss']
})
export class CommandUpdateComponent {

  @Input() set command (selectedCommand: Command) {
    this.selectedCommand = { ...selectedCommand}
  }

  constructor (private apiService: ApiService) { }
  @Input() onSubmit: (command: Command) => Observable<Command>

  selectedCommand: Command

  submitForm () {
    this.apiService
      .updateCommand(this.selectedCommand)
      .subscribe(cmd => {
        console.log('updated')
      })
  }


}
