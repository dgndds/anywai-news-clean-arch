import { Usecase } from "../../base/usecase.interface";
import { NewsArticleRepository } from "../news-article-repository.interface";
import { NewsArticle } from "../entities/news-article.entity";

export abstract class SearchNewsArticlesUsecase implements Usecase<Promise<NewsArticle[]>> {
    abstract execute(...args: any[]): Promise<NewsArticle[]>;
}

export class SearchNewsArticlesUsecaseImpl implements SearchNewsArticlesUsecase {
    constructor(private newsArticleRepository: NewsArticleRepository){}

    execute(search: string): Promise<NewsArticle[]> {
        return this.newsArticleRepository.searchNewsArticles(search);
    }
}