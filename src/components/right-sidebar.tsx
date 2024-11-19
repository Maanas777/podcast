"use client";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const RightSidebar = () => {
  const { user } = useUser();
  const topPodcasters = useQuery(api.users.getTopUserByPodcastCount);

  // console.log(topPodcasters,"fansLikeDetail")

  return (
    <section className="right_sidebar text-white-1">
      <SignedIn>
        <Link href={`/profile/${user?.id}`} className="flex gap-3">
          <UserButton />
          <div className="flex items-center justify-between w-full ">
            <h1 className="text-16 font-semibold text-white-1 truncate ">
              {user?.firstName} {user?.lastName}
            </h1>
            <Image
              src="/icons/right-arrow.svg"
              alt="arrow"
              width={24}
              height={24}
            />
          </div>
        </Link>
      </SignedIn>

      <section>
        <Header />
        <Carousel fansLikeDetail={topPodcasters!}/>
      </section>
    </section>
  );
};

export default RightSidebar;
