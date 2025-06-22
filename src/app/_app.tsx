import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { DigestDetailCard } from "@/components/dashboard/DigestDetailCard";
import { DigestHistoryCard } from "@/components/dashboard/DigestHistoryCard";
import { Layout } from "lucide-react";

const historyDataTop = [
  { date: "June 27", detail: "85 Articles PDF" },
  { date: "June 25", detail: "5 Topics Created" },
  { date: "June 24", detail: "42 arrinedo PDF" },
  { date: "June 23", detail: "Download PDF" },
];

const historyDataBottom = [
  { date: "June 27", detail: "33 Articles PDF" },
  { date: "June 25", detail: "30 articles PDF" },
  { date: "June 23", detail: "Download PDF" },
];

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />

      </Layout>
    // <main className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
    //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">
    //     <DashboardCard />
    //     <DigestHistoryCard title="Digest History" data={historyDataTop} />
    //     <DigestDetailCard />
    //     <DigestHistoryCard title="Digest History" data={historyDataBottom} />
    //   </div>
    // </main>
  );
}