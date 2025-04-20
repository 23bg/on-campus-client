// components/JobCard.tsx
import { Briefcase, Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function JobCard({ job }: { job: any }) {
  return (
    <Card className="hover:shadow-xl transition-shadow cursor-pointer mb-2">
      <CardContent className="p-6 space-y-3">
        <div className="flex items-center gap-4">
          <image
            href={job.logo}
            width={50}
            height={50}
            className="rounded-md object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-sm text-gray-600">{job.company}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-4">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {job.location}
          </div>
          <div className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            {job.type}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {job.experience}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {job.openings} Opening{job.openings > 1 ? "s" : ""}
          </div>
        </div>

        <p className="text-sm text-gray-700 line-clamp-2">{job.description}</p>
        <div>
          <Button>View Details</Button>
        </div>
      </CardContent>
    </Card>
  );
}