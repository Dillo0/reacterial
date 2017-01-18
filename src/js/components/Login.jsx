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
                    <img src="build/img/logo.png"/>
                </figure>
                <article>
                    <div><Input floatingLabelText="Username"/></div>
                    <div><Input floatingLabelText="Password" type="password"/></div>
                    <div className="toggleWrapper">
                        <Toggle label="Keep me connected" labelPosition="right"/>
                    </div>
                    <div className="btnWrapper">
                        <RButton label="LOGIN" primary={true} backgroundColor="#60c7f8"/>
                    </div>
                    <div className="btnWrapper">
                        <FButton label="I FORGOT MY PASSWORD" />
                    </div>
                    <div className="loginDisclaimer">
                        Reacterial, 2017 &copy;
                    </div>
                </article>
            </section>
        );
    }

}
