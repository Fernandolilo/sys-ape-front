import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtService } from 'src/app/service/jwt.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  /*inicializa o FormGroup*/
  registerForm: FormGroup = new FormGroup({});

  constructor(
    private service: JwtService,
    private fb: FormBuilder
  ) { }

  /*chama o formGroup em onInit*/
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, { validator: this.passwordMathValidator })
  }

  /*metodo para analizar password e confirm caso seja difereste testa e lança o erro*/
  passwordMathValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password != confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismach: true });
    }else{
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  submitForm(){
    console.log(this.registerForm?.value);
  }
}
