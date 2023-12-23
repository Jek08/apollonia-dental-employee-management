import { Employee } from "@/app/lib/definitions";

export default function EmployeeTable({
  employees,
}: {
  employees: Array<Employee>;
}) {
  return (
    <table className="bg-white table-auto w-full h-fit">
      <tr className="bg-slate-300 h-10">
        <th className="w-12">ID</th>
        <th className="text-left px-4">Employee Name</th>
        <th className="text-left px-4">Department</th>
        <th>Status</th>
        <th>Schedule</th>
      </tr>
      {employees.map((el) => {
        return (
          <tr key={el.id} className="h-10">
            <td className="text-center">{el.id}</td>
            <td className="px-4">{el.fullname}</td>
            <td className="px-4">{el.department}</td>
            <td className="px-4 text-center">{el.status}</td>
            <td className="px-4 text-center">{el.schedule.toLocaleString()}</td>
          </tr>
        );
      })}
    </table>
  );
}
