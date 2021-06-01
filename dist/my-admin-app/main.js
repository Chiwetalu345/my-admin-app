(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Chiwetalu\Desktop\Angular\my-admin-app\src\main.ts */"zUnb");


/***/ }),

/***/ "8H4g":
/*!****************************************!*\
  !*** ./src/app/Shared/crud.service.ts ***!
  \****************************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");


class CrudService {
    constructor(fireservices) {
        this.fireservices = fireservices;
    }
    create_Newuser(Record) {
        return this.fireservices.collection('Users').doc(Record['id']).set(Record);
    }
}
CrudService.ɵfac = function CrudService_Factory(t) { return new (t || CrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
CrudService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CrudService, factory: CrudService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAU4uv_7UNnKhg_c71Oidde9ZFI2J7QEFM",
        authDomain: "fir-angular-auth-46a61.firebaseapp.com",
        projectId: "fir-angular-auth-46a61",
        storageBucket: "fir-angular-auth-46a61.appspot.com",
        messagingSenderId: "995107071202",
        appId: "1:995107071202:web:34ea6df29f68536142eabb"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DDap":
/*!******************************************************!*\
  !*** ./src/app/main-layout/main-layout.component.ts ***!
  \******************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class MainLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 6, vars: 0, consts: [[1, "layout-box"], [1, "top-bar"], [1, "page-component"]], template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Platform Capital");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  font-size: 18px !important;\n  overflow: hidden !important;\n  padding: 0;\n  margin: 0;\n  font-family: \"Nunito\", sans-serif;\n}\n.layout-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n}\n.layout-box[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow-y: scroll;\n}\n.top-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 68px;\n  background: linear-gradient(to right, #2e2e2e, #37c7f2);\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n}\n.top-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 24px;\n  font-family: \"Nunito\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi5zdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXG1haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdRLHFFQUFBO0FBc0JSO0VBQ0ksWUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO0FDdkJKO0FBSkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7QUFNSjtBQUhJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBS1I7QUFEQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdURBQUE7RUFHQSxnREFBQTtFQUlBLGFBQUE7RUFDQSxjQUFBO0VBR0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhKO0FBS0k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBSFIiLCJmaWxlIjoibWFpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcInV0Zi04XCI7XHJcblxyXG4vLyBJbXBvcnQgYSBHb29nbGUgRm9udFxyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMFwiKTtcclxuXHJcbi8vIFNldCB5b3VyIGJyYW5kIGNvbG9yc1xyXG4kcHVycGxlOiAjYTU5YWQ3O1xyXG4kcGluazogI2ZlNzZjMjtcclxuJGJsdWU6ICMzN2M3ZjI7XHJcblxyXG4kbGlnaHQtcmVkOiAjZmZmM2YzO1xyXG5cclxuJGxpZ2h0OiAjZmFmY2ZmO1xyXG5cclxuXHJcbiRvcmFuZ2U6ICNlMDhkNTU7XHJcblxyXG4kbGlnaHQtZGFyazogIzJlMmUyZTtcclxuJGRhcms6ICMwMjAyMDE7XHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuXHJcblxyXG5cclxuLy8gR0xPQkFMIFNUWUxFU1xyXG5cclxuaHRtbCwgYm9keXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDBcIik7XG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ubGF5b3V0LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5sYXlvdXQtYm94IC5wYWdlLWNvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnRvcC1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2OHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyZTJlMmUsICMzN2M3ZjIpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50b3AtYmFyIGgxIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufSJdfQ== */"] });


/***/ }),

/***/ "NcMt":
/*!********************************************!*\
  !*** ./src/app/Shared/firebase.service.ts ***!
  \********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");



class FirebaseService {
    constructor(firebaseAuth) {
        this.firebaseAuth = firebaseAuth;
        this.isLoggedin = false;
    }
    signin(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firebaseAuth.signInWithEmailAndPassword(email, password)
                .then(res => {
                this.isLoggedin = true;
                localStorage.setItem('user', JSON.stringify(res.user));
            });
        });
    }
    signup(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firebaseAuth.createUserWithEmailAndPassword(email, password)
                .then(res => {
                this.isLoggedin = true;
                localStorage.setItem('user', JSON.stringify(res.user));
            });
        });
    }
    logout() {
        this.firebaseAuth.signOut();
        localStorage.removeItem('user');
    }
}
FirebaseService.ɵfac = function FirebaseService_Factory(t) { return new (t || FirebaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"])); };
FirebaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FirebaseService, factory: FirebaseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "5x/H");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "6nsN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Shared_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/firebase.service */ "NcMt");
/* harmony import */ var _Shared_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/crud.service */ "8H4g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Shared_frud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Shared/frud.service */ "e8ck");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









class DashboardComponent {
    // const a = new LoginComponent();
    // a.handleLogout();
    constructor(firebaseService, crudservice, router, route, frudservice) {
        this.firebaseService = firebaseService;
        this.crudservice = crudservice;
        this.router = router;
        this.route = route;
        this.frudservice = frudservice;
    }
    ngOnInit() {
        firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().onAuthStateChanged(user => {
            if (user == null) {
                //go to login page
                location.href = "/login";
            }
        });
    }
    CreateRecord() {
        let Record = {};
        // Record['id'] = firebase.default.firestore().collection("users").doc().id
        Record['student_number'] = this.student_number;
        Record['school'] = this.school_name;
        Record['date_establishedl'] = this.date_established;
        Record['state'] = this.state;
        Record['city'] = this.city;
        Record['address'] = this.address;
        Record['postal_code'] = this.postal_code;
        Record['telephone_number'] = this.telephone_number;
        // Record['school'] = this.school_name;
        // Record['timestamp'] = firebase.default.firestore.FieldValue.serverTimestamp();
        // Record['created_date'] = new Date().toDateString()
        this.crudservice.create_Newuser(Record).then(res => {
            this.school_name = '';
            this.student_number = '';
            this.date_established = '';
            this.state = '';
            this.city = '';
            this.address = '';
            this.postal_code = '';
            this.telephone_number = '';
            console.log(res);
            this.message = 'User data save done';
        }).catch(error => {
            console.log(error);
        });
    }
    logout() {
        this.firebaseService.logout();
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Shared_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Shared_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Shared_frud_service__WEBPACK_IMPORTED_MODULE_7__["FrudService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 48, vars: 9, consts: [["noteForm", "ngForm"], [1, "number"], ["for", "name"], ["type", "text", "id", "name", "name", "user_name", 3, "ngModel", "ngModelChange"], ["type", "radio", "id", "under_13", "value", "under_13", "name", "user_age"], ["for", "under_13", 1, "light"], ["type", "radio", "id", "over_13", "value", "over_13", "name", "user_age"], ["for", "over_13", 1, "light"], ["for", "mail"], ["type", "number", "id", "mail", "name", "student_number", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "date", "id", "password", "name", "date_established", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "name", "name", "state", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "name", "name", "city", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "name", "name", "address", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "name", "name", "postal_code", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "name", "name", "telephone_number", 3, "ngModel", "ngModelChange"], ["type", "submit", 3, "click"], ["type", "submit", 1, "logout", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Onboarding");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "School info");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Name of School:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_12_listener($event) { return ctx.school_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Category:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Private");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Public");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Number of students");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_24_listener($event) { return ctx.student_number = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Date established:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_27_listener($event) { return ctx.date_established = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "State:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_30_listener($event) { return ctx.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "City:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_33_listener($event) { return ctx.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_36_listener($event) { return ctx.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Postal code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_39_listener($event) { return ctx.postal_code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Telephone number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_42_listener($event) { return ctx.telephone_number = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_44_listener() { return ctx.CreateRecord(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_46_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.school_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.student_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.date_established);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.postal_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.telephone_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"]], styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n  color: #384047;\n}\n\nform[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin: 10px auto;\n  padding: 10px 20px;\n  background: #f4f7f8;\n  border-radius: 8px;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 0 0 30px 0;\n  text-align: center;\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  font-size: 16px;\n  height: auto;\n  margin: 0;\n  outline: 0;\n  padding: 15px;\n  width: 100%;\n  background-color: #e8eeef;\n  color: #8a97a0;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;\n  margin-bottom: 30px;\n}\n\ninput[type=radio][_ngcontent-%COMP%], input[type=checkbox][_ngcontent-%COMP%] {\n  margin: 0 4px 8px 0;\n}\n\nselect[_ngcontent-%COMP%] {\n  padding: 6px;\n  height: 32px;\n  border-radius: 2px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 19px 39px 18px 39px;\n  color: #FFF;\n  background-color: #4bc970;\n  font-size: 18px;\n  text-align: center;\n  font-style: normal;\n  border-radius: 5px;\n  width: 100%;\n  border: 1px solid #3ac162;\n  border-width: 1px 1px 3px;\n  box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;\n  margin-bottom: 10px;\n}\n\n.logout[_ngcontent-%COMP%] {\n  background-color: #d83232;\n  border: 1px solid #833e2f;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  border: none;\n}\n\nlegend[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  margin-bottom: 10px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n}\n\nlabel.light[_ngcontent-%COMP%] {\n  font-weight: 300;\n  display: inline;\n}\n\n.number[_ngcontent-%COMP%] {\n  background-color: #5fcf80;\n  color: #fff;\n  height: 30px;\n  width: 30px;\n  display: inline-block;\n  font-size: 0.8em;\n  margin-right: 4px;\n  line-height: 30px;\n  text-align: center;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 100%;\n}\n\n@media screen and (min-width: 480px) {\n  form[_ngcontent-%COMP%] {\n    max-width: 480px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBOzs7Ozs7Ozs7Ozs7RUFZRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbURBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0cseUJBQUE7RUFDQSx5QkFBQTtBQUVIOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBRUU7SUFDRSxnQkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMzg0MDQ3O1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjRmN2Y4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbjogMCAwIDMwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdLFxyXG5pbnB1dFt0eXBlPVwiZGF0ZXRpbWVcIl0sXHJcbmlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcclxuaW5wdXRbdHlwZT1cInRlbFwiXSxcclxuaW5wdXRbdHlwZT1cInRpbWVcIl0sXHJcbmlucHV0W3R5cGU9XCJ1cmxcIl0sXHJcbnRleHRhcmVhLFxyXG5zZWxlY3Qge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGVlZWY7XHJcbiAgY29sb3I6ICM4YTk3YTA7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsMCwwLDAuMDMpIGluc2V0O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSxcclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBtYXJnaW46IDAgNHB4IDhweCAwO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHBhZGRpbmc6IDE5cHggMzlweCAxOHB4IDM5cHg7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYzk3MDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzNhYzE2MjtcclxuICBib3JkZXItd2lkdGg6IDFweCAxcHggM3B4O1xyXG4gIGJveC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4xKSBpbnNldDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5sb2dvdXR7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNkODMyMzI7XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkICM4MzNlMmY7XHJcbn1cclxuXHJcbmZpZWxkc2V0IHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxubGVnZW5kIHtcclxuICBmb250LXNpemU6IDEuNGVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbmxhYmVsLmxpZ2h0IHtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLm51bWJlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVmY2Y4MDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xyXG5cclxuICBmb3JtIHtcclxuICAgIG1heC13aWR0aDogNDgwcHg7XHJcbiAgfVxyXG5cclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ "6nsN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'my-admin-app';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-layout/main-layout.component */ "DDap");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_8__["MainLayoutComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"]] }); })();


/***/ }),

/***/ "e8ck":
/*!****************************************!*\
  !*** ./src/app/Shared/frud.service.ts ***!
  \****************************************/
/*! exports provided: FrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrudService", function() { return FrudService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");


class FrudService {
    constructor(fireservices) {
        this.fireservices = fireservices;
    }
    create_Newdata(Record) {
        return this.fireservices.collection('Users').doc(Record['id']).set(Record);
    }
}
FrudService.ɵfac = function FrudService_Factory(t) { return new (t || FrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
FrudService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FrudService, factory: FrudService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "5x/H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Shared_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/firebase.service */ "NcMt");
/* harmony import */ var _Shared_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/crud.service */ "8H4g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class SignupComponent {
    constructor(firebaseService, crudservice, router, route) {
        this.firebaseService = firebaseService;
        this.crudservice = crudservice;
        this.router = router;
        this.route = route;
        this.isSignedIn = false;
        this.blocked = false;
    }
    ngOnInit() {
        if (localStorage.getItem('user') == null)
            this.isSignedIn = true;
        else
            this.isSignedIn = false;
    }
    onSignup(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firebaseService.signup(email, password);
            let Record = {};
            Record['id'] = firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore().collection("users").doc().id;
            Record['email'] = this.user_email;
            Record['name'] = this.user_name;
            Record['blocked'] = this.blocked;
            Record['timestamp'] = firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.serverTimestamp();
            Record['created_date'] = new Date().toDateString();
            this.crudservice.create_Newuser(Record).then(res => {
                this.user_name = '';
                this.user_email = '';
                this.user_password = '';
                this.blocked = false;
                console.log(res);
                this.message = 'User data save done';
            }).catch(error => {
                console.log(error);
            });
            if (this.firebaseService.isLoggedin)
                this.isSignedIn = true;
            alert("Sign up is successful");
            this.router.navigateByUrl("/home");
        });
    }
    onSignin(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firebaseService.signup(email, password);
            if (this.firebaseService.isLoggedin)
                this.isSignedIn = true;
        });
    }
    handleLogout() {
        this.isSignedIn = false;
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Shared_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Shared_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 19, vars: 4, consts: [["noteForm", "ngForm"], ["for", "name"], ["type", "text", "id", "name", "name", "user_name", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["for", "mail"], ["type", "email", "id", "mail", "name", "user_email", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["emailSignup", ""], ["for", "password"], ["type", "password", "id", "password", "name", "user_password", "required", "", 1, "input", 3, "ngModel", "ngModelChange"], ["passwordSignup", ""], ["type", "submit", 3, "disabled", "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_8_listener($event) { return ctx.user_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_11_listener($event) { return ctx.user_email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_15_listener($event) { return ctx.user_password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16); return ctx.onSignup(_r1.value, _r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.user_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.user_email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.user_password);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.user_name || !ctx.user_email);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n  color: #384047;\n}\n\nform[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin: 10px auto;\n  padding: 10px 20px;\n  background: #f4f7f8;\n  border-radius: 8px;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 0 0 30px 0;\n  text-align: center;\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  font-size: 16px;\n  height: auto;\n  margin: 0;\n  outline: 0;\n  padding: 15px;\n  width: 100%;\n  background-color: #e8eeef;\n  color: #0f0f10;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;\n  margin-bottom: 30px;\n}\n\ninput[type=radio][_ngcontent-%COMP%], input[type=checkbox][_ngcontent-%COMP%] {\n  margin: 0 4px 8px 0;\n}\n\nselect[_ngcontent-%COMP%] {\n  padding: 6px;\n  height: 32px;\n  border-radius: 2px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 19px 39px 18px 39px;\n  color: #FFF;\n  background-color: #4bc970;\n  font-size: 18px;\n  text-align: center;\n  font-style: normal;\n  border-radius: 5px;\n  width: 100%;\n  border: 1px solid #3ac162;\n  border-width: 1px 1px 3px;\n  box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;\n  margin-bottom: 10px;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  border: none;\n}\n\nlegend[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  margin-bottom: 10px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n}\n\nlabel.light[_ngcontent-%COMP%] {\n  font-weight: 300;\n  display: inline;\n}\n\n.number[_ngcontent-%COMP%] {\n  background-color: #5fcf80;\n  color: #fff;\n  height: 30px;\n  width: 30px;\n  display: inline-block;\n  font-size: 0.8em;\n  margin-right: 4px;\n  line-height: 30px;\n  text-align: center;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 100%;\n}\n\n@media screen and (min-width: 480px) {\n  form[_ngcontent-%COMP%] {\n    max-width: 480px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBOzs7Ozs7Ozs7Ozs7RUFZRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbURBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBRUU7SUFDRSxnQkFBQTtFQUFGO0FBQ0YiLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMzg0MDQ3O1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjZjRmN2Y4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbjogMCAwIDMwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sXHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdLFxyXG5pbnB1dFt0eXBlPVwiZGF0ZXRpbWVcIl0sXHJcbmlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcclxuaW5wdXRbdHlwZT1cInRlbFwiXSxcclxuaW5wdXRbdHlwZT1cInRpbWVcIl0sXHJcbmlucHV0W3R5cGU9XCJ1cmxcIl0sXHJcbnRleHRhcmVhLFxyXG5zZWxlY3Qge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGVlZWY7XHJcbiAgY29sb3I6ICMwZjBmMTA7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsMCwwLDAuMDMpIGluc2V0O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSxcclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBtYXJnaW46IDAgNHB4IDhweCAwO1xyXG59XHJcblxyXG5zZWxlY3Qge1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHBhZGRpbmc6IDE5cHggMzlweCAxOHB4IDM5cHg7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiYzk3MDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzNhYzE2MjtcclxuICBib3JkZXItd2lkdGg6IDFweCAxcHggM3B4O1xyXG4gIGJveC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4xKSBpbnNldDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmxlZ2VuZCB7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG5sYWJlbC5saWdodCB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5udW1iZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZmNmODA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgZm9ybSB7XHJcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gIH1cclxuXHJcbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-layout/main-layout.component */ "DDap");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '', component: _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"], children: [
            { path: '', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
            { path: 'home', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"] }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "5x/H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Shared_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/firebase.service */ "NcMt");
/* harmony import */ var _Shared_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/crud.service */ "8H4g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class LoginComponent {
    constructor(firebaseService, crudservice, router, route) {
        this.firebaseService = firebaseService;
        this.crudservice = crudservice;
        this.router = router;
        this.route = route;
        this.isSignedIn = false;
        this.blocked = false;
    }
    ngOnInit() {
        if (localStorage.getItem('user') !== null)
            this.isSignedIn = true;
        else
            this.isSignedIn = false;
    }
    onSignup(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firebaseService.signup(email, password);
            let Record = {};
            Record['id'] = firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore().collection("users").doc().id;
            Record['email'] = this.user_email;
            Record['name'] = this.user_name;
            Record['blocked'] = this.blocked;
            Record['timestamp'] = firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.serverTimestamp();
            Record['created_date'] = new Date().toDateString();
            this.crudservice.create_Newuser(Record).then(res => {
                this.user_name = '';
                this.user_email = '';
                this.user_password = '';
                this.blocked = false;
                console.log(res);
                this.message = 'User data save done';
            }).catch(error => {
                console.log(error);
            });
            if (this.firebaseService.isLoggedin)
                this.isSignedIn = true;
            alert("Sign up is successful");
            this.router.navigateByUrl('d');
        });
    }
    onSignin(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.firebaseService.signin(email, password);
            if (this.firebaseService.isLoggedin) {
                this.isSignedIn = true;
                this.router.navigateByUrl("/home");
            }
            else {
                alert("invalid username or password");
            }
        });
    }
    handleLogout() {
        this.isSignedIn = false;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Shared_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Shared_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 16, vars: 0, consts: [["noteForm", "ngForm"], ["for", "mail"], ["type", "email", "id", "mail", "name", "user_email", "required", "", 1, "input"], ["email", ""], ["for", "password"], ["type", "password", "id", "password", "name", "user_password", "required", "", 1, "input"], ["password", ""], ["type", "submit", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13); return ctx.onSignin(_r1.value, _r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]], styles: ["body[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n  color: #384047;\n}\n\nform[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin: 10px auto;\n  padding: 10px 20px;\n  background: #f4f7f8;\n  border-radius: 8px;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 0 0 30px 0;\n  text-align: center;\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  font-size: 16px;\n  height: auto;\n  margin: 0;\n  outline: 0;\n  padding: 15px;\n  width: 100%;\n  background-color: #e8eeef;\n  color: #0f0f10;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;\n  margin-bottom: 30px;\n}\n\ninput[type=radio][_ngcontent-%COMP%], input[type=checkbox][_ngcontent-%COMP%] {\n  margin: 0 4px 8px 0;\n}\n\nselect[_ngcontent-%COMP%] {\n  padding: 6px;\n  height: 32px;\n  border-radius: 2px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 19px 39px 18px 39px;\n  color: #FFF;\n  background-color: #4bc970;\n  font-size: 18px;\n  text-align: center;\n  font-style: normal;\n  border-radius: 5px;\n  width: 100%;\n  border: 1px solid #3ac162;\n  border-width: 1px 1px 3px;\n  box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;\n  margin-bottom: 10px;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  border: none;\n}\n\nlegend[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  margin-bottom: 10px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n}\n\nlabel.light[_ngcontent-%COMP%] {\n  font-weight: 300;\n  display: inline;\n}\n\n.number[_ngcontent-%COMP%] {\n  background-color: #5fcf80;\n  color: #fff;\n  height: 30px;\n  width: 30px;\n  display: inline-block;\n  font-size: 0.8em;\n  margin-right: 4px;\n  line-height: 30px;\n  text-align: center;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 100%;\n}\n\n@media screen and (min-width: 480px) {\n  form[_ngcontent-%COMP%] {\n    max-width: 480px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7Ozs7Ozs7Ozs7OztFQVlFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtREFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFFRTtJQUNFLGdCQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzM4NDA0NztcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y0ZjdmODtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBtYXJnaW46IDAgMCAzMHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSxcclxuaW5wdXRbdHlwZT1cImRhdGV0aW1lXCJdLFxyXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXHJcbmlucHV0W3R5cGU9XCJ0ZWxcIl0sXHJcbmlucHV0W3R5cGU9XCJ0aW1lXCJdLFxyXG5pbnB1dFt0eXBlPVwidXJsXCJdLFxyXG50ZXh0YXJlYSxcclxuc2VsZWN0IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlZWVmO1xyXG4gIGNvbG9yOiAjMGYwZjEwO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLDAsMCwwLjAzKSBpbnNldDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0sXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgbWFyZ2luOiAwIDRweCA4cHggMDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBwYWRkaW5nOiAxOXB4IDM5cHggMThweCAzOXB4O1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YmM5NzA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzYWMxNjI7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHggMXB4IDNweDtcclxuICBib3gtc2hhZG93OiAwIC0xcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMSkgaW5zZXQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5sZWdlbmQge1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxubGFiZWwubGlnaHQge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4ubnVtYmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWZjZjgwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgbWF4LXdpZHRoOiA0ODBweDtcclxuICB9XHJcblxyXG59Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map