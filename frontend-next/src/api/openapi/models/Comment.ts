/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Blog } from './Blog';
import {
    BlogFromJSON,
    BlogFromJSONTyped,
    BlogToJSON,
} from './Blog';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface Comment
 */
export interface Comment {
    /**
     * 
     * @type {number}
     * @memberof Comment
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    content?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Comment
     */
    deleted?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof Comment
     */
    createTime?: Date;
    /**
     * 
     * @type {User}
     * @memberof Comment
     */
    sendUser?: User;
    /**
     * 
     * @type {Blog}
     * @memberof Comment
     */
    blog?: Blog;
    /**
     * 
     * @type {Array<Comment>}
     * @memberof Comment
     */
    replyComments?: Array<Comment>;
    /**
     * 
     * @type {Comment}
     * @memberof Comment
     */
    replyComment?: Comment;
}

/**
 * Check if a given object implements the Comment interface.
 */
export function instanceOfComment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommentFromJSON(json: any): Comment {
    return CommentFromJSONTyped(json, false);
}

export function CommentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Comment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
        'createTime': !exists(json, 'createTime') ? undefined : (new Date(json['createTime'])),
        'sendUser': !exists(json, 'sendUser') ? undefined : UserFromJSON(json['sendUser']),
        'blog': !exists(json, 'blog') ? undefined : BlogFromJSON(json['blog']),
        'replyComments': !exists(json, 'replyComments') ? undefined : ((json['replyComments'] as Array<any>).map(CommentFromJSON)),
        'replyComment': !exists(json, 'replyComment') ? undefined : CommentFromJSON(json['replyComment']),
    };
}

export function CommentToJSON(value?: Comment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'content': value.content,
        'deleted': value.deleted,
        'createTime': value.createTime === undefined ? undefined : (value.createTime.toISOString()),
        'sendUser': UserToJSON(value.sendUser),
        'blog': BlogToJSON(value.blog),
        'replyComments': value.replyComments === undefined ? undefined : ((value.replyComments as Array<any>).map(CommentToJSON)),
        'replyComment': CommentToJSON(value.replyComment),
    };
}

