import type { NextPage } from "next";
import BandLayout from "../../../components/layouts/show/band";
import DefaultSettingsForm from "../../../components/elements/form/settings/default";
import { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { trpc } from "../../../utils/trpc";
const EditBand: NextPage = () => {
  const router = useRouter();
  const { data } = trpc.useQuery([
    "band.findUniqueBand",
    {
      where: { id: router.query.id as string },
      include: {
        artists: true,
        musics: {
          include: {
            band: true,
            composers: true,
            lyrists: true,
          },
        },
      },
    },
  ]);
  if (!data) return <></>;
  const bandData = data as Prisma.BandGetPayload<{
    include: {
      artists: true;
      musics: {
        include: {
          band: true;
          composers: true;
          lyrists: true;
        };
      };
      bookmarks: true;
    };
  }>;
  return (
    <BandLayout data={bandData} activeTab="settings">
      <DefaultSettingsForm<Prisma.BandGetPayload<null>>
        data={data}
        name="name"
      />
    </BandLayout>
  );
};
export default EditBand;
