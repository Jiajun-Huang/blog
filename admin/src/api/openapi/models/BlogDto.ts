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
/**
 * 
 * @export
 * @interface BlogDto
 */
export interface BlogDto {
    /**
     * 
     * @type {string}
     * @memberof BlogDto
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof BlogDto
     */
    uri?: string;
    /**
     * 
     * @type {string}
     * @memberof BlogDto
     */
    flag?: string;
    /**
     * 
     * @type {number}
     * @memberof BlogDto
     */
    user?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof BlogDto
     */
    tags?: Array<number>;
    /**
     * 
     * @type {Date}
     * @memberof BlogDto
     */
    createTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof BlogDto
     */
    updateTime?: Date;
    /**
     * 
     * @type {number}
     * @memberof BlogDto
     */
    categorie?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BlogDto
     */
    published?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BlogDto
     */
    commentable?: boolean;
}

/**
 * Check if a given object implements the BlogDto interface.
 */
export function instanceOfBlogDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlogDtoFromJSON(json: any): BlogDto {
    return BlogDtoFromJSONTyped(json, false);
}

export function BlogDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlogDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'uri': !exists(json, 'uri') ? undefined : json['uri'],
        'flag': !exists(json, 'flag') ? undefined : json['flag'],
        'user': !exists(json, 'user') ? undefined : json['user'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'createTime': !exists(json, 'createTime') ? undefined : (new Date(json['createTime'])),
        'updateTime': !exists(json, 'updateTime') ? undefined : (new Date(json['updateTime'])),
        'categorie': !exists(json, 'categorie') ? undefined : json['categorie'],
        'published': !exists(json, 'published') ? undefined : json['published'],
        'commentable': !exists(json, 'commentable') ? undefined : json['commentable'],
    };
}

export function BlogDtoToJSON(value?: BlogDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'uri': value.uri,
        'flag': value.flag,
        'user': value.user,
        'tags': value.tags,
        'createTime': value.createTime === undefined ? undefined : (value.createTime.toISOString()),
        'updateTime': value.updateTime === undefined ? undefined : (value.updateTime.toISOString()),
        'categorie': value.categorie,
        'published': value.published,
        'commentable': value.commentable,
    };
}

