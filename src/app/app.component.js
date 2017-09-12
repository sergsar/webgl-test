"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var three_1 = require("three");
var three_2 = require("three");
var three_3 = require("three");
var three_4 = require("three");
var three_5 = require("three");
var three_6 = require("three");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.scene = new three_1.Scene();
        this.camera = new three_2.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new three_3.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.boxGeometry = new three_4.BoxGeometry(1, 1, 1);
        this.basicMaterial = new three_5.MeshBasicMaterial({ color: 0x00ff00 });
        this.mesh = new three_6.Mesh(this.boxGeometry, this.basicMaterial);
        this.scene.add(this.mesh);
        this.camera.position.z = 5;
        this.renderer.render(this.scene, this.camera);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map