import React, { useEffect, useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useNavigate } from "react-router";

const Event = () => {
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3001/api/nextEvents");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto px-4 py-10 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        UPCOMING <span className="text-red-600">FIGHTS</span>
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
        </div>
      ) : events.length === 0 ? (
        <div className="text-center py-10 bg-white rounded-lg shadow">
          <p className="text-xl text-gray-500">No upcoming events scheduled</p>
        </div>
      ) : (
        <div className="space-y-8">
          {events.map((event, index) => (
            <div
              key={event.event_id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {(event.event_date || event.location) && (
                <div className="bg-gray-800 text-white p-3 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{event.event_date || "TBA"}</span>
                  </div>
                  {event.event_time && (
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{event.event_time}</span>
                    </div>
                  )}
                  {event.location && (
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  )}
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center justify-between">
                  {/* Fighter 1 */}
                  <div className="flex flex-col items-center w-2/5">
                    <div className="relative h-40 w-40 mb-4">
                      <img
                        src={event.fighter1_image_url || "/placeholder.svg"}
                        alt={event.fighter1_name}
                        className="object-contain h-full w-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center">
                      {event.fighter1_name}
                    </h3>
                    <div className="mt-2 w-full">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Win Chance</span>
                        <span className="font-semibold text-green-600">
                          {(event.fighter1_win_prob * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${event.fighter1_win_prob * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* VS Section */}
                  <div className="flex flex-col items-center w-1/5">
                    <div className="relative h-16 w-16 rounded-full bg-red-600 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">VS</span>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-sm text-gray-500">
                        MATCH #{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Fighter 2 */}
                  <div className="flex flex-col items-center w-2/5">
                    <div className="relative h-40 w-40 mb-4">
                      <img
                        src={event.fighter1_image_url || "/placeholder.svg"}
                        alt={event.fighter2_name}
                        className="object-contain h-full w-full"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center">
                      {event.fighter2_name}
                    </h3>
                    <div className="mt-2 w-full">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Win Chance</span>
                        <span className="font-semibold text-blue-600">
                          {(event.fighter2_win_prob * 100).toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${event.fighter2_win_prob * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={() =>
                      navigate(
                        `/compare/${encodeURIComponent(
                          event.fighter1_name
                        )}/${encodeURIComponent(event.fighter2_name)}`
                      )
                    }
                    className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    View Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Event;
