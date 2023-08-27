import Layout from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import Tweet from "@/components/Tweet";
import { db } from "@/firebase";
import {
  ArrowLeftIcon,
  BellIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  InboxIcon,
} from "@heroicons/react/outline";
import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";



export default function usersPage() {

    const router = useRouter();
    const {id} = router.query;
  const user = useSelector((state) => state.user);
  const [listPost, setListPost] = useState([]);
  const [userData, setUserData] = useState([])
  console.log(user)

  function getData() {
    const q = query(collection(db, "posts"), 
    where("username", "==", `${id}`));
    return onSnapshot(q, (snapshot) => {
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setListPost(snapshot.docs);
      });
      return unsubscribe;
    });
  }

  function getUserData() {
    const q = query(collection(db, "users"), 
    where("uid", "==", `${id}`));

    return onSnapshot(q, (snapshot) => {
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setUserData(snapshot.docs);
      });
      return unsubscribe;
    });
  }

  useEffect(() => {
    getUserData()
    getData();
  }, [id]);



  return (
    <Layout>
      <div
        className="bg-black min-h-screen text-[#e7e9ea] 
        max-w-[1400] mx-auto
        flex "
      >
        <Sidebar />
        <div>
          <div className="w-full">
            <div
              className="sm:ml-16 xl:ml-80 max-w-2xl
        flex-grow border-gray-700 border-x "
            >
              <div
                className="flex space-x-1 
                    px-3 py-2 text-lg sm:text-xl font-bold
            border-b border-gray-700 sticky top-0 z-50 items-center"
              >
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
                  <img
                    src={user.photoUrl}
                    className="relative h-[180px] w-[180px] rounded-full
                            object-cover border-4 border-black bottom-[80px] left-[20px]"
                  />
                  <div className="flex space-x-2 absolute top-[240px] left-[450px] items-center">
                    <DotsHorizontalIcon className="w-10 border-2 border-gray-500 rounded-full p-1" />
                    <InboxIcon className="w-10 border-2 border-gray-500 rounded-full p-1" />
                    <BellIcon className="w-10 border-2 border-gray-500 rounded-full p-1" />
                    <div className="flex items-center ">
                      <button
                        className="text-xl font-bold 
                                    border-2 rounded-full border-gray-400 p-1"
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-700 pl-8 pb-8 text-gray-500">
                <div className="flex flex-col">
                  <h1 className="text-[20px] font-bold text-white">
                    {user.username}
                  </h1>
                  <span>{user.name}</span>
                  <p className="text-white mt-5">
                    DOMINICANA|| Se supone que aquí debo poner una frase
                    inspiradora o un texto en inglés, pero, no soy coach ni
                    bilingüe. || #Emecé💖#Licey💙
                  </p>
                </div>

                <div className="pl-10 pt-10">
                  <ul className="flex items-center w-[100%] items-center">
                    <li className="w-[25%]">
                      {" "}
                      <span
                        className="
                                border-b-8 rounded border-blue-500 pb-5 text-white
                                font-bold text-[18px]"
                      >
                        Tweets
                      </span>
                    </li>
                    <li className="w-[25%] cursor-not-allowed">Replies</li>
                    <li className="w-[25%] cursor-not-allowed">Media</li>
                    <li className="w-[25%] cursor-not-allowed">Likes</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-b border-gray-700 p-2">
                {listPost.map((tweet) => {
                  return (
                    <Tweet key={tweet.id} id={tweet.id} data={tweet.data()} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

