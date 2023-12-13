export type TaskType = {
    completed:boolean;
    task:string;
    details:string;
}
export type UpdateTask = ()=>void;
export type AddTask = (task:string)=>void;