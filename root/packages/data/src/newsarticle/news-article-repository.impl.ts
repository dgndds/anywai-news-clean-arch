import * as core from "core";

import { RemoteStorageService } from "../common/remote-storage-service.interface";

export class NewsArticleRepositoryImpl implements core.NewsArticleRepository {
    constructor(private remoteStorageService: RemoteStorageService){}

    getAllNewsArticles(): Promise<core.NewsArticle[]> {
        return this.remoteStorageService.get();
    }

    searchNewsArticles(search: string): Promise<core.NewsArticle[]> {
        return this.remoteStorageService.getSearchResult(search);
    }
}