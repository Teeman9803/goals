"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var app_component_1 = require("./app.component");
var goal_service_1 = require("./goals/goal.service");
var goal_component_1 = require("./goals/goal.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                material_1.MatButtonModule,
                material_1.MatInputModule,
                material_1.MatIconModule,
                material_1.MatButtonModule,
                material_1.MatFormFieldModule,
                material_1.MatListModule,
                material_1.MatDividerModule,
                material_1.MatCardModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatCheckboxModule
            ],
            declarations: [app_component_1.AppComponent, goal_component_1.GoalComponent],
            providers: [goal_service_1.GoalService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map