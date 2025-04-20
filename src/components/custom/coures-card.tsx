// CourseCard.tsx
import React from "react";

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  videosCount: number;
  enrolledStudents: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  description,
  videosCount,
  enrolledStudents,
}) => {
  return (
    <div className=" w-full">
      <div className=" border rounded-lg shadow-md overflow-hidden">
        <img
          src={'https://github.com/iamprathameshmore.png'}
          alt={'123456'}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
          <div className="mt-4 flex justify-between text-sm text-gray-500">
            <span>{videosCount} Videos</span>
            <span>{enrolledStudents} Enrolled</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
