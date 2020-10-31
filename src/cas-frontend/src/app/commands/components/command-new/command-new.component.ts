import { Component } from '@angular/core';
import { Command } from '../../models/Command';
import { ApiService } from 'src/app/api.service';
import { AlertComponent } from 'src/app/shared/header/alert.component';

@Component({
  selector: 'app-command-new',
  templateUrl: './command-new.component.html',
  styleUrls: ['./command-new.component.scss']
})
export class CommandNewComponent extends AlertComponent {

  command: Command = new Command()
  constructor(private apiService: ApiService) { 
    super()
  }

  createCommand = (command: Command) => {
    this.apiService
      .addCommand(command)
      .subscribe(cmd => {
        this.setAlert('success', 'Command created!')
      }, (error: string) => {
        this.setAlert('error', error)
      })
  }

}
