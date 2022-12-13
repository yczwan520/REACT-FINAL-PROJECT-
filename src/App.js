import React from "react";
import PageLayout from "./components/PageLayout";
import { Routes, Route } from "react-router-dom";
import EventDetail from "./components/Events/EventDetail/EventsDetail";
import { EventsPage, HostsPage } from "./Api/EventsApi";
import Events from "./components/Events/EventsPage";
import { useState, useEffect } from "react";
import Profile from "./components/Profile/Profile";

const App = () => {
  const [data, setData] = useState("");
  const [host, setHost] = useState("");

  const fetchEvents = async () => {
    try {
      const data = await EventsPage();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchHost = async () => {
    try {
      const host = await HostsPage();
      setHost(host);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
    fetchHost();
  }, []);
  return (
    <div className="App">
      <PageLayout data={data} host={host} />
    </div>
  );
};

export default App;
