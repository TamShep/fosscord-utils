"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Message_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedType = exports.MessageComponentType = exports.Message = exports.MessageType = void 0;
const User_1 = require("./User");
const Member_1 = require("./Member");
const Role_1 = require("./Role");
const Channel_1 = require("./Channel");
const Application_1 = require("./Application");
const typeorm_1 = require("typeorm");
const BaseClass_1 = require("./BaseClass");
const Guild_1 = require("./Guild");
const Webhook_1 = require("./Webhook");
const Sticker_1 = require("./Sticker");
const Attachment_1 = require("./Attachment");
var MessageType;
(function (MessageType) {
    MessageType[MessageType["DEFAULT"] = 0] = "DEFAULT";
    MessageType[MessageType["RECIPIENT_ADD"] = 1] = "RECIPIENT_ADD";
    MessageType[MessageType["RECIPIENT_REMOVE"] = 2] = "RECIPIENT_REMOVE";
    MessageType[MessageType["CALL"] = 3] = "CALL";
    MessageType[MessageType["CHANNEL_NAME_CHANGE"] = 4] = "CHANNEL_NAME_CHANGE";
    MessageType[MessageType["CHANNEL_ICON_CHANGE"] = 5] = "CHANNEL_ICON_CHANGE";
    MessageType[MessageType["CHANNEL_PINNED_MESSAGE"] = 6] = "CHANNEL_PINNED_MESSAGE";
    MessageType[MessageType["GUILD_MEMBER_JOIN"] = 7] = "GUILD_MEMBER_JOIN";
    MessageType[MessageType["USER_PREMIUM_GUILD_SUBSCRIPTION"] = 8] = "USER_PREMIUM_GUILD_SUBSCRIPTION";
    MessageType[MessageType["USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1"] = 9] = "USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1";
    MessageType[MessageType["USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2"] = 10] = "USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2";
    MessageType[MessageType["USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3"] = 11] = "USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3";
    MessageType[MessageType["CHANNEL_FOLLOW_ADD"] = 12] = "CHANNEL_FOLLOW_ADD";
    MessageType[MessageType["GUILD_DISCOVERY_DISQUALIFIED"] = 14] = "GUILD_DISCOVERY_DISQUALIFIED";
    MessageType[MessageType["GUILD_DISCOVERY_REQUALIFIED"] = 15] = "GUILD_DISCOVERY_REQUALIFIED";
    MessageType[MessageType["REPLY"] = 19] = "REPLY";
    MessageType[MessageType["APPLICATION_COMMAND"] = 20] = "APPLICATION_COMMAND";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
let Message = Message_1 = class Message extends BaseClass_1.BaseClass {
    channel_id;
    channel;
    guild_id;
    guild;
    author_id;
    author;
    member_id;
    member;
    webhook_id;
    webhook;
    application_id;
    application;
    content;
    timestamp;
    edited_timestamp;
    tts;
    mention_everyone;
    mentions;
    mention_roles;
    mention_channels;
    sticker_items;
    attachments;
    embeds;
    reactions;
    nonce;
    pinned;
    type;
    activity;
    flags;
    message_reference;
    referenced_message;
    interaction;
    components;
};
__decorate([
    typeorm_1.Column({ nullable: true }),
    typeorm_1.RelationId((message) => message.channel)
], Message.prototype, "channel_id", void 0);
__decorate([
    typeorm_1.JoinColumn({ name: "channel_id" }),
    typeorm_1.ManyToOne(() => Channel_1.Channel, {
        onDelete: "CASCADE",
    })
], Message.prototype, "channel", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    typeorm_1.RelationId((message) => message.guild)
], Message.prototype, "guild_id", void 0);
__decorate([
    typeorm_1.JoinColumn({ name: "guild_id" }),
    typeorm_1.ManyToOne(() => Guild_1.Guild, {
        onDelete: "CASCADE",
    })
], Message.prototype, "guild", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    typeorm_1.RelationId((message) => message.author)
], Message.prototype, "author_id", void 0);
__decorate([
    typeorm_1.JoinColumn({ name: "author_id", referencedColumnName: "id" }),
    typeorm_1.ManyToOne(() => User_1.User)
], Message.prototype, "author", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    typeorm_1.RelationId((message) => message.member)
], Message.prototype, "member_id", void 0);
__decorate([
    typeorm_1.JoinColumn({ name: "member_id" }),
    typeorm_1.ManyToOne(() => Member_1.Member)
], Message.prototype, "member", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    typeorm_1.RelationId((message) => message.webhook)
], Message.prototype, "webhook_id", void 0);
__decorate([
    typeorm_1.JoinColumn({ name: "webhook_id" }),
    typeorm_1.ManyToOne(() => Webhook_1.Webhook)
], Message.prototype, "webhook", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    typeorm_1.RelationId((message) => message.application)
], Message.prototype, "application_id", void 0);
__decorate([
    typeorm_1.JoinColumn({ name: "application_id" }),
    typeorm_1.ManyToOne(() => Application_1.Application)
], Message.prototype, "application", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Message.prototype, "content", void 0);
__decorate([
    typeorm_1.Column(),
    typeorm_1.CreateDateColumn()
], Message.prototype, "timestamp", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Message.prototype, "edited_timestamp", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Message.prototype, "tts", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Message.prototype, "mention_everyone", void 0);
__decorate([
    typeorm_1.JoinTable({ name: "message_user_mentions" }),
    typeorm_1.ManyToMany(() => User_1.User)
], Message.prototype, "mentions", void 0);
__decorate([
    typeorm_1.JoinTable({ name: "message_role_mentions" }),
    typeorm_1.ManyToMany(() => Role_1.Role)
], Message.prototype, "mention_roles", void 0);
__decorate([
    typeorm_1.JoinTable({ name: "message_channel_mentions" }),
    typeorm_1.ManyToMany(() => Channel_1.Channel)
], Message.prototype, "mention_channels", void 0);
__decorate([
    typeorm_1.JoinTable({ name: "message_stickers" }),
    typeorm_1.ManyToMany(() => Sticker_1.Sticker, { cascade: true, onDelete: "CASCADE" })
], Message.prototype, "sticker_items", void 0);
__decorate([
    typeorm_1.OneToMany(() => Attachment_1.Attachment, (attachment) => attachment.message, {
        cascade: true,
        orphanedRowAction: "delete",
    })
], Message.prototype, "attachments", void 0);
__decorate([
    typeorm_1.Column({ type: "simple-json" })
], Message.prototype, "embeds", void 0);
__decorate([
    typeorm_1.Column({ type: "simple-json" })
], Message.prototype, "reactions", void 0);
__decorate([
    typeorm_1.Column({ type: "text", nullable: true })
], Message.prototype, "nonce", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Message.prototype, "pinned", void 0);
__decorate([
    typeorm_1.Column({ type: "int" })
], Message.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({ type: "simple-json", nullable: true })
], Message.prototype, "activity", void 0);
__decorate([
    typeorm_1.Column({ nullable: true })
], Message.prototype, "flags", void 0);
__decorate([
    typeorm_1.Column({ type: "simple-json", nullable: true })
], Message.prototype, "message_reference", void 0);
__decorate([
    typeorm_1.JoinColumn({ name: "message_reference_id" }),
    typeorm_1.ManyToOne(() => Message_1)
], Message.prototype, "referenced_message", void 0);
__decorate([
    typeorm_1.Column({ type: "simple-json", nullable: true })
], Message.prototype, "interaction", void 0);
__decorate([
    typeorm_1.Column({ type: "simple-json", nullable: true })
], Message.prototype, "components", void 0);
Message = Message_1 = __decorate([
    typeorm_1.Entity("messages")
], Message);
exports.Message = Message;
var MessageComponentType;
(function (MessageComponentType) {
    MessageComponentType[MessageComponentType["ActionRow"] = 1] = "ActionRow";
    MessageComponentType[MessageComponentType["Button"] = 2] = "Button";
})(MessageComponentType = exports.MessageComponentType || (exports.MessageComponentType = {}));
var EmbedType;
(function (EmbedType) {
    EmbedType["rich"] = "rich";
    EmbedType["image"] = "image";
    EmbedType["video"] = "video";
    EmbedType["gifv"] = "gifv";
    EmbedType["article"] = "article";
    EmbedType["link"] = "link";
})(EmbedType = exports.EmbedType || (exports.EmbedType = {}));
//# sourceMappingURL=Message.js.map