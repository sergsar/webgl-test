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
var three_scene_component_1 = require("./three-scene.component");
var ThreeCanvasComponent = (function () {
    function ThreeCanvasComponent() {
        this.height = 500;
        this.width = 500;
    }
    ThreeCanvasComponent.prototype.ngAfterContentInit = function () {
        this.renderer = new three_1.WebGLRenderer({ canvas: this.canvas.nativeElement });
        this.renderer.setSize(this.width, this.height);
        this.renderer.render(this.threeSceneComponent.scene, this.threeSceneComponent.camera);
    };
    return ThreeCanvasComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ThreeCanvasComponent.prototype, "height", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ThreeCanvasComponent.prototype, "width", void 0);
__decorate([
    core_1.ContentChild(three_scene_component_1.ThreeSceneComponent),
    __metadata("design:type", three_scene_component_1.ThreeSceneComponent)
], ThreeCanvasComponent.prototype, "threeSceneComponent", void 0);
__decorate([
    core_1.ViewChild('canvas'),
    __metadata("design:type", Object)
], ThreeCanvasComponent.prototype, "canvas", void 0);
ThreeCanvasComponent = __decorate([
    core_1.Component({ selector: 'three-canvas', templateUrl: './three-canvas.component.html' })
], ThreeCanvasComponent);
exports.ThreeCanvasComponent = ThreeCanvasComponent;
//# sourceMappingURL=three-canvas.component.js.map