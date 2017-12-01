// mockjs总结
数据模板定义
String
'name|min-max': string  生成一个字符串,重复min-max次string

'name|count': string  	生成一个字符串,重复count次string


Number
'name|+1': number  			生成的数据结果每次都增加number 结果: { 2 } 结果: { 4 } 结果: { 6 }

'name|min-max': number  	生成min-max之间的随机整数

'name|min-max.dmin-dmax': number  生成一个浮点数，整数部分的范围是 min-max，保留小数点后 dmin-dmax 位小数


Boolean
'name|1': boolean  	生成一个布尔值
'name|1-2': true 	生成true的概率为1/(1+2)


Object
'name|count': object	从object中挑选count条键值对
'name|min-max': object	从object中选出min-max条键值对


Array
'name|1': array		从array中选出一个元素
'name|+1': array 	从array中依次取出元素
'name|count': array		重复count次array里面的全部元素,生成一个元素数组
'name|min-max': array	重复min-max次array里面的全部元素,生成一个元素数组


RegExp
'name': regexp   生成符合regexp的数据
示例: 'regexp': /[a-z][A-Z][0-9]/   输出: { "regexp": "eP3" }
	  'regexp': /\d{5, 10}/   		输出: { "regexp": "4687322" }
'name|count': regexp   重复生成count次符合regexp的数据
示例: 'regexp|3': /\d{5,10}\-/      输出: { "regexp": "3552334296-161465-1814678308-" }
'name|min-max': regexp  重复生成min-max次符合regexp的数据

数据占位符定义
Basic


返回一个随机的布尔值。
	Random.boolean()    
	Random.boolean(min, max, cur)   返回一个随机的布尔值。
		参数 min：可选。指示参数 cur 出现的概率。概率计算公式为 min / (min + max)。该参数的默认值为 1，即有 50% 的概率返回参数 cur。
		参数 max：可选。指示参数 cur 的相反值（!cur）出现的概率。概率计算公式为 max / (min + max)。该参数的默认值为 1，即有 50% 的概率返回参数 cur。
		参数 cur：可选。可选值为布尔值 true 或 false。如果未传入任何参数，则返回 true 和 false 的概率各为 50%。


返回一个随机的自然数（大于等于 0 的整数）。
	Random.natural()
	Random.natural(min)
	Random.natural(min, max)
		参数 min：可选。指示随机自然数的最小值。默认值为 0。
		参数 max：可选。指示随机自然数的最小值。默认值为 9007199254740992。
		

返回一个随机的整数。
	Random.integer()
	Random.integer(min)
	Random.integer(min, max)
		参数 min：可选。指示随机整数的最小值。默认值为 -9007199254740992。
		参数 max：可选。指示随机整数的最大值。默认值为 9007199254740992。
		

返回一个随机的浮点数。
	Random.float()
	Random.float(min)
	Random.float(min, max)
	Random.float(min, max, dmin)
	Random.float(min, max, dmin, dmax)
		参数 min：可选。整数部分的最小值。默认值为 -9007199254740992。
		参数 max：可选。整数部分的最大值。默认值为 9007199254740992。
		参数 dmin：可选。小数部分位数的最小值。默认值为 0。
		参数 dmin：可选。小数部分位数的最大值。默认值为 17。


返回一个随机字符。
	Random.character()
	Random.character('lower/upper/number/symbol')
	Random.character(pool)
		参数 pool：可选。字符串。表示字符池，将从中选择一个字符返回。
		如果传入 'lower' 或 'upper'、'number'、'symbol'，表示从内置的字符池从选取：
		
		  {
		      lower: "abcdefghijklmnopqrstuvwxyz",
		      upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		      number: "0123456789",
		      symbol: "!@#$%^&*()[]"
		  }
		如果未传入该参数，则从 'lower' + 'upper' + 'number' + 'symbol' 中随机选取一个字符返回。
		示例:   Random.character()
				// => "P"
				Random.character('lower')
				// => "y"
				Random.character('upper')
				// => "X"
				Random.character('number')
				// => "1"
				Random.character('symbol')
				// => "&"
				Random.character('aeiou')
				// => "u"


返回一个随机字符串。
	Random.string()
	Random.string( length )
	Random.string( pool, length )
	Random.string( min, max )
	Random.string( pool, min, max )
		参数 pool：可选。字符串。表示字符池，将从中选择一个字符返回。
		如果传入 'lower' 或 'upper'、'number'、'symbol'，表示从内置的字符池从选取：
		
		  {
		      lower: "abcdefghijklmnopqrstuvwxyz",
		      upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		      number: "0123456789",
		      symbol: "!@#$%^&*()[]"
		  }
		如果未传入该参数，则从 'lower' + 'upper' + 'number' + 'symbol' 中随机选取一个字符返回。
		
		参数 min：可选。随机字符串的最小长度。默认值为 3。
		参数 max：可选。随机字符串的最大长度。默认值为 7。
	

返回一个整型数组。
	Random.range(stop)
	Random.range(start, stop)
	Random.range(start, stop, step)
		参数 start：可选。数组中整数的起始值,默认从0开始。
		参数 stop：必选。数组中整数的结束值（不包含在返回值中）。
		参数 step：可选。数组中整数之间的步长。默认值为 1。
	

返回一个随机的日期字符串。
	Random.date()
	Random.date(format)
		参数 format：可选。指示生成的日期字符串的格式。默认值为 yyyy-MM-dd
			Random.date()
			// => "2002-10-23"
			Random.date('yyyy-MM-dd')
			// => "1983-01-29"
			Random.date('yy-MM-dd')
			// => "79-02-14"
			Random.date('y-MM-dd')
			// => "81-05-17"
			Random.date('y-M-d')
			// => "84-6-5"


返回一个随机的时间字符串。
	Random.time()
	Random.time(format)
		参数 format：可选。指示生成的时间字符串的格式。默认值为 HH:mm:ss。
			Random.time()
			// => "00:14:47"
			Random.time('A HH:mm:ss')
			// => "PM 20:47:37"
			Random.time('a HH:mm:ss')
			// => "pm 17:40:00"
			Random.time('HH:mm:ss')
			// => "03:57:53"
			Random.time('H:m:s')
			// => "3:5:13"


返回一个随机的日期和时间字符串。
	Random.datetime()
	Random.datetime(format)
		参数 format：可选。指示生成的日期和时间字符串的格式。默认值为 yyyy-MM-dd HH:mm:ss。
			Random.datetime()
			// => "1977-11-17 03:50:15"
			Random.datetime('yyyy-MM-dd A HH:mm:ss')
			// => "1976-04-24 AM 03:48:25"
			Random.datetime('yy-MM-dd a HH:mm:ss')
			// => "73-01-18 pm 22:12:32"
			Random.datetime('y-MM-dd HH:mm:ss')
			// => "79-06-24 04:45:16"
			Random.datetime('y-M-d H:m:s')
			// => "02-4-23 2:49:40"


生成现在的时间
	Random.now()    "2017-11-30 15:51:13"

生成一个随机的图片地址。
	Random.image()
	Random.image(size)
	Random.image(size, background)
	Random.image(size, background, text)
	Random.image(size, background, foreground, text)
	Random.image(size, background, foreground, format, text)
		参数 size：可选。指示图片的宽高，格式为 '宽x高'。默认从下面的数组中随机读取一个：
		
		  [
		      '300x250', '250x250', '240x400', '336x280', 
		      '180x150', '720x300', '468x60', '234x60', 
		      '88x31', '120x90', '120x60', '120x240', 
		      '125x125', '728x90', '160x600', '120x600', 
		      '300x600'
		  ]
		参数 background：可选。指示图片的背景色。默认值为 '#000000'。
		参数 foreground：可选。指示图片的前景色（文件）。默认值为 '#FFFFFF'。
		参数 format：可选。指示图片的格式。默认值为 'png'，可选值包括：'png'、'gif'、'jpg'。
		参数 text：可选。指示图片上的文字。默认为参数 size。
			Random.image()
			// => "http://dummyimage.com/125x125"
			Random.image('200x100')
			// => "http://dummyimage.com/200x100"
			Random.image('200x100', '#fb0a2a')
			// => "http://dummyimage.com/200x100/fb0a2a"
			Random.image('200x100', '#02adea', 'Hello')
			// => "http://dummyimage.com/200x100/02adea&text=Hello"
			Random.image('200x100', '#00405d', '#FFF', 'Mock.js')
			// => "http://dummyimage.com/200x100/00405d/FFF&text=Mock.js"
			Random.image('200x100', '#ffcc33', '#FFF', 'png', '!')
			// => "http://dummyimage.com/200x100/ffcc33/FFF.png&text=!"


生成一段随机的 Base64 图片编码。
	Random.dataImage()
	Random.dataImage(size)
	Random.dataImage(size, text)


随机生成一个颜色，格式为 '#RRGGBB'。
	Random.color()

随机生成一个颜色，格式为 'rgb(***, ***, ***)'。
	Random.rgb()

随机生成一个颜色，格式为 'rgba(***, ***, ***, opacity)'。
	Random.rgba()    => "rgba(164, 242, 121, 0.09)"


随机生成一段文本。
	Random.paragraph()
	Random.paragraph(len)
	Random.paragraph(min, max)
	Random.cparagraph( min, max )  生成中文的段落
		参数 len：可选。指示文本中句子的个数。默认值为 3 到 7 之间的随机数。
		参数 min：可选。指示文本中句子的最小个数。默认值为 3。
		参数 max：可选。指示文本中句子的最大个数。默认值为 7。


随机生成一个句子，第一个的单词的首字母大写。
	Random.sentence()
	Random.sentence(len)
	Random.sentence(min, max)
	Random.csentence(min, max)  生成中文的句子
		参数 len：可选。指示句子中单词的个数。默认值为 12 到 18 之间的随机数。
		参数 min：可选。指示句子中单词的最小个数。默认值为 12。
		参数 max：可选。指示句子中单词的最大个数。默认值为 18。


随机生成一个单词
	Random.word()
	Random.word(len)
	Random.word(min, max)
	Random.cword( pool?, min?, max? )
	Random.cword('零一二三四五六七八九十')  随机从中取出一个中文字符
	Random.cword(3, 5)  随机取出min-max个字符
		参数 len：可选。指示单词中字符的个数。默认值为 3 到 10 之间的随机数。
		参数 min：可选。指示单词中字符的最小个数。默认值为 3。
		参数 max：可选。指示单词中字符的最大个数。默认值为 10。


随机生成一句标题，其中每个单词的首字母大写。
	Random.title()
	Random.title(len)
	Random.title(min, max)
	Random.ctitle( min?, max? )
		参数 len：可选。指示单词中字符的个数。默认值为 3 到 7 之间的随机数。
		参数 min：可选。指示单词中字符的最小个数。默认值为 3。
		参数 max：可选。指示单词中字符的最大个数。默认值为 7。


随机生成一个常见的英文名。
	Random.first()
随机生成一个常见的中文名。
	Random.cfirst()

随机生成一个常见的英文姓。
	Random.last()
随机生成一个常见的中文姓。
	Random.clast()

随机生成一个常见的英文姓名。
	Random.name(middle)
参数 middle：可选。布尔值。指示是否生成中间名。

随机生成一个常见的中文姓名
	Random.cname()


随机生成一个 URL。
	Random.url()

随机生成一个域名。
	Random.domain()

随机生成一个顶级域名。
	Random.tld()


随机生成一个邮件地址。
	Random.email()


随机生成一个 IP 地址。
	Random.ip()


Address

随机生成一个（中国）大区。
	Random.region()	

随机生成一个（中国）省（或直辖市、自治区、特别行政区）。
	Random.province()

随机生成一个中国市
	Random.city( prefix? )
		参数prefix: 可选 true .指示市所属的省份

随机生成一个中国的县
	Random.county( prefix? )
		参数prefix: 可选 true .指示县所属的省份,市
			Random.county(true) => "重庆 重庆市 巴南区"
			
随机生成一个邮政编码（六位数字）。			
Random.zip()  => "282854"


Helpers

把字符串的第一个字母转换为大写。
	Random.capitalize(word)    
		Random.capitalize('hello')   // => "Hello"

把字符串转换为大写。
	Random.upper(str)    
		Random.upper('hello')    // => "HELLO"

把字符串转换为小写。
	Random.lower(str)    
		Random.lower('HELLO')    // => "hello"

从数组中随机选取一个元素，并返回。
	Random.pick(['a', 'e', 'i', 'o', 'u'])    // => "o"

打乱数组中元素的顺序，并返回。
	Random.shuffle(arr)  
		Random.shuffle(['a', 'e', 'i', 'o', 'u']   // => ["o", "u", "e", "i", "a"]


Miscellaneous
全球唯一标识符
	Random.guid()  "c1F7e8c3-AE1E-2884-e6Fc-e8Ab97Bb3fA7"

随机生成一个 18 位身份证。
	Random.id()

	Random.increment( step? )

