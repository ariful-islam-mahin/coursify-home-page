import React, { useEffect, useState } from 'react';
import FeaturesItem from '../FeaturesItem/FeaturesItem';
import FeaturesData from './FeaturesData';

const Features = () => {
    const [features, setFeatures] = useState([])

    useEffect(() => {
        setFeatures(FeaturesData)
    }, [])

    return (
        <section className="px-5 py-5 mx-auto">
            <div className="row">
                {
                    features.map((feature, idx) => <FeaturesItem feature={feature} key={idx}/>)
                }
            </div>
        </section>
    );
};

export default Features;