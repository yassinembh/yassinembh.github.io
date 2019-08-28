webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favourite_favourite_component__ = __webpack_require__("../../../../../src/app/favourite/favourite.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__search_search_component__["a" /* SearchComponent */] },
    { path: 'favourite', component: __WEBPACK_IMPORTED_MODULE_3__favourite_favourite_component__["a" /* FavouriteComponent */] }
];
var AppRouterModule = /** @class */ (function () {
    function AppRouterModule() {
    }
    AppRouterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRouterModule);
    return AppRouterModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wr\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_router_module__ = __webpack_require__("../../../../../src/app/app-router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__favourite_favourite_component__ = __webpack_require__("../../../../../src/app/favourite/favourite.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_search_service__ = __webpack_require__("../../../../../src/app/shared/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_favourite_service__ = __webpack_require__("../../../../../src/app/shared/favourite.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_7__favourite_favourite_component__["a" /* FavouriteComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_router_module__["a" /* AppRouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__shared_search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_favourite_service__["a" /* FavouriteService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/favourite/favourite.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/favourite/favourite.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"book\" *ngFor=\"let book of favouriteBooks\">\n  <h4 class=\"title\">\n    <a href=\"{{ book['infoLink'] }}\" target=\"_blank\">{{ book['title'] }}</a>\n  </h4>\n  <p class=\"categories\"><i>Категории: {{ book['categories'] }}</i></p>\n  <p class=\"authors\"><i>Авторы: {{ book['authors'] }}</i></p>\n  <a\n    href=\"{{ book['previewLink'] }}\"\n    target=\"_blank\"\n    class=\"button-read\"\n  >\n    Читать\n  </a>\n  <button\n    class=\"button-favourite\"\n    (click)=\"deleteFromFavourite(book)\"\n  >\n    Убрать из избранных\n  </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/favourite/favourite.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouriteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_favourite_service__ = __webpack_require__("../../../../../src/app/shared/favourite.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavouriteComponent = /** @class */ (function () {
    function FavouriteComponent(favouriteService) {
        this.favouriteService = favouriteService;
        this.favouriteBooks = [];
    }
    FavouriteComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < localStorage.length; i++) {
            this.favouriteBooks.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
    };
    FavouriteComponent.prototype.deleteFromFavourite = function (book) {
        this.favouriteService.deleteFromFavourite(book);
        this.favouriteBooks = this.favouriteService.getFavouriteBooks();
    };
    FavouriteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-favourite',
            template: __webpack_require__("../../../../../src/app/favourite/favourite.component.html"),
            styles: [__webpack_require__("../../../../../src/app/favourite/favourite.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_favourite_service__["a" /* FavouriteService */]])
    ], FavouriteComponent);
    return FavouriteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <input\n    type=\"text\"\n    [(ngModel)]=\"searchString\"\n    (keyup.enter)=\"search()\"\n    class=\"search\"\n  >\n  <button routerLink=\"/favourite\">Избранные: {{ LocalStorage.length }}</button>\n</div>\n<hr>\n<div class=\"book\" *ngFor=\"let bookItem of booksList\">\n  <img\n    *ngIf=\"bookItem['volumeInfo']['imageLinks']; else elseImage\"\n    src=\"{{ bookItem['volumeInfo']['imageLinks']['thumbnail'] || bookItem['volumeInfo']['imageLinks']['smallThumbnail'] }}\"\n    alt=\"{{ bookItem['volumeInfo']['title'] }}\"\n    title=\"{{ bookItem['volumeInfo']['title'] }}\"\n    class=\"image\"\n  >\n  <ng-template #elseImage>\n    <div\n      class=\"image\"\n      title=\"{{ bookItem['volumeInfo']['title'] }}\"\n      style=\"line-height: 200px; font-size: 13px; text-align: center\"\n    >\n      Nothing to show\n    </div>\n  </ng-template>\n  <h4 class=\"title\">\n    <a href=\"{{ bookItem['volumeInfo']['infoLink'] }}\" target=\"_blank\">{{ bookItem['volumeInfo']['title'] }}</a>\n  </h4>\n  <p\n    *ngIf=\"bookItem['searchInfo'] && bookItem['searchInfo']['textSnippet']; else elseSnippet\"\n    class=\"textSnippet\"\n  >\n    {{ bookItem['searchInfo']['textSnippet'] }}\n  </p><ng-template #elseSnippet></ng-template>\n  <p class=\"categories\"><i>Категории: {{ bookItem['volumeInfo']['categories'] }}</i></p>\n  <p class=\"authors\"><i>Авторы: {{ bookItem['volumeInfo']['authors'] }}</i></p>\n  <a\n    href=\"{{ bookItem['volumeInfo']['previewLink'] }}\"\n    target=\"_blank\"\n    class=\"button-read\"\n  >\n    Читать\n  </a>\n  <button\n    class=\"button-favourite\"\n    (click)=\"addToFavourite(bookItem)\"\n  >\n    <i\n      class=\"fa fa-star\"\n      [ngClass]=\"{'in-favourite': json.parse(LocalStorage.getItem(bookItem['id']))}\"\n    ></i>\n    В избранное\n  </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_search_service__ = __webpack_require__("../../../../../src/app/shared/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_favourite_service__ = __webpack_require__("../../../../../src/app/shared/favourite.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchService, favouriteService) {
        this.searchService = searchService;
        this.favouriteService = favouriteService;
        this.LocalStorage = localStorage;
        this.json = JSON;
        this.booksList = [];
        this.searchString = 'php';
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.search();
    };
    SearchComponent.prototype.search = function () {
        var _this = this;
        this.searchService.search(this.searchString)
            .subscribe(function (res) {
            _this.booksList = res['items'];
            _this.searchString = '';
            console.log(_this.booksList);
        });
    };
    SearchComponent.prototype.addToFavourite = function (book) {
        this.favouriteService.addToFavourite(book);
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_favourite_service__["a" /* FavouriteService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/favourite.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouriteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FavouriteService = /** @class */ (function () {
    function FavouriteService() {
        this.favouriteBooks = [];
    }
    FavouriteService.prototype.addToFavourite = function (book) {
        if (localStorage.getItem(book['id'])) {
            localStorage.removeItem(book['id']);
        }
        else {
            var data = {
                id: book['id'],
                title: book['volumeInfo']['title'],
                infoLink: book['volumeInfo']['infoLink'],
                categories: book['volumeInfo']['categories'],
                authors: book['volumeInfo']['authors'],
                previewLink: book['volumeInfo']['previewLink'],
            };
            localStorage.setItem(book['id'], JSON.stringify(data));
        }
    };
    FavouriteService.prototype.deleteFromFavourite = function (book) {
        localStorage.removeItem(book['id']);
        this.favouriteBooks = [];
        for (var i = 0; i < localStorage.length; i++) {
            this.favouriteBooks.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
    };
    FavouriteService.prototype.getFavouriteBooks = function () {
        return this.favouriteBooks;
    };
    FavouriteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FavouriteService);
    return FavouriteService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.search = function (search) {
        return this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + search);
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map