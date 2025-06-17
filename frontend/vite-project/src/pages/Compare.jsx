import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { useParams } from "react-router-dom";

export default function FighterComparison() {
  const [fighters, setFighters] = useState([]);
  const [selectedFighter1, setSelectedFighter1] = useState(null);
  const [selectedFighter2, setSelectedFighter2] = useState(null);
  const [error, setError] = useState(null);
  const [comparisonData, setComparisonData] = useState(null);

  console.log(comparisonData);

  const { fighter1, fighter2 } = useParams();

  useEffect(() => {
    if (fighter1 && fighter2) {
      setSelectedFighter1(decodeURIComponent(fighter1));
      setSelectedFighter2(decodeURIComponent(fighter2));
    }
  }, [fighter1, fighter2]);

  useEffect(() => {
    if (selectedFighter1 && selectedFighter2) {
      handleCompare();
    }
  }, [selectedFighter1, selectedFighter2]);

  useEffect(() => {
    fetch("http://localhost:3001/api/fighters")
      .then((res) => res.json())
      .then(setFighters)
      .catch(() => setError("Failed to fetch fighters"));
  }, []);

  const handleCompare = async () => {
    if (!selectedFighter1 || !selectedFighter2)
      return setError("Select both fighters");
    if (selectedFighter1 === selectedFighter2)
      return setError("Choose different fighters");

    setError(null);
    try {
      const [f1, f2] = await Promise.all([
        fetch(`http://localhost:3001/api/fighters/${selectedFighter1}`).then(
          (r) => r.json()
        ),
        fetch(`http://localhost:3001/api/fighters/${selectedFighter2}`).then(
          (r) => r.json()
        ),
      ]);
      setComparisonData({ fighter1: f1, fighter2: f2 });
    } catch {
      setError("Error fetching fighter data");
    }
  };

  const getRadarData = (f1, f2) => [
    { stat: "Strike", [f1.name]: f1.strike, [f2.name]: f2.strike },
    { stat: "Cardio", [f1.name]: f1.cardio, [f2.name]: f2.cardio },
    { stat: "Grappling", [f1.name]: f1.grappling, [f2.name]: f2.grappling },
    { stat: "Power", [f1.name]: f1.power, [f2.name]: f2.power },
    { stat: "Speed", [f1.name]: f1.speed, [f2.name]: f2.speed },
    { stat: "Defense", [f1.name]: f1.defense, [f2.name]: f2.defense },
  ];

  const calcWinProb = (f1, f2) => {
    const total1 =
      f1.strike + f1.cardio + f1.grappling + f1.power + f1.speed + f1.defense;
    const total2 =
      f2.strike + f2.cardio + f2.grappling + f2.power + f2.speed + f2.defense;
    const total = total1 + total2;
    return {
      f1: Math.round((total1 / total) * 100),
      f2: Math.round((total2 / total) * 100),
    };
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">
        Fighter Comparison
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
        <select
          className="flex-1 p-3 rounded-lg border border-gray-300"
          onChange={(e) => setSelectedFighter1(e.target.value)}
          value={selectedFighter1 || ""}
        >
          <option value="">Select Fighter 1</option>
          {fighters.map((f) => (
            <option key={f.name} value={f.name}>
              {f.name}
            </option>
          ))}
        </select>

        <button
          onClick={handleCompare}
          className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={!selectedFighter1 || !selectedFighter2}
        >
          Start Comparison
        </button>

        <select
          className="flex-1 p-3 rounded-lg border border-gray-300"
          onChange={(e) => setSelectedFighter2(e.target.value)}
          value={selectedFighter2 || ""}
        >
          <option value="">Select Fighter 2</option>
          {fighters.map((f) => (
            <option key={f.name} value={f.name}>
              {f.name}
            </option>
          ))}
        </select>
      </div>

      {error && <p className="text-center text-red-500 mb-6">{error}</p>}

      {comparisonData && (
        <div className="space-y-12">
          <div className="flex items-center justify-center gap-8 ">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img
                  src={comparisonData.fighter1.image_url || "/placeholder.svg"}
                  alt={comparisonData.fighter1.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>

            <div className="text-center px-8">
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Win Probability</h3>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-red-600">
                    {
                      calcWinProb(
                        comparisonData.fighter1,
                        comparisonData.fighter2
                      ).f1
                    }
                    %
                  </span>
                  <span className="text-gray-400">VS</span>
                  <span className="text-2xl font-bold text-blue-600">
                    {
                      calcWinProb(
                        comparisonData.fighter1,
                        comparisonData.fighter2
                      ).f2
                    }
                    %
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img
                  src={comparisonData.fighter2.image_url || "/placeholder.svg"}
                  alt={comparisonData.fighter2.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 !mt-20">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-red-600">
                {comparisonData.fighter1.name}
              </h3>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Weight Class:</span>{" "}
                  {comparisonData.fighter1.weight_class}
                </p>
                <p>
                  <span className="font-medium">Ranking:</span>{" "}
                  {comparisonData.fighter1.ranking === 0
                    ? "Champion"
                    : `#${comparisonData.fighter1.ranking}`}
                </p>
                <p>
                  <span className="font-medium">Record:</span>{" "}
                  {comparisonData.fighter1.wins} -{" "}
                  {comparisonData.fighter1.draws} -{" "}
                  {comparisonData.fighter1.losses}
                </p>
                <p>
                  <span className="font-medium">Height:</span>{" "}
                  {comparisonData.fighter1.height_cm}
                </p>
                <p>
                  <span className="font-medium">Reach:</span>{" "}
                  {comparisonData.fighter1.reach_cm}
                </p>
                <p>
                  <span className="font-medium">Age:</span>{" "}
                  {comparisonData.fighter1.age}
                </p>
                <p>
                  <span className="font-medium">Fighting Style:</span>{" "}
                  {comparisonData.fighter1.fight_style || "Unknown"}
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600">
                {comparisonData.fighter2.name}
              </h3>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Weight Class:</span>{" "}
                  {comparisonData.fighter2.weight_class}
                </p>
                <p>
                  <span className="font-medium">Ranking:</span>{" "}
                  {comparisonData.fighter2.ranking === 0
                    ? "Champion"
                    : `#${comparisonData.fighter2.ranking}`}
                </p>
                <p>
                  <span className="font-medium">Record:</span>{" "}
                  {comparisonData.fighter2.wins} -{" "}
                  {comparisonData.fighter2.draws} -{" "}
                  {comparisonData.fighter2.losses}
                </p>
                <p>
                  <span className="font-medium">Height:</span>{" "}
                  {comparisonData.fighter2.height_cm}
                </p>
                <p>
                  <span className="font-medium">Reach:</span>{" "}
                  {comparisonData.fighter2.reach_cm}
                </p>
                <p>
                  <span className="font-medium">Age:</span>{" "}
                  {comparisonData.fighter2.age}
                </p>
                <p>
                  <span className="font-medium">Fighting Style:</span>{" "}
                  {comparisonData.fighter2.fight_style || "Unknown"}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-96">
            <ResponsiveContainer>
              <RadarChart
                data={getRadarData(
                  comparisonData.fighter1,
                  comparisonData.fighter2
                )}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="stat" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar
                  name={comparisonData.fighter1.name}
                  dataKey={comparisonData.fighter1.name}
                  stroke="#DC2626"
                  fill="#DC2626"
                  fillOpacity={0.6}
                />
                <Radar
                  name={comparisonData.fighter2.name}
                  dataKey={comparisonData.fighter2.name}
                  stroke="#2563EB"
                  fill="#2563EB"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}
