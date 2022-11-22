import { Component } from '@angular/core';

@Component({
	selector: 'app-grocery',
	templateUrl: './app.grocery.html',
	styleUrls: [
        '../assets/css/bootstrap.min.css'
    ]
})

export class GroceryComponent {
    task = {
      name: '',
      id: 0
    };
    tasks : any[] =[];

    onClick(){
      if(this.task.id == 0 || this.task){
        this.tasks.push({id: (new Date()).getTime(),name: this.task.name, strike: false});
      }   
      this.task = {
        name: '',
        id: 0
      };
    }
    
    onEdit(item: any){
      this.task = item;
    }

    onDelete(item: any){
      for(var i = 0;i < this.tasks.length; i++){
        if(item.id == this.tasks[i].id){
          this.tasks.splice(i,1);
          break;
        }
      }
    }

    onStrike(item: any){
      for(var i = 0;i < this.tasks.length; i++){
        if(item.id == this.tasks[i].id){
          if(this.tasks[i].strike){
            this.tasks[i].strike = false;
          }
          else{
            this.tasks[i].strike = true;
          }
          break;
        }
      }
    }
}