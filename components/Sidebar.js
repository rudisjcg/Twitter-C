import { auth } from "@/firebase";
import { signOutUser } from "@/redux/userSlice";
import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  BellIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { closeLoginModal, closeSignupModal } from "@/redux/modalSlice";
import Link from "next/link";

export default function Sidebar() {
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector((state) => state.user);

  const userProfile = `users/${user.username}`

  async function handleSignOut() {
    dispatch(signOutUser);
    await signOut(auth);
    dispatch(closeSignupModal());
    dispatch(closeLoginModal());
    router.reload();
  }

  return (
    <div className="hidden h-full sm:flex flex-col  xl:ml-24">
      <nav className="h-full xl:space-y-1.5 flex flex-col fixed">
        <div className="flex justify-center xl:justify-start items-center  py-3 xl:p-3">
          <Image src={"/assets/twitter-logo.png"} width={34} height={34} />
        </div>

        <div className="flex flex-col items-center">
          <div className="w-fit">
            <SidebarLink Icon={HomeIcon} text={"Home"} />
            <SidebarLink Icon={HashtagIcon} text={"Explore"} />
            <SidebarLink Icon={BellIcon} text={"Notifications"} />
            <SidebarLink Icon={InboxIcon} text={"Messages"} />
            <SidebarLink Icon={BookmarkIcon} text={"Bookmarks"} />
            <SidebarLink Icon={UserIcon} text={"Profile"} url={userProfile}/>
            <SidebarLink Icon={DotsCircleHorizontalIcon} text={"More"} />
            <button
              className="hidden xl:inline bg-[#1d9bf0]
                rounded-full h-[52px] mt-2 w-[200px] text-lg font-bold"
            >
              Tweet!
            </button>
          </div>

          <div
            onClick={handleSignOut}
            className="hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer
              absolute mb-3  xl:p-3 bottom-0 flex justify-center items-center space-x-3"
          >
            <img
              className="w-10 h-10 rounded-full object-cover ml-3"
              src={user.photoUrl || "/assets/kylie.png"}
            />
            <div className="hidden xl:inline">
              <h1
                className="
                        font-bold whitespace-nowrap"
              >
                {user.name || "Prueba"}
              </h1>
              <h1 className="text-gray-500">@{user.username}</h1>
            </div>
            <DotsHorizontalIcon className="w-5 h-5 hidden xl:inline" />
          </div>
        </div>
      </nav>
    </div>
  );
}

function SidebarLink({ text, Icon, url }) {
  return (
    <li className="hoverAnimation flex mb-3 xl:justify-start justify-center items-center text-xl space-x-3">
     <Link href={`/${url}`} className="flex gap-2">
     
     <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
     </Link> 
    </li>
  );
}
