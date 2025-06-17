import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts"
import { Ruler, Calendar, Trophy, Users, TrendingUp } from "lucide-react"

const history = [
  {
    result: "L",
    fighter: "Alexander Volkanovski",
    opponent: "Ilia Topuria",
    method: "KO (Punch) - Round 2 • 3:32",
    event: "UFC 298",
    date: "Feb 17, 2024",
  },
  {
    result: "L",
    fighter: "Alexander Volkanovski",
    opponent: "Islam Makhachev",
    method: "Decision (Unanimous) - Round 5 • 5:00",
    event: "UFC 294",
    date: "Oct 21, 2023",
  },
  {
    result: "W",
    fighter: "Alexander Volkanovski",
    opponent: "Yair Rodriguez",
    method: "TKO (Punches) - Round 3 • 4:19",
    event: "UFC 290",
    date: "Jul 8, 2023",
  },
]

const Information = () => {
  const { fighterName } = useParams()
  const [fighter, setFighter] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFighter = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/fighters/${encodeURIComponent(fighterName)}`)
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || "Failed to load fighter")
        }

        const stats = [
          { attribute: "Striking", value: data.strike },
          { attribute: "Grappling", value: data.grappling },
          { attribute: "Cardio", value: data.cardio },
          { attribute: "Power", value: data.power },
          { attribute: "Speed", value: data.speed },
          { attribute: "Defense", value: data.defense },
        ]

        const formattedFighter = {
          name: data.name,
          nickname: data.nickname,
          division: data.weight_class + " Division",
          record: `${data.wins}-${data.losses}-${data.draws}`,
          isChampion: data.ranking === 1,
          image: data.image_url || "/placeholder.svg?height=400&width=300",
          height: `${Math.floor(data.height_cm / 30.48)}'${Math.round((data.height_cm % 30.48) / 2.54)}"`,
          reach: `${(data.reach_cm / 2.54).toFixed(1)}"`,
          age: data.age,
          stats,
          history: [],
        }

        setFighter(formattedFighter)
      } catch (err) {
        console.error(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchFighter()
  }, [fighterName])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    )
  }

  if (!fighter) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Fighter Not Found</h2>
          <p className="text-gray-600">The requested fighter could not be loaded.</p>
        </div>
      </div>
    )
  }

  const { name, nickname, division, record, isChampion, stats, image, height, reach, age } = fighter

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Fighter Overview */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Fighter Image */}
              <div className="relative">
                <div className="w-64 h-80 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                  <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
                </div>
                <button className="mt-4 w-full bg-white text-red-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2">
                  <Users className="w-5 h-5" />
                  Compare Fighter
                </button>
              </div>

              {/* Fighter Info */}
              <div className="flex-1 text-white text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">{name}</h1>

                <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                    {division}
                  </span>
                  {isChampion && (
                    <span className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                      <Trophy className="w-4 h-4" />
                      Champion
                    </span>
                  )}
                </div>

                <div className="text-2xl font-bold mb-8">
                  Record: <span className="text-yellow-300">{record}</span>
                </div>

                {/* Fighter Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Ruler className="w-8 h-8 mx-auto mb-2 text-red-200" />
                    <div className="text-sm text-red-200 mb-1">Height</div>
                    <div className="text-xl font-bold">{height}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <TrendingUp className="w-8 h-8 mx-auto mb-2 text-red-200" />
                    <div className="text-sm text-red-200 mb-1">Reach</div>
                    <div className="text-xl font-bold">{reach}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Calendar className="w-8 h-8 mx-auto mb-2 text-red-200" />
                    <div className="text-sm text-red-200 mb-1">Age</div>
                    <div className="text-xl font-bold">{age}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fighter Statistics */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Fighter Statistics</h2>
          <div className="flex justify-center">
            <ResponsiveContainer width="100%" height={500}>
              <RadarChart data={stats}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="attribute" tick={{ fontSize: 14, fill: "#374151", fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 12, fill: "#6b7280" }} />
                <Radar name={name} dataKey="value" stroke="#dc2626" fill="#dc2626" fillOpacity={0.3} strokeWidth={3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-gray-600 mt-4">Each attribute is rated on a scale of 0-100</p>
        </div>

        {/* Fight History */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Fight History</h2>
          <div className="space-y-4">
            {history.map((fight, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center gap-6">
                  {/* Result Circle */}
                  <div
                    className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg
                    ${fight.result === "W" ? "bg-green-500 shadow-green-200" : "bg-red-500 shadow-red-200"} shadow-lg
                  `}
                  >
                    {fight.result}
                  </div>

                  {/* Fight Details */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <span className="font-bold text-lg text-gray-900">{fight.fighter}</span>
                      <span className="text-gray-500 font-medium">VS</span>
                      <span className="font-bold text-lg text-gray-900">{fight.opponent}</span>
                    </div>
                    <div className="text-gray-600 mb-1">{fight.method}</div>
                    <div className="text-sm font-medium text-red-600">{fight.event}</div>
                  </div>

                  {/* Date */}
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">Date</div>
                    <div className="font-semibold text-gray-900">{fight.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information
