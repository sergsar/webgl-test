"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var three_renderer_component_1 = require("./three-renderer.component");
var three_scene_component_1 = require("./three-scene.component");
var three_camera_component_1 = require("./three-camera.component");
var three_area_component_1 = require("./three-area.component");
var ThreeBasisModule = (function () {
    function ThreeBasisModule() {
    }
    return ThreeBasisModule;
}());
ThreeBasisModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [
            three_area_component_1.ThreeAreaComponent,
            three_renderer_component_1.ThreeRendererComponent,
            three_scene_component_1.ThreeSceneComponent,
            three_camera_component_1.ThreeCameraComponent
        ],
        exports: [
            three_area_component_1.ThreeAreaComponent,
            three_renderer_component_1.ThreeRendererComponent,
            three_scene_component_1.ThreeSceneComponent,
            three_camera_component_1.ThreeCameraComponent
        ]
    })
], ThreeBasisModule);
exports.ThreeBasisModule = ThreeBasisModule;
//# sourceMappingURL=three-basis.module.js.map