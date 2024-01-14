import { useState } from 'react'

const Statistic = ({ good, neutral, bad, all, average, positivePercentage }) => {
  if (isNaN(all) || all === 0) {
    return <div>no feedback given</div>
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average.toFixed(1)}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{positivePercentage.toFixed(1)} %</td>
        </tr>
      </tbody>
    </table>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  const all = good + neutral + bad;
  const average = all ? (good - bad) / all : 0
  const positivePercentage = all ? (good / all) * 100 : 0

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>

      <h1>statistics</h1>
      <Statistic good={good} bad={bad} neutral={neutral} all={all} average={average} positivePercentage={positivePercentage} />
    </div>
  )
}

export default App
