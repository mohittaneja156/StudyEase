"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, FileText, Youtube, FileIcon, Loader2 } from "lucide-react";

interface HistoryItem {
  task_id: string;
  timestamp: string;
  file_info: {
    type: string;
    filename?: string;
    url?: string;
  };
  results: {
    transcript: {
      text: string;
      confidence: number;
    };
    summary: string;
    notes: string;
    flashcards: any[];
  };
}

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("http://localhost:5001/history");
        if (!response.ok) throw new Error("Failed to fetch history");
        const data = await response.json();
        setHistory(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Failed to load history");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const handleItemClick = (item: HistoryItem) => {
    try {
      localStorage.setItem("processingResults", JSON.stringify(item.results));
      localStorage.setItem("taskId", item.task_id);
      localStorage.setItem("fileType", item.file_info.type);

      if (item.file_info.type === "youtube") {
        localStorage.setItem("youtubeUrl", item.file_info.url || "");
      } else {
        localStorage.setItem("filename", item.file_info.filename || "");
      }

      router.push("/results");
    } catch {
      setError("Failed to load selected item");
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white text-black p-6 sm:p-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <Button
            variant="outline"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-700">
            Processing History
          </h1>
        </div>

        {/* Loading/Error/Empty states */}
        {loading ? (
          <div className="flex items-center justify-center py-10">
            <Loader2 className="h-6 w-6 animate-spin text-blue-600 mr-2" />
            <span className="text-blue-700">Loading history...</span>
          </div>
        ) : error ? (
          <div className="text-center py-10 text-red-500 font-medium">{error}</div>
        ) : history.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No processing history available
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {history.map((item) => (
              <Card
                key={item.task_id}
                className="p-5 bg-blue-50 border border-blue-200 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-200/40 transition cursor-pointer rounded-xl"
                onClick={() => handleItemClick(item)}
              >
                <div className="flex items-start gap-4">
                  {/* Icon based on file type */}
                  {item.file_info.type === "youtube" ? (
                    <Youtube className="h-8 w-8 text-red-500 shrink-0" />
                  ) : item.file_info.type === "pdf" ? (
                    <FileText className="h-8 w-8 text-blue-600 shrink-0" />
                  ) : (
                    <FileIcon className="h-8 w-8 text-green-600 shrink-0" />
                  )}

                  {/* File info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-black truncate">
                      {item.file_info.type === "youtube"
                        ? `YouTube Video: ${
                            item.file_info.url
                              ? new URL(item.file_info.url).pathname.slice(-11)
                              : "Unknown"
                          }`
                        : item.file_info.filename || "Unnamed File"}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                      <span className="capitalize">{item.file_info.type}</span>
                      <span>•</span>
                      <span>{formatDate(item.timestamp)}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { ArrowLeft, FileText, Youtube, FileIcon, Loader2 } from "lucide-react";

// interface HistoryItem {
//   task_id: string;
//   timestamp: string;
//   file_info: {
//     type: string;
//     filename?: string;
//     url?: string;
//   };
//   results: {
//     transcript: {
//       text: string;
//       confidence: number;
//     };
//     summary: string;
//     notes: string;
//     flashcards: any[];
//   };
// }

// export default function HistoryPage() {
//   const [history, setHistory] = useState<HistoryItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchHistory = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         console.log("Fetching history...");
//         const response = await fetch('http://localhost:5001/history');
//         if (!response.ok) {
//           throw new Error('Failed to fetch history');
//         }
//         const data = await response.json();
//         console.log("Fetched history:", data);
//         setHistory(data);
//       } catch (error) {
//         console.error('Error fetching history:', error);
//         setError(error instanceof Error ? error.message : 'Failed to load history');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHistory();
//   }, []);

//   const handleItemClick = async (item: HistoryItem) => {
//     try {
//       console.log("Loading item:", item);
//       // Update localStorage with the historical data
//       localStorage.setItem("processingResults", JSON.stringify(item.results));
//       localStorage.setItem("taskId", item.task_id);
//       localStorage.setItem("fileType", item.file_info.type);
      
//       if (item.file_info.type === 'youtube') {
//         localStorage.setItem("youtubeUrl", item.file_info.url || "");
//       } else {
//         localStorage.setItem("filename", item.file_info.filename || "");
//       }

//       // Navigate to results page
//       router.push("/results");
//     } catch (error) {
//       console.error('Error loading historical data:', error);
//       setError('Failed to load selected item');
//     }
//   };

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//       hour: 'numeric',
//       minute: 'numeric',
//     });
//   };

//   return (
//     <div className="min-h-screen p-8">
//       <div className="max-w-4xl mx-auto">
//         <div className="flex items-center gap-4 mb-8">
//           <Button variant="outline" onClick={() => router.back()}>
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Back
//           </Button>
//           <h1 className="text-3xl font-bold">Processing History</h1>
//         </div>

//         {loading ? (
//           <div className="flex items-center justify-center py-8">
//             <Loader2 className="h-6 w-6 animate-spin mr-2" />
//             <span>Loading history...</span>
//           </div>
//         ) : error ? (
//           <div className="text-center py-8 text-red-500">
//             {error}
//           </div>
//         ) : history.length === 0 ? (
//           <div className="text-center py-8 text-muted-foreground">
//             No processing history available
//           </div>
//         ) : (
//           <div className="grid gap-4">
//             {history.map((item) => (
//               <Card
//                 key={item.task_id}
//                 className="p-4 hover:bg-accent cursor-pointer transition-colors"
//                 onClick={() => handleItemClick(item)}
//               >
//                 <div className="flex items-center gap-4">
//                   {item.file_info.type === 'youtube' ? (
//                     <Youtube className="h-6 w-6 text-red-500 shrink-0" />
//                   ) : item.file_info.type === 'pdf' ? (
//                     <FileText className="h-6 w-6 text-blue-500 shrink-0" />
//                   ) : (
//                     <FileIcon className="h-6 w-6 text-green-500 shrink-0" />
//                   )}
//                   <div className="flex-1 min-w-0">
//                     <h3 className="font-medium truncate">
//                       {item.file_info.type === 'youtube'
//                         ? `YouTube Video: ${item.file_info.url ? new URL(item.file_info.url).pathname.slice(-11) : 'Unknown'}`
//                         : item.file_info.filename || 'Unnamed File'}
//                     </h3>
//                     <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                       <span className="capitalize">{item.file_info.type}</span>
//                       <span>•</span>
//                       <span>{formatDate(item.timestamp)}</span>
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

