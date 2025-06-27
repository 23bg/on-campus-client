import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building2, MapPin, Globe, Briefcase } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Footer from "@/components/custom/footer";
import { CollegeForm } from "../college/college-form";

export default function OrganizationProfile() {
  return (
 <div className="overflow-hidden">
     <ScrollArea className="h-screen">
      <div className="pt-16"/>

      <CollegeForm/>
      
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        {/* Header */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
            <Avatar className="w-24 h-24">
              <AvatarImage
                src="https://via.placeholder.com/150"
                alt="NextGen Technologies Logo"
              />
              <AvatarFallback>ORG</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2 text-center md:text-left">
              <h1 className="text-2xl font-bold flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                NextGen Technologies
              </h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Pune, India
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-4 h-4" /> www.nextgen.io
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" /> Software Development
                </span>
              </div>
              <Button variant="outline" className="mt-2">
                Follow
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* About Section */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">About</h2>
            <p className="text-muted-foreground">
              NextGen Technologies is a leading provider of AI-driven software
              solutions. Our mission is to build scalable and intelligent products
              that revolutionize business processes across industries.
            </p>
          </CardContent>
        </Card>

        {/* Jobs Section */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Open Positions</h2>
              <Button variant="outline">View All</Button>
            </div>
            <Separator />
            <div className="space-y-3">
              <div
                className="p-4 border rounded-xl hover:shadow-sm transition cursor-pointer"
                title="Frontend Developer (React.js)"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                  <h3 className="font-medium">Frontend Developer (React.js)</h3>
                  <Badge>Full Time</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Pune, India | 2+ yrs experience
                </p>
              </div>
              <div
                className="p-4 border rounded-xl hover:shadow-sm transition cursor-pointer"
                title="Machine Learning Engineer"
              >
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                  <h3 className="font-medium">Machine Learning Engineer</h3>
                  <Badge>Internship</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Remote | Final year students only
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer/>
    </ScrollArea>
 </div>
  );
}
