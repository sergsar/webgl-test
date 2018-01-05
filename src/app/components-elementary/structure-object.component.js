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
var core_1 = require("@angular/core");
var structure_item_component_1 = require("./structure-item.component");
var StructureObjectComponent = (function () {
    function StructureObjectComponent() {
        this.structureItems = new core_1.QueryList();
    }
    Object.defineProperty(StructureObjectComponent.prototype, "values", {
        get: function () {
            return this.structureItems;
        },
        enumerable: true,
        configurable: true
    });
    return StructureObjectComponent;
}());
__decorate([
    core_1.ContentChildren(structure_item_component_1.StructureItemComponent),
    __metadata("design:type", core_1.QueryList)
], StructureObjectComponent.prototype, "structureItems", void 0);
StructureObjectComponent = __decorate([
    core_1.Component({ selector: 'structure-object', template: '<ng-content></ng-content>' })
], StructureObjectComponent);
exports.StructureObjectComponent = StructureObjectComponent;
//# sourceMappingURL=structure-object.component.js.map