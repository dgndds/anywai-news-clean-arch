import * as core from "core";

import { RemoteStorageService } from "../common/remote-storage-service.interface";

export class NewsArticleRepositoryImpl implements core.NewsArticleRepository {
    constructor(private remoteStorageService: RemoteStorageService){}

    getAllNewsArticles(): core.NewsArticle[] {
        return this.remoteStorageService.get();
    }
}