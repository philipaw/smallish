export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** DateTime */
  DateTime: any,
};

export type AuthPayload = {
   __typename?: 'AuthPayload',
  token: Scalars['String'],
  user: User,
};

export type BooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>,
  not?: Maybe<Scalars['Boolean']>,
};

export type Chat = {
   __typename?: 'Chat',
  id: Scalars['ID'],
  content: Scalars['String'],
  sender: User,
  group: Group,
};

export type ChatCreateInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  content: Scalars['String'],
  sender: UserCreateOneWithoutSenderInput,
  group: GroupCreateOneWithoutGroupInput,
};

export type ChatCreateOneWithoutChatInput = {
  create?: Maybe<ChatCreateWithoutSenderInput>,
  connect?: Maybe<ChatWhereUniqueInput>,
};

export type ChatCreateWithoutGroupInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  content: Scalars['String'],
  sender: UserCreateOneWithoutSenderInput,
};

export type ChatCreateWithoutSenderInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  content: Scalars['String'],
  group: GroupCreateOneWithoutGroupInput,
};

export type ChatUpdateInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  content?: Maybe<Scalars['String']>,
  sender?: Maybe<UserUpdateOneRequiredWithoutChatInput>,
  group?: Maybe<GroupUpdateOneRequiredWithoutChatInput>,
};

export type ChatUpdateOneWithoutGroupInput = {
  create?: Maybe<ChatCreateWithoutGroupInput>,
  connect?: Maybe<ChatWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<ChatUpdateWithoutGroupDataInput>,
  upsert?: Maybe<ChatUpsertWithoutGroupInput>,
};

export type ChatUpdateOneWithoutSenderInput = {
  create?: Maybe<ChatCreateWithoutSenderInput>,
  connect?: Maybe<ChatWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<ChatUpdateWithoutSenderDataInput>,
  upsert?: Maybe<ChatUpsertWithoutSenderInput>,
};

export type ChatUpdateWithoutGroupDataInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  content?: Maybe<Scalars['String']>,
  sender?: Maybe<UserUpdateOneRequiredWithoutChatInput>,
};

export type ChatUpdateWithoutSenderDataInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  content?: Maybe<Scalars['String']>,
  group?: Maybe<GroupUpdateOneRequiredWithoutChatInput>,
};

export type ChatUpsertWithoutGroupInput = {
  update: ChatUpdateWithoutGroupDataInput,
  create: ChatCreateWithoutGroupInput,
};

export type ChatUpsertWithoutSenderInput = {
  update: ChatUpdateWithoutSenderDataInput,
  create: ChatCreateWithoutSenderInput,
};

export type ChatWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};


export type Group = {
   __typename?: 'Group',
  id: Scalars['ID'],
  name: Scalars['String'],
  admins?: Maybe<Array<User>>,
  members?: Maybe<Array<User>>,
};


export type GroupAdminsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type GroupMembersArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type GroupCreateInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  admins?: Maybe<UserCreateManyWithoutAdminsInput>,
  members?: Maybe<UserCreateManyWithoutMembersInput>,
  chat?: Maybe<ChatCreateOneWithoutChatInput>,
};

export type GroupCreateManyWithoutGroupsAdminForInput = {
  create?: Maybe<Array<GroupCreateWithoutAdminsInput>>,
  connect?: Maybe<Array<GroupWhereUniqueInput>>,
};

export type GroupCreateManyWithoutGroupsInput = {
  create?: Maybe<Array<GroupCreateWithoutMembersInput>>,
  connect?: Maybe<Array<GroupWhereUniqueInput>>,
};

export type GroupCreateOneWithoutGroupInput = {
  create?: Maybe<GroupCreateWithoutChatInput>,
  connect?: Maybe<GroupWhereUniqueInput>,
};

export type GroupCreateWithoutAdminsInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  members?: Maybe<UserCreateManyWithoutMembersInput>,
  chat?: Maybe<ChatCreateOneWithoutChatInput>,
};

export type GroupCreateWithoutChatInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  admins?: Maybe<UserCreateManyWithoutAdminsInput>,
  members?: Maybe<UserCreateManyWithoutMembersInput>,
};

export type GroupCreateWithoutMembersInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  admins?: Maybe<UserCreateManyWithoutAdminsInput>,
  chat?: Maybe<ChatCreateOneWithoutChatInput>,
};

export type GroupUpdateInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  admins?: Maybe<UserUpdateManyWithoutGroupsAdminForInput>,
  members?: Maybe<UserUpdateManyWithoutGroupsInput>,
  chat?: Maybe<ChatUpdateOneWithoutGroupInput>,
};

export type GroupUpdateManyDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
};

export type GroupUpdateManyWithoutAdminsInput = {
  create?: Maybe<Array<GroupCreateWithoutAdminsInput>>,
  connect?: Maybe<Array<GroupWhereUniqueInput>>,
  set?: Maybe<Array<GroupWhereUniqueInput>>,
  disconnect?: Maybe<Array<GroupWhereUniqueInput>>,
  delete?: Maybe<Array<GroupWhereUniqueInput>>,
  update?: Maybe<Array<GroupUpdateWithWhereUniqueWithoutAdminsInput>>,
  updateMany?: Maybe<Array<GroupUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<MutationUpdateOnePostWhereInput>>,
  upsert?: Maybe<Array<GroupUpsertWithWhereUniqueWithoutAdminsInput>>,
};

export type GroupUpdateManyWithoutMembersInput = {
  create?: Maybe<Array<GroupCreateWithoutMembersInput>>,
  connect?: Maybe<Array<GroupWhereUniqueInput>>,
  set?: Maybe<Array<GroupWhereUniqueInput>>,
  disconnect?: Maybe<Array<GroupWhereUniqueInput>>,
  delete?: Maybe<Array<GroupWhereUniqueInput>>,
  update?: Maybe<Array<GroupUpdateWithWhereUniqueWithoutMembersInput>>,
  updateMany?: Maybe<Array<GroupUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<MutationUpdateOnePostWhereInput>>,
  upsert?: Maybe<Array<GroupUpsertWithWhereUniqueWithoutMembersInput>>,
};

export type GroupUpdateManyWithWhereNestedInput = {
  where: MutationUpdateOnePostWhereInput,
  data: GroupUpdateManyDataInput,
};

export type GroupUpdateOneRequiredWithoutChatInput = {
  create?: Maybe<GroupCreateWithoutChatInput>,
  connect?: Maybe<GroupWhereUniqueInput>,
  update?: Maybe<GroupUpdateWithoutChatDataInput>,
  upsert?: Maybe<GroupUpsertWithoutChatInput>,
};

export type GroupUpdateWithoutAdminsDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  members?: Maybe<UserUpdateManyWithoutGroupsInput>,
  chat?: Maybe<ChatUpdateOneWithoutGroupInput>,
};

export type GroupUpdateWithoutChatDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  admins?: Maybe<UserUpdateManyWithoutGroupsAdminForInput>,
  members?: Maybe<UserUpdateManyWithoutGroupsInput>,
};

export type GroupUpdateWithoutMembersDataInput = {
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  admins?: Maybe<UserUpdateManyWithoutGroupsAdminForInput>,
  chat?: Maybe<ChatUpdateOneWithoutGroupInput>,
};

export type GroupUpdateWithWhereUniqueWithoutAdminsInput = {
  where: GroupWhereUniqueInput,
  data: GroupUpdateWithoutAdminsDataInput,
};

export type GroupUpdateWithWhereUniqueWithoutMembersInput = {
  where: GroupWhereUniqueInput,
  data: GroupUpdateWithoutMembersDataInput,
};

export type GroupUpsertWithoutChatInput = {
  update: GroupUpdateWithoutChatDataInput,
  create: GroupCreateWithoutChatInput,
};

export type GroupUpsertWithWhereUniqueWithoutAdminsInput = {
  where: GroupWhereUniqueInput,
  update: GroupUpdateWithoutAdminsDataInput,
  create: GroupCreateWithoutAdminsInput,
};

export type GroupUpsertWithWhereUniqueWithoutMembersInput = {
  where: GroupWhereUniqueInput,
  update: GroupUpdateWithoutMembersDataInput,
  create: GroupCreateWithoutMembersInput,
};

export type GroupWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createOneGroup: Group,
  updateOneGroup?: Maybe<Group>,
  createOnePost: Post,
  updateOnePost?: Maybe<Post>,
  createOneChat: Chat,
  updateOneChat?: Maybe<Chat>,
  signup: AuthPayload,
  login: AuthPayload,
  createDraft: Post,
  deletePost?: Maybe<Post>,
  publish?: Maybe<Post>,
  setGroupAdmins: Group,
  setGroupMembers: Group,
};


export type MutationCreateOneGroupArgs = {
  data: GroupCreateInput
};


export type MutationUpdateOneGroupArgs = {
  data: GroupUpdateInput,
  where: GroupWhereUniqueInput
};


export type MutationCreateOnePostArgs = {
  data: PostCreateInput
};


export type MutationUpdateOnePostArgs = {
  data: PostUpdateInput,
  where: PostWhereUniqueInput
};


export type MutationCreateOneChatArgs = {
  data: ChatCreateInput
};


export type MutationUpdateOneChatArgs = {
  data: ChatUpdateInput,
  where: ChatWhereUniqueInput
};


export type MutationSignupArgs = {
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>
};


export type MutationLoginArgs = {
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>
};


export type MutationCreateDraftArgs = {
  title?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>
};


export type MutationDeletePostArgs = {
  id?: Maybe<Scalars['ID']>
};


export type MutationPublishArgs = {
  id?: Maybe<Scalars['ID']>
};


export type MutationSetGroupAdminsArgs = {
  id?: Maybe<Scalars['ID']>,
  adminIds?: Maybe<Array<Scalars['ID']>>
};


export type MutationSetGroupMembersArgs = {
  id?: Maybe<Scalars['ID']>,
  memberIds?: Maybe<Array<Scalars['ID']>>
};

export type MutationUpdateOneChatFilter = {
  equals?: Maybe<Scalars['DateTime']>,
  not?: Maybe<Scalars['DateTime']>,
  in?: Maybe<Array<Scalars['DateTime']>>,
  notIn?: Maybe<Array<Scalars['DateTime']>>,
  lt?: Maybe<Scalars['DateTime']>,
  lte?: Maybe<Scalars['DateTime']>,
  gt?: Maybe<Scalars['DateTime']>,
  gte?: Maybe<Scalars['DateTime']>,
};

export type MutationUpdateOneChatWhereInput = {
  id?: Maybe<StringFilter>,
  createdAt?: Maybe<MutationUpdateOneChatFilter>,
  updatedAt?: Maybe<MutationUpdateOneChatFilter>,
  published?: Maybe<BooleanFilter>,
  title?: Maybe<StringFilter>,
  content?: Maybe<NullableStringFilter>,
  AND?: Maybe<Array<MutationUpdateOneChatWhereInput>>,
  OR?: Maybe<Array<MutationUpdateOneChatWhereInput>>,
  NOT?: Maybe<Array<MutationUpdateOneChatWhereInput>>,
};

export type MutationUpdateOneGroupFilter = {
  every?: Maybe<MutationUpdateOneGroupWhereInput>,
  some?: Maybe<MutationUpdateOneGroupWhereInput>,
  none?: Maybe<MutationUpdateOneGroupWhereInput>,
};

export type MutationUpdateOneGroupWhereInput = {
  id?: Maybe<StringFilter>,
  email?: Maybe<StringFilter>,
  password?: Maybe<StringFilter>,
  name?: Maybe<NullableStringFilter>,
  posts?: Maybe<MutationUpdateOneGroupFilter>,
  groupsAdminFor?: Maybe<MutationUpdateOneGroupFilter>,
  groups?: Maybe<MutationUpdateOneGroupFilter>,
  AND?: Maybe<Array<MutationUpdateOneGroupWhereInput>>,
  OR?: Maybe<Array<MutationUpdateOneGroupWhereInput>>,
  NOT?: Maybe<Array<MutationUpdateOneGroupWhereInput>>,
};

export type MutationUpdateOnePostFilter = {
  every?: Maybe<MutationUpdateOnePostWhereInput>,
  some?: Maybe<MutationUpdateOnePostWhereInput>,
  none?: Maybe<MutationUpdateOnePostWhereInput>,
};

export type MutationUpdateOnePostWhereInput = {
  id?: Maybe<StringFilter>,
  name?: Maybe<StringFilter>,
  admins?: Maybe<MutationUpdateOnePostFilter>,
  members?: Maybe<MutationUpdateOnePostFilter>,
  AND?: Maybe<Array<MutationUpdateOnePostWhereInput>>,
  OR?: Maybe<Array<MutationUpdateOnePostWhereInput>>,
  NOT?: Maybe<Array<MutationUpdateOnePostWhereInput>>,
};

export type NullableStringFilter = {
  equals?: Maybe<Scalars['String']>,
  not?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Scalars['String']>>,
  notIn?: Maybe<Array<Scalars['String']>>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  contains?: Maybe<Scalars['String']>,
  startsWith?: Maybe<Scalars['String']>,
  endsWith?: Maybe<Scalars['String']>,
};

export type Post = {
   __typename?: 'Post',
  id: Scalars['ID'],
  published: Scalars['Boolean'],
  title: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  author: User,
};

export type PostCreateInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  published?: Maybe<Scalars['Boolean']>,
  title: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  author: UserCreateOneWithoutAuthorInput,
};

export type PostCreateManyWithoutPostsInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>,
  connect?: Maybe<Array<PostWhereUniqueInput>>,
};

export type PostCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  published?: Maybe<Scalars['Boolean']>,
  title: Scalars['String'],
  content?: Maybe<Scalars['String']>,
};

export type PostUpdateInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  published?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>,
};

export type PostUpdateManyDataInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  published?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
};

export type PostUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>,
  connect?: Maybe<Array<PostWhereUniqueInput>>,
  set?: Maybe<Array<PostWhereUniqueInput>>,
  disconnect?: Maybe<Array<PostWhereUniqueInput>>,
  delete?: Maybe<Array<PostWhereUniqueInput>>,
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>,
  updateMany?: Maybe<Array<PostUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<MutationUpdateOneChatWhereInput>>,
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>,
};

export type PostUpdateManyWithWhereNestedInput = {
  where: MutationUpdateOneChatWhereInput,
  data: PostUpdateManyDataInput,
};

export type PostUpdateWithoutAuthorDataInput = {
  id?: Maybe<Scalars['ID']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  published?: Maybe<Scalars['Boolean']>,
  title?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput,
  data: PostUpdateWithoutAuthorDataInput,
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput,
  update: PostUpdateWithoutAuthorDataInput,
  create: PostCreateWithoutAuthorInput,
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Query = {
   __typename?: 'Query',
  user?: Maybe<User>,
  users?: Maybe<Array<User>>,
  chat?: Maybe<Chat>,
  chats?: Maybe<Array<Chat>>,
  group?: Maybe<Group>,
  groups?: Maybe<Array<Group>>,
  me: User,
  otherUsers?: Maybe<User>,
  feed: Array<Post>,
  filterPosts: Array<Post>,
  post?: Maybe<Post>,
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput
};


export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryChatArgs = {
  where: ChatWhereUniqueInput
};


export type QueryChatsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryGroupArgs = {
  where: GroupWhereUniqueInput
};


export type QueryGroupsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryFilterPostsArgs = {
  searchString?: Maybe<Scalars['String']>
};


export type QueryPostArgs = {
  id?: Maybe<Scalars['ID']>
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>,
  not?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Scalars['String']>>,
  notIn?: Maybe<Array<Scalars['String']>>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  contains?: Maybe<Scalars['String']>,
  startsWith?: Maybe<Scalars['String']>,
  endsWith?: Maybe<Scalars['String']>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  email: Scalars['String'],
  posts?: Maybe<Array<Post>>,
};


export type UserPostsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type UserCreateManyWithoutAdminsInput = {
  create?: Maybe<Array<UserCreateWithoutGroupsAdminForInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
};

export type UserCreateManyWithoutMembersInput = {
  create?: Maybe<Array<UserCreateWithoutGroupsInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
};

export type UserCreateOneWithoutAuthorInput = {
  create?: Maybe<UserCreateWithoutPostsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateOneWithoutSenderInput = {
  create?: Maybe<UserCreateWithoutChatInput>,
  connect?: Maybe<UserWhereUniqueInput>,
};

export type UserCreateWithoutChatInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  password: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  posts?: Maybe<PostCreateManyWithoutPostsInput>,
  groupsAdminFor?: Maybe<GroupCreateManyWithoutGroupsAdminForInput>,
  groups?: Maybe<GroupCreateManyWithoutGroupsInput>,
};

export type UserCreateWithoutGroupsAdminForInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  password: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  posts?: Maybe<PostCreateManyWithoutPostsInput>,
  groups?: Maybe<GroupCreateManyWithoutGroupsInput>,
  chat?: Maybe<ChatCreateOneWithoutChatInput>,
};

export type UserCreateWithoutGroupsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  password: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  posts?: Maybe<PostCreateManyWithoutPostsInput>,
  groupsAdminFor?: Maybe<GroupCreateManyWithoutGroupsAdminForInput>,
  chat?: Maybe<ChatCreateOneWithoutChatInput>,
};

export type UserCreateWithoutPostsInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  password: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  groupsAdminFor?: Maybe<GroupCreateManyWithoutGroupsAdminForInput>,
  groups?: Maybe<GroupCreateManyWithoutGroupsInput>,
  chat?: Maybe<ChatCreateOneWithoutChatInput>,
};

export type UserUpdateManyDataInput = {
  id?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type UserUpdateManyWithoutGroupsAdminForInput = {
  create?: Maybe<Array<UserCreateWithoutGroupsAdminForInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  set?: Maybe<Array<UserWhereUniqueInput>>,
  disconnect?: Maybe<Array<UserWhereUniqueInput>>,
  delete?: Maybe<Array<UserWhereUniqueInput>>,
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutGroupsAdminForInput>>,
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<MutationUpdateOneGroupWhereInput>>,
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutGroupsAdminForInput>>,
};

export type UserUpdateManyWithoutGroupsInput = {
  create?: Maybe<Array<UserCreateWithoutGroupsInput>>,
  connect?: Maybe<Array<UserWhereUniqueInput>>,
  set?: Maybe<Array<UserWhereUniqueInput>>,
  disconnect?: Maybe<Array<UserWhereUniqueInput>>,
  delete?: Maybe<Array<UserWhereUniqueInput>>,
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutGroupsInput>>,
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<MutationUpdateOneGroupWhereInput>>,
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutGroupsInput>>,
};

export type UserUpdateManyWithWhereNestedInput = {
  where: MutationUpdateOneGroupWhereInput,
  data: UserUpdateManyDataInput,
};

export type UserUpdateOneRequiredWithoutChatInput = {
  create?: Maybe<UserCreateWithoutChatInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  update?: Maybe<UserUpdateWithoutChatDataInput>,
  upsert?: Maybe<UserUpsertWithoutChatInput>,
};

export type UserUpdateOneRequiredWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>,
  connect?: Maybe<UserWhereUniqueInput>,
  update?: Maybe<UserUpdateWithoutPostsDataInput>,
  upsert?: Maybe<UserUpsertWithoutPostsInput>,
};

export type UserUpdateWithoutChatDataInput = {
  id?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>,
  groupsAdminFor?: Maybe<GroupUpdateManyWithoutAdminsInput>,
  groups?: Maybe<GroupUpdateManyWithoutMembersInput>,
};

export type UserUpdateWithoutGroupsAdminForDataInput = {
  id?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>,
  groups?: Maybe<GroupUpdateManyWithoutMembersInput>,
  chat?: Maybe<ChatUpdateOneWithoutSenderInput>,
};

export type UserUpdateWithoutGroupsDataInput = {
  id?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>,
  groupsAdminFor?: Maybe<GroupUpdateManyWithoutAdminsInput>,
  chat?: Maybe<ChatUpdateOneWithoutSenderInput>,
};

export type UserUpdateWithoutPostsDataInput = {
  id?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  groupsAdminFor?: Maybe<GroupUpdateManyWithoutAdminsInput>,
  groups?: Maybe<GroupUpdateManyWithoutMembersInput>,
  chat?: Maybe<ChatUpdateOneWithoutSenderInput>,
};

export type UserUpdateWithWhereUniqueWithoutGroupsAdminForInput = {
  where: UserWhereUniqueInput,
  data: UserUpdateWithoutGroupsAdminForDataInput,
};

export type UserUpdateWithWhereUniqueWithoutGroupsInput = {
  where: UserWhereUniqueInput,
  data: UserUpdateWithoutGroupsDataInput,
};

export type UserUpsertWithoutChatInput = {
  update: UserUpdateWithoutChatDataInput,
  create: UserCreateWithoutChatInput,
};

export type UserUpsertWithoutPostsInput = {
  update: UserUpdateWithoutPostsDataInput,
  create: UserCreateWithoutPostsInput,
};

export type UserUpsertWithWhereUniqueWithoutGroupsAdminForInput = {
  where: UserWhereUniqueInput,
  update: UserUpdateWithoutGroupsAdminForDataInput,
  create: UserCreateWithoutGroupsAdminForInput,
};

export type UserUpsertWithWhereUniqueWithoutGroupsInput = {
  where: UserWhereUniqueInput,
  update: UserUpdateWithoutGroupsDataInput,
  create: UserCreateWithoutGroupsInput,
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
};
