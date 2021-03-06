import { debounceTime, first, map, switchMap } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { SignUpService } from "./signup.service";

@Injectable({ providedIn: 'root'})
export class UserNotTakenValidatorService{

    constructor(private signupService: SignUpService){}

    checkUserNameTaken(){
      return (control: AbstractControl) => {
          return control.valueChanges
          .pipe(debounceTime(300))
          .pipe(switchMap(userName =>
            this.signupService.checkUserNameTaken(userName)
          ))
          .pipe(map(isTaken => isTaken ? {userNameTaken: true}: null))
          .pipe(first());
      }
    }

}
