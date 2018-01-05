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
var data_item_component_1 = require("./data-item.component");
var DataObjectComponent = (function () {
    function DataObjectComponent() {
        this.dataItems = new core_1.QueryList();
    }
    Object.defineProperty(DataObjectComponent.prototype, "values", {
        get: function () {
            return this.dataItems;
        },
        enumerable: true,
        configurable: true
    });
    return DataObjectComponent;
}());
__decorate([
    core_1.ContentChildren(data_item_component_1.DataItemComponent),
    __metadata("design:type", core_1.QueryList)
], DataObjectComponent.prototype, "dataItems", void 0);
DataObjectComponent = __decorate([
    core_1.Component({ selector: 'data-object', template: '<ng-content></ng-content>' })
], DataObjectComponent);
exports.DataObjectComponent = DataObjectComponent;
//# sourceMappingURL=data-object.component.js.map