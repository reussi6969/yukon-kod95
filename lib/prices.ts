// Цены курсов в одном месте. Меняйте здесь — обновится на всём сайте.

export const SHORT_COURSE_PRICE = 799

export const LONG_COURSE = {
  // Обычная цена
  regular: 3500,
  // Цена по акции
  promo: 3300,
  // Акция действует ДО этой даты (не включительно), время польское.
  // После неё сайт сам начнёт показывать обычную цену.
  promoUntil: "2026-12-01T00:00:00+01:00",
  promoLabel: "до 30 ноября",
}

export function isLongCoursePromoActive(now: Date = new Date()) {
  return now < new Date(LONG_COURSE.promoUntil)
}

export function longCoursePrice(now: Date = new Date()) {
  return isLongCoursePromoActive(now) ? LONG_COURSE.promo : LONG_COURSE.regular
}
