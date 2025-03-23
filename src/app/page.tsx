import { JobSection, Navbar, ProfileSidebar, SearchBar } from "@/components";
import { featuredJobs, recommendedJobs } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-[1440px] mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-[250px] flex-shrink-0">
            <ProfileSidebar
              name="Albert Flores"
              title="Senior Product Designer | UI/UX Designer | Graphic Designer | Web Designer"
              location="Crofton, Maryland"
              profileStats={{
                profileVisitors: 140,
                resumeViewers: 20,
                savedJobs: 88
              }}
            />
          </div>

          <div className="flex-1 space-y-6">
            <SearchBar />

            <JobSection
              title="Featured Jobs"
              seeAllLink="/featured-jobs"
              jobs={featuredJobs}
            />

            <JobSection
              title="Recommended Jobs"
              seeAllLink="/recommended-jobs"
              jobs={recommendedJobs}
            />
          </div>
        </div>
      </main>
    </div>
  );
};