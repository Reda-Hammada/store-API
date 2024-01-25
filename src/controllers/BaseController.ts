import { Response } from "express";

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
  protected SuccessResponse(
    res: Response,
    status: number,
    message: [] | string,
    data: {}
  ) {
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
   * @param String message
   * @return Response
   */
  protected ErrorrResponse(
    res: Response,
    status: number,
    message: [] | string
  ) {
    res.status(status).json({
      status,
      message,
    });
  }
}

export default BaseController;
