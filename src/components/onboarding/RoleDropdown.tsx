import React from "react";

interface RoleDropdownProps {
  selectedRole: string;
  setSelectedRole: (industry: string) => void;
}

export default function IndustryDropdown({
  selectedRole,
  setSelectedRole,
}: RoleDropdownProps) {
  const roles = [
    "Full Stack Engineer",
    "Front End Engineer",
    "Back End Engineer",
  ];

  return (
    <div className="flex flex-col justify-center mt-8 w-full text-6xl text-center text-gray-300 max-md:max-w-full max-md:text-4xl">
      <div className="flex flex-row text-4xl items-center justify-center">
        <img loading="lazy" src="/5.png" alt="" className="size-fit" />
        <h2 className="text-center text-black max-md:max-w-full">
          I'm targeting a role or position
        </h2>
      </div>
      <input
        list="roles"
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        placeholder="Select or write a role"
        className="border-2 mt-10"
      />
      <datalist id="roles">
        {roles.map((role) => (
          <option key={role} value={role} />
        ))}
      </datalist>
    </div>
  );
}
