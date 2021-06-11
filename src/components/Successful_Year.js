import React, { useEffect ,useState } from 'react';

const Successful_Year = (props) => {
    const {satalite} = props;
     
  
    return (
        <>
            <section className="hs-headings">
                <h2 className="sidebar-title">Filters</h2>
                <h3 className="sidebar-heading">Launch Year</h3>
            </section>
            <section className="left-sidebar successful-year"> 
                <button className="btn-sidebar" value="2006" >2006</button>
                <button className="btn-sidebar" value="2007">2007</button>
                <button className="btn-sidebar" value="2008">2008</button>
                <button className="btn-sidebar" value="2009">2009</button>
                <button className="btn-sidebar" value="2010">2010</button>
                <button className="btn-sidebar" value="2011">2011</button>
                <button className="btn-sidebar" value="2012">2012</button>
                <button className="btn-sidebar" value="2013">2013</button>
                <button className="btn-sidebar" value="2014">2014</button>
                <button className="btn-sidebar" value="2015">2015</button>
                <button className="btn-sidebar" value="2016">2016</button>
                <button className="btn-sidebar" value="2017">2017</button>
                <button className="btn-sidebar" value="2018">2018</button>
                <button className="btn-sidebar" value="2019">2019</button>
                <button className="btn-sidebar" value="2020">2020</button>
            </section>
        </>
    )
}

export default Successful_Year;