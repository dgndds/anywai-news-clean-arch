import { Usecase } from "../../base/usecase.interface";
import { NewsArticleRepository } from "../news-article-repository.interface";
import { NewsArticle } from "../entities/news-article.entity";

export abstract class GetAllNewsArticlesUsecase implements Usecase<NewsArticle[]> {
    abstract execute(...args: any[]): NewsArticle[];
}

export class GetAllNewsArticlesUsecaseImpl implements GetAllNewsArticlesUsecase {
    constructor(private newsArticleRepository: NewsArticleRepository){}

    execute(): NewsArticle[] {
        return this.newsArticleRepository.getAllNewsArticles();
    }
}