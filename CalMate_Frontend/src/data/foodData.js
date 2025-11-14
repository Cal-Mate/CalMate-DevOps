// src/data/foodData.js
// 식단 데이터 - 프론트엔드에서 검색 기능을 위한 로컬 데이터

/**
 * @typedef {Object} FoodItem
 * @property {string} id - 음식 고유 ID
 * @property {string} name - 음식 이름
 * @property {string} cuisine - 음식 카테고리 (KOREAN, CHINESE, JAPANESE, WESTERN, SPANISH, LATE_NIGHT, SNACK)
 * @property {number} gram - 1회 제공량 (g)
 * @property {number} kcal - 칼로리
 * @property {number} carbo - 탄수화물 (g)
 * @property {number} protein - 단백질 (g)
 * @property {number} fat - 지방 (g)
 * @property {number} sodium - 나트륨 (mg)
 */

// ============================================================
// 1. 한식 (KOREAN)
// ============================================================
/** @type {FoodItem[]} */
export const KOREAN_FOOD_DATA = [
  { id: "KOR_001", name: "김치찌개", cuisine: "KOREAN", gram: 350, kcal: 280, carbo: 10.5, protein: 18, fat: 17, sodium: 950 },
  { id: "KOR_002", name: "된장찌개", cuisine: "KOREAN", gram: 330, kcal: 250, carbo: 12, protein: 17, fat: 14, sodium: 980 },
  { id: "KOR_003", name: "순두부찌개", cuisine: "KOREAN", gram: 360, kcal: 310, carbo: 14, protein: 19, fat: 20, sodium: 1020 },
  { id: "KOR_004", name: "비빔밥", cuisine: "KOREAN", gram: 380, kcal: 560, carbo: 82, protein: 17, fat: 14, sodium: 960 },
  { id: "KOR_005", name: "돌솥비빔밥", cuisine: "KOREAN", gram: 420, kcal: 610, carbo: 86, protein: 19, fat: 16, sodium: 1000 },
  { id: "KOR_006", name: "갈비탕", cuisine: "KOREAN", gram: 420, kcal: 430, carbo: 8, protein: 32, fat: 26, sodium: 1200 },
  { id: "KOR_007", name: "콩나물국밥", cuisine: "KOREAN", gram: 480, kcal: 520, carbo: 68, protein: 20, fat: 10, sodium: 1250 },
  { id: "KOR_008", name: "제육볶음", cuisine: "KOREAN", gram: 200, kcal: 420, carbo: 12, protein: 24, fat: 30, sodium: 820 },
  { id: "KOR_009", name: "돼지불고기", cuisine: "KOREAN", gram: 210, kcal: 430, carbo: 16, protein: 23, fat: 29, sodium: 840 },
  { id: "KOR_010", name: "잡채", cuisine: "KOREAN", gram: 180, kcal: 320, carbo: 45, protein: 7, fat: 10, sodium: 620 },
];

// ============================================================
// 2. 중식 (CHINESE)
// ============================================================
/** @type {FoodItem[]} */
export const CHINESE_FOOD_DATA = [
  { id: "CHI_001", name: "짜장면", cuisine: "CHINESE", gram: 400, kcal: 740, carbo: 110, protein: 17, fat: 22, sodium: 1250 },
  { id: "CHI_002", name: "짬뽕", cuisine: "CHINESE", gram: 450, kcal: 680, carbo: 82, protein: 32, fat: 20, sodium: 1680 },
  { id: "CHI_003", name: "간짜장", cuisine: "CHINESE", gram: 420, kcal: 780, carbo: 105, protein: 22, fat: 27, sodium: 1350 },
  { id: "CHI_004", name: "볶음짬뽕", cuisine: "CHINESE", gram: 420, kcal: 800, carbo: 98, protein: 28, fat: 32, sodium: 1580 },
  { id: "CHI_005", name: "탕수육", cuisine: "CHINESE", gram: 250, kcal: 610, carbo: 70, protein: 20, fat: 26, sodium: 820 },
  { id: "CHI_006", name: "깐풍기", cuisine: "CHINESE", gram: 250, kcal: 720, carbo: 60, protein: 28, fat: 38, sodium: 920 },
  { id: "CHI_007", name: "고추잡채", cuisine: "CHINESE", gram: 200, kcal: 420, carbo: 34, protein: 18, fat: 22, sodium: 690 },
  { id: "CHI_008", name: "마파두부", cuisine: "CHINESE", gram: 250, kcal: 420, carbo: 17, protein: 22, fat: 28, sodium: 880 },
  { id: "CHI_009", name: "칠리새우", cuisine: "CHINESE", gram: 240, kcal: 520, carbo: 36, protein: 27, fat: 24, sodium: 880 },
];

// ============================================================
// 3. 일식 (JAPANESE)
// ============================================================
/** @type {FoodItem[]} */
export const JAPANESE_FOOD_DATA = [
  { id: "JPN_001", name: "규동", cuisine: "JAPANESE", gram: 350, kcal: 650, carbo: 82, protein: 24, fat: 20, sodium: 1100 },
  { id: "JPN_002", name: "가츠동", cuisine: "JAPANESE", gram: 360, kcal: 720, carbo: 88, protein: 26, fat: 24, sodium: 1150 },
  { id: "JPN_003", name: "연어초밥(모둠)", cuisine: "JAPANESE", gram: 280, kcal: 520, carbo: 72, protein: 24, fat: 14, sodium: 860 },
  { id: "JPN_004", name: "모둠초밥", cuisine: "JAPANESE", gram: 300, kcal: 560, carbo: 78, protein: 26, fat: 15, sodium: 880 },
  { id: "JPN_005", name: "야키소바", cuisine: "JAPANESE", gram: 320, kcal: 630, carbo: 90, protein: 18, fat: 18, sodium: 980 },
  { id: "JPN_006", name: "오코노미야키", cuisine: "JAPANESE", gram: 300, kcal: 650, carbo: 72, protein: 22, fat: 28, sodium: 1020 },
  { id: "JPN_007", name: "카레우동(일식)", cuisine: "JAPANESE", gram: 380, kcal: 690, carbo: 96, protein: 20, fat: 18, sodium: 1300 },
];

// ============================================================
// 4. 양식 (WESTERN)
// ============================================================
/** @type {FoodItem[]} */
export const WESTERN_FOOD_DATA = [
  { id: "WES_001", name: "마르게리타피자", cuisine: "WESTERN", gram: 120, kcal: 250, carbo: 28, protein: 10, fat: 10, sodium: 480 },
  { id: "WES_002", name: "페퍼로니피자", cuisine: "WESTERN", gram: 120, kcal: 290, carbo: 27, protein: 12, fat: 14, sodium: 520 },
  { id: "WES_003", name: "고구마피자", cuisine: "WESTERN", gram: 130, kcal: 300, carbo: 34, protein: 11, fat: 12, sodium: 500 },
  { id: "WES_004", name: "까르보나라파스타", cuisine: "WESTERN", gram: 250, kcal: 620, carbo: 72, protein: 16, fat: 26, sodium: 840 },
  { id: "WES_005", name: "미트소스파스타", cuisine: "WESTERN", gram: 250, kcal: 580, carbo: 78, protein: 18, fat: 17, sodium: 780 },
  { id: "WES_006", name: "알리오올리오", cuisine: "WESTERN", gram: 220, kcal: 520, carbo: 60, protein: 11, fat: 22, sodium: 620 },
  { id: "WES_007", name: "비프스테이크", cuisine: "WESTERN", gram: 250, kcal: 680, carbo: 8, protein: 55, fat: 45, sodium: 420 },
  { id: "WES_008", name: "포크찹", cuisine: "WESTERN", gram: 240, kcal: 620, carbo: 10, protein: 48, fat: 38, sodium: 430 },
  { id: "WES_009", name: "치킨커틀릿", cuisine: "WESTERN", gram: 230, kcal: 560, carbo: 32, protein: 30, fat: 28, sodium: 520 },
  { id: "WES_010", name: "프렌치토스트", cuisine: "WESTERN", gram: 160, kcal: 280, carbo: 38, protein: 9, fat: 10, sodium: 380 },
  { id: "WES_011", name: "에그베네딕트", cuisine: "WESTERN", gram: 210, kcal: 430, carbo: 29, protein: 19, fat: 26, sodium: 690 },
  { id: "WES_012", name: "맥앤치즈", cuisine: "WESTERN", gram: 200, kcal: 420, carbo: 55, protein: 14, fat: 16, sodium: 700 },
  { id: "WES_013", name: "갈릭버터새우", cuisine: "WESTERN", gram: 180, kcal: 300, carbo: 6, protein: 23, fat: 20, sodium: 420 },
  { id: "WES_014", name: "라자냐", cuisine: "WESTERN", gram: 250, kcal: 600, carbo: 62, protein: 26, fat: 28, sodium: 740 },
  { id: "WES_015", name: "미트볼링귀니", cuisine: "WESTERN", gram: 300, kcal: 680, carbo: 90, protein: 24, fat: 22, sodium: 780 },
  { id: "WES_016", name: "치킨리조또", cuisine: "WESTERN", gram: 300, kcal: 540, carbo: 78, protein: 18, fat: 16, sodium: 720 },
];

// ============================================================
// 5. 스페인식 (SPANISH)
// ============================================================
/** @type {FoodItem[]} */
export const SPANISH_FOOD_DATA = [
  { id: "SPA_001", name: "감바스알아히요", cuisine: "SPANISH", gram: 220, kcal: 510, carbo: 4, protein: 24, fat: 44, sodium: 650 },
  { id: "SPA_002", name: "해산물빠에야", cuisine: "SPANISH", gram: 320, kcal: 620, carbo: 82, protein: 26, fat: 18, sodium: 980 },
  { id: "SPA_003", name: "치킨빠에야", cuisine: "SPANISH", gram: 320, kcal: 600, carbo: 80, protein: 28, fat: 16, sodium: 940 },
  { id: "SPA_004", name: "스페인또르티야", cuisine: "SPANISH", gram: 200, kcal: 420, carbo: 32, protein: 14, fat: 24, sodium: 620 },
  { id: "SPA_005", name: "추로스", cuisine: "SPANISH", gram: 120, kcal: 380, carbo: 44, protein: 5, fat: 20, sodium: 260 },
  { id: "SPA_006", name: "하몽샐러드", cuisine: "SPANISH", gram: 220, kcal: 300, carbo: 10, protein: 18, fat: 18, sodium: 520 },
];

// ============================================================
// 6. 야식 (LATE_NIGHT)
// ============================================================
/** @type {FoodItem[]} */
export const LATE_NIGHT_FOOD_DATA = [
  { id: "LAT_001", name: "떡볶이", cuisine: "LATE_NIGHT", gram: 250, kcal: 520, carbo: 90, protein: 9, fat: 11, sodium: 1450 },
  { id: "LAT_002", name: "치즈떡볶이", cuisine: "LATE_NIGHT", gram: 270, kcal: 580, carbo: 92, protein: 13, fat: 16, sodium: 1500 },
  { id: "LAT_003", name: "라볶이", cuisine: "LATE_NIGHT", gram: 300, kcal: 650, carbo: 98, protein: 13, fat: 19, sodium: 1600 },
  { id: "LAT_004", name: "순대", cuisine: "LATE_NIGHT", gram: 200, kcal: 350, carbo: 40, protein: 13, fat: 14, sodium: 980 },
  { id: "LAT_005", name: "튀김모둠", cuisine: "LATE_NIGHT", gram: 180, kcal: 520, carbo: 42, protein: 9, fat: 33, sodium: 720 },
  { id: "LAT_006", name: "오뎅", cuisine: "LATE_NIGHT", gram: 120, kcal: 130, carbo: 13, protein: 9, fat: 4, sodium: 620 },
  { id: "LAT_007", name: "찐만두", cuisine: "LATE_NIGHT", gram: 140, kcal: 260, carbo: 30, protein: 9, fat: 10, sodium: 520 },
  { id: "LAT_008", name: "군만두", cuisine: "LATE_NIGHT", gram: 140, kcal: 320, carbo: 31, protein: 10, fat: 16, sodium: 540 },
  { id: "LAT_009", name: "버팔로윙", cuisine: "LATE_NIGHT", gram: 180, kcal: 380, carbo: 10, protein: 27, fat: 26, sodium: 620 },
  { id: "LAT_010", name: "갈릭파마산윙", cuisine: "LATE_NIGHT", gram: 180, kcal: 420, carbo: 12, protein: 26, fat: 30, sodium: 650 },
];

// ============================================================
// 7. 간식 (SNACK)
// ============================================================
/** @type {FoodItem[]} */
export const SNACK_FOOD_DATA = [
  { id: "SNK_001", name: "붕어빵", cuisine: "SNACK", gram: 80, kcal: 190, carbo: 32, protein: 5, fat: 3, sodium: 120 },
  { id: "SNK_002", name: "호빵", cuisine: "SNACK", gram: 120, kcal: 250, carbo: 45, protein: 7, fat: 3, sodium: 260 },
  { id: "SNK_003", name: "계란빵", cuisine: "SNACK", gram: 90, kcal: 210, carbo: 20, protein: 7, fat: 9, sodium: 180 },
  { id: "SNK_004", name: "쿠키", cuisine: "SNACK", gram: 30, kcal: 140, carbo: 18, protein: 2, fat: 7, sodium: 90 },
  { id: "SNK_005", name: "머핀", cuisine: "SNACK", gram: 80, kcal: 260, carbo: 32, protein: 4, fat: 11, sodium: 210 },
  { id: "SNK_006", name: "아이스크림", cuisine: "SNACK", gram: 80, kcal: 180, carbo: 22, protein: 3, fat: 9, sodium: 75 },
  { id: "SNK_007", name: "초코케이크", cuisine: "SNACK", gram: 90, kcal: 320, carbo: 34, protein: 4, fat: 18, sodium: 180 },
  { id: "SNK_008", name: "치즈케이크", cuisine: "SNACK", gram: 90, kcal: 310, carbo: 24, protein: 5, fat: 21, sodium: 190 },
  { id: "SNK_009", name: "요거트", cuisine: "SNACK", gram: 100, kcal: 90, carbo: 15, protein: 4, fat: 2.5, sodium: 60 },
  { id: "SNK_010", name: "그릭요거트", cuisine: "SNACK", gram: 100, kcal: 110, carbo: 8, protein: 9, fat: 4, sodium: 55 },
  { id: "SNK_011", name: "과일샐러드", cuisine: "SNACK", gram: 180, kcal: 150, carbo: 34, protein: 2, fat: 1, sodium: 10 },
  { id: "SNK_012", name: "감자샐러드", cuisine: "SNACK", gram: 100, kcal: 160, carbo: 20, protein: 3, fat: 8, sodium: 280 },
];

// ============================================================
// 전체 음식 데이터 통합
// ============================================================
/** @type {FoodItem[]} */
export const ALL_FOOD_DATA = [
  ...KOREAN_FOOD_DATA,
  ...CHINESE_FOOD_DATA,
  ...JAPANESE_FOOD_DATA,
  ...WESTERN_FOOD_DATA,
  ...SPANISH_FOOD_DATA,
  ...LATE_NIGHT_FOOD_DATA,
  ...SNACK_FOOD_DATA,
];

// ============================================================
// 검색 함수
// ============================================================

/**
 * 음식 이름으로 검색
 * @param {string} keyword - 검색 키워드
 * @returns {FoodItem[]} - 검색 결과
 */
export const searchLocalFoods = (keyword) => {
  if (!keyword || !keyword.trim()) {
    return [];
  }

  const searchTerm = keyword.trim().toLowerCase();

  return ALL_FOOD_DATA.filter(food =>
    food.name.toLowerCase().includes(searchTerm)
  );
};

/**
 * 카테고리별로 음식 필터링
 * @param {string} cuisine - 음식 카테고리
 * @returns {FoodItem[]} - 해당 카테고리의 음식 목록
 */
export const getFoodsByCuisine = (cuisine) => {
  if (!cuisine) {
    return ALL_FOOD_DATA;
  }

  return ALL_FOOD_DATA.filter(food => food.cuisine === cuisine);
};

/**
 * 음식 ID로 검색
 * @param {string} id - 음식 ID
 * @returns {FoodItem|undefined} - 해당 음식 정보
 */
export const getFoodById = (id) => {
  return ALL_FOOD_DATA.find(food => food.id === id);
};

// ============================================================
// 카테고리 정보
// ============================================================
export const CUISINE_TYPES = {
  KOREAN: '한식',
  CHINESE: '중식',
  JAPANESE: '일식',
  WESTERN: '양식',
  SPANISH: '스페인식',
  LATE_NIGHT: '야식',
  SNACK: '간식',
};

/**
 * 카테고리 목록 가져오기
 * @returns {Array<{key: string, label: string, count: number}>}
 */
export const getCuisineCategories = () => {
  return Object.entries(CUISINE_TYPES).map(([key, label]) => ({
    key,
    label,
    count: getFoodsByCuisine(key).length
  }));
};
