export class Goal {
  public id:number;
  public name:string;
  public date_created:any;
  public date_modified:any;
  public priority:number;
  public due_date:any;
  public user_id:number;
  public completed:boolean;

  contructor(name:string, date_created:any, date_modified:any, priority:number, due_date:any, user_id:number, completed:boolean){
    this.name = name;
    this.date_created = date_created;
    this.date_modified = date_modified;
    this.priority = priority;
    this.due_date = due_date;
    this.user_id = user_id;
    this.completed = completed || false
  }
}
