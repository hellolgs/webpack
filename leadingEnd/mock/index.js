const Mock = require('mockjs');
Mock.mock('/loging','post',true)
Mock.mock('/list','post',{
    a: 1
})