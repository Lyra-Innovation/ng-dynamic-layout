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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dl-page-container style=\"height: 100%;\" page=\"id1\"></dl-page-container>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-dynamic-layout';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./state */ "./src/app/state/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _dynamic_layout_dynamic_layout_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dynamic-layout/dynamic-layout.module */ "./src/app/dynamic-layout/dynamic-layout.module.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _example_example_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./example/example.component */ "./src/app/example/example.component.ts");
/* harmony import */ var _example_input_example_input_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./example-input/example-input.component */ "./src/app/example-input/example-input.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _example_example_component__WEBPACK_IMPORTED_MODULE_16__["ExampleComponent"], _example_input_example_input_component__WEBPACK_IMPORTED_MODULE_17__["ExampleInputComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"],
                _dynamic_layout_dynamic_layout_module__WEBPACK_IMPORTED_MODULE_14__["DynamicLayoutModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_state__WEBPACK_IMPORTED_MODULE_9__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production
                }),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_12__["StoreRouterConnectingModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_example_example_component__WEBPACK_IMPORTED_MODULE_16__["ExampleComponent"], _example_input_example_input_component__WEBPACK_IMPORTED_MODULE_17__["ExampleInputComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dynamic-layout/components/configurable/base.configurable.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dynamic-layout/components/configurable/base.configurable.ts ***!
  \*****************************************************************************/
/*! exports provided: BaseConfigurableLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseConfigurableLayout", function() { return BaseConfigurableLayout; });
var BaseConfigurableLayout = /** @class */ (function () {
    function BaseConfigurableLayout() {
        this.editingMode = false;
    }
    /**
     * Initializes the basic properties of this layout
     * Should only be called once at the component initialization process
     */
    BaseConfigurableLayout.prototype.initComponent = function (pageId, layoutConfig) {
        this.pageId = pageId;
        this.layoutConfig = layoutConfig;
        if (!this.layoutConfig.children) {
            this.layoutConfig.children = [];
            this.addChild();
        }
    };
    /**
     * Sets the current editing mode
     * Can be called anytime
     */
    BaseConfigurableLayout.prototype.setEditingMode = function (editingMode) {
        this.editingMode = editingMode;
    };
    /**
     * Adds a new child to the array, requesting the initial child configuration
     */
    BaseConfigurableLayout.prototype.addChild = function () {
        this.layoutConfig.children.push({
            config: this.buildNewChildConfig(),
            component: {
                component: null
            }
        });
    };
    /**
     * Removes the child with the given object in the child array
     */
    BaseConfigurableLayout.prototype.removeChild = function (child) {
        this.layoutConfig.children.splice(this.layoutConfig.children.indexOf(child), 1);
    };
    return BaseConfigurableLayout;
}());



/***/ }),

/***/ "./src/app/dynamic-layout/components/configurable/configurable-sidenav/configurable-sidenav.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/dynamic-layout/components/configurable/configurable-sidenav/configurable-sidenav.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dl-configurable-sidenav {\n  height: 100%;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHluYW1pYy1sYXlvdXQvY29tcG9uZW50cy9jb25maWd1cmFibGUvY29uZmlndXJhYmxlLXNpZGVuYXYvY29uZmlndXJhYmxlLXNpZGVuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9keW5hbWljLWxheW91dC9jb21wb25lbnRzL2NvbmZpZ3VyYWJsZS9jb25maWd1cmFibGUtc2lkZW5hdi9jb25maWd1cmFibGUtc2lkZW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGwtY29uZmlndXJhYmxlLXNpZGVuYXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dynamic-layout/components/configurable/configurable-sidenav/configurable-sidenav.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/dynamic-layout/components/configurable/configurable-sidenav/configurable-sidenav.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fxFill>\n  <mat-sidenav mode=\"side\" [opened]=\"true\">\n    <ng-container *ngIf=\"!editingMode\">\n      <mat-nav-list>\n        <ng-container *ngFor=\"let child of layoutConfig.children\">\n          <a mat-list-item (click)=\"selectedChild = child.component\">\n            {{ child.config.name }}\n          </a>\n        </ng-container>\n      </mat-nav-list>\n    </ng-container>\n\n    <ng-container *ngIf=\"editingMode\">\n      <div fxLayout=\"column\">\n        <mat-nav-list>\n          <ng-container *ngFor=\"let child of layoutConfig.children\">\n            <a mat-list-item (click)=\"selectedChild = child.component\">\n              <mat-form-field floatLabel=\"never\">\n                <input\n                  matInput\n                  placeholder=\"routeName\"\n                  [(ngModel)]=\"child.config.name\"\n                />\n              </mat-form-field>\n              <button mat-icon-button (click)=\"removeChild(child)\">\n                <mat-icon> close </mat-icon>\n              </button>\n            </a>\n          </ng-container>\n        </mat-nav-list>\n\n        <button fxFlex mat-button (click)=\"addChild()\">\n          <mat-icon>add</mat-icon>\n          Add route\n        </button>\n      </div>\n    </ng-container>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <dl-dynamic-layout\n      fxFill\n      [pageId]=\"pageId\"\n      [editingMode]=\"editingMode\"\n      [layoutConfig]=\"selectedChild\"\n    ></dl-dynamic-layout>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/dynamic-layout/components/configurable/configurable-sidenav/configurable-sidenav.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/dynamic-layout/components/configurable/configurable-sidenav/configurable-sidenav.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ConfigurableSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurableSidenavComponent", function() { return ConfigurableSidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_configurable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.configurable */ "./src/app/dynamic-layout/components/configurable/base.configurable.ts");



var ConfigurableSidenavComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConfigurableSidenavComponent, _super);
    function ConfigurableSidenavComponent() {
        return _super.call(this) || this;
    }
    ConfigurableSidenavComponent.prototype.ngOnInit = function () { };
    ConfigurableSidenavComponent.prototype.initComponent = function (pageId, layoutConfig) {
        _super.prototype.initComponent.call(this, pageId, layoutConfig);
        this.selectedChild = this.layoutConfig.children[0].component;
    };
    ConfigurableSidenavComponent.prototype.buildNewChildConfig = function () {
        return {
            name: ''
        };
    };
    ConfigurableSidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dl-configurable-sidenav',
            template: __webpack_require__(/*! ./configurable-sidenav.component.html */ "./src/app/dynamic-layout/components/configurable/configurable-sidenav/configurable-sidenav.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./configurable-sidenav.component.css */ "./src/app/dynamic-layout/components/configurable/configurable-sidenav/configurable-sidenav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigurableSidenavComponent);
    return ConfigurableSidenavComponent;
}(_base_configurable__WEBPACK_IMPORTED_MODULE_2__["BaseConfigurableLayout"]));



/***/ }),

/***/ "./src/app/dynamic-layout/components/configurable/configurable-tabs/configurable-tabs.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/dynamic-layout/components/configurable/configurable-tabs/configurable-tabs.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab-label,\n.mat-tab-disabled {\n  color: black !important;\n  min-width: auto !important;\n}\n\n.mat-tab-body-wrapper {\n  height: 100%;\n  width: 100%;\n}\n\ndl-configurable-tabs {\n  height: 100%;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHluYW1pYy1sYXlvdXQvY29tcG9uZW50cy9jb25maWd1cmFibGUvY29uZmlndXJhYmxlLXRhYnMvY29uZmlndXJhYmxlLXRhYnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx3QkFBd0I7RUFDeEIsMkJBQTJCO0NBQzVCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGFBQWE7RUFDYixZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9keW5hbWljLWxheW91dC9jb21wb25lbnRzL2NvbmZpZ3VyYWJsZS9jb25maWd1cmFibGUtdGFicy9jb25maWd1cmFibGUtdGFicy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWItbGFiZWwsXG4ubWF0LXRhYi1kaXNhYmxlZCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm1hdC10YWItYm9keS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuZGwtY29uZmlndXJhYmxlLXRhYnMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dynamic-layout/components/configurable/configurable-tabs/configurable-tabs.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/dynamic-layout/components/configurable/configurable-tabs/configurable-tabs.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"editingMode\">\n  <mat-tab-group fxFill>\n    <ng-container *ngFor=\"let child of layoutConfig.children\">\n      <mat-tab>\n        <ng-template mat-tab-label>\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"4px\">\n            <mat-form-field floatLabel=\"never\" (click)=\"$event.preventDefault()\">\n              <input\n                matInput\n                placeholder=\"Tab name\"\n                [(ngModel)]=\"child.config.name\"\n                (keydown)=\"$event.stopPropagation()\"\n              />\n            </mat-form-field>\n            <button\n              mat-icon-button\n              [disabled]=\"layoutConfig.children.length === 1\"\n              (click)=\"removeChild(child)\"\n            >\n              <mat-icon>close</mat-icon>\n            </button>\n          </div>\n        </ng-template>\n\n        <dl-dynamic-layout\n          fxFill\n          [pageId]=\"pageId\"\n          [editingMode]=\"editingMode\"\n          [layoutConfig]=\"child.component\"\n        ></dl-dynamic-layout>\n      </mat-tab>\n    </ng-container>\n\n    <mat-tab disabled>\n      <ng-template mat-tab-label>\n        <button mat-icon-button (click)=\"addChild()\">\n          <mat-icon> add </mat-icon>\n        </button>\n      </ng-template>\n    </mat-tab>\n  </mat-tab-group>\n</ng-container>\n\n<ng-container *ngIf=\"!editingMode\">\n  <mat-tab-group fxFill>\n    <ng-container *ngFor=\"let child of layoutConfig.children\">\n      <mat-tab [label]=\"child.config.name\">\n        <dl-dynamic-layout\n          fxFill\n          [pageId]=\"pageId\"\n          [editingMode]=\"editingMode\"\n          [layoutConfig]=\"child.component\"\n        ></dl-dynamic-layout>\n      </mat-tab>\n    </ng-container>\n  </mat-tab-group>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/dynamic-layout/components/configurable/configurable-tabs/configurable-tabs.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/dynamic-layout/components/configurable/configurable-tabs/configurable-tabs.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ConfigurableTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurableTabsComponent", function() { return ConfigurableTabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_configurable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.configurable */ "./src/app/dynamic-layout/components/configurable/base.configurable.ts");



var ConfigurableTabsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConfigurableTabsComponent, _super);
    function ConfigurableTabsComponent() {
        return _super.call(this) || this;
    }
    ConfigurableTabsComponent.prototype.ngOnInit = function () { };
    ConfigurableTabsComponent.prototype.buildNewChildConfig = function () {
        return {
            name: ''
        };
    };
    ConfigurableTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dl-configurable-tabs',
            template: __webpack_require__(/*! ./configurable-tabs.component.html */ "./src/app/dynamic-layout/components/configurable/configurable-tabs/configurable-tabs.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./configurable-tabs.component.css */ "./src/app/dynamic-layout/components/configurable/configurable-tabs/configurable-tabs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigurableTabsComponent);
    return ConfigurableTabsComponent;
}(_base_configurable__WEBPACK_IMPORTED_MODULE_2__["BaseConfigurableLayout"]));



/***/ }),

/***/ "./src/app/dynamic-layout/components/editing-toolbar/editing-toolbar.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/dynamic-layout/components/editing-toolbar/editing-toolbar.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2R5bmFtaWMtbGF5b3V0L2NvbXBvbmVudHMvZWRpdGluZy10b29sYmFyL2VkaXRpbmctdG9vbGJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dynamic-layout/components/editing-toolbar/editing-toolbar.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/dynamic-layout/components/editing-toolbar/editing-toolbar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"8px\">\n  <ng-container *ngIf=\"!editingMode\">\n    <button mat-button (click)=\"turnOnEditing.emit()\">\n      <mat-icon>edit</mat-icon>\n      Edit layout\n    </button>\n  </ng-container>\n\n  <ng-container *ngIf=\"editingMode\">\n    <button\n      mat-raised-button\n      color=\"primary\"\n      (click)=\"saveLayoutChanges.emit()\"\n    >\n      <mat-icon>save</mat-icon>\n      Save layout\n    </button>\n    <button\n      mat-raised-button\n      color=\"secondary\"\n      (click)=\"discardLayoutChanges.emit()\"\n    >\n      <mat-icon>close</mat-icon>\n      Discard changes\n    </button>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/dynamic-layout/components/editing-toolbar/editing-toolbar.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/dynamic-layout/components/editing-toolbar/editing-toolbar.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EditingToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditingToolbarComponent", function() { return EditingToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditingToolbarComponent = /** @class */ (function () {
    function EditingToolbarComponent() {
        this.turnOnEditing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saveLayoutChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.discardLayoutChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EditingToolbarComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], EditingToolbarComponent.prototype, "editingMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditingToolbarComponent.prototype, "turnOnEditing", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditingToolbarComponent.prototype, "saveLayoutChanges", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditingToolbarComponent.prototype, "discardLayoutChanges", void 0);
    EditingToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dl-editing-toolbar',
            template: __webpack_require__(/*! ./editing-toolbar.component.html */ "./src/app/dynamic-layout/components/editing-toolbar/editing-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./editing-toolbar.component.css */ "./src/app/dynamic-layout/components/editing-toolbar/editing-toolbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditingToolbarComponent);
    return EditingToolbarComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-layout/components/new-variable/new-variable.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/dynamic-layout/components/new-variable/new-variable.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-container {\n  padding: 0;\n}\n\n.dialog-content {\n  padding: 24px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHluYW1pYy1sYXlvdXQvY29tcG9uZW50cy9uZXctdmFyaWFibGUvbmV3LXZhcmlhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxjQUFjO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9keW5hbWljLWxheW91dC9jb21wb25lbnRzL25ldy12YXJpYWJsZS9uZXctdmFyaWFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5kaWFsb2ctY29udGVudCB7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dynamic-layout/components/new-variable/new-variable.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/dynamic-layout/components/new-variable/new-variable.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxFlex>\n  <mat-toolbar color=\"primary\">\n    <button mat-icon-button (click)=\"cancel()\"><mat-icon>close</mat-icon></button>\n\n    <mat-label fxFlex>Add new variable</mat-label>\n\n    <button\n      mat-raised-button\n      (click)=\"addNewVariable()\"\n      [disabled]=\"!variableName\"\n      color=\"secondary\"\n    >\n      ADD VARIABLE\n    </button>\n  </mat-toolbar>\n\n  <div fxLayoutAlign=\"center center\" class=\"dialog-content\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Variable name</mat-label>\n      <input matInput [(ngModel)]=\"variableName\" />\n    </mat-form-field>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dynamic-layout/components/new-variable/new-variable.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/dynamic-layout/components/new-variable/new-variable.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NewVariableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewVariableComponent", function() { return NewVariableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var NewVariableComponent = /** @class */ (function () {
    function NewVariableComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    NewVariableComponent.prototype.ngOnInit = function () { };
    NewVariableComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    NewVariableComponent.prototype.addNewVariable = function () {
        this.dialogRef.close(this.variableName);
    };
    NewVariableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dl-new-variable',
            template: __webpack_require__(/*! ./new-variable.component.html */ "./src/app/dynamic-layout/components/new-variable/new-variable.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./new-variable.component.css */ "./src/app/dynamic-layout/components/new-variable/new-variable.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], NewVariableComponent);
    return NewVariableComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-layout/containers/component-config/component-config.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/dynamic-layout/containers/component-config/component-config.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\nhr {\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHluYW1pYy1sYXlvdXQvY29udGFpbmVycy9jb21wb25lbnQtY29uZmlnL2NvbXBvbmVudC1jb25maWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLFVBQVU7Q0FDWCIsImZpbGUiOiJzcmMvYXBwL2R5bmFtaWMtbGF5b3V0L2NvbnRhaW5lcnMvY29tcG9uZW50LWNvbmZpZy9jb21wb25lbnQtY29uZmlnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG5ociB7XG4gIG1hcmdpbjogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dynamic-layout/containers/component-config/component-config.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/dynamic-layout/containers/component-config/component-config.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card fxFlex fxLayout=\"row\" fxLayoutGap=\"8px\">\n  <div fxLayout=\"column\" fxFlex>\n    <h3>Inputs</h3>\n    <div\n      *ngFor=\"let input of (bindings.inputs | keyvalue)\"\n      fxLayout=\"column\"\n      fxLayoutAlign=\"center start\"\n      fxLayoutGap=\"8px\"\n    >\n      <mat-checkbox\n        [value]=\"_componentConfig.bindings.inputs[input]\"\n        (change)=\"toggleBinding($event, 'inputs', input.key)\"\n      >\n        {{ input.key }}\n      </mat-checkbox>\n      <div\n        *ngIf=\"_componentConfig.bindings.inputs[input.key]\"\n        fxLayout=\"row\"\n        fxLayoutAlign=\"center center\"\n        fxLayoutGap=\"8px\"\n      >\n        <mat-radio-group\n          [(ngModel)]=\"input.value.type\"\n          fxLayout=\"column\"\n          fxLayoutGap=\"4px\"\n        >\n          <mat-radio-button [value]=\"BindingType.CONSTANT\">\n            Constant\n          </mat-radio-button>\n          <mat-radio-button [value]=\"BindingType.VARIABLE\">\n            Variable\n          </mat-radio-button>\n        </mat-radio-group>\n\n        <mat-form-field\n          *ngIf=\"input.value.type === BindingType.VARIABLE\"\n          appearance=\"outline\"\n        >\n          <mat-label>Variable Name</mat-label>\n          <mat-select [(ngModel)]=\"input.value.value\">\n            <mat-option\n              *ngFor=\"let variable of (pageVariables$ | async)\"\n              [value]=\"variable\"\n            >\n              {{ variable }}\n            </mat-option>\n            <hr />\n            <mat-option (click)=\"addNewVariable()\">\n              <mat-icon>add</mat-icon>\n              New variable\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field\n          *ngIf=\"input.value.type === BindingType.CONSTANT\"\n          appearance=\"outline\"\n        >\n          <mat-label>Constant</mat-label>\n          <input matInput [(ngModel)]=\"input.value.value\" />\n        </mat-form-field>\n      </div>\n    </div>\n    <ng-container *ngIf=\"objectEmpty(bindings.inputs)\">\n      <mat-label>This component has no input properties</mat-label>\n    </ng-container>\n  </div>\n\n  <div fxLayout=\"column\" fxFlex>\n    <h3>Outputs</h3>\n    <div\n      *ngFor=\"let output of (bindings.outputs | keyvalue)\"\n      fxLayout=\"column\"\n      fxLayoutAlign=\"center start\"\n      fxLayoutGap=\"8px\"\n    >\n      <mat-checkbox\n        [value]=\"_componentConfig.bindings.outputs[output.key]\"\n        (change)=\"toggleBinding($event, 'outputs', output.key)\"\n      >\n        {{ output.key }}\n      </mat-checkbox>\n      <div\n        *ngIf=\"_componentConfig.bindings.outputs[output.key]\"\n        fxLayout=\"row\"\n        fxLayoutAlign=\"center center\"\n        fxLayoutGap=\"8px\"\n      >\n        <mat-radio-group\n          [(ngModel)]=\"output.value.type\"\n          fxLayout=\"column\"\n          fxLayoutGap=\"4px\"\n        >\n          <mat-radio-button [value]=\"BindingType.VARIABLE\">\n            Variable\n          </mat-radio-button>\n        </mat-radio-group>\n\n        <mat-form-field\n          *ngIf=\"output.value.type === BindingType.VARIABLE\"\n          appearance=\"outline\"\n        >\n          <mat-label>Variable Name</mat-label>\n          <mat-select [(ngModel)]=\"output.value.value\">\n            <mat-option\n              *ngFor=\"let variable of (pageVariables$ | async)\"\n              [value]=\"variable\"\n            >\n              {{ variable }}\n            </mat-option>\n            <hr />\n            <mat-option (click)=\"addNewVariable()\">\n              <mat-icon>add</mat-icon>\n              New variable\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </div>\n\n    <ng-container *ngIf=\"objectEmpty(bindings.outputs)\">\n      <mat-label>This component has no output properties</mat-label>\n    </ng-container>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/dynamic-layout/containers/component-config/component-config.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/dynamic-layout/containers/component-config/component-config.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ComponentConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentConfigComponent", function() { return ComponentConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_page_layout_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/page-layout.model */ "./src/app/dynamic-layout/state/page-layout.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_page_layout_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/page-layout.reducer */ "./src/app/dynamic-layout/state/page-layout.reducer.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_new_variable_new_variable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/new-variable/new-variable.component */ "./src/app/dynamic-layout/components/new-variable/new-variable.component.ts");
/* harmony import */ var _state_page_layout_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../state/page-layout.actions */ "./src/app/dynamic-layout/state/page-layout.actions.ts");
/* harmony import */ var _services_component_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/component-resolver.service */ "./src/app/dynamic-layout/services/component-resolver.service.ts");









var ComponentConfigComponent = /** @class */ (function () {
    function ComponentConfigComponent(store, componentResolver, dialog) {
        this.store = store;
        this.componentResolver = componentResolver;
        this.dialog = dialog;
        this.BindingType = _state_page_layout_model__WEBPACK_IMPORTED_MODULE_2__["BindingType"];
        this.objectEmpty = function (object) { return Object.keys(object).length === 0; };
    }
    Object.defineProperty(ComponentConfigComponent.prototype, "componentConfig", {
        set: function (componentConfig) {
            if (!componentConfig.bindings) {
                componentConfig.bindings = {
                    inputs: {},
                    outputs: {}
                };
            }
            this._componentConfig = componentConfig;
            this.setupComponentBindings(componentConfig.type);
        },
        enumerable: true,
        configurable: true
    });
    ComponentConfigComponent.prototype.ngOnInit = function () {
        this.pageVariables$ = this.store.select(_state_page_layout_reducer__WEBPACK_IMPORTED_MODULE_4__["selectVariablesNames"](this.pageId));
    };
    ComponentConfigComponent.prototype.setupComponentBindings = function (componentClassName) {
        var _this = this;
        var factory = this.componentResolver.getComponentFactory(componentClassName);
        var inputBindings = factory.inputs.reduce(function (propertiesObject, newProperty) {
            var _a;
            return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, propertiesObject, (_a = {}, _a[newProperty.propName] = _this._componentConfig.bindings.inputs[newProperty.propName] || {
                type: _state_page_layout_model__WEBPACK_IMPORTED_MODULE_2__["BindingType"].CONSTANT,
                value: ''
            }, _a)));
        }, {});
        var outputBindings = factory.outputs.reduce(function (propertiesObject, newProperty) {
            var _a;
            return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, propertiesObject, (_a = {}, _a[newProperty.propName] = _this._componentConfig.bindings.outputs[newProperty.propName] || {
                type: _state_page_layout_model__WEBPACK_IMPORTED_MODULE_2__["BindingType"].VARIABLE,
                value: ''
            }, _a)));
        }, {});
        this.bindings = {
            inputs: inputBindings,
            outputs: outputBindings
        };
    };
    ComponentConfigComponent.prototype.toggleBinding = function (checkEvent, bindingsType, bindingKey) {
        if (checkEvent.checked) {
            this._componentConfig.bindings[bindingsType][bindingKey] = this.bindings[bindingsType][bindingKey];
        }
        else {
            delete this._componentConfig.bindings[bindingsType][bindingKey];
        }
    };
    ComponentConfigComponent.prototype.addNewVariable = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_components_new_variable_new_variable_component__WEBPACK_IMPORTED_MODULE_6__["NewVariableComponent"], {
            minWidth: '400px',
            minHeight: '200px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.store.dispatch(new _state_page_layout_actions__WEBPACK_IMPORTED_MODULE_7__["AddNewVariable"]({ pageId: _this.pageId, variableName: result }));
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComponentConfigComponent.prototype, "pageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ComponentConfigComponent.prototype, "componentConfig", null);
    ComponentConfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dl-component-config',
            template: __webpack_require__(/*! ./component-config.component.html */ "./src/app/dynamic-layout/containers/component-config/component-config.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./component-config.component.css */ "./src/app/dynamic-layout/containers/component-config/component-config.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _services_component_resolver_service__WEBPACK_IMPORTED_MODULE_8__["ComponentResolverService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], ComponentConfigComponent);
    return ComponentConfigComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-layout/containers/component-container/component-container.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/dynamic-layout/containers/component-container/component-container.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2R5bmFtaWMtbGF5b3V0L2NvbnRhaW5lcnMvY29tcG9uZW50LWNvbnRhaW5lci9jb21wb25lbnQtY29udGFpbmVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dynamic-layout/containers/component-container/component-container.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/dynamic-layout/containers/component-container/component-container.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"center center\" fxFlex><ng-template host></ng-template></div>\n"

/***/ }),

/***/ "./src/app/dynamic-layout/containers/component-container/component-container.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/dynamic-layout/containers/component-container/component-container.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ComponentContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentContainerComponent", function() { return ComponentContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_page_layout_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/page-layout.model */ "./src/app/dynamic-layout/state/page-layout.model.ts");
/* harmony import */ var _state_page_layout_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/page-layout.reducer */ "./src/app/dynamic-layout/state/page-layout.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _host_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../host.directive */ "./src/app/dynamic-layout/host.directive.ts");
/* harmony import */ var _state_page_layout_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../state/page-layout.actions */ "./src/app/dynamic-layout/state/page-layout.actions.ts");
/* harmony import */ var _services_component_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/component-resolver.service */ "./src/app/dynamic-layout/services/component-resolver.service.ts");








var ComponentContainerComponent = /** @class */ (function () {
    function ComponentContainerComponent(store, componentResolver, changeDetectorRef) {
        this.store = store;
        this.componentResolver = componentResolver;
        this.changeDetectorRef = changeDetectorRef;
        this.subscriptions = [];
    }
    Object.defineProperty(ComponentContainerComponent.prototype, "componentConfig", {
        set: function (componentConfig) {
            this._componentConfig = componentConfig;
            if (this.componentRef) {
                this.buildComponent(componentConfig);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentContainerComponent.prototype, "editingMode", {
        set: function (editingMode) {
            this._editingMode = editingMode;
            if (this.componentRef &&
                this.componentResolver.isComponentConfigurable(this._componentConfig.type)) {
                this.componentRef.instance.setEditingMode(editingMode);
            }
        },
        enumerable: true,
        configurable: true
    });
    ComponentContainerComponent.prototype.ngAfterViewInit = function () {
        this.buildComponent(this._componentConfig);
    };
    ComponentContainerComponent.prototype.buildComponent = function (componentConfig) {
        var _this = this;
        if (!componentConfig.bindings) {
            componentConfig.bindings = {
                inputs: {},
                outputs: {}
            };
        }
        var factory = this.componentResolver.getComponentFactory(componentConfig.type);
        this.container.viewContainerRef.clear();
        this.componentRef = this.container.viewContainerRef.createComponent(factory);
        if (this.componentResolver.isComponentConfigurable(componentConfig.type)) {
            this.componentRef.instance.initComponent(this.pageId, componentConfig);
            this.componentRef.instance.setEditingMode(this._editingMode);
        }
        var _loop_1 = function (inputKey) {
            if (componentConfig.bindings.inputs[inputKey].type === _state_page_layout_model__WEBPACK_IMPORTED_MODULE_2__["BindingType"].VARIABLE) {
                var variableName = componentConfig.bindings.inputs[inputKey].value;
                var subs = this_1.store
                    .select(_state_page_layout_reducer__WEBPACK_IMPORTED_MODULE_3__["selectVariableValue"](this_1.pageId, variableName))
                    .subscribe(function (value) { return (_this.componentRef.instance[inputKey] = value); });
                this_1.subscriptions.push(subs);
            }
            else {
                this_1.componentRef.instance[inputKey] =
                    componentConfig.bindings.inputs[inputKey].value;
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = Object.keys(componentConfig.bindings.inputs); _i < _a.length; _i++) {
            var inputKey = _a[_i];
            _loop_1(inputKey);
        }
        var _loop_2 = function (outputKey) {
            var variableName = componentConfig.bindings.outputs[outputKey].value;
            var subs = (this_2.componentRef.instance[outputKey]).subscribe(function (value) {
                return _this.store.dispatch(new _state_page_layout_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateVariableValue"]({
                    pageId: _this.pageId,
                    variableName: variableName,
                    variableValue: value
                }));
            });
            this_2.subscriptions.push(subs);
        };
        var this_2 = this;
        for (var _b = 0, _c = Object.keys(componentConfig.bindings.outputs); _b < _c.length; _b++) {
            var outputKey = _c[_b];
            _loop_2(outputKey);
        }
        this.changeDetectorRef.detectChanges();
    };
    ComponentContainerComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (subs) { return subs.unsubscribe; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComponentContainerComponent.prototype, "pageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ComponentContainerComponent.prototype, "componentConfig", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], ComponentContainerComponent.prototype, "editingMode", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_host_directive__WEBPACK_IMPORTED_MODULE_5__["HostDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _host_directive__WEBPACK_IMPORTED_MODULE_5__["HostDirective"])
    ], ComponentContainerComponent.prototype, "container", void 0);
    ComponentContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dl-component-container',
            template: __webpack_require__(/*! ./component-container.component.html */ "./src/app/dynamic-layout/containers/component-container/component-container.component.html"),
            styles: [__webpack_require__(/*! ./component-container.component.css */ "./src/app/dynamic-layout/containers/component-container/component-container.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _services_component_resolver_service__WEBPACK_IMPORTED_MODULE_7__["ComponentResolverService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ComponentContainerComponent);
    return ComponentContainerComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-layout/containers/dynamic-container/dynamic-container.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/dynamic-layout/containers/dynamic-container/dynamic-container.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2R5bmFtaWMtbGF5b3V0L2NvbnRhaW5lcnMvZHluYW1pYy1jb250YWluZXIvZHluYW1pYy1jb250YWluZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dynamic-layout/containers/dynamic-container/dynamic-container.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/dynamic-layout/containers/dynamic-container/dynamic-container.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"componentConfig\" fxFill fxLayoutAlign=\"center center\">\n  <ng-container *ngIf=\"showComponentConfiguration()\">\n    <dl-component-config\n      fxFill\n      [pageId]=\"pageId\"\n      [componentConfig]=\"componentConfig\"\n    ></dl-component-config>\n  </ng-container>\n\n  <ng-container *ngIf=\"!showComponentConfiguration()\">\n    <dl-component-container\n      fxFill\n      [pageId]=\"pageId\"\n      [editingMode]=\"editingMode\"\n      [componentConfig]=\"componentConfig\"\n    ></dl-component-container>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/dynamic-layout/containers/dynamic-container/dynamic-container.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/dynamic-layout/containers/dynamic-container/dynamic-container.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DynamicContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicContainerComponent", function() { return DynamicContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_component_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/component-resolver.service */ "./src/app/dynamic-layout/services/component-resolver.service.ts");



var DynamicContainerComponent = /** @class */ (function () {
    function DynamicContainerComponent(componentResolver) {
        this.componentResolver = componentResolver;
    }
    DynamicContainerComponent.prototype.ngOnInit = function () { };
    DynamicContainerComponent.prototype.showComponentConfiguration = function () {
        if (this.componentResolver.isComponentConfigurable(this.componentConfig.type)) {
            return this.editingMode && this.configuringMode;
        }
        else {
            return this.editingMode;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DynamicContainerComponent.prototype, "pageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DynamicContainerComponent.prototype, "componentConfig", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DynamicContainerComponent.prototype, "editingMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DynamicContainerComponent.prototype, "configuringMode", void 0);
    DynamicContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dl-dynamic-container',
            template: __webpack_require__(/*! ./dynamic-container.component.html */ "./src/app/dynamic-layout/containers/dynamic-container/dynamic-container.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-container.component.css */ "./src/app/dynamic-layout/containers/dynamic-container/dynamic-container.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_component_resolver_service__WEBPACK_IMPORTED_MODULE_2__["ComponentResolverService"]])
    ], DynamicContainerComponent);
    return DynamicContainerComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-layout/containers/dynamic-layout/dynamic-layout.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/dynamic-layout/containers/dynamic-layout/dynamic-layout.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n}\n\n.editing-container {\n  border: 1px solid black;\n  background: lightgrey;\n}\n\n.toolbar {\n  padding-left: 32px;\n  padding-right: 16px;\n}\n\n.component-selector {\n  margin-top: 8px;\n  width: 16em;\n}\n\n.vertical-split .mat-icon {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.child-container {\n  padding: 32px;\n  padding-top: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHluYW1pYy1sYXlvdXQvY29udGFpbmVycy9keW5hbWljLWxheW91dC9keW5hbWljLWxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0M7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2R5bmFtaWMtbGF5b3V0L2NvbnRhaW5lcnMvZHluYW1pYy1sYXlvdXQvZHluYW1pYy1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xufVxuXG4uZWRpdGluZy1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xufVxuXG4udG9vbGJhciB7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuLmNvbXBvbmVudC1zZWxlY3RvciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgd2lkdGg6IDE2ZW07XG59XG5cbi52ZXJ0aWNhbC1zcGxpdCAubWF0LWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5jaGlsZC1jb250YWluZXIge1xuICBwYWRkaW5nOiAzMnB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dynamic-layout/containers/dynamic-layout/dynamic-layout.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/dynamic-layout/containers/dynamic-layout/dynamic-layout.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"column\">\n  <ng-container *ngIf=\"!layoutConfig.children\">\n    <div\n      [ngClass]=\"{ 'editing-container': editingMode }\"\n      fxFlex\n      fxLayout=\"column\"\n      fxLayoutAlign=\"start stretch\"\n    >\n      <div\n        *ngIf=\"editingMode\"\n        fxLayout=\"row\"\n        fxLayoutAlign=\"center center\"\n        class=\"toolbar\"\n      >\n        <div fxLayout=\"row\" fxFlex fxLayoutAlign=\"start center\">\n          <mat-form-field class=\"component-selector\">\n            <mat-label>Component</mat-label>\n            <mat-select\n              [value]=\"layoutConfig.component?.type\"\n              (valueChange)=\"selectComponent($event)\"\n            >\n              <mat-option></mat-option>\n              <mat-option\n                *ngFor=\"let component of (availableComponents$ | async)\"\n                [value]=\"component\"\n              >\n                {{ component }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n          <mat-slide-toggle\n            *ngIf=\"isComponentConfigurable()\"\n            [(ngModel)]=\"configureComponent\"\n          >\n            Configure component\n          </mat-slide-toggle>\n\n          <button\n            mat-icon-button\n            (click)=\"splitLayout(false)\"\n            class=\"vertical-split\"\n          >\n            <mat-icon>view_agenda</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"splitLayout(true)\">\n            <mat-icon>view_agenda</mat-icon>\n          </button>\n          <button\n            mat-icon-button\n            [disabled]=\"!childLayout\"\n            (click)=\"deleteSelf.emit()\"\n          >\n            <mat-icon>close</mat-icon>\n          </button>\n        </div>\n      </div>\n\n      <!-- If layout does not have children and is not editing, display the component -->\n      <div\n        *ngIf=\"layoutConfig.component\"\n        fxFlex\n        fxLayoutAlign=\"center center\"\n        [ngClass]=\"{ 'child-container': editingMode }\"\n      >\n        <dl-dynamic-container\n          fxFill\n          fxLayoutAlign=\"center center\"\n          [pageId]=\"pageId\"\n          [editingMode]=\"editingMode\"\n          [configuringMode]=\"configureComponent\"\n          [componentConfig]=\"layoutConfig.component\"\n        ></dl-dynamic-container>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"layoutConfig.children\">\n    <!-- If layout has children and is editing, display the children in\n      as-split to let the user change the size of the layout -->\n    <as-split\n      fxFlex\n      *ngIf=\"editingMode\"\n      [direction]=\"layoutConfig.children.column ? 'vertical' : 'horizontal'\"\n      (dragEnd)=\"resizeEnd($event)\"\n    >\n      <as-split-area [size]=\"layoutConfig.children.split\">\n        <dl-dynamic-layout\n          fxFlex\n          [pageId]=\"pageId\"\n          [editingMode]=\"editingMode\"\n          [childLayout]=\"true\"\n          [layoutConfig]=\"layoutConfig.children.first\"\n          (deleteSelf)=\"deleteChild(true)\"\n        ></dl-dynamic-layout>\n      </as-split-area>\n      <as-split-area [size]=\"100 - layoutConfig.children.split\">\n        <dl-dynamic-layout\n          fxFlex\n          [pageId]=\"pageId\"\n          [editingMode]=\"editingMode\"\n          [childLayout]=\"true\"\n          [layoutConfig]=\"layoutConfig.children.second\"\n          (deleteSelf)=\"deleteChild(false)\"\n        ></dl-dynamic-layout>\n      </as-split-area>\n    </as-split>\n\n    <ng-container *ngIf=\"!editingMode\">\n      <!-- If layout has children but is not editing, display normal divs according to the size -->\n      <div [fxLayout]=\"layoutConfig.children.column ? 'column' : 'row'\">\n        <div [fxFlex]=\"layoutConfig.children.split\">\n          <dl-dynamic-layout\n            fxFlex\n            [pageId]=\"pageId\"\n            [editingMode]=\"editingMode\"\n            [layoutConfig]=\"layoutConfig.children.first\"\n          ></dl-dynamic-layout>\n        </div>\n        <div [fxFlex]=\"100 - layoutConfig.children.split\">\n          <dl-dynamic-layout\n            fxFlex\n            [pageId]=\"pageId\"\n            [editingMode]=\"editingMode\"\n            [layoutConfig]=\"layoutConfig.children.second\"\n          ></dl-dynamic-layout>\n        </div>\n      </div>\n    </ng-container>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/dynamic-layout/containers/dynamic-layout/dynamic-layout.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/dynamic-layout/containers/dynamic-layout/dynamic-layout.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DynamicLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicLayoutComponent", function() { return DynamicLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_page_layout_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/page-layout.reducer */ "./src/app/dynamic-layout/state/page-layout.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_component_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/component-resolver.service */ "./src/app/dynamic-layout/services/component-resolver.service.ts");






var DynamicLayoutComponent = /** @class */ (function () {
    function DynamicLayoutComponent(store, componentResolver) {
        this.store = store;
        this.componentResolver = componentResolver;
        this.layoutConfig = this.initialLayout();
        /** Whether this layout is a child of another dynamic-layout, and thus can be eliminated */
        this.childLayout = false;
        this.configureComponent = false;
        this.deleteSelf = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DynamicLayoutComponent.prototype.ngOnInit = function () {
        this.pageVariableName$ = this.store.select(_state_page_layout_reducer__WEBPACK_IMPORTED_MODULE_2__["selectVariablesNames"](this.pageId));
        this.availableComponents$ = this.store.select(_state_page_layout_reducer__WEBPACK_IMPORTED_MODULE_2__["selectAvailableComponents"]);
    };
    DynamicLayoutComponent.prototype.initialLayout = function () {
        return {
            component: null
        };
    };
    DynamicLayoutComponent.prototype.splitLayout = function (column) {
        var componentConfig = lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](this.layoutConfig);
        this.layoutConfig.children = {
            split: 50,
            column: column,
            first: componentConfig,
            second: this.initialLayout()
        };
        this.layoutConfig.component = null;
    };
    DynamicLayoutComponent.prototype.deleteChild = function (first) {
        var childToCopy = first
            ? this.layoutConfig.children.second
            : this.layoutConfig.children.first;
        for (var _i = 0, _a = Object.keys(this.layoutConfig); _i < _a.length; _i++) {
            var key = _a[_i];
            this.layoutConfig[key] = childToCopy[key];
        }
    };
    DynamicLayoutComponent.prototype.resizeEnd = function (event) {
        this.layoutConfig.children.split = event.sizes[0];
    };
    DynamicLayoutComponent.prototype.selectComponent = function (selectedComponent) {
        this.layoutConfig.component = selectedComponent
            ? { type: selectedComponent }
            : null;
    };
    DynamicLayoutComponent.prototype.isComponentConfigurable = function () {
        return (this.layoutConfig.component &&
            this.componentResolver.isComponentConfigurable(this.layoutConfig.component.type));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DynamicLayoutComponent.prototype, "pageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DynamicLayoutComponent.prototype, "layoutConfig", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DynamicLayoutComponent.prototype, "childLayout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DynamicLayoutComponent.prototype, "editingMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DynamicLayoutComponent.prototype, "deleteSelf", void 0);
    DynamicLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dl-dynamic-layout',
            template: __webpack_require__(/*! ./dynamic-layout.component.html */ "./src/app/dynamic-layout/containers/dynamic-layout/dynamic-layout.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-layout.component.css */ "./src/app/dynamic-layout/containers/dynamic-layout/dynamic-layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _services_component_resolver_service__WEBPACK_IMPORTED_MODULE_5__["ComponentResolverService"]])
    ], DynamicLayoutComponent);
    return DynamicLayoutComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-layout/containers/page-container/page-container.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/dynamic-layout/containers/page-container/page-container.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2R5bmFtaWMtbGF5b3V0L2NvbnRhaW5lcnMvcGFnZS1jb250YWluZXIvcGFnZS1jb250YWluZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dynamic-layout/containers/page-container/page-container.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/dynamic-layout/containers/page-container/page-container.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  *ngIf=\"pageLayout\"\n  fxFlex\n  fxLayout=\"column\"\n  fxLayoutAlign=\"center stretch\"\n  fxLayoutGap=\"8px\"\n>\n  <dl-editing-toolbar\n    [editingMode]=\"editingMode\"\n    (turnOnEditing)=\"turnEditingOn()\"\n    (saveLayoutChanges)=\"saveLayoutChanges(pageLayout)\"\n    (discardLayoutChanges)=\"discardChanges()\"\n  ></dl-editing-toolbar>\n  <dl-dynamic-layout\n    fxFlex\n    [pageId]=\"page\"\n    [editingMode]=\"editingMode\"\n    [layoutConfig]=\"pageLayout.layout\"\n  ></dl-dynamic-layout>\n</div>\n"

/***/ }),

/***/ "./src/app/dynamic-layout/containers/page-container/page-container.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/dynamic-layout/containers/page-container/page-container.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PageContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContainerComponent", function() { return PageContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_page_layout_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/page-layout.reducer */ "./src/app/dynamic-layout/state/page-layout.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_page_layout_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/page-layout.actions */ "./src/app/dynamic-layout/state/page-layout.actions.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






var PageContainerComponent = /** @class */ (function () {
    function PageContainerComponent(store) {
        this.store = store;
        this.editingMode = false;
    }
    PageContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _state_page_layout_actions__WEBPACK_IMPORTED_MODULE_4__["LoadPageLayout"]({ pageId: this.page }));
        this.subscription = this.store
            .select(_state_page_layout_reducer__WEBPACK_IMPORTED_MODULE_2__["selectPageById"](this.page))
            .subscribe(function (layout) { return (_this.pageLayout = layout); });
    };
    PageContainerComponent.prototype.turnEditingOn = function () {
        this.backupPageLayout = lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"](this.pageLayout);
        this.toggleEditingMode();
    };
    PageContainerComponent.prototype.toggleEditingMode = function () {
        this.editingMode = !this.editingMode;
    };
    PageContainerComponent.prototype.saveLayoutChanges = function (pageLayout) {
        this.store.dispatch(new _state_page_layout_actions__WEBPACK_IMPORTED_MODULE_4__["UpdatePageLayout"]({
            pageLayout: {
                id: pageLayout.id,
                changes: pageLayout
            }
        }));
        this.backupPageLayout = null;
        this.toggleEditingMode();
    };
    PageContainerComponent.prototype.discardChanges = function () {
        this.pageLayout = this.backupPageLayout;
        this.toggleEditingMode();
    };
    PageContainerComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PageContainerComponent.prototype, "page", void 0);
    PageContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dl-page-container',
            template: __webpack_require__(/*! ./page-container.component.html */ "./src/app/dynamic-layout/containers/page-container/page-container.component.html"),
            styles: [__webpack_require__(/*! ./page-container.component.css */ "./src/app/dynamic-layout/containers/page-container/page-container.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], PageContainerComponent);
    return PageContainerComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-layout/dynamic-layout.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/dynamic-layout/dynamic-layout.module.ts ***!
  \*********************************************************/
/*! exports provided: DynamicLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicLayoutModule", function() { return DynamicLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_page_layout_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/page-layout.reducer */ "./src/app/dynamic-layout/state/page-layout.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/fesm5/angular-split.js");
/* harmony import */ var _state_page_layout_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state/page-layout.effects */ "./src/app/dynamic-layout/state/page-layout.effects.ts");
/* harmony import */ var _containers_page_container_page_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/page-container/page-container.component */ "./src/app/dynamic-layout/containers/page-container/page-container.component.ts");
/* harmony import */ var _containers_dynamic_layout_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/dynamic-layout/dynamic-layout.component */ "./src/app/dynamic-layout/containers/dynamic-layout/dynamic-layout.component.ts");
/* harmony import */ var _containers_dynamic_container_dynamic_container_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./containers/dynamic-container/dynamic-container.component */ "./src/app/dynamic-layout/containers/dynamic-container/dynamic-container.component.ts");
/* harmony import */ var _containers_component_config_component_config_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./containers/component-config/component-config.component */ "./src/app/dynamic-layout/containers/component-config/component-config.component.ts");
/* harmony import */ var _containers_component_container_component_container_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./containers/component-container/component-container.component */ "./src/app/dynamic-layout/containers/component-container/component-container.component.ts");
/* harmony import */ var _components_editing_toolbar_editing_toolbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/editing-toolbar/editing-toolbar.component */ "./src/app/dynamic-layout/components/editing-toolbar/editing-toolbar.component.ts");
/* harmony import */ var _host_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./host.directive */ "./src/app/dynamic-layout/host.directive.ts");
/* harmony import */ var _components_new_variable_new_variable_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/new-variable/new-variable.component */ "./src/app/dynamic-layout/components/new-variable/new-variable.component.ts");
/* harmony import */ var _components_configurable_configurable_tabs_configurable_tabs_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/configurable/configurable-tabs/configurable-tabs.component */ "./src/app/dynamic-layout/components/configurable/configurable-tabs/configurable-tabs.component.ts");
/* harmony import */ var _components_configurable_configurable_sidenav_configurable_sidenav_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/configurable/configurable-sidenav/configurable-sidenav.component */ "./src/app/dynamic-layout/components/configurable/configurable-sidenav/configurable-sidenav.component.ts");






















var DynamicLayoutModule = /** @class */ (function () {
    function DynamicLayoutModule() {
    }
    DynamicLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _containers_page_container_page_container_component__WEBPACK_IMPORTED_MODULE_12__["PageContainerComponent"],
                _containers_dynamic_layout_dynamic_layout_component__WEBPACK_IMPORTED_MODULE_13__["DynamicLayoutComponent"],
                _containers_dynamic_container_dynamic_container_component__WEBPACK_IMPORTED_MODULE_14__["DynamicContainerComponent"],
                _containers_component_config_component_config_component__WEBPACK_IMPORTED_MODULE_15__["ComponentConfigComponent"],
                _containers_component_container_component_container_component__WEBPACK_IMPORTED_MODULE_16__["ComponentContainerComponent"],
                _components_editing_toolbar_editing_toolbar_component__WEBPACK_IMPORTED_MODULE_17__["EditingToolbarComponent"],
                _host_directive__WEBPACK_IMPORTED_MODULE_18__["HostDirective"],
                _components_new_variable_new_variable_component__WEBPACK_IMPORTED_MODULE_19__["NewVariableComponent"],
                _components_configurable_configurable_tabs_configurable_tabs_component__WEBPACK_IMPORTED_MODULE_20__["ConfigurableTabsComponent"],
                _components_configurable_configurable_sidenav_configurable_sidenav_component__WEBPACK_IMPORTED_MODULE_21__["ConfigurableSidenavComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                angular_split__WEBPACK_IMPORTED_MODULE_10__["AngularSplitModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('pageLayout', _state_page_layout_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_state_page_layout_effects__WEBPACK_IMPORTED_MODULE_11__["PageLayoutEffects"]])
            ],
            exports: [
                _containers_page_container_page_container_component__WEBPACK_IMPORTED_MODULE_12__["PageContainerComponent"],
                _containers_dynamic_container_dynamic_container_component__WEBPACK_IMPORTED_MODULE_14__["DynamicContainerComponent"],
                _containers_component_container_component_container_component__WEBPACK_IMPORTED_MODULE_16__["ComponentContainerComponent"],
                _components_editing_toolbar_editing_toolbar_component__WEBPACK_IMPORTED_MODULE_17__["EditingToolbarComponent"],
                _components_configurable_configurable_sidenav_configurable_sidenav_component__WEBPACK_IMPORTED_MODULE_21__["ConfigurableSidenavComponent"]
            ],
            entryComponents: [
                _components_new_variable_new_variable_component__WEBPACK_IMPORTED_MODULE_19__["NewVariableComponent"],
                _components_configurable_configurable_tabs_configurable_tabs_component__WEBPACK_IMPORTED_MODULE_20__["ConfigurableTabsComponent"],
                _components_configurable_configurable_sidenav_configurable_sidenav_component__WEBPACK_IMPORTED_MODULE_21__["ConfigurableSidenavComponent"]
            ]
        })
    ], DynamicLayoutModule);
    return DynamicLayoutModule;
}());



/***/ }),

/***/ "./src/app/dynamic-layout/host.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/dynamic-layout/host.directive.ts ***!
  \**************************************************/
/*! exports provided: HostDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostDirective", function() { return HostDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HostDirective = /** @class */ (function () {
    function HostDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    HostDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[host]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], HostDirective);
    return HostDirective;
}());



/***/ }),

/***/ "./src/app/dynamic-layout/services/component-resolver.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dynamic-layout/services/component-resolver.service.ts ***!
  \***********************************************************************/
/*! exports provided: ComponentResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentResolverService", function() { return ComponentResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComponentResolverService = /** @class */ (function () {
    function ComponentResolverService(componentResolverFactory) {
        this.componentResolverFactory = componentResolverFactory;
    }
    ComponentResolverService.prototype.getComponentFactory = function (componentName) {
        var factories = Array.from(this.componentResolverFactory['_factories'].keys());
        var factoryClass = (factories.find(function (x) { return x.name === componentName; }));
        return this.componentResolverFactory.resolveComponentFactory(factoryClass);
    };
    ComponentResolverService.prototype.isComponentConfigurable = function (componentName) {
        return this.getComponentFactory(componentName).selector.startsWith('dl-configurable');
    };
    ComponentResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], ComponentResolverService);
    return ComponentResolverService;
}());



/***/ }),

/***/ "./src/app/dynamic-layout/services/page-layout.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/dynamic-layout/services/page-layout.service.ts ***!
  \****************************************************************/
/*! exports provided: PageLayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutService", function() { return PageLayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var PageLayoutService = /** @class */ (function () {
    function PageLayoutService() {
    }
    PageLayoutService.prototype.getPageLayout = function (pageId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
            id: 'id1',
            variables: {
                myvariable: 'nothing'
            },
            layout: {
                component: {
                    type: 'ExampleComponent',
                    bindings: {
                        inputs: {},
                        outputs: {}
                    }
                }
            }
        });
    };
    PageLayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageLayoutService);
    return PageLayoutService;
}());



/***/ }),

/***/ "./src/app/dynamic-layout/state/page-layout.actions.ts":
/*!*************************************************************!*\
  !*** ./src/app/dynamic-layout/state/page-layout.actions.ts ***!
  \*************************************************************/
/*! exports provided: PageLayoutActionTypes, AddNewVariable, LoadPageLayout, LoadPageLayoutSuccess, AddPageLayout, UpsertPageLayout, AddPageLayouts, UpsertPageLayouts, UpdatePageLayout, UpdatePageLayouts, DeletePageLayout, DeletePageLayouts, ClearPageLayouts, UpdateVariableValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutActionTypes", function() { return PageLayoutActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewVariable", function() { return AddNewVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPageLayout", function() { return LoadPageLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPageLayoutSuccess", function() { return LoadPageLayoutSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPageLayout", function() { return AddPageLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpsertPageLayout", function() { return UpsertPageLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPageLayouts", function() { return AddPageLayouts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpsertPageLayouts", function() { return UpsertPageLayouts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePageLayout", function() { return UpdatePageLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePageLayouts", function() { return UpdatePageLayouts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePageLayout", function() { return DeletePageLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePageLayouts", function() { return DeletePageLayouts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearPageLayouts", function() { return ClearPageLayouts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateVariableValue", function() { return UpdateVariableValue; });
var PageLayoutActionTypes;
(function (PageLayoutActionTypes) {
    PageLayoutActionTypes["AddNewVariable"] = "[PageLayout] Add New Variable";
    PageLayoutActionTypes["LoadPageLayout"] = "[PageLayout] Load PageLayout";
    PageLayoutActionTypes["LoadPageLayoutSucces"] = "[PageLayout] Load PageLayout Success";
    PageLayoutActionTypes["AddPageLayout"] = "[PageLayout] Add PageLayout";
    PageLayoutActionTypes["UpsertPageLayout"] = "[PageLayout] Upsert PageLayout";
    PageLayoutActionTypes["AddPageLayouts"] = "[PageLayout] Add PageLayouts";
    PageLayoutActionTypes["UpsertPageLayouts"] = "[PageLayout] Upsert PageLayouts";
    PageLayoutActionTypes["UpdatePageLayout"] = "[PageLayout] Update PageLayout";
    PageLayoutActionTypes["UpdatePageLayouts"] = "[PageLayout] Update PageLayouts";
    PageLayoutActionTypes["DeletePageLayout"] = "[PageLayout] Delete PageLayout";
    PageLayoutActionTypes["DeletePageLayouts"] = "[PageLayout] Delete PageLayouts";
    PageLayoutActionTypes["ClearPageLayouts"] = "[PageLayout] Clear PageLayouts";
    PageLayoutActionTypes["UpdateVariableValue"] = "[PageLayout] Update Variable Value";
})(PageLayoutActionTypes || (PageLayoutActionTypes = {}));
var AddNewVariable = /** @class */ (function () {
    function AddNewVariable(payload) {
        this.payload = payload;
        this.type = PageLayoutActionTypes.AddNewVariable;
    }
    return AddNewVariable;
}());

var LoadPageLayout = /** @class */ (function () {
    function LoadPageLayout(payload) {
        this.payload = payload;
        this.type = PageLayoutActionTypes.LoadPageLayout;
    }
    return LoadPageLayout;
}());

var LoadPageLayoutSuccess = /** @class */ (function () {
    function LoadPageLayoutSuccess(payload) {
        this.payload = payload;
        this.type = PageLayoutActionTypes.LoadPageLayoutSucces;
    }
    return LoadPageLayoutSuccess;
}());

var AddPageLayout = /** @class */ (function () {
    function AddPageLayout(payload) {
        this.payload = payload;
        this.type = PageLayoutActionTypes.AddPageLayout;
    }
    return AddPageLayout;
}());

var UpsertPageLayout = /** @class */ (function () {
    function UpsertPageLayout(payload) {
        this.payload = payload;
        this.type = PageLayoutActionTypes.UpsertPageLayout;
    }
    return UpsertPageLayout;
}());

var AddPageLayouts = /** @class */ (function () {
    function AddPageLayouts(payload) {
        this.payload = payload;
        this.type = PageLayoutActionTypes.AddPageLayouts;
    }
    return AddPageLayouts;
}());

var UpsertPageLayouts = /** @class */ (function () {
    function UpsertPageLayouts(payload) {
        this.payload = payload;
        this.type = PageLayoutActionTypes.UpsertPageLayouts;
    }
    return UpsertPageLayouts;
}());

var UpdatePageLayout = /** @class */ (function () {
    function UpdatePageLayout(payload) {
        this.payload = payload;
        this.type = PageLayoutActionTypes.UpdatePageLayout;
    }
    return UpdatePageLayout;
}());

var UpdatePageLayouts = /** @class */ (function () {
    function UpdatePageLayouts(payload) {
        this.payload = payload;
        this.type = PageLayoutActionTypes.UpdatePageLayouts;
    }
    return UpdatePageLayouts;
}());

var DeletePageLayout = /** @class */ (function () {
    function DeletePageLayout(payload) {
        this.payload = payload;
        this.type = PageLayoutActionTypes.DeletePageLayout;
    }
    return DeletePageLayout;
}());

var DeletePageLayouts = /** @class */ (function () {
    function DeletePageLayouts(payload) {
        this.payload = payload;
        this.type = PageLayoutActionTypes.DeletePageLayouts;
    }
    return DeletePageLayouts;
}());

var ClearPageLayouts = /** @class */ (function () {
    function ClearPageLayouts() {
        this.type = PageLayoutActionTypes.ClearPageLayouts;
    }
    return ClearPageLayouts;
}());

var UpdateVariableValue = /** @class */ (function () {
    function UpdateVariableValue(payload) {
        this.payload = payload;
        this.type = PageLayoutActionTypes.UpdateVariableValue;
    }
    return UpdateVariableValue;
}());



/***/ }),

/***/ "./src/app/dynamic-layout/state/page-layout.effects.ts":
/*!*************************************************************!*\
  !*** ./src/app/dynamic-layout/state/page-layout.effects.ts ***!
  \*************************************************************/
/*! exports provided: PageLayoutEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutEffects", function() { return PageLayoutEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_page_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/page-layout.service */ "./src/app/dynamic-layout/services/page-layout.service.ts");
/* harmony import */ var _page_layout_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-layout.actions */ "./src/app/dynamic-layout/state/page-layout.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var PageLayoutEffects = /** @class */ (function () {
    function PageLayoutEffects(actions$, pageLayoutService) {
        var _this = this;
        this.actions$ = actions$;
        this.pageLayoutService = pageLayoutService;
        this.loadPageLayout = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_page_layout_actions__WEBPACK_IMPORTED_MODULE_4__["PageLayoutActionTypes"].LoadPageLayout), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (action) {
            return _this.pageLayoutService.getPageLayout(action.payload.pageId);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (pageLayout) { return new _page_layout_actions__WEBPACK_IMPORTED_MODULE_4__["LoadPageLayoutSuccess"]({ pageLayout: pageLayout }); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PageLayoutEffects.prototype, "loadPageLayout", void 0);
    PageLayoutEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_page_layout_service__WEBPACK_IMPORTED_MODULE_3__["PageLayoutService"]])
    ], PageLayoutEffects);
    return PageLayoutEffects;
}());



/***/ }),

/***/ "./src/app/dynamic-layout/state/page-layout.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/dynamic-layout/state/page-layout.model.ts ***!
  \***********************************************************/
/*! exports provided: BindingType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingType", function() { return BindingType; });
var BindingType;
(function (BindingType) {
    BindingType[BindingType["CONSTANT"] = 0] = "CONSTANT";
    BindingType[BindingType["VARIABLE"] = 1] = "VARIABLE";
})(BindingType || (BindingType = {}));


/***/ }),

/***/ "./src/app/dynamic-layout/state/page-layout.reducer.ts":
/*!*************************************************************!*\
  !*** ./src/app/dynamic-layout/state/page-layout.reducer.ts ***!
  \*************************************************************/
/*! exports provided: adapter, initialState, reducer, selectLayout, selectIds, selectEntities, selectAll, selectTotal, selectPageById, selectAvailableComponents, selectVariablesNames, selectVariableValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLayout", function() { return selectLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPageById", function() { return selectPageById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAvailableComponents", function() { return selectAvailableComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectVariablesNames", function() { return selectVariablesNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectVariableValue", function() { return selectVariableValue; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _page_layout_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-layout.actions */ "./src/app/dynamic-layout/state/page-layout.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var _a;



var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    // additional entity state properties
    availableComponents: [
        'ExampleComponent',
        'ExampleInputComponent',
        'ConfigurableTabsComponent',
        'ConfigurableSidenavComponent'
    ]
});
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    var _a, _b;
    switch (action.type) {
        case _page_layout_actions__WEBPACK_IMPORTED_MODULE_2__["PageLayoutActionTypes"].AddNewVariable: {
            return adapter.updateOne({
                id: action.payload.pageId,
                changes: {
                    variables: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.entities[action.payload.pageId].variables, (_a = {}, _a[action.payload.variableName] = null, _a))
                }
            }, state);
        }
        case _page_layout_actions__WEBPACK_IMPORTED_MODULE_2__["PageLayoutActionTypes"].AddPageLayout: {
            return adapter.addOne(action.payload.pageLayout, state);
        }
        case _page_layout_actions__WEBPACK_IMPORTED_MODULE_2__["PageLayoutActionTypes"].UpsertPageLayout: {
            return adapter.upsertOne(action.payload.pageLayout, state);
        }
        case _page_layout_actions__WEBPACK_IMPORTED_MODULE_2__["PageLayoutActionTypes"].AddPageLayouts: {
            return adapter.addMany(action.payload.pageLayouts, state);
        }
        case _page_layout_actions__WEBPACK_IMPORTED_MODULE_2__["PageLayoutActionTypes"].UpsertPageLayouts: {
            return adapter.upsertMany(action.payload.pageLayouts, state);
        }
        case _page_layout_actions__WEBPACK_IMPORTED_MODULE_2__["PageLayoutActionTypes"].UpdateVariableValue: {
            return adapter.updateOne({
                id: action.payload.pageId,
                changes: {
                    variables: (_b = {},
                        _b[action.payload.variableName] = action.payload.variableValue,
                        _b)
                }
            }, state);
        }
        case _page_layout_actions__WEBPACK_IMPORTED_MODULE_2__["PageLayoutActionTypes"].UpdatePageLayout: {
            return adapter.updateOne(action.payload.pageLayout, state);
        }
        case _page_layout_actions__WEBPACK_IMPORTED_MODULE_2__["PageLayoutActionTypes"].UpdatePageLayouts: {
            return adapter.updateMany(action.payload.pageLayouts, state);
        }
        case _page_layout_actions__WEBPACK_IMPORTED_MODULE_2__["PageLayoutActionTypes"].DeletePageLayout: {
            return adapter.removeOne(action.payload.id, state);
        }
        case _page_layout_actions__WEBPACK_IMPORTED_MODULE_2__["PageLayoutActionTypes"].DeletePageLayouts: {
            return adapter.removeMany(action.payload.ids, state);
        }
        case _page_layout_actions__WEBPACK_IMPORTED_MODULE_2__["PageLayoutActionTypes"].LoadPageLayoutSucces: {
            return adapter.addOne(action.payload.pageLayout, state);
        }
        case _page_layout_actions__WEBPACK_IMPORTED_MODULE_2__["PageLayoutActionTypes"].ClearPageLayouts: {
            return adapter.removeAll(state);
        }
        default: {
            return state;
        }
    }
}
var selectLayout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createFeatureSelector"])('pageLayout');
var selectIds = (_a = adapter.getSelectors(selectLayout), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;
var selectPageById = function (pageId) {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectEntities, function (entities) { return entities[pageId]; });
};
var selectAvailableComponents = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectLayout, function (state) { return state.availableComponents; });
var selectVariablesNames = function (pageId) {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectPageById(pageId), function (page) { return Object.keys(page.variables); });
};
var selectVariableValue = function (pageId, variableName) {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(selectPageById(pageId), function (page) { return page.variables[variableName]; });
};


/***/ }),

/***/ "./src/app/example-input/example-input.component.css":
/*!***********************************************************!*\
  !*** ./src/app/example-input/example-input.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUtaW5wdXQvZXhhbXBsZS1pbnB1dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/example-input/example-input.component.html":
/*!************************************************************!*\
  !*** ./src/app/example-input/example-input.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"sendNumber()\">holaaa</button>\n"

/***/ }),

/***/ "./src/app/example-input/example-input.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/example-input/example-input.component.ts ***!
  \**********************************************************/
/*! exports provided: ExampleInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleInputComponent", function() { return ExampleInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExampleInputComponent = /** @class */ (function () {
    function ExampleInputComponent() {
        this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.number = 0;
    }
    ExampleInputComponent.prototype.ngOnInit = function () { };
    ExampleInputComponent.prototype.sendNumber = function () {
        this.number++;
        this.valueChanges.emit(this.number);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExampleInputComponent.prototype, "valueChanges", void 0);
    ExampleInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example-input',
            template: __webpack_require__(/*! ./example-input.component.html */ "./src/app/example-input/example-input.component.html"),
            styles: [__webpack_require__(/*! ./example-input.component.css */ "./src/app/example-input/example-input.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExampleInputComponent);
    return ExampleInputComponent;
}());



/***/ }),

/***/ "./src/app/example/example.component.css":
/*!***********************************************!*\
  !*** ./src/app/example/example.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUvZXhhbXBsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/example/example.component.html":
/*!************************************************!*\
  !*** ./src/app/example/example.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{exampleInput}}\n"

/***/ }),

/***/ "./src/app/example/example.component.ts":
/*!**********************************************!*\
  !*** ./src/app/example/example.component.ts ***!
  \**********************************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return ExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExampleComponent = /** @class */ (function () {
    function ExampleComponent() {
        this.exampleOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ExampleComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ExampleComponent.prototype, "exampleInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExampleComponent.prototype, "exampleOutput", void 0);
    ExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example',
            template: __webpack_require__(/*! ./example.component.html */ "./src/app/example/example.component.html"),
            styles: [__webpack_require__(/*! ./example.component.css */ "./src/app/example/example.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExampleComponent);
    return ExampleComponent;
}());



/***/ }),

/***/ "./src/app/state/index.ts":
/*!********************************!*\
  !*** ./src/app/state/index.ts ***!
  \********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

var reducers = {};
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/guillem/projects/angular/ng-dynamic-layout/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map