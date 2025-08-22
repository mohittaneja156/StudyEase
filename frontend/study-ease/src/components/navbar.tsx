"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { LogOut, History, Upload as UploadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const isPublicPage = ["/login", "/register"].includes(pathname);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <header className="border-b bg-white dark:bg-black shadow-md">
      <div className="container custom-container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_sd.png"
            alt="StudyEase Logo"
            width={70} // reduced size
            height={30}
          />
        </Link>

        <div className="flex items-center gap-4">
          {!isPublicPage && (
            <>
              <Link href="/history">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-blue-600 text-blue-700 dark:border-blue-400 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition rounded-xl"
                >
                  <History className="h-4 w-4" />
                  History
                </Button>
              </Link>

              <Link href="/upload">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-blue-600 text-blue-700 dark:border-blue-400 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition rounded-xl"
                >
                  <UploadIcon className="h-4 w-4" />
                  Upload
                </Button>
              </Link>

              <Button
                variant="outline"
                onClick={handleLogout}
                className="flex items-center gap-2 border-blue-600 text-blue-700 dark:border-blue-400 dark:text-blue-300 hover:bg-red-100 dark:hover:bg-red-900 transition rounded-xl"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </>
          )}

          {/* Dark/Light Toggle */}
          <div className="ml-2 p-1 border-2 border-blue-600 dark:border-blue-400 rounded-full shadow-sm flex items-center justify-center transition-colors duration-200 bg-white dark:bg-black">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

// "use client";

// import { useRouter, usePathname } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import { LogOut, History, Upload as UploadIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "@/components/theme-toggle";

// export function Navbar() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const isPublicPage = ["/login", "/register"].includes(pathname);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     router.push("/login");
//   };

//   return (
//     <header className="border-b bg-[#232946] shadow-md">
//       <div className="container custom-container flex h-16 items-center justify-between">
//         <Link href="/" className="text-2xl font-bold text-white">
//           {/* Logo */}
//           <Image
//             src="/logo.svg"
//             alt="StudyEase Logo"
//             width={280}
//             height={60}
//           />
//         </Link>
//         <div className="flex items-center gap-6">
//           {!isPublicPage && (
//             <>
//               <Link href="/history">
//                 <Button variant="ghost" className="flex items-center gap-2 bg-[#7c3aed] hover:bg-[#a78bfa] text-white shadow-md rounded-xl">
//                   <History className="h-4 w-4" />
//                   History
//                 </Button>
//               </Link>
//               <Link href="/">
//                 <Button variant="default" className="flex items-center gap-2 bg-[#7c3aed] hover:bg-[#a78bfa] text-white shadow-md rounded-xl">
//                   <UploadIcon className="h-4 w-4" />
//                   Upload
//                 </Button>
//               </Link>
//               <Button
//                 variant="ghost"
//                 className="flex items-center gap-2 bg-[#7c3aed] hover:bg-[#a78bfa] text-white shadow-md rounded-xl"
//                 onClick={handleLogout}
//               >
//                 <LogOut className="h-4 w-4" />
//                 Logout
//               </Button>
//             </>
//           )}
//           <div className="ml-2 p-1 bg-white border-2 border-[#7c3aed] rounded-full shadow-md flex items-center justify-center transition-colors duration-200">
//             <ThemeToggle />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
