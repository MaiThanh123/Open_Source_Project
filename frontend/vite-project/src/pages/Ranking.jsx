import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Ranking = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [fighters, setFighters] = useState([]);
  const [weightClasses, setWeightClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:3001/api/fighters`);
        const data = await response.json();

        if (data.length) {
          const uniqueClasses = [
            ...new Set(data.map((f) => f.weight_class)),
          ].sort();
          setWeightClasses(uniqueClasses);

          // Chỉ set default nếu chưa chọn
          if (!selectedClass && uniqueClasses.length > 0) {
            setSelectedClass(uniqueClasses[0]);
          }
        }
      } catch (error) {
        console.error("Error initializing weight classes:", error);
      }
    };

    fetchInitialData();
  }, []);

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://127.0.0.1:3001/api/fighters${
            selectedClass
              ? `?weight_class=${encodeURIComponent(selectedClass)}`
              : ""
          }`
        );
        const data = await response.json();

        setFighters(data);
      } catch (error) {
        console.error("Error fetching rankings:", error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedClass) {
      fetchRankings();
    }
  }, [selectedClass]);

  const champion = fighters[0];
  const contenders = fighters.slice(1);

  if (loading) {
    return (
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #dc2626, #b91c1c)",
            color: "white",
            padding: "20px",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            borderRadius: "12px 12px 0 0",
            marginBottom: "0",
          }}
        >
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-xl font-bold bg-red-600 text-white px-6 py-4 rounded-t-lg">
        {selectedClass} Division
      </div>

      {champion ? (
        <div
          className="flex items-center bg-gradient-to-r from-gray-200 to-white shadow p-4 rounded-lg mb-4 transition hover:scale-105 hover:bg-gray-100 cursor-pointer"
          onClick={() => navigate(`/info/${encodeURIComponent(champion.name)}`)}
        >
          <div className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-full text-lg font-bold mr-4">
            C
          </div>
          <img
            src={champion.image_url || "/placeholder.svg"}
            alt={champion.name}
            className="w-20 h-20 object-cover rounded-full border-2 border-red-600 mr-6"
          />
          <div className="flex flex-col">
            <strong className="text-xl text-red-700">{champion.name}</strong>
            <div className="text-gray-600">
              Record: {champion.wins}-{champion.losses}-{champion.draws}
            </div>
            <div className="text-gray-500 text-sm">
              Age: {champion.age} • Height: {champion.height_cm}cm
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-100 text-gray-500 px-6 py-4 rounded shadow-sm">
          No data available for this weight class.
        </div>
      )}

      {contenders.length > 0 &&
        contenders.map((fighter, i) => (
          <div
            key={fighter.name}
            className="flex items-center bg-white border-b border-gray-100 p-4 rounded hover:scale-105 hover:bg-gray-50 transition cursor-pointer"
            onClick={() =>
              navigate(`/info/${encodeURIComponent(fighter.name)}`)
            }
          >
            <div className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full font-bold mr-4">
              {i + 1}
            </div>
            <img
              src={fighter.image_url || "/placeholder.svg"}
              alt={fighter.name}
              className="w-16 h-16 object-cover rounded-full mr-4"
            />
            <div className="flex flex-col">
              <strong className="text-lg hover:text-red-600 transition">
                {fighter.name}
              </strong>
              <div className="text-gray-600 text-sm">
                Record: {fighter.wins}-{fighter.losses}-{fighter.draws}
              </div>
              <div className="text-gray-500 text-sm">
                Age: {fighter.age} • Height: {fighter.height_cm}cm
              </div>
            </div>
          </div>
        ))}

      <div className="fixed top-[280px] right-0 w-40 z-[100]">
        <div
          className="bg-red-700 text-white px-4 py-2 rounded-md cursor-pointer text-center font-bold shadow-md flex items-center justify-center"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {selectedClass}
          <span className="ml-2 text-sm">{dropdownOpen ? "▲" : "▼"}</span>
        </div>

        {dropdownOpen && (
          <div className="mt-1 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <div
              className="px-4 py-2 text-center hover:bg-gray-100 cursor-pointer font-semibold text-red-600"
              onClick={() => {
                setSelectedClass(""); // Clear filter
                setDropdownOpen(false);
              }}
            >
              All Classes
            </div>
            {weightClasses.map((cls) => (
              <div
                key={cls}
                className="px-4 py-2 text-center hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedClass(cls);
                  setDropdownOpen(false);
                }}
              >
                {cls}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Ranking;
