import mockedData from "../mocked-data/mocked-user.json";


const isMocked = process.env.REACT_APP_MOCKED_DATA==="true" ? true : false;
console.log(isMocked)
async function getUserData(id) {
  if (isMocked) {
    const data = mockedData.user;
    return data;
  }

  const reponse = await fetch(`http://localhost:3000/user/${id}`);
  const reponseJson = await reponse.json();
  const data = reponseJson.data;

  return data;
}

async function getActivityData(id) {
  if (isMocked) {
    const data = mockedData.activity;
    return data.sessions;
  }

  const reponse = await fetch(`http://localhost:3000/user/${id}/activity`);
  const reponseJson = await reponse.json();
  const data = reponseJson.data;

  return data.sessions;
}

async function getPerformanceData(id) {
  if (isMocked) {
    const data = mockedData.performance;
    return data;
  }

  const reponse = await fetch(`http://localhost:3000/user/${id}/performance`);
  const reponseJson = await reponse.json();
  const data = reponseJson.data;

  return data;
}

async function getAverageSessionData(id) {
  if (isMocked) {
    const data = mockedData.averageSession;
    return data.sessions;
  }

  const reponse = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
  const reponseJson = await reponse.json();
  const data = reponseJson.data;

  return data.sessions;
}

export {getUserData, getActivityData, getPerformanceData, getAverageSessionData};
