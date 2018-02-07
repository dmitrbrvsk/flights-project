import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

import { Card, Icon } from 'semantic-ui-react'

const Flight = styled.div`
	display: inline-block;
	margin-top: 25px;
	vertical-align: middle;
	transition: transform 200ms ease;
	cursor: pointer;

	&:hover {
		transform: translateY(-10px);
	}

	@media (min-width: 768px) {
		&:nth-child(2n+1) {
			margin-right: 20px;
		}

		&:last-child {
			margin: 25px 0;
		}
	}

	@media (max-width: 768px) {
		&:last-child {
			margin-bottom: 25px;
		}
	}
`

const ArrowUp = styled.div`
	display: inline-block;
	transform: rotate(0);
`

const ArrowDown = styled.div`
	display: inline-block;
	transform: rotate(90deg);
`
const CardFlightHead = styled.div`
	width: 260px;
	word-wrap: break-word;
`

const CardFlight = props => (
	<Flight>
		<Card>
			<Card.Content>
				<Card.Header>
					<CardFlightHead>
						{props.data.direction.from} - {props.data.direction.to}
					</CardFlightHead>
				</Card.Header>
				<Card.Meta>
					<span className='date'>рейс № {props.data.id}</span>
				</Card.Meta>
				<Card.Description>
					<div className='arrival'>
						<ArrowUp> <Icon name='plane' /></ArrowUp>
						{moment(props.data.arrival).format('DD.MM.YYYY, h:mm')}
					</div>
					-
					<div className='departure'>
						<ArrowDown><Icon name='plane' /></ArrowDown>
						{moment(props.data.departure).format('DD-MM-YYYY, h:mm')}
					</div>
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Icon name='building' />
				{props.data.carrier}
			</Card.Content>
		</Card>
	</Flight>
)

export default CardFlight