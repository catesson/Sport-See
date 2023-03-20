import { User, getUser } from "../data/user";
import ProfilHeader from "../component/ProfilHeader";
import { useState, useEffect } from "react";
import bodyData from "../data/bodyData";
import BodyInfo from "../component/BodyInfo";
import iconApple from "../assets/apple.png";
import iconCalorie from "../assets/calorie.png";
import iconCheeseburger from "../assets/cheeseburger.png";
import iconProtein from "../assets/protein.png";
import ActivityChart from "../component/ActivityChart";
import AverageChart from "../component/AverageChart";

function Home(id) {
  const [user, setUser] = useState(new User());
  const [userBody, setUserBody] = useState(new bodyData());
  const [activity, setActivity]= useState([]);
  const [performance, setPerformance]= useState([]);
  const [sessions, setSession] = useState([{}])
  useEffect(() => {
    getUser(12).then((data) => {
      setUser(data);
      setUserBody(data.getUserBody());
      setActivity(data.getActivity())
      setPerformance(data.getPerformance())
      setSession(data.getSession())
    });
  }, []);
  console.log(user)

  return (
    <div>
      <ProfilHeader name={user.firstName}></ProfilHeader>
      <BodyInfo
        value={userBody.getCalorie()}
        unite="kCal"
        uniteName="Calories"
        color="#FF00001A"
        picture={iconCalorie}
      ></BodyInfo>
      <BodyInfo
        value={userBody.getProtein()}
        unite="g"
        uniteName="Protein"
        color="#4AB8FF1A"
        picture={iconProtein}
      ></BodyInfo>
      <BodyInfo
        value={userBody.getCarbohydrate()}
        unite="g"
        uniteName="Glucides"
        color="#F9CE231A"
        picture={iconApple}
      ></BodyInfo>
      <BodyInfo
        value={userBody.getLipid()}
        unite="g"
        uniteName="Lipides"
        color="#FD51811A;"
        picture={iconCheeseburger}
      ></BodyInfo>
      <ActivityChart data={activity}></ActivityChart>
      <AverageChart data={sessions}></AverageChart>
    </div>
  );
}
export default Home;
