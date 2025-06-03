import Image from "next/image";
import SearchBar from "./SearchBar";
import User from "./User";
import Country from "./Country";
import CartButton from "./CartButton";

export default function Header() {
    return (
        <header className="sticky top-0 z-10 bg-[#3b3b3b] flex items-center justify-between p-4 gap-5 border-b-[1px] border-[#969696]">
            <article className="flex items-center gap-2">
                <Image src="/logo.ico" alt="logo" title="MiniMarket logo" height={40} width={40} />
                <h1 className="text-[1.5rem] font-bold text-[#FFBC39] mt-1">MiniMarket</h1>
            </article>
            <SearchBar />
            <article className="flex items-center justify-between gap-[2rem]">
                <Country iso="ES" langage="Spanish" />
                <CartButton />
                <User />
            </article>
        </header>
    );
};