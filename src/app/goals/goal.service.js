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
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var GoalService = (function () {
    function GoalService(http) {
        this.http = http;
        this.baseUrl = 'http://5a9bfa30c8b35c0012b44ae2.mockapi.io/api/v1';
        this.dataStore = { goals: [] };
        this._goals = new Rx_1.BehaviorSubject([]);
    }
    Object.defineProperty(GoalService.prototype, "goals", {
        get: function () {
            return this._goals.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    GoalService.prototype.loadAll = function () {
        var _this = this;
        this.http.get(this.baseUrl + "/goals").subscribe(function (data) {
            _this.dataStore.goals = data;
            _this._goals.next(Object.assign({}, _this.dataStore).goals);
        }, function (error) { return console.log('Could not load goals.'); });
    };
    GoalService.prototype.add = function (goal) {
        var _this = this;
        this.http.post(this.baseUrl + "/goals", JSON.stringify(goal)).subscribe(function (data) {
            _this.dataStore.goals.push(data);
            _this._goals.next(Object.assign({}, _this.dataStore).goals);
        }, function (error) { return console.log('Could not load goal.'); });
    };
    GoalService.prototype.delete = function (goalId) {
        var _this = this;
        this.http.delete(this.baseUrl + "/goals/" + goalId).subscribe(function (data) {
            _this.dataStore.goals.forEach(function (t, i) {
                if (t.id === goalId)
                    _this.dataStore.goals.splice(i, 1);
            });
            _this._goals.next(Object.assign({}, _this.dataStore).goals);
        }, function (error) { return console.log('Could not delete goal.'); });
    };
    GoalService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GoalService);
    return GoalService;
}());
exports.GoalService = GoalService;
//# sourceMappingURL=goal.service.js.map