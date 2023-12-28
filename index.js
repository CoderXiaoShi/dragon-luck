/*
在常见的软件开发中，抽奖算法可以分为几类：

1. **概率抽奖算法：**
   - **均匀分布抽奖算法：** 所有奖品的中奖概率相等，每个用户有相同的中奖机会。
   - **自定义概率抽奖算法：** 不同奖项有不同的中奖概率，可以根据实际需求自定义每个奖项的中奖概率。

2. **限定中奖人数算法：**
   - **人数上限算法：** 设置每个奖项的中奖人数上限，确保不会超过预定的中奖人数。
   - **权重分配算法：** 根据不同奖项的权重，进行中奖人数分配，以保持平衡。

3. **中奖历史记录算法：**
   - **避免重复中奖算法：** 记录已中奖用户，确保不会重复中奖。
   - **中奖概率调整算法：** 根据中奖历史记录调整中奖概率，使得未中奖用户有更高的中奖概率。

4. **实时动态调整算法：**
   - **活动实时调整算法：** 根据参与人数、中奖人数等实时数据进行调整，使得抽奖过程更加灵活。

5. **随机化算法：**
   - **随机化排除算法：** 根据一定规则，在一轮抽奖中排除已中奖用户，确保每轮抽奖的公平性。

6. **参与人数调整算法：**
   - **根据参与人数调整中奖概率算法：** 根据参与人数的增加或减少，调整中奖概率，使得抽奖更具吸引力。

这些分类并不是绝对的，实际应用中可能会根据具体情况综合运用多种算法，以达到更好的抽奖体验和公平性。

*/

const userList = [
  { phone: '13120576041', name: '伟刘', probability: 1, },
  { phone: '11493206597', name: '王芳', probability: 0.1, },
  { phone: '11655768713', name: '建国强', probability: 0.1, },
  { phone: '18880724259', name: '强秀英', probability: 2, },
  { phone: '19153727887', name: '强伟', probability: 0.1, },
  { phone: '14301889277', name: '刘秀英', probability: 0.1, },
  { phone: '11374213521', name: '李建国', probability: 3, },
  { phone: '16455567936', name: '刘伟', probability: 0.1, },
]

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


const map = new Map()

for (let i = 0; i < 100; i++) {
  const winner = selectWinner(userList)
  console.log(winner)
  let user = map.get(winner.name)
  if (user === undefined) {
    winner.num = 1
    map.set(winner.name, winner)
  } else {
    winner.num++
    map.set(winner.name, winner)
  }
}

console.log(map)
