/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_create_chat_chat_post } from '../models/Body_create_chat_chat_post';
import type { Message } from '../models/Message';
import type { Model } from '../models/Model';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ChatService {

    /**
     * Get Chats
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getChatsChatGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chat/',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }

    /**
     * Create Chat
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static createChatChatPost(
        requestBody: Body_create_chat_chat_post,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chat',
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
     * Get Messages
     * @param conversationId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getMessagesChatConversationIdGet(
        conversationId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chat/{conversation_id}',
            path: {
                'conversation_id': conversationId,
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
     * Delete Chat
     * @param conversationId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteChatChatConversationIdDelete(
        conversationId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/chat/{conversation_id}',
            path: {
                'conversation_id': conversationId,
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
     * Chat
     * @param conversationId
     * @param query
     * @param model
     * @param temperature
     * @param outputTokens
     * @returns any Successful Response
     * @throws ApiError
     */
    public static chatChatConversationIdStreamGet(
        conversationId: number,
        query: string,
        model: Model,
        temperature?: number,
        outputTokens?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chat/{conversation_id}/stream',
            path: {
                'conversation_id': conversationId,
            },
            headers: {
                'query': query,
                'model': model,
                'temperature': temperature,
                'output-tokens': outputTokens,
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
     * Add Message Dev
     * @param conversationId
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static addMessageDevChatConversationIdMessagesPost(
        conversationId: number,
        requestBody: Message,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chat/{conversation_id}/messages',
            path: {
                'conversation_id': conversationId,
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

}
