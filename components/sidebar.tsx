import { Calendar, Plus, Users } from "lucide-react"

export const Sidebar = () => {
  return (
    <div className="rounded-r-2xl  py-8 px-4 h-full bg-[#1B1D37] hidden lg:flex w-[500px] flex-col justify-between items-center">
      <p className="font-bold text-2xl">StepneyFootball</p>
      <div className="flex flex-col gap-y-5">
        <div className="flex gap-x-2">
          <Calendar/>
          <p>Fixtures</p>
        </div>
        <div className="flex gap-x-2">
          <Plus />
          <p>Fixtures</p>
        </div>
      </div>
      <div>
        <div className="flex gap-x-2">
          <Users />
          <p>Login (admin)</p>
        </div>
      </div>
    </div>
  )
}
