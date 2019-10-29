/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ ListService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ListService_Factory() { return new ListService(); }, token: ListService, providedIn: "root" });
    return ListService;
}());
export { ListService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListService.prototype.message$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvbXBhbnkvc2hhcmVkLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFM0M7SUFBQTtRQUlVLGFBQVEsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztLQVMzRDs7Ozs7SUFQQyxnQ0FBVTs7OztJQUFWLFVBQVcsT0FBWTtRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsZ0NBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RDLENBQUM7O2dCQVpGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OztzQkFMRDtDQWdCQyxBQWJELElBYUM7U0FWWSxXQUFXOzs7Ozs7SUFDdEIsK0JBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFNlcnZpY2Uge1xuICBwcml2YXRlIG1lc3NhZ2UkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG5cbiAgc2V0TWVzc2FnZShtZXNzYWdlOiBhbnkpIHtcbiAgICB0aGlzLm1lc3NhZ2UkLm5leHQobWVzc2FnZSk7XG4gIH1cblxuICBnZXRNZXNzYWdlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cbiJdfQ==