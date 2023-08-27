import Sidebar from '@/components/Sidebar'
import PostFeed from '@/components/Postfeed'
import Trending from '@/components/Trending'
import Banner from '@/components/Banner'
import Layout from '@/components/Layout'
import { useSelector } from 'react-redux'
import CommentModal from '@/components/modals/CommentModal'

export default function Home() {
  
  const user = useSelector(state => state.user)

  console.log(user)

  return (
    <Layout>

    <div>
      <div className='bg-black min-h-screen text-[#e7e9ea] 
    max-w-[1400] mx-auto
    flex justify-center'>
      
      <div className='relative flex justify-center items-start'>
        
        <PostFeed />
        <Trending />
      </div>
        {/*
      
       */}
      {!user?.username  && <Banner/> }
      </div>

      <CommentModal/>
    </div>
    </Layout>




  )
}
