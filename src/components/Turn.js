import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const TurnElement = styled.div`
  padding: 8px 16px;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: ${({isTurn}) => (isTurn ? '3px solid black' : '0')};
`;

const Turn = ({turns, turn}) => {
  return (
    <Container>
      {turns.map(item => {
        const isTurn = item === turn;
        return (
          <TurnElement key={item} isTurn={isTurn}>
            {item}
          </TurnElement>
        );
      })}
    </Container>
  );
};

export default Turn;
