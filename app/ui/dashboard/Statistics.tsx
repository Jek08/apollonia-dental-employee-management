import { Employee } from "@/app/lib/definitions";
import { statsEmployees } from "@/app/lib/data";
import { useState } from "react";

export default function Statistics() {
  const [stats, setStats] = useState(statsEmployees());

  return (
    <div className="grid gap-8 grid-cols-4 grid-rows-1 size-full">
      <Card
        title="Job Applicants"
        data={stats.activeCount}
        style="bg-sky-500"
      />
      <Card
        title="Total Employees"
        data={stats.activeCount}
        style="bg-indigo-500"
      />
      <Card
        title="Attend Employees"
        data={stats.activeCount}
        style="bg-emerald-500"
      />
      <Card
        title="Absent Employees"
        data={stats.activeCount}
        style="bg-red-500"
      />
    </div>
  );
}

function Card({
  title,
  data,
  style,
}: {
  title: string;
  data: number;
  style: string;
}) {
  return (
    <div className="flex flex-col bg-white text-center">
      <h1 className={`w-full p-3 text-md font-medium text-white ${style}`}>
        {title}
      </h1>
      <span className="w-full p-9 text-xl ">{data}</span>
    </div>
  );
}
