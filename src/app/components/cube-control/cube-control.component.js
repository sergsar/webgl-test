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
var object3d_component_1 = require("../../three-basis/object3d.component");
var cube_first_element_1 = require("./cube-first-element");
var three_1 = require("three");
var cube_serial_element_1 = require("./cube-serial-element");
var CubeControlComponent = CubeControlComponent_1 = (function (_super) {
    __extends(CubeControlComponent, _super);
    function CubeControlComponent() {
        var _this = _super.call(this) || this;
        var value = 0.6;
        var value2 = 1;
        var height = 0.15;
        var group = new three_1.Group();
        var firstElement = new cube_first_element_1.CubeFirstElement(value, height).getElement();
        firstElement.translate(1, new three_1.Vector3(-value * 0.5, 0, -value * 0.5));
        var serialElement = new cube_serial_element_1.CubeSerialElement(value, value2, height).getElement();
        group.add(firstElement);
        group.add(serialElement);
        _this.object3d = group;
        return _this;
    }
    return CubeControlComponent;
}(object3d_component_1.Object3dComponent));
CubeControlComponent = CubeControlComponent_1 = __decorate([
    core_1.Component({
        selector: 'cube-control',
        template: '<ng-content></ng-content>',
        providers: [{ provide: object3d_component_1.Object3dComponent, useExisting: core_1.forwardRef(function () { return CubeControlComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [])
], CubeControlComponent);
exports.CubeControlComponent = CubeControlComponent;
var CubeControlComponent_1;
//# sourceMappingURL=cube-control.component.js.map