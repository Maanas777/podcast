"use client";
import React from "react";
import ProfileCard from "@/components/profile-card";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import EmptyState from "@/components/empty-state";
import PodcastCard from "@/components/podcast-card";

const Profile = ({ params }: {params:{id:string}}) => {
  const { id } = React.use(params);

  const user = useQuery(api.users.getUserById, {
    clerkId: id,
  });
  const podcastsData = useQuery(api.podcasts.getPodcastByAuthorId, {
    authorId: id,
  });

  return (
    <section className="flex w-full flex-col">
      <header className="mt-9 flex items-center justify-between">
        <h1 className="text-20 font-bold text-white-1">Podcaster profile</h1>
      </header>

      <ProfileCard
        podcastData={podcastsData}
        imageUrl={user?.imageUrl}
        userFirstName={user?.name}
      />

      <section className="mt-9 flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">All Podcasts</h1>
        {podcastsData && podcastsData.podcasts.length > 0 ? (
          <div className="podcast_grid">
            {podcastsData?.podcasts
              ?.slice(0, 4)
              .map((podcast) => (
                <PodcastCard
                  key={podcast._id}
                  imgUrl={podcast.imageUrl!}
                  title={podcast.podcastTitle!}
                  description={podcast.podcastDescription}
                  podcastId={podcast._id}
                />
              ))}
          </div>
        ) : (
          <EmptyState
            title="You have not created any podcasts yet"
            buttonLink="/create-podcast"
            buttonText="Create Podcast"
          />
        )}
      </section>
    </section>
  );
};

export default Profile;
