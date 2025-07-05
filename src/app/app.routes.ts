import { Routes } from '@angular/router';
import { Register } from './components/Account/register/register';
import { Login } from './components/Account/login/login';
import { ConfirmEmail } from './components/Account/confirm-email/confirm-email';
import { Home } from './components/Account/home/home';
import { AuthGuard } from './components/Account/AuthGaurd';
import { ChangePassword } from './components/Account/change-password/change-password';
import { ForgotPassword } from './components/Account/forgot-password/forgot-password';
import { ResetPassword } from './components/Account/reset-password/reset-password';
import { ExamForm } from './Pages/exam-form/exam-form';
import { ExamList } from './Pages/exam-list/exam-list';
import { ExamQuestions } from './Pages/exam-questions/exam-questions';
import { AddQuestion } from './Pages/add-question/add-question';
import { UpdateQuestion } from './Pages/update-question/update-question';
import { ExamReport } from './Pages/exam-report/exam-report';

export const routes: Routes = [
    {path:'account/register' , component:Register} ,
    {path:'account/login' , component:Login} ,
    {path:'Account/ConfirmEmail' , component:ConfirmEmail} ,
    {path:'account/forgotPassword' , component:ForgotPassword}, 
    {path:'Account/ResetPassword' , component:ResetPassword} , 
    {path:'account/changepassword' , component:ChangePassword , canActivate: [AuthGuard] } , 

    { path: 'home', component: Home, canActivate: [AuthGuard] },
    {path:"examform",component:ExamForm},
    { path: "examform/:id", component: ExamForm },
    {path:'examlist',component:ExamList}
    , {
        path : "exam/:id/questions",component: ExamQuestions
    }, {
        path : "exam/:id/questions/create",component: AddQuestion
    },{
        path : "exam/:id/questions/update/:questionId",component: UpdateQuestion
    }, {
        path: "exam/:id/report", component: ExamReport
    }


];


