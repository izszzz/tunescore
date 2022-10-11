import { Music } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import MusicLayout from "../../../../components/layouts/music";
import { trpc } from "../../../../utils/trpc";

const Issues: NextPage = () => {
	const router = useRouter()
	const handleSubmit = (data: Music) => create.mutate(data)
	const create = trpc.useMutation(["music.create"], {
		onSuccess: () => router.push("/musics"),
		onError: error => console.log(error)
	});
	return (
		<MusicLayout>
			{() =>
				<p>issues</p>
			}
		</MusicLayout>
	)
}

export default Issues;