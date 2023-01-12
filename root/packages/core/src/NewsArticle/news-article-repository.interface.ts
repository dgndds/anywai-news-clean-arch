import { NewsArticle } from "./entities/news-article.entity";

export abstract class NewsArticleRepository {
   abstract getAllNewsArticles(): Promise<NewsArticle[]>;
   abstract searchNewsArticles(search: string): Promise<NewsArticle[]>; 
}