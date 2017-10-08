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
var three_1 = require("three");
var core_1 = require("@angular/core");
var BoxControlComponent = (function () {
    function BoxControlComponent() {
        this.boxGeometry = new three_1.BoxGeometry(1, 1, 1);
        this.basicMaterial = new three_1.MeshBasicMaterial({ color: 0x00ff00 });
        this.object3D = new three_1.Mesh(this.boxGeometry, this.basicMaterial);
    }
    BoxControlComponent.prototype.getObject3D = function () {
        return this.object3D;
    };
    return BoxControlComponent;
}());
BoxControlComponent = __decorate([
    core_1.Component({ selector: 'box-control', template: '' }),
    __metadata("design:paramtypes", [])
], BoxControlComponent);
exports.BoxControlComponent = BoxControlComponent;
//# sourceMappingURL=box-control.component.js.map