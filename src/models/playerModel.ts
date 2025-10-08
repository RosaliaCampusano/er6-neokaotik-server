import mongoose from "mongoose";
const { Schema } = mongoose;

// --- Reusable attribute structure ---
const attributeField = {
  intelligence: Number,
  dexterity: Number,
  charisma: Number,
  constitution: Number,
  strength: Number,
  insanity: Number,
};

// --- Reusable item base fields ---
const itemFields = {
  name: String,
  description: String,
  type: String,
  image: String,
  value: Number,
  min_lvl: Number,
};

// --- Equipment Subschemas ---
const weaponSchema = new Schema({
  ...itemFields,
  modifiers: attributeField,
  base_percentage: Number,
  die_faces: Number,
  die_modifier: Number,
  die_num: Number,
  isUnique: Boolean,
  isActive: Boolean,
});

const armorSchema = new Schema({
  ...itemFields,
  modifiers: attributeField,
  defense: Number,
  isUnique: Boolean,
  isActive: Boolean,
});

const artifactSchema = new Schema({
  ...itemFields,
  modifiers: attributeField,
  isUnique: Boolean,
  isActive: Boolean,
});

const helmetSchema = new Schema({
  ...itemFields,
  modifiers: attributeField,
  defense: Number,
  isUnique: Boolean,
  isActive: Boolean,
});

const shieldSchema = new Schema({
  ...itemFields,
  modifiers: attributeField,
  defense: Number,
  isUnique: Boolean,
  isActive: Boolean,
});

const bootSchema = new Schema({
  ...itemFields,
  modifiers: attributeField,
  defense: Number,
  isUnique: Boolean,
  isActive: Boolean,
});

const ringSchema = new Schema({
  ...itemFields,
  modifiers: attributeField,
  isUnique: Boolean,
  isActive: Boolean,
});

// --- Potion Subschemas ---
const healingPotionSchema = new Schema({
  ...itemFields,
  modifiers: {
    hit_points: Number,
    ...attributeField,
  },
});

const recoveryEffectSchema = new Schema({
  modifiers: {
    hit_points: Number,
    ...attributeField,
  },
  name: String,
  description: String,
  type: String,
  antidote_effects: [String],
  poison_effects: [String],
});

const antidotePotionSchema = new Schema({
  ...itemFields,
  recovery_effect: recoveryEffectSchema,
});

const enhancerPotionSchema = new Schema({
  ...itemFields,
  duration: Number,
  modifiers: attributeField,
});

// --- Equipment Schema ---
const equipmentSchema = new Schema({
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
const inventorySchema = new Schema({
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
const attributeSchema = new Schema({
  name: String,
  description: String,
  value: Number,
});

const profileSchema = new Schema({
  name: String,
  description: String,
  image: String,
  attributes: [attributeSchema],
});

// --- Tasks & Skills ---
const taskSchema = new Schema({
  classroomId: String,
  courseWorkName: String,
  grade: Number,
  selectedAssignment: String,
  maxPoints: Number,
});

const skillSchema = new Schema({
  skill: String,
  activeLevels: [String],
});

// --- Main Player Schema ---
const playerSchema = new Schema({
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

export default mongoose.model("Player", playerSchema);
