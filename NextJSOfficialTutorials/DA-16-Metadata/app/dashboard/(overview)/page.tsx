import CardWrapper from "../../ui/dashboard/cards";
import { Card } from "../../ui/dashboard/cards";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import { lusitana } from "../../ui/fonts";
//we are moving this to use suspense so we have chunks and streaming
// import { fetchRevenue } from "../../lib/data";
// import { fetchLatestInvoices } from "../../lib/data";
import { fetchCardData } from "../../lib/data";
//adding streaming
import { Suspense } from "react";
import { RevenueChartSkeleton } from "@/app/ui/skeletons";
import { LatestInvoicesSkeleton } from "@/app/ui/skeletons";
import { CardSkeleton } from "@/app/ui/skeletons";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard',
  };

export default async function Page() {
    // const revenue = await fetchRevenue();
    // const latestInvoices = await fetchLatestInvoices();
    const carddata = await fetchCardData();
    const totalPaidInvoices = carddata.totalPaidInvoices;
    const totalPendingInvoices = carddata.totalPendingInvoices;
    const numberOfInvoices = carddata.numberOfInvoices;
    const numberOfCustomers = carddata.numberOfCustomers;

    //note above, I am not using object destructuring. you can also do the above like this.
    // const {
    //     numberOfInvoices,
    //     numberOfCustomers,
    //     totalPaidInvoices,
    //     totalPendingInvoices,
    //   } = await fetchCardData(); 

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton/>}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton/>}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    );
}