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
var http_1 = require("@angular/common/http");
var DataProviderService = (function () {
    function DataProviderService(httpClient) {
        this.httpClient = httpClient;
    }
    DataProviderService.prototype.getObservable = function (datasetName) {
        return this.httpClient.get('https://data.idvp.net/api/query/' + datasetName, { headers: new http_1.HttpHeaders().set('X-Tenant-Id', 'logus') });
    };
    return DataProviderService;
}());
DataProviderService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], DataProviderService);
exports.DataProviderService = DataProviderService;
//# sourceMappingURL=data.provider.service.js.map