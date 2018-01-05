"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var group3d_component_1 = require("./group3d.component");
var data_object_component_1 = require("./data-object.component");
var data_item_component_1 = require("./data-item.component");
var ComponentsElementaryModule = (function () {
    function ComponentsElementaryModule() {
    }
    return ComponentsElementaryModule;
}());
ComponentsElementaryModule = __decorate([
    core_1.NgModule({
        declarations: [group3d_component_1.Group3dComponent, data_object_component_1.DataObjectComponent, data_item_component_1.DataItemComponent],
        exports: [group3d_component_1.Group3dComponent, data_object_component_1.DataObjectComponent, data_item_component_1.DataItemComponent]
    })
], ComponentsElementaryModule);
exports.ComponentsElementaryModule = ComponentsElementaryModule;
//# sourceMappingURL=components-elementary.module.js.map