function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _d3_components_donut_donut_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./d3-components/donut/donut.component */
    "./src/app/d3-components/donut/donut.component.ts");
    /* harmony import */


    var _d3_components_bar_vertical_bar_vertical_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./d3-components/bar-vertical/bar-vertical.component */
    "./src/app/d3-components/bar-vertical/bar-vertical.component.ts");
    /* harmony import */


    var _d3_components_bar_horizontal_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./d3-components/bar-horizontal/bar-horizontal.component */
    "./src/app/d3-components/bar-horizontal/bar-horizontal.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");

    function AppComponent_th_82_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_td_83_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.position, " ");
      }
    }

    function AppComponent_th_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_td_86_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.name, " ");
      }
    }

    function AppComponent_th_88_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Weight ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_td_89_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.weight, " ");
      }
    }

    function AppComponent_th_91_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Symbol ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_td_92_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.symbol, " ");
      }
    }

    function AppComponent_tr_93_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 40);
      }
    }

    function AppComponent_tr_94_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 41);
      }
    }

    var ELEMENT_DATA = [{
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H'
    }, {
      position: 2,
      name: 'Helium',
      weight: 4.0026,
      symbol: 'He'
    }];

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(calendar) {
        _classCallCheck(this, AppComponent);

        this.radioDuration = '1w';
        this.radioInterval = 'week';
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
        this.hoveredDate = null;
        this.toDate = null;
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
      }

      _createClass(AppComponent, [{
        key: "onDateSelection",
        value: function onDateSelection(date) {
          if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
          } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
          } else {
            this.toDate = null;
            this.fromDate = date;
          }
        }
      }, {
        key: "isHovered",
        value: function isHovered(date) {
          return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
        }
      }, {
        key: "isInside",
        value: function isInside(date) {
          return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
        }
      }, {
        key: "isRange",
        value: function isRange(date) {
          return date.equals(this.fromDate) || this.toDate && date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 95,
      vars: 7,
      consts: [[1, "container-fluid", "p-3"], [1, "row"], [1, "col-sm-6"], [1, "col-sm-6", "d-flex", "justify-content-end"], [1, "col-sm"], ["ngbRadioGroup", "", "name", "radioBasic", 1, "btn-group", "btn-group-toggle", 3, "ngModel", "ngModelChange"], ["ngbButtonLabel", "", 1, "btn-light"], ["ngbButton", "", "type", "radio", "value", "'1w'"], ["ngbButton", "", "type", "radio", "value", "'2w'"], ["ngbButton", "", "type", "radio", "value", "'1m'"], ["ngbButton", "", "type", "radio", "value", "'3m'"], ["ngbButton", "", "type", "radio", "value", "'1y'"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "col-lg-3", "col-md-6"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-content"], [1, "col-lg-6", "col-md-12"], [1, "col-sm", "d-flex", "justify-content-end"], ["ngbButton", "", "type", "radio", "value", "'day'"], ["ngbButton", "", "type", "radio", "value", "'week'"], ["ngbButton", "", "type", "radio", "value", "'month'"], ["ngbButton", "", "type", "radio", "value", "'quarter'"], ["ngbButton", "", "type", "radio", "value", "'year'"], [1, "row", "mt-2"], [1, "col-md-12"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Time Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_div_ngModelChange_8_listener($event) {
            return ctx.radioDuration = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " 1W ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 2W ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " 1M ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " 3M ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " 1Y ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Choose a date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-datepicker-toggle", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-datepicker", null, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Total time spent by type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-donut");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Top 10 tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-bar-vertical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Timesheet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_div_ngModelChange_55_listener($event) {
            return ctx.radioInterval = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Day ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Week ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Month ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Quarter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Year ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "app-bar-horizontal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h5", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Time Sheet Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "table", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](81, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, AppComponent_th_82_Template, 2, 0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, AppComponent_td_83_Template, 2, 1, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](84, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, AppComponent_th_85_Template, 2, 0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, AppComponent_td_86_Template, 2, 1, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](87, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, AppComponent_th_88_Template, 2, 0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, AppComponent_td_89_Template, 2, 1, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](90, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, AppComponent_th_91_Template, 2, 0, "th", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, AppComponent_td_92_Template, 2, 1, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, AppComponent_tr_93_Template, 1, 0, "tr", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, AppComponent_tr_94_Template, 1, 0, "tr", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioDuration);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radioInterval);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbButtonLabel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRadio"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepicker"], _d3_components_donut_donut_component__WEBPACK_IMPORTED_MODULE_6__["DonutComponent"], _d3_components_bar_vertical_bar_vertical_component__WEBPACK_IMPORTED_MODULE_7__["BarVerticalComponent"], _d3_components_bar_horizontal_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_8__["BarHorizontalComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]],
      styles: [".mat-card-header-text[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQtaGVhZGVyLXRleHQsXHJcbi5tYXQtY2FyZC1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _d3_components_bar_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./d3-components/bar/bar.component */
    "./src/app/d3-components/bar/bar.component.ts");
    /* harmony import */


    var _d3_components_pie_pie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./d3-components/pie/pie.component */
    "./src/app/d3-components/pie/pie.component.ts");
    /* harmony import */


    var _d3_components_bar_horizontal_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./d3-components/bar-horizontal/bar-horizontal.component */
    "./src/app/d3-components/bar-horizontal/bar-horizontal.component.ts");
    /* harmony import */


    var _d3_components_bar_vertical_bar_vertical_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./d3-components/bar-vertical/bar-vertical.component */
    "./src/app/d3-components/bar-vertical/bar-vertical.component.ts");
    /* harmony import */


    var _d3_components_donut_donut_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./d3-components/donut/donut.component */
    "./src/app/d3-components/donut/donut.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _d3_components_bar_bar_component__WEBPACK_IMPORTED_MODULE_7__["BarComponent"], _d3_components_pie_pie_component__WEBPACK_IMPORTED_MODULE_8__["PieComponent"], _d3_components_bar_horizontal_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_9__["BarHorizontalComponent"], _d3_components_bar_vertical_bar_vertical_component__WEBPACK_IMPORTED_MODULE_10__["BarVerticalComponent"], _d3_components_donut_donut_component__WEBPACK_IMPORTED_MODULE_11__["DonutComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _d3_components_bar_bar_component__WEBPACK_IMPORTED_MODULE_7__["BarComponent"], _d3_components_pie_pie_component__WEBPACK_IMPORTED_MODULE_8__["PieComponent"], _d3_components_bar_horizontal_bar_horizontal_component__WEBPACK_IMPORTED_MODULE_9__["BarHorizontalComponent"], _d3_components_bar_vertical_bar_vertical_component__WEBPACK_IMPORTED_MODULE_10__["BarVerticalComponent"], _d3_components_donut_donut_component__WEBPACK_IMPORTED_MODULE_11__["DonutComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/d3-components/bar-horizontal/bar-horizontal.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/d3-components/bar-horizontal/bar-horizontal.component.ts ***!
    \**************************************************************************/

  /*! exports provided: BarHorizontalComponent */

  /***/
  function srcAppD3ComponentsBarHorizontalBarHorizontalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarHorizontalComponent", function () {
      return BarHorizontalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");

    var BarHorizontalComponent =
    /*#__PURE__*/
    function () {
      function BarHorizontalComponent() {
        _classCallCheck(this, BarHorizontalComponent);

        this.data = [{
          name: 'Sep 1',
          value: 10
        }, {
          name: 'Sep 8',
          value: 12
        }, {
          name: 'Sep 15',
          value: 15
        }, {
          name: 'Sep 22',
          value: 8
        }, {
          name: 'Sep 29',
          value: 3
        }];
        this.margin = 20;
        this.width = 750 - this.margin * 2;
        this.height = 250 - this.margin * 2;
      }

      _createClass(BarHorizontalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createSvg();
          this.drawBars(this.data);
        }
      }, {
        key: "createSvg",
        value: function createSvg() {
          this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('figure#bar-horizontal').append('svg').attr('width', this.width + this.margin * 2).attr('height', this.height + this.margin * 2).append('g').attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
        }
      }, {
        key: "drawBars",
        value: function drawBars(data) {
          var _this = this;

          // Create the X-axis band scale
          var x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]().range([0, this.width]).domain(data.map(function (d) {
            return d.name;
          })).padding(0.2); // Draw the X-axis on the DOM

          this.svg.append('g').attr('transform', 'translate(0,' + this.height + ')').call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](x)).selectAll('text') // .attr('transform', 'translate(-10,0)rotate(-45)')
          .style('text-anchor', 'end'); // Create the Y-axis band scale

          var y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([0, 20]).range([this.height, 0]); // Draw the Y-axis on the DOM

          this.svg.append('g').call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](y)); // Create and fill the bars

          this.svg.selectAll('bars').data(data).enter().append('rect').attr('x', function (d) {
            return x(d.name);
          }).attr('y', function (d) {
            return y(d.value);
          }).attr('width', x.bandwidth()).attr('height', function (d) {
            return _this.height - y(d.value);
          }).attr('fill', '#d04a35');
        }
      }]);

      return BarHorizontalComponent;
    }();

    BarHorizontalComponent.ɵfac = function BarHorizontalComponent_Factory(t) {
      return new (t || BarHorizontalComponent)();
    };

    BarHorizontalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BarHorizontalComponent,
      selectors: [["app-bar-horizontal"]],
      decls: 1,
      vars: 0,
      consts: [["id", "bar-horizontal"]],
      template: function BarHorizontalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "figure", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2QzLWNvbXBvbmVudHMvYmFyLWhvcml6b250YWwvYmFyLWhvcml6b250YWwuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarHorizontalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bar-horizontal',
          templateUrl: './bar-horizontal.component.html',
          styleUrls: ['./bar-horizontal.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/d3-components/bar-vertical/bar-vertical.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/d3-components/bar-vertical/bar-vertical.component.ts ***!
    \**********************************************************************/

  /*! exports provided: BarVerticalComponent */

  /***/
  function srcAppD3ComponentsBarVerticalBarVerticalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarVerticalComponent", function () {
      return BarVerticalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");

    var BarVerticalComponent =
    /*#__PURE__*/
    function () {
      function BarVerticalComponent() {
        _classCallCheck(this, BarVerticalComponent);

        this.data = [{
          name: 'Entry Meeting',
          value: 1
        }, {
          name: 'Exit Meeting',
          value: 6
        }];
        this.margin = 80;
        this.width = 250 - this.margin * 2;
        this.height = 250 - this.margin * 2;
      }

      _createClass(BarVerticalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createSvg();
          this.drawBars(this.data);
        }
      }, {
        key: "createSvg",
        value: function createSvg() {
          this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('figure#bar-vertical').append('svg').attr('width', this.width + this.margin * 2).attr('height', this.height + this.margin * 2).append('g').attr('transform', 'translate(' + this.margin + ', 0 )');
        }
      }, {
        key: "drawBars",
        value: function drawBars(data) {
          // Create the X-axis band scale
          var x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([0, 10]).range([0, this.height]); // Draw the X-axis on the DOM

          this.svg.append('g').attr('transform', 'translate(0,' + this.height + ')'); // .call(d3.axisBottom(x))
          // .selectAll('text')
          // .attr('transform', 'translate(-10,0)rotate(-45)')
          // .style('text-anchor', 'end');
          // Create the Y-axis band scale

          var y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]().range([0, this.width + this.margin * 2]).domain(data.map(function (d) {
            return d.name;
          })).padding(0.2); // Draw the Y-axis on the DOM

          this.svg.append('g').call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](y)); // Create and fill the bars

          this.svg.selectAll('bars').data(data).enter().append('rect').attr('x', 0).attr('y', function (d) {
            return y(d.name);
          }).attr('height', y.bandwidth()).attr('width', function (d) {
            return y(d.name);
          }).attr('fill', d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"]));
        }
      }]);

      return BarVerticalComponent;
    }();

    BarVerticalComponent.ɵfac = function BarVerticalComponent_Factory(t) {
      return new (t || BarVerticalComponent)();
    };

    BarVerticalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BarVerticalComponent,
      selectors: [["app-bar-vertical"]],
      decls: 1,
      vars: 0,
      consts: [["id", "bar-vertical"]],
      template: function BarVerticalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "figure", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2QzLWNvbXBvbmVudHMvYmFyLXZlcnRpY2FsL2Jhci12ZXJ0aWNhbC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarVerticalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bar-vertical',
          templateUrl: './bar-vertical.component.html',
          styleUrls: ['./bar-vertical.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/d3-components/bar/bar.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/d3-components/bar/bar.component.ts ***!
    \****************************************************/

  /*! exports provided: BarComponent */

  /***/
  function srcAppD3ComponentsBarBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarComponent", function () {
      return BarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BarComponent =
    /*#__PURE__*/
    function () {
      function BarComponent() {
        _classCallCheck(this, BarComponent);
      }

      _createClass(BarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BarComponent;
    }();

    BarComponent.ɵfac = function BarComponent_Factory(t) {
      return new (t || BarComponent)();
    };

    BarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BarComponent,
      selectors: [["app-bar"]],
      decls: 2,
      vars: 0,
      template: function BarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "bar works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2QzLWNvbXBvbmVudHMvYmFyL2Jhci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bar',
          templateUrl: './bar.component.html',
          styleUrls: ['./bar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/d3-components/donut/donut.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/d3-components/donut/donut.component.ts ***!
    \********************************************************/

  /*! exports provided: DonutComponent */

  /***/
  function srcAppD3ComponentsDonutDonutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonutComponent", function () {
      return DonutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");

    var DonutComponent =
    /*#__PURE__*/
    function () {
      function DonutComponent() {
        _classCallCheck(this, DonutComponent);

        this.data = [{
          name: 'Risk',
          value: '25'
        }, {
          name: 'Audit',
          value: '25'
        }, {
          name: 'Control',
          value: '50'
        }]; // get height(): number { return parseInt(d3.select('#donut').style('height'), 10); }
        // get width(): number { return parseInt(d3.select('#donut').style('width'), 10); }

        this.height = 250;
        this.width = 250;
      }

      _createClass(DonutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('#donut').append('svg');
          this.setSVGDimensions();
          this.color = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"]);
          this.mainContainer = this.svg.append('g').attr('transform', "translate(".concat(this.radius, ",").concat(this.radius, ")"));
          this.pie = d3__WEBPACK_IMPORTED_MODULE_1__["pie"]().sort(null).value(function (d) {
            return d.value;
          });
          this.draw();
        }
      }, {
        key: "setSVGDimensions",
        value: function setSVGDimensions() {
          this.radius = Math.min(this.width, this.height) / 2;
          this.svg.attr('width', 2 * this.radius).attr('height', 2 * this.radius);
          this.svg.select('g').attr('transform', 'translate(' + this.radius + ',' + this.radius + ')');
        }
      }, {
        key: "draw",
        value: function draw() {
          this.setArcs();
          this.drawSlices();
        }
      }, {
        key: "setArcs",
        value: function setArcs() {
          this.arc = d3__WEBPACK_IMPORTED_MODULE_1__["arc"]().outerRadius(this.radius).innerRadius(this.radius * .5);
        }
      }, {
        key: "drawSlices",
        value: function drawSlices() {
          var _this2 = this;

          this.slices = this.mainContainer.selectAll('path').remove().exit().data(this.pie(this.data)).enter().append('g').append('path').attr('d', this.arc);
          this.slices.attr('fill', function (d, i) {
            return _this2.color(i);
          });
        }
      }]);

      return DonutComponent;
    }();

    DonutComponent.ɵfac = function DonutComponent_Factory(t) {
      return new (t || DonutComponent)();
    };

    DonutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DonutComponent,
      selectors: [["app-donut"]],
      decls: 1,
      vars: 0,
      consts: [["id", "donut"]],
      template: function DonutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "figure", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2QzLWNvbXBvbmVudHMvZG9udXQvZG9udXQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-donut',
          templateUrl: './donut.component.html',
          styleUrls: ['./donut.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/d3-components/pie/pie.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/d3-components/pie/pie.component.ts ***!
    \****************************************************/

  /*! exports provided: PieComponent */

  /***/
  function srcAppD3ComponentsPiePieComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PieComponent", function () {
      return PieComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");

    var PieComponent =
    /*#__PURE__*/
    function () {
      function PieComponent() {
        _classCallCheck(this, PieComponent);

        this.data = [{
          name: 'Risk',
          value: '25'
        }, {
          name: 'Control',
          value: '50'
        }, {
          name: 'Audit',
          value: '25'
        }]; // get height(): number { return parseInt(d3.select('#donut').style('height'), 10); }
        // get width(): number { return parseInt(d3.select('#donut').style('width'), 10); }

        this.height = 250;
        this.width = 250;
      }

      _createClass(PieComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('#pie').append('svg');
          this.setSVGDimensions();
          this.color = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"]);
          this.mainContainer = this.svg.append('g').attr('transform', "translate(".concat(this.radius, ",").concat(this.radius, ")"));
          this.pie = d3__WEBPACK_IMPORTED_MODULE_1__["pie"]().sort(null).value(function (d) {
            return d.value;
          });
          this.draw();
        }
      }, {
        key: "setSVGDimensions",
        value: function setSVGDimensions() {
          this.radius = Math.min(this.width, this.height) / 2;
          this.svg.attr('width', 2 * this.radius).attr('height', 2 * this.radius);
          this.svg.select('g').attr('transform', 'translate(' + this.radius + ',' + this.radius + ')');
        }
      }, {
        key: "draw",
        value: function draw() {
          this.setArcs();
          this.drawSlices();
        }
      }, {
        key: "setArcs",
        value: function setArcs() {
          this.arc = d3__WEBPACK_IMPORTED_MODULE_1__["arc"]().outerRadius(this.radius).innerRadius(this.radius * .5);
        }
      }, {
        key: "drawSlices",
        value: function drawSlices() {
          var _this3 = this;

          this.slices = this.mainContainer.selectAll('path').remove().exit().data(this.pie(this.data)).enter().append('g').append('path').attr('d', this.arc);
          this.slices.attr('fill', function (d, i) {
            return _this3.color(i);
          });
        }
      }]);

      return PieComponent;
    }();

    PieComponent.ɵfac = function PieComponent_Factory(t) {
      return new (t || PieComponent)();
    };

    PieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PieComponent,
      selectors: [["app-pie"]],
      decls: 1,
      vars: 0,
      consts: [["id", "pie"]],
      template: function PieComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "figure", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2QzLWNvbXBvbmVudHMvcGllL3BpZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pie',
          templateUrl: './pie.component.html',
          styleUrls: ['./pie.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Learning\Angular\time-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map