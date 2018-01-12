"use strict";
var three_1 = require("three");
function AnchorToVector2(value) {
    var x = Math.round(value * 0.1) - 1;
    var y = (value % 10) - 1;
    return new three_1.Vector2(x, y);
}
exports.AnchorToVector2 = AnchorToVector2;
//# sourceMappingURL=anchor-to-vector2.js.map