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
var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.baseUrl = 'https://5a72ecd68a943100120abc2e.mockapi.io/api/v1';
        this.dataStore = { todos: [] };
        this._todos = new Rx_1.BehaviorSubject([]);
    }
    Object.defineProperty(TodoService.prototype, "todos", {
        get: function () {
            return this._todos.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    TodoService.prototype.loadAll = function () {
        var _this = this;
        this.http.get(this.baseUrl + "/todos").subscribe(function (data) {
            _this.dataStore.todos = data;
            _this._todos.next(Object.assign({}, _this.dataStore).todos);
        }, function (error) { return console.log('Could not load todos.'); });
    };
    TodoService.prototype.add = function (todo) {
        var _this = this;
        this.http.post(this.baseUrl + "/todos", JSON.stringify(todo)).subscribe(function (data) {
            _this.dataStore.todos.push(data);
            _this._todos.next(Object.assign({}, _this.dataStore).todos);
        }, function (error) { return console.log('Could not load todo.'); });
    };
    TodoService.prototype.delete = function (todoId) {
        var _this = this;
        this.http.delete(this.baseUrl + "/todos/" + todoId).subscribe(function (data) {
            _this.dataStore.todos.forEach(function (t, i) {
                if (t.id === todoId)
                    _this.dataStore.todos.splice(i, 1);
            });
            _this._todos.next(Object.assign({}, _this.dataStore).todos);
        }, function (error) { return console.log('Could not delete todo.'); });
    };
    TodoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map