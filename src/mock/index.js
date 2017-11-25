import Mock from 'mockjs'

Mock.mock('./topics', 'get', {
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
        'commentsCount': '@natural(10, 20)',
        'id': '@id',
        'title': '@ctitle()',
        'summary': '@cparagraph',
        'date': '@datetime',
    }]
})

Mock.mock('./article', 'get', {
    'id': '@id',
    'title': '@ctitle()',
    'summary': '@cparagraph',
    'date': '@datetime',
    'lastModify': '@datetime',
    'tab|1': [
        'JavaScript',
        'network',
        'interview',
        'frame',
        'computer',
        'life'
    ],
    'pv': '@natural(1000, 10000)',
    'comments|3-4': [{
        'name': '@cname',
        'avatar': '@image',
        'content': '@csentence',
        'date': '@datetime',
        'reply|4': [{
            'name': '@cname',
            'avatar': '@image',
            'content': '@csentence',
            'date': '@datetime',
        }]
    }],
    'content': '@cparagraph(100, 200)'
})