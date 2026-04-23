import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, company, phone, needs } = await req.json();

    // 必填字段校验
    if (!name || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 这里实现Webhook推送逻辑 (DINGTALK_WEBHOOK_URL/WECHAT_WEBHOOK_URL 在.env.local中配置)
    const webhookUrl = process.env.WEBHOOK_URL;
    
    if (webhookUrl) {
      const markdownMsg = {
        msgtype: "markdown",
        markdown: {
          title: "天军AI官网 - 新增获客线索",
          text: `## 天军AI官网 - 新增获客线索\n\n**姓名**: ${name}\n\n**电话**: ${phone}\n\n**公司**: ${company || '未填'}\n\n**需求**: ${needs || '未填'}`
        }
      };

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(markdownMsg)
      });
    }

    // MVP阶段：为了不依赖真实的Webhook环境，此处先直接返回成功
    return NextResponse.json({ success: true, message: "Lead captured" });

  } catch (error) {
    console.error("API /contact error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
