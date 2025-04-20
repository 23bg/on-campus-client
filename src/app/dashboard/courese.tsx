import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"; // Import ScrollArea
import CourseCard from "@/components/custom/coures-card";
import PageHeader from "@/components/custom/page-header";
import { Button } from "@/components/ui/button";
import Footer from "@/components/custom/footer";

// Sample course data for Enrolled Courses section
const enrolledCourses = [
  {
    id: 1,
    image: "https://github.com/iamprathameshmore.png",
    title: "React for Beginners",
    description: "Learn the basics of React.js in this comprehensive course.",
    videosCount: 12,
    enrolledStudents: 350,
  },
  {
    id: 2,
    image: "https://github.com/iamprathameshmore.png",
    title: "Advanced JavaScript",
    description: "Deep dive into advanced JavaScript concepts and techniques.",
    videosCount: 20,
    enrolledStudents: 550,
  },
  {
    id: 3,
    image: "https://github.com/iamprathameshmore.png",
    title: "Full Stack Development",
    description: "Become a full-stack developer with this hands-on course.",
    videosCount: 30,
    enrolledStudents: 1200,
  },
  {
    id: 4,
    image: "https://github.com/iamprathameshmore.png",
    title: "Node.js for Beginners",
    description: "Master Node.js in this comprehensive beginner course.",
    videosCount: 15,
    enrolledStudents: 480,
  },
  // Add more courses if needed
];

const CoursesPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  // Filter and search logic for the enrolled courses
  const filteredCourses = enrolledCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = selectedFilter ? course.type === selectedFilter : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <ScrollArea className="w-full h-screen">
      <div className="pt-16">
        {/* Courses Page Header */}
        <PageHeader title="Courses" description="Your Enrolled Courses" />

        {/* Enrolled Courses Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:mx-40 mb-4">
          <p className="text-2xl font-semibold mb-4 md:mb-0">Your Enrolled Courses</p>

          {/* Search & Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search Courses..."
              className="p-2 border rounded-md w-full md:w-60"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Filter Dropdown */}
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="p-2 border rounded-md w-full md:w-40"
            >
              <option value="">All Courses</option>
              <option value="React">React</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Full Stack">Full Stack</option>
              <option value="Node.js">Node.js</option>
            </select>

            {/* Add Button */}
            <Button className="px-4 py-2 mt-2 md:mt-0">Add</Button>
          </div>
        </div>

        {/* Grid Layout for Courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:mx-36 p-5">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              image={course.image}
              title={course.title}
              description={course.description}
              videosCount={course.videosCount}
              enrolledStudents={course.enrolledStudents}
            />
          ))}
        </div>
        <Footer/>
      </div>
    </ScrollArea>
  );
};

export default CoursesPage;
