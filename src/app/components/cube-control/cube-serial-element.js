"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var three_1 = require("three");
var cube_element_1 = require("./cube-element");
var CubeSerialElement = (function (_super) {
    __extends(CubeSerialElement, _super);
    function CubeSerialElement(value1, value2, height) {
        var _this = _super.call(this) || this;
        var positions = [];
        var geometry = new three_1.BufferGeometry();
        var v1 = value1, v2 = value2, h = height;
        var half = new three_1.Vector3(0.5, 0, 0.5);
        // points:
        var p11 = new three_1.Vector3(v2, 0, 0).sub(half), p12 = new three_1.Vector3(v2, h, 0).sub(half), p13 = new three_1.Vector3(v1, h, 0).sub(half), p14 = new three_1.Vector3(v1, 0, 0).sub(half);
        var p21 = new three_1.Vector3(v2, 0, v2).sub(half), p22 = new three_1.Vector3(v2, h, v2).sub(half), p23 = new three_1.Vector3(v1, h, v1).sub(half);
        var p31 = new three_1.Vector3(0, 0, v2).sub(half), p32 = new three_1.Vector3(0, h, v2).sub(half), p33 = new three_1.Vector3(0, h, v1).sub(half), p34 = new three_1.Vector3(0, 0, v1).sub(half);
        // triangles:
        positions.push(p11.x, p11.y, p11.z, p12.x, p12.y, p12.z, p13.x, p13.y, p13.z);
        positions.push(p11.x, p11.y, p11.z, p13.x, p13.y, p13.z, p14.x, p14.y, p14.z);
        positions.push(p11.x, p11.y, p11.z, p21.x, p21.y, p21.z, p12.x, p12.y, p12.z);
        positions.push(p12.x, p12.y, p12.z, p21.x, p21.y, p21.z, p22.x, p22.y, p22.z);
        positions.push(p12.x, p12.y, p12.z, p22.x, p22.y, p22.z, p23.x, p23.y, p23.z);
        positions.push(p12.x, p12.y, p12.z, p23.x, p23.y, p23.z, p13.x, p13.y, p13.z);
        positions.push(p21.x, p21.y, p21.z, p31.x, p31.y, p31.z, p22.x, p22.y, p22.z);
        positions.push(p22.x, p22.y, p22.z, p31.x, p31.y, p31.z, p32.x, p32.y, p32.z);
        positions.push(p22.x, p22.y, p22.z, p32.x, p32.y, p32.z, p23.x, p23.y, p23.z);
        positions.push(p23.x, p23.y, p23.z, p32.x, p32.y, p32.z, p33.x, p33.y, p33.z);
        positions.push(p31.x, p31.y, p31.z, p34.x, p34.y, p34.z, p33.x, p33.y, p33.z);
        positions.push(p31.x, p31.y, p31.z, p33.x, p33.y, p33.z, p32.x, p32.y, p32.z);
        var pA = new three_1.Vector3();
        var pB = new three_1.Vector3();
        var pC = new three_1.Vector3();
        var ba = new three_1.Vector3();
        var ca = new three_1.Vector3();
        var nx, ny, nz;
        var normals = [];
        var colors = [];
        var color = new three_1.Color();
        color.setRGB(0.8, 0.8, 0.4);
        var i = -1;
        while (i <= positions.length) {
            pA.set(positions[++i], positions[++i], positions[++i]);
            pB.set(positions[++i], positions[++i], positions[++i]);
            pC.set(positions[++i], positions[++i], positions[++i]);
            ba.subVectors(pB, pA);
            ca.subVectors(pC, pA);
            ba.cross(ca).normalize();
            nx = ba.x;
            ny = ba.y;
            nz = ba.z;
            normals.push(nx, ny, nz);
            normals.push(nx, ny, nz);
            normals.push(nx, ny, nz);
            colors.push(color.r, color.g, color.b);
            colors.push(color.r, color.g, color.b);
            colors.push(color.r, color.g, color.b);
        }
        function disposeArray() { this.array = null; }
        geometry.addAttribute('position', new three_1.Float32BufferAttribute(positions, 3).onUpload(disposeArray));
        geometry.addAttribute('normal', new three_1.Float32BufferAttribute(normals, 3).onUpload(disposeArray));
        geometry.addAttribute('color', new three_1.Float32BufferAttribute(colors, 3).onUpload(disposeArray));
        geometry.computeBoundingSphere();
        var material = new three_1.MeshPhongMaterial({
            color: 0xaaaaaa, specular: 0xffffff, shininess: 250,
            side: three_1.DoubleSide, vertexColors: three_1.VertexColors
        });
        _this.element = new three_1.Mesh(geometry, material);
        return _this;
    }
    return CubeSerialElement;
}(cube_element_1.CubeElement));
exports.CubeSerialElement = CubeSerialElement;
//# sourceMappingURL=cube-serial-element.js.map