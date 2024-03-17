import { IoSend } from "react-icons/io5";
import { Input, Button } from "@nextui-org/react";
import { XXNetwork, XXLogs, XXDirectMessages, XXDirectMessagesReceived, XXDMSend, XXMsgSender } from "./xxdk";

export default function ChatSection() {

    return (
        <div className="flex justify-end flex-col py-8 ml-[80px] md:ml-[300px] h-full min-w-[250px] max-w-[800px] w-[85%] md:w-[75%]">
            <div className="overflow-y-scroll h-[90%] text-white">
                <XXNetwork>
                    <XXDirectMessages>
                        <div className="flex-grow flex-col max-h-96 overflow-y-auto overflow-x-wrap w-4/5 border border-gray-300 m-0 [overflow-anchor:none]">
                            <p className="flex w-full justify-center">Received Messages</p>
                            <XXDirectMessagesReceived />
                            <div id="anchor2" className="h-1 [overflow-anchor:auto]"></div>
                        </div>
                        <div className="flex w-4/5 border border-gray-300 m-1">
                            <XXMsgSender />
                        </div>
                    </XXDirectMessages>
                </XXNetwork>
            </div>
            <form className="flex bg-[#9A2CF2] rounded-2xl p-1 text-black justify-evenly h-[60px]">
                <input type="text" placeholder="Type a message" className="h-full border-0 focus-visible:border-1 rounded-lg p-4 focus-visible:border-white focus-visible:outline-0 w-11/12 bg-[transparent]" />
                <button type="submit"><IoSend className="text-2xl" /></button>
            </form>
        </div>
    )
}