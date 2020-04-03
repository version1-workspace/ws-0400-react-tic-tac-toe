import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Board from './components/Board';
import Turn from './components/Turn';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Header = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Content = styled.div``;

const Footer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.a`
  display: inline-block;
  text-align: center;
  font-weight: bold;
  border: 3px solid black;
  border-radius: 6px;
  font-weight: bold;
  padding: 4px 16px;
  &:hover {
    background: black;
    color: white;
    cursor: pointer;
  }
`;

const StatusText = styled.div`
  text-align: center;
  padding: 8px;
`;

const CHAR = Object.freeze({
  circle: '○',
  crosse: '×',
});

const STATUS_TEXT = Object.freeze({
  processing: 'processing',
  win: 'win',
  draw: 'draw',
});

const initialState = {
  winner: null,
  turn: CHAR.circle,
  processing: true,
  statusText: STATUS_TEXT.processing,
  handCount: 0,
  isCircleTurn: true,
  board: new Array(9),
};

const checkRow = (board, value, index) => {
  let baseIndex = index - (index % 3);
  for (let i = baseIndex; i < baseIndex + 3; i++) {
    if (board[i] !== value) {
      return false;
    }
  }
  return true;
};

const checkCol = (board, value, index) => {
  let cursor = index;
  for (let i = 0; i < 3; i++) {
    if (board[cursor] !== value) {
      return false;
    }
    cursor = (cursor + 3) % 9;
  }
  return true;
};

const checkDiagonal = (board, value, index) => {
  if (![0, 2, 4, 6, 8].includes(index)) {
    return false;
  }
  return (
    [0, 4, 8].every(item => board[item] === value) ||
    [2, 4, 6].every(item => board[item] === value)
  );
};

const checkWinner = (board, value, index) => {
  return [checkRow, checkCol, checkDiagonal].some(cb =>
    cb(board, value, index),
  );
};

const checkDraw = board => {
  return board.every(item => item);
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {...initialState};
  }

  onRestart = () => {
    this.setState({...initialState});
  };

  onClick = index => {
    const {board, handCount, processing, turn} = this.state;
    if (board[index] || !processing) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = turn;
    this.setState({
      board: newBoard,
      handCount,
      turn: turn === CHAR.circle ? CHAR.crosse : CHAR.circle,
    });

    if (checkWinner(newBoard, turn, index)) {
      this.setState({
        processing: false,
        winner: turn,
        statusText: turn + ' ' + STATUS_TEXT.win,
      });
      return;
    }

    if (checkDraw(newBoard)) {
      this.setState({
        processing: false,
        statusText: STATUS_TEXT.draw,
      });
      return;
    }
  };

  render() {
    const {turn, board, statusText} = this.state;

    return (
      <Container>
        <Content>
          <GlobalStyle />
          <Header>
            <Title>Tic Tac Toe</Title>
            <Turn turns={Object.values(CHAR)} turn={turn} />
          </Header>
          <Board board={board} onClick={this.onClick} />
          <Footer>
            <StatusText>{statusText}</StatusText>
            <Button onClick={this.onRestart}>Restart</Button>
          </Footer>
        </Content>
      </Container>
    );
  }
}
