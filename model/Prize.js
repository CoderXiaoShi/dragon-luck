

class Prize {
  constructor(num, name, content, sum, phoneList) {
    // 抽奖顺序 1
    this.num = num
    // 奖品名称: 一等奖
    this.name = name
    // 奖品内容: iphone15
    this.content = content
    // 数量: 2
    this.sum = sum
    // 内定: phoneNum  phoneNum
    this.phoneList = phoneList
  }
}

module.exports = Prize;
