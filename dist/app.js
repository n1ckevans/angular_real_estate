(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.target = "browser";
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("main.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone");
require("core-js/es7/reflect");
// import 'core-js/es/reflect';
require("core-js/proposals/reflect-metadata");
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_module_1 = require("./app/app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);

});
___scope___.file("app/app.module.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_component_1 = require("./app.component");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent],
        imports: [platform_browser_1.BrowserModule.withServerTransition({ appId: 'de' })],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;

});
___scope___.file("app/app.component.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let AppComponent = class AppComponent {
    constructor() {
        this.name = 'Dan Evans Real Estate';
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: `<h1>{{name}}</h1>`
    })
], AppComponent);
exports.AppComponent = AppComponent;

});
return ___scope___.entry = "main.js";
});

FuseBox.import("default/main.js");
FuseBox.main("default/main.js");
})
(FuseBox)
//# sourceMappingURL=app.js.map?tm=1580014812792