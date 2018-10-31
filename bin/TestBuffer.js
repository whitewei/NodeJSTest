// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);

const buffer = Buffer.alloc(256);
/*
 *
 * string - 写入缓冲区的字符串。
 * offset - 缓冲区开始写入的索引值，默认为 0 。
 * length - 写入的字节数，默认为 buffer.lengthencoding
 * 使用的编码。默认为 'utf8' 。
 * 返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。
* */
// buf.write(string, offset, length, encoding);
const number = buffer.write("www.runoob.com");
console.log("写入字节数 : " + number);


// 创建一个长度为 10、且用 0x1 填充的 Buffer。
const buf2 = Buffer.alloc(10, 1);
console.log(buf2);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');
/*
    encoding - 使用的编码。默认为 'utf8' 。
    start - 指定开始读取的索引位置，默认为 0。
    end - 结束位置，默认为缓冲区的末尾。
    解码缓冲区数据并使用指定的编码返回字符串。
*/
// buf.toString(encoding, start, end);

console.log(buf5.toString());

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');
console.log(buf6);


//当字符串化一个 Buffer 实例时，JSON.stringify() 会隐式地调用该 toJSON()。
// 返回 JSON 对象。
// buf.toJSON()
const buffer2 = Buffer.from([1, 2, 3, 4, 5]);
const json = JSON.stringify(buffer2);
const toJSON = buffer2.toJSON();
console.log(json);
console.log(toJSON);

const copy = JSON.parse(json, function (key, value) {
    return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
});

console.log(copy);

/*
    list - 用于合并的 Buffer 对象数组列表。
    totalLength - 指定合并后Buffer对象的总长度。
    返回一个多个成员合并的新 Buffer 对象。
*/
//Buffer.concat(list, totalLength);
const b1 = Buffer.from("我是中国人");
const b2 = Buffer.from(",大家都是");
const b3 = Buffer.concat([b1, b2]);
console.log(b3.toString());

/*
*otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。
*返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。
* */
// buf.compare(otherBuffer);
var b4 = Buffer.from('ABC');
var b5 = Buffer.from('ABCD');
var result = b4.compare(b5);
console.log(result);

/*
 * targetBuffer - 要拷贝的 Buffer 对象。
 * targetStart - 数字, 可选, 默认: 0
 * sourceStart - 数字, 可选, 默认: 0
 * sourceEnd - 数字, 可选, 默认: buffer.length
* */
// buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]]);

var BB1 = Buffer.from('abcef');
var BB2 = Buffer.from('12345');

//将 buf2 插入到 buf1 指定位置上
BB1.copy(BB2, 2, 2);
console.log(BB2.toString());

/*
* start - 数字, 可选, 默认: 0
* end - 数字, 可选, 默认: buffer.length
* 返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。
* */
// buf.slice([start[, end]]);
var BB3 = Buffer.from('abcef');
const slice = BB3.slice(0, 3);
console.log("缓冲区长度" + slice.length)
console.log(slice.toString());