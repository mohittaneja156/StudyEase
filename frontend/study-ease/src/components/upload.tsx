
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Upload as UploadIcon,
  File,
  FileText,
  X,
  Loader2,
  Youtube,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface UploadProps {
  onTaskIdUpdate?: (taskId: string) => void;
}

async function openFileDB() {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = window.indexedDB.open("fileDB", 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains("files")) {
        db.createObjectStore("files");
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export function Upload({ onTaskIdUpdate }: UploadProps) {
  const router = useRouter();
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadStatus, setUploadStatus] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [taskId, setTaskId] = useState<string | null>(null);
  const [youtubeUrl, setYoutubeUrl] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("file");

  const simulateProgress = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        const next = prev + Math.random() * 10;
        if (next >= 90) {
          clearInterval(interval);
          return 90;
        }
        return next;
      });
    }, 500);
    return interval;
  };

  const handleUpload = async (file: File) => {
    localStorage.removeItem("youtubeUrl");
    try {
      setUploading(true);
      setError(null);
      setUploadStatus("Uploading file...");
      const progressInterval = simulateProgress();

      const formData = new FormData();
      if (file.type === "application/pdf") {
        formData.append("pdf", file);
      } else {
        formData.append("video", file);
      }

      const endpoint =
        file.type === "application/pdf" ? "/upload-pdf" : "/upload";
      const response = await fetch(`http://localhost:5001${endpoint}`, {
        method: "POST",
        body: formData,
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (!response.ok) throw new Error("Upload failed");

      const data = await response.json();
      setUploadStatus("Upload successful! Processing file...");

      const db = await openFileDB();
      const tx = db.transaction("files", "readwrite");
      tx.objectStore("files").put(file, "uploadedFile");

      localStorage.setItem("taskId", data.task_id);
      localStorage.setItem("filename", file.name);

      const fileType =
        activeTab === "pdf" || file.type === "application/pdf"
          ? "pdf"
          : "video";
      localStorage.setItem("fileType", fileType);

      const fileURL = URL.createObjectURL(file);
      localStorage.setItem("fileURL", fileURL);
      if (fileType === "pdf") {
        localStorage.setItem("pdfViewerURL", fileURL);
      }

      if (data.task_id) {
        setTaskId(data.task_id);
        onTaskIdUpdate?.(data.task_id);
      }

      setTimeout(() => {
        router.push(`/processing?filename=${encodeURIComponent(file.name)}`);
      }, 500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleYoutubeUrlSubmit = async () => {
    if (!youtubeUrl) return setError("Please enter a YouTube URL");

    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    if (!youtubeRegex.test(youtubeUrl))
      return setError("Please enter a valid YouTube URL");

    try {
      setUploading(true);
      setError(null);
      setUploadStatus("Processing YouTube URL...");
      const progressInterval = simulateProgress();

      const response = await fetch("http://localhost:5001/youtube", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: youtubeUrl }),
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (!response.ok) throw new Error("Failed to process YouTube URL");

      const data = await response.json();
      setUploadStatus("YouTube video located! Processing video...");

      localStorage.setItem("youtubeUrl", youtubeUrl);
      localStorage.setItem("taskId", data.task_id);
      localStorage.setItem("filename", "YouTube Video");
      localStorage.setItem("fileType", "video");

      if (data.task_id) {
        setTaskId(data.task_id);
        onTaskIdUpdate?.(data.task_id);
      }

      setTimeout(() => {
        router.push(`/processing?filename=${encodeURIComponent("YouTube Video")}`);
      }, 500);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to process YouTube URL"
      );
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.type.startsWith("video/") || f.type === "application/pdf") {
      setFile(f);
      setError(null);
    } else {
      setError("Please select a video or PDF file.");
    }
  };

  const removeFile = () => {
    setFile(null);
    setError(null);
    setUploadStatus("");
    setUploadProgress(0);
  };

  useEffect(() => {
    return () => {
      const fileURL = localStorage.getItem("fileURL");
      if (fileURL) URL.revokeObjectURL(fileURL);
    };
  }, []);

  const getFileSize = () =>
    file ? `${(file.size / (1024 * 1024)).toFixed(2)} MB` : "";

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <Card className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-blue-100 dark:border-blue-900 transition-colors duration-300 overflow-hidden">
        <CardHeader className="bg-blue-50 dark:bg-blue-800/20 p-6 transition-colors duration-300">
          <CardTitle className="text-2xl font-bold text-center text-gray-700 dark:text-gray-200">
            Upload Study Material
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400 text-center max-w-md mx-auto">
            Transform your lectures and documents into interactive notes. Upload
            a video, PDF, or provide a YouTube URL.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6 rounded-lg border border-blue-100 dark:border-blue-900">
              <TabsTrigger
                value="file"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 dark:text-gray-200 rounded-l-lg transition-colors duration-300"
              >
                <File className="w-4 h-4 mr-2" />
                Video Upload
              </TabsTrigger>
              <TabsTrigger
                value="pdf"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 dark:text-gray-200 transition-colors duration-300"
              >
                <FileText className="w-4 h-4 mr-2" />
                PDF Upload
              </TabsTrigger>
              <TabsTrigger
                value="url"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-700 dark:text-gray-200 rounded-r-lg transition-colors duration-300"
              >
                <Youtube className="w-4 h-4 mr-2" />
                YouTube URL
              </TabsTrigger>
            </TabsList>

            {/* Video Upload */}
            <TabsContent value="file" className="space-y-4">
              <div
                className={cn(
                  "border-2 border-dashed rounded-xl p-10 text-center transition-colors duration-300",
                  isDragging
                    ? "border-blue-600 bg-blue-50 dark:bg-blue-800/20"
                    : "border-blue-200 dark:border-blue-700",
                  !file &&
                    "hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-800/20 cursor-pointer",
                  file && "bg-blue-50 dark:bg-blue-800/10"
                )}
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsDragging(false);
                  const dropped = e.dataTransfer.files[0];
                  if (
                    dropped?.type.startsWith("video/") ||
                    dropped?.type === "application/pdf"
                  ) {
                    setFile(dropped);
                    setActiveTab(
                      dropped.type === "application/pdf" ? "pdf" : "file"
                    );
                  } else {
                    setError("Please upload a video or PDF file.");
                  }
                }}
                onClick={() =>
                  !file && document.getElementById("file-upload")?.click()
                }
              >
                <input
                  id="file-upload"
                  type="file"
                  accept="video/*"
                  className="hidden"
                  onChange={handleFileChange}
                />

                {file && activeTab === "file" ? (
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800/30 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-medium mb-1 text-gray-700 dark:text-gray-200">
                      Video Selected
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                      {getFileSize()}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile();
                      }}
                      className="rounded-full border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Remove File
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="w-20 h-20 bg-blue-100 dark:bg-blue-800/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <UploadIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-medium mb-2 text-gray-700 dark:text-gray-200">
                      Drag & Drop Video
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      or click to browse files
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      Supports MP4, WebM, MOV and other formats
                    </p>
                  </>
                )}
              </div>

              {uploading && activeTab === "file" && (
                <div className="space-y-3 mt-6">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{uploadStatus}</span>
                    <span>{Math.round(uploadProgress)}%</span>
                  </div>
                  <Progress value={uploadProgress} className="h-2" />
                </div>
              )}

              {!uploading && file && activeTab === "file" && (
                <Button
                  className="w-full h-12 mt-4 rounded-lg font-medium bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => handleUpload(file)}
                  disabled={uploading}
                >
                  {uploading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    "Upload Video & Process"
                  )}
                </Button>
              )}
            </TabsContent>

            {/* PDF Upload */}
            <TabsContent value="pdf" className="space-y-4">
              <div
                className={cn(
                  "border-2 border-dashed rounded-xl p-10 text-center transition-colors duration-300",
                  isDragging
                    ? "border-blue-600 bg-blue-50 dark:bg-blue-800/20"
                    : "border-blue-200 dark:border-blue-700",
                  !file &&
                    "hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-800/20 cursor-pointer",
                  file && "bg-blue-50 dark:bg-blue-800/10"
                )}
                onClick={() =>
                  !file && document.getElementById("pdf-upload")?.click()
                }
              >
                <input
                  id="pdf-upload"
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  onChange={handleFileChange}
                />

                {file && activeTab === "pdf" ? (
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800/30 rounded-full flex items-center justify-center mb-4">
                      <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-medium mb-1 text-gray-700 dark:text-gray-200">
                      PDF Selected
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                      {getFileSize()}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile();
                      }}
                      className="rounded-full border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Remove File
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="w-20 h-20 bg-blue-100 dark:bg-blue-800/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-medium mb-2 text-gray-700 dark:text-gray-200">
                      Drag & Drop PDF
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      or click to browse files
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      Upload lecture slides, research papers, or textbook
                      chapters
                    </p>
                  </>
                )}
              </div>

              {uploading && activeTab === "pdf" && (
                <div className="space-y-3 mt-6">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{uploadStatus}</span>
                    <span>{Math.round(uploadProgress)}%</span>
                  </div>
                  <Progress value={uploadProgress} className="h-2" />
                </div>
              )}

              {!uploading && file && activeTab === "pdf" && (
                <Button
                  className="w-full h-12 mt-4 rounded-lg font-medium bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => handleUpload(file)}
                  disabled={uploading}
                >
                  {uploading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    "Upload PDF & Process"
                  )}
                </Button>
              )}
            </TabsContent>

            {/* YouTube URL */}
            <TabsContent value="url" className="space-y-6">
              <div className="space-y-4 py-4">
                <div className="flex flex-col items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800/30 rounded-full flex items-center justify-center mb-4">
                    <Youtube className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-medium mb-1 text-gray-700 dark:text-gray-200">
                    YouTube Video
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Paste a YouTube link to generate study materials
                  </p>
                </div>

                <div className="flex gap-3">
                  <Input
                    type="url"
                    placeholder="https://youtube.com/watch?v=..."
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                    className="flex-1 rounded-lg border-blue-200 dark:border-blue-700"
                  />
                  <Button
                    onClick={handleYoutubeUrlSubmit}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                    disabled={uploading}
                  >
                    {uploading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Process"
                    )}
                  </Button>
                </div>

                {uploading && activeTab === "url" && (
                  <div className="space-y-3 mt-6">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>{uploadStatus}</span>
                      <span>{Math.round(uploadProgress)}%</span>
                    </div>
                    <Progress value={uploadProgress} className="h-2" />
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>

          {error && (
            <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm">
              {error}
            </div>
          )}
        </CardContent>

        <CardFooter className="bg-blue-50 dark:bg-blue-800/20 p-4 text-center text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
          Your files are securely processed and never shared.
        </CardFooter>
      </Card>
    </div>
  );
}
