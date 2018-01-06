import React from 'react';

export const NavBar = () => {
    return (
        <div className={'header-container'}>
            <div className={'header container-fluid col-12 col-lg-8 col-md-8 col-sm-10'}>
                <h1><span className={'bold-header'}>Github</span> <span className={'thin-header'}>Jobs</span></h1>
            </div>
        </div>
    )
}

export default NavBar;