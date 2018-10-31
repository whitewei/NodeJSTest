/*
Node.js，Stream 有四种流类型：
    Readable - 可读操作。
    Writable - 可写操作。
    Duplex - 可读可写操作.
    Transform - 操作被写入数据，然后读出结果。
所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
    data - 当有数据可读时触发。
    end - 没有更多的数据可读时触发。
    error - 在接收和写入过程中发生错误时触发。
    finish - 所有数据已被写入到底层系统时触发。
* */

const fs = require('fs');
const zlib = require("zlib");


var read = fs.createReadStream('input.txt');
//设置第二个参数append
var write = fs.createWriteStream('output.txt', { 'flags': 'a+' });
//管道流读写操作
read.pipe(write);
console.log('执行完毕');
// const writeStream = fs.createWriteStream('output.txt');
// var value = "我是中国人";
// writeStream.write(value, "utf8");
// writeStream.end();
// writeStream.on("finish", function () {
//     console.log("write end");
// });
// writeStream.on("error", function (err) {
//     console.log(err.stack);
// });
//
//
// const readStream = fs.createReadStream("input.txt");
// //压缩文件
// fs.createReadStream('input.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('input.txt.gz'));
//
// //解压缩文件
// fs.createReadStream('input.txt.gz')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('input1.txt'));
// var data = "";
//
// readStream.on("data", function (fileDatas) {
//     data += fileDatas;
// });
// readStream.on("end",function () {
//     console.log(data);
// });
// readStream.on("error",function (err) {
//     console.log(err.stack);
// });
//
//
// readStream.pipe(writeStream);

console.log("end");

