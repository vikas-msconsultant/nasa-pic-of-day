import {errorResponse} from './error';

export interface picOfDay{
    date: string;
    explanation: string;
    title: string;
    url: string;
    media_type: 'image' | 'video';
    service_version: string;
    hdurl:string;
    error: errorResponse;
}