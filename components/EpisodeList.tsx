"use client";
import { Anime, Episode } from "@/app/info/[id]/page";
import EpisodeCard from "./EpisodeCard";
import { useState } from "react";
import { animeStore } from "@/context";

export default function EpisodeList() {
  const [filter, setFilter] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [episodesPerPage] = useState(50); // Number of episodes per page
  const anime = animeStore((state) => state.currentAnime);

  // Calculate the indexes of the episodes to be displayed on the current page
  const indexOfLastEpisode = currentPage * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
  const currentEpisodes =
    filter === "oldest"
      ? anime?.episodes
          ?.slice()
          ?.reverse()
          ?.slice(indexOfFirstEpisode, indexOfLastEpisode)
      : anime?.episodes?.slice(indexOfFirstEpisode, indexOfLastEpisode);

  // Function to handle page navigation
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">
          {anime?.title?.english || anime?.title?.romaji} Episodes
        </h1>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>

            <p className="hidden md:inline-block">filter</p>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52 z-10"
          >
            <li onClick={() => setFilter("oldest")}>
              <a className={`${filter === "oldest" && "text-anime"}`}>Oldest</a>
            </li>
            <li onClick={() => setFilter("newest")}>
              <a className={`${filter === "newest" && "text-anime"}`}>Newest</a>
            </li>
          </ul>
        </div>
      </div>
      {anime?.episodes?.length > currentEpisodes.length && (
        <div>
          <h3 className="mb-4">Page</h3>
          <div className="grid grid-cols-6 sm:grid-cols-12 md:grid-cols-24 gap-4">
            {Array.from({
              length: Math.ceil(anime.episodes.length / episodesPerPage),
            }).map((_, index) => (
              <button
                key={index}
                className="page-item"
                onClick={() => paginate(index + 1)}
              >
                <a
                  className={`join-item btn-md w-3 ${
                    currentPage === index + 1 && "btn-active"
                  }`}
                >
                  {index + 1}
                </a>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="divider bg-anime h-0.5"></div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentEpisodes?.map((ep: Episode) => {
          return <EpisodeCard ep={ep} />;
        })}
      </div>
    </div>
  );
}
