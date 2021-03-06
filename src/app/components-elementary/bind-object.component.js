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
var bind_item_component_1 = require("./bind-item.component");
var BindObjectComponent = (function () {
    function BindObjectComponent() {
        this.items = new core_1.QueryList();
        this.objects = new core_1.QueryList();
    }
    BindObjectComponent_1 = BindObjectComponent;
    // ngOnInit() {
    //     console.log(this.name);
    // }
    BindObjectComponent.prototype.getItems = function () {
        return this.items;
    };
    BindObjectComponent.prototype.getObjects = function () {
        return this.objects;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], BindObjectComponent.prototype, "name", void 0);
    __decorate([
        core_1.ContentChildren(bind_item_component_1.BindItemComponent),
        __metadata("design:type", typeof (_a = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _a || Object)
    ], BindObjectComponent.prototype, "items", void 0);
    __decorate([
        core_1.ContentChildren(BindObjectComponent_1),
        __metadata("design:type", typeof (_b = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _b || Object)
    ], BindObjectComponent.prototype, "objects", void 0);
    BindObjectComponent = BindObjectComponent_1 = __decorate([
        core_1.Component({ selector: 'bind-object', template: '<ng-content></ng-content>' })
    ], BindObjectComponent);
    return BindObjectComponent;
    var BindObjectComponent_1, _a, _b;
}());
exports.BindObjectComponent = BindObjectComponent;
//# sourceMappingURL=bind-object.component.js.map