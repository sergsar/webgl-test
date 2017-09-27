"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var three_1 = require("three");
var ThreeSceneComponent = (function () {
    function ThreeSceneComponent() {
    }
    ThreeSceneComponent.prototype.ngAfterContentInit = function () {
        this.scene = new three_1.Scene();
        this.boxGeometry = new three_1.BoxGeometry(1, 1, 1);
        this.basicMaterial = new three_1.MeshBasicMaterial({ color: 0x00ff00 });
        this.mesh = new three_1.Mesh(this.boxGeometry, this.basicMaterial);
        this.scene.add(this.mesh);
    };
    return ThreeSceneComponent;
}());
ThreeSceneComponent = __decorate([
    core_1.Component({ selector: 'three-scene', templateUrl: './three-scene.component.html' })
], ThreeSceneComponent);
exports.ThreeSceneComponent = ThreeSceneComponent;
//# sourceMappingURL=three-scene.component.js.map