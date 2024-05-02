import { Calendar, Plus, Users } from "lucide-react"
import Link from "next/link"

export const Sidebar = () => {
  return (
    <div className="w-full rounded-r-2xl py-8 px-4 h-full bg-[#1B1D37] flex flex-col justify-between items-center">
      <p className="font-bold text-2xl">StepneyFootball</p>
      <div className="flex flex-col gap-y-5">
          <Link href='/fixtures'>
            <div className="flex gap-x-2">
              <Calendar/>
              <p>Fixtures</p>
            </div>
          </Link>
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
