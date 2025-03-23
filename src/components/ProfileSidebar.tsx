// import { ChevronDown } from 'lucide-react';

// interface ProfileSidebarProps {
//     name: string;
//     title: string;
//     location: string;
//     profileStats: {
//         profileVisitors: number;
//         resumeViewers: number;
//         savedJobs: number;
//     };
// }

// const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
//     name,
//     title,
//     location,
//     profileStats
// }) => {
//     return (
//         <aside className="w-full md:w-[250px] bg-white rounded-lg overflow-hidden shadow-sm animate-fade-in">
//             <div className="relative">
//                 <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-700">
//                     <img
//                         src="/lovable-uploads/8e1fe40b-0042-4e08-a5dd-a6d6a0006e41.png"
//                         alt="Profile background"
//                         className="w-full h-full object-cover opacity-60"
//                     />
//                 </div>

//                 <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12">
//                     <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
//                         <img
//                             src="https://randomuser.me/api/portraits/men/1.jpg"
//                             alt={name}
//                             className="w-full h-full object-cover"
//                         />
//                     </div>
//                 </div>
//             </div>

//             <div className="pt-16 pb-6 px-4 text-center">
//                 <h3 className="text-lg font-semibold text-talent-text">{name}</h3>
//                 <p className="text-sm text-talent-darkGray mt-1 px-2 leading-tight">
//                     {title}
//                 </p>
//                 <p className="text-xs text-talent-darkGray mt-1">{location}</p>
//             </div>

//             <div className="border-t border-gray-200">
//                 <div className="py-3 px-4">
//                     <div className="flex items-center justify-between">
//                         <span className="text-sm text-talent-darkGray">Profile Visitors</span>
//                         <span className="text-sm font-semibold text-talent-blue">{profileStats.profileVisitors}</span>
//                     </div>
//                 </div>

//                 <div className="py-3 px-4 border-t border-gray-200">
//                     <div className="flex items-center justify-between">
//                         <span className="text-sm text-talent-darkGray">Resume Viewers</span>
//                         <span className="text-sm font-semibold text-talent-blue">{profileStats.resumeViewers}</span>
//                     </div>
//                 </div>

//                 <div className="py-3 px-4 border-t border-gray-200">
//                     <div className="flex items-center justify-between">
//                         <span className="text-sm text-talent-darkGray">My Jobs</span>
//                         <span className="text-sm font-semibold text-talent-blue">{profileStats.savedJobs}</span>
//                     </div>
//                 </div>
//             </div>

//             <div className="border-t border-gray-200">
//                 <div className="py-3 px-4">
//                     <button className="flex w-full items-center justify-between">
//                         <div className="flex items-center">
//                             <span className="text-sm font-medium">My calendar</span>
//                         </div>
//                         <ChevronDown className="h-4 w-4 text-talent-darkGray" />
//                     </button>

//                     <div className="mt-2 pl-4">
//                         <p className="text-sm text-talent-darkGray">Upcoming Interviews</p>
//                     </div>
//                 </div>
//             </div>
//         </aside>
//     );
// };

// export default ProfileSidebar;















import { ChevronDown } from 'lucide-react';

interface ProfileSidebarProps {
    name: string;
    title: string;
    location: string;
    profileStats: {
        profileVisitors: number;
        resumeViewers: number;
        savedJobs: number;
    };
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
    name,
    title,
    location,
    profileStats
}) => {
    return (
        <aside className="w-full md:w-[250px] bg-white rounded-lg overflow-hidden shadow-sm animate-fade-in">
            <div className="relative">
                <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-700">
                    <img
                        src="/lovable-uploads/8e1fe40b-0042-4e08-a5dd-a6d6a0006e41.png"
                        alt="Profile background"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12">
                    <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
                        <img
                            src="https://randomuser.me/api/portraits/men/1.jpg"
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="pt-16 pb-6 px-4 text-center">
                <h3 className="text-lg font-semibold text-gray-600">{name}</h3>
                <p className="text-sm text-gray-600 mt-1 px-2 leading-tight">
                    {title}
                </p>
                <p className="text-xs text-gray-600 mt-1">{location}</p>
            </div>

            <div className="border-t border-gray-200">
                <div className="py-3 px-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Profile Visitors</span>
                        <span className="text-sm font-semibold text-blue-400">{profileStats.profileVisitors}</span>
                    </div>
                </div>

                <div className="py-3 px-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Resume Viewers</span>
                        <span className="text-sm font-semibold text-blue-400">{profileStats.resumeViewers}</span>
                    </div>
                </div>

                <div className="py-3 px-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">My Jobs</span>
                        <span className="text-sm font-semibold text-blue-400">{profileStats.savedJobs}</span>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200">
                <div className="py-3 px-4">
                    <button className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                            <span className="text-sm font-medium">My calendar</span>
                        </div>
                        <ChevronDown className="h-4 w-4 text-gray-600" />
                    </button>

                    <div className="mt-2 pl-4">
                        <p className="text-sm text-gray-600">Upcoming Interviews</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default ProfileSidebar;