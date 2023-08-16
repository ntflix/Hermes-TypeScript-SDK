/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_add_document_to_collection_collection__collection_id__documents_post } from '../models/Body_add_document_to_collection_collection__collection_id__documents_post';
import type { Body_create_collection_collection_post } from '../models/Body_create_collection_collection_post';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CollectionService {

    /**
     * Create Collection
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createCollectionCollectionPost(
        requestBody: Body_create_collection_collection_post,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/collection',
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
     * Get Collections
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getCollectionsCollectionGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/collection/',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }

    /**
     * Get Collection
     * @param collectionId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getCollectionCollectionCollectionIdDocumentsGet(
        collectionId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/collection/{collection_id}/documents',
            path: {
                'collection_id': collectionId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
                422: `Validation Error`,
            },
        });
    }

    /**
     * Add Document To Collection
     * @param collectionId
     * @param documentId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addDocumentToCollectionCollectionCollectionIdDocumentsPost(
        collectionId: number,
        documentId: number,
        requestBody: Body_add_document_to_collection_collection__collection_id__documents_post,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/collection/{collection_id}/documents',
            path: {
                'collection_id': collectionId,
            },
            query: {
                'document_id': documentId,
            },
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
     * Delete Collection
     * @param collectionId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteCollectionCollectionCollectionIdDelete(
        collectionId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/collection/{collection_id}',
            path: {
                'collection_id': collectionId,
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
