import { useEffect, useRef, useState } from 'react'

/**
 * هوک ساده برای تشخیص ورود یک المان به دید کاربر (برای انیمیشن fade-up هنگام اسکرول).
 * از IntersectionObserver استفاده می‌کند و نیازی به کتابخانه انیمیشن جداگانه ندارد.
 */
export default function useInView({ threshold = 0.16, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // اگر کاربر انیمیشن کاهش‌یافته را ترجیح می‌دهد، مستقیم نمایش بده
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, isVisible]
}
