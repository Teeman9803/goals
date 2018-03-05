"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Goal = (function () {
    function Goal() {
    }
    Goal.prototype.contructor = function (name, date_created, date_modified, priority, due_date, user_id, completed) {
        this.name = name;
        this.date_created = date_created;
        this.date_modified = date_modified;
        this.priority = priority;
        this.due_date = due_date;
        this.user_id = user_id;
        this.completed = completed || false;
    };
    return Goal;
}());
exports.Goal = Goal;
//# sourceMappingURL=Goal.js.map