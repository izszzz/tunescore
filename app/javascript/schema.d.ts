declare namespace schema {
	interface Music {
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

	interface Band {
		id: number;
		name: string;
		bookmarksCount: number;
		createdAt: string;
		updatedAt: string;
	}

	interface Artist {
		id: number;
		name: string;
		bookmarksCount: number;
		createdAt: string;
		updatedAt: string;
	}

	interface Album {
		id: number;
		title: string;
		bookmarksCount: number;
		createdAt: string;
		updatedAt: string;
	}

	interface User {
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

	interface AdminUser {
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
