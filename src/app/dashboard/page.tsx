import Image from "next/image";
import { ClerkProvider } from "@clerk/nextjs";
import SideBar from '@/components/sideBar';

export default function Dashboard() {
  return (
    <main>
      <SideBar />
      <div className="flex flex-row gap-4 p-24 ml-56 rounded-xl">
        <div className="card bg-slate-600">
          <div className="card-body">
            <div className="flex flex-row gap-2 items-center"> {/* added items-center for alignment */}
              <Image src="/rack.svg" width={20} height={20} alt="" className="w-5" /> {/* replaced img with Image component */}
              <h2 className="card-header text-slate-200">Servers</h2>
            </div>
            <p className="text-content2 text-slate-200">You have 2 active servers.</p>
          </div>
          <div className="accordion-group accordion-group-hover rounded-lg">
            <div className="accordion rounded-lg mt-2">
              <input type="checkbox" id="toggle-5" className="accordion-toggle" />
              <label htmlFor="toggle-5" className="accordion-title"> 
                Server 1
              </label>
              <div className="accordion-content text-content2">
                <div className="min-h-0 text-slate-200 flex flex-row gap-28">server info blah blah <a href="">Manage</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
