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
var core_1 = require("@angular/core");
var item3d_1 = require("../../elements/item3d");
var CubeControlComponent = (function () {
    function CubeControlComponent() {
        this.items3d = new core_1.QueryList();
    }
    CubeControlComponent.prototype.ngAfterContentInit = function () {
    };
    return CubeControlComponent;
}());
__decorate([
    core_1.ContentChildren(item3d_1.Item3d),
    __metadata("design:type", core_1.QueryList)
], CubeControlComponent.prototype, "items3d", void 0);
CubeControlComponent = __decorate([
    core_1.Component({ selector: 'cube-control', template: '<ng-content></ng-content>' })
], CubeControlComponent);
exports.CubeControlComponent = CubeControlComponent;
//# sourceMappingURL=cube-control.component.js.map