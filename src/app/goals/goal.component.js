"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var goal_service_1 = require("./goal.service");
var GoalComponent = (function () {
    function GoalComponent(goalService) {
        this.goalService = goalService;
        this.goals = this.goalService.goals;
        this.goalService.loadAll();
    }
    GoalComponent.prototype.getGoal = function (id) {
        // this.goalService.load(id);
    };
    GoalComponent.prototype.addGoal = function () {
        this.goalService.add({});
    };
    GoalComponent.prototype.deleteGoal = function (id) {
        this.goalService.delete(id);
    };
    GoalComponent.prototype.isCompleted = function (goal) {
        goal.completed = !goal.completed;
    };
    GoalComponent = __decorate([
        core_1.Component({
            selector: 'goals',
            templateUrl: './goal.component.html',
            styleUrls: ['./goal.component.css']
        }),
        __metadata("design:paramtypes", [goal_service_1.GoalService])
    ], GoalComponent);
    return GoalComponent;
}());
exports.GoalComponent = GoalComponent;
//# sourceMappingURL=goal.component.js.map