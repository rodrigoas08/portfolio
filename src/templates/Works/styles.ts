import styled from "styled-components";

export const Content = styled.div`
	height: calc(100vh - 180px);
	width: 100%;
	border: 1px solid white;
	> table {
		border: none;
		width: 100%;
		max-height: 100%;
		position: relative;
		font-size: 2rem;
		padding: 2rem;
	}
`;

export const Tr = styled.tr`
	border: 1px solid white;
`;

export const Td = styled.td`
	padding: 2rem;
	box-shadow: 4px 4px 4px 2px black;
`;
