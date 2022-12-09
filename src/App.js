import React from "react";
import PageLayout from "./components/PageLayout";
import { Routes, Route } from "react-router-dom";
import EventDetail from "./components/Events/EventDetail/EventsDetail";
import { EventsPage } from "./Api/EventsApi";
import Events from "./components/Events/EventsPage";
import { useState, useEffect } from "react";
import Profile from "./components/Profile/Profile";

// const App = () => {
//   const [data, setData] = useState("");
//   const fetchEvents = async () => {
//     try {
//       const data = await EventsPage();
//       setData(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, []);
//   return (
//     <div className="App">
//       <Routes>
//         <Route element={<PageLayout />}>
//           <Route path="/" element={<Events />} />
//           {/* <Route index element={<MainPage />} /> */}
//           <Route path="/profile" element={<Profile />} />
//           <Route
//             path="/events/:eventId"
//             element={<EventDetail data={data} />}
//           />
//         </Route>
//       </Routes>
//     </div>
//   );
// };

// export default App;

const App = () => {
  const [data, setData] = useState("");
  const fetchEvents = async () => {
    try {
      const data = await EventsPage();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <div className="App">
      <PageLayout data={data} />
    </div>
  );
};

export default App;
