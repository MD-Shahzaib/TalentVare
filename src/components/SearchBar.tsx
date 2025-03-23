// import { Search, MapPin } from 'lucide-react';

// const SkillTag: React.FC<{ name: string }> = ({ name }) => (
//     <div className="bg-white border border-gray-200 rounded-full px-3 py-1 text-sm text-talent-text">
//         {name}
//     </div>
// );

// const SearchBar = () => {
//     return (
//         <div className="bg-white rounded-lg shadow-sm p-6 w-full animate-fade-in">
//             <div className="mb-6">
//                 <h1 className="text-2xl font-bold text-talent-text">Find your Dream Job, Albert!</h1>
//                 <p className="text-talent-darkGray mt-1">Explore the latest job openings and apply for the best opportunities available today!</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
//                 <div className="col-span-1 md:col-span-2">
//                     <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <Search className="h-4 w-4 text-gray-400" />
//                         </div>
//                         <input
//                             type="text"
//                             className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-talent-blue/50 text-sm placeholder-gray-400"
//                             placeholder="Job Title, Company, or Keywords"
//                         />
//                     </div>
//                 </div>

//                 <div className="col-span-1 md:col-span-1">
//                     <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                             <MapPin className="h-4 w-4 text-gray-400" />
//                         </div>
//                         <select className="w-full pl-10 pr-8 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-talent-blue/50 text-sm appearance-none">
//                             <option>Select Location</option>
//                             <option>Remote</option>
//                             <option>New York, NY</option>
//                             <option>San Francisco, CA</option>
//                             <option>Seattle, WA</option>
//                         </select>
//                         <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                             <svg className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                             </svg>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-span-1 md:col-span-1">
//                     <select className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-talent-blue/50 text-sm appearance-none">
//                         <option>Job Type</option>
//                         <option>Full-time</option>
//                         <option>Part-time</option>
//                         <option>Contract</option>
//                         <option>Internship</option>
//                     </select>
//                 </div>

//                 <div className="col-span-1 md:col-span-1">
//                     {/* <button className="talent-button w-full flex items-center justify-center py-2.5"> */}
//                     <button className="text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium w-full flex items-center justify-center py-2.5">
//                         <Search className="h-4 w-4 mr-2" />
//                         Search
//                     </button>
//                 </div>
//             </div>

//             <div className="mt-4 flex flex-wrap gap-2">
//                 <div className="text-sm text-talent-darkGray flex items-center mr-2">
//                     Similar:
//                 </div>
//                 <SkillTag name="Frontend" />
//                 <SkillTag name="Backend" />
//                 <SkillTag name="Graphic Designer" />
//             </div>
//         </div>
//     );
// };

// export default SearchBar;













import { Search, MapPin } from 'lucide-react';

const SkillTag: React.FC<{ name: string }> = ({ name }) => (
    <div className="bg-white border border-gray-200 rounded-full px-3 py-1 text-sm text-gray-500">
        {name}
    </div>
);

const SearchBar = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6 w-full animate-fade-in">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-600">Find your Dream Job, Albert!</h1>
                <p className="text-gray-600 mt-1">Explore the latest job openings and apply for the best opportunities available today!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                <div className="col-span-1 md:col-span-2">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm placeholder-gray-400"
                            placeholder="Job Title, Company, or Keywords"
                        />
                    </div>
                </div>

                <div className="col-span-1 md:col-span-1">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MapPin className="h-4 w-4 text-gray-400" />
                        </div>
                        <select className="w-full pl-10 pr-8 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm appearance-none">
                            <option>Select Location</option>
                            <option>Remote</option>
                            <option>New York, NY</option>
                            <option>San Francisco, CA</option>
                            <option>Seattle, WA</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-1">
                    <select className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm appearance-none">
                        <option>Job Type</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Contract</option>
                        <option>Internship</option>
                    </select>
                </div>

                <div className="col-span-1 md:col-span-1">
                    <button className="text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium w-full flex items-center justify-center">
                        <Search className="h-4 w-4 mr-2" />
                        Search
                    </button>
                </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                <div className="text-sm text-gray-600 flex items-center mr-2">
                    Similar:
                </div>
                <SkillTag name="Frontend" />
                <SkillTag name="Backend" />
                <SkillTag name="Graphic Designer" />
            </div>
        </div>
    );
};

export default SearchBar;
