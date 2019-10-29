(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@company/shared-lib', ['exports', '@angular/core', 'rxjs', '@angular/common'], factory) :
    (global = global || self, factory((global.company = global.company || {}, global.company['shared-lib'] = {}), global.ng.core, global.rxjs, global.ng.common));
}(this, (function (exports, core, rxjs, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListService = /** @class */ (function () {
        function ListService() {
            this.message$ = new rxjs.Subject();
        }
        /**
         * @param {?} message
         * @return {?}
         */
        ListService.prototype.setMessage = /**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            this.message$.next(message);
        };
        /**
         * @return {?}
         */
        ListService.prototype.getMessage = /**
         * @return {?}
         */
        function () {
            return this.message$.asObservable();
        };
        ListService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */ ListService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ListService_Factory() { return new ListService(); }, token: ListService, providedIn: "root" });
        return ListService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ListService.prototype.message$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListComponent = /** @class */ (function () {
        function ListComponent() {
        }
        /**
         * @return {?}
         */
        ListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () { };
        ListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sl-list',
                        template: "<ul class=\"lib-list\">\r\n  UP shared-lib update to 9 version\r\n  <li *ngFor=\"let item of list\">{{ item }}</li>\r\n</ul>\r\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".lib-list li{color:green}"]
                    }] }
        ];
        /** @nocollapse */
        ListComponent.ctorParameters = function () { return []; };
        ListComponent.propDecorators = {
            list: [{ type: core.Input }]
        };
        return ListComponent;
    }());
    if (false) {
        /** @type {?} */
        ListComponent.prototype.list;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListModule = /** @class */ (function () {
        function ListModule() {
        }
        ListModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ListComponent],
                        exports: [ListComponent],
                        imports: [common.CommonModule],
                    },] }
        ];
        return ListModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BorderDirective = /** @class */ (function () {
        function BorderDirective(elementRef$) {
            this.elementRef$ = elementRef$;
            this.element$ = elementRef$.nativeElement;
        }
        /**
         * @return {?}
         */
        BorderDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.element$.style.border = 'solid 1px red';
        };
        BorderDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[slBorder]',
                    },] }
        ];
        /** @nocollapse */
        BorderDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        return BorderDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        BorderDirective.prototype.element$;
        /**
         * @type {?}
         * @private
         */
        BorderDirective.prototype.elementRef$;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BorderModule = /** @class */ (function () {
        function BorderModule() {
        }
        BorderModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BorderDirective],
                        exports: [BorderDirective],
                        imports: [common.CommonModule],
                    },] }
        ];
        return BorderModule;
    }());

    exports.BorderModule = BorderModule;
    exports.ListModule = ListModule;
    exports.ListService = ListService;
    exports.ɵa = ListComponent;
    exports.ɵb = BorderDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=company-shared-lib.umd.js.map
