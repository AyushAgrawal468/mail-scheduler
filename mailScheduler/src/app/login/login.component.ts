import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData: any = {};
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    console.log(this.formData);
    this.httpClient.post("http://localhost:3000/authenticate", this.formData).subscribe(data => {
      console.log(data);
      if (data != null) {
        console.log("aaaaaaaaaaaaaa");
        alert("Log in Successfull");
        this.router.navigate(["mainInterface"])
      }
    },
    error=>{alert("Wrong Email Id or Password!!! Try Again")})
  }
}
