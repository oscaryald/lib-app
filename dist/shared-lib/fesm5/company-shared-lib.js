import { Injectable, ɵɵdefineInjectable, Component, ChangeDetectionStrategy, Input, NgModule, Directive, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListService = /** @class */ (function () {
    function ListService() {
        this.message$ = new Subject();
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ ListService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ListService_Factory() { return new ListService(); }, token: ListService, providedIn: "root" });
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
        { type: Component, args: [{
                    selector: 'sl-list',
                    template: "<ul class=\"lib-list\">\r\n  UP shared-lib update to 9 version\r\n  <li *ngFor=\"let item of list\">{{ item }}</li>\r\n</ul>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".lib-list li{color:green}"]
                }] }
    ];
    /** @nocollapse */
    ListComponent.ctorParameters = function () { return []; };
    ListComponent.propDecorators = {
        list: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [ListComponent],
                    exports: [ListComponent],
                    imports: [CommonModule],
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
        { type: Directive, args: [{
                    selector: '[slBorder]',
                },] }
    ];
    /** @nocollapse */
    BorderDirective.ctorParameters = function () { return [
        { type: ElementRef }
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
        { type: NgModule, args: [{
                    declarations: [BorderDirective],
                    exports: [BorderDirective],
                    imports: [CommonModule],
                },] }
    ];
    return BorderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BorderModule, ListModule, ListService, ListComponent as ɵa, BorderDirective as ɵb };
//# sourceMappingURL=company-shared-lib.js.map
