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
var bind_object_component_1 = require("../../components-elementary/bind-object.component");
var data_provider_service_1 = require("../../data.provider.service");
var anchor_1 = require("../../three-basis/anchor");
var anchor_to_vector2_1 = require("../../three-basis/anchor-to-vector2");
var CubeControlComponent = CubeControlComponent_1 = (function (_super) {
    __extends(CubeControlComponent, _super);
    function CubeControlComponent(dataProviderService) {
        var _this = _super.call(this) || this;
        _this.objects = new core_1.QueryList();
        _this.dataProviderService = dataProviderService;
        return _this;
    }
    CubeControlComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        function getBodyMaterial(color) { return new three_1.MeshLambertMaterial({ color: color }); }
        var partsHeight = 0.1;
        var cubePartsRoot = this.objects.filter(function (p) { return p.name === 'CubeParts'; })[0];
        var cubeParts = cubePartsRoot.getObjects().filter(function (p) { return p.name === 'CubePart'; }).sort(function (p) { return -Number(p.getItems().filter(function (p1) { return p1.key === 'Value'; })[0].value); });
        var group = new three_1.Group();
        var ratesMaxValue = Number(cubeParts[cubeParts.length - 1].getItems().filter(function (p) { return p.key === 'Value'; })[0].value);
        for (var i = 0; i < cubeParts.length; i++) {
            var cubePart = cubeParts[i];
            var color = new three_1.Color(cubePart.getItems().filter(function (p) { return p.key === 'Color'; })[0].value);
            var element = void 0;
            if (i === 0) {
                var value = Math.sqrt(Number(cubePart.getItems().filter(function (p) { return p.key === 'Value'; })[0].value) / ratesMaxValue);
                element = new cube_first_element_1.CubeFirstElement(value, partsHeight, getBodyMaterial(color)).getElement();
            }
            else {
                var previousCubePart = cubeParts[i - 1];
                var value = Math.sqrt(Number(previousCubePart.getItems().filter(function (p) { return p.key === 'Value'; })[0].value) / ratesMaxValue);
                var value2 = Math.sqrt(Number(cubePart.getItems().filter(function (p) { return p.key === 'Value'; })[0].value) / ratesMaxValue);
                element = new cube_serial_element_1.CubeSerialElement(value, value2, partsHeight, getBodyMaterial(color)).getElement();
            }
            group.add(element);
        }
        var ratesThickness = 0.08;
        var cubeRatesRoot = this.objects.filter(function (p) { return p.name === 'CubeRates'; })[0];
        var cubeRates = cubeRatesRoot.getObjects().filter(function (p) { return p.name === 'CubeRate'; });
        var ratesSum = cubeRates.map(function (p) { return Number(p.getItems().filter(function (p1) { return p1.key === 'Value'; })[0].value); }).reduce(function (p, p1) { return p + p1; }, 0);
        var widths = 0;
        cubeRates.forEach(function (rate) {
            var value = Number(rate.getItems().filter(function (p) { return p.key === 'Value'; })[0].value);
            var width = value / ratesSum;
            var color = rate.getItems().filter(function (p) { return p.key === 'Color'; })[0].value;
            var element = new three_1.Mesh(new three_1.BoxGeometry(width, ratesThickness, ratesThickness), getBodyMaterial(color));
            element.translateOnAxis(new three_1.Vector3((width - 1) * 0.5 + widths, partsHeight + ratesThickness * 0.5, (ratesThickness - 1) * 0.5), 1);
            widths = widths + width;
            group.add(element);
        });
        var ratesTitle = cubeRatesRoot.getItems().filter(function (p) { return p.key === 'Title'; })[0].value;
        var leftRateValue = cubeRates[0].getItems().filter(function (p) { return p.key === 'Value'; })[0].value;
        var rightRateValue = cubeRates[cubeRates.length - 1].getItems().filter(function (p) { return p.key === 'Value'; })[0].value;
        var fontUrl = 'assets/fonts/helvetiker_regular.typeface.json';
        var promise = this.dataProviderService.getPromise(fontUrl);
        var textsMaterial = new three_1.MeshBasicMaterial({ color: 'white' });
        var ratesTitleSize = 0.04;
        var ratesValueSize = 0.05;
        promise.then(function (fontData) {
            var rateValuesGroup = new three_1.Group();
            var ratesTitleGeometry = _this.getTextGeometry(ratesTitle, fontData, ratesTitleSize, anchor_1.Anchor.LowerCenter);
            var ratesTitleElement = new three_1.Mesh(ratesTitleGeometry, textsMaterial);
            ratesTitleElement.translateY(partsHeight + ratesThickness + ratesTitleSize * 0.5);
            rateValuesGroup.add(ratesTitleElement);
            var leftRateValueGeometry = _this.getTextGeometry(leftRateValue, fontData, ratesValueSize, anchor_1.Anchor.LowerLeft);
            var leftRateValueElement = new three_1.Mesh(leftRateValueGeometry, textsMaterial);
            var rightRateValueGeometry = _this.getTextGeometry(rightRateValue, fontData, ratesValueSize, anchor_1.Anchor.LowerRight);
            var rightRateValueElement = new three_1.Mesh(rightRateValueGeometry, textsMaterial);
            leftRateValueElement.translateOnAxis(new three_1.Vector3(-0.45, partsHeight + ratesThickness + ratesValueSize * 0.2, 0), 1);
            rightRateValueElement.translateOnAxis(new three_1.Vector3(0.45, partsHeight + ratesThickness + ratesValueSize * 0.2, 0), 1);
            rateValuesGroup.add(rightRateValueElement);
            rateValuesGroup.add(leftRateValueElement);
            rateValuesGroup.translateZ(-0.5);
            group.add(rateValuesGroup);
        }).catch(function (e) { return console.log(e); });
        this.object3d = group;
    };
    CubeControlComponent.prototype.getTextGeometry = function (text, fontData, size, anchor) {
        if (anchor === void 0) { anchor = anchor_1.Anchor.MiddleCenter; }
        var font = new three_1.Font(fontData);
        var shapes = font.generateShapes(text, size, 1);
        var shapeGeometry = new three_1.ShapeGeometry(shapes);
        shapeGeometry.computeBoundingBox();
        var vector2 = anchor_to_vector2_1.AnchorToVector2(anchor);
        var xMid = -0.5 * (vector2.x + 1) * (shapeGeometry.boundingBox.max.x - shapeGeometry.boundingBox.min.x);
        var yMid = -0.5 * (vector2.y + 1) * (shapeGeometry.boundingBox.max.y - shapeGeometry.boundingBox.min.y);
        shapeGeometry.translate(xMid, yMid, 0);
        var bufferGeometry = new three_1.BufferGeometry();
        bufferGeometry.fromGeometry(shapeGeometry);
        return bufferGeometry;
    };
    return CubeControlComponent;
}(object3d_component_1.Object3dComponent));
__decorate([
    core_1.ContentChildren(bind_object_component_1.BindObjectComponent),
    __metadata("design:type", core_1.QueryList)
], CubeControlComponent.prototype, "objects", void 0);
CubeControlComponent = CubeControlComponent_1 = __decorate([
    core_1.Component({
        selector: 'cube-control',
        template: '<ng-content></ng-content>',
        providers: [{ provide: object3d_component_1.Object3dComponent, useExisting: core_1.forwardRef(function () { return CubeControlComponent_1; }) }]
    }),
    __metadata("design:paramtypes", [data_provider_service_1.DataProviderService])
], CubeControlComponent);
exports.CubeControlComponent = CubeControlComponent;
var CubeControlComponent_1;
//# sourceMappingURL=cube-control.component.js.map