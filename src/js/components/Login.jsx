'use babel';

import React from 'react';
import Input from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RButton from 'material-ui/RaisedButton';
import FButton from 'material-ui/FlatButton';

export default class Login extends React.Component {
    render() {
        return (
            <section className="loginWrapper">
                <figure>
                    <img src="build/img/logo_3_0.png"/>
                </figure>
                <article>
                    <div><Input floatingLabelText="Usuario"/></div>
                    <div><Input floatingLabelText="Contraseña" type="password"/></div>
                    <div className="toggleWrapper">
                        <Toggle label="Mantenerme conectado" labelPosition="right"/>
                    </div>
                    <div className="btnWrapper">
                        <RButton href="home.html" label="INICIAR SESIÓN" primary={true} backgroundColor="#60c7f8"/>
                    </div>
                    <div className="btnWrapper">
                        <FButton label="OLVIDÉ CONTRASEÑA" />
                    </div>
                    <div className="loginDisclaimer">
                        Virtually Up-To-Date Inc. All rights reserved. Copyright 2016 &copy;
                    </div>
                </article>
            </section>
        );
    }

}
