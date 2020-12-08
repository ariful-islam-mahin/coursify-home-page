import React from 'react';

const Solve = () => {
    return (
        <section className="px-4">
            <div className="row d-flex align-items-center">
                <div className="col-md-7">
                    <h1 className="font-weight-bold hero-text mb-5">
                        Solve your doubts <span className="blue-text">faster.</span>
                    </h1>
                    <div className="d-flex">
                        <img className="solve-icon" src="https://coursify.co.in/static/images/global-network.png" alt=""/>
                        <div className="ml-4">
                            <h4 className="font-weight-bold">Accessible everywhere</h4>
                            <p>Access to quality education anytime, anywhere</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <img className="solve-icon" src="https://coursify.co.in/static/images/presentation.png" alt=""/>
                        <div className="ml-4">
                            <h4 className="font-weight-bold">1 million+ videos</h4>
                            <p>Unlimited access to video solutions</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <img src="https://www.csudh.edu/Assets/csudh-sites/dhfye/images/summer-transition.png" alt="" className="w-100"/>
                </div>
            </div>
        </section>
    );
};

export default Solve;