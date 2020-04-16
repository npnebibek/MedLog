(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n    <ng-flash-message></ng-flash-message>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  \r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/calendar/calendar.component */ "./src/app/components/calendar/calendar.component.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/app/components/messages/messages.component.ts");
/* harmony import */ var _components_patient_patient_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/patient/patient.component */ "./src/app/components/patient/patient.component.ts");
/* harmony import */ var _components_administration_administration_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/administration/administration.component */ "./src/app/components/administration/administration.component.ts");
/* harmony import */ var _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/reports/reports.component */ "./src/app/components/reports/reports.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _components_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/all-users/all-users.component */ "./src/app/components/all-users/all-users.component.ts");
/* harmony import */ var _components_write_message_write_message_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/write-message/write-message.component */ "./src/app/components/write-message/write-message.component.ts");
/* harmony import */ var _components_new_patient_new_patient_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/new-patient/new-patient.component */ "./src/app/components/new-patient/new-patient.component.ts");
/* harmony import */ var _components_new_appointment_new_appointment_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/new-appointment/new-appointment.component */ "./src/app/components/new-appointment/new-appointment.component.ts");
/* harmony import */ var _components_all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/all-reports/all-reports.component */ "./src/app/components/all-reports/all-reports.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var appRoutes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'allUsers', component: _components_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_22__["AllUsersComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'navbar', component: _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: 'calendar', component: _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_16__["CalendarComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: 'patient', component: _components_patient_patient_component__WEBPACK_IMPORTED_MODULE_18__["PatientComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: 'administration', component: _components_administration_administration_component__WEBPACK_IMPORTED_MODULE_19__["AdministrationComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: 'reports', component: _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_20__["ReportsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: 'messages', component: _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_17__["MessagesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: 'writeMessage', component: _components_write_message_write_message_component__WEBPACK_IMPORTED_MODULE_23__["WriteMessageComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: 'newPatient', component: _components_new_patient_new_patient_component__WEBPACK_IMPORTED_MODULE_24__["NewPatientComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: 'newAppointment', component: _components_new_appointment_new_appointment_component__WEBPACK_IMPORTED_MODULE_25__["NewAppointmentComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] },
    { path: 'allReports', component: _components_all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_26__["AllReportsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_16__["CalendarComponent"],
                _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_17__["MessagesComponent"],
                _components_patient_patient_component__WEBPACK_IMPORTED_MODULE_18__["PatientComponent"],
                _components_administration_administration_component__WEBPACK_IMPORTED_MODULE_19__["AdministrationComponent"],
                _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_20__["ReportsComponent"],
                _components_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_22__["AllUsersComponent"],
                _components_write_message_write_message_component__WEBPACK_IMPORTED_MODULE_23__["WriteMessageComponent"],
                _components_new_patient_new_patient_component__WEBPACK_IMPORTED_MODULE_24__["NewPatientComponent"],
                _components_new_appointment_new_appointment_component__WEBPACK_IMPORTED_MODULE_25__["NewAppointmentComponent"],
                _components_all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_26__["AllReportsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_11__["NgFlashMessagesModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_14__["HttpModule"]
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_10__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_21__["JwtHelperService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/administration/administration.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/administration/administration.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/administration/administration.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/administration/administration.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Search All Registered Users</h2>\r\n<form (submit)=\"onSearch()\">\r\n<input type=\"text\"  [(ngModel)]=\"userId\" name=\"userId\" class=\"form-control\" placeholder=\"userId\">\r\n<br/>\r\n<input type=\"submit\" class=\"btn btn-primary\" value=\"Search\">\r\n<a class=\"btn btn-default\" [routerLink]=\"['/allUsers']\">All Users</a>\r\n</form>\r\n<br/>\r\n<div *ngIf= \"users\">\r\n  \r\n<form (submit)=\"onDelte()\">\r\n    <div class=\"jumbotron\">\r\n    <h2 class=\"page-header\">{{users.name}}</h2>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">Usename: {{users.username}}</li>\r\n      <li class=\"list-group-item\">Email: {{users.email}}</li>\r\n      <li class=\"list-group-item\">Permission: {{users.permission}}</li>\r\n      <input type=\"submit\" class=\"btn btn-warning\" value=\"Delete User\">\r\n      </ul>\r\n    </div>\r\n    </form>\r\n    </div>\r\n\r\n      \r\n    \r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/components/administration/administration.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/administration/administration.component.ts ***!
  \***********************************************************************/
/*! exports provided: AdministrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationComponent", function() { return AdministrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdministrationComponent = /** @class */ (function () {
    function AdministrationComponent(authService) {
        this.authService = authService;
    }
    AdministrationComponent.prototype.ngOnInit = function () {
    };
    AdministrationComponent.prototype.onSearch = function () {
        var _this = this;
        this.authService.findUser(this.userId).subscribe(function (data) {
            return _this.users = data.user;
        });
    };
    AdministrationComponent.prototype.onDelte = function () {
        this.authService.deleteUser(this.userId).subscribe(function (data) { });
    };
    AdministrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-administration',
            template: __webpack_require__(/*! ./administration.component.html */ "./src/app/components/administration/administration.component.html"),
            styles: [__webpack_require__(/*! ./administration.component.css */ "./src/app/components/administration/administration.component.css")],
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AdministrationComponent);
    return AdministrationComponent;
}());



/***/ }),

/***/ "./src/app/components/all-reports/all-reports.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/all-reports/all-reports.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/all-reports/all-reports.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/all-reports/all-reports.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>List of All Reports</h2>\r\n<br/>\r\n<div *ngFor= \"let report of reports\">\r\n    <div class=\"jumbotron\">\r\n      <ul>\r\n      <li class=\"list-group-item\">Date: {{report.date}}</li>\r\n      <li class=\"list-group-item\">Doctor's Note: {{report.docNote}}</li>\r\n      <li class=\"list-group-item\">Prescribed Medicine: {{report.medicineNote}}</li>\r\n      </ul>\r\n    </div>\r\n    <br />\r\n   </div>\r\n    \r\n      "

/***/ }),

/***/ "./src/app/components/all-reports/all-reports.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/all-reports/all-reports.component.ts ***!
  \*****************************************************************/
/*! exports provided: AllReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllReportsComponent", function() { return AllReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllReportsComponent = /** @class */ (function () {
    function AllReportsComponent(authService) {
        this.authService = authService;
    }
    AllReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.allReports().subscribe(function (data) {
            return _this.reports = data;
        });
    };
    AllReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-reports',
            template: __webpack_require__(/*! ./all-reports.component.html */ "./src/app/components/all-reports/all-reports.component.html"),
            styles: [__webpack_require__(/*! ./all-reports.component.css */ "./src/app/components/all-reports/all-reports.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AllReportsComponent);
    return AllReportsComponent;
}());



/***/ }),

/***/ "./src/app/components/all-users/all-users.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/all-users/all-users.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/all-users/all-users.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/all-users/all-users.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>List of All Registered Users</h2>\r\n<br/>\r\n<div *ngFor= \"let user of users\">\r\n    <div class=\"jumbotron\">\r\n    <h2 class=\"page-header\">{{user.name}}</h2>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">Userid: {{user._id}}</li>\r\n      <li class=\"list-group-item\">Usename: {{user.username}}</li>\r\n      <li class=\"list-group-item\">Email: {{user.email}}</li>\r\n      <li class=\"list-group-item\">Permission: {{user.permission}}</li>\r\n      </ul>\r\n    </div>\r\n    <br />\r\n    </div>\r\n    \r\n      "

/***/ }),

/***/ "./src/app/components/all-users/all-users.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/all-users/all-users.component.ts ***!
  \*************************************************************/
/*! exports provided: AllUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllUsersComponent", function() { return AllUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllUsersComponent = /** @class */ (function () {
    function AllUsersComponent(authService) {
        this.authService = authService;
    }
    AllUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAllUsers().subscribe(function (authService) {
            return _this.users = authService;
        });
    };
    AllUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-users',
            template: __webpack_require__(/*! ./all-users.component.html */ "./src/app/components/all-users/all-users.component.html"),
            styles: [__webpack_require__(/*! ./all-users.component.css */ "./src/app/components/all-users/all-users.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AllUsersComponent);
    return AllUsersComponent;
}());



/***/ }),

/***/ "./src/app/components/calendar/calendar.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/calendar/calendar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/calendar/calendar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/calendar/calendar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\r\n<a class=\"btn btn-primary\" [routerLink]=\"['/newPatient']\">Add New Patient</a>\r\n<br />\r\n<br />\r\n<a class=\"btn btn-primary\" [routerLink]=\"['/newAppointment']\">Add New Appointment</a>\r\n<br />\r\n<br />\r\n<h2>Appointments</h2>\r\n<form (submit)=\"onExamine()\">\r\n<div *ngFor= \"let appointment of appointments\">\r\n        <div class=\"jumbotron\">\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item\">Date: {{appointment.dateOfAppointment}}</li>\r\n          <li class=\"list-group-item\">Patient: {{appointment.patient}}</li>\r\n          <li class=\"list-group-item\">title: {{appointment.title}}</li>\r\n          <li class=\"list-group-item\">Status: {{appointment.status}}</li>\r\n          <li class=\"list-group-item\">Comment: {{appointment.comment}}</li>\r\n          <input *ngIf=\"authService.isDoctor()\" class=\"btn btn-primary\" type=\"submit\" value=\"Examine\">\r\n          </ul>\r\n        </div>\r\n        <br />\r\n        </div>\r\n        </form>\r\n        \r\n"

/***/ }),

/***/ "./src/app/components/calendar/calendar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/calendar/calendar.component.ts ***!
  \***********************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.allAppointments().subscribe(function (data) {
            return _this.appointments = data;
        });
    };
    CalendarComponent.prototype.onExamine = function () {
        this.router.navigate(['/reports']);
    };
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/components/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/components/calendar/calendar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <h1>Mean authentication app</h1>\r\n  <p class=\"lead\">welcome to where time stands still</p>\r\n    <div>\r\n      <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\r\n      <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\r\n    </div>\r\n  \r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <h3>Express Backend</h3>\r\n    <p>mama told me when I was young. sit beside my only son. and listen closely</p>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>Angular-Cli</h3>\r\n    <p>there is a house in new orleans they call the rising sun</p>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>JWT tokens</h3>\r\n    <p>master of puppets are pulling your spinnin g your mind and smashing yor brains</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        .head\r\n        {\r\n            padding: 0;\r\n            margin: 0;\r\n            margin-top: 80px;\r\n            width: 100%;\r\n            height: 100%;\r\n            font-family: \"Helvetica Neue\" , Helvetica, sans-serif;\r\n            background: #FFFFFF;\r\n            background-image: url('logo.png');\r\n            background-repeat: no-repeat;\r\n            background-position: top;\r\n        }\r\n\r\n        .logincontent\r\n        {\r\n            position: fixed;\r\n            width: 350px;\r\n            height: 300px;\r\n            top: 50%;\r\n            left: 50%;\r\n            margin-top: -150px;\r\n            margin-left: -175px;\r\n            background: #07A8C3;\r\n            padding-top: 10px;\r\n            \r\n            \r\n        }\r\n\r\n        .loginheading\r\n        {\r\n            text-align: center;\r\n            border-bottom: solid 1px #ECF2F5;\r\n            padding-left: 18px;\r\n            padding-bottom: 10px;\r\n            color: #ffffff;\r\n            font-size: 20px;\r\n            font-weight: bold;\r\n            font-family: sans-serif;\r\n            \r\n        }\r\n\r\n        label\r\n        {\r\n            color: #ffffff;\r\n            display: inline-block;\r\n            margin-left: 18px;\r\n            padding-top: 10px;\r\n            font-size: 15px;\r\n        }\r\n\r\n        input[type=text], input[type=password]\r\n        {\r\n            font-size: 14px;\r\n            padding-left: 10px;\r\n            margin: 10px;\r\n            margin-top: 12px;\r\n            margin-left: 18px;\r\n            width: 300px;\r\n            height: 35px;\r\n            border: 2px solid #ccc;\r\n            border-radius: 2px;\r\n            font-size: 14px;\r\n        }\r\n\r\n        .loginremember\r\n        {\r\n            text-align: center;\r\n            background: #c9dde8;\r\n            height: 80px;\r\n            margin-top: 20px;\r\n        }\r\n\r\n        .loginbtn\r\n        {\r\n            justify-content: center;\r\n            margin-top: 25px;\r\n            padding: 6px 20px;\r\n            font-size: 14px;\r\n            font-weight: bold;\r\n            color: #fff;\r\n            background-color: #07A8C3;\r\n            border-radius: 30px;\r\n            border: 1px solid #07A8C3;\r\n            cursor: pointer;\r\n        }"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\r\n<form (submit)=\"onLoginSubmit()\">\r\n \r\n  <div class=\"logincontent\">\r\n  \r\n      <div class=\"loginheading\">\r\n          Login\r\n      </div>\r\n      <label for=\"txtUserName\">\r\n          Username:</label>\r\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" />\r\n      <label for=\"txtPassword\">\r\n          Password:</label>\r\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" />\r\n      <div class=\"loginremember\">\r\n          <input  class=\"btn btn-primary\" type=\"submit\" value=\"Login\"/>\r\n         \r\n      </div>\r\n      </div>\r\n  \r\n</form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(
    // implement the services required for this module
    authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            // populating the usr object with ngmodel obtained username and password
            username: this.username,
            password: this.password
        };
        // inject authsService into the backend of the application
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.sucess) {
                _this.authService.storeUserData(data.token, data.user, data.user.id); // inject the method to obtain user object, token and userid
                console.log(data.user.id);
                _this.router.navigate(['/calendar']); // navigate to the calender if successful
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: ['Something went wrong'],
                    dismissible: true,
                    timeout: 1000,
                    type: 'danger'
                });
                _this.router.navigate(['/login']); // navigate to login
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/messages/messages.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/messages/messages.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/messages/messages.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/messages/messages.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\r\n<a class=\"btn btn-primary\" [routerLink]=\"['/writeMessage']\">Write Memo</a>\r\n<br />\r\n<br />\r\n<h2>Memo by users</h2>\r\n<br />\r\n<br />\r\n<div *ngFor= \"let message of messages\">\r\n    <div class=\"jumbotron\">\r\n    <ul class=\"list-group\">\r\n        <li class=\"list-group-item\">Date: {{message.date}}</li>\r\n      <li class=\"list-group-item\">Memo: {{message.note}}</li>\r\n      \r\n      </ul>\r\n    </div>\r\n    <br />\r\n    </div>\r\n    "

/***/ }),

/***/ "./src/app/components/messages/messages.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/messages/messages.component.ts ***!
  \***********************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(authService) {
        this.authService = authService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAllMessages().subscribe(function (authService) {
            return _this.messages = authService;
        });
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/components/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/components/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">MedLog</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a class=\"nav-link\"  [routerLink]=\"['/calendar']\">Schedule</a>\r\n      </li>\r\n      <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a class=\"nav-link\"  [routerLink]=\"['/messages']\">Messages</a>\r\n      </li>\r\n      <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a class=\"nav-link\"  [routerLink]=\"['/patient']\">Patients</a>\r\n      </li>\r\n      <li *ngIf=\"authService.loggedIn() && authService.isDoctor()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a class=\"nav-link\"  [routerLink]=\"['/reports']\">Reports</a>\r\n      </li>\r\n      <li *ngIf=\"authService.loggedIn() && authService.isAdmin()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a class=\"nav-link\"  [routerLink]=\"['/administration']\">Administration</a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\r\n      </li>    \r\n      <li *ngIf=\"authService.loggedIn()\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\r\n      </li> \r\n      \r\n     </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.showFlashMessage({
            messages: ['you are now logged out'],
            dismissible: true,
            timeout: 3000,
            type: 'success'
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-appointment/new-appointment.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/new-appointment/new-appointment.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new-appointment/new-appointment.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/new-appointment/new-appointment.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\r\n<h2 class=\"page-header\">Register New Appointment</h2>\r\n<form (submit)=\"onCreateAppointment()\">\r\n  <div class=\"form-group\">\r\n      <label>Date:</label>\r\n      <input type=\"date\" [(ngModel)]=\"dateOfappointment\" name=\"dateOfappointment\" class=\"form-control\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n      <label>Title:</label>\r\n      <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\">\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <select class=\"form-control\">\r\n      <option *ngFor=\"let patient of patients\">{{patient.name}}</option>\r\n      </select>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>patient's name:</label>\r\n    <input type=\"text\" [(ngModel)]=\"patient\" name=\"patient\" class=\"form-control\">\r\n</div>\r\n\r\n  \r\n<div class=\"form-group\">\r\n        <label>Status:</label>\r\n        <input type=\"text\" [(ngModel)]=\"status\" name=\"status\" class=\"form-control\">\r\n      </div>\r\n\r\n    \r\n <div class=\"form-group\">\r\n    <label>Comment:</label>\r\n    <input type=\"text\" [(ngModel)]=\"comment\" name=\"comment\" class=\"form-control\">\r\n  </div>\r\n\r\n<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>"

/***/ }),

/***/ "./src/app/components/new-appointment/new-appointment.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/new-appointment/new-appointment.component.ts ***!
  \*************************************************************************/
/*! exports provided: NewAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAppointmentComponent", function() { return NewAppointmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewAppointmentComponent = /** @class */ (function () {
    function NewAppointmentComponent(authService, router, validateService, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
    }
    NewAppointmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.allPatientsName().subscribe(function (authService) {
            return _this.patients = authService;
        });
    };
    NewAppointmentComponent.prototype.onCreateAppointment = function () {
        var _this = this;
        var appointment = {
            dateOfAppointment: this.dateOfAppointment,
            title: this.title,
            patient: this.patient,
            status: this.status,
            comment: this.comment
        };
        console.log('patient');
        this.authService.newAppointment(appointment).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.showFlashMessage({
                    messages: ['An Appointment was created'],
                    dismissible: true,
                    timeout: 1000,
                    type: 'success'
                });
                _this.router.navigate(['/calendar']);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: ['Something went wrong'],
                    dismissible: true,
                    timeout: 1000,
                    type: 'danger'
                });
                _this.router.navigate(['/newAppointment']);
            }
        });
    };
    NewAppointmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-appointment',
            template: __webpack_require__(/*! ./new-appointment.component.html */ "./src/app/components/new-appointment/new-appointment.component.html"),
            styles: [__webpack_require__(/*! ./new-appointment.component.css */ "./src/app/components/new-appointment/new-appointment.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], NewAppointmentComponent);
    return NewAppointmentComponent;
}());



/***/ }),

/***/ "./src/app/components/new-patient/new-patient.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/new-patient/new-patient.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new-patient/new-patient.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/new-patient/new-patient.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register New Patient</h2>\r\n<form (submit)=\"onCreatePatient()\">\r\n  <div class=\"form-group\">\r\n    <label>Name:</label>\r\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>DOB:</label>\r\n    <input type=\"date\" [(ngModel)]=\"dateOfBirth\" name=\"dateOfBirth\" class=\"form-control\">\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <label>Sex:</label>\r\n  <input type=\"text\" [(ngModel)]=\"sex\" name=\"sex\" class=\"form-control\">\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <label>Email:</label>\r\n  <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n    <label>Id/License:</label>\r\n    <input type=\"text\" [(ngModel)]=\"licenseId\" name=\"licenseId\" class=\"form-control\">\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n    <label>Contact:</label>\r\n    <input type=\"text\" [(ngModel)]=\"contact\" name=\"contact\" class=\"form-control\">\r\n</div> \r\n<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>"

/***/ }),

/***/ "./src/app/components/new-patient/new-patient.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/new-patient/new-patient.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPatientComponent", function() { return NewPatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewPatientComponent = /** @class */ (function () {
    function NewPatientComponent(flashMessage, authService, router, validateService) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.validateService = validateService;
    }
    NewPatientComponent.prototype.ngOnInit = function () {
    };
    NewPatientComponent.prototype.onCreatePatient = function () {
        var _this = this;
        var patient = {
            name: this.name,
            dateOfBirth: this.dateOfBirth,
            sex: this.sex,
            email: this.email,
            licenseId: this.licenseId,
            contact: this.contact
        };
        this.authService.registerPatient(patient).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.showFlashMessage({
                    messages: ['Patient is now Registered'],
                    dismissible: true,
                    timeout: 1000,
                    type: 'success'
                });
                _this.router.navigate(['/calendar']);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: ['Something went wrong'],
                    dismissible: true,
                    timeout: 3000,
                    type: 'danger'
                });
                _this.router.navigate(['/newPatient']);
            }
        });
    };
    NewPatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-patient',
            template: __webpack_require__(/*! ./new-patient.component.html */ "./src/app/components/new-patient/new-patient.component.html"),
            styles: [__webpack_require__(/*! ./new-patient.component.css */ "./src/app/components/new-patient/new-patient.component.css")]
        }),
        __metadata("design:paramtypes", [ng_flash_messages__WEBPACK_IMPORTED_MODULE_1__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"]])
    ], NewPatientComponent);
    return NewPatientComponent;
}());



/***/ }),

/***/ "./src/app/components/patient/patient.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/patient/patient.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/patient/patient.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/patient/patient.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>List of All Registered Patients</h2>\r\n<br/>\r\n<div *ngFor= \"let patient of patients\">\r\n    <div class=\"jumbotron\">\r\n    <h2 class=\"page-header\">{{patient.name}}</h2>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">DOB: {{patient.dateOfBirth}}</li>\r\n      <li class=\"list-group-item\">Sex: {{patient.sex}}</li>\r\n      <li class=\"list-group-item\">Email: {{patient.email}}</li>\r\n      <li class=\"list-group-item\">LicenseId: {{patient.licenseId}}</li>\r\n      <li class=\"list-group-item\">Contact: {{patient.contact}}</li>\r\n      </ul>\r\n    </div>\r\n    <br />\r\n    </div>\r\n    \r\n      "

/***/ }),

/***/ "./src/app/components/patient/patient.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/patient/patient.component.ts ***!
  \*********************************************************/
/*! exports provided: PatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return PatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatientComponent = /** @class */ (function () {
    function PatientComponent(authService) {
        this.authService = authService;
    }
    PatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.allPatientsName().subscribe(function (authService) {
            return _this.patients = authService;
        });
    };
    PatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient',
            template: __webpack_require__(/*! ./patient.component.html */ "./src/app/components/patient/patient.component.html"),
            styles: [__webpack_require__(/*! ./patient.component.css */ "./src/app/components/patient/patient.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], PatientComponent);
    return PatientComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\r\n<form (submit)=\"onRegisterSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label>Name:</label>\r\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Username:</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <label>Email:</label>\r\n  <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <label>Password:</label>\r\n  <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n</div>\r\n<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // validate registeration
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.showFlashMessage({
                messages: ['please fill the forms'],
                dismissible: true,
                timeout: 1000,
                type: 'danger'
            });
            return false;
        }
        // validate email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.showFlashMessage({
                messages: ['please fill the correct email address'],
                dismissible: true,
                timeout: 1000,
                type: 'danger'
            });
            return false;
        }
        // register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.showFlashMessage({
                    messages: ['You are now registerd to sign in'],
                    dismissible: true,
                    timeout: 3000,
                    type: 'success'
                });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: ['Something went wrong'],
                    dismissible: true,
                    timeout: 3000,
                    type: 'danger'
                });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/reports/reports.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/reports/reports.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/reports/reports.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/reports/reports.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\r\n<a class=\"btn btn-primary\" [routerLink]=\"['/allReports']\">View All Reports</a>\r\n<br />\r\n<form (submit) = \"onWrite()\">\r\n  <div class=\"form-group\">\r\n      <h2>Report</h2>\r\n      <label>Doctor's Note:</label>\r\n      <input type=\"text\" [(ngModel)]=\"docNote\" name=\"docNote\" class=\"form-control\" size=\"20\"/>\r\n      <br />\r\n      <br />\r\n      <label>Medicines:</label>\r\n      <input type=\"text\" [(ngModel)]=\"medicineNote\" name=\"medicineNote\" class=\"form-control\" size=\"20\"/>\r\n      <br />\r\n      <br />\r\n      <input class=\"btn btn-primary\" type=\"submit\" value=\"Report\"/>   \r\n  </div>\r\n  </form>\r\n  "

/***/ }),

/***/ "./src/app/components/reports/reports.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/reports/reports.component.ts ***!
  \*********************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent.prototype.onWrite = function () {
        var _this = this;
        var report = {
            docNote: this.docNote,
            medicineNote: this.medicineNote
        };
        this.authService.newReport(report).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.showFlashMessage({
                    messages: ['Report is now Registered'],
                    dismissible: true,
                    timeout: 1000,
                    type: 'success'
                });
                _this.router.navigate(['/calendar']);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: ['Something went wrong'],
                    dismissible: true,
                    timeout: 3000,
                    type: 'danger'
                });
                _this.router.navigate(['/reports']);
            }
        });
    };
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/components/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/components/reports/reports.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/components/write-message/write-message.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/write-message/write-message.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/write-message/write-message.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/write-message/write-message.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit) = \"onCreate()\">\r\n<div class=\"form-group\">\r\n    <h2>Memo</h2>\r\n    <input type=\"text\" [(ngModel)]=\"note\" name=\"note\" class=\"form-control\" rows=\"10\"/>\r\n    <br />\r\n    <input class=\"btn btn-primary\" type=\"submit\" value=\"Create\"/>\r\n    \r\n</div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/write-message/write-message.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/write-message/write-message.component.ts ***!
  \*********************************************************************/
/*! exports provided: WriteMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteMessageComponent", function() { return WriteMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WriteMessageComponent = /** @class */ (function () {
    function WriteMessageComponent(authservice, router, flashmessage) {
        this.authservice = authservice;
        this.router = router;
        this.flashmessage = flashmessage;
    }
    WriteMessageComponent.prototype.ngOnInit = function () {
    };
    WriteMessageComponent.prototype.onCreate = function () {
        var _this = this;
        var message = {
            note: this.note
        };
        this.authservice.newMessage(message).subscribe(function (data) {
            if (data.success) {
                _this.flashmessage.showFlashMessage({
                    messages: ['your messages has been sent'],
                    dismissible: true,
                    timeout: 3000,
                    type: 'success'
                });
                _this.router.navigate(['/messages']);
            }
        });
    };
    WriteMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-write-message',
            template: __webpack_require__(/*! ./write-message.component.html */ "./src/app/components/write-message/write-message.component.html"),
            styles: [__webpack_require__(/*! ./write-message.component.css */ "./src/app/components/write-message/write-message.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], WriteMessageComponent);
    return WriteMessageComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.findUser = function (userId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        return this.http.get('users/' + userId, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.deleteUser = function (userId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        return this.http.delete('users/' + userId, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getAllUsers = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/users', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getAllMessages = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/index', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.newMessage = function (message) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.getId();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/' + this.userId + '/messages', message, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.registerPatient = function (patient) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/registerPatient', patient, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.newAppointment = function (appointment) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/newAppointment', appointment, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.allAppointments = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/allAppointments', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.allPatientsName = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/allPatients', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.newReport = function (report) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/newReport', report, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.allReports = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/allReports', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user, id) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('id', id);
        this.authToken = token;
        this.user = user;
        this.userId = id;
    };
    AuthService.prototype.getId = function () {
        this.userId = localStorage.getItem('id');
        console.log(this.userId);
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
        console.log(this.authToken);
    };
    AuthService.prototype.loggedIn = function () {
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        if (!this.authToken) {
            return false;
        }
        else {
            return !helper.isTokenExpired(this.authToken);
        }
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.isAdmin = function () {
        if (this.user.permission === 'admin') {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.isDoctor = function () {
        if (this.user.permission === 'doctor') {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined || user.email === undefined || user.username === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        // tslint:disable-next-line:max-line-length
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\BIBEK\Desktop\Projects\Medlog\MedLog\Interface-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map