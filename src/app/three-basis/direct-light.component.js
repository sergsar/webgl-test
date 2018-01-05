"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var object3d_1 = require("./object3d");
var DirectLightComponent = DirectLightComponent_1 = (function (_super) {
    __extends(DirectLightComponent, _super);
    function DirectLightComponent() {
        var _this = _super.call(this) || this;
        _this.directionalLight = new three_1.DirectionalLight(0x606060);
        _this.directionalLight.position.set(1, 1, 1);
        _this.object3D = _this.directionalLight;
        return _this;
    }
    return DirectLightComponent;
}(object3d_1.Object3D));
DirectLightComponent = DirectLightComponent_1 = __decorate([
    core_1.Component({
        selector: 'direct-light',
        template: '',
        providers: [{ provide: object3d_1.Object3D, useExisting: core_1.forwardRef(function () { return DirectLightComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [])
], DirectLightComponent);
exports.DirectLightComponent = DirectLightComponent;
var DirectLightComponent_1;
//# sourceMappingURL=direct-light.component.js.map