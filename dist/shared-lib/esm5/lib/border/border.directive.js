/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
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
export { BorderDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9yZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb21wYW55L3NoYXJlZC1saWIvIiwic291cmNlcyI6WyJsaWIvYm9yZGVyL2JvcmRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTlEO0lBTUUseUJBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQztJQUMvQyxDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7O2dCQUptQixVQUFVOztJQWU5QixzQkFBQztDQUFBLEFBYkQsSUFhQztTQVZZLGVBQWU7Ozs7OztJQUMxQixtQ0FBOEI7Ozs7O0lBRWxCLHNDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tzbEJvcmRlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBCb3JkZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGVsZW1lbnQkOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWYkOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbGVtZW50JCA9IGVsZW1lbnRSZWYkLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVsZW1lbnQkLnN0eWxlLmJvcmRlciA9ICdzb2xpZCAxcHggcmVkJztcbiAgfVxufVxuIl19