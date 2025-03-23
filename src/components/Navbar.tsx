// import Link from 'next/link';
// import { Search } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import { navItems } from '@/lib/data';

// const Navbar = () => {
//     return (
//         <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
//             <div className="max-w-[1440px] mx-auto px-4 flex items-center justify-between h-16">
//                 <div className="flex items-center gap-10">
//                     <Link href="/" className="flex items-center">
//                         <div className="w-8 h-8 bg-talent-blue rounded-full flex items-center justify-center">
//                             <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
//                                 <path
//                                     d="M19.5 10.2L12 15.5L4.5 10.2M12 4.5L19.5 9.8L12 15.1L4.5 9.8L12 4.5Z"
//                                     stroke="currentColor"
//                                     strokeWidth="2"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 />
//                             </svg>
//                         </div>
//                     </Link>

//                     <nav className="hidden md:flex">
//                         <ul className="flex items-center gap-6">
//                             {navItems.map((item) => (
//                                 <li key={item.name}>
//                                     <Link
//                                         href={item.path}
//                                         className={cn(
//                                             "text-sm font-medium transition-colors hover:text-talent-blue",
//                                             item.active ? "text-talent-blue" : "text-talent-text"
//                                         )}
//                                     >
//                                         {item.name}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </nav>
//                 </div>

//                 <div className="flex items-center gap-4">
//                     <div className="relative rounded-md">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <Search className="h-4 w-4 text-gray-400" />
//                         </div>
//                         <input
//                             type="text"
//                             className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-talent-blue/50 text-sm w-36 md:w-60"
//                             placeholder="Search"
//                         />
//                     </div>

//                     <button className="text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
//                     {/* <button className="talent-button"> */}
//                         Resume Builder
//                     </button>

//                     <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
//                         <img
//                             src="https://randomuser.me/api/portraits/men/1.jpg"
//                             alt="User profile"
//                             className="w-full h-full object-cover"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Navbar;







import Link from 'next/link';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navItems } from '@/lib/data';

const Navbar = () => {
    return (
        <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-[1440px] mx-auto px-4 flex items-center justify-between h-16">
                <div className="flex items-center gap-10">
                    <Link href="/" className="flex items-center">
                        <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
                                <path
                                    d="M19.5 10.2L12 15.5L4.5 10.2M12 4.5L19.5 9.8L12 15.1L4.5 9.8L12 4.5Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </Link>

                    <nav className="hidden md:flex">
                        <ul className="flex items-center gap-6">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.path}
                                        className={cn(
                                            "text-sm font-medium transition-colors hover:text-talent-blue",
                                            item.active ? "text-blue-400" : "text-gray-500"
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

                    <button className="text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                        Resume Builder
                    </button>

                    <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                        <img
                            src="https://randomuser.me/api/portraits/men/1.jpg"
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