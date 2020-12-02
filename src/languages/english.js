const Language = require("../structures/Language.js");
const responses = require("@utils/responses");
const constants = require("../utils/constants.js");

module.exports = new Language("english", "English", {
  LANGUAGE_SET: "Language has been set to English",
  GUILD_ONLY: "Baka! You can only use this command in a server. What are you doing in my DMs?",
  OWNER_ONLY: "Baka! What do you think you're doing? That command is only for my master!",
  CHANNEL_NOT_FOUND: "I could not find that channel.",
  ROLE_NOT_FOUND: "That role does not exist.",
  WELCOME_MESSAGES: responses.welcomeMessages,
  GOODBYE_MESSAGES: responses.goodbyeMessages,
  LEVEL_MESSAGES: responses.levelMessages,
  DAILY_SUCCESS_MESSAGES: responses.dailySuccessMessages,
  PING_MESSAGES: responses.pingMessages,
  RELOAD_ERR_UNLOAD: responses.reloadErrUnload,
  RELOAD_NOT_FOUND: responses.reloadNotFound,
  RELOAD_MISSING_ARG: responses.reloadMissingArg,
  LEVELUP_MESSAGES: responses.levelUpMessages,
  COMMAND_STATS_DESCRIPTION: "Hi, I'm Miyako. The all-in-one entertainment bot for your server brought to you by my master Ravener#5796",
  COMMAND_STATS_TITLE: "Miyako - Bot Statistics",
  COMMAND_STATS_FIELD: "Bot Stats",
  COMMAND_CHOOSE: (choice) => `I think ${choice}`,
  COMMAND_CHOOSE_THINKING: (user) => `${constants.typing} **${user}** is thinking...`,
  COMMAND_8BALL_ASK: "Baka! What do you want to ask?",
  COMMAND_PROFILE_LEVEL: "Level",
  COMMAND_PROFILE_POINTS: "Points",
  COMMAND_PROFILE_REP: "Reputation Points",
  COMMAND_CAT_TITLE: "Random Cat",
  COMMAND_DOG_TITLE: "Random Dog",
  COMMAND_MYID: (user) => `${user} Your User ID is: **${user.id}**`,
  COMMAND_KICK_BOT: "Baka! Why would you kick me?",
  COMMAND_KICK_SELF: "Baka! Why would you kick yourself?",
  COMMAND_KICK_OWNER: "Baka! You can't kick the owner.",
  COMMAND_KICK_USER_CANNOT: "You cannot kick this user.",
  COMMAND_KICK_BOT_CANNOT: "I cannot kick this user.",
  COMMAND_HELP_TITLE: "Help - Commands"
});

