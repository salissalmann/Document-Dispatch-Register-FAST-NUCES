import React from 'react';
import Navigation from './Navigation';
import "./Styles/Dashboard.css"

const ExamplePage = () => {


  return (
    <>
        <Navigation/>
        <div className="container my-5">
                <div className='home-page-text-1'>
                    <h1>Document Analytics</h1>
                </div>
        </div>

        <div className="container" id="Main">
            <div className="Display">
                <h5>Documents Dispatched Today</h5>
                <h5>3</h5>
            </div>

            <div className="Display">
                <h5>Documents Dispatched This Week</h5>
                <h5>7</h5>
            </div>

            <div className="Display">
                <h5>Documents Dispatched This Month</h5>
                <h5>21</h5>
            </div>

            <div className="Display">
                <h5>Documents Dispatched This Year</h5>
                <h5>102</h5>
            </div>

            <div className="Display-1">
                <h5>Documents Dispatched:</h5>
                <h5>131</h5>
            </div>
            <div className="Display-1">
                <h5>Documents Pending</h5>
                <h5>41</h5>
            </div>
        </div>


    
    </>
  );
};

export default ExamplePage;
