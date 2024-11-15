"use client";

import PodcastCard from "@/components/podcast-card";
import { podcastData } from "@/constants";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import React from "react";

const Home = () => {

  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

      

        <div className="podcast_grid">
          {podcastData.map(({ id, title, description, imgURL }) => (
            <PodcastCard
              podcastId={id}
              title={title}
              description={description}
              imgURL={imgURL}
              key={id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
