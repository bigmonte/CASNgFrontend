import { Component, Input } from '@angular/core';
import { Command } from '../../models/Command';

@Component({
  selector: 'app-command-update',
  templateUrl: './command-update.component.html',
  styleUrls: ['./command-update.component.scss']
})
export class CommandUpdateComponent {

  @Input() selectedCommand: Command;

  submitForm () {
    alert(JSON.stringify(this.selectedCommand))
  }


}
