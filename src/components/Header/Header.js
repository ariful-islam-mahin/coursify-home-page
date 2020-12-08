import React from 'react';

const Header = () => {
    return (
        <section className="px-4 my-5 py-3 header">
            <div className="row mx-auto d-flex align-items-center">
                <div className="col-md-6 text-center">
                    <h1 className="hero-text font-weight-bold">
                        Clarify your <span className="blue-text">doubts</span> in your language.
                    </h1>
                    <button className="btn btn-danger my-5">Ask your doubt now</button>
                </div>
                <div className="col-md-6">
                    <div className="header-iframe ">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/2YyTcUES0mI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;