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
import type { CategorityVo } from './CategorityVo';
import {
    CategorityVoFromJSON,
    CategorityVoFromJSONTyped,
    CategorityVoToJSON,
} from './CategorityVo';
import type { TagVo } from './TagVo';
import {
    TagVoFromJSON,
    TagVoFromJSONTyped,
    TagVoToJSON,
} from './TagVo';
import type { UserVo } from './UserVo';
import {
    UserVoFromJSON,
    UserVoFromJSONTyped,
    UserVoToJSON,
} from './UserVo';

/**
 * 
 * @export
 * @interface BlogVo
 */
export interface BlogVo {
    /**
     * 
     * @type {number}
     * @memberof BlogVo
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof BlogVo
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof BlogVo
     */
    uri?: string;
    /**
     * 
     * @type {string}
     * @memberof BlogVo
     */
    coverPath?: string;
    /**
     * 
     * @type {string}
     * @memberof BlogVo
     */
    contentPath?: string;
    /**
     * 
     * @type {string}
     * @memberof BlogVo
     */
    flag?: string;
    /**
     * 
     * @type {number}
     * @memberof BlogVo
     */
    views?: number;
    /**
     * 
     * @type {number}
     * @memberof BlogVo
     */
    likes?: number;
    /**
     * 
     * @type {UserVo}
     * @memberof BlogVo
     */
    user?: UserVo;
    /**
     * 
     * @type {Array<TagVo>}
     * @memberof BlogVo
     */
    tags?: Array<TagVo>;
    /**
     * 
     * @type {Date}
     * @memberof BlogVo
     */
    createTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof BlogVo
     */
    updateTime?: Date;
    /**
     * 
     * @type {CategorityVo}
     * @memberof BlogVo
     */
    categorie?: CategorityVo;
    /**
     * 
     * @type {boolean}
     * @memberof BlogVo
     */
    published?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BlogVo
     */
    commentable?: boolean;
}

/**
 * Check if a given object implements the BlogVo interface.
 */
export function instanceOfBlogVo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlogVoFromJSON(json: any): BlogVo {
    return BlogVoFromJSONTyped(json, false);
}

export function BlogVoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlogVo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'uri': !exists(json, 'uri') ? undefined : json['uri'],
        'coverPath': !exists(json, 'coverPath') ? undefined : json['coverPath'],
        'contentPath': !exists(json, 'contentPath') ? undefined : json['contentPath'],
        'flag': !exists(json, 'flag') ? undefined : json['flag'],
        'views': !exists(json, 'views') ? undefined : json['views'],
        'likes': !exists(json, 'likes') ? undefined : json['likes'],
        'user': !exists(json, 'user') ? undefined : UserVoFromJSON(json['user']),
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(TagVoFromJSON)),
        'createTime': !exists(json, 'createTime') ? undefined : (new Date(json['createTime'])),
        'updateTime': !exists(json, 'updateTime') ? undefined : (new Date(json['updateTime'])),
        'categorie': !exists(json, 'categorie') ? undefined : CategorityVoFromJSON(json['categorie']),
        'published': !exists(json, 'published') ? undefined : json['published'],
        'commentable': !exists(json, 'commentable') ? undefined : json['commentable'],
    };
}

export function BlogVoToJSON(value?: BlogVo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'uri': value.uri,
        'coverPath': value.coverPath,
        'contentPath': value.contentPath,
        'flag': value.flag,
        'views': value.views,
        'likes': value.likes,
        'user': UserVoToJSON(value.user),
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(TagVoToJSON)),
        'createTime': value.createTime === undefined ? undefined : (value.createTime.toISOString()),
        'updateTime': value.updateTime === undefined ? undefined : (value.updateTime.toISOString()),
        'categorie': CategorityVoToJSON(value.categorie),
        'published': value.published,
        'commentable': value.commentable,
    };
}

