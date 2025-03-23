import { MapPin, Clock, Bookmark } from 'lucide-react';
import Image from 'next/image';

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
    <div className="group bg-white rounded-md p-4 border border-gray-200 flex flex-col gap-3 animate-fade-in transition-all duration-300 hover:shadow-md">
      {promoted && (
        <div className="mb-1">
          <span className="text-xs font-medium text-[#666666] bg-[#e6f0fa] px-2 py-0.5 rounded">
            Promoted
          </span>
        </div>
      )}

      <div className="flex items-start">
        <div className="w-10 h-10 rounded flex items-center justify-center mr-3 font-bold">
          <Image src={"team.svg"} alt="Talent" width={32} height={32} />
        </div>

        <div className="flex-1">
          <h3 className="text-base font-semibold text-[#333333] group-hover:text-[#0050aa] transition-colors">
            {jobTitle}
          </h3>
          <p className="text-sm text-[#666666]">{company}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center text-xs text-[#666666] gap-y-1.5">
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
        <button className="text-white rounded-sm bg-[#0050aa] hover:bg-blue-700 transition-colors duration-200 font-medium text-xs py-1.5 px-3">
          Apply Now
        </button>
        <button className="p-1.5 text-[#666666] hover:text-[#0050aa] transition-colors cursor-pointer rounded-full hover:bg-[#e6f0fa]">
          <Bookmark className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;