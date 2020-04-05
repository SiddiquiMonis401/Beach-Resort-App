import styled from 'styled-components'
import defaultImage from '../images/defaultBcg.jpeg'

const Badge=styled.header`
background-image:url(${props=>props.image || defaultImage}); 
background-repeat: no-repeat;
background-size: cover;
background-position:relative;
width: 100vw;
height: 40vw;
`;
export default Badge;