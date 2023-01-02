var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { getClient, createScreener, getScalarFieldValueGenerator, normalizeResolver, normalizeList, getSequenceCounter, } from "@quramy/prisma-fabbrica/lib/internal";
export { initialize, resetSequence, registerScalarFieldValueGenerator, resetScalarFieldValueGenerator } from "@quramy/prisma-fabbrica/lib/internal";
var modelFieldDefinitions = [{
        name: "Account",
        fields: [{
                name: "user",
                type: "User",
                relationName: "AccountToUser"
            }]
    }, {
        name: "Session",
        fields: [{
                name: "user",
                type: "User",
                relationName: "SessionToUser"
            }]
    }, {
        name: "User",
        fields: [{
                name: "accounts",
                type: "Account",
                relationName: "AccountToUser"
            }, {
                name: "sessions",
                type: "Session",
                relationName: "SessionToUser"
            }, {
                name: "musics",
                type: "Music",
                relationName: "MusicToUser"
            }, {
                name: "issues",
                type: "Issue",
                relationName: "IssueToUser"
            }, {
                name: "pulls",
                type: "Pull",
                relationName: "PullToUser"
            }, {
                name: "comments",
                type: "Comment",
                relationName: "CommentToUser"
            }, {
                name: "bookmarks",
                type: "Bookmark",
                relationName: "BookmarkToUser"
            }, {
                name: "notifications",
                type: "Notification",
                relationName: "NotificationToUser"
            }, {
                name: "votes",
                type: "Vote",
                relationName: "UserToVote"
            }, {
                name: "followers",
                type: "Follow",
                relationName: "UserFollower"
            }, {
                name: "following",
                type: "Follow",
                relationName: "UserFollowing"
            }]
    }, {
        name: "Follow",
        fields: [{
                name: "notifications",
                type: "Notification",
                relationName: "FollowNotification"
            }, {
                name: "follower",
                type: "User",
                relationName: "UserFollower"
            }, {
                name: "following",
                type: "User",
                relationName: "UserFollowing"
            }]
    }, {
        name: "VerificationToken",
        fields: []
    }, {
        name: "Music",
        fields: [{
                name: "title",
                type: "Locales",
                relationName: ""
            }, {
                name: "link",
                type: "LinkList",
                relationName: ""
            }, {
                name: "user",
                type: "User",
                relationName: "MusicToUser"
            }, {
                name: "band",
                type: "Band",
                relationName: "BandToMusic"
            }, {
                name: "albums",
                type: "Album",
                relationName: "AlbumMusics"
            }, {
                name: "participations",
                type: "Participation",
                relationName: "MusicToParticipation"
            }, {
                name: "issues",
                type: "Issue",
                relationName: "IssueToMusic"
            }, {
                name: "pulls",
                type: "Pull",
                relationName: "MusicToPull"
            }, {
                name: "bookmarks",
                type: "Bookmark",
                relationName: "MusicBookmark"
            }, {
                name: "tagMaps",
                type: "TagMap",
                relationName: "MusicTagMap"
            }]
    }, {
        name: "Album",
        fields: [{
                name: "title",
                type: "Locales",
                relationName: ""
            }, {
                name: "band",
                type: "Band",
                relationName: "AlbumToBand"
            }, {
                name: "musics",
                type: "Music",
                relationName: "AlbumMusics"
            }, {
                name: "artists",
                type: "Artist",
                relationName: "ArtistAlbums"
            }, {
                name: "bookmarks",
                type: "Bookmark",
                relationName: "AlbumBookmark"
            }, {
                name: "tagMaps",
                type: "TagMap",
                relationName: "AlbumTagMap"
            }]
    }, {
        name: "Artist",
        fields: [{
                name: "name",
                type: "Locales",
                relationName: ""
            }, {
                name: "link",
                type: "LinkList",
                relationName: ""
            }, {
                name: "participations",
                type: "Participation",
                relationName: "ArtistToParticipation"
            }, {
                name: "bands",
                type: "Band",
                relationName: "ArtistToBand"
            }, {
                name: "albums",
                type: "Album",
                relationName: "ArtistAlbums"
            }, {
                name: "bookmarks",
                type: "Bookmark",
                relationName: "ArtistBookmark"
            }, {
                name: "tagMaps",
                type: "TagMap",
                relationName: "ArtistTagMap"
            }]
    }, {
        name: "Band",
        fields: [{
                name: "name",
                type: "Locales",
                relationName: ""
            }, {
                name: "link",
                type: "LinkList",
                relationName: ""
            }, {
                name: "musics",
                type: "Music",
                relationName: "BandToMusic"
            }, {
                name: "artists",
                type: "Artist",
                relationName: "ArtistToBand"
            }, {
                name: "albums",
                type: "Album",
                relationName: "AlbumToBand"
            }, {
                name: "bookmarks",
                type: "Bookmark",
                relationName: "BandBookmark"
            }, {
                name: "tagMaps",
                type: "TagMap",
                relationName: "BandTagMap"
            }]
    }, {
        name: "Issue",
        fields: [{
                name: "comments",
                type: "Comment",
                relationName: "IssueComment"
            }, {
                name: "music",
                type: "Music",
                relationName: "IssueToMusic"
            }, {
                name: "user",
                type: "User",
                relationName: "IssueToUser"
            }]
    }, {
        name: "Pull",
        fields: [{
                name: "score",
                type: "PullScore",
                relationName: ""
            }, {
                name: "vote",
                type: "Vote",
                relationName: "PullToVote"
            }, {
                name: "comments",
                type: "Comment",
                relationName: "PullComment"
            }, {
                name: "music",
                type: "Music",
                relationName: "MusicToPull"
            }, {
                name: "user",
                type: "User",
                relationName: "PullToUser"
            }]
    }, {
        name: "Vote",
        fields: [{
                name: "pull",
                type: "Pull",
                relationName: "PullToVote"
            }, {
                name: "users",
                type: "User",
                relationName: "UserToVote"
            }]
    }, {
        name: "Comment",
        fields: [{
                name: "pull",
                type: "Pull",
                relationName: "PullComment"
            }, {
                name: "issue",
                type: "Issue",
                relationName: "IssueComment"
            }, {
                name: "user",
                type: "User",
                relationName: "CommentToUser"
            }, {
                name: "notifications",
                type: "Notification",
                relationName: "CommentNotification"
            }]
    }, {
        name: "Bookmark",
        fields: [{
                name: "notifications",
                type: "Notification",
                relationName: "BookmarkNotification"
            }, {
                name: "music",
                type: "Music",
                relationName: "MusicBookmark"
            }, {
                name: "band",
                type: "Band",
                relationName: "BandBookmark"
            }, {
                name: "album",
                type: "Album",
                relationName: "AlbumBookmark"
            }, {
                name: "artist",
                type: "Artist",
                relationName: "ArtistBookmark"
            }, {
                name: "user",
                type: "User",
                relationName: "BookmarkToUser"
            }]
    }, {
        name: "Participation",
        fields: [{
                name: "artist",
                type: "Artist",
                relationName: "ArtistToParticipation"
            }, {
                name: "music",
                type: "Music",
                relationName: "MusicToParticipation"
            }, {
                name: "roleMap",
                type: "RoleMap",
                relationName: "ParticipationToRoleMap"
            }]
    }, {
        name: "Role",
        fields: [{
                name: "roleMap",
                type: "RoleMap",
                relationName: "RoleToRoleMap"
            }]
    }, {
        name: "RoleMap",
        fields: [{
                name: "role",
                type: "Role",
                relationName: "RoleToRoleMap"
            }, {
                name: "participation",
                type: "Participation",
                relationName: "ParticipationToRoleMap"
            }]
    }, {
        name: "Tag",
        fields: [{
                name: "tagMap",
                type: "TagMap",
                relationName: "TagToTagMap"
            }]
    }, {
        name: "TagMap",
        fields: [{
                name: "tag",
                type: "Tag",
                relationName: "TagToTagMap"
            }, {
                name: "music",
                type: "Music",
                relationName: "MusicTagMap"
            }, {
                name: "band",
                type: "Band",
                relationName: "BandTagMap"
            }, {
                name: "album",
                type: "Album",
                relationName: "AlbumTagMap"
            }, {
                name: "artist",
                type: "Artist",
                relationName: "ArtistTagMap"
            }]
    }, {
        name: "Notification",
        fields: [{
                name: "bookmarked",
                type: "Bookmark",
                relationName: "BookmarkNotification"
            }, {
                name: "followed",
                type: "Follow",
                relationName: "FollowNotification"
            }, {
                name: "commented",
                type: "Comment",
                relationName: "CommentNotification"
            }, {
                name: "user",
                type: "User",
                relationName: "NotificationToUser"
            }]
    }];
function isAccountuserFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "User";
}
function autoGenerateAccountScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {
        type: getScalarFieldValueGenerator().String({ modelName: "Account", fieldName: "type", isId: false, isUnique: false, seq: seq }),
        provider: getScalarFieldValueGenerator().String({ modelName: "Account", fieldName: "provider", isId: false, isUnique: true, seq: seq }),
        providerAccountId: getScalarFieldValueGenerator().String({ modelName: "Account", fieldName: "providerAccountId", isId: false, isUnique: true, seq: seq })
    };
}
function defineAccountFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("Account", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, _a, data;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateAccountScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _d.sent();
                        _b = {};
                        if (!isAccountuserFactory(defaultData.user)) return [3 /*break*/, 3];
                        _c = {};
                        return [4 /*yield*/, defaultData.user.build()];
                    case 2:
                        _a = (_c.create = _d.sent(),
                            _c);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = defaultData.user;
                        _d.label = 4;
                    case 4:
                        defaultAssociations = (_b.user = _a,
                            _b);
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().account.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "Account",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link Account} model.
 *
 * @param options
 * @returns factory {@link AccountFactoryInterface}
 */
export function defineAccountFactory(options) {
    return defineAccountFactoryInternal(options);
}
function isSessionuserFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "User";
}
function autoGenerateSessionScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {
        sessionToken: getScalarFieldValueGenerator().String({ modelName: "Session", fieldName: "sessionToken", isId: false, isUnique: true, seq: seq }),
        expires: getScalarFieldValueGenerator().DateTime({ modelName: "Session", fieldName: "expires", isId: false, isUnique: false, seq: seq })
    };
}
function defineSessionFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("Session", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, _a, data;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateSessionScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _d.sent();
                        _b = {};
                        if (!isSessionuserFactory(defaultData.user)) return [3 /*break*/, 3];
                        _c = {};
                        return [4 /*yield*/, defaultData.user.build()];
                    case 2:
                        _a = (_c.create = _d.sent(),
                            _c);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = defaultData.user;
                        _d.label = 4;
                    case 4:
                        defaultAssociations = (_b.user = _a,
                            _b);
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().session.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "Session",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link Session} model.
 *
 * @param options
 * @returns factory {@link SessionFactoryInterface}
 */
export function defineSessionFactory(options) {
    return defineSessionFactoryInternal(options);
}
function autoGenerateUserScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {};
}
function defineUserFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("User", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateUserScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _a.sent();
                        defaultAssociations = {};
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().user.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "User",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link User} model.
 *
 * @param options
 * @returns factory {@link UserFactoryInterface}
 */
export function defineUserFactory(options) {
    if (options === void 0) { options = {}; }
    return defineUserFactoryInternal(options);
}
function isFollowfollowerFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "User";
}
function isFollowfollowingFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "User";
}
function autoGenerateFollowScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {};
}
function defineFollowFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("Follow", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, _a, _b, data;
            var _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateFollowScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _f.sent();
                        _c = {};
                        if (!isFollowfollowerFactory(defaultData.follower)) return [3 /*break*/, 3];
                        _d = {};
                        return [4 /*yield*/, defaultData.follower.build()];
                    case 2:
                        _a = (_d.create = _f.sent(),
                            _d);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = defaultData.follower;
                        _f.label = 4;
                    case 4:
                        _c.follower = _a;
                        if (!isFollowfollowingFactory(defaultData.following)) return [3 /*break*/, 6];
                        _e = {};
                        return [4 /*yield*/, defaultData.following.build()];
                    case 5:
                        _b = (_e.create = _f.sent(),
                            _e);
                        return [3 /*break*/, 7];
                    case 6:
                        _b = defaultData.following;
                        _f.label = 7;
                    case 7:
                        defaultAssociations = (_c.following = _b,
                            _c);
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().follow.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "Follow",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link Follow} model.
 *
 * @param options
 * @returns factory {@link FollowFactoryInterface}
 */
export function defineFollowFactory(options) {
    return defineFollowFactoryInternal(options);
}
function autoGenerateVerificationTokenScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {
        identifier: getScalarFieldValueGenerator().String({ modelName: "VerificationToken", fieldName: "identifier", isId: false, isUnique: true, seq: seq }),
        token: getScalarFieldValueGenerator().String({ modelName: "VerificationToken", fieldName: "token", isId: false, isUnique: true, seq: seq }),
        expires: getScalarFieldValueGenerator().DateTime({ modelName: "VerificationToken", fieldName: "expires", isId: false, isUnique: false, seq: seq })
    };
}
function defineVerificationTokenFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("VerificationToken", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateVerificationTokenScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _a.sent();
                        defaultAssociations = {};
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().verificationToken.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "VerificationToken",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link VerificationToken} model.
 *
 * @param options
 * @returns factory {@link VerificationTokenFactoryInterface}
 */
export function defineVerificationTokenFactory(options) {
    if (options === void 0) { options = {}; }
    return defineVerificationTokenFactoryInternal(options);
}
function isMusicuserFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "User";
}
function isMusicbandFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Band";
}
function autoGenerateMusicScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {
        type: "ORIGINAL",
        visibility: "PUBLIC"
    };
}
function defineMusicFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("Music", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, _a, _b, data;
            var _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateMusicScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _f.sent();
                        _c = {};
                        if (!isMusicuserFactory(defaultData.user)) return [3 /*break*/, 3];
                        _d = {};
                        return [4 /*yield*/, defaultData.user.build()];
                    case 2:
                        _a = (_d.create = _f.sent(),
                            _d);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = defaultData.user;
                        _f.label = 4;
                    case 4:
                        _c.user = _a;
                        if (!isMusicbandFactory(defaultData.band)) return [3 /*break*/, 6];
                        _e = {};
                        return [4 /*yield*/, defaultData.band.build()];
                    case 5:
                        _b = (_e.create = _f.sent(),
                            _e);
                        return [3 /*break*/, 7];
                    case 6:
                        _b = defaultData.band;
                        _f.label = 7;
                    case 7:
                        defaultAssociations = (_c.band = _b,
                            _c);
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().music.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "Music",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link Music} model.
 *
 * @param options
 * @returns factory {@link MusicFactoryInterface}
 */
export function defineMusicFactory(options) {
    if (options === void 0) { options = {}; }
    return defineMusicFactoryInternal(options);
}
function isAlbumbandFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Band";
}
function autoGenerateAlbumScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {};
}
function defineAlbumFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("Album", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, _a, data;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateAlbumScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _d.sent();
                        _b = {};
                        if (!isAlbumbandFactory(defaultData.band)) return [3 /*break*/, 3];
                        _c = {};
                        return [4 /*yield*/, defaultData.band.build()];
                    case 2:
                        _a = (_c.create = _d.sent(),
                            _c);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = defaultData.band;
                        _d.label = 4;
                    case 4:
                        defaultAssociations = (_b.band = _a,
                            _b);
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().album.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "Album",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link Album} model.
 *
 * @param options
 * @returns factory {@link AlbumFactoryInterface}
 */
export function defineAlbumFactory(options) {
    if (options === void 0) { options = {}; }
    return defineAlbumFactoryInternal(options);
}
function autoGenerateArtistScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {};
}
function defineArtistFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("Artist", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateArtistScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _a.sent();
                        defaultAssociations = {};
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().artist.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "Artist",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link Artist} model.
 *
 * @param options
 * @returns factory {@link ArtistFactoryInterface}
 */
export function defineArtistFactory(options) {
    if (options === void 0) { options = {}; }
    return defineArtistFactoryInternal(options);
}
function autoGenerateBandScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {};
}
function defineBandFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("Band", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateBandScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _a.sent();
                        defaultAssociations = {};
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().band.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "Band",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link Band} model.
 *
 * @param options
 * @returns factory {@link BandFactoryInterface}
 */
export function defineBandFactory(options) {
    if (options === void 0) { options = {}; }
    return defineBandFactoryInternal(options);
}
function isIssuemusicFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Music";
}
function isIssueuserFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "User";
}
function autoGenerateIssueScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {
        title: getScalarFieldValueGenerator().String({ modelName: "Issue", fieldName: "title", isId: false, isUnique: false, seq: seq }),
        body: getScalarFieldValueGenerator().String({ modelName: "Issue", fieldName: "body", isId: false, isUnique: false, seq: seq })
    };
}
function defineIssueFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("Issue", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, _a, _b, data;
            var _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateIssueScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _f.sent();
                        _c = {};
                        if (!isIssuemusicFactory(defaultData.music)) return [3 /*break*/, 3];
                        _d = {};
                        return [4 /*yield*/, defaultData.music.build()];
                    case 2:
                        _a = (_d.create = _f.sent(),
                            _d);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = defaultData.music;
                        _f.label = 4;
                    case 4:
                        _c.music = _a;
                        if (!isIssueuserFactory(defaultData.user)) return [3 /*break*/, 6];
                        _e = {};
                        return [4 /*yield*/, defaultData.user.build()];
                    case 5:
                        _b = (_e.create = _f.sent(),
                            _e);
                        return [3 /*break*/, 7];
                    case 6:
                        _b = defaultData.user;
                        _f.label = 7;
                    case 7:
                        defaultAssociations = (_c.user = _b,
                            _c);
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().issue.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "Issue",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link Issue} model.
 *
 * @param options
 * @returns factory {@link IssueFactoryInterface}
 */
export function defineIssueFactory(options) {
    return defineIssueFactoryInternal(options);
}
function isPullvoteFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Vote";
}
function isPullmusicFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Music";
}
function isPulluserFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "User";
}
function autoGeneratePullScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {
        title: getScalarFieldValueGenerator().String({ modelName: "Pull", fieldName: "title", isId: false, isUnique: false, seq: seq }),
        body: getScalarFieldValueGenerator().String({ modelName: "Pull", fieldName: "body", isId: false, isUnique: false, seq: seq }),
        status: "DRAFT"
    };
}
function definePullFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("Pull", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, _a, _b, _c, data;
            var _d, _e, _f, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGeneratePullScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _h.sent();
                        _d = {};
                        if (!isPullvoteFactory(defaultData.vote)) return [3 /*break*/, 3];
                        _e = {};
                        return [4 /*yield*/, defaultData.vote.build()];
                    case 2:
                        _a = (_e.create = _h.sent(),
                            _e);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = defaultData.vote;
                        _h.label = 4;
                    case 4:
                        _d.vote = _a;
                        if (!isPullmusicFactory(defaultData.music)) return [3 /*break*/, 6];
                        _f = {};
                        return [4 /*yield*/, defaultData.music.build()];
                    case 5:
                        _b = (_f.create = _h.sent(),
                            _f);
                        return [3 /*break*/, 7];
                    case 6:
                        _b = defaultData.music;
                        _h.label = 7;
                    case 7:
                        _d.music = _b;
                        if (!isPulluserFactory(defaultData.user)) return [3 /*break*/, 9];
                        _g = {};
                        return [4 /*yield*/, defaultData.user.build()];
                    case 8:
                        _c = (_g.create = _h.sent(),
                            _g);
                        return [3 /*break*/, 10];
                    case 9:
                        _c = defaultData.user;
                        _h.label = 10;
                    case 10:
                        defaultAssociations = (_d.user = _c,
                            _d);
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().pull.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "Pull",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link Pull} model.
 *
 * @param options
 * @returns factory {@link PullFactoryInterface}
 */
export function definePullFactory(options) {
    return definePullFactoryInternal(options);
}
function isVotepullFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Pull";
}
function autoGenerateVoteScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {
        end: getScalarFieldValueGenerator().DateTime({ modelName: "Vote", fieldName: "end", isId: false, isUnique: false, seq: seq })
    };
}
function defineVoteFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("Vote", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, _a, data;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateVoteScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _d.sent();
                        _b = {};
                        if (!isVotepullFactory(defaultData.pull)) return [3 /*break*/, 3];
                        _c = {};
                        return [4 /*yield*/, defaultData.pull.build()];
                    case 2:
                        _a = (_c.create = _d.sent(),
                            _c);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = defaultData.pull;
                        _d.label = 4;
                    case 4:
                        defaultAssociations = (_b.pull = _a,
                            _b);
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().vote.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "Vote",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link Vote} model.
 *
 * @param options
 * @returns factory {@link VoteFactoryInterface}
 */
export function defineVoteFactory(options) {
    return defineVoteFactoryInternal(options);
}
function isCommentpullFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Pull";
}
function isCommentissueFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Issue";
}
function isCommentuserFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "User";
}
function autoGenerateCommentScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {
        body: getScalarFieldValueGenerator().String({ modelName: "Comment", fieldName: "body", isId: false, isUnique: false, seq: seq }),
        resourceType: "Pull"
    };
}
function defineCommentFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("Comment", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, _a, _b, _c, data;
            var _d, _e, _f, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateCommentScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _h.sent();
                        _d = {};
                        if (!isCommentpullFactory(defaultData.pull)) return [3 /*break*/, 3];
                        _e = {};
                        return [4 /*yield*/, defaultData.pull.build()];
                    case 2:
                        _a = (_e.create = _h.sent(),
                            _e);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = defaultData.pull;
                        _h.label = 4;
                    case 4:
                        _d.pull = _a;
                        if (!isCommentissueFactory(defaultData.issue)) return [3 /*break*/, 6];
                        _f = {};
                        return [4 /*yield*/, defaultData.issue.build()];
                    case 5:
                        _b = (_f.create = _h.sent(),
                            _f);
                        return [3 /*break*/, 7];
                    case 6:
                        _b = defaultData.issue;
                        _h.label = 7;
                    case 7:
                        _d.issue = _b;
                        if (!isCommentuserFactory(defaultData.user)) return [3 /*break*/, 9];
                        _g = {};
                        return [4 /*yield*/, defaultData.user.build()];
                    case 8:
                        _c = (_g.create = _h.sent(),
                            _g);
                        return [3 /*break*/, 10];
                    case 9:
                        _c = defaultData.user;
                        _h.label = 10;
                    case 10:
                        defaultAssociations = (_d.user = _c,
                            _d);
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().comment.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "Comment",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link Comment} model.
 *
 * @param options
 * @returns factory {@link CommentFactoryInterface}
 */
export function defineCommentFactory(options) {
    return defineCommentFactoryInternal(options);
}
function isBookmarkmusicFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Music";
}
function isBookmarkbandFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Band";
}
function isBookmarkalbumFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Album";
}
function isBookmarkartistFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Artist";
}
function isBookmarkuserFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "User";
}
function autoGenerateBookmarkScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {
        resourceType: "Music"
    };
}
function defineBookmarkFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("Bookmark", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, _a, _b, _c, _d, _e, data;
            var _f, _g, _h, _j, _k, _l;
            return __generator(this, function (_m) {
                switch (_m.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateBookmarkScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _m.sent();
                        _f = {};
                        if (!isBookmarkmusicFactory(defaultData.music)) return [3 /*break*/, 3];
                        _g = {};
                        return [4 /*yield*/, defaultData.music.build()];
                    case 2:
                        _a = (_g.create = _m.sent(),
                            _g);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = defaultData.music;
                        _m.label = 4;
                    case 4:
                        _f.music = _a;
                        if (!isBookmarkbandFactory(defaultData.band)) return [3 /*break*/, 6];
                        _h = {};
                        return [4 /*yield*/, defaultData.band.build()];
                    case 5:
                        _b = (_h.create = _m.sent(),
                            _h);
                        return [3 /*break*/, 7];
                    case 6:
                        _b = defaultData.band;
                        _m.label = 7;
                    case 7:
                        _f.band = _b;
                        if (!isBookmarkalbumFactory(defaultData.album)) return [3 /*break*/, 9];
                        _j = {};
                        return [4 /*yield*/, defaultData.album.build()];
                    case 8:
                        _c = (_j.create = _m.sent(),
                            _j);
                        return [3 /*break*/, 10];
                    case 9:
                        _c = defaultData.album;
                        _m.label = 10;
                    case 10:
                        _f.album = _c;
                        if (!isBookmarkartistFactory(defaultData.artist)) return [3 /*break*/, 12];
                        _k = {};
                        return [4 /*yield*/, defaultData.artist.build()];
                    case 11:
                        _d = (_k.create = _m.sent(),
                            _k);
                        return [3 /*break*/, 13];
                    case 12:
                        _d = defaultData.artist;
                        _m.label = 13;
                    case 13:
                        _f.artist = _d;
                        if (!isBookmarkuserFactory(defaultData.user)) return [3 /*break*/, 15];
                        _l = {};
                        return [4 /*yield*/, defaultData.user.build()];
                    case 14:
                        _e = (_l.create = _m.sent(),
                            _l);
                        return [3 /*break*/, 16];
                    case 15:
                        _e = defaultData.user;
                        _m.label = 16;
                    case 16:
                        defaultAssociations = (_f.user = _e,
                            _f);
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().bookmark.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "Bookmark",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link Bookmark} model.
 *
 * @param options
 * @returns factory {@link BookmarkFactoryInterface}
 */
export function defineBookmarkFactory(options) {
    return defineBookmarkFactoryInternal(options);
}
function isParticipationartistFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Artist";
}
function isParticipationmusicFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Music";
}
function autoGenerateParticipationScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {};
}
function defineParticipationFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("Participation", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, _a, _b, data;
            var _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateParticipationScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _f.sent();
                        _c = {};
                        if (!isParticipationartistFactory(defaultData.artist)) return [3 /*break*/, 3];
                        _d = {};
                        return [4 /*yield*/, defaultData.artist.build()];
                    case 2:
                        _a = (_d.create = _f.sent(),
                            _d);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = defaultData.artist;
                        _f.label = 4;
                    case 4:
                        _c.artist = _a;
                        if (!isParticipationmusicFactory(defaultData.music)) return [3 /*break*/, 6];
                        _e = {};
                        return [4 /*yield*/, defaultData.music.build()];
                    case 5:
                        _b = (_e.create = _f.sent(),
                            _e);
                        return [3 /*break*/, 7];
                    case 6:
                        _b = defaultData.music;
                        _f.label = 7;
                    case 7:
                        defaultAssociations = (_c.music = _b,
                            _c);
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().participation.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "Participation",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link Participation} model.
 *
 * @param options
 * @returns factory {@link ParticipationFactoryInterface}
 */
export function defineParticipationFactory(options) {
    return defineParticipationFactoryInternal(options);
}
function autoGenerateRoleScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {
        name: getScalarFieldValueGenerator().String({ modelName: "Role", fieldName: "name", isId: false, isUnique: true, seq: seq })
    };
}
function defineRoleFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("Role", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateRoleScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _a.sent();
                        defaultAssociations = {};
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().role.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "Role",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link Role} model.
 *
 * @param options
 * @returns factory {@link RoleFactoryInterface}
 */
export function defineRoleFactory(options) {
    if (options === void 0) { options = {}; }
    return defineRoleFactoryInternal(options);
}
function isRoleMaproleFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Role";
}
function isRoleMapparticipationFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Participation";
}
function autoGenerateRoleMapScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {};
}
function defineRoleMapFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("RoleMap", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, _a, _b, data;
            var _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateRoleMapScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _f.sent();
                        _c = {};
                        if (!isRoleMaproleFactory(defaultData.role)) return [3 /*break*/, 3];
                        _d = {};
                        return [4 /*yield*/, defaultData.role.build()];
                    case 2:
                        _a = (_d.create = _f.sent(),
                            _d);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = defaultData.role;
                        _f.label = 4;
                    case 4:
                        _c.role = _a;
                        if (!isRoleMapparticipationFactory(defaultData.participation)) return [3 /*break*/, 6];
                        _e = {};
                        return [4 /*yield*/, defaultData.participation.build()];
                    case 5:
                        _b = (_e.create = _f.sent(),
                            _e);
                        return [3 /*break*/, 7];
                    case 6:
                        _b = defaultData.participation;
                        _f.label = 7;
                    case 7:
                        defaultAssociations = (_c.participation = _b,
                            _c);
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().roleMap.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "RoleMap",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link RoleMap} model.
 *
 * @param options
 * @returns factory {@link RoleMapFactoryInterface}
 */
export function defineRoleMapFactory(options) {
    return defineRoleMapFactoryInternal(options);
}
function autoGenerateTagScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {
        name: getScalarFieldValueGenerator().String({ modelName: "Tag", fieldName: "name", isId: false, isUnique: true, seq: seq })
    };
}
function defineTagFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("Tag", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateTagScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _a.sent();
                        defaultAssociations = {};
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().tag.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "Tag",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link Tag} model.
 *
 * @param options
 * @returns factory {@link TagFactoryInterface}
 */
export function defineTagFactory(options) {
    if (options === void 0) { options = {}; }
    return defineTagFactoryInternal(options);
}
function isTagMaptagFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Tag";
}
function isTagMapmusicFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Music";
}
function isTagMapbandFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Band";
}
function isTagMapalbumFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Album";
}
function isTagMapartistFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Artist";
}
function autoGenerateTagMapScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {
        resourceType: "Music"
    };
}
function defineTagMapFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("TagMap", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, _a, _b, _c, _d, _e, data;
            var _f, _g, _h, _j, _k, _l;
            return __generator(this, function (_m) {
                switch (_m.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateTagMapScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _m.sent();
                        _f = {};
                        if (!isTagMaptagFactory(defaultData.tag)) return [3 /*break*/, 3];
                        _g = {};
                        return [4 /*yield*/, defaultData.tag.build()];
                    case 2:
                        _a = (_g.create = _m.sent(),
                            _g);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = defaultData.tag;
                        _m.label = 4;
                    case 4:
                        _f.tag = _a;
                        if (!isTagMapmusicFactory(defaultData.music)) return [3 /*break*/, 6];
                        _h = {};
                        return [4 /*yield*/, defaultData.music.build()];
                    case 5:
                        _b = (_h.create = _m.sent(),
                            _h);
                        return [3 /*break*/, 7];
                    case 6:
                        _b = defaultData.music;
                        _m.label = 7;
                    case 7:
                        _f.music = _b;
                        if (!isTagMapbandFactory(defaultData.band)) return [3 /*break*/, 9];
                        _j = {};
                        return [4 /*yield*/, defaultData.band.build()];
                    case 8:
                        _c = (_j.create = _m.sent(),
                            _j);
                        return [3 /*break*/, 10];
                    case 9:
                        _c = defaultData.band;
                        _m.label = 10;
                    case 10:
                        _f.band = _c;
                        if (!isTagMapalbumFactory(defaultData.album)) return [3 /*break*/, 12];
                        _k = {};
                        return [4 /*yield*/, defaultData.album.build()];
                    case 11:
                        _d = (_k.create = _m.sent(),
                            _k);
                        return [3 /*break*/, 13];
                    case 12:
                        _d = defaultData.album;
                        _m.label = 13;
                    case 13:
                        _f.album = _d;
                        if (!isTagMapartistFactory(defaultData.artist)) return [3 /*break*/, 15];
                        _l = {};
                        return [4 /*yield*/, defaultData.artist.build()];
                    case 14:
                        _e = (_l.create = _m.sent(),
                            _l);
                        return [3 /*break*/, 16];
                    case 15:
                        _e = defaultData.artist;
                        _m.label = 16;
                    case 16:
                        defaultAssociations = (_f.artist = _e,
                            _f);
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().tagMap.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "TagMap",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link TagMap} model.
 *
 * @param options
 * @returns factory {@link TagMapFactoryInterface}
 */
export function defineTagMapFactory(options) {
    return defineTagMapFactoryInternal(options);
}
function isNotificationbookmarkedFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Bookmark";
}
function isNotificationfollowedFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Follow";
}
function isNotificationcommentedFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "Comment";
}
function isNotificationuserFactory(x) {
    return (x === null || x === void 0 ? void 0 : x._factoryFor) === "User";
}
function autoGenerateNotificationScalarsOrEnums(_a) {
    var seq = _a.seq;
    return {
        resurceType: "Follow"
    };
}
function defineNotificationFactoryInternal(_a) {
    var _this = this;
    var defaultDataResolver = _a.defaultData;
    var seqKey = {};
    var getSeq = function () { return getSequenceCounter(seqKey); };
    var screen = createScreener("Notification", modelFieldDefinitions);
    var build = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var seq, requiredScalarData, resolveValue, defaultData, defaultAssociations, _a, _b, _c, _d, data;
            var _e, _f, _g, _h, _j;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        seq = getSeq();
                        requiredScalarData = autoGenerateNotificationScalarsOrEnums({ seq: seq });
                        resolveValue = normalizeResolver(defaultDataResolver !== null && defaultDataResolver !== void 0 ? defaultDataResolver : {});
                        return [4 /*yield*/, resolveValue({ seq: seq })];
                    case 1:
                        defaultData = _k.sent();
                        _e = {};
                        if (!isNotificationbookmarkedFactory(defaultData.bookmarked)) return [3 /*break*/, 3];
                        _f = {};
                        return [4 /*yield*/, defaultData.bookmarked.build()];
                    case 2:
                        _a = (_f.create = _k.sent(),
                            _f);
                        return [3 /*break*/, 4];
                    case 3:
                        _a = defaultData.bookmarked;
                        _k.label = 4;
                    case 4:
                        _e.bookmarked = _a;
                        if (!isNotificationfollowedFactory(defaultData.followed)) return [3 /*break*/, 6];
                        _g = {};
                        return [4 /*yield*/, defaultData.followed.build()];
                    case 5:
                        _b = (_g.create = _k.sent(),
                            _g);
                        return [3 /*break*/, 7];
                    case 6:
                        _b = defaultData.followed;
                        _k.label = 7;
                    case 7:
                        _e.followed = _b;
                        if (!isNotificationcommentedFactory(defaultData.commented)) return [3 /*break*/, 9];
                        _h = {};
                        return [4 /*yield*/, defaultData.commented.build()];
                    case 8:
                        _c = (_h.create = _k.sent(),
                            _h);
                        return [3 /*break*/, 10];
                    case 9:
                        _c = defaultData.commented;
                        _k.label = 10;
                    case 10:
                        _e.commented = _c;
                        if (!isNotificationuserFactory(defaultData.user)) return [3 /*break*/, 12];
                        _j = {};
                        return [4 /*yield*/, defaultData.user.build()];
                    case 11:
                        _d = (_j.create = _k.sent(),
                            _j);
                        return [3 /*break*/, 13];
                    case 12:
                        _d = defaultData.user;
                        _k.label = 13;
                    case 13:
                        defaultAssociations = (_e.user = _d,
                            _e);
                        data = __assign(__assign(__assign(__assign({}, requiredScalarData), defaultData), defaultAssociations), inputData);
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var buildList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return build(data); })); };
    var pickForConnect = function (inputData) { return ({
        id: inputData.id
    }); };
    var create = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, build(inputData).then(screen)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, getClient().notification.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    var createList = function (inputData) { return Promise.all(normalizeList(inputData).map(function (data) { return create(data); })); };
    var createForConnect = function (inputData) {
        if (inputData === void 0) { inputData = {}; }
        return create(inputData).then(pickForConnect);
    };
    return {
        _factoryFor: "Notification",
        build: build,
        buildList: buildList,
        buildCreateInput: build,
        pickForConnect: pickForConnect,
        create: create,
        createList: createList,
        createForConnect: createForConnect,
    };
}
/**
 * Define factory for {@link Notification} model.
 *
 * @param options
 * @returns factory {@link NotificationFactoryInterface}
 */
export function defineNotificationFactory(options) {
    return defineNotificationFactoryInternal(options);
}
