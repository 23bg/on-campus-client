import React, { useState } from "react";
import PageHeader from "@/components/custom/page-header";
import TableComponent from "@/components/custom/table-common";

interface Team {
  id: number;
  name: string;
  members: number;
  manager: string;
  email: string;
  avatar: string;
}

const Staff: React.FC = () => {
  const [search, setSearch] = useState("");
  const [teams, setTeams] = useState<Team[]>([
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
    // ...more teams
  ]);

  const headers = [
    { label: "Team Name", key: "name", sortable: true },
    { label: "Members", key: "members", sortable: true },
    { label: "Manager", key: "manager", sortable: true },
    { label: "Email", key: "email", sortable: false },
  ];

  const filteredTeams = teams.filter(
    (team) =>
      team.name.toLowerCase().includes(search.toLowerCase()) ||
      team.manager.toLowerCase().includes(search.toLowerCase()) ||
      team.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleRowClick = (team: Team) => {
    console.log("View team:", team);
  };

  const handleEdit = (team: Team) => {
    console.log("Edit team:", team);
  };

  const handleDelete = (team: Team) => {
    console.log("Delete team:", team);
  };

  return (
    <div>
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
          defaultRowsPerPage={5}
        />
      </div>
    </div>
  );
};

export default Staff;
