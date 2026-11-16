# 第十週作業：證券商業務員考點導航

以 LLM Wiki 串聯考古題與公開教材，協助學習者由題目找到應補讀的觀念。先與 AI 討論需求及免費資料，再取得來源、整理 Wiki、核對答案並生成教學 HTML 簡報。

- [開啟考點 Wiki](https://hitchhikerbwy.github.io/finance-exam-wiki/index.html#wiki)
- [開啟教學 HTML 簡報](https://hitchhikerbwy.github.io/finance-exam-wiki/slides.html)
- [Wiki 原始筆記](wiki.md)
- [13 份資料來源與摘要](sources.md)
- [24 題逐題教材對應表](mapping.csv)
- [流程與反思](workflow.md)
- [實際檢查紀錄](verification.md)
- [可直接複製的作業文字](submission.txt)

## 作業要求對應

| 要求 | 成果 |
|---|---|
| 先討論、後生成 | 先確認備考用途與免費資料範圍，再建立 Wiki |
| 至少 ingest 5 篇資料 | 實際取得13份文件，含9篇教材；151個來源文字區塊 |
| LLM Wiki | 9個考點、28個教材重點、24題考古題連結 |
| 教學 HTML 簡報 | 13頁，可切換頁面，內容連回 Wiki 與來源 |
| Loop／graph | 來源檢查、按科目核對答案、重算、生成及回頭修正 |
| 實際執行與反思 | 檢查紀錄、113項資料與算式核對、配對風險與提前檢查說明 |

## 結構與使用

根目錄的 `index.html` 是 Wiki 網站，`slides.html` 是教學簡報，`wiki.md` 是完整 Wiki 筆記，`sources.md` 是13份來源摘要。GitHub Pages 從 main 分支根目錄發布。

直接開啟 index.html 與 slides.html 也能離線瀏覽主要內容。搜尋是本機文字篩選；這是由 LLM 整理完成的靜態 Wiki，沒有即時模型問答。第三方全文與 PDF 僅留在本機，不重新發布。

## 範圍與授權

本作業是證券商業務員的部分考點示範，未涵蓋完整考綱；尚未測量學習時間或成績改善。原題以題意摘要呈現，完整原題及答案連到證基會；解析為 AI 依教材及計算整理，不是官方詳解。

OpenStax 教材摘要改寫自 Julie Dahlquist、Rainford Knight 等，*Principles of Finance*（初版），© Rice University，[原書](https://openstax.org/books/principles-finance/pages/1-why-it-matters)與對應摘要採 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)。中文摘要重新組織，例題計算由本作業整理。證基會與證交所資料保留原發布單位權利。
