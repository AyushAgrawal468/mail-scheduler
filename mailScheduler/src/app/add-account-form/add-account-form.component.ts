import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account-form',
  templateUrl: './add-account-form.component.html',
  styleUrls: ['./add-account-form.component.css']
})
export class AddAccountFormComponent implements OnInit {

  formData: any = {};
  constructor(public dialogRef: MatDialogRef<AddAccountFormComponent>, private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:3001/mail-configurations").subscribe(data => console.log(data));
  }
 
  submitRes() {
    console.log(this.formData);
    this.httpClient.post("http://localhost:3001/mail-configurations", this.formData).subscribe();
    this.ngOnInit();
  }

  onNoClick(): void {
    console.log("close");

    this.dialogRef.close();
  }

}
