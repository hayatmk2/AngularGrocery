import { Component } from "@angular/core";

@Component({
  selector: 'app-grocery',
  templateUrl: './app.grocery.html',
  styleUrls: ['../assets/bootstrap-5.2.2-dist/css/bootstrap.min.css'],
})

export class GroceryComponent{

  task: string;
  tasks: any[] = [];

  onClick(){
    if(this.task){
      this.tasks.push({name: this.task});
      this.task = '';
    }
  }
  removeEntry(index: number):void{
    console.log("entry removed")
    this.tasks.splice(index, 1)
  }
  clear(): void {
    this.task = "";
  }
}