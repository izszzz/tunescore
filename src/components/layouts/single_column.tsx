import Container from "@mui/material/Container";
import Header from "../elements/Header";

interface SingleColumnProps {
	children: React.ReactNode;
}
const SingleColumn: React.FC<SingleColumnProps> = ({ children }) => {
	return (
		<>
			<Header />
			<Container>
				{children}
			</Container>
		</>
	)
}

export default SingleColumn;