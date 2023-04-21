import React, { useEffect, useState } from 'react';
import { Button, Htag, Ptag, Tag } from '../components';
import { Rating } from '../components/Rating/Rating';

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);


	return (
		<>
			<Htag tag='h2'>Title</Htag>
			<Button appearance='primary' arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>

			<Ptag size='s'>Текст</Ptag>
			<Ptag size='m'>Текст</Ptag>
			<Ptag size='l'>Текст</Ptag>

			<Tag color='green' size='s'>Текст</Tag>
			<Tag color='primary' size='s'>Текст</Tag>
			<Tag color='red' size='m'>Текст</Tag>
			<Tag color='ghost' size='s'>Текст</Tag>

			<Rating rating={rating} isEditable setRating={setRating} />
		</>
	);
}
