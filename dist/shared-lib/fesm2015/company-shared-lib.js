import { Injectable, ɵɵdefineInjectable, Component, ChangeDetectionStrategy, Input, NgModule, Directive, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListService {
    constructor() {
        this.message$ = new Subject();
    }
    /**
     * @param {?} message
     * @return {?}
     */
    setMessage(message) {
        this.message$.next(message);
    }
    /**
     * @return {?}
     */
    getMessage() {
        return this.message$.asObservable();
    }
}
ListService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ ListService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ListService_Factory() { return new ListService(); }, token: ListService, providedIn: "root" });
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
class ListComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ListComponent.decorators = [
    { type: Component, args: [{
                selector: 'sl-list',
                template: "<ul class=\"lib-list\">\r\n  UP shared-lib update to 9 version\r\n  <li *ngFor=\"let item of list\">{{ item }}</li>\r\n</ul>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".lib-list li{color:green}"]
            }] }
];
/** @nocollapse */
ListComponent.ctorParameters = () => [];
ListComponent.propDecorators = {
    list: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListComponent.prototype.list;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ListModule {
}
ListModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ListComponent],
                exports: [ListComponent],
                imports: [CommonModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BorderDirective {
    /**
     * @param {?} elementRef$
     */
    constructor(elementRef$) {
        this.elementRef$ = elementRef$;
        this.element$ = elementRef$.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.element$.style.border = 'solid 1px red';
    }
}
BorderDirective.decorators = [
    { type: Directive, args: [{
                selector: '[slBorder]',
            },] }
];
/** @nocollapse */
BorderDirective.ctorParameters = () => [
    { type: ElementRef }
];
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
class BorderModule {
}
BorderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [BorderDirective],
                exports: [BorderDirective],
                imports: [CommonModule],
            },] }
];

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
