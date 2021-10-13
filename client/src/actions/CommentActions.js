import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createCommentRequest() {
  return { type: types.CREATE_COMMENT_REQUEST };
}

export function createCommentSuccess(comment) {
  return { type: types.CREATE_COMMENT_SUCCESS, comment };
}

export function createComment(text, cardId, callback) {
  return function (dispatch) {
    dispatch(createCommentRequest());

    apiClient.createComment(text, cardId, (data) => {
      dispatch(createCommentSuccess(data.comment));
      if (callback) {
        callback(data.comment);
      }
    });
  };
}