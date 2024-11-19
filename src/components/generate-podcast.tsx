'use client'

import React, { useState } from "react";
import { GeneratePodcastProps } from "../../types";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Loader } from "lucide-react";
import { useAction, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useToast } from "@/hooks/use-toast";
import { v4 as uuidv4 } from "uuid";
import { useUploadFiles } from "@xixixao/uploadstuff/react";

const GeneratePodcast = (props: GeneratePodcastProps) => {
    

  const useGeneratePodcast = ({
    setAudio,
    voiceType,
    voicePrompt,
    setAudioStorageId,
  }: GeneratePodcastProps) => {
    const { toast } = useToast();

    const [isGenerating, setisGenerating] = useState(false);
    const generateUploadUrl = useMutation(api.files.generateUploadUrl);
    const getAudioUrl = useMutation(api.podcasts.getUrl);

    const { startUpload } = useUploadFiles(generateUploadUrl);

    const getPodcastAudio = useAction(api.openai.generateAudioAction);


 
  //// function to upload audio and get the file
    const generatePodcast = async () => {

      setisGenerating(true);
      setAudio("");

      if (!voicePrompt) {
        toast({
          title: "Please provide a voiceType to generate a podcast",
        });
        return setisGenerating(false);
      }

      try {
        const response = await getPodcastAudio({
          voice: voiceType,
          input: voicePrompt,
        });

        console.log(response,"this is the response")
        const blob = new Blob([response], { type: "audio/mpeg" });
        const filename = `podcast-${uuidv4()}.mp3`;
        const file = new File([blob], filename, { type: "audio/mpeg" });
           console.log(filename,"audion fileees")
        const uploaded = await startUpload([file]);
        const storageId = (uploaded[0].response as any).storageId;

        setAudioStorageId(storageId);

        const audioUrl = await getAudioUrl({ storageId });
        console.log(audioUrl,"audio files is there")
        setAudio(audioUrl!);
        setisGenerating(false);
        toast({
          title: "Podcast generated successfully",
        });
      } catch (error) {
        console.log("error occured", error);
        setisGenerating(false);
      }
    };

    return { isGenerating, generatePodcast };
  };

  const { isGenerating, generatePodcast } = useGeneratePodcast(props);

 


  return (
    <div>
      <div className="flex flex-col gap-2.5">
        <Label className="text-16 font-bold text-white-1">
          AI prompt to generate podcast
        </Label>
        <Textarea
          className="input-class font-light focus-visible:ring-orange-1 "
          placeholder="Provide text to generate podcast"
          rows={5}
          value={props.voicePrompt}
          onChange={(e) => props.setVoicePrompt(e.target.value)}
        />
      </div>

      <div className="mt-5 w-full max-w-[200px]">
        <Button
          type="submit"
          className="text-16 bg-orange-1 font-bold text-white-1"
          onClick={generatePodcast}
        >
          {isGenerating ? (
            <>
              Generating
              <Loader size={20} className="animate-spin ml-2" />
            </>
          ) : (
            "Generate"
          )}
        </Button>
      </div>
      {props.audio && (
        <audio 
          controls
          src={props.audio}
          autoPlay
          className="mt-5"
          onLoadedMetadata={(e) => props.setAudioDuration(e.currentTarget.duration)}
        />
      )}
    </div>
  );
};

export default GeneratePodcast;
