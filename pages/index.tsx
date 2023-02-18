import React from 'react';
import { Button, Htag, Ptag, Tag } from '../components';

export default function Home(): JSX.Element {

	return (
		<>
			<Htag tag='h2'>Text</Htag>
			<Button appearance='primary'>Кнопка</Button>
			<Button appearance='ghost' arrow='right'>Кнопка</Button>

			<Ptag size='s'>Текст</Ptag>
			<Ptag size='m'>Текст</Ptag>
			<Ptag size='l'>Текст</Ptag>

			<Tag color='green' size='s'>Текст</Tag>
			<Tag color='primary' size='s'>Текст</Tag>
			<Tag color='red' size='m'>Текст</Tag>
			<Tag color='ghost' size='s'>Текст</Tag>
		</>
	);
}
