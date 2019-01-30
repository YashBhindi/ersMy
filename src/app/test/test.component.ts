import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  obj = {
    
      "type": "radio",
      "data": {
        "question": "coding",
        "name": "tea",
        "labels": [{"option": "weq"},{"option":"qwew"}]
      }
    
  }

  ngOnInit() {
  }

}
