import { useEffect, useState } from 'react'

/**
 * این کامپوننت کلیک‌ها به آدرس t.me را متوقف می‌کند
 * و پیامی برای اطمینان از روشن بودن فیلترشکن به کاربر نشان می‌دهد.
 */
export default function TelegramVpnWrapper() {
  const [pendingUrl, setPendingUrl] = useState(null)

  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a')
      if (link && (link.href.includes('t.me/') || link.href.includes('telegram.me/'))) {
        e.preventDefault()
        setPendingUrl(link.href)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  if (!pendingUrl) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity" dir="rtl">
      <div className="reveal is-visible w-full max-w-sm rounded-2xl border border-border bg-surface p-6 shadow-card">
        <div className="mb-4 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2AABEE]/10 text-[#2AABEE]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </div>
        </div>
        <h3 className="mb-2 text-center text-lg font-bold text-ink">ورود به تلگرام</h3>
        <p className="mb-6 text-center text-[15px] leading-7 text-muted">
          برای ارتباط در تلگرام، لطفاً پیش از ادامه از روشن بودن <strong>فیلترشکن (VPN)</strong> خود اطمینان حاصل کنید.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href={pendingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setPendingUrl(null)}
            className="flex items-center justify-center rounded-xl bg-[#2AABEE] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#229ED9] shadow-[0_0_20px_-5px_rgba(42,171,238,0.4)]"
          >
            روشن است، انتقال به تلگرام
          </a>
          <button
            type="button"
            onClick={() => setPendingUrl(null)}
            className="flex items-center justify-center rounded-xl border border-border bg-transparent px-4 py-3 text-sm font-semibold text-muted transition-colors hover:bg-white/[0.03] hover:text-ink"
          >
            انصراف
          </button>
        </div>
      </div>
    </div>
  )
}
