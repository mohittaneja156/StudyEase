"use client";
import { Upload } from "@/components/upload";
import { Chat } from "@/components/chat";
import { useState } from "react";
import { FlashCards } from "@/components/flash-cards";
import { MindMap } from "@/components/mind-map";

export default function Home() {
  const [taskId, setTaskId] = useState<string | null>(null);

  const handleTaskIdUpdate = (newTaskId: string) => {
    setTimeout(() => {
      setTaskId(newTaskId);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {!taskId && (
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <Upload onTaskIdUpdate={handleTaskIdUpdate} />
            </div>
          </div>
        )}

        {taskId && (
          <div className="space-y-8">
            {/* Upload on its own row */}
            <Upload onTaskIdUpdate={handleTaskIdUpdate} />

            {/* Three components side by side */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              <FlashCards taskId={taskId} />
              <MindMap taskId={taskId} />
              <Chat taskId={taskId} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
