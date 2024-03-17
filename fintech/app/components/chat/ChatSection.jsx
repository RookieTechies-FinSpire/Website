import { IoSend } from "react-icons/io5";
export default function ChatSection() {

    return (
        <div className="flex justify-end flex-col py-8 ml-[80px] md:ml-[300px] h-full min-w-[250px] max-w-[800px] w-[85%] md:w-[75%]">
            <div className="overflow-y-scroll h-[90%] text-white">

            </div>
            <form className="flex bg-[#9A2CF2] rounded-2xl p-1 text-black justify-evenly h-[60px]">
                <input type="text" placeholder="Type a message" className="h-full border-0 focus-visible:border-1 rounded-lg p-4 focus-visible:border-white focus-visible:outline-0 w-11/12 bg-[transparent]" />
                <button type="submit"><IoSend className="text-2xl" /></button>
            </form>
        </div>
    )
}