
import {
  getUserData,
  getActivityData,
  getPerformanceData,
  getAverageSessionData,
} from "../api/callAPI";
import bodyData from "./bodyData";
import { activity } from "./activity";
import performance from "./performance";
import session from "./session";

/**
 * Represents a user.
 * @class
 */
class User {
   /**
   * @constructor
   * @param {number} id - The user's id.
   * @param {number} old - The user's age.
   * @param {string} firstName - The user's first name.
   * @param {string} lastName - The user's last name.
   * @param {number} todayScore - The user's score of the day.
   * @param {bodyData} userBody - The user's body data with class bodyData.
   * @param {activity[]} activity - The user's activity data with class activity.
   * @param {performance} performance - The user's performance data with class performance.
   * @param {session[]} sessionAverage - The user's average session data with class session.
   */
  constructor(
    id,
    old,
    firstName,
    lastName,
    todayScore,
    userBody,
    activity,
    performance,
    sessionAverage
  ) {
    this.id = id;
    this.old = old;
    this.firstName = firstName;
    this.lastName = lastName;
    this.todayScore = todayScore;
    this.userBody = userBody;
    this.activity = activity;
    this.performance = performance;
    this.sessionAverage = sessionAverage;
  }
  getUser() {
    return this.User;
  }
  getid() {
    return this.id;
  }
  getFirstName() {
    return this.firstName;
  }
  getLastName() {
    return this.lastName;
  }
  getTodayScorePercentage(){
    return (this.todayScore)
  }
  getOld() {
    return this.old;
  }
  getUserBody() {
    return this.userBody;
  }
  getActivity() {
    return this.activity;
  }
  getPerformance() {
    return this.performance;
  }
  getSession() {
    return this.sessionAverage;
  }
}

/**
 * Retrieves a User object from the API.
 * @async
 * @function
 * @param {string} id - The user's id.
 * @return {Promise<User>}
 */
async function getUser(id) {
  try {
    const data = await getUserData(id);
    const userInfos = data.userInfos;
    const userBody = data.keyData;
    const allActivity = await getActivityData(id);
    const allPerformance = await getPerformanceData(id);
    const allSessions = await getAverageSessionData(id);
    const user = new User(
      data.id,
      userInfos.age,
      userInfos.firstName,
      userInfos.lastName,
      data.todayScore,
      new bodyData(
        userBody.calorieCount,
        userBody.proteinCount,
        userBody.carbohydrateCount,
        userBody.lipidCount
      ),
      /*create an activity for all data in allActivity*/
      allActivity.map((act) => {
        return new activity(act.day, act.kilogram, act.calories);
      }),
      new performance(allPerformance.data, allPerformance.kind),
      /*create a session for all data in allSession*/
      allSessions.map((sess) => {
        return new session(sess.day, sess.sessionLength);
       
      })
    );
    return user;
  } catch {
    console.log("error");
  }
}

export { User, getUser };
