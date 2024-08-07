export default function ObituaryCard({ obituary }) {
  return (
    <div className="card bg-white shadow-md rounded p-4 mb-4">
      <h2 className="text-2xl font-bold">{obituary.name}</h2>
      <p className="text-gray-600">出生日期: {new Date(obituary.birthDate).toLocaleDateString()}</p>
      <p className="text-gray-600">死亡日期: {new Date(obituary.deathDate).toLocaleDateString()}</p>
      <p>{obituary.content}</p>
      {/* 展示照片 */}
      {obituary.photos.length > 0 && (
        <div className="photo-carousel">
          {obituary.photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Photo ${index}`} className="w-full h-auto rounded"/>
          ))}
        </div>
      )}
    </div>
  );
}
