import members from "@/data/members.json";
import MemberDepartment from "./MemberDepartment.js";

export default function Members() {
  return (
    <div className="relative bg-primary">
      <p className="font-link absolute lg:text-[40px] text-[30px] font-bold lg:top-[90px] top-[40px] -translate-y-1/2 left-[50vw] -translate-x-1/2 text-text underline">
        Our Team
      </p>

      <div className="lg:pt-[200px] pt-[100px]">
        {members.map(({ department, members }, i) => (
          <MemberDepartment name={department} members={members} key={i} />
        ))}
      </div>
    </div>
  );
}
