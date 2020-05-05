const Command = require("../../structures/Command.js");
const { MessageEmbed } = require("discord.js");

class RepLB extends Command {
  constructor(...args) {
    super(...args, {
      description: "View top people with most reputations.",
      aliases: ["repleaderboard", "reputationleaderboard", "reputationlb"]
    });
  }

  async run(ctx) {
    const { rows } = await this.client.db.query("SELECT id, reputation FROM users WHERE reputation > 0 ORDER BY reputation DESC LIMIT 10");
    if(!rows.length) return ctx.reply("Looks like no one has any reputations.");

    const embed = new MessageEmbed()
      .setColor(0x9590EE)
      .setTitle(`Top${rows.length === 1 ? "" : ` ${rows.length}`} respected user${rows.length > 1 ? "s" : ""} by reputations`)
      .setAuthor(ctx.author.tag, ctx.author.displayAvatarURL({ size: 64 }));

    const lb = [];
    
    for(let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const user = await this.client.users.fetch(row.id);
      lb.push(`${((i + 1).toString()).padEnd(2, " ")} ❯ ${user.tag} - ${row.reputation}`);
    }

    embed.setDescription(lb.join("\n"));

    return ctx.reply({ embed });
  }
}

module.exports = RepLB;