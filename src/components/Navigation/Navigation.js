import React from 'react';
import 'tachyons';
import Logo from '../Logo/Logo';

const Navigation = (props) => {
    const {isSignedIn,onRouteChange} = props
    if(isSignedIn){
        return(
            <nav class="dt w-100 border-box pt3 ph5-ns" >
                <Logo/>
                <div class="dtc v-mid w-75 tr">
                    <p class="link dim black f3 dib mr3 mr4-ns underline pointer" onClick={() => {onRouteChange('signOut')}}>Sign Out</p>
                </div>
            </nav>
        );
    }else{
        return(
            <nav class="dt w-100 border-box pt3 ph5-ns" >
                <Logo/>
                <div class="dtc v-mid w-75 tr">
                    <p class="link dim black f3 dib mr3 mr4-ns underline pointer" onClick={() => {onRouteChange('signIn')}}>Sign In</p>
                    <p class="link dim black f3 dib mr3 mr4-ns underline pointer" onClick={() => {onRouteChange('register')}}>Register</p>
                </div>
            </nav>
        );
    }
}

export default Navigation;