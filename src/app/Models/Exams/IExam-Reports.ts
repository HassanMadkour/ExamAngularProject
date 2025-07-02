interface IExamReports {
    ExamName:string ;
    MaxMarks:number;
    MinMarks: number ;
    Duration : string ;
    startDateTime : string;
    endDateTime: string;
    students : IStudentReport[];
}