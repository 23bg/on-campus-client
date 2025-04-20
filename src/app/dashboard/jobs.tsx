// pages/JobScreen.tsx
import { useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { JobFilter } from "@/components/custom/jobs/job-filter";
import { JobCard } from "@/components/custom/jobs/job-card";
import PageHeader from "@/components/custom/page-header";
import Footer from "@/components/custom/footer";


const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova",
    logo: "/logos/technova.png",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    openings: 3,
    description: "Work on React and TypeScript-based projects with a modern tech stack."
  },
  {
    id: 2,
    title: "UI/UX Designer Intern",
    company: "PixelCraft",
    logo: "/logos/pixelcraft.png",
    location: "Bangalore",
    type: "Internship",
    experience: "0-1 year",
    openings: 2,
    description: "Assist in crafting beautiful user interfaces for web and mobile apps."
  },
  {
    id: 2,
    title: "UI/UX Designer Intern",
    company: "PixelCraft",
    logo: "/logos/pixelcraft.png",
    location: "Bangalore",
    type: "Internship",
    experience: "0-1 year",
    openings: 2,
    description: "Assist in crafting beautiful user interfaces for web and mobile apps."
  },
];

export default function JobScreen() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (location ? job.location === location : true) &&
      (type ? job.type === type : true)
    );
  });

  return (
    <ScrollArea className="h-screen w-full space-y-4 pr-2">
      <div className="flex flex-col overflow-hidden ">
        <div className="pt-16" />
        {/* Header */}
        <PageHeader
          title="Jobs"
          description="Explore and apply to exciting job opportunities."
        />

        {/* Content */}

        <div className="flex justify-between items-start md:mx-36 px-6 space-x-4">
          <div className="w-full lg:w-1/4 h-full sticky">
            <JobFilter
              search={search}
              setSearch={setSearch}
              setLocation={setLocation}
              setType={setType}
            />
          </div>
          <div className="w-full lg:w-3/4">

            <div>
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
              {filteredJobs.length === 0 && <p>No jobs found.</p>}
            </div>

          </div>

        </div>
        <Footer/>
      </div>
    </ScrollArea>
  );
}
