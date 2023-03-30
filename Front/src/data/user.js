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

class User {
  constructor(
    id,
    old,
    firstName,
    lastName,
    userBody,
    activity,
    performance,
    sessionAverage
  ) {
    this.id = id;
    this.old = old;
    this.firstName = firstName;
    this.lastName = lastName;
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
      new bodyData(
        userBody.calorieCount,
        userBody.proteinCount,
        userBody.carbohydrateCount,
        userBody.lipidCount
      ),
      allActivity.map((act) => {
        return new activity(act.day, act.kilogram, act.calories);
      }),
      new performance(allPerformance.data, allPerformance.kind),
      allSessions.map((sess) => {
        return new session(sess.day, sess.sessionLength);
       
      })
    );
    console.log(user)
    return user;
  } catch {
    console.log("error");
  }
}

export { User, getUser };
