import mockedData from "../mocked-data/mocked-user.json";

/**

Boolean flag indicating if the data is mocked or not.
@type {boolean} 
*/
const isMocked = process.env.REACT_APP_MOCKED_DATA==="true" ? true : false;

/**

Returns the user data from an API endpoint, either mocked or not.
 * @async
 * @function
* @param {number} id - The user ID.
* @returns {Promise<Object>} The user data.
*/
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
/**

Returns the activity data from an API endpoint, either mocked or not.
 * @async
 * @function
* @param {number} id - The user ID.
* @returns {Promise<Object>} The activity data.
*/
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
/**
Returns the performance data from an API endpoint, either mocked or not.
 * @async
 * @function
*@param {number} id - The user ID.
*@returns {Promise<Object>} The perfomance data.
*/
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

/**
Returns the session data from an API endpoint, either mocked or not.
 * @async
 * @function
* @param {number} id - The user ID.
* @returns {Promise<Object>} The session data.
*/
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
