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


import * as runtime from '../runtime';
import type {
  BlogVo,
  TagVo,
} from '../models/index';
import {
    BlogVoFromJSON,
    BlogVoToJSON,
    TagVoFromJSON,
    TagVoToJSON,
} from '../models/index';

export interface CreateTagRequest {
    name: string;
}

export interface DeleteTagByIdRequest {
    id: number;
}

export interface DeleteTagByNameRequest {
    name: string;
}

export interface ListBlogsWithTagIdRequest {
    id: number;
}

/**
 * 
 */
export class TagControllerApi extends runtime.BaseAPI {

    /**
     */
    async createTagRaw(requestParameters: CreateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling createTag.');
        }

        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/tag/upload`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async createTag(requestParameters: CreateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.createTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteTagByIdRaw(requestParameters: DeleteTagByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteTagById.');
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/tag/delete/id`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async deleteTagById(requestParameters: DeleteTagByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.deleteTagByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteTagByNameRaw(requestParameters: DeleteTagByNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteTagByName.');
        }

        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/tag/delete/name`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async deleteTagByName(requestParameters: DeleteTagByNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.deleteTagByNameRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async listAllTagsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TagVo>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/tag/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TagVoFromJSON));
    }

    /**
     */
    async listAllTags(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TagVo>> {
        const response = await this.listAllTagsRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async listBlogsWithTagIdRaw(requestParameters: ListBlogsWithTagIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<BlogVo>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listBlogsWithTagId.');
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/tag/listblogs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BlogVoFromJSON));
    }

    /**
     */
    async listBlogsWithTagId(requestParameters: ListBlogsWithTagIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<BlogVo>> {
        const response = await this.listBlogsWithTagIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
