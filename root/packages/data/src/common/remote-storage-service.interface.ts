import { NewsArticle } from "core";

export abstract class RemoteStorageService {
    abstract get(): NewsArticle[];
}