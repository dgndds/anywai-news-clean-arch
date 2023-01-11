import { NewsArticle } from "./entities/news-article.entity";

export abstract class NewsArticleRepository {
   abstract getAllNewsArticles(): NewsArticle[]; 
}