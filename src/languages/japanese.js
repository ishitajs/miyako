const Language = require("../structures/Language.js");
const constants = require("@utils/constants");

module.exports = new Language("japanese", "日本語", {
  LANGUAGE_SET: "言語は日本語に設定されました",
  GUILD_ONLY: "馬鹿! このコマンドはサーバーでのみ使用できます。私のダイレクトメッセージでは何をしてるの?",
  OWNER_ONLY: "馬鹿! 何をしてんだよ? そのコマンドは私のマスターのためだけです",
  CHANNEL_NOT_FOUND: "そのチャンネルが見つかりません",
  ROLE_NOT_FOUND: "そのロールが存在しません",
  WELCOME_MESSAGES: [
    "お! おはようございます **{{user}}-さん**",
    "**{{user}}-さん**, **{{guild}}**へようこそ!"
  ],
  GOODBYE_MESSAGES: [
    "**{{user}}-さん**... いいえ...",
    "**{{user}}-さん**は出るのボタンを発見しました"
  ],
  LEVEL_MESSAGES: [
    "あなたはただレベル**{{level}}**、悪くない...",
    "**{{user}}** あなたのレベル? それは**{{level}}**, 馬鹿!",
    "**{{user}}** またこれ? とにかく、あなたはレベル**{{level}}**です"
  ],
  DAILY_SUCCESS_MESSAGES: [
    "やった! あなたは**{{amount}}**を得ました",
    "あなたのお父さんは**{{amount}}**をあげた? 私は毎時はもっと得ます!",
    "な-なに?! あなたは**{{amount}}**を得ました、うわー！"
  ],
  PING_MESSAGES: [
    "ば-ばか! 私のピングは**{{ms}}ミリ秒**だよ! 今幸せなの?",
    "これ大丈夫? 私は**{{ms}}ミリ秒**で回答しました",
    "**{{user}}**はい私はここだよ、**{{ms}}ミリ秒**で回答しました",
    "私はそれを正しくしましたか？**{{ms}}ミリ秒**で回答しました",
    "あなたは私にそのメッセージを読むのにどのくらいかかりましたかわかりますか？ あなたは私の時間の**{{ms}}ミリ秒**を無駄にしました",
    "**{{user}}**, ね, このメッセージを送信するのに**{{ms}}ミリ秒**かかりました"
  ],
  RELOAD_ERR_UNLOAD: [
    "**{{user}}-さん**、私はそれを壊したと思います... これが起こりました: **{{response}}**"
  ],
  RELOAD_NOT_FOUND: [
    "何をしてるの? **{{command}}**は存在しません! 馬鹿!"
  ],
  RELOAD_MISSING_ARG: [
    "な-なに?! 何をしていいのか分かりません、あなたは私に何も与えませんでした!"
  ],
  LEVELUP_MESSAGES: [
    "な-なに？ あなたはレベル**{{level}}**早く到達しました...",
    "やった！ あなたはレベルアップされました、**{{user}}-さん**！ あなたは今レベル**{{level}}**、それは何も意味するのではありません！",
    "あなたはただレベル**{{level}}**? 最低!",
    "**{{user}}-さん**、あなたがレベル**{{level}}**のために今私を忘れないでください",
    "どのようにあなたはレベル**{{level}}** あなた馬鹿！"
  ],
  COMMAND_STATS_DESCRIPTION: "こんにちは、私はミヤコです。 あなたのサーバーのためのオールインワンエンターテイメントボットが私のマスターRavener#5796によってあなたにもたらされました",
  COMMAND_STATS_TITLE: "ミヤコ - ボット統計",
  COMMAND_STATS_FIELD: "ボット統計",
  COMMAND_CHOOSE: (choice) => `${choice}と思います`,
  COMMAND_CHOOSE_THINKING: (user) => `${constants.typing} **${user}**は考えています...`,
  COMMAND_8BALL_ASK: "馬鹿! 何を尋ねたいですか？",
  COMMAND_PROFILE_LEVEL: "レベル",
  COMMAND_PROFILE_POINTS: "ポイント",
  COMMAND_PROFILE_REP: "評判ポイント",
  COMMAND_CAT_TITLE: "ランダムな猫",
  COMMAND_DOG_TITLE: "ランダムな犬",
  COMMAND_MYID: (user) => `${user} あなたのユーザーIDは **${user.id}**`,
  COMMAND_KICK_BOT: "馬鹿! 何で私をキックしますか?",
  COMMAND_KICK_SELF: "馬鹿! 何で自分をキックしますか?",
  COMMAND_KICK_OWNER: "馬鹿! オーナーをキックできません",
  COMMAND_KICK_USER_CANNOT: "あなたはこのユーザをキックできません",
  COMMAND_KICK_BOT_CANNOT: "私はこのユーザをキックできません",
  COMMAND_HELP_TITLE: "ヘルプ - コマンド"
}, require("./english.js"));
