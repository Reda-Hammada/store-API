"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * base controller to handle success and error response
 */
class BaseController {
    /**
     * success response
     * @param Response res
     * @param number status
     * @param string message
     * @param Object data
     *
     */
    SuccessResponse(res, status, message, data) {
        res.status(status).json({
            status,
            message,
            data,
        });
    }
    /**
     * error response
     * @param Response res
     * @param  number status
     * @param string message
     * @return Response
     */
    ErrorrResponse(res, status, message) {
        res.status(status).json({
            status,
            message,
        });
    }
}
exports.default = BaseController;
