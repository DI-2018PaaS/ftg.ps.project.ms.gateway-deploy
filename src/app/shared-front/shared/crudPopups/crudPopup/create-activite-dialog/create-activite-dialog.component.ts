import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-activite-dialog',
  templateUrl: './create-activite-dialog.component.html',
  styleUrls: ['./create-activite-dialog.component.scss']
})
export class CreateActiviteDialogComponent implements OnInit {
  hide = true;

  constructor() { }

  ngOnInit() {
  }
  
  onFileChanged(event) {
    const file = event.target.files[0]
  }
 
}
