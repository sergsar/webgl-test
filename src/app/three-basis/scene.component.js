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
var perspective_camera_component_1 = require("./perspective-camera.component");
var scene_provider_service_1 = require("./scene-provider.service");
var object_three_d_component_1 = require("./object-three-d.component");
var SceneComponent = (function () {
    function SceneComponent(sceneProvider) {
        this.sceneProvider = sceneProvider;
        this.objectThreeDComponents = new core_1.QueryList();
        this.scene = this.sceneProvider.getScene();
    }
    SceneComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.objectThreeDComponents.forEach(function (p) { return _this.scene.add(p.getObject3D()); });
    };
    return SceneComponent;
}());
__decorate([
    core_1.ContentChild(perspective_camera_component_1.PerspectiveCameraComponent),
    __metadata("design:type", perspective_camera_component_1.PerspectiveCameraComponent)
], SceneComponent.prototype, "perspectiveCameraComponent", void 0);
__decorate([
    core_1.ContentChildren(object_three_d_component_1.ObjectThreeDComponent),
    __metadata("design:type", core_1.QueryList)
], SceneComponent.prototype, "objectThreeDComponents", void 0);
SceneComponent = __decorate([
    core_1.Component({ selector: 'scene', templateUrl: './scene.component.html' }),
    __metadata("design:paramtypes", [scene_provider_service_1.SceneProvider])
], SceneComponent);
exports.SceneComponent = SceneComponent;
//# sourceMappingURL=scene.component.js.map