"use client";

import TechMatrix from "@/components/TechMatrix";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import FadeInEffect from "@/components/FadeInEffect";

export default function ProductsPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const cameraImages = [
    "/static/products/camera1.jpg",
    "/static/products/camera2.jpg",
    "/static/products/camera3.jpg",
  ];
  const [currentCameraIndex, setCurrentCameraIndex] = useState(0);

  const serverImages = [
    "/static/products/fuwuqi1.jpg",
    "/static/products/fuwuqi2.jpg",
  ];
  const [currentServerIndex, setCurrentServerIndex] = useState(0);

  const ecosystemImages = [
    "/static/products/pangu.jpg",
    "/static/products/bytedance.jpg",
    "/static/products/360.svg",
  ];
  const [currentEcosystemIndex, setCurrentEcosystemIndex] = useState(0);

  useEffect(() => {
    const cameraTimer = setInterval(() => {
      setCurrentCameraIndex((prev) => (prev + 1) % cameraImages.length);
    }, 3000);

    const serverTimer = setInterval(() => {
      setCurrentServerIndex((prev) => (prev + 1) % serverImages.length);
    }, 3000);

    const ecosystemTimer = setInterval(() => {
      setCurrentEcosystemIndex((prev) => (prev + 1) % ecosystemImages.length);
    }, 3000);

    return () => {
      clearInterval(cameraTimer);
      clearInterval(serverTimer);
      clearInterval(ecosystemTimer);
    };
  }, []);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentCameraIndex((prev) => (prev + 1) % cameraImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentCameraIndex(
      (prev) => (prev - 1 + cameraImages.length) % cameraImages.length,
    );
  };

  const nextServerImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentServerIndex((prev) => (prev + 1) % serverImages.length);
  };

  const prevServerImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentServerIndex(
      (prev) => (prev - 1 + serverImages.length) % serverImages.length,
    );
  };

  const nextEcosystemImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentEcosystemIndex((prev) => (prev + 1) % ecosystemImages.length);
  };

  const prevEcosystemImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentEcosystemIndex(
      (prev) => (prev - 1 + ecosystemImages.length) % ecosystemImages.length,
    );
  };

  return (
    <main className="min-h-screen bg-background text-foreground pt-20">
      <FadeInEffect delay={0.2}>
        <TechMatrix hideMoreButton />
      </FadeInEffect>

      {/* 补充内容部分 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeInEffect delay={0.2}>
            {/* 产品集成生态 */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-slate-800 border-b-2 border-geekBlue pb-4 mb-8 inline-block">
                产品集成生态
              </h2>
              <div className="flex flex-col gap-8">
                {/* 1. 专注工业垂类模型智能体 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                  <div>
                    <h3 className="text-2xl font-bold text-geekBlue mb-4">
                      专注工业垂类模型智能体
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      针对工业生产场景，进行深度自研的人工智能模型。全面适配多类型工业产线相机与视觉硬件（例如海康威视、海康机器人等高级工业设备），提供高精度前沿图像采集与分析。
                    </p>
                  </div>
                  <div className="w-full h-64 md:h-72 relative rounded-xl overflow-hidden group shadow-sm hover:shadow-md transition-all border border-slate-200">
                    <Image
                      src={cameraImages[currentCameraIndex]}
                      alt="工业产线相机与视觉硬件"
                      fill
                      className="object-contain p-4 transition-transform duration-500 bg-white"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center justify-center px-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <button
                        onClick={prevImage}
                        className="bg-black/50 hover:bg-black/80 text-white rounded-full p-1 backdrop-blur-sm transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center justify-center px-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <button
                        onClick={nextImage}
                        className="bg-black/50 hover:bg-black/80 text-white rounded-full p-1 backdrop-blur-sm transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                      {cameraImages.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-1.5 h-1.5 rounded-full ${
                            idx === currentCameraIndex
                              ? "bg-geekBlue"
                              : "bg-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. 边缘侧感知产品支持 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                  <div className="order-2 md:order-1 w-full h-64 md:h-72 relative rounded-xl overflow-hidden group-hover:border-blue-200 transition-all border border-slate-200 shadow-sm hover:shadow-md">
                    <Image
                      src={serverImages[currentServerIndex]}
                      alt="边缘侧计算设备与感知"
                      fill
                      className="object-contain p-4 transition-transform duration-500 bg-white"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center justify-center px-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <button
                        onClick={prevServerImage}
                        className="bg-black/50 hover:bg-black/80 text-white rounded-full p-1 backdrop-blur-sm transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center justify-center px-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <button
                        onClick={nextServerImage}
                        className="bg-black/50 hover:bg-black/80 text-white rounded-full p-1 backdrop-blur-sm transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                      {serverImages.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-1.5 h-1.5 rounded-full ${
                            idx === currentServerIndex
                              ? "bg-geekBlue"
                              : "bg-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold text-geekBlue mb-4">
                      边缘侧感知产品支持
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      联合海康威视、Honeywell等全球领先硬件厂商，打造强悍边缘侧感知与算力核心。配备专用AI边缘计算平台及服务器，同步支持移动端“异常监控报警中心”，保证毫秒级响应并全天候守护生产安全。
                    </p>
                  </div>
                </div>

                {/* 3. 大模型赋能与系统互联 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                  <div>
                    <h3 className="text-2xl font-bold text-geekBlue mb-4">
                      人工智能大模型赋能，系统互联
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      行业合作伙伴强力加持，深度联动主流AI大模型（如360大模型、字节跳动模型生态等），不仅实现数据互融互通，更为复杂多变的工业场景提供超越传统的泛化认知与深度决策能力。
                    </p>
                  </div>
                  <div className="w-full h-64 md:h-72 relative rounded-xl overflow-hidden group shadow-sm hover:shadow-md transition-all border border-slate-200">
                    <Image
                      src={ecosystemImages[currentEcosystemIndex]}
                      alt="AI大模型与生态共建"
                      fill
                      className={`object-contain transition-transform duration-500 bg-white ${
                        ecosystemImages[currentEcosystemIndex].endsWith('.svg') ? 'p-16' : 'p-4'
                      }`}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center justify-center px-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <button
                        onClick={prevEcosystemImage}
                        className="bg-black/50 hover:bg-black/80 text-white rounded-full p-1 backdrop-blur-sm transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center justify-center px-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <button
                        onClick={nextEcosystemImage}
                        className="bg-black/50 hover:bg-black/80 text-white rounded-full p-1 backdrop-blur-sm transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                      {ecosystemImages.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-1.5 h-1.5 rounded-full ${
                            idx === currentEcosystemIndex
                              ? "bg-geekBlue"
                              : "bg-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInEffect>

          <FadeInEffect delay={0.2}>
            {/* 软件功能 */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-slate-800 border-b-2 border-geekBlue pb-4 mb-8 inline-block">
                软件核心功能
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* 模块1：工位工作站 */}
                <div className="flex flex-col p-8 bg-blue-50/50 rounded-2xl border border-blue-100 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 shrink-0 bg-white border border-blue-200 text-geekBlue rounded-xl flex items-center justify-center font-bold text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    01
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-4">
                    工位工作站
                  </h4>
                  <ul className="text-slate-600 space-y-3 mb-6 flex-grow">
                    <li className="flex items-start gap-2">
                      <span className="text-geekBlue mt-1">•</span>{" "}
                      现场视频实时采集
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-geekBlue mt-1">•</span>{" "}
                      账号与权限精细管理
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-geekBlue mt-1">•</span>{" "}
                      项目录入与灵活编辑
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-geekBlue mt-1">•</span>{" "}
                      作业智能监控及过程实时提醒
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-geekBlue mt-1">•</span>{" "}
                      本地数据安全存储与查看
                    </li>
                  </ul>
                  <p className="text-sm font-medium text-slate-500 pt-4 border-t border-blue-200/60 leading-relaxed">
                    部署在生产作业前方，实现一线的智能化视觉操作与全方位监控管理。
                  </p>
                </div>

                {/* 模块2：数据大屏 */}
                <div className="flex flex-col p-8 bg-blue-50/50 rounded-2xl border border-blue-100 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 shrink-0 bg-white border border-blue-200 text-geekBlue rounded-xl flex items-center justify-center font-bold text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    02
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-4">
                    数据大屏
                  </h4>
                  <ul className="text-slate-600 space-y-3 mb-6 flex-grow">
                    <li className="flex items-start gap-2">
                      <span className="text-geekBlue mt-1">•</span>{" "}
                      多个工位工作站数据汇聚
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-geekBlue mt-1">•</span>{" "}
                      实时产能与质检数据同步
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-geekBlue mt-1">•</span>{" "}
                      全局生产大屏可视化显示
                    </li>
                  </ul>
                  <p className="text-sm font-medium text-slate-500 pt-4 border-t border-blue-200/60 leading-relaxed">
                    大屏服务器部署于产线，通过无线路由器与各个工作站实时互联，让生产数据一目了然。
                  </p>
                </div>

                {/* 模块3：数据服务器 */}
                <div className="flex flex-col p-8 bg-blue-50/50 rounded-2xl border border-blue-100 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 shrink-0 bg-white border border-blue-200 text-geekBlue rounded-xl flex items-center justify-center font-bold text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    03
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-4">
                    核心数据服务器
                  </h4>
                  <ul className="text-slate-600 space-y-3 mb-6 flex-grow">
                    <li className="flex items-start gap-2">
                      <span className="text-geekBlue mt-1">•</span>{" "}
                      测试结果与NG异常数据集中存储
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-geekBlue mt-1">•</span>{" "}
                      支持多终端Web端在线调取查看
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-geekBlue mt-1">•</span>{" "}
                      具备完善的系统级账号管理体系
                    </li>
                  </ul>
                  <p className="text-sm font-medium text-slate-500 pt-4 border-t border-blue-200/60 leading-relaxed">
                    独立架构于企业机房，经由安全稳定的有线及无线网络多路连接，保障核心数据的溯源与留存。
                  </p>
                </div>
              </div>
            </div>
          </FadeInEffect>
          <FadeInEffect delay={0.2}>
            {/* 应用逻辑 */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 border-b-2 border-geekBlue pb-4 mb-8 inline-block">
                标准应用逻辑
              </h2>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                {/* 图片预留位置 */}
                <div
                  className="w-full h-64 md:h-96 relative rounded-2xl overflow-hidden mb-8 border border-slate-200 bg-white flex items-center justify-center shadow-sm cursor-pointer group hover:shadow-md transition-all"
                  onClick={() =>
                    setSelectedImg("/static/products/applicationlogical.jpg")
                  }
                >
                  <Image
                    src="/static/products/applicationlogical.jpg"
                    alt="标准应用逻辑"
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                      点击查看大图
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    {
                      phase: "数据集 Data Acquisition",
                      title: "获取图像",
                      desc: "在工厂生产线获取SOP作业视频流。",
                    },
                    {
                      phase: "训练版 Developer",
                      title: "训练深度学习模型",
                      desc: "通过获取的图像，进行深度学习模型训练。",
                    },
                    {
                      phase: "训练版 Developer",
                      title: "分析深度学习模型",
                      desc: "分析生成的深度学习模型，优化生成的深度学习模型。",
                    },
                    {
                      phase: "检测版 Runtime",
                      title: "在生产线中实时检测",
                      desc: "根据用户的需求，配合检测设备进行检测和筛选。",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow"
                    >
                      <span className="text-xs font-bold text-geekBlue mb-4 px-3 py-1 bg-blue-50 rounded-full">
                        {item.phase}
                      </span>
                      <h4 className="text-lg font-bold text-slate-800 text-center mb-3">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 text-center leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInEffect>
        </div>
      </section>

      {/* Lightbox / Image Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 cursor-pointer"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative w-full max-w-6xl h-full max-h-[90vh]">
            <Image
              src={selectedImg}
              alt="Large view"
              fill
              className="object-contain"
            />
          </div>
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/20 hover:bg-black/50 p-2 rounded-full transition-all z-[101]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImg(null);
            }}
          >
            <X size={32} />
          </button>
        </div>
      )}
    </main>
  );
}
