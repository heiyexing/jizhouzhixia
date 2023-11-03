import Avatar1 from "../assets/avatar1.png";
import Avatar2 from "../assets/avatar2.png";
import Avatar3 from "../assets/avatar3.png";
import Avatar4 from "../assets/avatar4.png";
import Avatar5 from "../assets/avatar5.png";
import Avatar6 from "../assets/avatar6.png";
import Avatar7 from "../assets/avatar7.png";

export type Skill = {
  name: string;
  description: string;
  useCount: number;
  maxCount?: number;
};

export type User = {
  name: string;
  job: string;
  img: string;
  mind: number;
  luck: number;
  education: number;
  inspiration: number;
  skill1: number;
  skill2: number;
  skill1Info: Skill;
  skill2Info: Skill;
  gamble: boolean;
  healed: boolean;
  wound: number;
};

export type UserAttribute =
  | "mind"
  | "luck"
  | "education"
  | "inspiration"
  | "skill1"
  | "skill2";

export type UserStatus = "gamble" | "healed";

export const WoundColors = ["#4096ff", "#95de64", "#fa8c16", "#ff7875", "#444"];

export const UserAttributeMap: Record<UserAttribute, string> = {
  mind: "意志",
  luck: "幸运",
  education: "教育",
  inspiration: "灵感",
  skill1: "技能1",
  skill2: "技能2",
};

export const UserStatusMap: Record<UserStatus, string> = {
  gamble: "孤注一掷",
  healed: "被治疗",
};

export const InitalUsers: User[] = [
  {
    name: "1号审讯官",
    job: "侦探",
    img: Avatar1,
    mind: 50,
    luck: 75,
    education: 45,
    inspiration: 80,
    skill1: 80,
    skill2: 75,
    skill1Info: {
      name: "侦查",
      description: "仔细观察各种环境或者事务",
      useCount: 0,
    },
    skill2Info: {
      name: "洞察",
      description: "可以独自查看一张目的卡（整场游戏限两次）",
      useCount: 0,
    },
    gamble: false,
    healed: false,
    wound: 0,
  },
  {
    name: "2号审讯官",
    job: "考古学家",
    img: Avatar2,
    mind: 50,
    luck: 70,
    education: 80,
    inspiration: 50,
    skill1: 85,
    skill2: 70,
    skill1Info: {
      name: "考古学",
      description: "古代遗迹或文物的知识",
      useCount: 0,
    },
    skill2Info: {
      name: "化学",
      description: "化学知识",
      useCount: 0,
    },
    gamble: false,
    healed: false,
    wound: 0,
  },
  {
    name: "3号审讯官",
    job: "心理学家",
    img: Avatar3,
    mind: 75,
    luck: 50,
    education: 75,
    inspiration: 50,
    skill1: 85,
    skill2: 85,
    skill1Info: {
      name: "心理学",
      description:
        "行为痕迹的分析，兼容犯罪心理学",
      useCount: 0,
    },
    skill2Info: {
      name: "催眠",
      description: "可以额外使用一次孤注一掷",
      useCount: 0,
    },
    gamble: false,
    healed: false,
    wound: 0,
  },
  {
    name: "4号审讯官",
    job: "神秘学研究员",
    img: Avatar4,
    mind: 55,
    luck: 70,
    education: 55,
    inspiration: 70,
    skill1: 85,
    skill2: 70,
    skill1Info: {
      name: "神秘学",
      description: "超自然、非科学事物的知识和解毒",
      useCount: 0,
    },
    skill2Info: {
      name: "领航",
      description:
        "探索未知地带的方向感",
      useCount: 0,
    },
    gamble: false,
    healed: false,
    wound: 0,
  },
  {
    name: "5号审讯官",
    job: "历史学家",
    img: Avatar5,
    mind: 60,
    luck: 60,
    education: 80,
    inspiration: 50,
    skill1: 90,
    skill2: 70,
    skill1Info: {
      name: "历史学",
      description: "历史方面的知识",
      useCount: 0,
    },
    skill2Info: {
      name: "图书馆利用",
      description: "在图书馆、档案室等地方可以高效率找到重要资料",
      useCount: 0,
    },
    gamble: false,
    healed: false,
    wound: 0,
  },
  {
    name: "6号审讯官",
    job: "外科医生",
    img: Avatar6,
    mind: 80,
    luck: 60,
    education: 75,
    inspiration: 35,
    skill1: 80,
    skill2: 85,
    skill1Info: {
      name: "急救",
      description: "治疗1次创伤（每个人只能被治疗一次）",
      useCount: 0,
    },
    skill2Info: {
      name: "医学",
      description: "医学相关的知识，兼容法医学",
      useCount: 0,
    },
    gamble: false,
    healed: false,
    wound: 0,
  },
  {
    name: "7号审讯官",
    job: "九天使调查员",
    img: Avatar7,
    mind: 70,
    luck: 40,
    education: 50,
    inspiration: 90,
    skill1: 85,
    skill2: 75,
    skill1Info: {
      name: "机械学",
      description: "机械、机关方面的知识，兼容动手能力",
      useCount: 0,
    },
    skill2Info: {
      name: "电子学",
      description: "电子相关的知识，兼容动手能力",
      useCount: 0,
    },
    gamble: false,
    healed: false,
    wound: 0,
  },
];
