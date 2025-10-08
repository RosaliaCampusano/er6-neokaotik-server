"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
// --- Reusable attribute structure ---
var attributeField = {
    intelligence: Number,
    dexterity: Number,
    charisma: Number,
    constitution: Number,
    strength: Number,
    insanity: Number,
};
// --- Reusable item base fields ---
var itemFields = {
    name: String,
    description: String,
    type: String,
    image: String,
    value: Number,
    min_lvl: Number,
};
// --- Equipment Subschemas ---
var weaponSchema = new Schema(__assign(__assign({}, itemFields), { modifiers: attributeField, base_percentage: Number, die_faces: Number, die_modifier: Number, die_num: Number, isUnique: Boolean, isActive: Boolean }));
var armorSchema = new Schema(__assign(__assign({}, itemFields), { modifiers: attributeField, defense: Number, isUnique: Boolean, isActive: Boolean }));
var artifactSchema = new Schema(__assign(__assign({}, itemFields), { modifiers: attributeField, isUnique: Boolean, isActive: Boolean }));
var helmetSchema = new Schema(__assign(__assign({}, itemFields), { modifiers: attributeField, defense: Number, isUnique: Boolean, isActive: Boolean }));
var shieldSchema = new Schema(__assign(__assign({}, itemFields), { modifiers: attributeField, defense: Number, isUnique: Boolean, isActive: Boolean }));
var bootSchema = new Schema(__assign(__assign({}, itemFields), { modifiers: attributeField, defense: Number, isUnique: Boolean, isActive: Boolean }));
var ringSchema = new Schema(__assign(__assign({}, itemFields), { modifiers: attributeField, isUnique: Boolean, isActive: Boolean }));
// --- Potion Subschemas ---
var healingPotionSchema = new Schema(__assign(__assign({}, itemFields), { modifiers: __assign({ hit_points: Number }, attributeField) }));
var recoveryEffectSchema = new Schema({
    modifiers: __assign({ hit_points: Number }, attributeField),
    name: String,
    description: String,
    type: String,
    antidote_effects: [String],
    poison_effects: [String],
});
var antidotePotionSchema = new Schema(__assign(__assign({}, itemFields), { recovery_effect: recoveryEffectSchema }));
var enhancerPotionSchema = new Schema(__assign(__assign({}, itemFields), { duration: Number, modifiers: attributeField }));
// --- Equipment Schema ---
var equipmentSchema = new Schema({
    weapon: weaponSchema,
    armor: armorSchema,
    artifact: artifactSchema,
    antidote_potion: antidotePotionSchema,
    healing_potion: healingPotionSchema,
    enhancer_potion: enhancerPotionSchema,
    helmet: helmetSchema,
    shield: shieldSchema,
    boot: bootSchema,
    ring: ringSchema,
});
// --- Inventory Schema ---
var inventorySchema = new Schema({
    weapons: [weaponSchema],
    armors: [armorSchema],
    artifacts: [artifactSchema],
    helmets: [helmetSchema],
    shields: [shieldSchema],
    boots: [bootSchema],
    rings: [ringSchema],
    antidote_potions: [antidotePotionSchema],
    healing_potions: [healingPotionSchema],
    enhancer_potions: [enhancerPotionSchema],
    ingredients: [String],
});
// --- Profile & Attributes ---
var attributeSchema = new Schema({
    name: String,
    description: String,
    value: Number,
});
var profileSchema = new Schema({
    name: String,
    description: String,
    image: String,
    attributes: [attributeSchema],
});
// --- Tasks & Skills ---
var taskSchema = new Schema({
    classroomId: String,
    courseWorkName: String,
    grade: Number,
    selectedAssignment: String,
    maxPoints: Number,
});
var skillSchema = new Schema({
    skill: String,
    activeLevels: [String],
});
// --- Main Player Schema ---
var playerSchema = new Schema({
    name: String,
    nickname: String,
    email: String,
    avatar: String,
    classroom_Id: String,
    level: Number,
    experience: Number,
    is_active: Boolean,
    profile: profileSchema,
    gold: Number,
    tasks: [taskSchema],
    skills: [skillSchema],
    created_date: { type: Date, default: Date.now },
    isBetrayer: Boolean,
    inventory: inventorySchema,
    equipment: equipmentSchema,
    active: Boolean,
});
exports.default = mongoose_1.default.model("Player", playerSchema);
