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
var three_scene_component_1 = require("./three-scene.component");
var renderer_provider_service_1 = require("./renderer-provider.service");
var animate_provider_service_1 = require("./animate-provider.service");
var ThreeRendererComponent = (function () {
    function ThreeRendererComponent(animateProvider, rendererProvider) {
        this.animateProvider = animateProvider;
        this.rendererProvider = rendererProvider;
        this.height = 500;
        this.width = 800;
    }
    ThreeRendererComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.renderer = this.rendererProvider.getRenderer({ canvas: this.canvas.nativeElement });
        this.renderer.setSize(this.width, this.height);
        var scene = this.threeSceneComponent.scene;
        var perspectiveCamera = this.threeSceneComponent.threePerspectiveCameraComponent.perspectiveCamera;
        var animateTask = function () { return _this.renderer.render(scene, perspectiveCamera); };
        this.animateProvider.setFrameTask(this, animateTask);
    };
    return ThreeRendererComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ThreeRendererComponent.prototype, "height", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ThreeRendererComponent.prototype, "width", void 0);
__decorate([
    core_1.ViewChild('canvas'),
    __metadata("design:type", Object)
], ThreeRendererComponent.prototype, "canvas", void 0);
__decorate([
    core_1.ContentChild(three_scene_component_1.ThreeSceneComponent),
    __metadata("design:type", three_scene_component_1.ThreeSceneComponent)
], ThreeRendererComponent.prototype, "threeSceneComponent", void 0);
ThreeRendererComponent = __decorate([
    core_1.Component({ selector: 'three-renderer', templateUrl: './three-renderer.component.html' }),
    __metadata("design:paramtypes", [animate_provider_service_1.AnimateProvider, renderer_provider_service_1.RendererProvider])
], ThreeRendererComponent);
exports.ThreeRendererComponent = ThreeRendererComponent;
//# sourceMappingURL=three-renderer.component.js.map