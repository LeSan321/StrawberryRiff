"use client";

import { useRef } from "react";
import { Upload as UploadIcon, FileAudio, Music } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      toast({
        title: "File Selected",
        description: `You selected ${files.length} file(s).`,
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">📤 Upload AI Music</h1>
      <p className="text-muted-foreground mb-6">
        Share your AI-generated tracks with the community.
      </p>

      <div className="border border-dashed border-gray-400 p-8 rounded-md text-center">
        <UploadIcon className="mx-auto mb-4 h-12 w-12 text-pink-500" />
        <p className="mb-2 text-sm">Drag and drop your music files here</p>
        <p className="mb-4 text-xs text-muted-foreground">
          Supports MP3, WAV, FLAC, and more
        </p>
        <button
          onClick={handleFileSelect}
          className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition"
        >
          Choose Files
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="audio/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-center">
        <div>
          <Music className="mx-auto mb-2 h-6 w-6 text-indigo-500" />
          <p className="font-semibold">High Quality</p>
          <p className="text-sm text-muted-foreground">
            Upload in high fidelity for best experience.
          </p>
        </div>
        <div>
          <FileAudio className="mx-auto mb-2 h-6 w-6 text-teal-500" />
          <p className="font-semibold">Any Format</p>
          <p className="text-sm text-muted-foreground">
            Supports all major audio formats.
          </p>
        </div>
        <div>
          <span className="text-3xl">🍓</span>
          <p className="font-semibold">Community</p>
          <p className="text-sm text-muted-foreground">
            Share with fellow creators.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Upload;

