import Sidebar from "../components/Sidebar";
import ChatSection from "../components/chat/ChatSection";

export default function ChatPage() {
    return (
        <div className="flex justify-center max-h-screen h-screen bg-[#121139]">
            <Sidebar />
            <ChatSection />
        </div>
    )
}