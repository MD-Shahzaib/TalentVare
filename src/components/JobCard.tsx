// import { MapPin, Clock, Bookmark } from 'lucide-react';

// interface JobCardProps {
//   promoted?: boolean;
//   jobTitle: string;
//   company: string;
//   location: string;
//   timePosted: string;
//   applicants: number;
// }

// const JobCard: React.FC<JobCardProps> = ({
//   promoted = false,
//   jobTitle,
//   company,
//   location,
//   timePosted,
//   applicants
// }) => {
//   return (
//     <div className="job-card group">
//       {promoted && (
//         <div className="mb-1">
//           <span className="text-xs font-medium text-talent-darkGray bg-talent-lightBlue px-2 py-0.5 rounded">
//             Promoted
//           </span>
//         </div>
//       )}

//       <div className="flex items-start">
//         <div className="w-10 h-10 bg-talent-lightBlue rounded flex items-center justify-center mr-3 text-talent-blue font-bold">
//           <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
//             <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
//           </svg>
//         </div>

//         <div className="flex-1">
//           <h3 className="text-base font-semibold text-talent-text group-hover:text-talent-blue transition-colors">
//             {jobTitle}
//           </h3>
//           <p className="text-sm text-talent-darkGray">{company}</p>
//         </div>
//       </div>

//       <div className="flex flex-wrap items-center text-xs text-talent-darkGray gap-y-1.5">
//         <div className="flex items-center mr-4">
//           <MapPin className="h-3.5 w-3.5 mr-1" />
//           <span>{location}</span>
//         </div>
//         <div className="flex items-center mr-4">
//           <Clock className="h-3.5 w-3.5 mr-1" />
//           <span>{timePosted}</span>
//         </div>
//         <div className="flex items-center">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//             <circle cx="9" cy="7" r="4"></circle>
//             <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//             <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//           </svg>
//           <span>{applicants} applicants</span>
//         </div>
//       </div>

//       <div className="flex items-center justify-between mt-1">
//         <button className="text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium text-xs py-1.5 px-3">
//         {/* <button className="talent-button text-xs py-1.5 px-3"> */}
//           Apply Now
//         </button>
//         <button className="p-1.5 text-gray-400 hover:text-talent-blue transition-colors rounded-full hover:bg-talent-lightBlue">
//           <Bookmark className="h-4 w-4" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JobCard;


import { MapPin, Clock, Bookmark } from 'lucide-react';

interface JobCardProps {
  promoted?: boolean;
  jobTitle: string;
  company: string;
  location: string;
  timePosted: string;
  applicants: number;
}

const JobCard: React.FC<JobCardProps> = ({
  promoted = false,
  jobTitle,
  company,
  location,
  timePosted,
  applicants
}) => {
  return (
    <div className="job-card group">
      {promoted && (
        <div className="mb-1">
          <span className="text-xs font-medium text-gray-400 bg-blue-400 px-2 py-0.5 rounded">
            Promoted
          </span>
        </div>
      )}

      <div className="flex items-start">
        <div className="w-10 h-10 bg-blue-400 rounded flex items-center justify-center mr-3 text-blue-600 font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>

        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-500 group-hover:text-blue-400 transition-colors">
            {jobTitle}
          </h3>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center text-xs text-gray-500 gap-y-1.5">
        <div className="flex items-center mr-4">
          <MapPin className="h-3.5 w-3.5 mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex items-center mr-4">
          <Clock className="h-3.5 w-3.5 mr-1" />
          <span>{timePosted}</span>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>{applicants} applicants</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-1">
        <button className="text-white  rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium text-xs py-1.5 px-3">
          Apply Now
        </button>
        <button className="p-1.5 text-gray-400 hover:text-blue-400 transition-colors rounded-full hover:bg-blue-300">
          <Bookmark className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;