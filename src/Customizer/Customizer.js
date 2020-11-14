import React from 'react';
import PartType from './PartType';


function Customizer(props) {
    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + "-" + idx;
        return (
            
            <PartType 
                key={featureHash}
                featureHash={featureHash}
                name={feature}
                options={props.features[feature]}
                updateFeature={props.updateFeature}
                selected={props.selected}
                />
        )
    });
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <div>
                {features}
            </div>
        </form>
    )
}

export default Customizer;