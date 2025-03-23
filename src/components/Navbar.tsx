import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navItems } from '@/lib/data';

const Navbar = () => {
    return (
        <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-[1440px] mx-auto px-4 flex items-center justify-between h-16">
                <div className="flex items-center gap-10">
                    <Link href="/" className="flex items-center">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center">
                            <Image src={"logo.svg"} alt="Talent" width={32} height={32} />
                        </div>
                    </Link>

                    <nav className="hidden md:flex">
                        <ul className="flex items-center flex-wrap justify-center gap-6">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.path}
                                        className={cn(
                                            "text-sm font-medium transition-colors hover:text-[#0050aa]",
                                            item.active ? "text-[#0050aa]" : "text-[#333333]"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative rounded-md">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm w-36 md:w-60"
                            placeholder="Search"
                        />
                    </div>

                    <button className="text-white py-2 px-4 rounded-sm bg-[#0050aa] hover:bg-[#0066aa] transition-colors duration-200 text-sm font-medium cursor-pointer">
                        Resume Builder
                    </button>

                    <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                        <img
                            src="profile.png"
                            alt="User profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;