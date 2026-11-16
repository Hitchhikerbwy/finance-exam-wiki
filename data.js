window.WIKI_DATA = {
  "title": "考點導航",
  "date": "2026-11-16",
  "scope": "證券商業務員資格測驗｜部分考點示範",
  "topics": [
    {
      "id": "K01",
      "title": "交易時段與委託",
      "subtitle": "先辨交易類型，再看時間與價格限制。",
      "source": "S05",
      "points": [
        {
          "id": "K01.1",
          "title": "一般交易與盤後零股",
          "text": "一般交易撮合為 9:00–13:30；盤後零股申報為 13:40–14:30，於 14:30 撮合。委託時間與成交時間需分開記。",
          "locator": "壹、一般交易／柒、盤後零股交易／拾貳、交易方式彙總"
        },
        {
          "id": "K01.2",
          "title": "逐筆與集合競價",
          "text": "一般交易盤中採逐筆交易，開盤與收盤採集合競價。題目問「盤中」時，不要把開收盤規則一起套用。",
          "locator": "壹、一般交易：競價方式"
        },
        {
          "id": "K01.3",
          "title": "限價買賣的方向",
          "text": "限價買進可接受限價以下的成交價；限價賣出可接受限價以上。市價委託則未指定價格。",
          "locator": "壹、一般交易：買賣申報、限價及市價"
        }
      ],
      "formula": "限價買進：成交價 ≤ 限價；限價賣出：成交價 ≥ 限價",
      "pitfall": "「限價」不是保證成交；不要把盤後定價和盤後零股的申報時段混為一談。",
      "example": "自己出題：限價 50 元賣出，51 元符合價格條件；49 元不符合。是否實際成交仍取決於撮合。"
    },
    {
      "id": "K02",
      "title": "除權息與股數變化",
      "subtitle": "配股先改變股數，再算每股參考價。",
      "source": "S06",
      "points": [
        {
          "id": "K02.1",
          "title": "只配股票的理論價格",
          "text": "無現金股利、無現金增資時，參考價為原價除以「1＋無償配股率」。配股 60% 時，新股數是原本的 1.6 倍。",
          "locator": "PDF 第1頁：貳、二、減除股利參考價"
        },
        {
          "id": "K02.2",
          "title": "現金股利先扣除",
          "text": "只有現金股利時，除息參考價是前一交易日收盤價減每股現金股利；同時無償配股時，再除以 1＋配股率。",
          "locator": "PDF 第1頁：貳、一至三"
        },
        {
          "id": "K02.3",
          "title": "參考價與成交價",
          "text": "公式是在權利調整下計算參考基準，實際成交價仍由市場決定；不能把配股當成憑空增加相同比例的財富。",
          "locator": "PDF 第1頁：貳、股利與除權、除息參考價計算"
        }
      ],
      "formula": "無增資時：參考價＝（原價－現金股利）÷（1＋配股率）",
      "pitfall": "股價變為原本的 62.5%，和股價下跌 62.5% 是不同意思。",
      "example": "原題重算：配股 60%，理論價格比例＝1 ÷ 1.6＝62.5%，即約 6.25 成。"
    },
    {
      "id": "K03",
      "title": "槓桿 ETF 的單日目標",
      "subtitle": "先看「單日」，再乘槓桿倍數。",
      "source": "S07",
      "points": [
        {
          "id": "K03.1",
          "title": "單日追蹤目標",
          "text": "正向兩倍 ETF 以追蹤標的指數單日報酬的兩倍為目標。忽略費用與追蹤誤差，指數單日漲 2%，理論目標為漲 4%。",
          "locator": "商品介紹：每日追蹤標的指數報酬正向倍數"
        },
        {
          "id": "K03.2",
          "title": "多日需逐日複利",
          "text": "倍數目標的期間是單日，多日累積報酬不能直接套用「指數期間報酬 × 2」。",
          "locator": "商品介紹：倍數報酬率僅限於單日、每日複利計算"
        },
        {
          "id": "K03.3",
          "title": "追蹤目標不是保證",
          "text": "動態調整部位與交易費用可能造成追蹤誤差；理論題的倍數計算不代表實際報酬保證。",
          "locator": "商品介紹：追蹤誤差、動態調整及交易費用"
        }
      ],
      "formula": "單日理論目標報酬 ≈ 槓桿倍數 × 標的單日報酬",
      "pitfall": "兩倍是單日追蹤目標，並不保證持有一個月也剛好是指數的兩倍。",
      "example": "自編例：指數先漲 10% 再跌 10%，兩日為 −1%；理想兩倍 ETF 先漲 20% 再跌 20%，兩日為 −4%。"
    },
    {
      "id": "K04",
      "title": "系統風險與分散投資",
      "subtitle": "分清市場共同風險與公司特有風險。",
      "source": "S08",
      "points": [
        {
          "id": "K04.1",
          "title": "非系統風險",
          "text": "公司特有事件造成的風險，可透過持有不同公司的資產降低。考題的個別公司違約風險，歸入這一類。",
          "locator": "15.2：Diversification／Firm-Specific Risk"
        },
        {
          "id": "K04.2",
          "title": "系統風險",
          "text": "整體市場共同承受的風險，不會只靠增加持股檔數就消除。考題中的石油危機或大型貿易衝突屬於市場風險情境。",
          "locator": "15.2：Systematic Risk"
        },
        {
          "id": "K04.3",
          "title": "分散效果的界線",
          "text": "分散投資可降低公司特有風險，不能推論所有風險都會消失，也不能保證報酬。",
          "locator": "15.2：Diversification／Systematic Risk"
        }
      ],
      "formula": "總風險包含：系統風險 ＋ 非系統風險",
      "pitfall": "「可分散」指的是公司特有部分；「市場風險」在本考點指系統、不可分散部分。",
      "example": "例：只買一家公司的股票，會暴露於公司特有問題；分散持股仍會受整體市場衝擊。"
    },
    {
      "id": "K05",
      "title": "CAPM 與風險貼水",
      "subtitle": "題目問的是貼水，還是總要求報酬？",
      "source": "S09",
      "points": [
        {
          "id": "K05.1",
          "title": "市場風險貼水",
          "text": "市場預期報酬扣除無風險利率，得到市場風險貼水。先做相減，再乘上個股 beta。",
          "locator": "15.3：Risk Premium"
        },
        {
          "id": "K05.2",
          "title": "個股貼水與要求報酬",
          "text": "個股風險貼水＝beta × 市場風險貼水；要求報酬率則還要再加無風險利率。題目以定存利率作無風險代理時，按題設計算。",
          "locator": "15.3：Beta／The CAPM"
        },
        {
          "id": "K05.3",
          "title": "無風險資產的 beta",
          "text": "CAPM 理論中的無風險資產，beta 為 0。Beta 衡量與市場共同變動的系統風險，不等於總波動率。",
          "locator": "15.3：Interpreting Beta／The CAPM"
        }
      ],
      "formula": "風險貼水＝β × [E(Rm) − Rf]；E(Ri)＝Rf ＋ 風險貼水",
      "pitfall": "不要把 12% 的風險貼水誤寫成 14% 的要求報酬率。",
      "example": "原題重算：β＝1.5、Rm＝10%、Rf＝2%。市場貼水 8%，個股貼水 12%，要求報酬率 14%。"
    },
    {
      "id": "K06",
      "title": "固定成長股利折現",
      "subtitle": "先把今年股利換成下一期股利。",
      "source": "S13",
      "points": [
        {
          "id": "K06.1",
          "title": "分子使用 D1",
          "text": "D0 是剛發放的股利；D1＝D0 × (1＋g)。固定成長模型的分子使用下一期股利。",
          "locator": "11.2：The Gordon Growth Model／Constant Growth Dividend Discount Model"
        },
        {
          "id": "K06.2",
          "title": "估值公式與條件",
          "text": "P0＝D1 ÷ (r−g)，需 r＞g，並假設股利可持續固定成長。輸入利率時要統一用小數。",
          "locator": "11.2：Constant Growth Dividend Discount Model"
        },
        {
          "id": "K06.3",
          "title": "模型假設的限制",
          "text": "成長率與要求報酬的小幅變化就可能影響估值；不配息或成長不穩定的公司，不能直接套用固定成長假設。",
          "locator": "11.2：Constant Growth Dividend Discount Model／Advantages and Limitations"
        }
      ],
      "formula": "D1＝D0(1＋g)；P0＝D1 ÷ (r−g)，r＞g",
      "pitfall": "若直接把 D0＝4 放進分子，會得到 100；本題必須先得到 D1＝4.32。",
      "example": "原題重算：D0＝4、g＝8%、r＝12%，P0＝4×1.08÷0.04＝108 元。"
    },
    {
      "id": "K07",
      "title": "流動比率與速動資產",
      "subtitle": "先辨分子，再判斷交易如何改變比率。",
      "source": "S10",
      "points": [
        {
          "id": "K07.1",
          "title": "流動比率",
          "text": "流動比率＝流動資產 ÷ 流動負債。原比率大於 1 時，以長期資金償還短期負債，可提高此比率。",
          "locator": "6.3：Current Ratio；後句為依公式推導"
        },
        {
          "id": "K07.2",
          "title": "酸性測驗就是速動比率",
          "text": "速動比率＝速動資產 ÷ 流動負債。與流動比率相比，排除變現較慢的存貨與預付費用。",
          "locator": "6.3：Quick Ratio"
        },
        {
          "id": "K07.3",
          "title": "由流動比率回推金額",
          "text": "先用流動負債乘流動比率，求流動資產；再依題意扣除存貨與預付費用，得到速動資產。",
          "locator": "6.3：Current Ratio／Quick Ratio；計算順序為本作業推導"
        }
      ],
      "formula": "速動資產＝流動資產－存貨－預付費用（依本題項目）",
      "pitfall": "題目問「速動資產」時要回答金額；問「速動比率」才除以流動負債。",
      "example": "原題重算：180,000×2.5＝450,000；存貨＝150,000；速動資產＝450,000−150,000−50,000＝250,000。"
    },
    {
      "id": "K08",
      "title": "EPS 與本益比",
      "subtitle": "盈餘、股利、淨值分別代表不同資訊。",
      "source": "S11",
      "points": [
        {
          "id": "K08.1",
          "title": "基本每股盈餘",
          "text": "普通股每股盈餘的分母，使用普通股加權平均流通在外股數；分子須考慮普通股可享有的盈餘。",
          "locator": "6.5：Earnings per Share (EPS)"
        },
        {
          "id": "K08.2",
          "title": "本益比",
          "text": "本益比＝每股市價 ÷ 每股盈餘。股利與每股帳面金額不是這個公式的分母。",
          "locator": "6.5：Price/Earnings Ratio"
        },
        {
          "id": "K08.3",
          "title": "解讀低本益比",
          "text": "考卷在其他條件不變的簡化比較中，通常偏好較低本益比；實際解讀仍須考慮成長、風險與盈餘品質。不能由此直接判斷買賣。",
          "locator": "6.5：Price/Earnings Ratio；「通常愈低」另依 S01 投資第19題及 S02 答案"
        },
        {
          "id": "K08.4",
          "title": "EPS 不足以決定價值",
          "text": "兩家公司 EPS 不同，尚不能只憑這個數字比較價值，仍須其他估值資訊；應搭配情境分析。",
          "locator": "6.5：Measuring Performance with Earnings per Share／Price/Earnings Ratio"
        }
      ],
      "formula": "P/E＝每股市價 ÷ EPS",
      "pitfall": "56÷2 是股價除以股利，並非本益比。",
      "example": "原題重算：股價 56、EPS 7，本益比＝8 倍；題目另給股利 2 與帳面金額 46，這次都不用。"
    },
    {
      "id": "K09",
      "title": "ROE 與利潤率",
      "subtitle": "把淨利、營收與權益分開。",
      "source": "S12",
      "points": [
        {
          "id": "K09.1",
          "title": "權益報酬率",
          "text": "ROE＝淨利 ÷ 平均權益。題目已給稅後淨利時，不必再乘一次「1－稅率」。",
          "locator": "6.6：Return on Equity"
        },
        {
          "id": "K09.2",
          "title": "淨利率與營收",
          "text": "淨利率＝淨利 ÷ 營收，因此營收＝淨利 ÷ 淨利率。百分率先轉為小數。",
          "locator": "6.6：Profit Margin"
        },
        {
          "id": "K09.3",
          "title": "毛利率與銷貨成本",
          "text": "毛利率是毛利占營收比率；銷貨成本＝營收 × (1－毛利率)。淨利率和毛利率不能交換使用。",
          "locator": "6.6：Profit Margin；毛利與成本關係依會計恆等式推導"
        }
      ],
      "formula": "ROE＝淨利 ÷ 平均權益；營收＝淨利 ÷ 淨利率",
      "pitfall": "稅率或利息費用可能是干擾資訊；確認題目已給哪一層盈餘。",
      "example": "原題重算：淨利 45 萬、淨利率 15%，營收＝300 萬；毛利率 35%，成本＝300×65%＝195 萬。"
    }
  ],
  "questions": [
    {
      "id": "115-2-法規-27",
      "term": 2,
      "subject": "法規",
      "number": 27,
      "page": 3,
      "topic": "K01",
      "point": "K01.1",
      "summary": "盤後零股申報時段",
      "officialAnswer": "A",
      "explanation": "原題答案 A：13:40–14:30。注意這不是一般交易的委託時段。",
      "examSource": "S01",
      "answerSource": "S02"
    },
    {
      "id": "115-2-法規-36",
      "term": 2,
      "subject": "法規",
      "number": 36,
      "page": 3,
      "topic": "K01",
      "point": "K01.3",
      "summary": "限價買賣方向的錯誤敘述",
      "officialAnswer": "C",
      "explanation": "原題問「何者錯誤」。限價賣出可以在限價以上成交，因此 C 的「不得在限價以上」是錯誤敘述。",
      "examSource": "S01",
      "answerSource": "S02"
    },
    {
      "id": "115-1-法規-33",
      "term": 1,
      "subject": "法規",
      "number": 33,
      "page": 3,
      "topic": "K01",
      "point": "K01.2",
      "summary": "一般交易哪個階段採逐筆交易",
      "officialAnswer": "B",
      "explanation": "原題答案 B：盤中。開盤與收盤採集合競價。",
      "examSource": "S03",
      "answerSource": "S04"
    },
    {
      "id": "115-1-法規-37",
      "term": 1,
      "subject": "法規",
      "number": 37,
      "page": 3,
      "topic": "K01",
      "point": "K01.1",
      "summary": "集中市場外國股票的交易時間",
      "officialAnswer": "A",
      "explanation": "原題答案 A：準用證券集中交易市場時間；教材一般交易時段可作補讀。",
      "examSource": "S03",
      "answerSource": "S04"
    },
    {
      "id": "115-2-投資-03",
      "term": 2,
      "subject": "投資",
      "number": 3,
      "page": 5,
      "topic": "K02",
      "point": "K02.1",
      "summary": "配股 60% 後的理論價格比例",
      "officialAnswer": "B",
      "explanation": "1÷(1＋0.6)＝0.625，因此理論價格為配股前的 62.5%，原題選 B。",
      "examSource": "S01",
      "answerSource": "S02"
    },
    {
      "id": "115-2-投資-17",
      "term": 2,
      "subject": "投資",
      "number": 17,
      "page": 5,
      "topic": "K03",
      "point": "K03.1",
      "summary": "指數單日漲 2%，兩倍槓桿 ETF 的理論漲幅",
      "officialAnswer": "C",
      "explanation": "2×2%＝4%，原題選 C。這是單日理論目標，忽略追蹤誤差。",
      "examSource": "S01",
      "answerSource": "S02"
    },
    {
      "id": "115-2-投資-09",
      "term": 2,
      "subject": "投資",
      "number": 9,
      "page": 5,
      "topic": "K04",
      "point": "K04.1",
      "summary": "辨認非系統風險",
      "officialAnswer": "A",
      "explanation": "原題在列出的選項中以違約風險為非系統風險，選 A；重點是公司特有風險與市場共同風險的區別。",
      "examSource": "S01",
      "answerSource": "S02"
    },
    {
      "id": "115-2-投資-10",
      "term": 2,
      "subject": "投資",
      "number": 10,
      "page": 5,
      "topic": "K04",
      "point": "K04.2",
      "summary": "市場風險的分類",
      "officialAnswer": "C",
      "explanation": "原題選 C：系統、不可分散風險。增加股票檔數不能消除市場共同衝擊。",
      "examSource": "S01",
      "answerSource": "S02"
    },
    {
      "id": "115-2-投資-24",
      "term": 2,
      "subject": "投資",
      "number": 24,
      "page": 6,
      "topic": "K04",
      "point": "K04.3",
      "summary": "非系統風險能否分散",
      "officialAnswer": "C",
      "explanation": "原題選 C：可被分散掉。這不代表投資組合變成沒有任何風險。",
      "examSource": "S01",
      "answerSource": "S02"
    },
    {
      "id": "115-1-投資-07",
      "term": 1,
      "subject": "投資",
      "number": 7,
      "page": 5,
      "topic": "K04",
      "point": "K04.2",
      "summary": "石油危機與貿易衝突的風險分類",
      "officialAnswer": "C",
      "explanation": "原題選 C：市場風險，屬於影響市場整體的風險情境。",
      "examSource": "S03",
      "answerSource": "S04"
    },
    {
      "id": "115-2-投資-13",
      "term": 2,
      "subject": "投資",
      "number": 13,
      "page": 5,
      "topic": "K05",
      "point": "K05.2",
      "summary": "beta 1.5 的個股風險貼水",
      "officialAnswer": "C",
      "explanation": "1.5×(10%−2%)＝12%，原題選 C。若問要求報酬率才再加 2%，得到 14%。",
      "examSource": "S01",
      "answerSource": "S02"
    },
    {
      "id": "115-1-投資-20",
      "term": 1,
      "subject": "投資",
      "number": 20,
      "page": 6,
      "topic": "K05",
      "point": "K05.3",
      "summary": "無風險資產的 beta",
      "officialAnswer": "A",
      "explanation": "CAPM 理論中的無風險資產 beta 為 0，原題選 A。",
      "examSource": "S03",
      "answerSource": "S04"
    },
    {
      "id": "115-1-投資-25",
      "term": 1,
      "subject": "投資",
      "number": 25,
      "page": 6,
      "topic": "K05",
      "point": "K05.2",
      "summary": "CAPM 風險貼水的代入計算",
      "officialAnswer": "C",
      "explanation": "1.5×(10%−2%)＝12%，原題選 C。此題與第2次投資第13題考相同計算。",
      "examSource": "S03",
      "answerSource": "S04"
    },
    {
      "id": "115-2-投資-20",
      "term": 2,
      "subject": "投資",
      "number": 20,
      "page": 6,
      "topic": "K06",
      "point": "K06.1",
      "summary": "D0 與固定成長股利估值",
      "officialAnswer": "C",
      "explanation": "D1＝4×1.08＝4.32；P0＝4.32÷(0.12−0.08)＝108 元，原題選 C。",
      "examSource": "S01",
      "answerSource": "S02"
    },
    {
      "id": "115-2-投資-30",
      "term": 2,
      "subject": "投資",
      "number": 30,
      "page": 6,
      "topic": "K07",
      "point": "K07.1",
      "summary": "流動比率大於 1 時如何提高比率",
      "officialAnswer": "A",
      "explanation": "原題選 A：用發行長期負債所得償還短債。長期資金進入再還短債後，流動資產可不變、流動負債減少。",
      "examSource": "S01",
      "answerSource": "S02"
    },
    {
      "id": "115-1-投資-31",
      "term": 1,
      "subject": "投資",
      "number": 31,
      "page": 6,
      "topic": "K07",
      "point": "K07.2",
      "summary": "酸性測驗比率的分子分母",
      "officialAnswer": "B",
      "explanation": "原題選 B：速動資產÷流動負債。酸性測驗比率就是速動比率。",
      "examSource": "S03",
      "answerSource": "S04"
    },
    {
      "id": "115-1-投資-32",
      "term": 1,
      "subject": "投資",
      "number": 32,
      "page": 7,
      "topic": "K07",
      "point": "K07.3",
      "summary": "由流動比率回推速動資產",
      "officialAnswer": "A",
      "explanation": "流動資產＝180,000×2.5＝450,000。存貨＝150,000；再扣預付 50,000，速動資產＝250,000，原題選 A。",
      "examSource": "S03",
      "answerSource": "S04"
    },
    {
      "id": "115-2-投資-19",
      "term": 2,
      "subject": "投資",
      "number": 19,
      "page": 6,
      "topic": "K08",
      "point": "K08.3",
      "summary": "其他條件不變下的本益比比較",
      "officialAnswer": "A",
      "explanation": "依官方答案原題選 A：通常愈低愈好。這是題設的簡化比較，不能延伸成低本益比必然是好投資。",
      "examSource": "S01",
      "answerSource": "S02"
    },
    {
      "id": "115-2-投資-35",
      "term": 2,
      "subject": "投資",
      "number": 35,
      "page": 7,
      "topic": "K08",
      "point": "K08.1",
      "summary": "哪個比率使用加權平均流通股數",
      "officialAnswer": "C",
      "explanation": "原題選 C：每股盈餘。普通股股數在年中變動時，需要考慮流通時間權重。",
      "examSource": "S01",
      "answerSource": "S02"
    },
    {
      "id": "115-2-投資-49",
      "term": 2,
      "subject": "投資",
      "number": 49,
      "page": 7,
      "topic": "K08",
      "point": "K08.2",
      "summary": "股價 56、EPS 7 的本益比",
      "officialAnswer": "A",
      "explanation": "56÷7＝8 倍，原題選 A。題目中的每股股利與每股帳面金額，不是本益比的分母。",
      "examSource": "S01",
      "answerSource": "S02"
    },
    {
      "id": "115-1-投資-47",
      "term": 1,
      "subject": "投資",
      "number": 47,
      "page": 7,
      "topic": "K08",
      "point": "K08.2",
      "summary": "辨認本益比需要的兩個數字",
      "officialAnswer": "A",
      "explanation": "股價÷EPS＝56÷7＝8 倍，原題選 A。此題與第2次投資第49題考相同計算。",
      "examSource": "S03",
      "answerSource": "S04"
    },
    {
      "id": "115-1-投資-49",
      "term": 1,
      "subject": "投資",
      "number": 49,
      "page": 8,
      "topic": "K08",
      "point": "K08.4",
      "summary": "只比較 EPS 能否判斷兩家公司價值",
      "officialAnswer": "D",
      "explanation": "官方答案為 D：資訊不足。相同產品與資本結構，仍不足以省略成長、風險與估值條件。",
      "examSource": "S03",
      "answerSource": "S04"
    },
    {
      "id": "115-2-投資-44",
      "term": 2,
      "subject": "投資",
      "number": 44,
      "page": 7,
      "topic": "K09",
      "point": "K09.1",
      "summary": "由稅後淨利與平均權益計算 ROE",
      "officialAnswer": "A",
      "explanation": "87,000÷900,000＝9.666…%，約 9.67%，原題選 A。題目已給淨利，稅率與公司債利率不必再使用。",
      "examSource": "S01",
      "answerSource": "S02"
    },
    {
      "id": "115-2-投資-48",
      "term": 2,
      "subject": "投資",
      "number": 48,
      "page": 7,
      "topic": "K09",
      "point": "K09.2",
      "summary": "由淨利率與毛利率求銷貨成本",
      "officialAnswer": "B",
      "explanation": "營收＝45萬÷15%＝300萬；銷貨成本＝300萬×(1−35%)＝195萬，原題選 B。再搭配 K09.3。",
      "examSource": "S01",
      "answerSource": "S02"
    }
  ],
  "quizzes": [
    {
      "topic": "K01",
      "prompt": "【自編練習】限價 80 元買進，哪個成交價符合價格限制？",
      "options": [
        "81 元",
        "80.5 元",
        "79 元",
        "任何價格都可以"
      ],
      "correct": 2,
      "why": "限價買進不接受高於 80 元；79 元符合限制，但仍不保證成交。"
    },
    {
      "topic": "K02",
      "prompt": "【自編練習】只配股 25%，沒有現金股利或增資，理論價格為原價多少？",
      "options": [
        "125%",
        "80%",
        "75%",
        "25%"
      ],
      "correct": 1,
      "why": "1÷1.25＝80%。這是價格比例，不是下跌幅度。"
    },
    {
      "topic": "K03",
      "prompt": "【自編練習】忽略費用與誤差，指數單日跌 3%，正向兩倍 ETF 的目標？",
      "options": [
        "漲 6%",
        "跌 3%",
        "漲 3%",
        "跌 6%"
      ],
      "correct": 3,
      "why": "2×(−3%)＝−6%；倍數目標以單日為準。"
    },
    {
      "topic": "K04",
      "prompt": "【自編練習】分散持有很多家公司股票，主要能降低哪種風險？",
      "options": [
        "所有風險",
        "公司特有風險",
        "所有市場共同風險",
        "保證不會虧損"
      ],
      "correct": 1,
      "why": "分散投資主要降低非系統風險，仍保留系統風險。"
    },
    {
      "topic": "K05",
      "prompt": "【自編練習】β＝1.2、Rm＝9%、Rf＝4%，個股風險貼水是多少？",
      "options": [
        "6%",
        "10%",
        "10.8%",
        "15.6%"
      ],
      "correct": 0,
      "why": "1.2×(9%−4%)＝6%。若題目問要求報酬率，才是 4%＋6%＝10%。"
    },
    {
      "topic": "K06",
      "prompt": "【自編練習】D0＝3、g＝5%、r＝10%，固定成長模型估值？",
      "options": [
        "30 元",
        "60 元",
        "63 元",
        "66 元"
      ],
      "correct": 2,
      "why": "D1＝3×1.05＝3.15；3.15÷(0.10−0.05)＝63 元。"
    },
    {
      "topic": "K07",
      "prompt": "【自編練習】流動資產 60 萬、存貨 15 萬、預付 5 萬、流動負債 20 萬，速動比率？",
      "options": [
        "3 倍",
        "2.25 倍",
        "0.5 倍",
        "2 倍"
      ],
      "correct": 3,
      "why": "速動資產＝60−15−5＝40 萬；40÷20＝2 倍。"
    },
    {
      "topic": "K08",
      "prompt": "【自編練習】股價 72 元、EPS 6 元、股利 3 元，本益比？",
      "options": [
        "24 倍",
        "12 倍",
        "6 倍",
        "0.083 倍"
      ],
      "correct": 1,
      "why": "72÷6＝12 倍；股利 3 元是干擾資訊。"
    },
    {
      "topic": "K09",
      "prompt": "【自編練習】稅後淨利 12 萬、平均權益 80 萬，ROE？",
      "options": [
        "15%",
        "6.67%",
        "12%",
        "80%"
      ],
      "correct": 0,
      "why": "12÷80＝15%。稅後淨利不必再扣一次所得稅。"
    }
  ],
  "sources": [
    {
      "id": "S01",
      "title": "115年第2次證券商業務員試題",
      "publisher": "證券暨期貨市場發展基金會",
      "url": "https://examweb.sfi.org.tw/Download/01/02.pdf",
      "kind": "考卷",
      "retrieved_at": "2026-11-16T07:35:10.441870+00:00",
      "sha256": "2e7885f97b4e8844f0afd714373eb26f66b19e7d82b4a1fbae027b812a70ba4c",
      "bytes": 366465,
      "characters": 10645,
      "chunks": 11,
      "cache": "research/exam-latest.pdf",
      "text_cache": "research/exam-latest.txt",
      "license": "公開下載；原文權利屬原發布單位，網站提供題意摘要與原站連結"
    },
    {
      "id": "S02",
      "title": "115年第2次證券商業務員試題解答",
      "publisher": "證券暨期貨市場發展基金會",
      "url": "https://examweb.sfi.org.tw/Download/01/02a.pdf",
      "kind": "官方答案",
      "retrieved_at": "2026-11-16T07:35:10.442693+00:00",
      "sha256": "d945bde99d08dc34d88a87445c2d364b0d41d802acecb9db277c993845a74a19",
      "bytes": 61574,
      "characters": 550,
      "chunks": 1,
      "cache": "research/answers-latest.pdf",
      "text_cache": "research/answers-latest.txt",
      "license": "公開下載；原文權利屬原發布單位，網站提供題意摘要與原站連結"
    },
    {
      "id": "S03",
      "title": "115年第1次證券商業務員試題",
      "publisher": "證券暨期貨市場發展基金會",
      "url": "https://examweb.sfi.org.tw/Download/02/02.pdf",
      "kind": "考卷",
      "retrieved_at": "2026-11-16T07:35:10.443290+00:00",
      "sha256": "96265aa8b4d2342dc898a1e9e6a491fa1a91d31bdc54e8383b3b245dd6fef5b2",
      "bytes": 357579,
      "characters": 10761,
      "chunks": 11,
      "cache": "research/exam-previous.pdf",
      "text_cache": "research/exam-previous.txt",
      "license": "公開下載；原文權利屬原發布單位，網站提供題意摘要與原站連結"
    },
    {
      "id": "S04",
      "title": "115年第1次證券商業務員試題解答",
      "publisher": "證券暨期貨市場發展基金會",
      "url": "https://examweb.sfi.org.tw/Download/02/02a.pdf",
      "kind": "官方答案",
      "retrieved_at": "2026-11-16T07:35:10.443994+00:00",
      "sha256": "77c64648044f3cf8e843cc7d92624177ade76546aff74ff3c2d02c983ce9f8b9",
      "bytes": 61556,
      "characters": 550,
      "chunks": 1,
      "cache": "research/answers-previous.pdf",
      "text_cache": "research/answers-previous.txt",
      "license": "公開下載；原文權利屬原發布單位，網站提供題意摘要與原站連結"
    },
    {
      "id": "S05",
      "title": "集中市場交易制度介紹",
      "publisher": "臺灣證券交易所",
      "url": "https://www.twse.com.tw/zh/products/system/trading.html",
      "kind": "教材",
      "retrieved_at": "2026-11-16T07:35:05.640603+00:00",
      "sha256": "ef810352ccb23727350b67d7cadbaf024e3b47693b3788905f2ff70e0d8222c5",
      "bytes": 152924,
      "characters": 29906,
      "chunks": 30,
      "cache": "research/S05.html",
      "text_cache": "research/S05.txt",
      "license": "公開閱覽；原文權利屬原發布單位，網站提供摘要與原站連結"
    },
    {
      "id": "S06",
      "title": "股票除權除息參考價計算說明",
      "publisher": "臺灣證券交易所",
      "url": "https://investoredu.twse.com.tw/FileSystem/eBook/除權除息手冊.pdf",
      "kind": "教材",
      "retrieved_at": "2026-11-16T07:35:10.441000+00:00",
      "sha256": "3897b833bb802db3beead539cd8547e13b28f394a7a8dfa40dcde75999f1add7",
      "bytes": 358964,
      "characters": 2475,
      "chunks": 3,
      "cache": "research/S06.pdf",
      "text_cache": "research/S06.txt",
      "license": "公開閱覽；原文權利屬原發布單位，網站提供摘要與原站連結"
    },
    {
      "id": "S07",
      "title": "槓桿型及反向型ETF",
      "publisher": "臺灣證券交易所",
      "url": "https://www.twse.com.tw/zh/products/securities/etf/products/li.html",
      "kind": "教材",
      "retrieved_at": "2026-11-16T07:35:05.564965+00:00",
      "sha256": "be201206041697facba151e56bd83e06e3aeedb753ad3162a646ac83c7e24cb1",
      "bytes": 12359,
      "characters": 281,
      "chunks": 1,
      "cache": "research/S07.html",
      "text_cache": "research/S07.txt",
      "license": "公開閱覽；原文權利屬原發布單位，網站提供摘要與原站連結"
    },
    {
      "id": "S08",
      "title": "15.2 Risk and Return to Multiple Assets",
      "publisher": "OpenStax",
      "url": "https://openstax.org/books/principles-finance/pages/15-2-risk-and-return-to-multiple-assets",
      "kind": "教材",
      "retrieved_at": "2026-11-16T07:35:05.560279+00:00",
      "sha256": "f52d1fedc2a938967a173e95f5d2dd6abeb0ec82c81b9f9601453a98a634eefb",
      "bytes": 298152,
      "characters": 10298,
      "chunks": 11,
      "cache": "research/S08.html",
      "text_cache": "research/S08.txt",
      "license": "CC BY-NC-SA 4.0（依來源標示；教材摘要同授權）"
    },
    {
      "id": "S09",
      "title": "15.3 The Capital Asset Pricing Model (CAPM)",
      "publisher": "OpenStax",
      "url": "https://openstax.org/books/principles-finance/pages/15-3-the-capital-asset-pricing-model-capm",
      "kind": "教材",
      "retrieved_at": "2026-11-16T07:35:05.640567+00:00",
      "sha256": "690ba9ec06de59f7d9ab03cdc32009e15af865580e35cb7cb9b075a4a5b72491",
      "bytes": 303792,
      "characters": 9803,
      "chunks": 10,
      "cache": "research/S09.html",
      "text_cache": "research/S09.txt",
      "license": "CC BY-NC-SA 4.0（依來源標示；教材摘要同授權）"
    },
    {
      "id": "S10",
      "title": "6.3 Liquidity Ratios",
      "publisher": "OpenStax",
      "url": "https://openstax.org/books/principles-finance/pages/6-3-liquidity-ratios",
      "kind": "教材",
      "retrieved_at": "2026-11-16T07:35:05.716954+00:00",
      "sha256": "e3d5bf04b2a8eecc700b24082015dc4c75cd582763a607d9dc4e98ce9ac759bf",
      "bytes": 292252,
      "characters": 6237,
      "chunks": 7,
      "cache": "research/S10.html",
      "text_cache": "research/S10.txt",
      "license": "CC BY-NC-SA 4.0（依來源標示；教材摘要同授權）"
    },
    {
      "id": "S11",
      "title": "6.5 Market Value Ratios",
      "publisher": "OpenStax",
      "url": "https://openstax.org/books/principles-finance/pages/6-5-market-value-ratios",
      "kind": "教材",
      "retrieved_at": "2026-11-16T07:35:06.057833+00:00",
      "sha256": "916f9005355cbf1442e5475838f90f65a169f562231d20eeea113d8683a683eb",
      "bytes": 314827,
      "characters": 16042,
      "chunks": 17,
      "cache": "research/S11.html",
      "text_cache": "research/S11.txt",
      "license": "CC BY-NC-SA 4.0（依來源標示；教材摘要同授權）"
    },
    {
      "id": "S12",
      "title": "6.6 Profitability Ratios and the DuPont Method",
      "publisher": "OpenStax",
      "url": "https://openstax.org/books/principles-finance/pages/6-6-profitability-ratios-and-the-dupont-method",
      "kind": "教材",
      "retrieved_at": "2026-11-16T07:35:05.792992+00:00",
      "sha256": "d0c902430eeae35f5e42848bf6892af30adf6a4f0934e795d0a1432a2a5bb47f",
      "bytes": 306908,
      "characters": 9539,
      "chunks": 10,
      "cache": "research/S12.html",
      "text_cache": "research/S12.txt",
      "license": "CC BY-NC-SA 4.0（依來源標示；教材摘要同授權）"
    },
    {
      "id": "S13",
      "title": "11.2 Dividend Discount Models (DDMs)",
      "publisher": "OpenStax",
      "url": "https://openstax.org/books/principles-finance/pages/11-2-dividend-discount-models-ddms",
      "kind": "教材",
      "retrieved_at": "2026-11-16T07:35:05.899425+00:00",
      "sha256": "d058723aa8eee42a53570751f96719606caddd614f9b05a5454808c6341e72b3",
      "bytes": 406447,
      "characters": 37583,
      "chunks": 38,
      "cache": "research/S13.html",
      "text_cache": "research/S13.txt",
      "license": "CC BY-NC-SA 4.0（依來源標示；教材摘要同授權）"
    }
  ]
};
