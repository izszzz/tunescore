import type { Account } from "@prisma/client";
import type { Session } from "@prisma/client";
import type { User } from "@prisma/client";
import type { Follow } from "@prisma/client";
import type { VerificationToken } from "@prisma/client";
import type { Music } from "@prisma/client";
import type { Album } from "@prisma/client";
import type { Artist } from "@prisma/client";
import type { Band } from "@prisma/client";
import type { Issue } from "@prisma/client";
import type { Pull } from "@prisma/client";
import type { Vote } from "@prisma/client";
import type { Comment } from "@prisma/client";
import type { Bookmark } from "@prisma/client";
import type { Participation } from "@prisma/client";
import type { Role } from "@prisma/client";
import type { RoleMap } from "@prisma/client";
import type { Tag } from "@prisma/client";
import type { TagMap } from "@prisma/client";
import type { Notification } from "@prisma/client";
import type { MusicType } from "@prisma/client";
import type { Visibility } from "@prisma/client";
import type { PullStatus } from "@prisma/client";
import type { CommentType } from "@prisma/client";
import type { BookmarkType } from "@prisma/client";
import type { TagType } from "@prisma/client";
import type { NotificationType } from "@prisma/client";
import { Prisma } from "@prisma/client";
import { Resolver } from "@quramy/prisma-fabbrica/lib/internal";
export { initialize, resetSequence, registerScalarFieldValueGenerator, resetScalarFieldValueGenerator } from "@quramy/prisma-fabbrica/lib/internal";
declare type BuildDataOptions = {
    readonly seq: number;
};
declare type AccountuserFactory = {
    _factoryFor: "User";
    build: () => PromiseLike<Prisma.UserCreateNestedOneWithoutAccountsInput["create"]>;
};
declare type AccountFactoryDefineInput = {
    id?: string;
    type?: string;
    provider?: string;
    providerAccountId?: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
    user: AccountuserFactory | Prisma.UserCreateNestedOneWithoutAccountsInput;
};
declare type AccountFactoryDefineOptions = {
    defaultData: Resolver<AccountFactoryDefineInput, BuildDataOptions>;
};
interface AccountFactoryInterface {
    readonly _factoryFor: "Account";
    build(inputData?: Partial<Prisma.AccountCreateInput>): PromiseLike<Prisma.AccountCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.AccountCreateInput>): PromiseLike<Prisma.AccountCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.AccountCreateInput>[]): PromiseLike<Prisma.AccountCreateInput[]>;
    pickForConnect(inputData: Account): Pick<Account, "id">;
    create(inputData?: Partial<Prisma.AccountCreateInput>): PromiseLike<Account>;
    createList(inputData: number | readonly Partial<Prisma.AccountCreateInput>[]): PromiseLike<Account[]>;
    createForConnect(inputData?: Partial<Prisma.AccountCreateInput>): PromiseLike<Pick<Account, "id">>;
}
/**
 * Define factory for {@link Account} model.
 *
 * @param options
 * @returns factory {@link AccountFactoryInterface}
 */
export declare function defineAccountFactory(options: AccountFactoryDefineOptions): AccountFactoryInterface;
declare type SessionuserFactory = {
    _factoryFor: "User";
    build: () => PromiseLike<Prisma.UserCreateNestedOneWithoutSessionsInput["create"]>;
};
declare type SessionFactoryDefineInput = {
    id?: string;
    sessionToken?: string;
    expires?: Date;
    user: SessionuserFactory | Prisma.UserCreateNestedOneWithoutSessionsInput;
};
declare type SessionFactoryDefineOptions = {
    defaultData: Resolver<SessionFactoryDefineInput, BuildDataOptions>;
};
interface SessionFactoryInterface {
    readonly _factoryFor: "Session";
    build(inputData?: Partial<Prisma.SessionCreateInput>): PromiseLike<Prisma.SessionCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.SessionCreateInput>): PromiseLike<Prisma.SessionCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.SessionCreateInput>[]): PromiseLike<Prisma.SessionCreateInput[]>;
    pickForConnect(inputData: Session): Pick<Session, "id">;
    create(inputData?: Partial<Prisma.SessionCreateInput>): PromiseLike<Session>;
    createList(inputData: number | readonly Partial<Prisma.SessionCreateInput>[]): PromiseLike<Session[]>;
    createForConnect(inputData?: Partial<Prisma.SessionCreateInput>): PromiseLike<Pick<Session, "id">>;
}
/**
 * Define factory for {@link Session} model.
 *
 * @param options
 * @returns factory {@link SessionFactoryInterface}
 */
export declare function defineSessionFactory(options: SessionFactoryDefineOptions): SessionFactoryInterface;
declare type UserFactoryDefineInput = {
    id?: string;
    name?: string | null;
    email?: string | null;
    emailVerified?: Date | null;
    image?: string | null;
    accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
    sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
    musics?: Prisma.MusicCreateNestedManyWithoutUserInput;
    issues?: Prisma.IssueCreateNestedManyWithoutUserInput;
    pulls?: Prisma.PullCreateNestedManyWithoutUserInput;
    comments?: Prisma.CommentCreateNestedManyWithoutUserInput;
    bookmarks?: Prisma.BookmarkCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    votes?: Prisma.VoteCreateNestedManyWithoutUsersInput;
    voteIDs?: Prisma.UserCreatevoteIDsInput | Prisma.Enumerable<string>;
    followers?: Prisma.FollowCreateNestedManyWithoutFollowerInput;
    following?: Prisma.FollowCreateNestedManyWithoutFollowingInput;
};
declare type UserFactoryDefineOptions = {
    defaultData?: Resolver<UserFactoryDefineInput, BuildDataOptions>;
};
interface UserFactoryInterface {
    readonly _factoryFor: "User";
    build(inputData?: Partial<Prisma.UserCreateInput>): PromiseLike<Prisma.UserCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.UserCreateInput>): PromiseLike<Prisma.UserCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.UserCreateInput>[]): PromiseLike<Prisma.UserCreateInput[]>;
    pickForConnect(inputData: User): Pick<User, "id">;
    create(inputData?: Partial<Prisma.UserCreateInput>): PromiseLike<User>;
    createList(inputData: number | readonly Partial<Prisma.UserCreateInput>[]): PromiseLike<User[]>;
    createForConnect(inputData?: Partial<Prisma.UserCreateInput>): PromiseLike<Pick<User, "id">>;
}
/**
 * Define factory for {@link User} model.
 *
 * @param options
 * @returns factory {@link UserFactoryInterface}
 */
export declare function defineUserFactory(options?: UserFactoryDefineOptions): UserFactoryInterface;
declare type FollowfollowerFactory = {
    _factoryFor: "User";
    build: () => PromiseLike<Prisma.UserCreateNestedOneWithoutFollowersInput["create"]>;
};
declare type FollowfollowingFactory = {
    _factoryFor: "User";
    build: () => PromiseLike<Prisma.UserCreateNestedOneWithoutFollowingInput["create"]>;
};
declare type FollowFactoryDefineInput = {
    id?: string;
    notifications?: Prisma.NotificationCreateNestedManyWithoutFollowedInput;
    follower: FollowfollowerFactory | Prisma.UserCreateNestedOneWithoutFollowersInput;
    following: FollowfollowingFactory | Prisma.UserCreateNestedOneWithoutFollowingInput;
};
declare type FollowFactoryDefineOptions = {
    defaultData: Resolver<FollowFactoryDefineInput, BuildDataOptions>;
};
interface FollowFactoryInterface {
    readonly _factoryFor: "Follow";
    build(inputData?: Partial<Prisma.FollowCreateInput>): PromiseLike<Prisma.FollowCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.FollowCreateInput>): PromiseLike<Prisma.FollowCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.FollowCreateInput>[]): PromiseLike<Prisma.FollowCreateInput[]>;
    pickForConnect(inputData: Follow): Pick<Follow, "id">;
    create(inputData?: Partial<Prisma.FollowCreateInput>): PromiseLike<Follow>;
    createList(inputData: number | readonly Partial<Prisma.FollowCreateInput>[]): PromiseLike<Follow[]>;
    createForConnect(inputData?: Partial<Prisma.FollowCreateInput>): PromiseLike<Pick<Follow, "id">>;
}
/**
 * Define factory for {@link Follow} model.
 *
 * @param options
 * @returns factory {@link FollowFactoryInterface}
 */
export declare function defineFollowFactory(options: FollowFactoryDefineOptions): FollowFactoryInterface;
declare type VerificationTokenFactoryDefineInput = {
    id?: string;
    identifier?: string;
    token?: string;
    expires?: Date;
};
declare type VerificationTokenFactoryDefineOptions = {
    defaultData?: Resolver<VerificationTokenFactoryDefineInput, BuildDataOptions>;
};
interface VerificationTokenFactoryInterface {
    readonly _factoryFor: "VerificationToken";
    build(inputData?: Partial<Prisma.VerificationTokenCreateInput>): PromiseLike<Prisma.VerificationTokenCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.VerificationTokenCreateInput>): PromiseLike<Prisma.VerificationTokenCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.VerificationTokenCreateInput>[]): PromiseLike<Prisma.VerificationTokenCreateInput[]>;
    pickForConnect(inputData: VerificationToken): Pick<VerificationToken, "id">;
    create(inputData?: Partial<Prisma.VerificationTokenCreateInput>): PromiseLike<VerificationToken>;
    createList(inputData: number | readonly Partial<Prisma.VerificationTokenCreateInput>[]): PromiseLike<VerificationToken[]>;
    createForConnect(inputData?: Partial<Prisma.VerificationTokenCreateInput>): PromiseLike<Pick<VerificationToken, "id">>;
}
/**
 * Define factory for {@link VerificationToken} model.
 *
 * @param options
 * @returns factory {@link VerificationTokenFactoryInterface}
 */
export declare function defineVerificationTokenFactory(options?: VerificationTokenFactoryDefineOptions): VerificationTokenFactoryInterface;
declare type MusicuserFactory = {
    _factoryFor: "User";
    build: () => PromiseLike<Prisma.UserCreateNestedOneWithoutMusicsInput["create"]>;
};
declare type MusicbandFactory = {
    _factoryFor: "Band";
    build: () => PromiseLike<Prisma.BandCreateNestedOneWithoutMusicsInput["create"]>;
};
declare type MusicFactoryDefineInput = {
    id?: string;
    type?: MusicType;
    title: Prisma.LocalesCreateEnvelopeInput | Prisma.LocalesCreateInput;
    score?: string | null;
    visibility?: Visibility;
    price?: number | null;
    link?: Prisma.LinkListNullableCreateEnvelopeInput | Prisma.LinkListCreateInput | null;
    user?: MusicuserFactory | Prisma.UserCreateNestedOneWithoutMusicsInput;
    band?: MusicbandFactory | Prisma.BandCreateNestedOneWithoutMusicsInput;
    albums?: Prisma.AlbumCreateNestedManyWithoutMusicsInput;
    albumIDs?: Prisma.MusicCreatealbumIDsInput | Prisma.Enumerable<string>;
    participations?: Prisma.ParticipationCreateNestedManyWithoutMusicInput;
    issues?: Prisma.IssueCreateNestedManyWithoutMusicInput;
    pulls?: Prisma.PullCreateNestedManyWithoutMusicInput;
    bookmarks?: Prisma.BookmarkCreateNestedManyWithoutMusicInput;
    tagMaps?: Prisma.TagMapCreateNestedManyWithoutMusicInput;
};
declare type MusicFactoryDefineOptions = {
    defaultData?: Resolver<MusicFactoryDefineInput, BuildDataOptions>;
};
interface MusicFactoryInterface {
    readonly _factoryFor: "Music";
    build(inputData?: Partial<Prisma.MusicCreateInput>): PromiseLike<Prisma.MusicCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.MusicCreateInput>): PromiseLike<Prisma.MusicCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.MusicCreateInput>[]): PromiseLike<Prisma.MusicCreateInput[]>;
    pickForConnect(inputData: Music): Pick<Music, "id">;
    create(inputData?: Partial<Prisma.MusicCreateInput>): PromiseLike<Music>;
    createList(inputData: number | readonly Partial<Prisma.MusicCreateInput>[]): PromiseLike<Music[]>;
    createForConnect(inputData?: Partial<Prisma.MusicCreateInput>): PromiseLike<Pick<Music, "id">>;
}
/**
 * Define factory for {@link Music} model.
 *
 * @param options
 * @returns factory {@link MusicFactoryInterface}
 */
export declare function defineMusicFactory(options?: MusicFactoryDefineOptions): MusicFactoryInterface;
declare type AlbumbandFactory = {
    _factoryFor: "Band";
    build: () => PromiseLike<Prisma.BandCreateNestedOneWithoutAlbumsInput["create"]>;
};
declare type AlbumFactoryDefineInput = {
    id?: string;
    title: Prisma.LocalesCreateEnvelopeInput | Prisma.LocalesCreateInput;
    band?: AlbumbandFactory | Prisma.BandCreateNestedOneWithoutAlbumsInput;
    musics?: Prisma.MusicCreateNestedManyWithoutAlbumsInput;
    musicIDs?: Prisma.AlbumCreatemusicIDsInput | Prisma.Enumerable<string>;
    artists?: Prisma.ArtistCreateNestedManyWithoutAlbumsInput;
    artistIDs?: Prisma.AlbumCreateartistIDsInput | Prisma.Enumerable<string>;
    bookmarks?: Prisma.BookmarkCreateNestedManyWithoutAlbumInput;
    tagMaps?: Prisma.TagMapCreateNestedManyWithoutAlbumInput;
};
declare type AlbumFactoryDefineOptions = {
    defaultData?: Resolver<AlbumFactoryDefineInput, BuildDataOptions>;
};
interface AlbumFactoryInterface {
    readonly _factoryFor: "Album";
    build(inputData?: Partial<Prisma.AlbumCreateInput>): PromiseLike<Prisma.AlbumCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.AlbumCreateInput>): PromiseLike<Prisma.AlbumCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.AlbumCreateInput>[]): PromiseLike<Prisma.AlbumCreateInput[]>;
    pickForConnect(inputData: Album): Pick<Album, "id">;
    create(inputData?: Partial<Prisma.AlbumCreateInput>): PromiseLike<Album>;
    createList(inputData: number | readonly Partial<Prisma.AlbumCreateInput>[]): PromiseLike<Album[]>;
    createForConnect(inputData?: Partial<Prisma.AlbumCreateInput>): PromiseLike<Pick<Album, "id">>;
}
/**
 * Define factory for {@link Album} model.
 *
 * @param options
 * @returns factory {@link AlbumFactoryInterface}
 */
export declare function defineAlbumFactory(options?: AlbumFactoryDefineOptions): AlbumFactoryInterface;
declare type ArtistFactoryDefineInput = {
    id?: string;
    name: Prisma.LocalesCreateEnvelopeInput | Prisma.LocalesCreateInput;
    link?: Prisma.LinkListNullableCreateEnvelopeInput | Prisma.LinkListCreateInput | null;
    participations?: Prisma.ParticipationCreateNestedManyWithoutArtistInput;
    bands?: Prisma.BandCreateNestedManyWithoutArtistsInput;
    bandIDs?: Prisma.ArtistCreatebandIDsInput | Prisma.Enumerable<string>;
    albums?: Prisma.AlbumCreateNestedManyWithoutArtistsInput;
    albumIDs?: Prisma.ArtistCreatealbumIDsInput | Prisma.Enumerable<string>;
    bookmarks?: Prisma.BookmarkCreateNestedManyWithoutArtistInput;
    tagMaps?: Prisma.TagMapCreateNestedManyWithoutArtistInput;
};
declare type ArtistFactoryDefineOptions = {
    defaultData?: Resolver<ArtistFactoryDefineInput, BuildDataOptions>;
};
interface ArtistFactoryInterface {
    readonly _factoryFor: "Artist";
    build(inputData?: Partial<Prisma.ArtistCreateInput>): PromiseLike<Prisma.ArtistCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.ArtistCreateInput>): PromiseLike<Prisma.ArtistCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.ArtistCreateInput>[]): PromiseLike<Prisma.ArtistCreateInput[]>;
    pickForConnect(inputData: Artist): Pick<Artist, "id">;
    create(inputData?: Partial<Prisma.ArtistCreateInput>): PromiseLike<Artist>;
    createList(inputData: number | readonly Partial<Prisma.ArtistCreateInput>[]): PromiseLike<Artist[]>;
    createForConnect(inputData?: Partial<Prisma.ArtistCreateInput>): PromiseLike<Pick<Artist, "id">>;
}
/**
 * Define factory for {@link Artist} model.
 *
 * @param options
 * @returns factory {@link ArtistFactoryInterface}
 */
export declare function defineArtistFactory(options?: ArtistFactoryDefineOptions): ArtistFactoryInterface;
declare type BandFactoryDefineInput = {
    id?: string;
    name: Prisma.LocalesCreateEnvelopeInput | Prisma.LocalesCreateInput;
    link?: Prisma.LinkListNullableCreateEnvelopeInput | Prisma.LinkListCreateInput | null;
    musics?: Prisma.MusicCreateNestedManyWithoutBandInput;
    artists?: Prisma.ArtistCreateNestedManyWithoutBandsInput;
    artistIDs?: Prisma.BandCreateartistIDsInput | Prisma.Enumerable<string>;
    albums?: Prisma.AlbumCreateNestedManyWithoutBandInput;
    bookmarks?: Prisma.BookmarkCreateNestedManyWithoutBandInput;
    tagMaps?: Prisma.TagMapCreateNestedManyWithoutBandInput;
};
declare type BandFactoryDefineOptions = {
    defaultData?: Resolver<BandFactoryDefineInput, BuildDataOptions>;
};
interface BandFactoryInterface {
    readonly _factoryFor: "Band";
    build(inputData?: Partial<Prisma.BandCreateInput>): PromiseLike<Prisma.BandCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.BandCreateInput>): PromiseLike<Prisma.BandCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.BandCreateInput>[]): PromiseLike<Prisma.BandCreateInput[]>;
    pickForConnect(inputData: Band): Pick<Band, "id">;
    create(inputData?: Partial<Prisma.BandCreateInput>): PromiseLike<Band>;
    createList(inputData: number | readonly Partial<Prisma.BandCreateInput>[]): PromiseLike<Band[]>;
    createForConnect(inputData?: Partial<Prisma.BandCreateInput>): PromiseLike<Pick<Band, "id">>;
}
/**
 * Define factory for {@link Band} model.
 *
 * @param options
 * @returns factory {@link BandFactoryInterface}
 */
export declare function defineBandFactory(options?: BandFactoryDefineOptions): BandFactoryInterface;
declare type IssuemusicFactory = {
    _factoryFor: "Music";
    build: () => PromiseLike<Prisma.MusicCreateNestedOneWithoutIssuesInput["create"]>;
};
declare type IssueuserFactory = {
    _factoryFor: "User";
    build: () => PromiseLike<Prisma.UserCreateNestedOneWithoutIssuesInput["create"]>;
};
declare type IssueFactoryDefineInput = {
    id?: string;
    title?: string;
    body?: string;
    comments?: Prisma.CommentCreateNestedManyWithoutIssueInput;
    music: IssuemusicFactory | Prisma.MusicCreateNestedOneWithoutIssuesInput;
    user: IssueuserFactory | Prisma.UserCreateNestedOneWithoutIssuesInput;
};
declare type IssueFactoryDefineOptions = {
    defaultData: Resolver<IssueFactoryDefineInput, BuildDataOptions>;
};
interface IssueFactoryInterface {
    readonly _factoryFor: "Issue";
    build(inputData?: Partial<Prisma.IssueCreateInput>): PromiseLike<Prisma.IssueCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.IssueCreateInput>): PromiseLike<Prisma.IssueCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.IssueCreateInput>[]): PromiseLike<Prisma.IssueCreateInput[]>;
    pickForConnect(inputData: Issue): Pick<Issue, "id">;
    create(inputData?: Partial<Prisma.IssueCreateInput>): PromiseLike<Issue>;
    createList(inputData: number | readonly Partial<Prisma.IssueCreateInput>[]): PromiseLike<Issue[]>;
    createForConnect(inputData?: Partial<Prisma.IssueCreateInput>): PromiseLike<Pick<Issue, "id">>;
}
/**
 * Define factory for {@link Issue} model.
 *
 * @param options
 * @returns factory {@link IssueFactoryInterface}
 */
export declare function defineIssueFactory(options: IssueFactoryDefineOptions): IssueFactoryInterface;
declare type PullvoteFactory = {
    _factoryFor: "Vote";
    build: () => PromiseLike<Prisma.VoteCreateNestedOneWithoutPullInput["create"]>;
};
declare type PullmusicFactory = {
    _factoryFor: "Music";
    build: () => PromiseLike<Prisma.MusicCreateNestedOneWithoutPullsInput["create"]>;
};
declare type PulluserFactory = {
    _factoryFor: "User";
    build: () => PromiseLike<Prisma.UserCreateNestedOneWithoutPullsInput["create"]>;
};
declare type PullFactoryDefineInput = {
    id?: string;
    title?: string;
    body?: string;
    score: Prisma.PullScoreCreateEnvelopeInput | Prisma.PullScoreCreateInput;
    status?: PullStatus;
    vote?: PullvoteFactory | Prisma.VoteCreateNestedOneWithoutPullInput;
    comments?: Prisma.CommentCreateNestedManyWithoutPullInput;
    music: PullmusicFactory | Prisma.MusicCreateNestedOneWithoutPullsInput;
    user: PulluserFactory | Prisma.UserCreateNestedOneWithoutPullsInput;
};
declare type PullFactoryDefineOptions = {
    defaultData: Resolver<PullFactoryDefineInput, BuildDataOptions>;
};
interface PullFactoryInterface {
    readonly _factoryFor: "Pull";
    build(inputData?: Partial<Prisma.PullCreateInput>): PromiseLike<Prisma.PullCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.PullCreateInput>): PromiseLike<Prisma.PullCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.PullCreateInput>[]): PromiseLike<Prisma.PullCreateInput[]>;
    pickForConnect(inputData: Pull): Pick<Pull, "id">;
    create(inputData?: Partial<Prisma.PullCreateInput>): PromiseLike<Pull>;
    createList(inputData: number | readonly Partial<Prisma.PullCreateInput>[]): PromiseLike<Pull[]>;
    createForConnect(inputData?: Partial<Prisma.PullCreateInput>): PromiseLike<Pick<Pull, "id">>;
}
/**
 * Define factory for {@link Pull} model.
 *
 * @param options
 * @returns factory {@link PullFactoryInterface}
 */
export declare function definePullFactory(options: PullFactoryDefineOptions): PullFactoryInterface;
declare type VotepullFactory = {
    _factoryFor: "Pull";
    build: () => PromiseLike<Prisma.PullCreateNestedOneWithoutVoteInput["create"]>;
};
declare type VoteFactoryDefineInput = {
    id?: string;
    start?: Date;
    end?: Date;
    good?: number;
    bad?: number;
    pull: VotepullFactory | Prisma.PullCreateNestedOneWithoutVoteInput;
    users?: Prisma.UserCreateNestedManyWithoutVotesInput;
    userIDs?: Prisma.VoteCreateuserIDsInput | Prisma.Enumerable<string>;
};
declare type VoteFactoryDefineOptions = {
    defaultData: Resolver<VoteFactoryDefineInput, BuildDataOptions>;
};
interface VoteFactoryInterface {
    readonly _factoryFor: "Vote";
    build(inputData?: Partial<Prisma.VoteCreateInput>): PromiseLike<Prisma.VoteCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.VoteCreateInput>): PromiseLike<Prisma.VoteCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.VoteCreateInput>[]): PromiseLike<Prisma.VoteCreateInput[]>;
    pickForConnect(inputData: Vote): Pick<Vote, "id">;
    create(inputData?: Partial<Prisma.VoteCreateInput>): PromiseLike<Vote>;
    createList(inputData: number | readonly Partial<Prisma.VoteCreateInput>[]): PromiseLike<Vote[]>;
    createForConnect(inputData?: Partial<Prisma.VoteCreateInput>): PromiseLike<Pick<Vote, "id">>;
}
/**
 * Define factory for {@link Vote} model.
 *
 * @param options
 * @returns factory {@link VoteFactoryInterface}
 */
export declare function defineVoteFactory(options: VoteFactoryDefineOptions): VoteFactoryInterface;
declare type CommentpullFactory = {
    _factoryFor: "Pull";
    build: () => PromiseLike<Prisma.PullCreateNestedOneWithoutCommentsInput["create"]>;
};
declare type CommentissueFactory = {
    _factoryFor: "Issue";
    build: () => PromiseLike<Prisma.IssueCreateNestedOneWithoutCommentsInput["create"]>;
};
declare type CommentuserFactory = {
    _factoryFor: "User";
    build: () => PromiseLike<Prisma.UserCreateNestedOneWithoutCommentsInput["create"]>;
};
declare type CommentFactoryDefineInput = {
    id?: string;
    body?: string;
    pull?: CommentpullFactory | Prisma.PullCreateNestedOneWithoutCommentsInput;
    issue?: CommentissueFactory | Prisma.IssueCreateNestedOneWithoutCommentsInput;
    user: CommentuserFactory | Prisma.UserCreateNestedOneWithoutCommentsInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutCommentedInput;
    resourceType?: CommentType;
};
declare type CommentFactoryDefineOptions = {
    defaultData: Resolver<CommentFactoryDefineInput, BuildDataOptions>;
};
interface CommentFactoryInterface {
    readonly _factoryFor: "Comment";
    build(inputData?: Partial<Prisma.CommentCreateInput>): PromiseLike<Prisma.CommentCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.CommentCreateInput>): PromiseLike<Prisma.CommentCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.CommentCreateInput>[]): PromiseLike<Prisma.CommentCreateInput[]>;
    pickForConnect(inputData: Comment): Pick<Comment, "id">;
    create(inputData?: Partial<Prisma.CommentCreateInput>): PromiseLike<Comment>;
    createList(inputData: number | readonly Partial<Prisma.CommentCreateInput>[]): PromiseLike<Comment[]>;
    createForConnect(inputData?: Partial<Prisma.CommentCreateInput>): PromiseLike<Pick<Comment, "id">>;
}
/**
 * Define factory for {@link Comment} model.
 *
 * @param options
 * @returns factory {@link CommentFactoryInterface}
 */
export declare function defineCommentFactory(options: CommentFactoryDefineOptions): CommentFactoryInterface;
declare type BookmarkmusicFactory = {
    _factoryFor: "Music";
    build: () => PromiseLike<Prisma.MusicCreateNestedOneWithoutBookmarksInput["create"]>;
};
declare type BookmarkbandFactory = {
    _factoryFor: "Band";
    build: () => PromiseLike<Prisma.BandCreateNestedOneWithoutBookmarksInput["create"]>;
};
declare type BookmarkalbumFactory = {
    _factoryFor: "Album";
    build: () => PromiseLike<Prisma.AlbumCreateNestedOneWithoutBookmarksInput["create"]>;
};
declare type BookmarkartistFactory = {
    _factoryFor: "Artist";
    build: () => PromiseLike<Prisma.ArtistCreateNestedOneWithoutBookmarksInput["create"]>;
};
declare type BookmarkuserFactory = {
    _factoryFor: "User";
    build: () => PromiseLike<Prisma.UserCreateNestedOneWithoutBookmarksInput["create"]>;
};
declare type BookmarkFactoryDefineInput = {
    id?: string;
    notifications?: Prisma.NotificationCreateNestedManyWithoutBookmarkedInput;
    music?: BookmarkmusicFactory | Prisma.MusicCreateNestedOneWithoutBookmarksInput;
    band?: BookmarkbandFactory | Prisma.BandCreateNestedOneWithoutBookmarksInput;
    album?: BookmarkalbumFactory | Prisma.AlbumCreateNestedOneWithoutBookmarksInput;
    artist?: BookmarkartistFactory | Prisma.ArtistCreateNestedOneWithoutBookmarksInput;
    user: BookmarkuserFactory | Prisma.UserCreateNestedOneWithoutBookmarksInput;
    resourceType?: BookmarkType;
};
declare type BookmarkFactoryDefineOptions = {
    defaultData: Resolver<BookmarkFactoryDefineInput, BuildDataOptions>;
};
interface BookmarkFactoryInterface {
    readonly _factoryFor: "Bookmark";
    build(inputData?: Partial<Prisma.BookmarkCreateInput>): PromiseLike<Prisma.BookmarkCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.BookmarkCreateInput>): PromiseLike<Prisma.BookmarkCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.BookmarkCreateInput>[]): PromiseLike<Prisma.BookmarkCreateInput[]>;
    pickForConnect(inputData: Bookmark): Pick<Bookmark, "id">;
    create(inputData?: Partial<Prisma.BookmarkCreateInput>): PromiseLike<Bookmark>;
    createList(inputData: number | readonly Partial<Prisma.BookmarkCreateInput>[]): PromiseLike<Bookmark[]>;
    createForConnect(inputData?: Partial<Prisma.BookmarkCreateInput>): PromiseLike<Pick<Bookmark, "id">>;
}
/**
 * Define factory for {@link Bookmark} model.
 *
 * @param options
 * @returns factory {@link BookmarkFactoryInterface}
 */
export declare function defineBookmarkFactory(options: BookmarkFactoryDefineOptions): BookmarkFactoryInterface;
declare type ParticipationartistFactory = {
    _factoryFor: "Artist";
    build: () => PromiseLike<Prisma.ArtistCreateNestedOneWithoutParticipationsInput["create"]>;
};
declare type ParticipationmusicFactory = {
    _factoryFor: "Music";
    build: () => PromiseLike<Prisma.MusicCreateNestedOneWithoutParticipationsInput["create"]>;
};
declare type ParticipationFactoryDefineInput = {
    id?: string;
    artist: ParticipationartistFactory | Prisma.ArtistCreateNestedOneWithoutParticipationsInput;
    music: ParticipationmusicFactory | Prisma.MusicCreateNestedOneWithoutParticipationsInput;
    roleMap?: Prisma.RoleMapCreateNestedManyWithoutParticipationInput;
};
declare type ParticipationFactoryDefineOptions = {
    defaultData: Resolver<ParticipationFactoryDefineInput, BuildDataOptions>;
};
interface ParticipationFactoryInterface {
    readonly _factoryFor: "Participation";
    build(inputData?: Partial<Prisma.ParticipationCreateInput>): PromiseLike<Prisma.ParticipationCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.ParticipationCreateInput>): PromiseLike<Prisma.ParticipationCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.ParticipationCreateInput>[]): PromiseLike<Prisma.ParticipationCreateInput[]>;
    pickForConnect(inputData: Participation): Pick<Participation, "id">;
    create(inputData?: Partial<Prisma.ParticipationCreateInput>): PromiseLike<Participation>;
    createList(inputData: number | readonly Partial<Prisma.ParticipationCreateInput>[]): PromiseLike<Participation[]>;
    createForConnect(inputData?: Partial<Prisma.ParticipationCreateInput>): PromiseLike<Pick<Participation, "id">>;
}
/**
 * Define factory for {@link Participation} model.
 *
 * @param options
 * @returns factory {@link ParticipationFactoryInterface}
 */
export declare function defineParticipationFactory(options: ParticipationFactoryDefineOptions): ParticipationFactoryInterface;
declare type RoleFactoryDefineInput = {
    id?: string;
    name?: string;
    roleMap?: Prisma.RoleMapCreateNestedManyWithoutRoleInput;
};
declare type RoleFactoryDefineOptions = {
    defaultData?: Resolver<RoleFactoryDefineInput, BuildDataOptions>;
};
interface RoleFactoryInterface {
    readonly _factoryFor: "Role";
    build(inputData?: Partial<Prisma.RoleCreateInput>): PromiseLike<Prisma.RoleCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.RoleCreateInput>): PromiseLike<Prisma.RoleCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.RoleCreateInput>[]): PromiseLike<Prisma.RoleCreateInput[]>;
    pickForConnect(inputData: Role): Pick<Role, "id">;
    create(inputData?: Partial<Prisma.RoleCreateInput>): PromiseLike<Role>;
    createList(inputData: number | readonly Partial<Prisma.RoleCreateInput>[]): PromiseLike<Role[]>;
    createForConnect(inputData?: Partial<Prisma.RoleCreateInput>): PromiseLike<Pick<Role, "id">>;
}
/**
 * Define factory for {@link Role} model.
 *
 * @param options
 * @returns factory {@link RoleFactoryInterface}
 */
export declare function defineRoleFactory(options?: RoleFactoryDefineOptions): RoleFactoryInterface;
declare type RoleMaproleFactory = {
    _factoryFor: "Role";
    build: () => PromiseLike<Prisma.RoleCreateNestedOneWithoutRoleMapInput["create"]>;
};
declare type RoleMapparticipationFactory = {
    _factoryFor: "Participation";
    build: () => PromiseLike<Prisma.ParticipationCreateNestedOneWithoutRoleMapInput["create"]>;
};
declare type RoleMapFactoryDefineInput = {
    id?: string;
    role: RoleMaproleFactory | Prisma.RoleCreateNestedOneWithoutRoleMapInput;
    participation: RoleMapparticipationFactory | Prisma.ParticipationCreateNestedOneWithoutRoleMapInput;
};
declare type RoleMapFactoryDefineOptions = {
    defaultData: Resolver<RoleMapFactoryDefineInput, BuildDataOptions>;
};
interface RoleMapFactoryInterface {
    readonly _factoryFor: "RoleMap";
    build(inputData?: Partial<Prisma.RoleMapCreateInput>): PromiseLike<Prisma.RoleMapCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.RoleMapCreateInput>): PromiseLike<Prisma.RoleMapCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.RoleMapCreateInput>[]): PromiseLike<Prisma.RoleMapCreateInput[]>;
    pickForConnect(inputData: RoleMap): Pick<RoleMap, "id">;
    create(inputData?: Partial<Prisma.RoleMapCreateInput>): PromiseLike<RoleMap>;
    createList(inputData: number | readonly Partial<Prisma.RoleMapCreateInput>[]): PromiseLike<RoleMap[]>;
    createForConnect(inputData?: Partial<Prisma.RoleMapCreateInput>): PromiseLike<Pick<RoleMap, "id">>;
}
/**
 * Define factory for {@link RoleMap} model.
 *
 * @param options
 * @returns factory {@link RoleMapFactoryInterface}
 */
export declare function defineRoleMapFactory(options: RoleMapFactoryDefineOptions): RoleMapFactoryInterface;
declare type TagFactoryDefineInput = {
    id?: string;
    name?: string;
    tagMap?: Prisma.TagMapCreateNestedManyWithoutTagInput;
};
declare type TagFactoryDefineOptions = {
    defaultData?: Resolver<TagFactoryDefineInput, BuildDataOptions>;
};
interface TagFactoryInterface {
    readonly _factoryFor: "Tag";
    build(inputData?: Partial<Prisma.TagCreateInput>): PromiseLike<Prisma.TagCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.TagCreateInput>): PromiseLike<Prisma.TagCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.TagCreateInput>[]): PromiseLike<Prisma.TagCreateInput[]>;
    pickForConnect(inputData: Tag): Pick<Tag, "id">;
    create(inputData?: Partial<Prisma.TagCreateInput>): PromiseLike<Tag>;
    createList(inputData: number | readonly Partial<Prisma.TagCreateInput>[]): PromiseLike<Tag[]>;
    createForConnect(inputData?: Partial<Prisma.TagCreateInput>): PromiseLike<Pick<Tag, "id">>;
}
/**
 * Define factory for {@link Tag} model.
 *
 * @param options
 * @returns factory {@link TagFactoryInterface}
 */
export declare function defineTagFactory(options?: TagFactoryDefineOptions): TagFactoryInterface;
declare type TagMaptagFactory = {
    _factoryFor: "Tag";
    build: () => PromiseLike<Prisma.TagCreateNestedOneWithoutTagMapInput["create"]>;
};
declare type TagMapmusicFactory = {
    _factoryFor: "Music";
    build: () => PromiseLike<Prisma.MusicCreateNestedOneWithoutTagMapsInput["create"]>;
};
declare type TagMapbandFactory = {
    _factoryFor: "Band";
    build: () => PromiseLike<Prisma.BandCreateNestedOneWithoutTagMapsInput["create"]>;
};
declare type TagMapalbumFactory = {
    _factoryFor: "Album";
    build: () => PromiseLike<Prisma.AlbumCreateNestedOneWithoutTagMapsInput["create"]>;
};
declare type TagMapartistFactory = {
    _factoryFor: "Artist";
    build: () => PromiseLike<Prisma.ArtistCreateNestedOneWithoutTagMapsInput["create"]>;
};
declare type TagMapFactoryDefineInput = {
    id?: string;
    tag: TagMaptagFactory | Prisma.TagCreateNestedOneWithoutTagMapInput;
    music?: TagMapmusicFactory | Prisma.MusicCreateNestedOneWithoutTagMapsInput;
    band?: TagMapbandFactory | Prisma.BandCreateNestedOneWithoutTagMapsInput;
    album?: TagMapalbumFactory | Prisma.AlbumCreateNestedOneWithoutTagMapsInput;
    artist?: TagMapartistFactory | Prisma.ArtistCreateNestedOneWithoutTagMapsInput;
    resourceType?: TagType;
};
declare type TagMapFactoryDefineOptions = {
    defaultData: Resolver<TagMapFactoryDefineInput, BuildDataOptions>;
};
interface TagMapFactoryInterface {
    readonly _factoryFor: "TagMap";
    build(inputData?: Partial<Prisma.TagMapCreateInput>): PromiseLike<Prisma.TagMapCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.TagMapCreateInput>): PromiseLike<Prisma.TagMapCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.TagMapCreateInput>[]): PromiseLike<Prisma.TagMapCreateInput[]>;
    pickForConnect(inputData: TagMap): Pick<TagMap, "id">;
    create(inputData?: Partial<Prisma.TagMapCreateInput>): PromiseLike<TagMap>;
    createList(inputData: number | readonly Partial<Prisma.TagMapCreateInput>[]): PromiseLike<TagMap[]>;
    createForConnect(inputData?: Partial<Prisma.TagMapCreateInput>): PromiseLike<Pick<TagMap, "id">>;
}
/**
 * Define factory for {@link TagMap} model.
 *
 * @param options
 * @returns factory {@link TagMapFactoryInterface}
 */
export declare function defineTagMapFactory(options: TagMapFactoryDefineOptions): TagMapFactoryInterface;
declare type NotificationbookmarkedFactory = {
    _factoryFor: "Bookmark";
    build: () => PromiseLike<Prisma.BookmarkCreateNestedOneWithoutNotificationsInput["create"]>;
};
declare type NotificationfollowedFactory = {
    _factoryFor: "Follow";
    build: () => PromiseLike<Prisma.FollowCreateNestedOneWithoutNotificationsInput["create"]>;
};
declare type NotificationcommentedFactory = {
    _factoryFor: "Comment";
    build: () => PromiseLike<Prisma.CommentCreateNestedOneWithoutNotificationsInput["create"]>;
};
declare type NotificationuserFactory = {
    _factoryFor: "User";
    build: () => PromiseLike<Prisma.UserCreateNestedOneWithoutNotificationsInput["create"]>;
};
declare type NotificationFactoryDefineInput = {
    id?: string;
    bookmarked?: NotificationbookmarkedFactory | Prisma.BookmarkCreateNestedOneWithoutNotificationsInput;
    followed?: NotificationfollowedFactory | Prisma.FollowCreateNestedOneWithoutNotificationsInput;
    commented?: NotificationcommentedFactory | Prisma.CommentCreateNestedOneWithoutNotificationsInput;
    user: NotificationuserFactory | Prisma.UserCreateNestedOneWithoutNotificationsInput;
    resurceType?: NotificationType;
    createdAt?: Date;
    readAt?: Date;
};
declare type NotificationFactoryDefineOptions = {
    defaultData: Resolver<NotificationFactoryDefineInput, BuildDataOptions>;
};
interface NotificationFactoryInterface {
    readonly _factoryFor: "Notification";
    build(inputData?: Partial<Prisma.NotificationCreateInput>): PromiseLike<Prisma.NotificationCreateInput>;
    buildCreateInput(inputData?: Partial<Prisma.NotificationCreateInput>): PromiseLike<Prisma.NotificationCreateInput>;
    buildList(inputData: number | readonly Partial<Prisma.NotificationCreateInput>[]): PromiseLike<Prisma.NotificationCreateInput[]>;
    pickForConnect(inputData: Notification): Pick<Notification, "id">;
    create(inputData?: Partial<Prisma.NotificationCreateInput>): PromiseLike<Notification>;
    createList(inputData: number | readonly Partial<Prisma.NotificationCreateInput>[]): PromiseLike<Notification[]>;
    createForConnect(inputData?: Partial<Prisma.NotificationCreateInput>): PromiseLike<Pick<Notification, "id">>;
}
/**
 * Define factory for {@link Notification} model.
 *
 * @param options
 * @returns factory {@link NotificationFactoryInterface}
 */
export declare function defineNotificationFactory(options: NotificationFactoryDefineOptions): NotificationFactoryInterface;
