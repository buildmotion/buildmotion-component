import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildMotionAlertModule } from 'buildmotion-alert';
import { BuildMotionLoggingModule } from 'buildmotion-logging';
import { BuildMotionFoundationModule } from 'buildmotion-foundation';
var BuildMotionComponentModule = /** @class */ (function () {
    function BuildMotionComponentModule() {
    }
    BuildMotionComponentModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        BuildMotionAlertModule,
                        BuildMotionFoundationModule,
                        BuildMotionLoggingModule
                    ],
                    declarations: [],
                    exports: []
                },] },
    ];
    /** @nocollapse */
    BuildMotionComponentModule.ctorParameters = function () { return []; };
    return BuildMotionComponentModule;
}());
export { BuildMotionComponentModule };
//# sourceMappingURL=buildmotion-component.module.js.map