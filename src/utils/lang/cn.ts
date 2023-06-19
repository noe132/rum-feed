export const content = {
  justNow: '刚刚',
  minutesAgo: '分钟前',
  hoursAgo: '小时前',
  replace: '更换',
  upload: '上传',
  expand: '展开',
  shrink: '收起',
  selectFromImageLib: '在图库中选择',
  selectAvatar: '选择头像',
  uploadImage: '上传图片',
  selectProvider: '选择操作方式',
  moveOrDragImage: '移动或缩放图片',
  like: '赞',
  open: '查看',
  lastSeenHere: '上次看到这里',
  replyYourComment: '回复了你的评论',
  replyYourContent: '评论了你的内容',
  likeFor: (name: string) => `赞了你的${name}`,
  retweetYour: (name: string) => `转发了你的${name.toLowerCase()}`,
  object: '内容',
  notExist: (name: string) => `还没有${name}`,
  comment: '评论',
  reply: '回复',
  publish: '发布',
  back: '返回',
  sender: '发送人',
  group: '种子网络',
  data: '数据',
  sign: '签名',
  timestamp: '时间戳',
  info: '详情',
  somethingWrong: '貌似出错了，请重新试试',
  nickname: '昵称',
  yes: '确定',
  ok: '确定',
  edit: '编辑',
  editProfile: '编辑资料',
  whatsHappening: '有什么想法？',
  version: '版本',
  message: '消息',
  requireMaxLength: (name: string, length: number) => `${name}不能超过${length}个字哦`,
  leaveYourComment: '留下你的评论...',
  totalReply: (count: number) => `${count} 条回复`,
  totalComment: (count: number) => `${count} 条评论`,
  checkMoreComments: (count: number) => `共${count}条评论，点击查看`,
  openImage: '查看图片',
  syncing: '同步中',
  maxImageCount: (count: number) => `最多添加 ${count} 张图片`,
  maxByteLength: '图片的总体积超过限制，请尝试压缩图片，或减少图片数量',
  update: '更新',
  image: '图片',
  copied: '已复制',
  noPermission: '您还没有权限执行这个操作，请让站长给您加权限',
  seed: '种子',
  copy: '复制',
  node: '节点',
  disconnected: '无法连接节点',
  block: '区块',
  loadMore: '加载更多',
  delete: '删除',
  deleted: '已删除',
  deletedFromClient: '已从界面上移除',
  contentNotFound: '没有找到内容',
  invalid: (name: string) => `${name} 错误了`,
  installMetaMaskFirst: '请先安装 MetaMask 插件',
  gotIt: '我知道了',
  install: '安装',
  cancel: '取消',
  redirecting: '跳转中',
  createWallet: '创建密钥',
  importWallet: '导入密钥',
  connectWallet: '连接钱包',
  submitContentToHere: '您的内容将发送到这里',
  shortcut: '快捷键',
  notSupport: '不支持',
  noRelatedFound: (name: string) => `没有找到相关的${name}`,
  tryAnotherKeyword: '换一个关键词试试？',
  searchForImages: '搜索图片',
  deleteByAdminTip: '这是一条来自他人的内容，由于您是管理员，所以您有权利<strong>从界面上</strong>移除这条内容，确定移除吗？',
  exit: '退出',
  home: '首页',
  search: '搜索',
  me: '我的',
  canNotParseThisSeed: '无法解析这个种子',
  added: '已添加',
  canNotFetchFromChainApi: '添加成功，但种子中提供的 API 无法访问，所以暂时没有同步到任何数据',
  seedHasAlreadyBeenAdded: '该种子已经添加过了哦',
  newlyAddedSeedNeedToSyncContent: '新添加的种子网络需要同步内容',
  syncedContents: (count: number) => `已同步 ${count} 条内容`,
  youCanCloseWindow: '您可以关闭此窗口',
  contentsWillContinueToSyncInBackground: '后台会继续同步数据的',
  addSeed: '添加种子网络',
  followPeopleYouAreInterestedIn: '去关注你感兴趣的人吧 ~',
  letUsPostSomething: '来发布一条内容吧',
  letUsLeaveAComment: '来发布一条评论吧 ~',
  notFound: (name: string) => `没有找到${name}`,
  user: '用户',
  following: '关注',
  followers: '被关注',
  mute: '屏蔽 TA ',
  muted: '已屏蔽',
  youAreSureTo: (action: string) => `确定${action}吗？`,
  follow: '关注',
  unfollow: '取消关注',
  unmuted: '取消屏蔽',
  empty: '空空如也 ~',
  published: '发布成功',
  content: '内容',
  minimumLikes: '至少要有几个点赞',
  minimumComments: '至少要有几条评论',
  conditionFilter: '条件筛选',
  commentDetail: '评论详情',
  filter: '筛选',
  followed: '已关注',
  followedYou: '关注了你',
  latest: '最新',
  discovery: '发现',
  allContentsComeFromTwitterUser: '本号所有内容来自推特用户',
  allContentsComeFromWeiboUser: '本号所有内容来自微博用户',
  mutedList: '屏蔽列表',
  language: '语言',
  save: '保存',
  openExternalLink: '打开外部链接',
  processing: '正在处理',
  done: '完成',
  close: '关闭',
  saved: '已保存',
  wallet: '密钥',
  privateKey: '私钥',
  copyAndSaveYourPrivateKey: '复制并保存好私钥',
  copyAndSaveYourJsonWallet: '复制并保存好 Keystore',
  generateJsonWallet: '生成 Keystore',
  jsonWallet: 'Keystore',
  generate: '生成',
  importJsonWallet: '导入 Keystore',
  password: '密码',
  thisWalletWasConnectedTo: '这个账户连接于： ',
  connected: '连接',
  nodes: '个节点',
  synced: '同步',
  contents: '条内容',
  exportData: '导出数据',
  pleaseExportDataOnDesktop: '请使用电脑来导出数据哦',
  copyLink: '复制链接',
  retweet: '转发',
  contentFromMuted: '来自您屏蔽的用户，内容已隐藏',
  contentFromMutedMe: '您已被 TA 屏蔽，无法查看内容',
  contentFromMutedMeDialogMessage: (name: string) => `您已被 <span class="text-sky-500">${name}</span> 屏蔽，无法查看 <span class="text-sky-500">${name}</span> 的内容`,
  mismatchedAddress: '加解密的 address 不匹配',
  unableToCommentBecauseOfMuted: '您已被 TA 屏蔽，无法进行回复',
  loginBy: (name: string) => `${name} 登录`,
  publishedPost: '发布内容',
  publishedComment: '发布评论',
  activities: '动态',
  favorite: '加入收藏',
  unfavorite: '取消收藏',
  favorited: '已收藏',
  favorites: '收藏',
  onChainInfo: '链上信息',
  directMessage: '私信',
  needOnePostToUseDM: '您未曾发布过内容，无法使用私信功能哦。请至少发布一条内容。',
  unableToUseDMOfMuted: '您已被 TA 屏蔽，无法发送私信',
  loading: '加载中...',
  uploadingVideo: '正在处理视频，可能需要较长的时间',
  uploadVideoByClickingButton: '视频文件请通过点击按钮来上传',
  noAllowVideoAndImageAtTheSameTime: '您已上传了视频，不能同时上传图片哦',
  videoCannotBePlayed: '无法播放视频',
};

export type Content = typeof content;
