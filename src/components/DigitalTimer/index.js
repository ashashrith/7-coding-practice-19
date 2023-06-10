// Write your code here
import {Component} from 'react'

import './index.css'

class DegitalTimer extends Component {
  state = {
    date: new Date(),
    isPause: false,
    time: 25,
  }

  componentDidMount() {
    const {isPause} = this.state
    if (isPause) {
      this.timer = setInterval(this.tick, 1000)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  onClickPause = () => {
    const {isPause} = this.state
    this.setState(PrevState => ({isPause: !PrevState.isPause}))

    if (!isPause) {
      clearInterval(this.timer)
    } else {
      this.componentDidMount()
    }
  }

  onClickDec = () => {
    const {time, isPause} = this.state
    if (time !== 0 && !isPause) {
      this.setState(PrevState => ({time: PrevState.time - 1}))
    }
  }

  onClickInc = () => {
    const {isPause} = this.state
    if (!isPause) {
      this.setState(PrevState => ({time: PrevState.time + 1}))
    }
  }

  onClickRestart = () => {
    const {isPause} = this.state
    if (!isPause) {
      this.setState({time: 25})
      this.setState({isPause: true})
      clearInterval(this.timer)
    }
  }

  render() {
    const {date, isPause, time} = this.state
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const btnText = isPause ? 'Pause' : 'Start'

    const imgUrl = isPause
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    const altText = isPause ? 'pause icon' : 'play icon'

    return (
      <div className="bg-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="row-cont">
          <div className="container">
            <div className="cont">
              <h1 className="timer">
                {minutes}:{seconds}
              </h1>
              <p className="time-state">{isPause ? 'Running' : 'Paused'}</p>
            </div>
          </div>
          <div className="mini">
            <div className="time-cont">
              <div className="div">
                <button
                  type="button"
                  className="btn"
                  onClick={this.onClickPause}
                >
                  <img src={imgUrl} alt={altText} className="btn-img" />
                </button>
                <button
                  type="button"
                  className="btn-text"
                  onClick={this.onClickPause}
                >
                  {btnText}
                </button>
              </div>
              <div className="div">
                <button
                  type="button"
                  className="btn"
                  onClick={this.onClickRestart}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="btn-img"
                  />
                </button>
                <button type="button" className="btn-text">
                  Restart
                </button>
              </div>
            </div>
            <p className="p">Set Timer Limit</p>
            <div className="last">
              <button
                className="symbol"
                type="button"
                onClick={this.onClickDec}
              >
                -
              </button>
              <div className="final">
                <p className="time">{time}</p>
              </div>
              <button
                className="symbol"
                type="button"
                onClick={this.onClickInc}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DegitalTimer
