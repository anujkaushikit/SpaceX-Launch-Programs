import React, { useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';
import Postitem from '../components/Postitem';
import Developedby from '../components/Developedby';

import './layout.css';
import './Filter.css';
import { years } from './years.const';

const Filter = () => { 

    const [data, setData] = useState([]);
    const [selectedYear, setSelectedYearYear] = useState([]);
    const [launchStatus, setLaunchStatus] = useState();
    const [landingStatus, setLandingStatus] = useState();

    const getFilterData = async (year,launch=true, landing=true ) => {
        let url = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=${landing}`;
        if(year) {
            url += `&launch_year=${year}`
        }
        try {
            const resData = await fetch(url);
            const actualData = await resData.json();
            console.log(actualData)
            setData(actualData); 
        } catch (error) {
            console.log("error is ", error);
        }
    }
    

    useEffect(() => {
        getFilterData();
    },[]);

 

    return (
        <>
            <div className="outer-conatainer">
                <PageTitle />
                <div className="hs-container">
                    <div className="left-col">
                        <section className="hs-headings">
                            <h2 className="sidebar-title">Filters</h2>
                            <h3 className="sidebar-heading">Launch Year</h3>
                        </section>
                        <section className="left-sidebar successful-year">
                            {years.map((year, index) => {
                                return <button key={ index } className={`btn-sidebar ${year === selectedYear ? 'active' : ''}`} value="year" onClick={() => {
                                    setSelectedYearYear(year);
                                    getFilterData(year, launchStatus, landingStatus);
                                }}>{year}</button>
                            })}
                            
                        </section>


                        <section className="hs-headings">
                            <h3 className="sidebar-heading">Successful Launch</h3>
                        </section>
                        <section className="left-sidebar successful-launch">
                            <button className={`btn-sidebar ${launchStatus == true? 'active' : ''}`} value="True" onClick={() => {
                                setLaunchStatus(true)
                                getFilterData(selectedYear, true, landingStatus);
                            }}>True</button>
                            <button className={`btn-sidebar ${launchStatus == false? 'active' : ''}`} value="False" onClick={() => {
                                setLaunchStatus(false)
                                getFilterData(selectedYear, false, landingStatus);
                            }}>False</button>
                        </section>



                        <section className="hs-headings">
                            <h3 className="sidebar-heading">Successful Landing</h3>
                        </section>
                        <section className="left-sidebar successful-landing">
                        <button className={`btn-sidebar ${landingStatus == true ? 'active' : ''}`} value="True" onClick={() => {
                                setLandingStatus(true)
                                getFilterData(selectedYear, launchStatus, true);
                            }}>True</button>
                            <button className={`btn-sidebar ${landingStatus == false ? 'active' : ''}`} value="False" onClick={() => {
                                setLandingStatus(false)
                                getFilterData(selectedYear, launchStatus, false);
                            }}>False</button>
                        </section> 
                    </div>
                    <div className="right-col">
                        <section className="right-container"> 
                            {data.length ? data.map((satalite, index) => {
                                return <Postitem key={index} satalite={satalite} />
                            }) : 'No results to show!'}

                        </section>
                    </div>
                </div>
                <Developedby />
                
            </div>
        </>
    )
}
export default Filter;