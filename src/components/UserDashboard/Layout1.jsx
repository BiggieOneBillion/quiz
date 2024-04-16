import React from "react";

const Layout1 = () => {
    const data = [
        {
            title: 'Set Quiz',
            message: 'Click to set the quiz question'
        },
        {
            title: 'Manage Dashboard',
            message: 'Click to go to dashboard'
        },
    ]
  return (
    <section className="h-screen w-screen grid grid-rows-3">
      {/* top section */}
      <div className="py-5 mt-5 px-10 flex items-center justify-between w-full border-b">
        <h4 className="text-sm text-black capitalize">
          Welcome To Your Dashboard
        </h4>
        <p className="text-sm text-black capitalize">Raymond Chukwu</p>
      </div>
      {/* middle section */}
      <main className="flex h-full items-center justify-center gap-5">
          {
            data.map(datum => (
                <div className="border h-[200px] w-fit px-10 flex flex-col items-center justify-center">
                    <h3 className="font-semibold text-3xl text-black">{datum.title}</h3>
                    <p className="text-sm font-light text-slate-500">{datum.message}</p>
                </div>
            ))
          }
      </main>
    </section>
  );
};

export default Layout1;
