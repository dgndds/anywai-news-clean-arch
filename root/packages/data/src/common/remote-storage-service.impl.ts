import { NewsArticle } from "core";
import { RemoteStorageService } from "./remote-storage-service.interface";
import axios from 'axios';

export class RemoteStorageServiceImpl implements RemoteStorageService {
    
    private api = "http://localhost:3000/news";

    get(): Promise<NewsArticle[]> {
      const promise = axios.get(this.api);
      const dataPromise: Promise<NewsArticle[]> = promise.then((response) => response.data);
      return dataPromise;
    }

    getSearchResult(search: string): Promise<NewsArticle[]> {
      const promise = axios.get(this.api);
      const dataPromise: Promise<NewsArticle[]> = promise.then((response) => response.data
        .filter((item:NewsArticle) => {
          return this.#matchesFilter(item,search);
        }));

      return dataPromise;  
    }

    #matchesFilter(newsArticle: NewsArticle, filter: string): boolean {
      const newsBody = newsArticle.body.substring(0, 200).toLowerCase();
      const newsTitle = newsArticle.title.toLowerCase();
      const normalizedFilter = filter.toLowerCase();
  ​
      return newsBody.includes(normalizedFilter) || newsTitle.includes(normalizedFilter);
    }
}
