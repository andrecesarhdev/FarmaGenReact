import { ClipLoader } from "react-spinners";
import { useLoading } from "../../context/LoadingContext";

function LoadingOverlay() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <ClipLoader color="#16a34a" size={48} />
      </div>
    </div>
  );
}

export default LoadingOverlay;