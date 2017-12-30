"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var item3d_1 = require("./item3d");
var ElementsModule = (function () {
    function ElementsModule() {
    }
    return ElementsModule;
}());
ElementsModule = __decorate([
    core_1.NgModule({
        declarations: [item3d_1.Item3d],
        exports: [item3d_1.Item3d]
    })
], ElementsModule);
exports.ElementsModule = ElementsModule;
//# sourceMappingURL=elements.module.js.map