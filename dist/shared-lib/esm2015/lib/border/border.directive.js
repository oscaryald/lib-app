/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
export class BorderDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9yZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb21wYW55L3NoYXJlZC1saWIvIiwic291cmNlcyI6WyJsaWIvYm9yZGVyL2JvcmRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBSzlELE1BQU0sT0FBTyxlQUFlOzs7O0lBRzFCLFlBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUM7SUFDL0MsQ0FBQzs7O1lBWkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7O1lBSm1CLFVBQVU7Ozs7Ozs7SUFNNUIsbUNBQThCOzs7OztJQUVsQixzQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2xCb3JkZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgQm9yZGVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBlbGVtZW50JDogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmJDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWxlbWVudCQgPSBlbGVtZW50UmVmJC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5lbGVtZW50JC5zdHlsZS5ib3JkZXIgPSAnc29saWQgMXB4IHJlZCc7XG4gIH1cbn1cbiJdfQ==