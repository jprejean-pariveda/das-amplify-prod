import React from "react";
import {
  ButtonCheckIn,
  VibeSummary,
  YouthCardCheckedIn,
  YouthCardPickedUp,
  YouthCardDefault,
} from "../ui-components";
import { Link } from "react-router-dom";

import { getSite } from '../services/api.service';
import useStore from '../store/store';
import { gradeMapper } from '../utils/text';


const CheckIn = () => {
  const store = useStore();
  function getCurrentDate() {
    const now = new Date();
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return now.toLocaleDateString("en-US", options);
  }

  const [site, setSite] = React.useState();

  React.useEffect(() => {
    const fetchSiteData = async () => {
      const data = await getSite(store.currentSite.id);
      setSite(data);
      store.setSite(data);
    };
    fetchSiteData();
  }, []);

  const Roster = () => {
    return site?.roster?.map((youth) => {
      const overrides = {
        YouthName: {
          children: youth.fullName,
        },
        YouthGrade: {
          children: gradeMapper(youth.grade),
        },
      };
      if (youth.vibes.length > 0) {
        if (youth.vibes[0].checkOutTime) {
          return <YouthCardPickedUp key={youth?.id} youth={youth} className={'youth-card'} overrides={overrides}/>;
        }
        return <YouthCardCheckedIn key={youth?.id} youth={youth} className={'youth-card'} overrides={overrides}/>
      }
      return <YouthCardDefault key={youth?.id} youth={youth} className={'youth-card'} overrides={overrides}/>
    });
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 20px",
        }}
      >
        <Link to="/roster" style={{ textDecoration: "none" }}>
          <ButtonCheckIn>ButtonCheckIn</ButtonCheckIn>
        </Link>
        <div
          style={{
            fontFamily: "var(--amplify-fonts-default-variable)",
            fontSize: "2em",
            fontWeight: "bold",
          }}
        >
          {getCurrentDate()}
        </div>
        <div>
          <VibeSummary />
        </div>
      </div>
      <div>
        <Roster></Roster>
      </div>
    </div>
  );
};

export default CheckIn;
