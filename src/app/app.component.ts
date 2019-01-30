import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-start';

  components = [

   
    {
      "type": "text",
      "data": {
        "question": "what is your name?",
        "answer": "yash"
      }
    },
    {
      "type": "radio",
      "data": {
        "question": "coding",
        "name": "tea",
        "labels": [{"option": "weq"},{"option":"qwew"}]
      }
    }
  ]


}
