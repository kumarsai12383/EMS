import Dashboard from "../assets/dashboard.png";
function DashboardPreview() {
  return (
    <>
      <section className="py-10 bg-white border-y border-black/[0.05]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold font-bricolage text-gray-900 mb-4" >
              Your workforce at a glance
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Get a clear overview of your organization with real-time workforce
              statistics and department insights.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-7xl h-auto  flex justify-center items-center">
            <img src={Dashboard} alt="Dashboard Preview" className="w-full h-full object-contain" />
          </div>
        </div>
      </section>
    </>
  );
}

export default DashboardPreview;
