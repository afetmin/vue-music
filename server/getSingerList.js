// 生成歌手列表

const axios = require('axios')
const fs = require('fs')
const path = require('path')
const file = path.resolve(__dirname, './singerlist.json')

function getChar() {
  const arr = []
  for (let i = 65; i < 91; i++) {
    arr.push(String.fromCharCode(i))
  }
  return arr
}

async function getSingers() {
  const singersList = []
  const chars = getChar()
  chars.unshift('-1')
  for (let i = 0; i < chars.length; i++) {
    const res = await axios.get(`http://localhost:3000/artist/list?type=1&area=7&initial=${chars[i]}&limit=10`)
    const artists = res.data.artists
    const result = artists.map((item) => {
      return {
        id: item.id,
        picUrl: item.img1v1Url,
        name: item.name
      }
    })
    singersList.push({
      label: chars[i],
      singers: result
    })
  }
  return singersList
}

getSingers().then((data) => {
  fs.writeFile(file, JSON.stringify(data, null, 2), {
    encoding: 'utf8'
  }, () => {})
})
