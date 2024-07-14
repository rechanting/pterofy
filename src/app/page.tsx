import Image from "next/image";
import NavBar from "@/components/navBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        
        <NavBar />


      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-mono">Pterofy</h1>
        <p className="mt-3 text-xl">The client panel everyone tries to beat.</p>
        <div className="btn-group btn-group-rounded btn-group-scrollable mt-5">
          <a className="btn bg-blue-500" href="https://github.com/rechanting/pterofy" target="__blank">Github</a>
         <a className="btn bg-blue-500" href="https://dsc.gg/switchdev" target="__blank">Discord</a>
       </div>
      </div>


      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Minimal{" "}
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            WIth Minimality, comes great experience.
          </p>
        </a>
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Subscriptions{" "}
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Tired of the old credit system? Enjoy Stripe subscriptions.
          </p>
        </a>
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            UI{" "}
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Clean and Easy to use UI for all users!
          </p>
        </a>
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Safety{" "}
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            With things such as Clerk Auth, security is guarenteed.
          </p>
        </a>
      </div>
    </main>
  );
}
