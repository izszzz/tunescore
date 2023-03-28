import { shield, allow } from 'trpc-shield';

import type { Context } from '../../../src/server/context';

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
    aggregateLink: allow,
    aggregateLocale: allow,
    aggregateMusic: allow,
    aggregateNotification: allow,
    aggregateParticipation: allow,
    aggregatePull: allow,
    aggregateReport: allow,
    aggregateResource: allow,
    aggregateRole: allow,
    aggregateSession: allow,
    aggregateTag: allow,
    aggregateTransaction: allow,
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
    findFirstLink: allow,
    findFirstLocale: allow,
    findFirstMusic: allow,
    findFirstNotification: allow,
    findFirstParticipation: allow,
    findFirstPull: allow,
    findFirstReport: allow,
    findFirstResource: allow,
    findFirstRole: allow,
    findFirstSession: allow,
    findFirstTag: allow,
    findFirstTransaction: allow,
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
    findManyLink: allow,
    findManyLocale: allow,
    findManyMusic: allow,
    findManyNotification: allow,
    findManyParticipation: allow,
    findManyPull: allow,
    findManyReport: allow,
    findManyResource: allow,
    findManyRole: allow,
    findManySession: allow,
    findManyTag: allow,
    findManyTransaction: allow,
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
    findUniqueLink: allow,
    findUniqueLocale: allow,
    findUniqueMusic: allow,
    findUniqueNotification: allow,
    findUniqueParticipation: allow,
    findUniquePull: allow,
    findUniqueReport: allow,
    findUniqueResource: allow,
    findUniqueRole: allow,
    findUniqueSession: allow,
    findUniqueTag: allow,
    findUniqueTransaction: allow,
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
    groupByLink: allow,
    groupByLocale: allow,
    groupByMusic: allow,
    groupByNotification: allow,
    groupByParticipation: allow,
    groupByPull: allow,
    groupByReport: allow,
    groupByResource: allow,
    groupByRole: allow,
    groupBySession: allow,
    groupByTag: allow,
    groupByTransaction: allow,
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
    createOneLink: allow,
    createOneLocale: allow,
    createOneMusic: allow,
    createOneNotification: allow,
    createOneParticipation: allow,
    createOnePull: allow,
    createOneReport: allow,
    createOneResource: allow,
    createOneRole: allow,
    createOneSession: allow,
    createOneTag: allow,
    createOneTransaction: allow,
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
    deleteManyLink: allow,
    deleteManyLocale: allow,
    deleteManyMusic: allow,
    deleteManyNotification: allow,
    deleteManyParticipation: allow,
    deleteManyPull: allow,
    deleteManyReport: allow,
    deleteManyResource: allow,
    deleteManyRole: allow,
    deleteManySession: allow,
    deleteManyTag: allow,
    deleteManyTransaction: allow,
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
    deleteOneLink: allow,
    deleteOneLocale: allow,
    deleteOneMusic: allow,
    deleteOneNotification: allow,
    deleteOneParticipation: allow,
    deleteOnePull: allow,
    deleteOneReport: allow,
    deleteOneResource: allow,
    deleteOneRole: allow,
    deleteOneSession: allow,
    deleteOneTag: allow,
    deleteOneTransaction: allow,
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
    updateManyLink: allow,
    updateManyLocale: allow,
    updateManyMusic: allow,
    updateManyNotification: allow,
    updateManyParticipation: allow,
    updateManyPull: allow,
    updateManyReport: allow,
    updateManyResource: allow,
    updateManyRole: allow,
    updateManySession: allow,
    updateManyTag: allow,
    updateManyTransaction: allow,
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
    updateOneLink: allow,
    updateOneLocale: allow,
    updateOneMusic: allow,
    updateOneNotification: allow,
    updateOneParticipation: allow,
    updateOnePull: allow,
    updateOneReport: allow,
    updateOneResource: allow,
    updateOneRole: allow,
    updateOneSession: allow,
    updateOneTag: allow,
    updateOneTransaction: allow,
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
    upsertOneLink: allow,
    upsertOneLocale: allow,
    upsertOneMusic: allow,
    upsertOneNotification: allow,
    upsertOneParticipation: allow,
    upsertOnePull: allow,
    upsertOneReport: allow,
    upsertOneResource: allow,
    upsertOneRole: allow,
    upsertOneSession: allow,
    upsertOneTag: allow,
    upsertOneTransaction: allow,
    upsertOneUser: allow,
    upsertOneVerificationToken: allow,
    upsertOneVote: allow,
  },
});
