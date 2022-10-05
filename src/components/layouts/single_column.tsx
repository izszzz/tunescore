import Header from "../elements/Header";

interface SingleColumnProps {
	children: React.ReactNode;
}
const SingleColumn: React.FC<SingleColumnProps> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
}

export default SingleColumn;