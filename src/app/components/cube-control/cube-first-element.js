"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var three_1 = require("three");
var cube_element_1 = require("./cube-element");
var CubeFirstElement = (function (_super) {
    __extends(CubeFirstElement, _super);
    function CubeFirstElement(value, height, color) {
        var _this = _super.call(this, color) || this;
        var boxGeometry = new three_1.BoxGeometry(value, height, value);
        var element = new three_1.Mesh(boxGeometry, _this.material);
        element.translateOnAxis(new three_1.Vector3(value - 1, height, value - 1).multiplyScalar(0.5), 1);
        _this.element = element;
        return _this;
    }
    return CubeFirstElement;
}(cube_element_1.CubeElement));
exports.CubeFirstElement = CubeFirstElement;
//# sourceMappingURL=cube-first-element.js.map