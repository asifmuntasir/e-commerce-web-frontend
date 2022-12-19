import React from 'react';
import styled from 'styled-components';


const Home = () => {
    return (
        <Wrapper className='test'>
            This is Home page!
        </Wrapper>
    );
}

const Wrapper = styled.section`
    font-size: 20px;
    height: 100vh;
`;

export default Home;
