import Container from "@mui/material/Container";

interface SingleColumnProps {
	header: React.ReactNode;
	children: React.ReactNode;
}
const SingleColumnLayout: React.FC<SingleColumnProps> = ({ header, children }) => {
	return (
		<>
			{header}
			<Container>
				{children}
			</Container>
		</>
	)
}

export default SingleColumnLayout;