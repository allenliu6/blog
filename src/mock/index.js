const Mock = require('mockjs')

export default () => {
    const data = Mock.mock('./topics', () => (
        Mock.random()
    ))
}