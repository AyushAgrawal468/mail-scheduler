import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from "@angular/material/dialog";
import { AddAccountFormComponent } from '../add-account-form/add-account-form.component';
import { emailFormat } from '../emailFormat';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit, OnChanges {

  accounts: any = {};
  constructor(private httpClient: HttpClient, private dialog: MatDialog, private dService: DataService) {
    this.httpClient.get("http://localhost:3001/mail-configurations").subscribe(data => {
      console.log(data);
      this.accounts = data;
      console.log(this.accounts);
    })
    
  }
  ngOnChanges(changes: SimpleChanges) { }

  emailForm!: FormGroup;
  ngOnInit(): void {
    this.dService.getEmails().subscribe(data => this.emails = data);
    this.emailForm = new FormGroup({
      to: new FormControl(this.email.to, Validators.required),
      cc: new FormControl(this.email.cc),
      bcc: new FormControl(this.email.bcc),
      subject: new FormControl(this.email.subject),
      body: new FormControl(this.email.body),
      scheduledDate: new FormControl(this.email.scheduledDate),
      scheduledTime: new FormControl(this.email.scheduledTime)
    });
  }
  emails: any;
  email: emailFormat = {
    to: "",
    cc: "",
    bcc: "",
    subject: "",
    body: "",
    scheduledDate: "",
    scheduledTime: "",
    scheduledDateTime: 0,
    mailConfigurationId: 0,
  }
  accountId: any;

  @Output()
  accName = new EventEmitter<any>();
  accountName(accName: any, accId: any) {
    this.accountId = accId;
    console.log(this.accountId);
    this.accName.emit(accName);
    console.log(accName);
    this.ngOnInit();
    this.ngOnInit();
    this.clearScreen();

  }


  addAccDialog() {
    const dialogRef = this.dialog.open(AddAccountFormComponent);
  }


  emailData(data: any) {
    this.email = data;
    this.ngOnInit();
    this.ngOnInit();
  }



  get to() { return this.emailForm.controls['to'] }
  get cc() { return this.emailForm.controls['cc'] }
  get bcc() { return this.emailForm.controls['bcc'] }
  get subject() { return this.emailForm.controls['subject'] }
  get body() { return this.emailForm.controls['body'] }
  get scheduledDate() { return this.emailForm.controls['scheduledDate'] }
  get scheduledTime() { return this.emailForm.controls['scheduledTime'] }

  submitForm() {
    this.email.to = this.to.value;
    this.email.cc = this.cc.value;
    this.email.bcc = this.bcc.value;
    this.email.subject = this.subject.value;
    this.email.body = this.body.value;
    this.email.scheduledDate = (this.scheduledDate.value);
    this.email.scheduledTime = this.scheduledTime.value;
    this.email.mailConfigurationId = this.accountId;
    this.dService.postEmailForm(this.email);
    this.ngOnInit();
    this.ngOnInit();
  }

  discardMail() {
    console.log(this.email.id);
    this.dService.deleteForm(this.email.id);
    
    this.clearScreen();
    
  }
 clearScreen()
 {
  this.email.to = "";
  this.email.cc = "";
  this.email.bcc = "";
  this.email.subject = "";
  this.email.body = "";
  this.email.scheduledDate = "";
  this.email.scheduledTime = "";
  this.ngOnInit();
  this.ngOnInit();
 }

}
