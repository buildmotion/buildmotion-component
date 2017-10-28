import { Router } from '@angular/router';
import { LoggingService } from 'buildmotion-logging/logging.service';
import { ServiceContext } from 'angular-rules-engine/service/index';
import { ErrorResponse } from 'buildmotion-foundation/models/error-response.model';
import { AlertNotification } from 'buildmotion-alert/alert/models/alert-notification.model';
export declare class ComponentBase {
    loggingService: LoggingService;
    router: Router;
    componentName: string;
    alertNotification: AlertNotification;
    constructor(componentName: string, loggingService: LoggingService, router: Router);
    /**
     * Use to create a simple [ErrorResponse] with the specified message.
     * @param message The message to display to the user.
     */
    createErrorResponse(message: string): ErrorResponse;
    /**
     * for development
    */
    handleError(error: any): void;
    /**
     * Use to handle service errors. These are error response [See: ErrorResponse] from
     * the application business layers (Action(s) or Http) that will bubble up to the
     * caller (i.e., a component) in a specified format:
     *
     * IsSuccess: boolean = false; // default for ErrorResponse
     * Message: string;
     * Errors: Array<ServiceError> = new Array<ServiceError>();
     * Exception: any;
     */
    handleServiceErrors(errorResponse: ErrorResponse, serviceContext?: ServiceContext): void;
    /**
     * Use to retrieve the error messages from the specified [ServiceContext].
     *
     * @parm: serviceContext: A context object containing messages for the specified request.
     */
    retrieveServiceContextErrorMessages(serviceContext: ServiceContext): Array<string>;
    /**
     * Use to retrieve the error messages from the specified Web API response.
     */
    retrieveResponseErrorMessages(errorResponse: ErrorResponse): string[];
    /**
     * Use to reset the [AlertNotification] to the initial state. Removes
     * existing messages and hides the AlertComponent.
     */
    resetAlertNotifications(): void;
    /**
     * Use to navigate to the specified route.
     * @parm routeName: The name of the target route.
     */
    routeTo(routeName: string): void;
    /**
     * Use to retrieve and show any response error messages.
     */
    showResponseErrors(response: ErrorResponse): void;
    finishRequest(message: string): void;
    protected showAlertMessage(message: string): void;
}
