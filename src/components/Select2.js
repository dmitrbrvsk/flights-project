import React from 'react'
import styled from 'styled-components'

const Dropdown = styled.div`
	display: block;
	position: relative;
	width: 600px;
	margin-top: 25px;
	padding: 0;
	background-color: #f3f3f3;
	border: 1px solid #bbb;
	border-radius: 5px;

	&:after {
		content: '';
		position: absolute;
		top: 50%;
		right: 1em;
		margin-top: -4px;
		width: 9px;
		height: 8px;
		background: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 12'%3E%3Cpolygon fill='rgb(102, 102, 102)' points='8,12 0,0 16,0'/%3E%3C/svg%3E') 0 0 no-repeat;
		z-index: 2;
		pointer-events: none;
	}

	@media (max-width: 767px) {
		width: 90%;
	}
`

const Select = styled.select`
	width: 100%;
	margin: 0;
	color: #444;
	padding: 10px;
	background: none;
	border: 1px solid transparent;
	outline: none;
	font-size: 16px;
	line-height: 1.3;
`

const Select2 = props => {
	return (
		<Dropdown>
			<Select onChange={props.onChange} value={props.value || props.defaultValue}>
				{props.items.map((item, indx) => {
					return (<option key={indx} value={item}>{item}</option>)
				})}
			</Select>
		</Dropdown>
	)
}

export default Select2