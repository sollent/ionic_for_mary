webpackJsonp([3],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfishaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AfishaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AfishaPage = /** @class */ (function () {
    function AfishaPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.id = this.navParams.get('id');
        this.GetFullData(this.id);
    }
    AfishaPage.prototype.GetFullData = function (id) {
        var _this = this;
        this.http.get("http://test9.superresheba.by/project/Mary/Get_Full_Films.php?id=" + id)
            .map(function (res) { return res.json(); })
            .subscribe(function (Arr) {
            _this.Title = Arr.title;
            _this.Image = Arr.image;
            _this.Genre = Arr.genre;
            _this.Age = Arr.age;
            _this.Country = Arr.country;
            _this.Content = Arr.anons;
            _this.Date = Arr.av_date;
            _this.Time = Arr.time;
        });
    };
    AfishaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AfishaPage');
    };
    AfishaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-afisha',template:/*ion-inline-start:"/home/sollent98/Рабочий стол/ionic_proj/Afisha/src/pages/afisha/afisha.html"*/'<!--\n  Generated template for the AfishaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>afisha</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n      <ion-title padding>{{Title}}</ion-title>\n      <img class="image" src="{{Image}}" alt="">\n    <h4><b>Genre:</b> {{Genre}}</h4>\n    <h4><b>Age:</b> {{Age}}</h4>\n    <h4><b>Country:</b> {{Country}}</h4>\n    <p padding>{{Content}}</p>\n    <h4><b>Available date:</b> {{Date}}</h4>\n    <h4><b>Time:</b> {{Time}}</h4>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/sollent98/Рабочий стол/ionic_proj/Afisha/src/pages/afisha/afisha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], AfishaPage);
    return AfishaPage;
}());

//# sourceMappingURL=afisha.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__films_films__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.openFilms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__films_films__["a" /* FilmsPage */]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/sollent98/Рабочий стол/ionic_proj/Afisha/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title class="caption">Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-title>You are welcome</ion-title>\n  <img padding src="https://pp.userapi.com/c834103/v834103094/139958/weVxGTOW98c.jpg" alt="">\n  <ion-card>\n    <ion-card-content>\n      Добро пожаловать на нашу Афишу. Насладитесь кино вместе с нами!\n    </ion-card-content>\n    <button ion-button color="danger" full (click)="openFilms()">Available films</button>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/sollent98/Рабочий стол/ionic_proj/Afisha/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/afisha/afisha.module": [
		274,
		2
	],
	"../pages/films/films.module": [
		276,
		1
	],
	"../pages/home/home.module": [
		275,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__films_films__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__films_films__["a" /* FilmsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/sollent98/Рабочий стол/ionic_proj/Afisha/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Films" tabIcon="ios-film"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/sollent98/Рабочий стол/ionic_proj/Afisha/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_films_films__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_afisha_afisha__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(197);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_films_films__["a" /* FilmsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_afisha_afisha__["a" /* AfishaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/afisha/afisha.module#AfishaPageModule', name: 'AfishaPage', segment: 'afisha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/films/films.module#FilmsPageModule', name: 'FilmsPage', segment: 'films', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_films_films__["a" /* FilmsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_afisha_afisha__["a" /* AfishaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/sollent98/Рабочий стол/ionic_proj/Afisha/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/sollent98/Рабочий стол/ionic_proj/Afisha/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__afisha_afisha__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FilmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilmsPage = /** @class */ (function () {
    function FilmsPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.GetData();
    }
    FilmsPage.prototype.GetData = function () {
        var _this = this;
        this.http.get("http://test9.superresheba.by/project/Mary/All_Films.php")
            .map(function (res) { return res.json(); })
            .subscribe(function (Arr) {
            _this.FilmsData = Arr;
            console.log(Arr);
        });
    };
    FilmsPage.prototype.openAfisha = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__afisha_afisha__["a" /* AfishaPage */], { id: id });
    };
    FilmsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilmsPage');
    };
    FilmsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-films',template:/*ion-inline-start:"/home/sollent98/Рабочий стол/ionic_proj/Afisha/src/pages/films/films.html"*/'<!--\n  Generated template for the FilmsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title class="caption">Films</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let film of FilmsData">\n    <ion-title class="title">{{film.title}}</ion-title>\n    <img class="image" src="{{film.image}}" alt="">\n    <ion-card-content>\n      <p>{{film.anons}}</p>\n      <button class="more" ion-button full (click)="openAfisha(film.id)">Read more</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/sollent98/Рабочий стол/ionic_proj/Afisha/src/pages/films/films.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], FilmsPage);
    return FilmsPage;
}());

//# sourceMappingURL=films.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map