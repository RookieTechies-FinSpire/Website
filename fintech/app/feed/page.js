import Sidebar from "../components/Sidebar";
import FeedSection from "../components/feed/FeedSection";
import FriendSection from "../components/feed/FriendSection";

export default function FeedPage() {
    return (
        <div className="flex justify-center max-h-screen h-screen bg-[#121139] overflow-hidden">
            <Sidebar />
            <FeedSection />
            <FriendSection />
        </div>
    )
}