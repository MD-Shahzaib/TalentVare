import Link from 'next/link';
import JobCard from './JobCard';

interface JobSectionProps {
    title: string;
    seeAllLink: string;
    jobs: Array<{
        id: number;
        promoted?: boolean;
        jobTitle: string;
        company: string;
        location: string;
        timePosted: string;
        applicants: number;
    }>;
}

const JobSection: React.FC<JobSectionProps> = ({ title, seeAllLink, jobs }) => {
    return (
        <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-[#333333]">{title}</h2>
                <Link href={seeAllLink} className="text-sm text-[#0050aa] hover:underline">
                    See {title}
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {jobs.map((job) => (
                    <JobCard
                        key={job.id}
                        promoted={job.promoted}
                        jobTitle={job.jobTitle}
                        company={job.company}
                        location={job.location}
                        timePosted={job.timePosted}
                        applicants={job.applicants}
                    />
                ))}
            </div>
        </section>
    );
};

export default JobSection;