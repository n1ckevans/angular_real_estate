"use strict";
exports.__esModule = true;
require("zone.js/dist/zone");
require("core-js/es7/reflect");
require("core-js/proposals/reflect-metadata");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
