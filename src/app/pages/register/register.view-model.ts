import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export class RegisterViewModel {
  public submitted = false;

  public registerForm: FormGroup;

  public documentType: FormControl;
  public ideNumber: FormControl;
  public expeditionDate: FormControl;
  public birthDate: FormControl;
  public gender: FormControl;
  public email: FormControl;
  public confirmEmail: FormControl;
  public confrimEmail: FormControl;
  public password: FormControl;
  public confirmPassword: FormControl;

  public isSubmitted = false;

  public buildForm() {
    this.createControls();
    this.registerBuildForm();
    this.setValidators();
    this.updateForm();
  }

  public registerBuildForm() {
    this.registerForm = new FormGroup({
      documentType: this.documentType,
      ideNumber: this.ideNumber,
      expeditionDate: this.expeditionDate,
      birthDate: this.birthDate,
      gender: this.gender,
      email: this.email,
      confirmEmail: this.confirmEmail,
      password: this.password,
      confirmPassword: this.confirmPassword,
    });
  }

  public createControls() {
    this.documentType = new FormControl(
      null,
      Validators.compose([Validators.required])
    );
    this.ideNumber = new FormControl(
      null,
      Validators.compose([Validators.required])
    );
    this.expeditionDate = new FormControl(
      null,
      Validators.compose([Validators.required])
    );
    this.birthDate = new FormControl(
      null,
      Validators.compose([Validators.required])
    );
    this.gender = new FormControl(
      null,
      Validators.compose([Validators.required])
    );
    this.email = new FormControl(null);
    this.confirmEmail = new FormControl(null);
    this.password = new FormControl(null);
    this.confirmPassword = new FormControl(null);
  }

  public updateForm() {
    this.registerForm.markAsPristine();
    this.registerForm.markAsUntouched();
    this.registerForm.updateValueAndValidity();
  }

  public updatePasswordValidators() {
    this.password.updateValueAndValidity();
    this.confirmPassword.updateValueAndValidity();
  }

  public updateEmailValidators() {
    this.email.updateValueAndValidity();
    this.confirmEmail.updateValueAndValidity();
  }

  private setValidators() {
    this.email.setValidators([
      Validators.required,
      Validators.email,
      this.samePasswordValidator(this.confirmEmail),
    ]);

    this.confirmEmail.setValidators([this.sameEmailValidator(this.email)]);

    this.password.setValidators([
      Validators.required,
      this.samePasswordValidator(this.confirmPassword),
    ]);

    this.confirmPassword.setValidators([
      this.samePasswordValidator(this.password),
    ]);
  }

  private samePasswordValidator(passValidate: FormControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const valueReturn =
        control.value !== passValidate.value ? { mustMatch: true } : null;
      return valueReturn;
    };
  }

  private sameEmailValidator(passValidate: FormControl): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const valueReturn =
        control.value !== passValidate.value ? { mustMatch: true } : null;
      return valueReturn;
    };
  }
}
