import Dexie,{type Table}from'dexie'
export type Priority='Baixa'|'Normal'|'Alta'|'Urxente'
export type Task={id:string;title:string;description:string;list:string;due:string;priority:Priority;done:boolean;created:string;updated:string;completed?:string;subtasks:{id:string;text:string;done:boolean}[]}
export class TasksDB extends Dexie{tasks!:Table<Task,string>;settings!:Table<{key:string;value:unknown},string>;constructor(){super('tarefas-local');this.version(1).stores({tasks:'id,done,due,list,priority,updated',settings:'key'})}}
export const db=new TasksDB()
