const Mock = require('mockjs')
const Random = Mock.Random

Mock.mock('./topics', 'get', {
    // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
    'topics|10': [{
        'tab|1': [
            'JavaScript',
            'network',
            'interview',
            'frame',
            'computer',
            'life'
        ],
        'pv': '@natural(1000, 10000)',
        'commentCount': '@natural(10, 20)',
        //属性 id 是随机id
        'id': '@id',
        //属性 title 是一个随机长度的标题
        'title': '@ctitle()',
        //属性 paragraph 是一个随机长度的段落
        'summary': '@cparagraph',
        //属性 date 是一个yyyy-MM-dd 的随机日期
        'date': '@datetime',
    }]
})