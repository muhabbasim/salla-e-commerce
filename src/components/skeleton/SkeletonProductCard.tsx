// SkeletonProductCard.js
export default function SkeletonProductCard() {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 sm:gap-4">
      {[1, 2, 3, 4].map((_el, i) => 
        <div key={i} className="w-full flex flex-col items-center p-4 bg-white rounded-lg shadow-md animate-pulse">
          <div className="bg-gray-300 h-40 w-full rounded-lg mb-4"></div>
          <div className="bg-gray-300 h-5 w-3/4 mb-2 rounded"></div>
          <div className="bg-gray-300 h-5 w-1/2 mb-4 rounded"></div>
          <div className="bg-gray-300 h-8 w-full rounded"></div>
        </div>
      )}
    </div>
  );
}

