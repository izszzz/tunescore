import Button from "@mui/material/Button";
import type { NextPage } from "next";
import Link from 'next/link'
import { useRouter } from "next/router";
import Header from "../../../components/layouts/header";
import SingleColumnLayout from "../../../components/layouts/single_column";
import { trpc } from "../../../utils/trpc";

const Band: NextPage = () => {
	const router = useRouter();
	const { data: band } = trpc.useQuery(["band.show", { id: router.query.id as string }]);
	return (
		<SingleColumnLayout header={<Header />}>
			<p>band</p>
			<p>{band?.name}</p>
			<Link href={`/bands/${router.query.id}/edit`} passHref>
				<Button>Edit</Button>
			</Link>
		</SingleColumnLayout >
	)
}

export default Band;