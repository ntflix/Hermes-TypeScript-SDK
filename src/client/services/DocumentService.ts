/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_add_documents_document_post } from '../models/Body_add_documents_document_post';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DocumentService {

    /**
     * Add Documents
     * @param formData
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addDocumentsDocumentPost(
        formData: Body_add_documents_document_post,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/document',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Documents
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getDocumentsDocumentGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/document/',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }

    /**
     * Delete Document
     * @param documentId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteDocumentDocumentDocumentIdDelete(
        documentId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/document/{document_id}',
            path: {
                'document_id': documentId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

}
