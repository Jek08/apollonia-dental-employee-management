import { Employee } from "./definitions";

export const employees: Array<Employee> = [
  {
    id: 1,
    fullname: "Laura Benson",
    department: "General Dentistry",
    status: "active",
    schedule: new Date("2023-12-20T09:00:00"),
  },
  {
    id: 2,
    fullname: "Daryl Dixon",
    department: "General Dentistry",
    status: "active",
    schedule: new Date("2023-12-20T09:00:00"),
  },
  {
    id: 3,
    fullname: "Ben Franklin",
    department: "General Dentistry",
    status: "active",
    schedule: new Date("2023-12-20T09:00:00"),
  },
  {
    id: 4,
    fullname: "Abigail Po",
    department: "General Dentistry",
    status: "active",
    schedule: new Date("2023-12-20T09:00:00"),
  },
];

export function statsEmployees() {
  const active = employees.filter((el) => el.status === "active");

  return {
    count: employees.length,
    activeCount: active.length,
  };
}
