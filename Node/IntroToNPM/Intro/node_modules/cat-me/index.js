var cats = require('./cats.json')
var catNames = Object.keys(cats)

catNames.forEach(function (name) {
  cats[name] = cats[name].join('\n')
})

module.exports = function (cat) {
  cat = cat || catNames[~~(Math.random() * catNames.length)]

  return cats[cat]
}

module.exports.catNames = catNames
