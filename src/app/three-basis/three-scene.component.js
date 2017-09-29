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
var three_camera_component_1 = require("./three-camera.component");
var scene_scope_service_1 = require("./scene-scope.service");
var ThreeSceneComponent = (function () {
    function ThreeSceneComponent(sceneScopeService) {
        this.sceneScopeService = sceneScopeService;
    }
    ThreeSceneComponent.prototype.ngAfterContentInit = function () {
        this.scene = this.sceneScopeService.scene;
        this.boxGeometry = new three_1.BoxGeometry(1, 1, 1);
        this.basicMaterial = new three_1.MeshBasicMaterial({ color: 0x00ff00 });
        this.mesh = new three_1.Mesh(this.boxGeometry, this.basicMaterial);
        this.scene.add(this.mesh);
    };
    return ThreeSceneComponent;
}());
__decorate([
    core_1.ContentChild(three_camera_component_1.ThreeCameraComponent),
    __metadata("design:type", three_camera_component_1.ThreeCameraComponent)
], ThreeSceneComponent.prototype, "threeCameraComponent", void 0);
ThreeSceneComponent = __decorate([
    core_1.Component({ selector: 'three-scene', templateUrl: './three-scene.component.html' }),
    __metadata("design:paramtypes", [scene_scope_service_1.SceneScopeService])
], ThreeSceneComponent);
exports.ThreeSceneComponent = ThreeSceneComponent;
//# sourceMappingURL=three-scene.component.js.map