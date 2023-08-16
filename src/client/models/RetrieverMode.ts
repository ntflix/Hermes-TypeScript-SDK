/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * DEFAULT: This mode is used for the List Index. It retrieves all nodes from the index.
 * EMBEDDING: Also used for the List Index, this mode retrieves the top-k nodes based on embedding similarity.
 * LLM: Again used for the List Index, this mode retrieves nodes using a separate LLM call per node. It is suitable for more detailed answers.
 * SELECT_LEAF: This mode is used for the Tree Index. It selects the leaf nodes based on the query.
 * SELECT_LEAF_EMBEDDING: Similar to SELECT_LEAF, this mode selects the leaf nodes based on embedding similarity.
 * ALL_LEAF: This mode is used for the Tree Index. It retrieves all leaf nodes from the index.
 * ROOT: Also used for the Tree Index, this mode retrieves the root node of the tree constructed from the set of nodes and the query. It is useful for summarization purposes.
 * KEYWORD: This mode is used for the Keyword Table Index. It retrieves nodes based on keyword matching.
 * HYBRID: Also used for the Knowledge Graph Index, this mode retrieves nodes using a combination of keyword matching and embedding similarity.
 * SIMPLE: This mode is used for the Keyword Table Index. It retrieves nodes based on simple keyword matching.
 * RAKE: Also used for the Keyword Table Index, this mode retrieves nodes using the RAKE (Rapid Automatic Keyword Extraction) algorithm.
 * DOCUMENT_SUMMARY: This mode is used for the Document Summary Index. It retrieves nodes based on document summarization techniques.
 */
export enum RetrieverMode {
    DEFAULT = 'default',
    EMBEDDING = 'embedding',
    LLM = 'llm',
    SELECT_LEAF = 'select_leaf',
    SELECT_LEAF_EMBEDDING = 'select_leaf_embedding',
    ALL_LEAF = 'all_leaf',
    ROOT = 'root',
    KEYWORD = 'keyword',
    HYBRID = 'hybrid',
    SIMPLE = 'simple',
    RAKE = 'rake',
}
