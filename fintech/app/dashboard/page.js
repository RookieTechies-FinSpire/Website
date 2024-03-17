'use client'

import Sidebar from "../components/Sidebar";
import DashboardSection from "../components/dashboard/DashboardSection";

export default function DashboardPage() {
    return (
        <div className="flex justify-center max-h-screen h-screen bg-[#121139]">
            <Sidebar />
            <DashboardSection />
        </div>
    )
}