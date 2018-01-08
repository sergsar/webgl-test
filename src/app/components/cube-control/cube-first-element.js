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
    function CubeFirstElement(value, height) {
        var _this = _super.call(this) || this;
        var boxGeometry = new three_1.BoxGeometry(value, height, value);
        _this.element = new three_1.Mesh(boxGeometry, _this.material);
        return _this;
    }
    return CubeFirstElement;
}(cube_element_1.CubeElement));
exports.CubeFirstElement = CubeFirstElement;
//# sourceMappingURL=cube-first-element.js.map