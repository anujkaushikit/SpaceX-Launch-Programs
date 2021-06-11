import React, { useEffect ,useState } from 'react';

const Postitem = (props) => {
   const {satalite} = props 
    return (
        <>
        
            <template className="template-item">
                <div className="template-item-inner">  
                    <img src={satalite.links.mission_patch} alt={satalite.mission_name} title={satalite.mission_name} />  
                    <h2 className="template-title">{satalite.mission_name}</h2> 
                    <h3 className="lds">Mission lds:{satalite.mission_id} </h3>
                    <h3 className="Year">Launch Year:{satalite.launch_year} </h3>
                    <h3 className="Launch">Successful Launch:{satalite.launch_success ? "true": "false"} </h3> 
                    <h3 className="Landing">Successful Landing:{satalite.rocket.first_stage.cores[0].land_success ? "true": "false"}</h3>
                </div>
               
            </template>
        </> 
 
 

    )
}
export default Postitem;