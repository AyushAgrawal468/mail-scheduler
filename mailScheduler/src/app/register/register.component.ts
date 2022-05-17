import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formData: any = {};
  constructor(private httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  register() {
    console.log(this.formData);
    this.httpClient.post("http://localhost:3000/register",this.formData).subscribe(()=>{alert("Registered Successfully")});
    this.httpClient.get("http://localhost:3000/register").subscribe(data=>console.log(data));
    this.router.navigate(["home"])

  }
}
