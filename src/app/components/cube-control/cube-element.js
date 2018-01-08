"use strict";
var three_1 = require("three");
var CubeElement = (function () {
    function CubeElement(color) {
        this.material = new three_1.MeshLambertMaterial({ color: color });
    }
    CubeElement.prototype.getElement = function () {
        return this.element;
    };
    return CubeElement;
}());
exports.CubeElement = CubeElement;
//# sourceMappingURL=cube-element.js.map