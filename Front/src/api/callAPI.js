import REACT_APP_MOCKED_DATA from "../mocked-data/variable";
import mockedData from "../mocked-data/mocked-user.json";

async function getUserData(id) {
  if (REACT_APP_MOCKED_DATA) {
    const data = mockedData.user;
    return data;
  }

  const reponse = await fetch(`http://localhost:3000/user/${id}`);
  const reponseJson = await reponse.json();
  const data = reponseJson.data;

  return data;
}

async function getActivityData(id) {
  if (REACT_APP_MOCKED_DATA) {
    const data = mockedData.activity;
    return data.sessions;
  }

  const reponse = await fetch(`http://localhost:3000/user/${id}/activity`);
  const reponseJson = await reponse.json();
  const data = reponseJson.data;

  return data.sessions;
}

async function getPerformanceData(id) {
  if (REACT_APP_MOCKED_DATA) {
    const data = mockedData.performance;
    return data;
  }

  const reponse = await fetch(`http://localhost:3000/user/${id}/performance`);
  const reponseJson = await reponse.json();
  const data = reponseJson.data;

  return data;
}

async function getAverageSessionData(id) {
  if (REACT_APP_MOCKED_DATA) {
    const data = mockedData.averageSession;
    return data.sessions;
  }

  const reponse = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
  const reponseJson = await reponse.json();
  const data = reponseJson.data;

  return data.sessions;
}

export {getUserData, getActivityData, getPerformanceData, getAverageSessionData};
