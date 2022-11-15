import Container from "@mui/material/Container";

interface SingleColumnProps {
	header: React.ReactNode;
	children: React.ReactNode;
	contained?: boolean;
}
const SingleColumnLayout: React.FC<SingleColumnProps> = ({ header, children, contained }) => {
	return (
		<>
			{header}
			{contained ?
				<Container>
					{children}
				</Container> :
				children
			}
		</>
	)
}

export default SingleColumnLayout;