interface IExamReports  extends IBaseExam{
    ExamName:string ;
    MaxMarks:number;
    MinMarks: number ;
    Duration : string ;
    startDateTime : string;
    endDateTime: string;
    students : IStudentReport[];
}