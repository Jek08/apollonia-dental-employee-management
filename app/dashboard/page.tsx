"use client";

import EmployeesTable from "@/app/ui/dashboard/EmployeesTable";
import { employees } from "@/app/lib/data";
import Statistics from "../ui/dashboard/Statistics";

export default function Dashboard() {
  return (
    <main className="grid grid-cols-3 grid-rows-5 gap-8 w-full p-8">
      <div className="row-start-1 row-end-2 col-start-1 col-end-4">
        <Statistics />
      </div>
      <div className="col-span-3">
        <EmployeesTable employees={employees} />
      </div>
    </main>
  );
}
