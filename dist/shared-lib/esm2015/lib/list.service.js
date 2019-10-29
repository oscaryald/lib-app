/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class ListService {
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
/** @nocollapse */ ListService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ListService_Factory() { return new ListService(); }, token: ListService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListService.prototype.message$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvbXBhbnkvc2hhcmVkLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLFdBQVc7SUFIeEI7UUFJVSxhQUFRLEdBQW9CLElBQUksT0FBTyxFQUFVLENBQUM7S0FTM0Q7Ozs7O0lBUEMsVUFBVSxDQUFDLE9BQVk7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7O1lBWkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7OztJQUVDLCtCQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIExpc3RTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBtZXNzYWdlJDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuXG4gIHNldE1lc3NhZ2UobWVzc2FnZTogYW55KSB7XG4gICAgdGhpcy5tZXNzYWdlJC5uZXh0KG1lc3NhZ2UpO1xuICB9XG5cbiAgZ2V0TWVzc2FnZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2UkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG59XG4iXX0=