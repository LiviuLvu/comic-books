webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: "\n    <my-comics></my-comics>\n  "
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__default_request_options_service__ = __webpack_require__("../../../../../src/app/default-request-options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__comics_comics_component__ = __webpack_require__("../../../../../src/app/comics/comics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hero_data__ = __webpack_require__("../../../../../src/app/hero-data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__hero_data__["a" /* HeroData */], { delay: 100 })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__comics_comics_component__["a" /* ComicsComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__default_request_options_service__["a" /* requestOptionsProvider */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/comics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComicsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// for mock-adata


var ComicsService = (function () {
    // constructor(private jsonp: Jsonp) {}
    function ComicsService(http) {
        this.http = http;
    }
    ComicsService.prototype.search = function (term) {
        var heroesUrl = 'api/heroes';
        // let wikiUrl = 'https://gateway.marvel.com:443/v1/public/comics';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        // params.set('titleStartsWith', term);
        // params.set('ts', '1497813263166');
        // params.set('apikey', '2db63c4eb012accb67daa5284fb68156');
        // params.set('hash', '9c4ef371d679cba7f8703210a3294644');
        // params.set('callback', 'JSONP_CALLBACK');
        // TODO: Add error handling
        return this.http
            .get(heroesUrl)
            .map(function (res) { return res.json().data; });
        // console.log(response.json().data.results);
    };
    return ComicsService;
}());
ComicsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === "function" && _a || Object])
], ComicsService);

var _a;
//# sourceMappingURL=comics.service.js.map

/***/ }),

/***/ "../../../../../src/app/comics/comics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-5 col-md-7 col-centered\">\r\n    <div class=\"header\"></div>\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" #term (keyup)=\"search(term.value)\" placeholder=\"Search comic books on Marvel\" autofocus />\r\n      <span class=\"input-group-btn\">\r\n        <button class=\"btn btn-primary\" type=\"button\">Search</button>\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-5 col-md-7 col-centered\">\r\n    <ul class=\"list-unstyled\">\r\n      <li class=\"list-group-item media my-1\" *ngFor=\"let item of items | async\">\r\n\r\n        <div class=\"image-container d-flex align-self-center mr-3 text-right\">\r\n          <img class=\"thumb-nail\" src=\"{{item.thumbnail}}\" alt=\"Thumbnail Image\">\r\n          <!--<img src=\"{{item.thumbnail.path}}.{{item.thumbnail.extension}}\" alt=\"Thumbnail Image\">-->\r\n        </div>\r\n\r\n        <div class=\"media-body text-left\">\r\n          <div class=\"row\">\r\n\r\n            <div class=\"col col-10\">\r\n              <h6>{{item.title}}</h6>\r\n              <a href=\"\">Details and links</a>\r\n            </div>\r\n            <div class=\"col col-2\">\r\n              <i class=\"fa fa-chevron-right fa-lg my-3\" aria-hidden=\"true\"></i>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<footer class=\"footer text-center\">\r\n  <a href=\"https://github.com/LiviuLvu/comic-books\">View source code on Github</a>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/comics/comics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comics_service__ = __webpack_require__("../../../../../src/app/comics.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComicsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ComicsComponent = (function () {
    function ComicsComponent(comicsService) {
        this.comicsService = comicsService;
        this.searchTermStream = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    ComicsComponent.prototype.search = function (term) {
        this.searchTermStream.next(term);
    };
    ComicsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.searchTermStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.comicsService.search(term); });
    };
    return ComicsComponent;
}());
ComicsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'my-comics',
        template: __webpack_require__("../../../../../src/app/comics/comics.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_5__comics_service__["a" /* ComicsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__comics_service__["a" /* ComicsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__comics_service__["a" /* ComicsService */]) === "function" && _a || Object])
], ComicsComponent);

var _a;
//# sourceMappingURL=comics.component.js.map

/***/ }),

/***/ "../../../../../src/app/default-request-options.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* unused harmony export DefaultRequestOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return requestOptionsProvider; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefaultRequestOptions = (function (_super) {
    __extends(DefaultRequestOptions, _super);
    function DefaultRequestOptions() {
        var _this = _super.call(this) || this;
        _this.headers.set('Content-Type', 'application/json');
        return _this;
    }
    return DefaultRequestOptions;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* BaseRequestOptions */]));
DefaultRequestOptions = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DefaultRequestOptions);

var requestOptionsProvider = { provide: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */], useClass: DefaultRequestOptions };
//# sourceMappingURL=default-request-options.service.js.map

/***/ }),

/***/ "../../../../../src/app/hero-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroData; });
var HeroData = (function () {
    function HeroData() {
    }
    HeroData.prototype.createDb = function () {
        var heroes = [
            { title: 'Hulk', thumbnail: '../assets/0.jpg' },
            { title: 'Spider Man', thumbnail: '../assets/1.jpg' },
            { title: 'Spider Man - Forever Young', thumbnail: '../assets/2.jpg' },
            { title: 'The Amaizing Spiderman - Brand New Day', thumbnail: '../assets/3.jpg' },
            { title: 'Spiderman - Home Coming', thumbnail: '../assets/3.jpg' },
            { title: 'Hulk', thumbnail: '../assets/0.jpg' },
            { title: 'Spider Man', thumbnail: '../assets/1.jpg' },
            { title: 'Spider Man - Forever Young', thumbnail: '../assets/2.jpg' },
            { title: 'The Amaizing Spiderman - Brand New Day', thumbnail: '../assets/3.jpg' },
            { title: 'Spiderman - Home Coming', thumbnail: '../assets/3.jpg' },
            { title: 'Hulk', thumbnail: '../assets/0.jpg' },
            { title: 'Spider Man', thumbnail: '../assets/1.jpg' },
            { title: 'Spider Man - Forever Young', thumbnail: '../assets/2.jpg' },
            { title: 'The Amaizing Spiderman - Brand New Day', thumbnail: '../assets/3.jpg' },
            { title: 'Spiderman - Home Coming', thumbnail: '../assets/3.jpg' },
            { title: 'Hulk', thumbnail: '../assets/0.jpg' },
            { title: 'Spider Man', thumbnail: '../assets/1.jpg' },
            { title: 'Spider Man - Forever Young', thumbnail: '../assets/2.jpg' },
            { title: 'The Amaizing Spiderman - Brand New Day', thumbnail: '../assets/3.jpg' },
            { title: 'Spiderman - Home Coming', thumbnail: '../assets/3.jpg' },
            { title: 'Hulk', thumbnail: '../assets/0.jpg' },
            { title: 'Spider Man', thumbnail: '../assets/1.jpg' },
            { title: 'Spider Man - Forever Young', thumbnail: '../assets/2.jpg' },
            { title: 'The Amaizing Spiderman - Brand New Day', thumbnail: '../assets/3.jpg' },
            { title: 'Spiderman - Home Coming', thumbnail: '../assets/3.jpg' },
            { title: 'Hulk', thumbnail: '../assets/0.jpg' },
            { title: 'Spider Man', thumbnail: '../assets/1.jpg' },
            { title: 'Spider Man - Forever Young', thumbnail: '../assets/2.jpg' },
            { title: 'The Amaizing Spiderman - Brand New Day', thumbnail: '../assets/3.jpg' },
            { title: 'Spiderman - Home Coming', thumbnail: '../assets/3.jpg' },
            { title: 'Hulk', thumbnail: '../assets/0.jpg' },
            { title: 'Spider Man', thumbnail: '../assets/1.jpg' },
            { title: 'Spider Man - Forever Young', thumbnail: '../assets/2.jpg' },
            { title: 'The Amaizing Spiderman - Brand New Day', thumbnail: '../assets/3.jpg' },
            { title: 'Spiderman - Home Coming', thumbnail: '../assets/3.jpg' },
            { title: 'Hulk', thumbnail: '../assets/0.jpg' },
            { title: 'Spider Man', thumbnail: '../assets/1.jpg' },
            { title: 'Spider Man - Forever Young', thumbnail: '../assets/2.jpg' },
            { title: 'The Amaizing Spiderman - Brand New Day', thumbnail: '../assets/3.jpg' },
            { title: 'Spiderman - Home Coming', thumbnail: '../assets/3.jpg' },
            { title: 'Hulk', thumbnail: '../assets/0.jpg' },
            { title: 'Spider Man', thumbnail: '../assets/1.jpg' },
            { title: 'Spider Man - Forever Young', thumbnail: '../assets/2.jpg' },
            { title: 'The Amaizing Spiderman - Brand New Day', thumbnail: '../assets/3.jpg' },
            { title: 'Spiderman - Home Coming', thumbnail: '../assets/3.jpg' },
        ];
        return { heroes: heroes };
    };
    return HeroData;
}());

//# sourceMappingURL=hero-data.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map