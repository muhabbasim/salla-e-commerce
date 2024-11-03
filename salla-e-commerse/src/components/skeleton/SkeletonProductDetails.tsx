// SkeletonProductDetails.js
export default function SkeletonProductDetails() {
  return (
    // <div className="flex gap-10 flex-col md:flex-row items-start p-4 rounded-lg animate-pulse space-y-4 md:space-y-0 md:space-x-6">
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">   
      <div className="bg-gray-300 h-64 w-full rounded-lg mb-4 object-cover sm:mb-0"></div>
      
      <div className="flex-1 space-y-4 col-span-2">
        <div className="bg-gray-300 h-10 w-3/4 rounded"></div>
        <div className="bg-gray-300 h-6 w-1/2 rounded"></div>
        <div className="bg-gray-300 h-6 w-1/4 rounded mb-4"></div>
        
        <div className="space-y-2">
          <div className="bg-gray-300 h-4 w-full rounded"></div>
          <div className="bg-gray-300 h-4 w-full rounded"></div>
          <div className="bg-gray-300 h-4 w-full rounded"></div>
        </div>
      </div>
    </div>
  );
}

