import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import Tweet from "@/components/Tweet";
import { ArrowLeftIcon } from "@heroicons/react/outline";


export async function getServerSideProps(context) {
    const id = context.query.id
}

export default function CommentsPage() {
    return (
        <div className='bg-black min-h-screen text-[#e7e9ea] 
    max-w-[1400] mx-auto
    flex '>
            <Sidebar />
            <div>
                <div className="sm:ml-16 xl:ml-80 max-w-2xl
        flex-grow border-gray-700 border-x ">
                    <div className="flex space-x-1 
                    px-3 py-2 text-lg sm:text-xl font-bold
            border-b border-gray-700 sticky top-0 z-50">
                <ArrowLeftIcon className="w-7"/>
                        <h1>Tweets!</h1>
                    </div>
                    <Tweet/>
                </div>
            </div>
        </div>
    )
}