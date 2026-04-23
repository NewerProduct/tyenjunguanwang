import { Cpu, LayoutDashboard, BrainCircuit } from 'lucide-react';

export const productsData = [
  {
    id: "hardware",
    title: "智能可视化软件体系",
    description: "专为工业场景打造的强交互数据驾驶舱。系统全面集成设备智控中心与视觉 AI 行为引导模块，融合实时视频抽帧监测与作业流可视化分析。凭借高维图表与全景设备状态监控看板，助力管理者全局掌握设备产能、稼动率及实时工况，实现从底层数据驱动到上层业务决策的无缝跨越。",
    icon: <LayoutDashboard className="w-6 h-6 text-geekBlue" />,
    stats: ["一站式智能数据看板", "多维设备状态实时监控", "视频溯源与行为可视化分析"]
  },
  {
    id: "software",
    title: "专业级硬件架构阵列",
    description: "打造实时监控与高效协同的工业级边缘计算架构。以高能效 AI 算力机为中枢，通过高速网络实时采集工作台前端相机设备的高清数据。设备集成多形态通讯网关，不仅支持 HDMI 直连可视化展示屏幕，更能通过控制信号线联动三色灯进行精准的工况预警，同时核心数据无缝打通至底层平台服务器，构建起从边缘侧实时干预到中心服务器统筹的端边协同体系。",
    icon: <Cpu className="w-6 h-6 text-cyan-600" />,
    stats: ["AI 算力机边缘实时推断", "视光多模态工业外设联动", "端边云平台无缝协同"]
  },
  {
    id: "solution",
    title: "核心底层算法引擎",
    description: "构建严密的工业全监督迭代闭环。从多源原始数据预处理、数据集高效切分，到深度模型与超参的多维训练及自动化统计评估（过程与准确率双重验证），最终实现稳定高效的模型封装与执行，驱动生产线识别率持续进化与鲁棒性提升。",
    icon: <BrainCircuit className="w-6 h-6 text-indigo-500" />,
    stats: ["动态数据预处理流", "多维训练过程评估验证", "全自动模型迭代与封装"]
  }
];
