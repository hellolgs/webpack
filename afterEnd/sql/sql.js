const mysql = require('mysql');
let sql = mysql.createConnection({
    host: '39.97.109.77',
    user: 'root',
    password: 'abcd',
    database: 'bcmanage'
})
//匹配用户名以及密码
exports.search = data => {
    let { username, password } = data;
    let rule = `select * from whitelist where username="${username}" and password="${password}"`;
    return new Promise((resolve, reject) => {
        sql.query(rule, (err, result) => {
            if (err) {
                reject(err)
            }
            if (result.length > 0) {
                resolve(result)
            }
            else {
                resolve(0)
            }
        })
    })
}
exports.readingData = data => {
    let rule = 'SELECT * FROM `class-opening-plan` LIMIT 0, 1000';
    return new Promise((resolve, reject) => {
        sql.query(rule, (err, result) => {
            if (err) {
                reject(err)
            }
            if (result) {
                resolve(result)
            }
            else {
                resolve(0)
            }
        })
    })
}
//写入数据到class-opening-plan
exports.write = data => {
    let { label, batch, startDate, address, status } = data[0];
    let rule = 'insert into `class-opening-plan`(label,batch,startDate,address,status)' + `values("${label}","${batch}","${startDate}","${address}","${status}")`;
    return new Promise((resolve, reject) => {
        sql.query(rule, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}
//删除数据
exports.deletedata = data => {
    let { id } = data
    let rule = 'delete from `class-opening-plan`' + `where id='${id}'`
    return new Promise((resolve, reject) => {
        sql.query(rule, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(true)
            }
        })
    })
}
exports.alter = (data) => {
    let { id, label, batch, startDate, address, status } = data[0];
    let rule = 'update `class-opening-plan`' + `set label='${label}',batch='${batch}',startDate='${startDate}',address='${address}',status='${status}' where id = '${id}'`;
    return new Promise((resolve, reject) => {
        sql.query(rule, (err, result) => {
            if (err) reject(err);
            else resolve(1);
        })
    })
}
exports.readingDataClass = data => {
    let {id} = data
    let rule = 'select * from `class-opening-plan`' + `where id=${id}`;
    return new Promise((resolve, reject) => {
        sql.query(rule, (err, result) => {
            if (err) {
                reject(err)
            }
            if (result) {
                resolve(result)
            }
            else {
                resolve(0)
            }
        })
    })
}