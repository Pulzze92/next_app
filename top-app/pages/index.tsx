import Head from 'next/head';
import Image from 'next/image';
import { Htag, Paragraph } from '../components';
import { Button } from '../components';

export default function Home(): JSX.Element {
  
  return (
    <div>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance='primary' arrow="right">Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка 2</Button>
      <Paragraph size={'S'}>jiojiojiojafofioaw</Paragraph>
    </div>
  );
}
