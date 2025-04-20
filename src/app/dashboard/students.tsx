import React, { useState } from "react";
import PageHeader from "@/components/custom/page-header";
import TableComponent from "@/components/custom/table-common";
import Footer from "@/components/custom/footer";

// Student interface
interface Student {
    id: number;
    name: string;
    age: number;
    grade: string;
    email: string;
    avatar: string;
}

const Students: React.FC = () => {
    const [search, setSearch] = useState("");
    const [students, setStudents] = useState<Student[]>([
        {
            id: 1,
            name: "John Doe",
            age: 20,
            grade: "A",
            email: "john@example.com",
            avatar: "/avatars/john.jpg",
        },
        {
            id: 2,
            name: "Jane Smith",
            age: 22,
            grade: "B",
            email: "jane@example.com",
            avatar: "/avatars/jane.jpg",
        },
        {
            id: 3,
            name: "Tom Brown",
            age: 23,
            grade: "C",
            email: "tom@example.com",
            avatar: "/avatars/tom.jpg",
        },
        {
            id: 4,
            name: "Sara White",
            age: 21,
            grade: "B",
            email: "sara@example.com",
            avatar: "/avatars/sara.jpg",
        },
        {
            id: 5,
            name: "Mark Johnson",
            age: 24,
            grade: "A",
            email: "mark@example.com",
            avatar: "/avatars/mark.jpg",
        },
        {
            id: 6,
            name: "Emma Wilson",
            age: 25,
            grade: "A",
            email: "emma@example.com",
            avatar: "/avatars/emma.jpg",
        },
        {
            id: 7,
            name: "Michael Green",
            age: 26,
            grade: "C",
            email: "michael@example.com",
            avatar: "/avatars/michael.jpg",
        },
        {
            id: 8,
            name: "Olivia Clark",
            age: 27,
            grade: "B",
            email: "olivia@example.com",
            avatar: "/avatars/olivia.jpg",
        },
    ]);

    const headers: { label: string; key: keyof Student; sortable: boolean }[] = [
        { label: "Name", key: "name", sortable: true },
        { label: "Age", key: "age", sortable: true },
        { label: "Grade", key: "grade", sortable: true },
        { label: "Email", key: "email", sortable: false },
    ];

    const handleRowClick = (student: Student) => {
        console.log("Row clicked:", student);
    };

    const handleEdit = (student: Student) => {
        console.log("Edit student:", student);
    };

    const handleDelete = (student: Student) => {
        console.log("Delete student:", student);
    };

    // const handleAddStudent = () => {
    //     console.log("Add Student");
    // };

    // const handleExport = () => {
    //     const csv = [
    //         ["Name", "Age", "Grade", "Email"],
    //         ...filteredStudents.map((s) => [s.name, s.age, s.grade, s.email]),
    //     ]
    //         .map((row) => row.join(","))
    //         .join("\n");

    //     const blob = new Blob([csv], { type: "text/csv" });
    //     const url = URL.createObjectURL(blob);

    //     const link = document.createElement("a");
    //     link.href = url;
    //     link.download = "students.csv";
    //     link.click();
    // };

    const filteredStudents = students.filter(
        (student) =>
            student.name.toLowerCase().includes(search.toLowerCase()) ||
            student.email.toLowerCase().includes(search.toLowerCase()) ||
            student.grade.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
             <div className="pt-16"/>
            <PageHeader title="Students" description="Manage your students here." />

            

            {/* Table */}
            <div className="md:mx-36">
                <TableComponent
                    headers={headers}
                    data={filteredStudents}
                    avatarKey="avatar"
                    showActions
                    actionIconsOnly
                    onRowClick={handleRowClick}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    rowsPerPageOptions={[5, 10, 15]}
                    defaultRowsPerPage={5}
                />
            </div>
            <Footer/>
        </div>
    );
};

export default Students;
