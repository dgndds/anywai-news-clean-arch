import * as core from "core";
import * as data from "data";

export class NewsArticleFactory {
    private newsArticleRepository: core.NewsArticleRepository;
    private remoteStorageService: data.RemoteStorageService;

    constructor(){
        this.remoteStorageService = new data.RemoteStorageServiceImpl();
        this.newsArticleRepository = new data.NewsArticleRepositoryImpl(this.remoteStorageService);
    }

    getGetAllNewsArticlesUsecase(): core.GetAllNewsArticlesUsecase {
        return new core.GetAllNewsArticlesUsecaseImpl(this.newsArticleRepository);
    }
}