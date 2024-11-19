"use client";

import React, { FC } from "react";
import { Id } from "../../../../../convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import LoaderSpinner from "@/components/Spinner";
import Image from "next/image";
import PodcastDetailPlayer from "@/components/podcast-detail-player";
import EmptyState from "@/components/empty-state";
import PodcastCard from "@/components/podcast-card";
import { useUser } from "@clerk/nextjs";

interface PodcastProps {
  params: {
    podcastId: Id<"podcasts">;
  };
}

const Podcast: FC<PodcastProps> = ({ params }) => {
  const { user } = useUser();
  const { podcastId } = React.use(params);

  const podcast = useQuery(api.podcasts.getPodcastById, { podcastId });
  
  const similarPodcasts = useQuery(api.podcasts.getPodcastByVoiceType, { podcastId })
  const isOwner = user?.id === podcast?.authorId;

  if(!similarPodcasts || !podcast) return <LoaderSpinner />

  return (
    <section className="flex w-full flex-col">
      <header className="mt-9 flex items-center justify-between">
        <h1 className="text-20 font-bold text-white-1">Currenty Playing</h1>
        <figure className="flex gap-3">
          <Image
            src="/icons/headphone.svg"
            width={24}
            height={24}
            alt="headphone"
          />
          <h2 className="text-16 font-bold text-white-1">{podcast?.views}</h2>
        </figure>
      </header>

      <PodcastDetailPlayer
      isOwner={isOwner}
      podcastId={podcast?._id}
      {...podcast}
      />

      <p className="text-white-2 text-16 pb-8 pt-[45px] font-medium max-md:text-center">
        {podcast?.podcastDescription}
      </p>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-18 font-bold text-white-1">Transcription</h1>
          <p className="text-16 font-medium text-white-2">
            {podcast?.voicePrompt}
          </p>
        </div>
       
      </div>
      <section className="mt-8 flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Similar Podcasts</h1>

        {similarPodcasts && similarPodcasts.length > 0 ? (
          <div className="podcast_grid">
            {similarPodcasts?.map(({ _id, podcastTitle, podcastDescription, imageUrl }) => (
              <PodcastCard 
                key={_id}
                imgUrl={imageUrl as string}
                title={podcastTitle}
                description={podcastDescription}
                podcastId={_id}
              />
            ))}
          </div>
        ) : (
          <> 
            <EmptyState 
              title="No similar podcasts found"
              buttonLink="/discover"
              buttonText="Discover more podcasts"
            />
          </>
        )}
      </section>
    </section>
  );
};

export default Podcast;
