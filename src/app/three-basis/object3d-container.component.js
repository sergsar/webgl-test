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
var object3d_1 = require("./object3d");
var Object3dContainerComponent = (function () {
    function Object3dContainerComponent() {
        this.objects3D = new core_1.QueryList();
    }
    Object3dContainerComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.objects3D.forEach(function (p) { return _this.object3d.add(p.getObject3D()); });
    };
    Object3dContainerComponent.prototype.getObject3D = function () {
        return this.object3d;
    };
    return Object3dContainerComponent;
}());
__decorate([
    core_1.ContentChildren(object3d_1.Object3D),
    __metadata("design:type", core_1.QueryList)
], Object3dContainerComponent.prototype, "objects3D", void 0);
Object3dContainerComponent = __decorate([
    core_1.Component({ template: '' })
], Object3dContainerComponent);
exports.Object3dContainerComponent = Object3dContainerComponent;
//# sourceMappingURL=object3d-container.component.js.map