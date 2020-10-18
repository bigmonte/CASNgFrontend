import { Component } from '@angular/core'

function TestDecorator (text) {
  name: 'A simple test decorator'
    return (component) => {
      component.data = text;
      component.meta = {
      prop1: 'text1',
      prop2: 'text2'
    }
    console.log(text)
    console.log(component.meta.prop1)
    console.log(component.meta.prop2) 
  }
}

@TestDecorator({
  text: 'Text from test decorator'
})
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Hello I am an angular component.'
  testDecoratorName = `${AppComponent.data.text} ${AppComponent['meta'].prop1} ${AppComponent['meta'].prop2}`;
  generateNumber () {
    return 12
  }
}

