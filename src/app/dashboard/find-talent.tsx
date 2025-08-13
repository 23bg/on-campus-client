import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Filter } from "lucide-react"
import { Helmet } from "react-helmet"

const mockTalent = [
  {
    id: 1,
    name: "Aisha Verma",
    title: "Full Stack Developer",
    location: "Remote • India",
    skills: ["React", "Node.js", "TypeScript"],
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Carlos Rivera",
    title: "AI/ML Engineer",
    location: "San Francisco, USA",
    skills: ["Python", "TensorFlow", "NLP"],
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 3,
    name: "Zara Ali",
    title: "Product Designer",
    location: "Berlin, Germany",
    skills: ["Figma", "UX", "Design Systems"],
    image: "https://i.pravatar.cc/150?img=20",
  },
]

export default function FindTalent() {
  return (

    <div>
    <Helmet>
      <title>Find Talent - ON Campus Portal</title>
    </Helmet>
      <div className="dark:bg-black min-h-screen">
        {/* Page Header */}
        <div className="border-b bg-white dark:bg-black">
          <div className="pt-24 px-6 md:px-36 pb-10 space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight">Find Talent</h1>
                <p className="text-muted-foreground text-base">
                  Discover top candidates across the world
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <Input
                  placeholder="Search by name, skill, or role..."
                  className="w-full sm:w-64"
                />
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>
          </div>
        </div>


        <div className="p-6 space-y-6 mx-28">
          {/* Header */}


          {/* Talent Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockTalent.map((person) => (
              <Card key={person.id}>
                <CardHeader className="flex items-center gap-4">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <CardTitle className="text-base">{person.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{person.title}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{person.location}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {person.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Profile</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}
