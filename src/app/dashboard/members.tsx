import React, { useState } from "react";
import PageHeader from "@/components/custom/page-header";
import TableComponent from "@/components/custom/table-common";
import MemberTypes from "@/types"; // Ensure this type includes avatar, manager, etc.
import Footer from "@/components/custom/footer";

const Members: React.FC = () => {
  const [search, ] = useState("");
  const [teams, ] = useState<MemberTypes[]>([
    {
      id: 1,
      name: "Alpha Squad",
      members: 5,
      manager: "Alice",
      email: "alpha@example.com",
      avatar: "/avatars/team1.jpg",
    },
    {
      id: 2,
      name: "Beta Group",
      members: 8,
      manager: "Bob",
      email: "beta@example.com",
      avatar: "/avatars/team2.jpg",
    },
    {
      id: 1,
      name: "Alpha Squad",
      members: 5,
      manager: "Alice",
      email: "alpha@example.com",
      avatar: "/avatars/team1.jpg",
    },
    {
      id: 2,
      name: "Beta Group",
      members: 8,
      manager: "Bob",
      email: "beta@example.com",
      avatar: "/avatars/team2.jpg",
    },
    {
      id: 1,
      name: "Alpha Squad",
      members: 5,
      manager: "Alice",
      email: "alpha@example.com",
      avatar: "/avatars/team1.jpg",
    },
    {
      id: 2,
      name: "Beta Group",
      members: 8,
      manager: "Bob",
      email: "beta@example.com",
      avatar: "/avatars/team2.jpg",
    },
    {
      id: 1,
      name: "Alpha Squad",
      members: 5,
      manager: "Alice",
      email: "alpha@example.com",
      avatar: "/avatars/team1.jpg",
    },
    {
      id: 2,
      name: "Beta Group",
      members: 8,
      manager: "Bob",
      email: "beta@example.com",
      avatar: "/avatars/team2.jpg",
    },
    {
      id: 1,
      name: "Alpha Squad",
      members: 5,
      manager: "Alice",
      email: "alpha@example.com",
      avatar: "/avatars/team1.jpg",
    },
    {
      id: 2,
      name: "Beta Group",
      members: 8,
      manager: "Bob",
      email: "beta@example.com",
      avatar: "/avatars/team2.jpg",
    },
    {
      id: 1,
      name: "Alpha Squad",
      members: 5,
      manager: "Alice",
      email: "alpha@example.com",
      avatar: "/avatars/team1.jpg",
    },
    {
      id: 2,
      name: "Beta Group",
      members: 8,
      manager: "Bob",
      email: "beta@example.com",
      avatar: "/avatars/team2.jpg",
    },
    {
      id: 1,
      name: "Alpha Squad",
      members: 5,
      manager: "Alice",
      email: "alpha@example.com",
      avatar: "/avatars/team1.jpg",
    },
    {
      id: 2,
      name: "Beta Group",
      members: 8,
      manager: "Bob",
      email: "beta@example.com",
      avatar: "/avatars/team2.jpg",
    },
    {
      id: 1,
      name: "Alpha Squad",
      members: 5,
      manager: "Alice",
      email: "alpha@example.com",
      avatar: "/avatars/team1.jpg",
    },
    {
      id: 2,
      name: "Beta Group",
      members: 8,
      manager: "Bob",
      email: "beta@example.com",
      avatar: "/avatars/team2.jpg",
    },
    {
      id: 1,
      name: "Alpha Squad",
      members: 5,
      manager: "Alice",
      email: "alpha@example.com",
      avatar: "/avatars/team1.jpg",
    },
    {
      id: 2,
      name: "Beta Group",
      members: 8,
      manager: "Bob",
      email: "beta@example.com",
      avatar: "/avatars/team2.jpg",
    },
    {
      id: 1,
      name: "Alpha Squad",
      members: 5,
      manager: "Alice",
      email: "alpha@example.com",
      avatar: "/avatars/team1.jpg",
    },
    {
      id: 2,
      name: "Beta Group",
      members: 8,
      manager: "Bob",
      email: "beta@example.com",
      avatar: "/avatars/team2.jpg",
    },
    {
      id: 1,
      name: "Alpha Squad",
      members: 5,
      manager: "Alice",
      email: "alpha@example.com",
      avatar: "/avatars/team1.jpg",
    },
    {
      id: 2,
      name: "Beta Group",
      members: 8,
      manager: "Bob",
      email: "beta@example.com",
      avatar: "/avatars/team2.jpg",
    },
    // Add more teams as needed
  ]);

  const headers: { label: string; key: keyof MemberTypes; sortable?: boolean }[] = [
    { label: "Team Name", key: "name" },
    { label: "Members", key: "members" },
    { label: "Manager", key: "manager" },
    { label: "Email", key: "email" },
  ];

  const filteredTeams = teams.filter(
    (team) =>
      team.name.toLowerCase().includes(search.toLowerCase()) ||
      team.manager.toLowerCase().includes(search.toLowerCase()) ||
      team.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleRowClick = (team: MemberTypes) => {
    console.log("View team:", team);
  };

  const handleEdit = (team: MemberTypes) => {
    console.log("Edit team:", team);
  };

  const handleDelete = (team: MemberTypes) => {
    console.log("Delete team:", team);
  };

  return (
    <div>
       <div className="pt-16"/>
      <PageHeader title="Teams" description="Manage your teams here." />
      <div className="md:mx-36">
        <TableComponent
          headers={headers}
          data={filteredTeams}
          avatarKey="avatar"
          showActions
          actionIconsOnly
          onRowClick={handleRowClick}
          onEdit={handleEdit}
          onDelete={handleDelete}
          rowsPerPageOptions={[5, 10, 15]}
          defaultRowsPerPage={10}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default Members;
