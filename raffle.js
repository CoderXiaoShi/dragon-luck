const XLSX = require("xlsx")

;(async () => {

  var workbook = XLSX.readFile('./人员列表.xlsx');
  const data = XLSX.utils.sheet_to_json(workbook.Sheets.Sheet1);
  const prize = XLSX.utils.sheet_to_json(workbook.Sheets.Sheet2);

  console.log(prize)
  /*
  [150,133,189]
    抽奖顺序 1
    奖品名称: 一等奖
    奖品内容: iphone15
    数量: 2
    内定: phoneNum  phoneNum
  
    抽奖顺序 2
    奖品名称: 二等奖
    奖品内容: iphone15
    数量: 2
    内定: phoneNum  phoneNum
  
    抽奖顺序 3
    奖品名称: 一等奖
    奖品内容: iphone15
    数量: 2
    内定: phoneNum  phoneNum
  */

  const userList = data.map(item => {
    let name = item['姓名'];
    let phone = item['电话'];
    let probability = item['__EMPTY'] || item['中奖概率'] || 0.1; // 中奖概率
    return {
      name,
      phone,
      probability
    }
  })
  console.log(userList);

  const selectWinner = (list) => {
    // 1. 计算所有参与者的中奖概率总和
    const totalProbability = list.reduce((sum, user) => {
      sum += user.probability;
      return sum
    },0)
    // 2. 生成随机数
    const randNum = Math.random() * totalProbability;
    console.log(randNum)
    let cumulativeProb = 0;
    // 3. 变量参与者列表
    for (const user of list) {
      cumulativeProb += user.probability
      if (randNum <= cumulativeProb) {
        return user
      }
    }
    // 4. 检查随机数是否落在当前参与者的概率范围内
  }

  const winner = selectWinner(userList)
  console.log(winner);

})();
