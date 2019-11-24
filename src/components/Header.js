import React from 'react';

function Header({tagline}){
    return(
        <header className="top">
            <h1>Catch 
                <span className="ofThe">
                    <span className="of">of</span>
                    <span className="The">The</span>
                </span> 
                Day
            </h1>

            <h3 className="tagline">
                <span>{tagline}</span>
            </h3>
        </header>
    );
}


export default Header;