import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "@/types/news";

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  return (
    <div className="border p-4 rounded-md shadow-md transition-transform hover:scale-105">
      <Link href={item.link} target="_blank">
        <div className="w-full h-56 relative">
          <Image
            src={item.image_url}
            alt={item.title || "News Image"}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </Link>

      <h2 className="text-xl font-semibold my-3">{item.title}</h2>
      <p className="text-gray-600">{item.description}</p>
      <p className="text-sm text-gray-500 mt-2">Published: {new Date(item.pubDate).toLocaleString()}</p>

      <Link href={item.link} target="_blank">
        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default NewsCard;
