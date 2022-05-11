import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Htag, Paragraph, Rating, Tag } from '../components';
import { Button } from '../components';
import { Layout, withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>{counter}</Htag>
      <Button appearance='primary' arrow="right" onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка 2</Button>
      <Paragraph size={'S'}>jiojiojiojafofioaw</Paragraph>
      <Tag size="M" color='green'>Hi</Tag>
      <Tag size="M" color='red'>Bye</Tag>
      <Tag size="M" color='gray'>Hi</Tag>
      <Tag size="M" color='primary'>Bye</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
    </>
  );
}

export default withLayout(Home);