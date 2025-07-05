import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegisterUser } from '../models/IRegisterUser';
import { catchError, Observable, throwError } from 'rxjs';
import { ILoginUser } from '../models/ILoginUser';
import { Route, Router } from '@angular/router';
import { IChangePassword } from '../models/ichange-password';
import { IForgotPassword } from '../models/iforgot-password';
import { IResetPassword } from '../models/ireset-password';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl:string = 'https://localhost:7085/api/Account'

  constructor(private http:HttpClient , private router:Router) { }

registerUser(user:IRegisterUser) : Observable<{ message: string }> { 
    return this.http.post<{ message: string }>(`${this.baseUrl}/register`,user).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 400) {
      
        const validationErrors = error.error;
        return throwError(() => validationErrors);
      } else {
       
        return throwError(() => 'Something went wrong. Please try again.');
      }
    })
  );  ;
}

confirmEmail(userId:string,token:string) {
  return this.http.get<{ signInToken: string }>(
      `https://localhost:7085/api/Account/ConfirmEmail?userId=${userId}&token=${token}`
    );
}

login(user:ILoginUser)  {
   return this.http.post<{ token: string }>(`${this.baseUrl}/login`,user) ;
}

logout(): void {
  localStorage.removeItem('token');
  this.router.navigate(['/account/login']);
}
changePassword(changePassModel:IChangePassword) : Observable<{message:string}> {
return this.http.post<{message:string}>(`${this.baseUrl}/ChangePassword` , changePassModel)

}

forgotPassword(forgotPassModel:IForgotPassword) : Observable<{message:string}> {
  return this.http.post<{message:string}>(`${this.baseUrl}/ForgotPassword` , forgotPassModel);
} 


ResetPassword(resetPassModel:IResetPassword) : Observable<{message:string}> {
  return this.http.post<{message:string}>(`${this.baseUrl}/ResetPassword` , resetPassModel);
}

} 


