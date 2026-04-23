import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";
import { siteConfig } from "@/config/site";
import Header from "@/components/Header";
import Link from 'next/link'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <AntdRegistry>
          <Header />
          {children}
          <footer
            id="about"
            className="py-16 border-t border-slate-200 bg-[#0a0f1c] text-slate-400 text-sm"
          >
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <div className="text-white text-3xl font-bold mb-4 tracking-wider flex items-center gap-2">
                    <Link href="/">
                      <img src="/static/picture/tubiao.svg" alt="TianJun AI Logo" className="h-10 w-auto" />
                    </Link>
                    <span className="text-blue-500">TYENJUN</span> AI
                  </div>
                  <h2 className="text-white text-xl font-bold mb-2 tracking-wide font-['Microsoft_YaHei']">
                    天军机器人（苏州）有限公司
                  </h2>
                  <h3 className="text-slate-400 text-sm mb-8 font-serif">
                    TYENJUN Robotics(Suzhou)Co.,Ltd.
                  </h3>
                  
                  <div className="flex gap-6 mb-8 text-sm font-medium">
                    <span className="text-blue-400">苏州 · 总部</span>
                    <span className="hover:text-slate-300 transition-colors cursor-pointer">西安</span>
                    <span className="hover:text-slate-300 transition-colors cursor-pointer">深圳</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div className="text-[13px] leading-relaxed space-y-1.5">
                      <div className="text-blue-400 font-medium mb-2">苏州 · 总部</div>
                      <div>苏州市太湖新城绿地复客智慧产业园B幢东楼708室</div>
                      <div>技术邮箱：tianjunai@vip.163.com</div>
                      <div>联系电话：13913580046</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:items-end justify-start pt-8">
                  <div className="mb-4 text-sm text-slate-400">关注我们：</div>
                  <div className="flex gap-3">
                    <div className="relative group">
                      <a href="#" className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/80 transition-all duration-300 flex items-center justify-center w-10 h-10 border border-slate-700/50" title="微信">
                        <svg viewBox="0 0 300 300" fill="currentColor" className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors">
                          <path d="M200.803 111.88c-24.213 1.265-45.268 8.605-62.362 25.188-17.271 16.754-25.154 37.284-23 62.734-9.464-1.172-18.084-2.462-26.753-3.192-2.994-.252-6.547.106-9.083 1.537-8.418 4.75-16.487 10.113-26.053 16.093 1.755-7.938 2.891-14.89 4.902-21.575 1.479-4.914.794-7.648-3.733-10.85-29.066-20.521-41.318-51.231-32.149-82.85 8.483-29.25 29.315-46.989 57.621-56.236 38.636-12.62 82.055.253 105.547 30.927 8.485 11.08 13.688 23.516 15.063 38.224zm-111.437-9.852c.223-5.783-4.788-10.993-10.74-11.167-6.094-.179-11.106 4.478-11.284 10.483-.18 6.086 4.475 10.963 10.613 11.119 6.085.154 11.186-4.509 11.411-10.435zm58.141-11.171c-5.974.11-11.022 5.198-10.916 11.004.109 6.018 5.061 10.726 11.204 10.652 6.159-.074 10.83-4.832 10.771-10.977-.05-6.032-4.98-10.79-11.059-10.679z"/>
                          <path d="M255.201 262.83c-7.667-3.414-14.7-8.536-22.188-9.318-7.459-.779-15.3 3.524-23.104 4.322-23.771 2.432-45.067-4.193-62.627-20.432-33.397-30.891-28.625-78.254 10.014-103.568 34.341-22.498 84.704-14.998 108.916 16.219 21.129 27.24 18.646 63.4-7.148 86.284-7.464 6.623-10.149 12.073-5.36 20.804.883 1.612.984 3.653 1.497 5.689zm-87.274-84.499c4.881.005 8.9-3.815 9.085-8.636.195-5.104-3.91-9.385-9.021-9.406-5.061-.023-9.3 4.318-9.123 9.346.166 4.804 4.213 8.69 9.059 8.696zm56.261-18.022c-4.735-.033-8.76 3.844-8.953 8.629-.205 5.117 3.772 9.319 8.836 9.332 4.898.017 8.769-3.688 8.946-8.562.19-5.129-3.789-9.364-8.829-9.399z"/>
                        </svg>
                      </a>
                      <div className="absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10 w-36 h-36 bg-white rounded-xl shadow-2xl p-2 border border-slate-200 overflow-hidden">
                        <img src="/static/contactus/weichatcode.jpg" alt="微信二维码" className="w-full h-full object-cover rounded-lg" />
                      </div>
                    </div>
                    <div className="relative group">
                      <a href="#" className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/80 transition-all duration-300 flex items-center justify-center w-10 h-10 border border-slate-700/50" title="抖音">
                        <svg viewBox="-3.51 -.07 2179.67 2536.92" fill="currentColor" className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors">
                          <path d="m2173.57 597.31c2.59 22 2.2 409.94-.29 426.26-6.61 3.09-14 1.57-21.13 1.46-96.56-1.51-190.85-17.32-282.94-46.11a1016.61 1016.61 0 0 1 -270.46-131.14c-4.93-3.36-10.09-6.37-15.18-9.48-.46-.28-1.24 0-2 0-3.85 1.75-2.73 5.46-2.82 8.52-.22 6.66-.09 13.33-.09 20 0 279.22-.71 558.44.18 837.66 1 310-183 594-467.45 721.69-72.81 32.68-148.9 53.42-228.22 63-395.62 47.68-761.11-208.31-858.84-589-20.73-80.59-27.84-162.49-22.75-245.76 20.41-334.35 256.06-623.48 582-711.63 85.07-23 171.56-30.61 259.33-25.3 13.95.85 27.85 2.66 41.74 4.31 3.16.37 6.17 1.94 8.93 2.86 2.81 18.89 3.83 257 1.85 418.27-.07 5.22-.7 10.44-1.17 17-7.41-1.6-13.8-2.79-20.08-4.39a347.09 347.09 0 0 0 -87-10.84c-158.91.59-301.06 108.48-344.37 261.54-57.53 203.32 70.44 413 278.42 452.66 199 38 373.21-90.37 417.19-265.91a370.25 370.25 0 0 0 11-91v-4l.24-1153.52q.06-259.89.22-519.78c0-7.23.34-14.47.55-22.78 4.51-.7 8.25-1.71 12-1.77 14.66-.2 29.32-.11 44-.11h345.83c7.89 0 15.78.28 23.38.43 4.65 7.06 3 13.92 3.25 20.34 5.23 109.5 35.54 211.31 96.21 302.89 95.34 144 228.54 232 398.26 263.8 28 5.25 56.9 6 85.39 8.85 4.58.47 9.13.67 14.82.98z"/>
                        </svg>
                      </a>
                      <div className="absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10 w-36 h-36 bg-white rounded-xl shadow-2xl p-2 border border-slate-200 overflow-hidden">
                        <img src="/static/contactus/douyincode.jpg" alt="抖音二维码" className="w-full h-full object-cover rounded-lg" />
                      </div>
                    </div>
                    <div className="relative group">
                      <a href="#" className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/80 transition-all duration-300 flex items-center justify-center w-10 h-10 border border-slate-700/50" title="视频号">
                        <img src="/static/contactus/wechatvideo.png" alt="微信视频号" className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                      </a>
                      <div className="absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10 w-36 h-36 bg-white rounded-xl shadow-2xl p-2 border border-slate-200 overflow-hidden">
                        <img src="/static/contactus/wechatvideocode.png" alt="微信视频号二维码" className="w-full h-full object-cover rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-800/50 text-xs">
                <div className="text-slate-500">&copy; {new Date().getFullYear()} TYENJUN Robotics(Suzhou)Co.,Ltd. 版权所有.</div>
                
                <div className="flex gap-6">
                  <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">隐私政策</a>
                  <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">用户协议</a>
                  <a href="/contact" className="text-slate-500 hover:text-blue-400 transition-colors">联系我们</a>
                </div>
              </div>
            </div>
          </footer>
        </AntdRegistry>
      </body>
    </html>
  );
}
