import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /*inicializa o FormGroup*/
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private service: JwtService,
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    })
  }


  submitForm() {
    this.service.login(this.loginForm.value).subscribe(
      (response) => {
        console.log(response);
        if(response != null){
          alert("Logado com sucesso!" + response.jwt);
        }

      }
    )
  }

}
