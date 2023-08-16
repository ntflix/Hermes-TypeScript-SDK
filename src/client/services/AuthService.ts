/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_login_for_access_token_auth_token_post } from '../models/Body_login_for_access_token_auth_token_post';
import type { Body_login_user_for_access_token_auth_user_token_post } from '../models/Body_login_user_for_access_token_auth_user_token_post';
import type { Token } from '../models/Token';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * Login User For Access Token
     * @param formData
     * @param tokenExpiresMinutes
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static loginUserForAccessTokenAuthUserTokenPost(
        formData: Body_login_user_for_access_token_auth_user_token_post,
        tokenExpiresMinutes: number = 1440,
    ): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/user_token',
            query: {
                'token_expires_minutes': tokenExpiresMinutes,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Login For Access Token
     * @param formData
     * @param tokenExpiresMinutes
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static loginForAccessTokenAuthTokenPost(
        formData: Body_login_for_access_token_auth_token_post,
        tokenExpiresMinutes: number = 1440,
    ): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/token',
            query: {
                'token_expires_minutes': tokenExpiresMinutes,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

}
