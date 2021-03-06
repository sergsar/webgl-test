"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AnimateProvider = (function () {
    function AnimateProvider(ngZone) {
        this.ngZone = ngZone;
        this.animateMap = new Map();
        this.animate();
    }
    AnimateProvider.prototype.setFrameTask = function (key, task) {
        this.animateMap.set(key, task);
    };
    AnimateProvider.prototype.animate = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () { return requestAnimationFrame(function () { return _this.animate(); }); });
        this.animateMap.forEach(function (p) { return p(); });
    };
    AnimateProvider = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _a || Object])
    ], AnimateProvider);
    return AnimateProvider;
    var _a;
}());
exports.AnimateProvider = AnimateProvider;
//# sourceMappingURL=animate-provider.service.js.map