import FadeInEffect from "@/components/FadeInEffect";
import WhyUsSection from "@/components/WhyUsSection";
import React from "react";
import p3 from "../../../public/static/picture/p3.jpg";
import p4 from "../../../public/static/picture/p4.png";
import p14 from "../../../public/static/picture/p14.jpg";
import p6 from "../../../public/static/picture/p6.jpg";
import p8 from "../../../public/static/picture/p8.jpg";
import p9 from "../../../public/static/picture/p9.jpg";
import p10 from "../../../public/static/picture/p10.jpg";
import p11 from "../../../public/static/picture/p11.jpg";
import p12 from "../../../public/static/picture/p12.jpg";
import p13 from "../../../public/static/picture/p13.jpg";
import p2 from "../../../public/static/picture/p2.jpg";
import WenZhiDa from "../../../public/static/picture/wenzhida.jpg";
import Image from "next/image";
import hezhao from "../../../public/static/picture/hezhao.png";

const eastMembers = [
  {
    id: 1,
    image: p11,
    name: "许工",
    role: "高级产品经理",
    desc: "聚焦工业场景机器视觉与多模态大模型部署微调。曾获多项国家级创新奖项，擅长深度学习应用搭建及系统集成，能够快速精准满足各类客户需求。",
  },
  {
    id: 2,
    image: p14,
    name: "朱工",
    role: "算法工程师",
    desc: "深耕计算机视觉，专注工业AI视觉与行为识别。具备全流程工程能力，主导多项标杆项目并获国家级AI奖项，拥有多项专利与软著。",
  },
  {
    id: 3,
    image: p6,
    name: "常工",
    role: "算法工程师",
    desc: "拥有视觉领域发明专利，作为主导参与岸基雷视融合与自动驾驶等多项重大项目。擅长目标检测、行为分析、图像分割、3D点云及大模型数据生成。",
  },
];

const southMembers = [
  {
    id: 1,
    image: p9,
    name: "刘工",
    role: "高级算法工程师",
    desc: "华南理工大学背景，专注计算机视觉与大语言模型研究。拥有自动驾驶检测、无人机巡检算法落地经验，擅长图像生成、行为分析与无监督学习。",
  },
  {
    id: 2,
    image: p8,
    name: "漆工",
    role: "高级算法工程师",
    desc: "阿卜杜拉国王科技大学博士，担任CVPR/ICCV等国际顶会审稿人。专注计算摄影与智能体应用，所研发的核心算法曾成功部署于华为Mate系列手机。",
  },
  {
    id: 3,
    image: p10,
    name: "江工",
    role: "人工智能专业高级顾问",
    desc: "华南师范大学博士，拥有17项发明专利与多篇SCI论文。专注底层驱动、内核及嵌入式开发，在AI机器视觉及传感器融合架构领域拥有深厚研发造诣。",
  },
];

const empowerMembers = [
  {
    id: -1,
    image: p13,
    name: "柯工", // TODO: Replace with actual name if known, as no name was provided in the prompt
    role: "算法工程师",
    desc: [
      "熟练掌握 Python、PyTorch/TensorFlow 等框架，精通模型轻量化、推理加速及多平台部署。",
      "斩获国省级奖项 8 项，持有 1 项专利、2 项软著。可独立完成算法研发、工程实现与项目交付全流程工作。",
    ],
  },
  {
    id: 0,
    image: p12,
    name: "肖工",
    role: "算法工程师",
    desc: [
      "专注机器视觉与深度学习，精通YOLO系列、Python及模型部署，具备工信部实习经验，",
      "主导多项工业视觉项目，拥有国省级奖项、专利与软著，可独立完成全流程开发。",
    ],
  },
  {
    id: 1,
    image: p4,
    name: "艾德南博士（Dr.Adnan）",
    role: "高级AI算法工程师",
    desc: [
      "毕业于南京东南大学信息与通信工程专业，获博士学位。",
      "其研究与技术方向包括计算机视觉、深度学习、智能机器人以及AI感知系统。",
      "其研究经历涵盖微表情识别、基于IntelRealSense三维相机的手势识别，以及医学人脸图像分析。",
      "在项目方面，他长期从事自主机器人深度学习感知系统的研发工作，包括目标检测、语义分割、行人检测与重识别（ReID），以及复杂环境下的实时动态障碍物感知。",
      "他在多种先进深度学习架构方面具有丰富经验，包括定制化的YOLO多头感知模型（YOLOv8/YOLOv11/YOLOv13）、基于视觉Transformer的模型（如ViT、SwinTransformer），以及卷积神经网络（如ResNet、EfficientNet）。",
      "同时，他擅长多任务感知系统设计及边缘端AI模型优化与部署，能够在资源受限的平台上实现高精度、低延迟的实时推理。",
    ],
  },
  {
    id: 1,
    image: p3,
    name: "秦工",
    role: "天军科技AI联合创始人-高级工程师",
    desc: [
      "在视觉检测+AI行为分析防错领域，累计服务工业产线客户有500+，AI项目落地经验丰富",
      "擅长洞察、理解客户需求，能够快速帮助客户梳理问题并输出技术解决方案",
      "负责客户项目全周期管控，保障项目交付客户100%满意度",
    ],
  },
];

const universityImages = [p2, WenZhiDa];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeInEffect>
          <div className="mb-16">
            <h1 className="text-4xl font-bold mb-8 text-center">关于我们</h1>
            <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
              <p>
                <strong className="text-2xl text-slate-800 font-bold">
                  天军机器人（苏州）有限公司
                </strong>
                成立于2021年，是一家植根于苏州工业腹地的人工智能领域高新科技企业。公司以人工智能技术为核心驱动力，当前重点聚焦于AI视觉技术在工业自动化领域的深度赋能。成为全球领先的AI创新引擎。我们相信，AI的发展应当让人类的创造力得到解放，让繁琐的工作自动化，让不可能变得触手可及。天军AI希望与您共同探索智能化的无限可能。
              </p>
              <p>
                我们的核心业务是自主研发的“AI行为分析防错检测系统”。该系统深度融合计算机视觉与深度学习算法，能够实时识别和分析生产线上人员操作、设备运行等复杂场景，实现对装配错误、流程遗漏、行为不规范等质量与安全风险的精准判断和即时预警，极大提升生产良率与智能化管理水平。
              </p>
              <p>
                基于坚实的研发能力，我们的服务覆盖从人工智能软件开发、系统集成到工业机器人销售与技术服务全链条。公司致力于将前沿的科研成果转化为切实的工业生产力，旨在成为制造业企业迈向智能化升级过程中最值得信赖的合作伙伴，共同开创精准、高效、安全的工业未来。
              </p>
            </div>
          </div>
        </FadeInEffect>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <FadeInEffect delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">我们的愿景</h3>
                <p className="text-2xl font-semibold text-slate-900">
                  中国工业AI全场景落地实践领跑者。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">我们的使命</h3>
                <p className="text-lg text-slate-800">
                  让视觉+AI落地工业生产，赋能全球制造业智能化升级。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">我们的价值观</h3>
                <p className="text-lg text-slate-800 font-medium">
                  诚信靠谱 · 高效执行 · 协作友善
                </p>
                <p className="text-sm text-slate-600 mt-2">
                  以客户为中心，以奋斗者为本，坚持长期主义。
                </p>
              </div>
            </div>
          </FadeInEffect>

          <FadeInEffect delay={0.4}>
            <div className="bg-slate-200 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-geekBlue/20 to-cyanGlow/20 opacity-50 z-10 transition-opacity group-hover:opacity-100 pointer-events-none"></div>
              <Image
                src={hezhao}
                alt="我们的愿景"
                fill
                className="object-cover"
              />
            </div>
          </FadeInEffect>
        </div>

        {/* 为什么选择我们？模块 */}
        <WhyUsSection
          eastMembers={eastMembers}
          southMembers={southMembers}
          empowerMembers={empowerMembers}
          universityImages={universityImages}
        />
      </div>
    </main>
  );
}
