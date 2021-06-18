import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import 'antd/dist/antd.less'
import './App.css'
import { happyNewYearMsgList } from './config/happyNewYearMsg.config'
import { Button, message } from 'antd';

function App() {
  const msgList = happyNewYearMsgList;

  const [count, setCount] = useState<number>(-1)
  const [displayMsg, setDisplayMsg] = useState<string>('快摇一摇试试吧！')

  useEffect(() => {
    if (count !== -1) {
      const msg = getFormattedMessage(msgList[count])
      setDisplayMsg(msg)
    }

    return () => {}
  }, [count])

  const randomMessageIndex = () => {
    const randomCount = Math.floor(Math.random() * msgList.length)
    setCount(randomCount)
  }

  const copyMessage = async () =>{
    try {
      await navigator.clipboard.writeText('Yo')

      message.success('复制成功，快去粘贴吧。')
    } catch (error) {
      message.error(error)
    }
  }

  const getFormattedMessage = (msg: string) => {
    return msg.replace(/\${YEAR}/g, `${(new Date()).getFullYear()+1}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>随机选个新年祝福语</h1>
        <p>
          <Button type="primary" size="large" onClick={randomMessageIndex}>
            摇一摇
          </Button>
        </p>
        <br/>
        <p className="msg-box" onClick={copyMessage}>
          {displayMsg}
        </p>
      </header>
    </div>
  )
}

export default App
