// components/JobFilter.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";


type Props = {
    search: string;
    setSearch: (v: string) => void;
    setLocation: (v: string) => void;
    setType: (v: string) => void;
};

export function JobFilter({ search, setSearch, setLocation, setType }: Props) {
    return (
        <Card>
            <CardContent>
                <div className="space-y-4 w-full">
                    <Input
                        placeholder="Search jobs..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <Select onValueChange={setLocation}>
                        <SelectTrigger>
                            <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Remote">Remote</SelectItem>
                            <SelectItem value="Bangalore">Bangalore</SelectItem>
                            <SelectItem value="Mumbai">Mumbai</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select onValueChange={setType}>
                        <SelectTrigger>
                            <SelectValue placeholder="Job Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Full-time">Full-time</SelectItem>
                            <SelectItem value="Part-time">Part-time</SelectItem>
                            <SelectItem value="Internship">Internship</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>

        </Card>

    );
}