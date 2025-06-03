import Image from "next/image";
import NotificationContenetor from "./NotificationContenetor";

// interfaces
interface profileProps {
    name: string,
    email: string,
}

// interface userProps {
//     nameUser: string,
//     emailUser: string,
//     notifications: boolean,
//     dataNotifications: string[],
// }

// mini Components
const UserProfile = ({ name, email }: profileProps) => {
    return (
        <article className="w-full flex items-center justify-between">
            <button id="notificationToggle" className="bg-[#2b2b2b] p-2.5 rounded-lg flex items-center justify-center relative">
                <div className="bg-[#FFBC39] rounded-full h-3 w-3 absolute z-10 -top-0.5 -right-0.5"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" /><path d="M9 17v1a3 3 0 0 0 6 0v-1" /></svg>
            </button>

            <aside className="flex flex-col gap-0 text-right w-full">
                <h3 className="text-3xl font-medium">{name}</h3>
                <p className="underline text-[#FFBC39] font-medium">{email}</p>
            </aside>
        </article>
    );
};

// Main Component
export default function User() {
    return (
        <div className="relative">
            <button id="userMenuToggle" className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center">
                <Image src="/profile-icon.png" alt="profile icon" className="h-full w-full" height={40} width={40} />
            </button>

            {/** menu sections **/}
            <section id="userMenuContenetor" className="bg-[#3b3b3b] h-[21rem] w-[31rem] p-4 rounded-lg hidden flex-col gap-3 absolute z-10 top-[5rem] -right-[0.34rem]">

                {/** menu basic info **/}
                <UserProfile name="Luis Carlos" email="mkdir123@gmail.com" />

                <hr className="border-[1px]" />

                {/** menu options **/}
                <article id="user-menu" className=" h-full w-full grid grid-cols-3 gap-2">
                    <button id="account-menu" className="bg-[#2b2b2b] rounded-md flex flex-col items-center justify-center">
                        <p>icon</p>
                        <p className="text-lg font-medium text-white">Your Account</p>
                    </button>
                    <button id="payments-menu" className="bg-[#2b2b2b] rounded-md flex flex-col items-center justify-center">
                        <p>icon</p>
                        <p className="text-lg font-medium text-white">Your Payments</p>
                    </button>
                    <button id="changeMode-menu" className="bg-[#2b2b2b] rounded-md flex flex-col items-center justify-center">
                        <p>icon</p>
                        <p className="text-lg font-medium text-white">Change Mode</p>
                    </button>

                    <button id="wishlist-menu" className="bg-[#2b2b2b] rounded-md flex flex-col items-center justify-center">
                        <p>icon</p>
                        <p className="text-lg font-medium text-white">Your Wishlist</p>
                    </button>
                    <button id="settings-menu" className="bg-[#2b2b2b] rounded-md flex flex-col items-center justify-center">
                        <p>icon</p>
                        <p className="text-lg font-medium text-white">Your Settings</p>
                    </button>
                    <button id="logout-menu" className="bg-[#B45050]/40 border-[1px] border-[#DD6B6B] rounded-md flex flex-col items-center justify-center">
                        <p>icon</p>
                        <p className="text-lg font-medium text-[#ff9797]">Logout</p>
                    </button>
                </article>
            </section>

            <NotificationContenetor />
        </div>
    );
}