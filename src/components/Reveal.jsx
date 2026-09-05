import useInView from '../hooks/useInView.js'

/**
 * Reveal فرزندان خود را هنگام ورود به دید، با یک محو-به-بالا (fade-up) نمایش می‌دهد.
 * delay به میلی‌ثانیه برای ایجاد جلوه پلکانی (staggered) بین چند کارت استفاده می‌شود.
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, isVisible] = useInView()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
