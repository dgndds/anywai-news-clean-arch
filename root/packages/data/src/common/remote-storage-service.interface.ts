import { NewsArticle } from "core";

export abstract class RemoteStorageService {
    abstract get(): Promise<NewsArticle[]>;
    abstract getSearchResult(search: string): Promise<NewsArticle[]>;
}