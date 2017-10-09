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
var object_three_d_component_1 = require("./object-three-d.component");
var HemisphereLightComponent = HemisphereLightComponent_1 = (function (_super) {
    __extends(HemisphereLightComponent, _super);
    function HemisphereLightComponent() {
        var _this = _super.call(this) || this;
        _this.hemisphereLight = new three_1.HemisphereLight(0x606060, 0x404040);
        _this.object3D = _this.hemisphereLight;
        return _this;
    }
    return HemisphereLightComponent;
}(object_three_d_component_1.ObjectThreeDComponent));
HemisphereLightComponent = HemisphereLightComponent_1 = __decorate([
    core_1.Component({
        selector: 'hemisphere-light',
        template: '',
        providers: [{ provide: object_three_d_component_1.ObjectThreeDComponent, useExisting: core_1.forwardRef(function () { return HemisphereLightComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [])
], HemisphereLightComponent);
exports.HemisphereLightComponent = HemisphereLightComponent;
var HemisphereLightComponent_1;
//# sourceMappingURL=hemisphere-light.component.js.map