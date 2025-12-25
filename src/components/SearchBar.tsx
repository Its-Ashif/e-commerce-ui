import {Bell, House, Search, ShoppingCart} from 'lucide-react';
import Link from "next/link";

const SearchBar = () => {
    return (
        <div className='hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-2 py-1 shadow-md'>
            <Search className="w-4 h-4 text-gray-500" />
            <input id="search" placeholder="Search..." className="test-sm outline-0" />
        </div>

    )
}
export default SearchBar
