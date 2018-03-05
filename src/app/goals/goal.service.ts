import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/Rx";

import { Goal } from '../models/Goal';

@Injectable()

export class GoalService {
  private _goals: BehaviorSubject<Goal[]>;
  private baseUrl: string;
  private dataStore: {  // This is where we will store our data in memory
    goals: Goal[]
  };

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://5a9bfa30c8b35c0012b44ae2.mockapi.io/api/v1';
    this.dataStore = { goals: [] };
    this._goals = <BehaviorSubject<Goal[]>>new BehaviorSubject([]);
  }

  get goals() {
    return this._goals.asObservable();
  }

  loadAll() {
    this.http.get(`${this.baseUrl}/goals`).subscribe((data:Goal[]) => {
      this.dataStore.goals = data;
      this._goals.next(Object.assign({}, this.dataStore).goals);
    }, error => console.log('Could not load goals.'));
  }

  add(goal:any) {
    this.http.post(`${this.baseUrl}/goals`, JSON.stringify(goal)).subscribe((data:any) => {
        this.dataStore.goals.push(data);
        this._goals.next(Object.assign({}, this.dataStore).goals);
    }, error => console.log('Could not load goal.'));
  }  

  delete(goalId: number) {
    this.http.delete(`${this.baseUrl}/goals/${goalId}`).subscribe(data => {
      this.dataStore.goals.forEach((t, i) => {
        if (t.id === goalId)
          this.dataStore.goals.splice(i, 1);
      });
      this._goals.next(Object.assign({}, this.dataStore).goals);
    }, error => console.log('Could not delete goal.'));
  }
}    
