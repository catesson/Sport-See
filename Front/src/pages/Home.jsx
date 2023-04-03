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
import styled from "styled-components";
import PerformanceChart from "../component/PerformanceChart";
import ScoreChart from "../component/ScoreChart";

const StyledData = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  `;

  const StyledBodyInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
  `;
  const StyledChart = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    width: 75%;
    @media (max-width: 1420px){
      flex-direction:column; 
      align-items:center;
    }
  `;

  
function Home(id) {
  const [user, setUser] = useState(new User());
  const [userBody, setUserBody] = useState(new bodyData());
  const [todayScore, setTodayScore] = useState(0)
  const [activity, setActivity] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [sessions, setSession] = useState([{}]);
  useEffect(() => {
    getUser(12).then((data) => {
      setUser(data);
      setTodayScore((data.todayScore*100))
      setUserBody(data.getUserBody());
      setActivity(data.getActivity());
      setPerformance(data.getPerformance());
      setSession(data.getSession());
    });
  }, []);

  
  return (
    <div>
      <ProfilHeader name={user.firstName}></ProfilHeader>
      <StyledData>
        <StyledChart>
          <ActivityChart data={activity}></ActivityChart>
          <AverageChart data={sessions}></AverageChart>
          <PerformanceChart data={performance}></PerformanceChart>
          <ScoreChart data={[{"value":todayScore}]}></ScoreChart>
        </StyledChart>

        <StyledBodyInfo>
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
        </StyledBodyInfo>
      </StyledData>
    </div>
  );
}
export default Home;
