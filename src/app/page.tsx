"use client";

import React, { useEffect, useState } from "react";
import NewsCard from "@/components/shared/NewsCard";
import { NewsItem } from "@/types/news";
import NewsLetter from "@/components/shared/NewsLetter";

const Home = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/news.json");
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const data: NewsItem[] = await response.json();
        setNewsData(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Latest News</h1>

      {loading && <p className="text-gray-500">Loading news...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.length > 0 ? (
            newsData.map((newsItem) => (
              <NewsCard key={newsItem.article_id} item={newsItem} />
            ))
          ) : (
            <p className="text-gray-600">No news available.</p>
          )}
        </div>
      )}
      <div className="mt-5">
      <NewsLetter/>
      </div>
    </div>
  );
};

export default Home;
