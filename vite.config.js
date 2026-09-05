import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// راهنما:
// - اگر سایت را با دامنه اختصاصی (zelvoagency.ir) منتشر می‌کنید، base باید '/' بماند.
// - اگر بدون دامنه اختصاصی و از مسیر یک ریپازیتوری پروژه (مثلا username.github.io/zelvo-agency)
//   منتشر می‌کنید، مقدار base را به '/zelvo-agency/' تغییر دهید (نام ریپازیتوری خودتان).
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
