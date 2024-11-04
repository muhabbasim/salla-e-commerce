
// SkeletonCartItem.js
export default function SkeletonCartItem() {
  return (
    <div className="flex justify-between">
      <div className="flex  w-full gap-4 items-center p-4 rounded-lg animate-pulse space-x-4">
        <div className="bg-gray-300 h-10 w-10 rounded-md"></div>
        
        <div className="flex-1">
          <div className="bg-gray-300 h-3 w-3/4 mb-2 rounded"></div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-gray-300 h-3 w-1/4 rounded"></div>
          </div>
        </div>
      </div>
      <div className="flex w-[15%] bg-gray-300 h-10 rounded-md"></div>
    </div>
  );
}
