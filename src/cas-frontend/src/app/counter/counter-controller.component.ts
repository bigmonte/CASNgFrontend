import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'counter-controller',
  templateUrl: 'counter-controller.component.html'
})

export class CounterControllerComponent{

  @Output() onIncrement = new EventEmitter();
  incrementNumber (numberToAdd: number) {
    this.onIncrement.next(numberToAdd);
  }
}