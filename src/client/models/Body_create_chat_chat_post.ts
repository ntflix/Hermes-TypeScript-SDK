/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChatMode } from './ChatMode';
import type { Model } from './Model';
import type { RetrieverMode } from './RetrieverMode';

export type Body_create_chat_chat_post = {
    model: Model;
    index_id: string;
    chat_name?: string;
    prompt?: string;
    output_tokens?: number;
    temperature?: number;
    similarity_top_k?: number;
    retriever_mode?: RetrieverMode;
    chat_mode?: ChatMode;
};

