import React from 'react';

const FeaturesItem = ({feature}) => {
    const {icon, title, count} = feature;

    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="d-flex align-items-center shadow features-item">
                <img className="feature-icon" src={icon} alt=""/>
                <div className="text-center mx-auto">
                    <h6 className="gray-text font-weight-bold">{count}</h6>
                    <h6 className="gray-text font-weight-bold">{title}</h6>
                </div>
            </div>
        </div>
    );
};

export default FeaturesItem;