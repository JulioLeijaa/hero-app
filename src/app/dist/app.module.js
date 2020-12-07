"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
// import { HttpClientModule } from '@angular/common/http';
// Rutas
var app_routes_1 = require("./app.routes");
// Servicios
var heroes_service_1 = require("./servicios/heroes.service");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./components/shared/navbar/navbar.component");
var home_component_1 = require("./components/home/home.component");
var about_component_1 = require("./components/about/about.component");
var heroes_component_1 = require("./components/heroes/heroes.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                heroes_component_1.HeroesComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routes_1.AppRoutingModule
                // HttpClientModule
            ],
            providers: [
                heroes_service_1.HeroesService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
