import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
`;

const RowContainer = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  &:last-child {
    border-bottom: 0;
  }
`;
const Cell = styled.div`
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  text-align: center;
  border-right: 1px solid black;
  &:hover {
    cursor: pointer;
  }
  &:last-child {
    border-right: 0;
  }
`;

const Row = ({board, index, onClick}) => {
  return (
    <RowContainer>
      {new Array(3).fill('').map((_, colIndex) => {
        const _index = 3 * (index - 1) + colIndex;
        const _onClick = () => onClick(_index)
        return <Cell key={_index} onClick={_onClick}>{board[_index]}</Cell>;
      })}
    </RowContainer>
  );
};

const Board = ({board, onClick}) => {
  return (
    <Container>
      <Row board={board} index={1} onClick={onClick}/>
      <Row board={board} index={2} onClick={onClick}/>
      <Row board={board} index={3} onClick={onClick}/>
    </Container>
  );
};

export default Board;
