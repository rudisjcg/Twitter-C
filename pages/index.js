import Sidebar from '@/components/Sidebar'
import PostFeed from '@/components/Postfeed'
import Trending from '@/components/Trending'
import Banner from '@/components/Banner'
import { useSelector } from 'react-redux'
import CommentModal from '@/components/modals/CommentModal'

export default function Home() {


  const username = useSelector(state => state.user.username)

  return (



    <div>
      <div className='bg-black min-h-screen text-[#e7e9ea] 
    max-w-[1400] mx-auto
    flex justify-center'>
      <div className='sm:w-[300px]'>

        <Sidebar />
      </div>
      <div className='relative flex justify-center items-start'>
        
        <PostFeed />
        <Trending />
      </div>
        {/*
      
       */}
      </div>

      <CommentModal/>
      

       {!username && <Banner/> }
      
    </div>


  )
}
