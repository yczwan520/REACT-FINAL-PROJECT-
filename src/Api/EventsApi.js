import axios from "axios";

export const HostsPage = async () => {
  const { data } = await axios.get(
    `https://601caf791a9c220017060c02.mockapi.io/api/v1/Hosts/ `
  );
  console.log(data);
  return data;
};

export const EventsPage = async () => {
  const { data } = await axios.get(
    `https://601caf791a9c220017060c02.mockapi.io/api/v1/Events/ `
  );
  console.log(data);
  return data;
};
