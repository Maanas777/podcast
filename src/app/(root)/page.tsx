"use client";

import PodcastCard from "@/components/podcast-card";
import { podcastData } from "@/constants";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import React from "react";
import LoaderSpinner from "@/components/Spinner";

const Home = () => {

  const trendingPodcasts = useQuery(api.podcasts.getAllPodcasts);

  if(!trendingPodcasts) return <LoaderSpinner />




  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

      

        <div className="podcast_grid">
          {trendingPodcasts.map(({ _id, podcastTitle, podcastDescription, imageUrl }) => (
            <PodcastCard
              podcastId={_id}
              title={podcastTitle}
              description={podcastDescription}
              imgUrl={imageUrl}
              key={_id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
