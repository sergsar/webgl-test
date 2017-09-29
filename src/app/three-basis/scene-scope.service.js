"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var three_1 = require("three");
var SceneScopeService = (function () {
    function SceneScopeService() {
    }
    Object.defineProperty(SceneScopeService.prototype, "scene", {
        get: function () {
            if (this.privateScene == null) {
                this.privateScene = new three_1.Scene();
            }
            return this.privateScene;
        },
        enumerable: true,
        configurable: true
    });
    return SceneScopeService;
}());
SceneScopeService = __decorate([
    core_1.Injectable()
], SceneScopeService);
exports.SceneScopeService = SceneScopeService;
//# sourceMappingURL=scene-scope.service.js.map