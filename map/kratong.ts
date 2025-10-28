export type KratongNormalPartType = {
  id: string;
  type: string;
  name: string;
  description: string;
  url: string;
};

export type KratongVariantPartType = {
  id: string;
  type: string;
  name: string;
  description: string;
  variants: string[];
};

export type KratongNoDescPartType = {
  id: string;
  type: string;
  variants: string[];
};

export type KratongType = {
  name: string;
  description: string;
  id: string;
  type: string;
  url: string;
  thumbnail?: string;
};

export type KratongTypeVariant = {
  name: string;
  description: string;
  id: string;
  type: string;
  variants: string[];
  thumbnails?: string[];
};

export interface KratongMapType {
  base: {
    "coconut-shell-carved": KratongType;
    "banana-leaf-2": KratongType;
    "coconut-shell": KratongType;
    lotus: KratongType;
    ice: KratongType;
    "banana-leaf": KratongType;
  };
  decorations: {
    none: KratongType;
    "sign-quote": KratongTypeVariant;
    swan: KratongType;
    "sign-taken": KratongTypeVariant;
    cactus: KratongType;
    "sign-enttid": KratongTypeVariant;
    nak: KratongType;
    "sign-want-love": KratongTypeVariant;
    "sign-want-money": KratongTypeVariant;
  };
  flowers: {
    love: KratongType;
    study: KratongType;
    luck: KratongType;
    "summer-fruits": KratongType;
  };
  candles: {
    orange: KratongType;
    pink: KratongType;
    green: KratongType;
    blue: KratongType;
    yellow: KratongType;
    violet: KratongType;
  };
}

export const KratongMap: KratongMapType = {
  base: {
    "banana-leaf": {
      id: "banana-leaf",
      type: "normal",
      name: "ใบตอง",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/kratong/base/banana-leaf.webp",
      thumbnail:
        "/loykrathong/assets/images/kratong/thumbnail/base/banana-leaf.webp",
    },
    lotus: {
      id: "lotus",
      type: "normal",
      name: "ดอกบัว",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/kratong/base/lotus.webp",
      thumbnail: "/loykrathong/assets/images/kratong/thumbnail/base/lotus.webp",
    },
    "coconut-shell": {
      id: "coconut-shell",
      type: "normal",
      name: "กะลามะพร้าว",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/kratong/base/coconut-shell.webp",
      thumbnail:
        "/loykrathong/assets/images/kratong/thumbnail/base/coconut-shell.webp",
    },
    "coconut-shell-carved": {
      id: "coconut-shell-carved",
      type: "normal",
      name: "กาบมะพร้าว",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/kratong/base/coconut-shell-carved.webp",
      thumbnail:
        "/loykrathong/assets/images/kratong/thumbnail/base/coconut-shell-carved.webp",
    },
    ice: {
      id: "ice",
      type: "normal",
      name: "น้ำแข็ง",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/kratong/base/ice.webp",
      thumbnail: "/loykrathong/assets/images/kratong/thumbnail/base/ice.webp",
    },
    "banana-leaf-2": {
      id: "banana-leaf-2",
      type: "normal",
      name: "ใบตองเหลี่ยม",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/kratong/base/banana-leaf-2.webp",
      thumbnail:
        "/loykrathong/assets/images/kratong/thumbnail/base/banana-leaf-2.webp",
    },
  },
  decorations: {
    none: {
      type: "normal",
      id: "none",
      name: "ไม่มี",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/kratong/decorations/none.webp",
    },
    nak: {
      id: "nak",
      type: "normal",
      name: "พญานาค",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/kratong/decorations/nak.webp",
      thumbnail:
        "/loykrathong/assets/images/kratong/thumbnail/decorations/nak.webp",
    },
    swan: {
      id: "swan",
      name: "หงส์",
      type: "normal",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/kratong/decorations/swan.webp",
      thumbnail:
        "/loykrathong/assets/images/kratong/thumbnail/decorations/swan.webp",
    },
    cactus: {
      id: "cactus",
      type: "normal",
      name: "กระบองเพชร",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/kratong/decorations/cactus.webp",
      thumbnail:
        "/loykrathong/assets/images/kratong/thumbnail/decorations/cactus.webp",
    },
    "sign-want-love": {
      id: "sign-want-love",
      type: "variant",
      name: "ป้ายอยากมีหวานใจ",
      description: "คำอธิบาย",
      variants: [
        "/loykrathong/assets/images/kratong/decorations/sign/want-love/red.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/want-love/orange.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/want-love/violet.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/want-love/pink.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/want-love/blue.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/want-love/green.webp",
      ],
      thumbnails: [
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/want-love/red.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/want-love/orange.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/want-love/violet.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/want-love/pink.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/want-love/blue.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/want-love/green.webp",
      ],
    },
    "sign-want-money": {
      id: "sign-want-money",
      type: "variant",
      name: "ป้ายอยากเป็นเศรษฐี",
      description: "คำอธิบาย",
      variants: [
        "/loykrathong/assets/images/kratong/decorations/sign/want-money/red.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/want-money/orange.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/want-money/violet.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/want-money/pink.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/want-money/blue.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/want-money/green.webp",
      ],
      thumbnails: [
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/want-money/red.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/want-money/orange.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/want-money/violet.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/want-money/pink.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/want-money/blue.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/want-money/green.webp",
      ],
    },
    "sign-enttid": {
      id: "sign-enttid",
      type: "variant",
      name: "ป้ายเอนท์ติด",
      description: "คำอธิบาย",
      variants: [
        "/loykrathong/assets/images/kratong/decorations/sign/enttid/red.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/enttid/orange.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/enttid/violet.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/enttid/pink.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/enttid/blue.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/enttid/green.webp",
      ],
      thumbnails: [
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/enttid/red.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/enttid/orange.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/enttid/violet.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/enttid/pink.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/enttid/blue.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/enttid/green.webp",
      ],
    },
    "sign-quote": {
      id: "sign-quote",
      type: "variant",
      name: "ป้ายคำคมสุดปัง",
      description: "คำอธิบาย",
      variants: [
        "/loykrathong/assets/images/kratong/decorations/sign/quote/red.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/quote/orange.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/quote/violet.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/quote/pink.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/quote/blue.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/quote/green.webp",
      ],
      thumbnails: [
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/quote/red.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/quote/orange.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/quote/violet.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/quote/pink.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/quote/blue.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/quote/green.webp",
      ],
    },
    "sign-taken": {
      id: "sign-taken",
      type: "variant",
      name: "ป้ายมีคนจองแล้ว",
      description: "คำอธิบาย",
      variants: [
        "/loykrathong/assets/images/kratong/decorations/sign/taken/red.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/taken/orange.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/taken/violet.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/taken/pink.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/taken/blue.webp",
        "/loykrathong/assets/images/kratong/decorations/sign/taken/green.webp",
      ],
      thumbnails: [
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/taken/red.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/taken/orange.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/taken/violet.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/taken/pink.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/taken/blue.webp",
        "/loykrathong/assets/images/kratong/thumbnail/decorations/sign/taken/green.webp",
      ],
    },
  },
  flowers: {
    love: {
      id: "love",
      type: "normal",
      name: "ชุดความรัก",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/kratong/flowers/love.webp",
      thumbnail:
        "/loykrathong/assets/images/kratong/thumbnail/flowers/love.webp",
    },
    luck: {
      id: "luck",
      type: "normal",
      name: "ชุดหนทางสู่เศรษฐี",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/kratong/flowers/luck.webp",
      thumbnail:
        "/loykrathong/assets/images/kratong/thumbnail/flowers/luck.webp",
    },
    "summer-fruits": {
      id: "summer-fruits",
      type: "normal",
      name: "ชุดรวมมิตรผลไม้ฤดูร้อน",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/kratong/flowers/summer-fruits.webp",
      thumbnail:
        "/loykrathong/assets/images/kratong/thumbnail/flowers/summer-fruits.webp",
    },
    study: {
      id: "study",
      type: "normal",
      name: "ชุดการเรียน",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/kratong/flowers/study.webp",
      thumbnail:
        "/loykrathong/assets/images/kratong/thumbnail/flowers/study.webp",
    },
  },
  candles: {
    yellow: {
      id: "candle-yellow",
      type: "normal",
      name: "สีเหลือง",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/kratong/candles/yellow.webp",
      thumbnail:
        "/loykrathong/assets/images/kratong/thumbnail/candles/yellow.webp",
    },
    blue: {
      id: "candle-blue",
      type: "normal",
      name: "สีฟ้า",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/kratong/candles/blue.webp",
      thumbnail:
        "/loykrathong/assets/images/kratong/thumbnail/candles/blue.webp",
    },
    green: {
      id: "candle-green",
      type: "normal",
      name: "สีเขียว",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/kratong/candles/green.webp",
      thumbnail:
        "/loykrathong/assets/images/kratong/thumbnail/candles/green.webp",
    },
    orange: {
      id: "candle-orange",
      type: "normal",
      name: "สีส้ม",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/kratong/candles/orange.webp",
      thumbnail:
        "/loykrathong/assets/images/kratong/thumbnail/candles/orange.webp",
    },
    pink: {
      id: "candle-pink",
      type: "normal",
      name: "สีชมพู",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/kratong/candles/pink.webp",
      thumbnail:
        "/loykrathong/assets/images/kratong/thumbnail/candles/pink.webp",
    },
    violet: {
      id: "candle-violet",
      type: "normal",
      name: "สีม่วง",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/kratong/candles/violet.webp",
      thumbnail:
        "/loykrathong/assets/images/kratong/thumbnail/candles/violet.webp",
    },
  },
};

interface PrincipalMapType {
  base: {
    blue: KratongType;
    indigo: KratongType;
    pink: KratongType;
    violet: KratongType;
  };
  candles: {
    blue: KratongType;
    green: KratongType;
    pink: KratongType;
    red: KratongType;
  };
  decorations: {
    rice1: KratongType;
    rice2: KratongType;
  };
  swan: {
    blue: KratongType;
    green: KratongType;
    pink: KratongType;
    yellow: KratongType;
  };
}

export const PrincipalMap: PrincipalMapType = {
  base: {
    blue: {
      type: "normal",
      id: "base-blue",
      name: "สีฟ้า",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/principal/base/blue.webp",
    },
    indigo: {
      type: "normal",
      id: "base-indigo",
      name: "สีคราม",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/principal/base/indigo.webp",
    },
    pink: {
      type: "normal",
      id: "base-pink",
      name: "สีชมพู",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/principal/base/pink.webp",
    },
    violet: {
      type: "normal",
      id: "base-violet",
      name: "สีม่วง",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/principal/base/violet.webp",
    },
  },
  candles: {
    blue: {
      type: "normal",
      id: "candle-blue",
      name: "สีฟ้า",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/principal/candles/blue.webp",
    },
    green: {
      type: "normal",
      id: "candle-green",
      name: "สีเขียว",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/principal/candles/green.webp",
    },
    pink: {
      type: "normal",
      id: "candle-pink",
      name: "สีชมพู",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/principal/candles/pink.webp",
    },
    red: {
      type: "normal",
      id: "candle-orange",
      name: "สีส้ม",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/principal/candles/orange.webp",
    },
  },
  decorations: {
    rice1: {
      type: "normal",
      id: "rice1",
      name: "ข้าวรูปวงกลม",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/principal/rice/rice1.webp",
    },
    rice2: {
      type: "normal",
      id: "rice2",
      name: "ข้าวรูปหัวใจ",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/principal/rice/rice2.webp",
    },
  },
  swan: {
    blue: {
      type: "normal",
      id: "swan-blue",
      name: "สีฟ้า",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/principal/swan/blue.webp",
    },
    green: {
      type: "normal",
      id: "swan-green",
      name: "สีเขียว",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/principal/swan/green.webp",
    },
    pink: {
      type: "normal",
      id: "swan-pink",
      name: "สีชมพู",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/principal/swan/pink.webp",
    },
    yellow: {
      type: "normal",
      id: "swan-yellow",
      name: "สีเหลือง",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/principal/swan/yellow.webp",
    },
  },
};

interface CUPSAAMapType {
  base: {
    blue: KratongType;
    orange: KratongType;
    pink: KratongType;
    lilac: KratongType;
    lavender: KratongType;
  };
  flowers: {
    blue: KratongType;
    orange: KratongType;
    pink: KratongType;
    violet: KratongType;
    yellow: KratongType;
  };
  candles: {
    blue: KratongType;
    pink: KratongType;
    violet: KratongType;
    yellow: KratongType;
  };
}

export const CUPSAAMap: CUPSAAMapType = {
  base: {
    blue: {
      type: "normal",
      id: "base-blue",
      name: "สีฟ้า",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/CUPSAA/base/blue.webp",
    },
    orange: {
      type: "normal",
      id: "base-orange",
      name: "สีส้ม",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/CUPSAA/base/orange.webp",
    },
    pink: {
      type: "normal",
      id: "base-pink",
      name: "สีชมพู",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/CUPSAA/base/pink.webp",
    },
    lilac: {
      type: "normal",
      id: "base-lilac",
      name: "สีม่วงชมพู",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/CUPSAA/base/lilac.webp",
    },
    lavender: {
      type: "normal",
      id: "base-lavender",
      name: "สีม่วงลาเวนเดอร์",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/CUPSAA/base/lavender.webp",
    },
  },
  flowers: {
    blue: {
      type: "normal",
      id: "flower-blue",
      name: "สีฟ้า",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/CUPSAA/flowers/blue.webp",
    },
    orange: {
      type: "normal",
      id: "flower-orange",
      name: "สีส้ม",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/CUPSAA/flowers/orange.webp",
    },
    pink: {
      type: "normal",
      id: "flower-pink",
      name: "สีชมพู",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/CUPSAA/flowers/pink.webp",
    },
    violet: {
      type: "normal",
      id: "flower-violet",
      name: "สีม่วง",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/CUPSAA/flowers/violet.webp",
    },
    yellow: {
      type: "normal",
      id: "flower-yellow",
      name: "สีเหลือง",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/CUPSAA/flowers/yellow.webp",
    },
  },
  candles: {
    blue: {
      type: "normal",
      id: "candle-blue",
      name: "สีฟ้า",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/CUPSAA/candles/blue.webp",
      thumbnail:
        "/loykrathong/assets/images/CUPSAA/thumbnail/candles/blue.webp",
    },
    pink: {
      type: "normal",
      id: "candle-pink",
      name: "สีชมพู",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/CUPSAA/candles/pink.webp",
      thumbnail:
        "/loykrathong/assets/images/CUPSAA/thumbnail/candles/pink.webp",
    },
    violet: {
      type: "normal",
      id: "candle-violet",
      name: "สีม่วง",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/CUPSAA/candles/violet.webp",
      thumbnail:
        "/loykrathong/assets/images/CUPSAA/thumbnail/candles/violet.webp",
    },
    yellow: {
      type: "normal",
      id: "candle-yellow",
      name: "สีเหลือง",
      description: "คำอธิบาย",
      url: "/loykrathong/assets/images/CUPSAA/candles/yellow.webp",
      thumbnail:
        "/loykrathong/assets/images/CUPSAA/thumbnail/candles/yellow.webp",
    },
  },
};
