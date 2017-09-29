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
var three_1 = require("three");
var camera_scope_service_1 = require("./camera-scope.service");
var ThreeCameraComponent = (function () {
    function ThreeCameraComponent(cameraScopeService) {
        this.cameraScopeService = cameraScopeService;
    }
    ThreeCameraComponent.prototype.ngAfterContentInit = function () {
        this.camera = this.cameraScopeService.getCamera(function () { return new three_1.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); });
        this.camera.position.z = 5;
    };
    return ThreeCameraComponent;
}());
ThreeCameraComponent = __decorate([
    core_1.Component({ selector: 'three-camera', templateUrl: './three-camera.component.html' }),
    __metadata("design:paramtypes", [camera_scope_service_1.CameraScopeService])
], ThreeCameraComponent);
exports.ThreeCameraComponent = ThreeCameraComponent;
//# sourceMappingURL=three-camera.component.js.map