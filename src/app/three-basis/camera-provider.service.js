"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var three_1 = require("three");
var CameraProvider = (function () {
    function CameraProvider() {
        this.perspectiveCameras = new Map();
    }
    CameraProvider.prototype.getPerspectiveCamera = function (fn, id) {
        if (fn == null) {
            fn = function () { return new three_1.PerspectiveCamera(); };
        }
        var perspectiveCamera = this.perspectiveCameras.get(id);
        if (perspectiveCamera == null) {
            perspectiveCamera = fn();
            this.perspectiveCameras.set(id, perspectiveCamera);
        }
        return perspectiveCamera;
    };
    CameraProvider = __decorate([
        core_1.Injectable()
    ], CameraProvider);
    return CameraProvider;
}());
exports.CameraProvider = CameraProvider;
//# sourceMappingURL=camera-provider.service.js.map