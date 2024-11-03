// SkeletonProductCard.js
export default function SkeletonSlider() {
  return (

    <div className="bg-white flex flex-col gap-8">
      <div className="w-full aspect-video flex flex-col items-center p-4 bg-gray-300 rounded-lg animate-pulse">
        <div className="bg-gray-300 aspect-video h-40 w-full rounded-lg mb-4"></div>
      </div>
      <div className="w-full bg-gray-300 h-12 mb-2 rounded"></div>
    </div>
  );
}

