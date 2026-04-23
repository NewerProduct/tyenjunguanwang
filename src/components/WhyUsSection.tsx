"use client";

import { useState } from "react";
import FadeInEffect from "@/components/FadeInEffect";
import Image from "next/image";
import { StaticImageData } from "next/image";

type Member = {
  id: number;
  image: StaticImageData | string;
  name: string;
  role: string;
  desc: string | string[];
};

type WhyUsSectionProps = {
  eastMembers: Member[];
  southMembers: Member[];
  empowerMembers?: Member[];
  universityImages?: (StaticImageData | string)[];
};

export default function WhyUsSection({ eastMembers, southMembers, empowerMembers, universityImages }: WhyUsSectionProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeImgIndex, setActiveImgIndex] = useState<number>(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);

  const prevImage = () => {
    if (!universityImages || universityImages.length === 0) return;
    setActiveImgIndex((prev) => (prev === 0 ? universityImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    if (!universityImages || universityImages.length === 0) return;
    setActiveImgIndex((prev) => (prev === universityImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mb-24">
      <FadeInEffect>
        <h2 className="text-4xl font-bold text-center mb-16">为什么选择我们？</h2>
      </FadeInEffect>

      <FadeInEffect delay={0.2}>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row h-[700px]">
          
          {/* 左侧：导航栏（选项卡区域） */}
          <div className="w-full md:w-1/3 bg-slate-50 flex flex-col border-b md:border-b-0 md:border-r border-slate-100 p-6 md:p-10 space-y-4 justify-center">
            
            <div 
              onMouseEnter={() => setActiveTab(0)}
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${activeTab === 0 ? 'bg-white shadow-md border border-slate-100' : 'hover:bg-slate-100'}`}
            >
              <h3 className={`text-2xl font-semibold transition-colors ${activeTab === 0 ? 'text-geekBlue' : 'text-slate-700'}`}>
                算法专家团队
              </h3>
              <p className={`mt-2 text-sm ${activeTab === 0 ? 'text-slate-500' : 'text-slate-400'}`}>
                精英集结，多领域 AI 专家护航
              </p>
            </div>
                        <div 
              onMouseEnter={() => setActiveTab(2)}
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${activeTab === 2 ? 'bg-white shadow-md border border-slate-100' : 'hover:bg-slate-100'}`}
            >
              <h3 className={`text-2xl font-semibold transition-colors ${activeTab === 2 ? 'text-geekBlue' : 'text-slate-700'}`}>
                技术研发团队
              </h3>
              <p className={`mt-2 text-sm ${activeTab === 2 ? 'text-slate-500' : 'text-slate-400'}`}>
                精英成员，深度参与项目落地
              </p>
            </div>

            <div 
              onMouseEnter={() => setActiveTab(1)}
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${activeTab === 1 ? 'bg-white shadow-md border border-slate-100' : 'hover:bg-slate-100'}`}
            >
              <h3 className={`text-2xl font-semibold transition-colors ${activeTab === 1 ? 'text-geekBlue' : 'text-slate-700'}`}>
                科研团队赋能
              </h3>
              <p className={`mt-2 text-sm ${activeTab === 1 ? 'text-slate-500' : 'text-slate-400'}`}>
                校企合作，产学研深度赋能
              </p>
            </div>



          </div>


          {/* 右侧：展示区内容 */}
          <div className="w-full md:w-2/3 p-6 md:p-10 lg:p-12 relative overflow-y-auto">
            
            {/* 内容 1：核心技术团队 */}
            <div className={`transition-opacity duration-500 absolute inset-0 p-6 md:p-10 lg:p-12 overflow-y-auto ${activeTab === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* 华东技术团队 */}
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-medium mb-6 text-center text-slate-800 border-b pb-4">
                    华东技术团队
                  </h3>
                  <div className="grid gap-6 flex-1">
                    {eastMembers.map((member) => (
                      <div
                        key={"east-" + member.id}
                        className="h-full flex flex-col text-center p-6 rounded-xl bg-slate-50 group cursor-default"
                      >
                        <div className="w-20 h-20 mx-auto bg-slate-200 rounded-full mb-4 relative overflow-hidden flex-shrink-0">
                          <Image src={member.image} alt={member.name} fill loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                        </div>
                        <h4 className="text-lg font-medium mb-1">{member.name}</h4>
                        <p className="text-sm text-slate-500 mb-3">{member.role}</p>
                        <div className="text-sm text-slate-600 mt-auto transition-all duration-300 text-justify" title={typeof member.desc === 'string' ? member.desc : member.desc.join("\n")}>
                          {Array.isArray(member.desc) ? (
                            <ul className="list-decimal list-inside space-y-1 text-left">
                              {member.desc.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>{member.desc}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 华南技术团队 */}
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-medium mb-6 text-center text-slate-800 border-b pb-4">
                    华南技术团队
                  </h3>
                  <div className="grid gap-6 flex-1">
                    {southMembers.map((member) => (
                      <div
                        key={"south-" + member.id}
                        className="h-full flex flex-col text-center p-6 rounded-xl bg-slate-50 group cursor-default"
                      >
                        <div className="w-20 h-20 mx-auto bg-slate-200 rounded-full mb-4 relative overflow-hidden flex-shrink-0">
                          <Image src={member.image} alt={member.name} fill loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                        </div>
                        <h4 className="text-lg font-medium mb-1">{member.name}</h4>
                        <p className="text-sm text-slate-500 mb-3">{member.role}</p>
                        <div className="text-sm text-slate-600 mt-auto transition-all duration-300 text-justify" title={typeof member.desc === 'string' ? member.desc : member.desc.join("\n")}>
                          {Array.isArray(member.desc) ? (
                            <ul className="list-decimal list-inside space-y-1 text-left">
                              {member.desc.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>{member.desc}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 内容 2：清华大学/温职大技术团队赋能 */}
            <div className={`transition-opacity duration-500 absolute inset-0 p-6 md:p-10 lg:p-12 overflow-y-auto flex flex-col justify-center ${activeTab === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                <div className="w-full h-full flex flex-col relative group">
                  {universityImages && universityImages.length > 0 ? (
                    <div 
                      className="flex-1 w-full relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer"
                      onClick={() => setIsPreviewOpen(true)}
                    >
                      <Image 
                        src={universityImages[activeImgIndex]} 
                        alt="技术团队赋能" 
                        fill 
                        loading="lazy"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain transition-transform duration-300 group-hover:scale-105" 
                      />
                      
                      {/* 悬停放大提示 */}
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <div className="bg-white/90 text-slate-800 px-4 py-2 rounded-full font-medium shadow-md flex items-center space-x-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                          <span>点击放大</span>
                        </div>
                      </div>

                      {/* 左右切换按钮 */}
                      {universityImages.length > 1 && (
                        <>
                          <button 
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-slate-800 rounded-full flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100 disabled:opacity-50"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-slate-800 rounded-full flex items-center justify-center shadow-md transition-all opacity-0 group-hover:opacity-100 disabled:opacity-50"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                          </button>
                        </>
                      )}

                      {/* 底部指示器 */}
                      {universityImages.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2" onClick={(e) => e.stopPropagation()}>
                          {universityImages.map((_, idx) => (
                            <button 
                              key={idx} 
                              onClick={() => setActiveImgIndex(idx)}
                              className={`w-2 h-2 rounded-full transition-all ${activeImgIndex === idx ? 'bg-geekBlue w-4' : 'bg-slate-300 hover:bg-slate-400'}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex-1 w-full bg-slate-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-300">
                      <span className="text-slate-400 font-medium">暂无图片数据</span>
                    </div>
                  )}
                </div>
            </div>

            {/* 内容 3：核心技术团队赋能 */}
            <div className={`transition-opacity duration-500 absolute inset-0 p-6 md:p-10 lg:p-12 overflow-y-auto ${activeTab === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
              <h3 className="text-2xl font-semibold mb-8 text-center text-slate-800 border-b pb-4">核心技术团队赋能</h3>
              <div className="grid gap-6">
                {(empowerMembers || []).map((member) => (
                  <div
                    key={"empower-" + member.id}
                    className="flex flex-col md:flex-row items-center text-left p-6 rounded-xl bg-slate-50 group cursor-default transition-colors hover:bg-slate-100"
                  >
                    <div className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 md:mr-6 bg-slate-200 rounded-full relative overflow-hidden flex-shrink-0">
                      <Image src={member.image} alt={member.name} fill loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-end mb-2">
                        <h4 className="text-xl font-bold text-slate-800 mr-3">{member.name}</h4>
                        <span className="text-sm font-medium text-geekBlue bg-blue-50 px-2 py-0.5 rounded">{member.role}</span>
                      </div>
                      <div className="text-sm text-slate-600 line-clamp-3 group-hover:line-clamp-none transition-all duration-300 text-justify" title={typeof member.desc === 'string' ? member.desc : member.desc.join("\n")}>
                        {Array.isArray(member.desc) ? (
                          <ul className="list-decimal list-inside space-y-1">
                            {member.desc.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{member.desc}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {(!empowerMembers || empowerMembers.length === 0) && (
                  <div className="text-center text-slate-500 py-10">暂无赋能团队数据</div>
                )}
              </div>
            </div>

          </div>

        </div>
      </FadeInEffect>

      {/* 图片放大预览模态框 */}
      {isPreviewOpen && universityImages && universityImages.length > 0 && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsPreviewOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsPreviewOpen(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          
          <div 
            className="relative w-full max-w-6xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={universityImages[activeImgIndex]} 
              alt="技术团队赋能大图" 
              fill 
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            
            {/* 全屏放大模式下的左右切换按钮 */}
            {universityImages.length > 1 && (
              <>
                <button 
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </>
            )}
          </div>
          
          {/* 全屏放大模式下的底部指示器 */}
          {universityImages.length > 1 && (
            <div 
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3" 
              onClick={(e) => e.stopPropagation()}
            >
              {universityImages.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImgIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${activeImgIndex === idx ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/70'}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
