<template>
  <div id="app">
    <div>
      请打开控制台查看效果
    </div>
  </div>
</template>
<script>
import * as time from '../dist/index.js'
export default {
  name: 'app',
  data () {
    return {
   
    }
  },
  mounted(){
    const style='color:red;font-size:15px;font-weight: bold'
    const stylekey='color:purple;font-size:15px;font-weight: bold'
    const color='color:green;'
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
 },
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
