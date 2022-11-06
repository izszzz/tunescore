import type { NextPage } from "next";
import BandLayout from "../../../components/layouts/band";
import DefaultSettingsForm from "../../../components/elements/form/settings/default"
import { Prisma } from "@prisma/client";

const EditBand: NextPage = () => {
	return (
		<BandLayout>
			{({ data, isLoading }) => {
				return (
					<>
						<DefaultSettingsForm<Prisma.BandGetPayload<{ include: { musics: { include: { composers: true, lyrists: true } }, artists: true } }>>
							data={data}
							isLoading={isLoading}
							resource="band"
							name="name" />
					</>
				)
			}}
		</BandLayout>
	)
}
export default EditBand;