import { IAddQuestion } from "./iadd-question";

export interface IAddExam {
    Name:string,
    MinDegree:number,
    maxDegree:number,
    Duration:string,
    StartTime: string;     
    EndTime: string;
    Questions:IAddQuestion[]
}
