import { useState, useEffect } from 'react';
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { GlobalStyle } from './GlobalStyle';
import { Layout } from "./Layout/Layout";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const onLeaveFeedback = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        return setGood(prevState => prevState + 1);
      case 'neutral':
        return setNeutral(prevState => prevState + 1);
      case 'bad':
        return setBad(prevState => prevState + 1);
      default:
    }
  };

   useEffect(() => {
    setTotal(total => good + bad + neutral)
  });

  useEffect(() => {
    if (good === 0) {
      return;
    }
    setPositivePercentage(positivePercentage => Number(((good / total) * 100).toFixed()));
  });

    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onClick={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics 📊">
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
        <GlobalStyle />
      </Layout>
    );
};



// export class App extends Component{
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   totalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   positivePercentage() {
//     const { good } = this.state;
//     return Number(((good / this.totalFeedback()) * 100).toFixed());
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//      const options = Object.keys(this.state);
//       const total = this.totalFeedback();
//       const totalPercentage = this.positivePercentage();
//     return (
//       <Layout>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             onLeaveFeedback={this.onLeaveFeedback}
//             options={options}
//           />
//         </Section>
//         <Section title="Statistics 📊">
//           {total !== 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={totalPercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//         <GlobalStyle />
//       </Layout>
//     );
//   }
// }
