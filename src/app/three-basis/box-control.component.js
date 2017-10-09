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
var three_1 = require("three");
var core_1 = require("@angular/core");
var object_three_d_component_1 = require("./object-three-d.component");
var BoxControlComponent = BoxControlComponent_1 = (function (_super) {
    __extends(BoxControlComponent, _super);
    function BoxControlComponent() {
        var _this = _super.call(this) || this;
        _this.boxGeometry = new three_1.BoxGeometry(1, 1, 1);
        _this.meshBasicMaterial = new three_1.MeshBasicMaterial({ color: 0x00ff00 });
        _this.meshPhongMaterial = new three_1.MeshPhongMaterial({ color: 0x00ff00, specular: 0x050505 });
        _this.meshLambertMaterial = new three_1.MeshLambertMaterial({ color: 0x00ff00 });
        _this.object3D = new three_1.Mesh(_this.boxGeometry, _this.meshLambertMaterial);
        return _this;
    }
    return BoxControlComponent;
}(object_three_d_component_1.ObjectThreeDComponent));
BoxControlComponent = BoxControlComponent_1 = __decorate([
    core_1.Component({
        selector: 'box-control',
        template: '',
        providers: [{ provide: object_three_d_component_1.ObjectThreeDComponent, useExisting: core_1.forwardRef(function () { return BoxControlComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [])
], BoxControlComponent);
exports.BoxControlComponent = BoxControlComponent;
var BoxControlComponent_1;
//# sourceMappingURL=box-control.component.js.map