import Sidebar from "@/components/Sidebar";
import { ArrowLeftIcon, BellIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, InboxIcon } from "@heroicons/react/outline";
import { getAuth } from "firebase/auth";
import Link from "next/link";
import { useSelector } from "react-redux";



export default function usersPage () {

    const user = useSelector(state => state.user)


    return (
        <div className='bg-black min-h-screen text-[#e7e9ea] 
        max-w-[1400] mx-auto
        flex '>
            <Sidebar />
            <div>
            <div className="w-full">
                <div className="sm:ml-16 xl:ml-80 max-w-2xl
        flex-grow border-gray-700 border-x ">
                    <div className="flex space-x-1 
                    px-3 py-2 text-lg sm:text-xl font-bold
            border-b border-gray-700 sticky top-0 z-50 items-center">
                        <Link href={"/"}>
                            <ArrowLeftIcon className="w-7" />
                        </Link>
                        <div className="text-gray-500">
                        <h1 className="text-white">{user.username}</h1>
                        <span className="text-xs">9,450 Tweets</span>
                        </div>
                        
                    </div>
                    <div className="h-[350px]">
                        <div className="flex flex-col relative">
                            <img src="/assets/1500x500.jpg" />
                            <img src={user.photoUrl} className="relative h-[180px] w-[180px] rounded-full
                            object-cover border-4 border-black bottom-[80px] left-[20px]"/>
                            <div className="flex space-x-2 absolute top-[240px] left-[450px] items-center">
                                <DotsHorizontalIcon className="w-10 border-2 border-gray-500 rounded-full p-1"/>
                                <InboxIcon className="w-10 border-2 border-gray-500 rounded-full p-1"/>
                                <BellIcon className="w-10 border-2 border-gray-500 rounded-full p-1"/>
                                <div className="flex items-center ">
                                    <button className="text-xl font-bold 
                                    border-2 rounded-full border-gray-400 p-1">Follow</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="border-b border-gray-700 pl-8 pb-8 text-gray-500">
                        <div className="flex flex-col">
                        <h1 className="text-[20px] font-bold text-white">{user.username}</h1>
                        <span>{user.name}</span>
                        <p className="text-white mt-5">
                        DOMINICANA|| Se supone que aquí 
                        debo poner una frase inspiradora 
                        o un texto en inglés, pero, no soy 
                        coach ni bilingüe. || #Emecé💖#Licey💙
                        </p>
                        </div>

                        <div className="pl-10 pt-10">
                            <ul className="flex items-center w-[100%] items-center">
                                <li className="w-[25%]"> <span className="
                                border-b-8 rounded border-blue-500 pb-5 text-white
                                font-bold text-[18px]">
                                Tweets</span></li>
                                <li className="w-[25%] cursor-not-allowed">Replies</li>
                                <li className="w-[25%] cursor-not-allowed">Media</li>
                                <li className="w-[25%] cursor-not-allowed">Likes</li>
                            </ul>
                        </div>

                        

                        
                        
                    </div>

                    <div className="flex justify-between items-center border-b border-gray-700 p-2">
                        <div className="flex justify-center items-center p-1 space-x-2">
                            <img className="w-12 h-12 rounded-full object-cover" src='/assets/kylie.png' />
                            <h1 className="text-2xl text-gray-500">Tweet your reply!</h1>
                        </div>
                        <button
                            disabled={true}
                            className="bg-[#1d9bf0] rounded-full px-4 py-1.5
                        disabled:opacity-50">
                            Tweet!
                        </button>
                    </div>

                    
                </div>

            </div>
            </div>
        </div>
    )
}