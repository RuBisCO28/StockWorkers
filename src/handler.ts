export async function handleRequest(request: Request): Promise<Response> {
  const requestURL = new URL(request.url)
  const params = requestURL.searchParams.get("country")
  let data = {}
  if (params === "jp") {
    data = {
      "contents": [{"id":1,"japanese":"水産・農林業","english":"Fishery, Agriculture and Forestry"},
                   {"id":2,"japanese":"鉱業","english":"Mining"},
                   {"id":3,"japanese":"建設業","english":"Construction"},
                   {"id":4,"japanese":"食料品","english":"Foods"},
                   {"id":5,"japanese":"繊維製品","english":"Textiles and Apparels"},
                   {"id":6,"japanese":"パルプ・紙","english":"Pulp and Paper"},
                   {"id":7,"japanese":"化学","english":"Chemicals"},
                   {"id":8,"japanese":"医薬品","english":"Pharmaceutical"},
                   {"id":9,"japanese":"石油・石炭製品","english":"Oil and Coal Products"},
                   {"id":10,"japanese":"ゴム製品","english":"Rubber Products"},
                   {"id":11,"japanese":"ガラス・土石製品","english":"Glass and Ceramics Products"},
                   {"id":12,"japanese":"鉄鋼","english":"Iron and Steel"},
                   {"id":13,"japanese":"非鉄金属","english":"Nonferrous Metals"},
                   {"id":14,"japanese":"金属製品","english":"Metal Products"},
                   {"id":15,"japanese":"機械","english":"Machinery"},
                   {"id":16,"japanese":"電気機器","english":"Electric Appliances"},
                   {"id":17,"japanese":"輸送用機器","english":"Transportation Equipment"},
                   {"id":18,"japanese":"精密機器","english":"Precision Instruments"},
                   {"id":19,"japanese":"その他製品","english":"Other Products"},
                   {"id":20,"japanese":"電気・ガス業","english":"Electric Power and Gas"},
                   {"id":21,"japanese":"陸運業","english":"Land Transportation"},
                   {"id":22,"japanese":"海運業","english":"Marine Transportation"},
                   {"id":23,"japanese":"空運業","english":"Air Transportation"},
                   {"id":24,"japanese":"倉庫・運輸関連業","english":"Warehousing and Harbor Transportation"},
                   {"id":25,"japanese":"情報・通信業","english":"Information and Communication"},
                   {"id":26,"japanese":"卸売業","english":"Wholesale Trade"},
                   {"id":27,"japanese":"小売業","english":"Retail Trade"},
                   {"id":28,"japanese":"銀行業","english":"Banks"},
                   {"id":29,"japanese":"証券、商品先物取引業","english":"Securities and Commodities Futures"},
                   {"id":30,"japanese":"保険業","english":"Insurance"},
                   {"id":31,"japanese":"その他金融業","english":"Other Financing Business"},
                   {"id":32,"japanese":"不動産業","english":"Real Estate"},
                   {"id":33,"japanese":"サービス業","english":"Services"}
                 ]
    }
  } else {
      data = {
        "contents": [{"id":34,"japanese":"生活必需品","english":"Consumer Staples"},
                     {"id":35,"japanese":"ヘルスケア","english":"Health Care"},
                     {"id":36,"japanese":"公共事業","english":"Utilities"},
                     {"id":37,"japanese":"情報技術","english":"Information Technology"},
                     {"id":38,"japanese":"資本財","english":"Industrials"},
                     {"id":39,"japanese":"エネルギー","english":"Energy"},
                     {"id":40,"japanese":"通信サービス","english":"Communication Services"},
                     {"id":41,"japanese":"一般消費財","english":"Consumer Discretionary"},
                     {"id":42,"japanese":"金融","english":"Financials"},
                     {"id":43,"japanese":"素材","english":"Materials"},
                     {"id":44,"japanese":"不動産","english":"Real Estate"}
                   ]
      }
  }

 const json = JSON.stringify(data, null, 2);
 return new Response(json, {
   headers: {
     'content-type': 'application/json;charset=UTF-8',
   },
 })
}
