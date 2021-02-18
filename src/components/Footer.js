import styled from 'styled-components';
import {HashRouter as Router, Link} from 'react-router-dom';

const Foot= styled.footer`
    background:red;
`;


function Footer () {
    return (
        <Foot>
            <div className="wrapper">
            Footer
            </div>
            {/*<div>
                <header>Products</header>
                <ul>
                    <li><Link></Link></li>
                </ul>
            </div>
            <div>

            </div>*/}
            
        </Foot>
    )
}

export default Footer;