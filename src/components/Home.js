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
    background-color: ${({ theme }) => theme.colors.bg};
    width: 30%;
`;

export default Home;
