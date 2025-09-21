export default function Contact() {
  return (
    <main className="flex flex-col items-center flex-1 flex-shrink-0 px-5 pt-16 pb-8 border-r shadow-lg bg-studio border-default">
      <div className="flex-1 flex flex-col justify-center w-[330px] sm:w-[384px]">
        <div className="mb-10">
          <h1 className="mt-8 mb-2 lg:text-3xl">Welcome back</h1>
          <h2 className="text-sm text-foreground-light">
            Sign in to your account
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <form id="sign-in-form" className="flex flex-col gap-4">
            <input
              type="email"
              className="relative text-sm flex flex-col gap-2"
              placeholder="Enter your email"
            ></input>
          </form>
        </div>
      </div>
    </main>
  );
}
