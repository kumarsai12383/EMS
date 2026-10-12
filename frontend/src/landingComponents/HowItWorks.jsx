

function HowItWorks() {
    const steps = [
  { num: "01", title: "Add Employees", desc: "Create employee profiles with essential information." },
  { num: "02", title: "Organize Departments", desc: "Assign employees to the right teams and departments." },
  { num: "03", title: "Track Workforce", desc: "Monitor active and inactive employees in real time." },
  { num: "04", title: "Analyze Data", desc: "Understand your workforce through powerful analytics." },
];
    return(
        <>
         <section id="how-it-works" className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
              How it works
            </div>
            <h2 className="text-4xl font-bold font-bricolage text-gray-900" >
              Manage your workforce in four simple steps
            </h2>
          </div>

          <div className="relative">
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-indigo-100 hidden md:block" />
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="relative w-16 h-16 bg-white border-2 border-indigo-200 rounded-full flex items-center justify-center mb-5 z-10 shadow-[0_0_0_5px_#EEF2FF]">
                    <span className="text-xl font-bold text-indigo-600" >{step.num}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 font-bricolage" >{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section></>
    )
}
export default HowItWorks;