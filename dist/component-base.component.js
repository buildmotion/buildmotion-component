import { MessageType } from 'angular-rules-engine/service/index';
import { ServiceMessage } from 'angular-rules-engine/service/index';
import { ErrorResponse } from 'buildmotion-foundation/models/error-response.model';
import { Severity } from 'buildmotion-logging/severity.enum';
import { AlertNotification } from 'buildmotion-alert/alert/models/alert-notification.model';
import { AlertTypes } from 'buildmotion-alert/alert/models/alert-types.constants';
var ComponentBase = /** @class */ (function () {
    function ComponentBase(loggingService, router) {
        this.loggingService = loggingService;
        this.router = router;
        this.alertNotification = new AlertNotification('', '');
    }
    /**
     * Use to create a simple [ErrorResponse] with the specified message.
     * @param message The message to display to the user.
     */
    ComponentBase.prototype.createErrorResponse = function (message) {
        var response = new ErrorResponse();
        response.Message = message;
        return response;
    };
    /**
     * for development
    */
    ComponentBase.prototype.handleError = function (error) {
        var message = new ServiceMessage(error.name, error.message)
            .WithDisplayToUser(true)
            .WithMessageType(MessageType.Error)
            .WithSource(this.componentName);
        this.loggingService.log(this.componentName, Severity.Error, message.toString());
    };
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
    ComponentBase.prototype.handleServiceErrors = function (errorResponse, serviceContext) {
        if (serviceContext && serviceContext.hasErrors()) {
            // retrieving error messages from the ServiceContext/ValidationContext;
            var messages = this.retrieveServiceContextErrorMessages(serviceContext);
            this.alertNotification = new AlertNotification('Errors', errorResponse.Message, messages, AlertTypes.Warning);
        }
        else {
            if (errorResponse && errorResponse.Message) {
                var errors = this.retrieveResponseErrorMessages(errorResponse);
                this.alertNotification = new AlertNotification('Error', errorResponse.Message, errors, AlertTypes.Warning);
                this.loggingService.log(this.componentName, Severity.Error, "Error: " + errorResponse.Message);
            }
        }
    };
    /**
     * Use to retrieve the error messages from the specified [ServiceContext].
     *
     * @parm: serviceContext: A context object containing messages for the specified request.
     */
    ComponentBase.prototype.retrieveServiceContextErrorMessages = function (serviceContext) {
        var messages = Array();
        serviceContext.Messages.forEach(function (e) {
            if (e.MessageType === MessageType.Error && e.DisplayToUser) {
                messages.push(e.Message);
            }
        });
        return messages;
    };
    /**
     * Use to retrieve the error messages from the specified Web API response.
     */
    ComponentBase.prototype.retrieveResponseErrorMessages = function (errorResponse) {
        var errors = new Array();
        if (errorResponse && errorResponse.Errors) {
            errorResponse.Errors.forEach(function (e) {
                if (e.DisplayToUser) {
                    errors.push(e.Message);
                }
            });
        }
        return errors;
    };
    /**
     * Use to reset the [AlertNotification] to the initial state. Removes
     * existing messages and hides the AlertComponent.
     */
    ComponentBase.prototype.resetAlertNotifications = function () {
        this.alertNotification = new AlertNotification('', '');
    };
    /**
     * Use to navigate to the specified route.
     * @parm routeName: The name of the target route.
     */
    ComponentBase.prototype.routeTo = function (routeName) {
        try {
            this.router.navigate([routeName]);
        }
        catch (error) {
            this.loggingService.log(this.componentName, Severity.Error, "Error while attempting to navigate to [" + routeName + "] route from " + this.componentName + ". Error: " + error.toString());
        }
    };
    /**
     * Use to retrieve and show any response error messages.
     */
    ComponentBase.prototype.showResponseErrors = function (response) {
        // let messages = this.retrieveResponseErrorMessages(response);
        // this.alertNotification = new AlertNotification('Errors', response.Message, messages, AlertTypes.Warning);
        this.handleServiceErrors(response, undefined);
    };
    ComponentBase.prototype.finishRequest = function (message) {
        this.loggingService.log(this.componentName, Severity.Information, this.componentName + ": " + message);
    };
    ComponentBase.prototype.showAlertMessage = function (message) {
        alert(message);
    };
    return ComponentBase;
}());
export { ComponentBase };
//# sourceMappingURL=component-base.component.js.map