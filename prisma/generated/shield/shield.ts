import { shield, allow } from 'trpc-shield';
import { Context } from '../../../src/server/context';

export const permissions = shield<Context>({
  query: {
    aggregateAccount: allow,
    aggregateAlbum: allow,
    aggregateArtist: allow,
    aggregateBand: allow,
    aggregateBookmark: allow,
    aggregateCart: allow,
    aggregateComment: allow,
    aggregateFollow: allow,
    aggregateIssue: allow,
    aggregateMusic: allow,
    aggregateNotification: allow,
    aggregateParticipation: allow,
    aggregatePoint: allow,
    aggregatePull: allow,
    aggregatePurchase: allow,
    aggregateRole: allow,
    aggregateRoleMap: allow,
    aggregateSession: allow,
    aggregateTag: allow,
    aggregateTagMap: allow,
    aggregateUser: allow,
    aggregateVerificationToken: allow,
    aggregateVote: allow,
    findFirstAccount: allow,
    findFirstAlbum: allow,
    findFirstArtist: allow,
    findFirstBand: allow,
    findFirstBookmark: allow,
    findFirstCart: allow,
    findFirstComment: allow,
    findFirstFollow: allow,
    findFirstIssue: allow,
    findFirstMusic: allow,
    findFirstNotification: allow,
    findFirstParticipation: allow,
    findFirstPoint: allow,
    findFirstPull: allow,
    findFirstPurchase: allow,
    findFirstRole: allow,
    findFirstRoleMap: allow,
    findFirstSession: allow,
    findFirstTag: allow,
    findFirstTagMap: allow,
    findFirstUser: allow,
    findFirstVerificationToken: allow,
    findFirstVote: allow,
    findManyAccount: allow,
    findManyAlbum: allow,
    findManyArtist: allow,
    findManyBand: allow,
    findManyBookmark: allow,
    findManyCart: allow,
    findManyComment: allow,
    findManyFollow: allow,
    findManyIssue: allow,
    findManyMusic: allow,
    findManyNotification: allow,
    findManyParticipation: allow,
    findManyPoint: allow,
    findManyPull: allow,
    findManyPurchase: allow,
    findManyRole: allow,
    findManyRoleMap: allow,
    findManySession: allow,
    findManyTag: allow,
    findManyTagMap: allow,
    findManyUser: allow,
    findManyVerificationToken: allow,
    findManyVote: allow,
    findUniqueAccount: allow,
    findUniqueAlbum: allow,
    findUniqueArtist: allow,
    findUniqueBand: allow,
    findUniqueBookmark: allow,
    findUniqueCart: allow,
    findUniqueComment: allow,
    findUniqueFollow: allow,
    findUniqueIssue: allow,
    findUniqueMusic: allow,
    findUniqueNotification: allow,
    findUniqueParticipation: allow,
    findUniquePoint: allow,
    findUniquePull: allow,
    findUniquePurchase: allow,
    findUniqueRole: allow,
    findUniqueRoleMap: allow,
    findUniqueSession: allow,
    findUniqueTag: allow,
    findUniqueTagMap: allow,
    findUniqueUser: allow,
    findUniqueVerificationToken: allow,
    findUniqueVote: allow,
    groupByAccount: allow,
    groupByAlbum: allow,
    groupByArtist: allow,
    groupByBand: allow,
    groupByBookmark: allow,
    groupByCart: allow,
    groupByComment: allow,
    groupByFollow: allow,
    groupByIssue: allow,
    groupByMusic: allow,
    groupByNotification: allow,
    groupByParticipation: allow,
    groupByPoint: allow,
    groupByPull: allow,
    groupByPurchase: allow,
    groupByRole: allow,
    groupByRoleMap: allow,
    groupBySession: allow,
    groupByTag: allow,
    groupByTagMap: allow,
    groupByUser: allow,
    groupByVerificationToken: allow,
    groupByVote: allow,
  },
  mutation: {
    createOneAccount: allow,
    createOneAlbum: allow,
    createOneArtist: allow,
    createOneBand: allow,
    createOneBookmark: allow,
    createOneCart: allow,
    createOneComment: allow,
    createOneFollow: allow,
    createOneIssue: allow,
    createOneMusic: allow,
    createOneNotification: allow,
    createOneParticipation: allow,
    createOnePoint: allow,
    createOnePull: allow,
    createOnePurchase: allow,
    createOneRole: allow,
    createOneRoleMap: allow,
    createOneSession: allow,
    createOneTag: allow,
    createOneTagMap: allow,
    createOneUser: allow,
    createOneVerificationToken: allow,
    createOneVote: allow,
    deleteManyAccount: allow,
    deleteManyAlbum: allow,
    deleteManyArtist: allow,
    deleteManyBand: allow,
    deleteManyBookmark: allow,
    deleteManyCart: allow,
    deleteManyComment: allow,
    deleteManyFollow: allow,
    deleteManyIssue: allow,
    deleteManyMusic: allow,
    deleteManyNotification: allow,
    deleteManyParticipation: allow,
    deleteManyPoint: allow,
    deleteManyPull: allow,
    deleteManyPurchase: allow,
    deleteManyRole: allow,
    deleteManyRoleMap: allow,
    deleteManySession: allow,
    deleteManyTag: allow,
    deleteManyTagMap: allow,
    deleteManyUser: allow,
    deleteManyVerificationToken: allow,
    deleteManyVote: allow,
    deleteOneAccount: allow,
    deleteOneAlbum: allow,
    deleteOneArtist: allow,
    deleteOneBand: allow,
    deleteOneBookmark: allow,
    deleteOneCart: allow,
    deleteOneComment: allow,
    deleteOneFollow: allow,
    deleteOneIssue: allow,
    deleteOneMusic: allow,
    deleteOneNotification: allow,
    deleteOneParticipation: allow,
    deleteOnePoint: allow,
    deleteOnePull: allow,
    deleteOnePurchase: allow,
    deleteOneRole: allow,
    deleteOneRoleMap: allow,
    deleteOneSession: allow,
    deleteOneTag: allow,
    deleteOneTagMap: allow,
    deleteOneUser: allow,
    deleteOneVerificationToken: allow,
    deleteOneVote: allow,
    updateManyAccount: allow,
    updateManyAlbum: allow,
    updateManyArtist: allow,
    updateManyBand: allow,
    updateManyBookmark: allow,
    updateManyCart: allow,
    updateManyComment: allow,
    updateManyFollow: allow,
    updateManyIssue: allow,
    updateManyMusic: allow,
    updateManyNotification: allow,
    updateManyParticipation: allow,
    updateManyPoint: allow,
    updateManyPull: allow,
    updateManyPurchase: allow,
    updateManyRole: allow,
    updateManyRoleMap: allow,
    updateManySession: allow,
    updateManyTag: allow,
    updateManyTagMap: allow,
    updateManyUser: allow,
    updateManyVerificationToken: allow,
    updateManyVote: allow,
    updateOneAccount: allow,
    updateOneAlbum: allow,
    updateOneArtist: allow,
    updateOneBand: allow,
    updateOneBookmark: allow,
    updateOneCart: allow,
    updateOneComment: allow,
    updateOneFollow: allow,
    updateOneIssue: allow,
    updateOneMusic: allow,
    updateOneNotification: allow,
    updateOneParticipation: allow,
    updateOnePoint: allow,
    updateOnePull: allow,
    updateOnePurchase: allow,
    updateOneRole: allow,
    updateOneRoleMap: allow,
    updateOneSession: allow,
    updateOneTag: allow,
    updateOneTagMap: allow,
    updateOneUser: allow,
    updateOneVerificationToken: allow,
    updateOneVote: allow,
    upsertOneAccount: allow,
    upsertOneAlbum: allow,
    upsertOneArtist: allow,
    upsertOneBand: allow,
    upsertOneBookmark: allow,
    upsertOneCart: allow,
    upsertOneComment: allow,
    upsertOneFollow: allow,
    upsertOneIssue: allow,
    upsertOneMusic: allow,
    upsertOneNotification: allow,
    upsertOneParticipation: allow,
    upsertOnePoint: allow,
    upsertOnePull: allow,
    upsertOnePurchase: allow,
    upsertOneRole: allow,
    upsertOneRoleMap: allow,
    upsertOneSession: allow,
    upsertOneTag: allow,
    upsertOneTagMap: allow,
    upsertOneUser: allow,
    upsertOneVerificationToken: allow,
    upsertOneVote: allow,
  },
});
