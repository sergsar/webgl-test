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
var three_renderer_component_1 = require("./three-renderer.component");
var ThreeAreaComponent = (function () {
    function ThreeAreaComponent(ngZone) {
        this.ngZone = ngZone;
    }
    ThreeAreaComponent.prototype.ngAfterContentInit = function () {
        this.animate();
    };
    ThreeAreaComponent.prototype.animate = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () { return requestAnimationFrame(function () { return _this.animate(); }); });
        this.threeRendererComponents.first.render();
    };
    return ThreeAreaComponent;
}());
__decorate([
    core_1.ContentChildren(three_renderer_component_1.ThreeRendererComponent),
    __metadata("design:type", core_1.QueryList)
], ThreeAreaComponent.prototype, "threeRendererComponents", void 0);
ThreeAreaComponent = __decorate([
    core_1.Component({ selector: 'three-area', template: "<ng-content></ng-content>" }),
    __metadata("design:paramtypes", [core_1.NgZone])
], ThreeAreaComponent);
exports.ThreeAreaComponent = ThreeAreaComponent;
//# sourceMappingURL=three-area.component.js.map