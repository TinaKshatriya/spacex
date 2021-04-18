import React,{ useState, useEffect } from "react";

import { useHistory} from 'react-router-dom';
import "./App.css";
import "./index.css";
import axios from "axios";
import styled from "styled-components";
import Header from "./components/shared/header";
import Hero from "./components/hero";
import Section from "./layout/section";
import Wrapper from "./layout/wrapper";
import LaunchCard from "./components/lauch-card/Lauchcard";
import { PropTypes } from 'prop-types';

const MainWrapper = styled.main`
  display: block;
  position: relative;
  width: 100%;

  .grid {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ContentSelector = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  button {
    border: none;
    padding: 10px;
    min-width: 100px;
    margin-right: 10px;
  }
`;


function App(props) {
  const [data, setData] = useState({ launches: [] });
  const [loading, setLoading] = useState(true);
  let history = useHistory();
  const redirect = () => {
    history.push('/src/components/lauch-card/Lauchcard.js');
  }


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.spacexdata.com/v4/launches/past?limit=10"
      );

      console.log(result.data);

      setData({ launches: result.data });
      setLoading(false);
    }
    fetchData();
  }, []);
  

  
  return (
    <MainWrapper>
      <Header />
      <Section>
        <Hero />
      </Section>
      <Section>
        <ContentSelector>
          <button onClick={redirect}>Launches</button>
          
          <button>rockets</button>
        </ContentSelector>
      </Section>
      <Section>
        {loading && <div>loading....</div>
        }
    
        {!loading && (
          <Wrapper>
            
            <LaunchCard  data={data}/> 
          </Wrapper>
        )} 
    
      </Section>
     {/* {JSON.stringify([data])} */}
     
    </MainWrapper>
  );
}

export default App;
