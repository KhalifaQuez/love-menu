Page({
  data: {
    menuEdgeSpace: 0,
    menuSnapTop: 0,
    focusedDishId: "",
    submittedOrderVisible: false,
    submittedItems: [],
    submittedMealDate: "",
    submittedMealTime: "",
    dishQuantities: {},
    mealPickerOpen: false,
    mealYears: [],
    mealMonths: [],
    mealDays: [],
    mealHours: [],
    mealMinutes: [],

    mealYear: 0,
    mealMonth: 0,
    mealDay: 0,
    mealHour: 0,
    mealMinute: 0,
    mealDate: "",
    mealTime: "",
    wishConfirmed: false,
    submitPageClosing: false,
    submitPageVisible: false,
    customMenuItems: [],
    scrollIntoDishId: "",
    savingDish: false,
    feedbackCategoryOpen: false,
    feedbackCategoryIndex: 0,
    feedbackName: "",
    feedbackImage: "",
    feedbackVisible: false,
    activeCategory: "炒菜",
    pendingCategory: "炒菜",
    categoryPickerOpen: false,
    pickerValue: [0],
    wheelRotation: -90,
    wheelDragging: false,
    wheelFocusActive: false,
    displayItems: [],

    selectedDishIds: [],
    selectedDishCount: 0,
    basketVisible: false,
    basketClosing: false,
    basketItems: [],
    dishNotes: {},

    dishButtonPressedId: null,
    dishButtonReboundingId: null,
    bottomActionPressed: "",
    bottomActionRebounding: "",

    basketClosePressed: false,
    basketCloseRebounding: false,
    categories: [
      { name: "炒菜", angle: 0 },
      { name: "汤", angle: 32.73 },
      { name: "凉菜", angle: 65.46 },
      { name: "面食", angle: 98.19 },
      { name: "火锅", angle: 130.92 },
      { name: "干锅", angle: 163.65 },
      { name: "鱼", angle: 196.38 },
      { name: "虾", angle: 229.11 },
      { name: "螃蟹", angle: 261.84 },
      { name: "油炸", angle: 294.57 },
      { name: "饮品", angle: 327.3 },
    ],
    ready: false,
    panelReady: false,
    dragging: false,
    isVertical: false,

    panelTop: 0,
    minPanelTop: 110,
    maxPanelTop: 0,

    startY: 0,
    startX: 0,
    startPanelTop: 0,
    lastMoveY: 0,
    lastMoveTime: 0,
    velocity: 0,

    buttonPressed: false,
    buttonRebounding: false,
    buttonCollapsing: false,
    buttonOrbiting: false,
    buttonExploding: false,
    orderAnimating: false,

    orderComplete: false,
    completionFill: false,
    menuVisible: false,
    menuScrollTop: 0,

    menuItems: [
      {
        id: 1,
        name: "小炒肉",
        description: "香辣下饭，肉香浓郁",
        image: "/images/Food01.png",
        category: "炒菜",
      },
      {
        id: 2,
        name: "青椒炒鸡蛋",
        description: "清爽鲜香，简单满足",
        image: "/images/Food02.png",
        category: "炒菜",
      },
      {
        id: 5,
        name: "口蘑炒鸡蛋",
        description: "口蘑鲜香，鸡蛋嫩滑",
        image: "/images/Food05.png",
        category: "炒菜",
      },
      {
        id: 6,
        name: "尖椒牛肉",
        description: "鲜香麻辣，肉质紧实",
        image: "/images/Food06.png",
        category: "炒菜",
      },
      {
        id: 7,
        name: "回锅肉",
        description: "肥而不腻，香辣下饭",
        image: "/images/Food07.png",
        category: "炒菜",
      },
      {
        id: 8,
        name: "折耳根炒腊肉",
        description: "折耳根清香，腊肉浓郁",
        image: "/images/Food08.png",
        category: "炒菜",
      },
      {
        id: 9,
        name: "鱼香肉丝",
        description: "酸辣解腻，开胃下饭",
        image: "/images/Food09.png",
        category: "炒菜",
      },
      {
        id: 10,
        name: "宫保鸡丁",
        description: "鲜香微辣，肉质嫩滑",
        image: "/images/Food10.png",
        category: "炒菜",
      },
      {
        id: 11,
        name: "麻婆豆腐",
        description: "麻辣鲜香，豆腐嫩滑",
        image: "/images/Food11.png",
        category: "炒菜",
      },
      {
        id: 12,
        name: "香辣土豆片",
        description: "麻辣焦香，外酥里面",
        image: "/images/Food12.png",
        category: "炒菜",
      },
      {
        id: 13,
        name: "青椒土豆丝",
        description: "清爽脆嫩，健康开胃",
        image: "/images/Food13.png",
        category: "炒菜",
      },
      {
        id: 14,
        name: "炝炒包菜",
        description: "炝辣爽脆，营养爽口",
        image: "/images/Food14.png",
        category: "炒菜",
      },
      {
        id: 15,
        name: "青椒肉丝",
        description: "鲜香微辣，肉质嫩滑",
        image: "/images/Food15.png",
        category: "炒菜",
      },
      {
        id: 16,
        name: "蒜泥上海青",
        description: "蒜香浓郁，清爽可口",
        image: "/images/Food16.png",
        category: "炒菜",
      },
      {
        id: 17,
        name: "尖椒鸡肉",
        description: "鲜香微辣，肉质嫩滑",
        image: "/images/Food17.png",
        category: "炒菜",
      },
      {
        id: 18,
        name: "炝炒花菜",
        description: "炝辣爽脆，营养丰富",
        image: "/images/Food18.png",
        category: "炒菜",
      },
      {
        id: 19,
        name: "酸豇豆炒肉末",
        description: "酸辣开胃，肉末鲜香",
        image: "/images/Food19.png",
        category: "炒菜",
      },
      {
        id: 20,
        name: "地三鲜",
        description: "鲜香浓郁，口感丰富",
        image: "/images/Food20.png",
        category: "炒菜",
      },
      {
        id: 21,
        name: "干煸四季豆",
        description: "干香微辣，口感丰富",
        image: "/images/Food21.png",
        category: "炒菜",
      },
      {
        id: 22,
        name: "西红柿炒鸡蛋",
        description: "酸甜可口，营养丰富",
        image: "/images/Food22.png",
        category: "炒菜",
      },
      {
        id: 23,
        name: "西红柿豌豆",
        description: "酸甜可口，营养丰富",
        image: "/images/Food23.png",
        category: "炒菜",
      },
      {
        id: 24,
        name: "青椒肉末炒玉米",
        description: "鲜香微辣，口感丰富",
        image: "/images/Food24.png",
        category: "炒菜",
      },
      {
        id: 25,
        name: "炝炒猪肝",
        description: "炝辣爽脆，营养丰富",
        image: "/images/Food25.png",
        category: "炒菜",
      },
      {
        id: 26,
        name: "薄荷炸排骨",
        description: "薄荷清香，排骨酥脆",
        image: "/images/Food26.png",
        category: "油炸",
      },
      {
        id: 27,
        name: "土豆青菜汤",
        description: "清淡鲜美，营养丰富",
        image: "/images/Food27.png",
        category: "汤",
      },
      {
        id: 28,
        name: "炖鸡汤",
        description: "鲜香浓郁，滋补养生",
        image: "/images/Food28.png",
        category: "汤",
      },
      {
        id: 29,
        name: "山药豌豆尖汤",
        description: "清淡鲜美，营养丰富",
        image: "/images/Food29.png",
        category: "汤",
      },
      {
        id: 30,
        name: "肉圆子白菜汤",
        description: "鲜香浓郁，营养丰富",
        image: "/images/Food30.png",
        category: "汤",
      },
      {
        id: 31,
        name: "番茄鸡蛋汤",
        description: "酸甜可口，营养丰富",
        image: "/images/Food31.png",
        category: "汤",
      },
      {
        id: 32,
        name: "酸菜豆米汤",
        description: "酸辣开胃，营养丰富",
        image: "/images/Food32.png",
        category: "汤",
      },
      {
        id: 33,
        name: "清炖牛肉",
        description: "清淡鲜美，营养丰富",
        image: "/images/Food33.png",
        category: "汤",
      },
      {
        id: 34,
        name: "炝炒南瓜尖",
        description: "清香爽脆，营养丰富",
        image: "/images/Food34.png",
        category: "炒菜",
      },
      {
        id: 35,
        name: "粉丝蛋卷汤",
        description: "鲜香浓郁，营养丰富",
        image: "/images/Food35.png",
        category: "汤",
      },
      {
        id: 36,
        name: "丝瓜汤",
        description: "清淡鲜美，营养丰富",
        image: "/images/Food36.png",
        category: "汤",
      },
      {
        id: 37,
        name: "芸豆炖猪蹄",
        description: "鲜香浓郁，营养丰富",
        image: "/images/Food37.png",
        category: "汤",
      },
      {
        id: 38,
        name: "凉拌黄瓜",
        description: "清爽可口，开胃解腻",
        image: "/images/Food38.png",
        category: "凉菜",
      },
      {
        id: 39,
        name: "凉拌豆腐丝",
        description: "清爽可口，开胃解腻",
        image: "/images/Food39.png",
        category: "凉菜",
      },
      {
        id: 40,
        name: "烧椒皮蛋西红柿",
        description: "酸辣开胃，营养丰富",
        image: "/images/Food40.png",
        category: "凉菜",
      },
      {
        id: 41,
        name: "凉拌木耳",
        description: "清爽可口，开胃解腻",
        image: "/images/Food41.png",
        category: "凉菜",
      },
      {
        id: 42,
        name: "油闷大虾",
        description: "鲜香浓郁，肉质鲜美",
        image: "/images/Food42.png",
        category: "虾",
      },
      {
        id: 43,
        name: "凉拌猪耳朵",
        description: "清爽可口，开胃解腻",
        image: "/images/Food43.png",
        category: "凉菜",
      },
      {
        id: 44,
        name: "凉拌猪头肉",
        description: "肥而不腻，鲜香麻辣",
        image: "/images/Food44.png",
        category: "凉菜",
      },
      {
        id: 45,
        name: "凉拌鸡丝",
        description: "清爽可口，开胃解腻",
        image: "/images/Food45.png",
        category: "凉菜",
      },
      {
        id: 46,
        name: "螺狮粉",
        description: "酸辣开胃，鲜香麻辣",
        image: "/images/Food46.png",
        category: "面食",
      },
      {
        id: 47,
        name: "手工鸡肉粉",
        description: "鲜香浓郁，肉质鲜美",
        image: "/images/Food47.png",
        category: "面食",
      },
      {
        id: 48,
        name: "火鸡面",
        description: "鲜香麻辣，劲道十足",
        image: "/images/Food48.png",
        category: "面食",
      },
      {
        id: 49,
        name: "酸菜软哨粉",
        description: "酸辣开胃，哨子油香",
        image: "/images/Food49.png",
        category: "面食",
      },
      {
        id: 50,
        name: "红油汤面",
        description: "鲜香麻辣，汤汁浓郁",
        image: "/images/Food50.png",
        category: "面食",
      },
      {
        id: 51,
        name: "韭菜鸡蛋猪肉饺子",
        description: "鲜香浓郁，口感丰富",
        image: "/images/Food51.png",
        category: "面食",
      },
      {
        id: 52,
        name: "酸菜猪肉饺子",
        description: "酸爽开胃，口感丰富",
        image: "/images/Food52.png",
        category: "面食",
      },
      {
        id: 53,
        name: "红油馄饨",
        description: "鲜香麻辣，汤汁浓郁",
        image: "/images/Food53.png",
        category: "面食",
      },
      {
        id: 54,
        name: "清汤馄饨",
        description: "清淡鲜美，口感丰富",
        image: "/images/Food54.png",
        category: "面食",
      },
      {
        id: 55,
        name: "辣白菜菜泡面",
        description: "酸辣开胃，泡菜鲜香",
        image: "/images/Food55.png",
        category: "面食",
      },
      {
        id: 56,
        name: "肉末面",
        description: "鲜香浓郁，肉质鲜美",
        image: "/images/Food56.png",
        category: "面食",
      },
      {
        id: 57,
        name: "干拌红油馄饨",
        description: "鲜香麻辣，口感丰富",
        image: "/images/Food57.png",
        category: "面食",
      },
      {
        id: 58,
        name: "酸辣粉",
        description: "酸辣开胃，口感丰富",
        image: "/images/Food58.png",
        category: "面食",
      },
      {
        id: 59,
        name: "清水烫火锅",
        description: "清淡鲜美，营养丰富",
        image: "/images/Food59.png",
        category: "火锅",
      },
      {
        id: 60,
        name: "重庆火锅",
        description: "麻辣鲜香，地道川味",
        image: "/images/Food60.png",
        category: "火锅",
      },
      {
        id: 61,
        name: "豆豉火锅",
        description: "豆豉香味，火锅经典",
        image: "/images/Food61.png",
        category: "火锅",
      },
      {
        id: 62,
        name: "酸汤火锅",
        description: "酸辣鲜香，汤汁浓郁",
        image: "/images/Food62.png",
        category: "火锅",
      },
      {
        id: 63,
        name: "红豆牛肉火锅",
        description: "鲜香麻辣，牛肉嫩滑",
        image: "/images/Food63.png",
        category: "火锅",
      },
      {
        id: 64,
        name: "干锅肥肠",
        description: "鲜香麻辣，肥肠酥脆",
        image: "/images/Food64.png",
        category: "干锅",
      },
      {
        id: 65,
        name: "干锅鸡",
        description: "鲜香麻辣，鸡肉鲜嫩",
        image: "/images/Food65.png",
        category: "干锅",
      },
      {
        id: 66,
        name: "干锅牛蛙",
        description: "鲜香麻辣，牛蛙鲜嫩",
        image: "/images/Food66.png",
        category: "干锅",
      },
      {
        id: 67,
        name: "干锅大杂烩",
        description: "鲜香麻辣，荤素搭配",
        image: "/images/Food67.png",
        category: "干锅",
      },
      {
        id: 68,
        name: "清蒸鲈鱼",
        description: "鱼肉鲜香，简单好吃",
        image: "/images/Food68.png",
        category: "鱼",
      },
      {
        id: 69,
        name: "酸菜鱼",
        description: "鱼肉鲜香，酸辣爽口",
        image: "/images/Food69.png",
        category: "鱼",
      },
      {
        id: 70,
        name: "藤椒鱼",
        description: "麻辣鲜香，鱼肉紧实",
        image: "/images/Food70.png",
        category: "鱼",
      },
      {
        id: 71,
        name: "炝锅鱼",
        description: "香辣十足，鱼皮焦香",
        image: "/images/Food71.png",
        category: "鱼",
      },
      {
        id: 72,
        name: "烤鱼",
        description: "外焦里嫩，鲜香四溢",
        image: "/images/Food72.png",
        category: "鱼",
      },
      {
        id: 73,
        name: "酸汤鱼",
        description: "酸香浓郁，鲜嫩爽口",
        image: "/images/Food73.png",
        category: "鱼",
      },
      {
        id: 74,
        name: "蒜香煎鱼",
        description: "酸香扑鼻，外酥里嫩",
        image: "/images/Food74.png",
        category: "鱼",
      },
      {
        id: 75,
        name: "红烧鱼",
        description: "色泽红亮，酱香浓郁",
        image: "/images/Food75.png",
        category: "鱼",
      },
      {
        id: 76,
        name: "蒜蓉粉丝虾",
        description: "蒜香浓郁，鲜嫩多汁",
        image: "/images/Food76.png",
        category: "虾",
      },
      {
        id: 77,
        name: "柠檬拌虾",
        description: "酸香清爽，鲜嫩开胃",
        image: "/images/Food77.png",
        category: "虾",
      },
      {
        id: 78,
        name: "椒盐虾",
        description: "外酥里嫩，椒香四溢",
        image: "/images/Food78.png",
        category: "虾",
      },
      {
        id: 79,
        name: "白灼虾",
        description: "鲜嫩弹牙，原汁原味",
        image: "/images/Food79.png",
        category: "虾",
      },
      {
        id: 80,
        name: "炸平菇",
        description: "外酥里嫩，菌香四溢",
        image: "/images/Food80.png",
        category: "油炸",
      },
      {
        id: 81,
        name: "炸酥肉",
        description: "金黄酥香，外脆里嫩",
        image: "/images/Food81.png",
        category: "油炸",
      },
      {
        id: 82,
        name: "炸土豆",
        description: "外酥内软，薯香浓郁",
        image: "/images/Food82.png",
        category: "油炸",
      },
      {
        id: 83,
        name: "炸热狗",
        description: "外皮酥脆，咸香可口",
        image: "/images/Food83.png",
        category: "油炸",
      },
      {
        id: 84,
        name: "炸香菇丸子",
        description: "外酥内嫩，菇香浓郁",
        image: "/images/Food84.png",
        category: "油炸",
      },
      {
        id: 85,
        name: "炸鸡翅鸡腿",
        description: "外皮酥脆，肉嫩多汁",
        image: "/images/Food85.png",
        category: "油炸",
      },
      {
        id: 86,
        name: "避风塘炒蟹",
        description: "外皮酥脆，肉嫩多汁",
        image: "/images/Food86.png",
        category: "螃蟹",
      },
      {
        id: 87,
        name: "蟹肉煲",
        description: "外皮酥脆，肉嫩多汁",
        image: "/images/Food87.png",
        category: "螃蟹",
      },
      {
        id: 88,
        name: "椒盐蟹",
        description: "外皮酥脆，肉嫩多汁",
        image: "/images/Food88.png",
        category: "螃蟹",
      },
      {
        id: 89,
        name: "香辣蟹",
        description: "外皮酥脆，肉嫩多汁",
        image: "/images/Food89.png",
        category: "螃蟹",
      },
      {
        id: 90,
        name: "清蒸蟹",
        description: "外皮酥脆，肉嫩多汁",
        image: "/images/Food90.png",
        category: "螃蟹",
      },
      {
        id: 91,
        name: "白葡萄酒",
        description: "清新果香，柔和爽口",
        image: "/images/Food91.png",
        category: "饮品",
      },
      {
        id: 92,
        name: "红葡萄酒",
        description: "果香馥郁，口感醇厚",
        image: "/images/Food92.png",
        category: "饮品",
      },
      {
        id: 93,
        name: "椰汁",
        description: "椰香浓郁，清甜顺滑",
        image: "/images/Food93.png",
        category: "饮品",
      },
      {
        id: 94,
        name: "生椰拿铁",
        description: "椰香浓郁，咖香顺滑",
        image: "/images/Food94.png",
        category: "饮品",
      },
      {
        id: 95,
        name: "荔枝青提茉莉茶",
        description: "荔枝清甜，青提沁香",
        image: "/images/Food95.png",
        category: "饮品",
      },
      {
        id: 96,
        name: "威士忌",
        description: "醇厚馥郁，余韵悠长",
        image: "/images/Food96.png",
        category: "饮品",
      },
      {
        id: 97,
        name: "橘子茉莉冰茶",
        description: "橘香清新，茶韵悠长",
        image: "/images/Food97.png",
        category: "饮品",
      },
      {
        id: 98,
        name: "石榴冰茉莉",
        description: "石榴清甜，茉莉幽香",
        image: "/images/Food98.png",
        category: "饮品",
      },
      {
        id: 99,
        name: "伏特加",
        description: "清冽纯净，口感爽利",
        image: "/images/Food99.png",
        category: "饮品",
      },
      {
        id: 100,
        name: "百香果柠檬茶",
        description: "百香酸甜，柠檬清爽",
        image: "/images/Food100.png",
        category: "饮品",
      },
      {
        id: 101,
        name: "酸梅汤",
        description: "酸甜生津，清爽解渴",
        image: "/images/Food101.png",
        category: "饮品",
      },
      {
        id: 102,
        name: "可乐",
        description: "气泡丰富，冰爽畅快",
        image: "/images/Food102.png",
        category: "饮品",
      },
      {
        id: 103,
        name: "橙汁",
        description: "果香浓郁，酸甜清爽",
        image: "/images/Food103.png",
        category: "饮品",
      },
      {
        id: 104,
        name: "美式",
        description: "咖香醇厚，清爽回甘",
        image: "/images/Food104.png",
        category: "饮品",
      },
      {
        id: 105,
        name: "茶",
        description: "清香淡雅，回味甘润",
        image: "/images/Food105.png",
        category: "饮品",
      },
      {
        id: 106,
        name: "啤酒",
        description: "冰爽清冽，麦香扑鼻",
        image: "/images/Food106.png",
        category: "饮品",
      },
      {
        id: 107,
        name: "绿豆汤",
        description: "清甜绵润，豆香宜人",
        image: "/images/Food107.png",
        category: "饮品",
      },
      {
        id: 108,
        name: "柚子柠檬茶",
        description: "柚香清甜，柠檬微酸",
        image: "/images/Food108.png",
        category: "饮品",
      },
      {
        id: 109,
        name: "葡萄柠檬茶",
        description: "葡萄清甜，柠香微酸",
        image: "/images/Food109.png",
        category: "饮品",
      },
      {
        id: 3,
        name: "玉米炖排骨",
        description: "暖暖一锅，慢慢炖香",
        image: "/images/Food03.png",
        category: "汤",
      },
      {
        id: 4,
        name: "干锅牛肉炒虾仁",
        description: "鲜辣浓香，今天吃点好的",
        image: "/images/Food04.png",
        category: "干锅",
      },
    ],

    slides: [
      {
        id: 1,
        src: "/images/Food01.png",
        position: "43%",
        title: "今天吃点好的",
        subtitle: "把想吃的告诉我",
      },
      {
        id: 2,
        src: "/images/Food02.png",
        position: "56%",
        title: "暖暖的一餐",
        subtitle: "认真准备给你",
      },
      {
        id: 3,
        src: "/images/Food03.png",
        position: "45%",
        title: "好好吃饭",
        subtitle: "今天也要开心",
      },
      {
        id: 4,
        src: "/images/Food04.png",
        position: "58%",
        title: "你的专属菜单",
        subtitle: "想吃什么就点什么",
      },
    ],
  },

  onLoad() {
    const { windowHeight } = wx.getSystemInfoSync();
    const savedItems = wx.getStorageSync("customMenuItems");
    const customMenuItems = Array.isArray(savedItems) ? savedItems : [];
    this.initMealPicker();
    this.setData({ customMenuItems });

    this.setData({
      panelTop: windowHeight,
      maxPanelTop: windowHeight,
      panelReady: true,
      displayItems: this.getDisplayItems([]),
      basketItems: this.getBasketItems([]),
    });
  },

  onUnload() {
    clearTimeout(this.collapseTimer);
    clearTimeout(this.orbitTimer);
    clearTimeout(this.burstTimer);
    clearTimeout(this.fillTimer);
    clearTimeout(this.menuTimer);
    clearTimeout(this.dishButtonTimer);
    clearTimeout(this.bottomActionTimer);
    clearTimeout(this.basketTimer);
    clearTimeout(this.basketCloseTimer);
    clearTimeout(this.submitCloseTimer);
    clearTimeout(this.submittedOrderTimer);
    clearTimeout(this.menuSnapTimer);
    clearTimeout(this.menuSnapReleaseTimer);
  },

  onReady() {
    this.setData({ ready: true });
  },

  onTouchStart(e) {
    if (this.menuTouching) return;
    if (this.data.orderAnimating) return;

    const y = e.touches[0].clientY;
    const now = Date.now();

    this.setData({
      startY: y,
      startX: e.touches[0].clientX,
      startPanelTop: this.data.panelTop,
      lastMoveY: y,
      lastMoveTime: now,
      velocity: 0,
      isVertical: false,
    });
  },

  onTouchMove(e) {
    if (this.menuTouching) return;
    if (this.data.orderAnimating) return;

    const y = e.touches[0].clientY;
    const x = e.touches[0].clientX;
    const distanceY = y - this.data.startY;
    const distanceX = x - this.data.startX;

    if (!this.data.isVertical) {
      if (Math.abs(distanceY) < 8 && Math.abs(distanceX) < 8) return;
      if (Math.abs(distanceY) <= Math.abs(distanceX)) return;

      this.setData({ isVertical: true });
    }

    // 已进入点菜状态时，只识别上下滑动，不拖动抽屉。
    // 点菜页面位于顶部且菜单没有滚动时，下拉让整个页面跟随手指移动。
    if (this.data.orderComplete) {
      const canDragDown =
        this.data.completionFill &&
        !this.data.categoryPickerOpen &&
        this.data.menuScrollTop <= 1 &&
        distanceY > 0;

      if (!canDragDown) return;

      const now = Date.now();
      const timeGap = Math.max(1, now - this.data.lastMoveTime);
      const velocity = (y - this.data.lastMoveY) / timeGap;
      const rawTop = this.data.startPanelTop + distanceY;
      const { maxPanelTop } = this.data;

      let panelTop = rawTop;

      // 拉到屏幕底部后保留一点橡皮筋阻尼。
      if (rawTop > maxPanelTop) {
        panelTop = maxPanelTop + (rawTop - maxPanelTop) * 0.28;
      }

      this.setData({
        dragging: true,
        panelTop,
        velocity,
        lastMoveY: y,
        lastMoveTime: now,
      });

      return;
    }

    const now = Date.now();
    const timeGap = Math.max(1, now - this.data.lastMoveTime);
    const velocity = (y - this.data.lastMoveY) / timeGap;
    const rawTop = this.data.startPanelTop + distanceY;
    const { minPanelTop, maxPanelTop } = this.data;

    let panelTop = rawTop;

    if (rawTop < minPanelTop) {
      panelTop = minPanelTop - (minPanelTop - rawTop) * 0.28;
    } else if (rawTop > maxPanelTop) {
      panelTop = maxPanelTop + (rawTop - maxPanelTop) * 0.28;
    }

    this.setData({
      dragging: true,
      panelTop,
      velocity,
      lastMoveY: y,
      lastMoveTime: now,
    });
  },

  onTouchEnd(e) {
    if (this.data.orderAnimating || !this.data.isVertical) return;

    const endTouch =
      (e.changedTouches && e.changedTouches[0]) ||
      (e.touches && e.touches[0]);

    if (!endTouch) return;

    const distanceY = endTouch.clientY - this.data.startY;

    // 已完成首次动画后：
    // 下滑退出点菜状态；从首页上滑则重新进入继续点菜状态。
    if (this.data.orderComplete) {
      if (this.data.categoryPickerOpen) return;

      const canExit = this.data.menuScrollTop <= 1;

      // 下拉时，松手后根据距离决定退出或回弹。
      if (this.data.completionFill && canExit) {
        if (distanceY > 70) {
          this.setData({
            dragging: false,
            completionFill: false,
            menuVisible: false,
            menuScrollTop: 0,
            panelTop: this.data.maxPanelTop,
            isVertical: false,
          });
        } else {
          this.setData({
            dragging: false,
            panelTop: 0,
            isVertical: false,
          });
        }

        return;
      }

      // 在首页向上滑动，重新进入点菜页。
      if (!this.data.completionFill && distanceY < -70) {
        this.setData({
          completionFill: true,
          menuVisible: false,
          menuScrollTop: 0,
          panelTop: 0,
          isVertical: false,
        });

        this.showMenuCards();
      }

      return;
    }

    const { velocity, panelTop, minPanelTop, maxPanelTop } = this.data;
    const midpoint = (minPanelTop + maxPanelTop) / 2;
    const flingSpeed = 0.45;

    let targetTop;

    if (velocity < -flingSpeed) {
      targetTop = minPanelTop;
    } else if (velocity > flingSpeed) {
      targetTop = maxPanelTop;
    } else {
      targetTop = panelTop < midpoint ? minPanelTop : maxPanelTop;
    }

    this.setData({
      dragging: false,
      panelTop: targetTop,
      velocity: 0,
    });
  },

  onWishTouchStart() {
    if (!this.data.orderAnimating && !this.data.orderComplete) {
      this.setData({ buttonPressed: true });
    }
  },

  onWishTouchEnd() {
    if (!this.data.orderAnimating && !this.data.orderComplete) {
      this.setData({
        buttonPressed: false,
        buttonRebounding: true,
      });
    }
  },

  onWishTouchCancel() {
    this.setData({
      buttonPressed: false,
      buttonRebounding: false,
    });
  },

  startOrder() {
    if (this.data.orderAnimating || this.data.orderComplete) return;

    this.setData({
      orderAnimating: true,
      buttonPressed: false,
      buttonRebounding: true,
      buttonCollapsing: false,
      buttonOrbiting: false,
      buttonExploding: false,
      completionFill: false,
      dragging: false,
      panelTop: 0,
    });

    this.collapseTimer = setTimeout(() => {
      this.setData({
        buttonRebounding: false,
        buttonCollapsing: true,
      });
    }, 380);

    this.orbitTimer = setTimeout(() => {
      this.setData({
        buttonCollapsing: false,
        buttonOrbiting: true,
      });
    }, 1030);

    this.burstTimer = setTimeout(() => {
      this.setData({
        buttonOrbiting: false,
        buttonExploding: true,
      });
    }, 2630);

    this.fillTimer = setTimeout(() => {
      this.setData({
        buttonExploding: false,
        completionFill: true,
        orderComplete: true,
        orderAnimating: false,
        menuVisible: false,
        menuScrollTop: 0,
      });

      this.showMenuCards();
    }, 3430);
  },

  showMenuCards() {
    clearTimeout(this.menuTimer);

    this.menuTimer = setTimeout(() => {
      this.setData({
        menuVisible: true,
      }, () => {
        wx.nextTick(() => this.updateMenuEdgeSpace());
      });
    }, 700);
  },

  onMenuTouchStart() {
    this.menuTouching = true;
    clearTimeout(this.menuSnapTimer);

    this.setData({
      isVertical: false,
    });
  },

  onMenuTouchMove() {
    // 列表正常处理滑动；外层抽屉通过 menuTouching 判断并忽略。
  },

  onMenuTouchEnd() {
    this.menuTouching = false;
    this.scheduleMenuFocus();
  },

  onMenuScroll(e) {
    this.setData({
      menuScrollTop: e.detail.scrollTop,
    });

    this.scheduleMenuFocus();
  },

  scheduleMenuFocus() {
    clearTimeout(this.menuSnapTimer);

    this.menuSnapTimer = setTimeout(() => {
      const query = wx.createSelectorQuery();

      query.select(".menu-list").boundingClientRect();
      query.selectAll(".menu-card").boundingClientRect();

      query.exec((result) => {
        const list = result[0];
        const cards = result[1] || [];

        if (!list || !cards.length) return;

        const listCenter = list.top + list.height / 2;
        let nearest = null;
        let nearestDistance = Infinity;

        cards.forEach((card) => {
          const cardCenter = card.top + card.height / 2;
          const distance = Math.abs(cardCenter - listCenter);

          if (distance < nearestDistance) {
            nearest = card;
            nearestDistance = distance;
          }
        });

        if (nearest) {
          this.setData({
            focusedDishId: nearest.id,
          });
        }
      });
    }, 180);
  },

  scheduleMenuSnap() {
    clearTimeout(this.menuSnapTimer);

    this.menuSnapTimer = setTimeout(() => {
      if (this.menuTouching || this.menuSnapping) return;
      this.snapMenuToNearestCard();
    }, 180);
  },

  snapMenuToNearestCard() {
    if (
      !this.data.displayItems.length ||
      this.data.categoryPickerOpen ||
      this.data.basketVisible ||
      this.data.feedbackVisible ||
      this.data.submitPageVisible
    ) {
      return;
    }

    const query = wx.createSelectorQuery();

    query.select(".menu-list").boundingClientRect();
    query.selectAll(".menu-card").boundingClientRect();
    query.select(".feedback-entry").boundingClientRect();
    query.select(".menu-list").scrollOffset();

    query.exec((result) => {
      const list = result[0];
      const cards = result[1] || [];
      const feedback = result[2];
      const scroll = result[3];

      if (!list || !cards.length || !scroll || this.menuTouching) return;

      const listCenter = list.top + list.height / 2;
      let nearest = null;
      let nearestOffset = Infinity;

      cards.forEach((card) => {
        const cardCenter = card.top + card.height / 2;
        const offset = cardCenter - listCenter;

        if (Math.abs(offset) < Math.abs(nearestOffset)) {
          nearest = card;
          nearestOffset = offset;
        }
      });

      if (!nearest) return;

      this.setData({
        focusedDishId: nearest.id,
      });

      // 反馈按钮出现时不强制滚回菜品，保证它可以点击。
      if (feedback && feedback.top < list.bottom) return;

      if (Math.abs(nearestOffset) < 2) return;

      const targetTop = Math.max(0, scroll.scrollTop + nearestOffset);

      this.menuSnapping = true;

      // 先同步当前位置，再滚到目标位置。
      this.setData({
        scrollIntoDishId: "",
        menuSnapTop: scroll.scrollTop,
      }, () => {
        wx.nextTick(() => {
          this.setData({ menuSnapTop: targetTop });

          clearTimeout(this.menuSnapReleaseTimer);
          this.menuSnapReleaseTimer = setTimeout(() => {
            this.menuSnapping = false;
          }, 500);
        });
      });
    });
  },
  getAllMenuItems() {
    const builtIn = this.data.menuItems.map((item) => ({
      ...item,
      category: item.category || "炒菜",
    }));

    return builtIn.concat(this.data.customMenuItems || []);
  },

  getDisplayItems(selectedDishIds, category) {
    const ids = Array.isArray(selectedDishIds)
      ? selectedDishIds
      : this.data.selectedDishIds;

    const currentCategory = category || this.data.activeCategory;

    return this.getAllMenuItems()
      .filter((item) => item.category === currentCategory)
      .map((item) => ({
        ...item,
        selected: ids.indexOf(item.id) !== -1,
      }));
  },

  getBasketItems(selectedDishIds, dishNotes) {
    const ids = Array.isArray(selectedDishIds)
      ? selectedDishIds
      : this.data.selectedDishIds;

    const notes = dishNotes || this.data.dishNotes || {};

    return this.getAllMenuItems()
      .filter((item) => ids.indexOf(item.id) !== -1)
      .map((item) => ({
        ...item,
        note: notes[item.id] || "",
        quantity: this.data.dishQuantities[item.id] || 1,
      }));
  },

  updateDishSelection(id) {
    const selectedDishIds = this.data.selectedDishIds.slice();
    const index = selectedDishIds.indexOf(id);

    if (index === -1) {
      selectedDishIds.push(id);
    } else {
      selectedDishIds.splice(index, 1);
    }

    this.setData({
      selectedDishIds,
      selectedDishCount: selectedDishIds.length,
      displayItems: this.getDisplayItems(selectedDishIds),
      basketItems: this.getBasketItems(selectedDishIds),
    });
  },

  toggleDish(e) {
    const id = Number(e.currentTarget.dataset.id);
    const quantity = this.data.dishQuantities[id] || 0;

    if (quantity > 0) {
      wx.showModal({
        title: "这个菜已经点了哟~~",
        content: "还要再加一份吗？",
        confirmText: "再来一份",
        cancelText: "先不用",
        success: (res) => {
          if (res.confirm) {
            const current = this.data.dishQuantities[id] || 0;
            this.setDishQuantity(id, current + 1);
          }
        },
      });
      return;
    }

    this.setDishQuantity(id, 1);
  },

  removeDishFromBasket(e) {
    const id = Number(e.currentTarget.dataset.id);
    const quantity = this.data.dishQuantities[id] || 0;

    if (quantity > 0) {
      this.setDishQuantity(id, quantity - 1);
    }
  },

  setDishQuantity(id, quantity) {
    const dishQuantities = { ...this.data.dishQuantities };

    if (quantity > 0) {
      dishQuantities[id] = quantity;
    } else {
      delete dishQuantities[id];
    }

    const selectedDishIds = Object.keys(dishQuantities).map(Number);
    const selectedDishCount = Object.values(dishQuantities)
      .reduce((sum, count) => sum + count, 0);

    this.setData({
      dishQuantities,
      selectedDishIds,
      selectedDishCount,
    }, () => {
      this.setData({
        displayItems: this.getDisplayItems(selectedDishIds),
        basketItems: this.getBasketItems(selectedDishIds),
      });
    });
  },

  openBasket() {
    this.setData({
      basketVisible: true,
      basketClosing: false,
      basketItems: this.getBasketItems(),
    });
  },

  closeBasket() {
    if (!this.data.basketVisible || this.data.basketClosing) return;

    this.setData({
      basketClosing: true,
      basketClosePressed: false,
      basketCloseRebounding: false,
    });

    clearTimeout(this.basketTimer);

    this.basketTimer = setTimeout(() => {
      this.setData({
        basketVisible: false,
        basketClosing: false,
      });
    }, 280);
  },

  stopModal() { },

  onDishNoteInput(e) {
    const id = Number(e.currentTarget.dataset.id);
    const dishNotes = {
      ...this.data.dishNotes,
      [id]: e.detail.value,
    };

    this.setData({
      dishNotes,
      basketItems: this.getBasketItems(this.data.selectedDishIds, dishNotes),
    });
  },

  onBasketCloseTouchStart() {
    clearTimeout(this.basketCloseTimer);

    this.setData({
      basketClosePressed: true,
      basketCloseRebounding: false,
    });
  },

  onBasketCloseTouchEnd() {
    this.setData({
      basketClosePressed: false,
      basketCloseRebounding: true,
    });

    this.basketCloseTimer = setTimeout(() => {
      this.setData({ basketCloseRebounding: false });
    }, 220);
  },

  onDishButtonTouchStart(e) {

    const id = Number(e.currentTarget.dataset.id);

    clearTimeout(this.dishButtonTimer);

    this.setData({
      dishButtonPressedId: id,
      dishButtonReboundingId: null,
    });
  },

  onDishButtonTouchEnd() {
    const id = this.data.dishButtonPressedId;

    if (id === null) return;

    this.setData({
      dishButtonPressedId: null,
      dishButtonReboundingId: id,
    });

    this.dishButtonTimer = setTimeout(() => {
      this.setData({ dishButtonReboundingId: null });
    }, 240);
  },

  onOrderActionTouchStart(e) {
    const action = e.currentTarget.dataset.action;

    clearTimeout(this.bottomActionTimer);

    this.setData({
      bottomActionPressed: action,
      bottomActionRebounding: "",
    });
  },

  onOrderActionTouchEnd() {
    const action = this.data.bottomActionPressed;

    if (!action) return;

    this.setData({
      bottomActionPressed: "",
      bottomActionRebounding: action,
    });

    this.bottomActionTimer = setTimeout(() => {
      this.setData({ bottomActionRebounding: "" });
    }, 240);
  },

  onBasketTap() {
    this.openBasket();
  },

  onSubmitOrder() {
    if (this.data.selectedDishCount === 0) {
      wx.showToast({
        title: "先选几道想吃的菜吧~",
        icon: "none",
      });
      return;
    }

    this.setData({
      basketItems: this.getBasketItems(),
      submitPageVisible: true,
    });
  },

  closeSubmitPage() {
    if (this.data.submitPageClosing) return;

    this.setData({
      submitPageVisible: false,
      submitPageClosing: false,
      wishConfirmed: false,
    });

    clearTimeout(this.submitCloseTimer);

    this.submitCloseTimer = setTimeout(() => {
      this.setData({
        submitPageVisible: false,
        submitPageClosing: false,
      });
    }, 400);
  },
  openCategoryPicker() {
    const index = this.data.categories.findIndex(
      (item) => item.name === this.data.activeCategory
    );

    const safeIndex = index < 0 ? 0 : index;
    const step = 360 / this.data.categories.length;

    this.setData({
      categoryPickerOpen: true,
      pickerValue: [safeIndex],
      pendingCategory: this.data.categories[safeIndex].name,
      wheelRotation: -safeIndex * step,
    });

    wx.nextTick(() => {
      wx.createSelectorQuery()
        .select(".category-wheel")
        .boundingClientRect((rect) => {
          this.wheelRect = rect;
        })
        .exec();
    });
  },

  cancelCategoryPicker() {
    this.setData({
      categoryPickerOpen: false,
    });
  },

  onWheelTouchStart(e) {
    if (!this.wheelRect) return;

    const touch = e.touches[0];
    const centerX = this.wheelRect.left + this.wheelRect.width / 2;
    const centerY = this.wheelRect.top + this.wheelRect.height / 2;

    this.wheelLastAngle =
      Math.atan2(touch.clientY - centerY, touch.clientX - centerX) *
      (180 / Math.PI);

    this.setData({
      wheelDragging: true,
    });
  },

  onWheelTouchMove(e) {
    if (!this.wheelRect) return;

    const touch = e.touches[0];
    const centerX = this.wheelRect.left + this.wheelRect.width / 2;
    const centerY = this.wheelRect.top + this.wheelRect.height / 2;

    const currentAngle =
      Math.atan2(touch.clientY - centerY, touch.clientX - centerX) *
      (180 / Math.PI);

    let delta = currentAngle - this.wheelLastAngle;

    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    this.wheelLastAngle = currentAngle;

    const wheelRotation = this.data.wheelRotation + delta;
    const index = this.getWheelIndex(wheelRotation);

    this.setData({ wheelRotation });

    // 手指转到新刻度时，立即更新顶部白色选项。
    if (index !== this.data.pickerValue[0]) {
      this.updateWheelSelection(index);
    }
  },

  getWheelIndex(rotation) {
    const step = 360 / this.data.categories.length;
    const rawIndex = -rotation / step;

    return (
      ((Math.round(rawIndex) % this.data.categories.length) +
        this.data.categories.length) %
      this.data.categories.length
    );
  },

  updateWheelSelection(index) {
    clearTimeout(this.wheelFocusTimer);

    this.setData(
      {
        pickerValue: [index],
        pendingCategory: this.data.categories[index].name,
        wheelFocusActive: false,
      },
      () => {
        this.setData({ wheelFocusActive: true });
      }
    );

    this.wheelFocusTimer = setTimeout(() => {
      this.setData({ wheelFocusActive: false });
    }, 150);

  },

  onWheelTouchEnd() {
    const step = 360 / this.data.categories.length;

    // 保留已转过的总圈数，只把当前位置吸附到最近的分类角度。
    const rawIndex = -this.data.wheelRotation / step;
    const snappedIndex = Math.round(rawIndex);

    // 只给页面显示使用的分类索引保持在 0 ～ 分类数量之间。
    const index =
      ((snappedIndex % this.data.categories.length) +
        this.data.categories.length) %
      this.data.categories.length;

    this.setData({
      wheelDragging: false,
      pickerValue: [index],
      pendingCategory: this.data.categories[index].name,
      wheelRotation: -snappedIndex * step,
    });
  },

  confirmCategory() {
    const index = this.data.pickerValue[0];
    const activeCategory = this.data.categories[index].name;

    this.setData({
      activeCategory,
      categoryPickerOpen: false,
      menuScrollTop: 0,
      scrollIntoDishId: "",
      displayItems: this.getDisplayItems(
        this.data.selectedDishIds,
        activeCategory
      ),
    });
  },
  openFeedback() {
    this.setData({ feedbackVisible: true });
  },

  closeFeedback() {
    this.setData({ feedbackVisible: false });
  },
  onFeedbackCategoryChange(e) {
    this.setData({
      feedbackCategoryIndex: Number(e.detail.value),
    });
  },

  onFeedbackNameInput(e) {
    this.setData({
      feedbackName: e.detail.value,
    });
  },

  chooseFeedbackImage() {
    wx.chooseMedia({
      count: 1,
      mediaType: ["image"],
      sourceType: ["album", "camera"],
      success: (res) => {
        this.setData({
          feedbackImage: res.tempFiles[0].tempFilePath,
        });
      },
    });
  },
  toggleFeedbackCategory() {
    this.setData({
      feedbackCategoryOpen: !this.data.feedbackCategoryOpen,
    });
  },

  selectFeedbackCategory(e) {
    this.setData({
      feedbackCategoryIndex: Number(e.currentTarget.dataset.index),
      feedbackCategoryOpen: false,
    });
  },
  showDishInCategory(item) {
    this.setData({
      feedbackVisible: false,
      feedbackCategoryOpen: false,
      activeCategory: item.category,
      scrollIntoDishId: "",
      displayItems: this.getDisplayItems(
        this.data.selectedDishIds,
        item.category
      ),
    }, () => {
      wx.nextTick(() => {
        this.setData({
          scrollIntoDishId: `dish-${item.id}`,
        });
      });
    });
  },

  saveCustomDish() {
    if (this.data.savingDish) return;

    const name = this.data.feedbackName.trim();

    if (!name) {
      wx.showToast({ title: "先填写菜名", icon: "none" });
      return;
    }

    const existing = this.getAllMenuItems().find(
      (item) => item.name.trim() === name
    );

    if (existing) {
      wx.showToast({
        title: "已经有这个菜了哟~",
        icon: "none",
        duration: 1800,
      });

      setTimeout(() => {
        this.showDishInCategory(existing);
      }, 1800);
      return;
    }

    if (!this.data.feedbackImage) {
      wx.showToast({ title: "请选择菜品图片", icon: "none" });
      return;
    }

    const category =
      this.data.categories[this.data.feedbackCategoryIndex].name;

    this.setData({ savingDish: true });

    wx.saveFile({
      tempFilePath: this.data.feedbackImage,

      success: (res) => {
        const item = {
          id: Date.now(),
          name,
          description: "你想吃的菜",
          image: res.savedFilePath,
          category,
        };

        const customMenuItems = this.data.customMenuItems.concat(item);

        try {
          wx.setStorageSync("customMenuItems", customMenuItems);
        } catch (error) {
          this.setData({ savingDish: false });
          wx.showToast({ title: "保存失败，请重试", icon: "none" });
          return;
        }

        this.setData({
          customMenuItems,
          feedbackName: "",
          feedbackImage: "",
          savingDish: false,
        }, () => {
          this.showDishInCategory(item);
          wx.showToast({ title: "添加成功", icon: "success" });
        });
      },

      fail: () => {
        this.setData({ savingDish: false });
        wx.showToast({ title: "图片保存失败", icon: "none" });
      },
    });
  },
  confirmWishList() {
    if (this.data.selectedDishCount === 0) {
      wx.showToast({
        title: "先选几道菜吧~",
        icon: "none",
      });
      return;
    }
    if (!this.data.mealDate || !this.data.mealTime) {
      wx.showModal({
        content: "选择一下时间哟~我好提前准备",
        showCancel: false,
        confirmText: "知道啦",
      });
      return;
    }

    if (this.data.wishConfirmed) return;

    this.setData({
      wishConfirmed: true,

      // 保存本次提交时的清单与用餐时间。
      submittedItems: this.getBasketItems().map((item) => ({ ...item })),
      submittedMealDate: this.data.mealDate,
      submittedMealTime: this.data.mealTime,
    });

    clearTimeout(this.submittedOrderTimer);

    this.submittedOrderTimer = setTimeout(() => {
      this.setData({
        submitPageVisible: false,
        wishConfirmed: false,
        submittedOrderVisible: true,
      });
    }, 4000);
  },

  continueOrdering() {
    this.setData({
      submittedOrderVisible: false,
      submitPageVisible: false,
      wishConfirmed: false,
    });
  },
  onMealDateChange(e) {
    this.setData({
      mealDate: e.detail.value,
    });
  },

  onMealTimeChange(e) {
    this.setData({
      mealTime: e.detail.value,
    });
  },
  initMealPicker() {
    const now = new Date();
    const currentYear = now.getFullYear();

    this.setData({
      mealYears: Array.from({ length: 6 }, (_, i) => currentYear + i),
      mealMonths: Array.from({ length: 12 }, (_, i) => i + 1),
      mealDays: this.getMealDays(currentYear, now.getMonth() + 1),
      mealHours: Array.from({ length: 24 }, (_, i) => i),
      mealMinutes: Array.from({ length: 60 }, (_, i) => i),

      mealYear: currentYear,
      mealMonth: now.getMonth() + 1,
      mealDay: now.getDate(),
      mealHour: now.getHours(),
      mealMinute: now.getMinutes(),
    });
  },

  getMealDays(year, month) {
    const count = new Date(year, month, 0).getDate();
    return Array.from({ length: count }, (_, i) => i + 1);
  },

  toggleMealPicker() {
    this.setData({
      mealPickerOpen: !this.data.mealPickerOpen,
    });
  },

  selectMealPart(e) {
    const part = e.currentTarget.dataset.part;
    const value = Number(e.currentTarget.dataset.value);
    const update = { [part]: value };

    if (part === "mealYear" || part === "mealMonth") {
      const year = part === "mealYear" ? value : this.data.mealYear;
      const month = part === "mealMonth" ? value : this.data.mealMonth;
      const days = this.getMealDays(year, month);

      update.mealDays = days;
      update.mealDay = Math.min(this.data.mealDay, days.length);
    }

    this.setData(update);
  },

  confirmMealTime() {
    const pad = (value) => String(value).padStart(2, "0");

    this.setData({
      mealDate:
        `${this.data.mealYear}-${pad(this.data.mealMonth)}-${pad(this.data.mealDay)}`,
      mealTime:
        `${pad(this.data.mealHour)}:${pad(this.data.mealMinute)}`,
      mealPickerOpen: false,
    });
  },
  updateMenuEdgeSpace() {
    const query = wx.createSelectorQuery();

    query.select(".menu-list").boundingClientRect();
    query.select(".menu-card").boundingClientRect();

    query.exec((result) => {
      const list = result[0];
      const card = result[1];

      if (!list || !card) return;

      this.setData({
        menuEdgeSpace: Math.max(0, (list.height - card.height) / 2),
      }, () => {
        this.scheduleMenuFocus();
      });
    });
  },
});