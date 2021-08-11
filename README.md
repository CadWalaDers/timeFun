# 基于时间日期换算解析 编写的工具包
___@author fankai16___  
___@email  cadwaladers@vip.qq.com___  
___@date 2021-08-11 16:05:31___  

## 前言
工具包基本上都是平时工作中用到的 抽空封装起来  
测试是在 单页面html & vue脚手架 & Chrome 环境中进行的  
因为是打工仔 更新速度不会太快 ***欢迎各位大佬加入共同编写***  
如果在使用中有意见和建议或遇到bug 可以直接发邮件 一般会在当天晚上查看  
### ___***<p style='color:red'>特别鸣谢：我兄弟 [@bugfix2019](https://www.npmjs.com/~bugfix2019) 的技术支持！</p>***___


## 兼容性说明
支持的浏览器版本&框架&nbsp;&nbsp;&nbsp;
<kbd style='color:green'>All</kbd>
<kbd style='color:green'>Vue2</kbd>
<kbd style='color:green'>Js</kbd>
<kbd style='color:green'>Ts</kbd>

不支持的浏览器版本&框架&nbsp;&nbsp;
<kbd style='color:red'>IE8</kbd>
<kbd style='color:red'>Vue3</kbd>
<kbd style='color:red'>Angular</kbd>
<kbd style='color:red'>React</kbd>

## 更新日志 2021-08-11
1. 增加时间区间处理"起始时间",自定义的前几天或者后几天
2. 增加日期转为时间戳 <kbd style='color:green'>例:'2021-08-11' 1628670316</kbd>
3. 增加时间戳转年月日时分秒  <kbd style='color:green'>例:'1628670316' 2021-08-11 0:0:00</kbd>
4. 增加计算还剩下多少时间倒计时 <kbd style='color:green'>例:'1000' 0天0小时0秒</kbd> 
5. 增加获取当月
6. 增加获取昨日
7. 增加获取今日
8. 增加获取明天
9. 增加去掉时间中的T <kbd style='color:green'>例:2004-05-03T17:30:08+08:00</kbd>
10. 增加计算起始日期到今天多久多少天例如您出生多久了
11. 增加判断是平年闰年
12. 增加获取当月的天数
13. 增加获取日期区间日期 <kbd style='color:green'>例:2021-01-01,2021-01-02****</kbd>

## 使用文档
1. 具体操作
```
    import * as time from '../dist/index.js'
    console.log('%c获取日期区间方法',style)
    console.log('%cgetDateRange("起始时间","区间时间","true向前false向后")',stylekey)
    console.log('%c向前结果',color,time.getDateRange(new Date(), 7, true))
    console.log('%c向后结果',color,time.getDateRange(new Date(), 7, false))
    console.log('-----------------------------------我是华丽的分割线-------------------------------------')
    console.log('%c日期转时间戳(传入类型2021-08-10)',style)
    console.log('%c获取时间戳',color,time.dateToTimestamp('2021-08-10'),'需要减去后面3个0 获取的时间戳.substring(0, 获取的时间戳.length - 3))')
    const todata=time.dateToTimestamp('2021-08-10').toString()
    const newTodata=todata.substring(0, todata.length - 3)
    console.log('%c获取时间戳',color,newTodata,'为字符串类型')
    console.log('-----------------------------------我是华丽的分割线-------------------------------------')
    console.log('%c时间戳转日期',style)
    console.log('%c日期转时间戳(传入类型number类型 1628524800,第二个参数必传年月日时分秒)',style)
    console.log('%c获取时间戳:年YYYY',color,time.timestampToTime(1628524800,'YYYY'))
    console.log('%c获取时间戳:月YYYY-mm',color,time.timestampToTime(1628524800,'YYYY-mm'))
    console.log('%c获取时间戳:日YYYY-mm-dd',color,time.timestampToTime(1628524800,'YYYY-mm-dd'))
    console.log('%c获取时间戳:时YYYY-mm-dd-h',color,time.timestampToTime(1628524800,'YYYY-mm-dd-h'))
    console.log('%c获取时间戳:分YYYY-mm-dd-h-m',color,time.timestampToTime(1628524800,'YYYY-mm-dd-h-m'))
    console.log('%c获取时间戳:秒YYYY-mm-dd-h-m-s',color,time.timestampToTime(1628524800,'YYYY-mm-dd-h-m-s'))
    console.log('-----------------------------------我是华丽的分割线-------------------------------------')
    console.log('%c计算还剩下多少时间',style)
    console.log('%c计算还剩下多少时间(传入类型number类型(毫秒),第二个参数(小时提示文案),第三个参数(分钟提示参数),第四个秒提示参数)',style)
    console.log('%c不传时分秒提示必传一个传那个展示那个维度',style)
    console.log('%c还剩下多少时间',color,time.formatDuringDay(596458))
    console.log('%c还剩下多少时间自定义',color,time.formatDuringDay(596458,'h','m','s'))
    console.log('-----------------------------------我是华丽的分割线-------------------------------------')
    console.log('%c获取当月',style)
    console.log('%c获取当月',color,time.getDate())
    console.log('-----------------------------------我是华丽的分割线-------------------------------------')
    console.log('%c获取昨日',style)
    console.log('%c获取昨日',color,time.onYesterday())
    console.log('-----------------------------------我是华丽的分割线-------------------------------------')
    console.log('%c获取今日',style)
    console.log('%c获取今日',color,time.today())
    console.log('-----------------------------------我是华丽的分割线-------------------------------------')
    console.log('%c获取明天',style)
    console.log('%c获取明天',color,time.tomorrow())
    console.log('-----------------------------------我是华丽的分割线-------------------------------------')
    console.log('%c去掉时间中的T(例:2004-05-03T17:30:08+08:00)',style)
    console.log('%c去掉时间中的T',color,time.dataFormatT('2004-05-03T17:30:08+08:00'))
    console.log('-----------------------------------我是华丽的分割线-------------------------------------')
    console.log('%c计算年龄您出生多久了(传入类型2021-07-05)',style)
    console.log('%c计算年龄您出生多久了',color,time.getGrowAge('2021-07-05'))
    console.log('-----------------------------------我是华丽的分割线-------------------------------------')
    console.log('%c判断是平年闰年(传入类型2024)',style)
    console.log('%c判断是平年闰年返回booler',color,time.LeapYear('2024'))
    console.log('-----------------------------------我是华丽的分割线-------------------------------------')
    console.log('%c获取当月的天数(传入参数类型2021-06-05)',style)
    console.log('%c获取当月的天数',color,time.DaysOfMonth('2021-06-05'))
    console.log('-----------------------------------我是华丽的分割线-------------------------------------')
    console.log('%c获取日期区间日期(传入参数类型2021-06-05,2021-09-05)',style)
    console.log('%c获取日期区间日期数',color,time.getdiffdate('2021-06-05','2021-09-05'))
```

1. 性能优化相关
  暂无

