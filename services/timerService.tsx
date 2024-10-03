import React from 'react';
import {View, Text, Button} from 'react-native';

type State = {
  time: number; // Время в секундах
};

export default class Timer extends React.Component<{}, State> {
  state: State = {
    time: 0,
  };

  interval: NodeJS.Timeout | null = null;

  startTimer = () => {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.setState(prevState => ({
          time: prevState.time + 1,
        }));
      }, 1000);
    }
  };

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  // Функция для форматирования времени в формат MM:SS
  formatTime = (time: number) => {
    const minutes = Math.floor(time / 60); // Число минут
    const seconds = time % 60; // Число секунд
    // Добавляем ведущие нули, если число меньше 10
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  render() {
    this.startTimer();
    return (
      <View>
        <Text style={{color: '#F2F2F2', fontSize: 16, fontWeight: 900}}>
          {this.formatTime(this.state.time)}
        </Text>
      </View>
    );
  }
}
