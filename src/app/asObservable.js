"use strict";
/*
*
* taken from https://github.com/Reactive-Extensions/RxJS/blob/8f12f812d497acf639588e90f74d504a9fc801ec/src/core/linq/observable/asobservable.js
*
* not needed if using RxJs beta 2 or higher
*
**/
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
function asObservable(subject) {
    return new Observable_1.Observable(function (fn) { return subject.subscribe(fn); });
}
exports.asObservable = asObservable;
//# sourceMappingURL=asObservable.js.map