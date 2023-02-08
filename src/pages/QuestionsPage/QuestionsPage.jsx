import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './QuestionsPage.module';
import {
  NumberEighthIllustration,
  NumberFiveIllustration,
  NumberFourIllustration,
  NumberNineIllustration,
  NumberOneIllustraion,
  NumberSevenIllustration,
  NumberSixIllustration,
  NumberTenIllustration,
  NumberThreeIllustration,
  NumberTwoIllustration,
  NumberZeroIllustration,
  QuestionsIllustration,
} from './svgs';

const cn = classNames.bind(styles);

const NUMBER_COMPONENTS = new Array(
  <NumberZeroIllustration />,
  <NumberOneIllustraion />,
  <NumberTwoIllustration />,
  <NumberThreeIllustration />,
  <NumberFourIllustration />,
  <NumberFiveIllustration />,
  <NumberSixIllustration />,
  <NumberSevenIllustration />,
  <NumberEighthIllustration />,
  <NumberNineIllustration />,
  <NumberTenIllustration />
);

export default function QuestionsPage() {
  const [number, setNumber] = useState(NUMBER_COMPONENTS.length - 1);

  useEffect(() => {
    const timer =
      number > 0 && setInterval(() => setNumber((prev) => prev - 1), 1000);

    return () => {
      clearInterval(timer);
    };
  }, [number]);

  return (
    <section className={cn('question-section')}>
      <div className={cn('question-section-content')}>
        <h1 className={cn('question-section-content__heading')}>
          Time for questions:
        </h1>

        <div className={cn('question-section-content__countdown')}>
          {NUMBER_COMPONENTS[number]}
        </div>
      </div>

      <QuestionsIllustration className={cn('question-section__illustration')} />
    </section>
  );
}
