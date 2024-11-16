import React, { useState } from "react";
import { GeneratePodcastProps } from "../../types";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Loader } from "lucide-react";

const GeneratePodcast = (props: GeneratePodcastProps) => {
  //   const [isGenerating, setisGenerating] = useState(false);

  const useGeneratePodcast = ({setAudio}:GeneratePodcastProps) => {
    const [isGenerating, setisGenerating] = useState(false);

    const generatePodcast = () => {
      setisGenerating(true);



      setAudio('')

    };

    return { isGenerating, generatePodcast };
  };
  

  const { isGenerating, generatePodcast } = useGeneratePodcast(props);

  function setVoicePrompt(value: string): void {
    throw new Error("Function not implemented.");
  }

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
          onChange={(e) => setVoicePrompt(e.target.value)}
        />
      </div>

      <div className="mt-5 w-full max-w-[200px]">
        <Button
          type="submit"
          className="text-16 bg-orange-1 font-bold text-white-1"
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
    </div>
  );
};

export default GeneratePodcast;
