import Button from "@mui/material/Button";
import { Locales } from "@prisma/client";
import type { NextPage } from "next";
import Link from 'next/link'
import { useRouter } from "next/router";
import Header from "../../../components/layouts/header";
import DefaultSingleColumnLayout from "../../../components/layouts/single_column/default";
import { trpc } from "../../../utils/trpc";

const Band: NextPage = () => {
	const router = useRouter();
	const { data: band } = trpc.useQuery(["band.show", { id: router.query.id as string }]);
	return (
		<DefaultSingleColumnLayout>
			<p>band</p>
			<p>{band?.name[router.locale as keyof Locales]}</p>
			<Link href={`/bands/${router.query.id}/edit`} passHref>
				<Button>Edit</Button>
			</Link>
		</DefaultSingleColumnLayout>
	)
}

export default Band;