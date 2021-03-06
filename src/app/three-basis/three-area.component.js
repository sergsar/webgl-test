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
var renderer_component_1 = require("./renderer.component");
var ThreeAreaComponent = (function () {
    function ThreeAreaComponent() {
        this.RendererComponents = new core_1.QueryList();
    }
    __decorate([
        core_1.ContentChildren(renderer_component_1.RendererComponent),
        __metadata("design:type", typeof (_a = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _a || Object)
    ], ThreeAreaComponent.prototype, "RendererComponents", void 0);
    ThreeAreaComponent = __decorate([
        core_1.Component({ selector: 'three-area', template: "<ng-content></ng-content>" })
    ], ThreeAreaComponent);
    return ThreeAreaComponent;
    var _a;
}());
exports.ThreeAreaComponent = ThreeAreaComponent;
//# sourceMappingURL=three-area.component.js.map