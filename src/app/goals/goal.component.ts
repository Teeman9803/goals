import { Component, OnChanges} from '@angular/core';
import { Goal } from '../models/Goal';
import { GoalService } from './goal.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'goals',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent {
  goals: Observable<Goal[]>;
   constructor(private goalService: GoalService){
        this.goals = this.goalService.goals;
        this.goalService.loadAll();
   }

   getGoal(id:number) {
    // this.goalService.load(id);
   }

   addGoal() {
    this.goalService.add({});
   }

   deleteGoal(id:number) {
    this.goalService.delete(id);
   }

   isCompleted(goal:Goal) {
     goal.completed = !goal.completed;
   }
   
}