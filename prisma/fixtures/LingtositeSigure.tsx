import { Prisma } from "@prisma/client"
const lingtositesigure: Prisma.BandCreateInput = {
	name: { ja: "凛として時雨", en: "Ling tosite sigure" },
	artists: {
		create:
			[{
				name: { ja: "TK", en: "TK" },
			},
			{
				name: { ja: "345", en: "345" },
			},
			{
				name: { ja: "ピエール中野", en: "nakano" },
			}]
	},
	musics: {
		createMany: {
			data: [
				{
					type: "COPY",
					visibility: "PUBLIC",
					title: { ja: "abnormalize", en: "abnormalize" },
					score: ""
				},
				{
					type: "COPY",
					visibility: "PUBLIC",
					title: { ja: "Beautiful Circus", en: "Beautiful Circus" },
					score: ""
				},
				{
					type: "COPY",
					visibility: "PUBLIC",
					title: { ja: "Marvelous Persona", en: "Marvelous Persona" },
					score: ""
				}
			]
		}
	}
}

export default lingtositesigure