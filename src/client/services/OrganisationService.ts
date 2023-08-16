/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_create_organisation_organisation_post } from '../models/Body_create_organisation_organisation_post';
import type { Organisation } from '../models/Organisation';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OrganisationService {

    /**
     * Create Organisation
     * @param requestBody
     * @returns Organisation Successful Response
     * @throws ApiError
     */
    public static createOrganisationOrganisationPost(
        requestBody: Body_create_organisation_organisation_post,
    ): CancelablePromise<Organisation> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/organisation',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Organisations
     * @returns Organisation Successful Response
     * @throws ApiError
     */
    public static getOrganisationsOrganisationGet(): CancelablePromise<Array<Organisation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/organisation/',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }

}
