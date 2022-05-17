import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { emailFormat } from '../emailFormat';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accoutName: any;
  constructor(private httpClient: HttpClient) { }

  getEmails() {
    return this.httpClient.get("http://localhost:3001/emails");
  }
  getMailConfig() {
    return this.httpClient.get("http://localhost:3001/mail-configurations");
  }

  postEmailForm(data: emailFormat) {
    this.httpClient.post("http://localhost:3001/emails", data).subscribe(data => {
      console.log(data);
      alert("Form Saved Successully")
    }, error => {
      this.httpClient.patch(`http://localhost:3001/emails/${data.id}`, data).subscribe(() => console.log("data upadated")
      );
    alert("Email Updated Successfully")})
  }
  deleteForm(data: any) {
    this.httpClient.delete(`http://localhost:3001/emails/${data}`).subscribe(data => {
      console.log(data);

      alert("Discarded successFully")
    })
  }

}
