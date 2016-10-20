'use babel';

import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <figure className="App-Logo">
                    <img src="build/img/logo_3_0.png"/>
                </figure>
                <div className="Doctor-Header">
                    <figure>
                        <img src="build/img/logo_3_0.png"/>
                        <figcaption><div>
                            <div className="Doctor-Name">Dr. Luis Gonzalo Solís</div>
                            <div className="Doctor-Title">Otorrinolaringología</div>
                        </div></figcaption>
                    </figure>
                </div>

            </header>
        );
    }
}
