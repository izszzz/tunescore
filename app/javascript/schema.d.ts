declare namespace schema {
	type Music = {
		id: number;
		userId?: number | null;
		bandId?: number | null;
		title: string;
		score: string;
		price: number;
		status: boolean;
		bookmarksCount: number;
		createdAt: string;
		updatedAt: string;
		user?: User;
		band?: Band;
	}

	type Band = {
		id: number;
		name: string;
		bookmarksCount: number;
		createdAt: string;
		updatedAt: string;
	}

	type Artist = {
		id: number;
		name: string;
		bookmarksCount: number;
		createdAt: string;
		updatedAt: string;
	}

	type Album = {
		id: number;
		title: string;
		bookmarksCount: number;
		createdAt: string;
		updatedAt: string;
	}

	type User = {
		id: number;
		email: string;
		password?: string | null;
		resetPasswordToken?: string | null;
		resetPasswordSentAt?: string | null;
		rememberCreatedAt?: string | null;
		nickname: string;
		image?: string | null;
		familyname: string;
		givenname: string;
		introduction: string;
		birthday?: string | null;
		gender?: number | null;
		followingCount: number;
		followersCount: number;
		createdAt: string;
		updatedAt: string;
		musics?: Music[];
	}

	type AdminUser = {
		id: number;
		email: string;
		password?: string | null;
		resetPasswordToken?: string | null;
		resetPasswordSentAt?: string | null;
		rememberCreatedAt?: string | null;
		createdAt: string;
		updatedAt: string;
	}


}
