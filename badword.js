/**
 *JS实现敏感词匹配查找、替换
 * 放在head标签内
 * **/
$(function () {
  var data = [
{str: '第一', repStr: '先进'},
{str: '国家级', repStr: '高级'},
{str: '世界级', repStr: '高级'},
{str: '最高级', repStr: '高级'},
{str: '顶级', repStr: '高级'},
{str: '顶尖', repStr: '高级'},
{str: '唯一', repStr: '先进'},
{str: '首个', repStr: '先进'},
{str: '首选', repStr: '优选'},
{str: '首家', repStr: '全力'},
{str: '独家', repStr: '全力'},
{str: '精确', repStr: '准确'},
{str: '填补国内空白', repStr: ''},
{str: '金牌', repStr: '品牌'},
{str: '名牌', repStr: '品牌'},
{str: '优秀', repStr: '先进'},
{str: '世界领先', repStr: '遥遥领先'},
{str: '极致', repStr: ''},
{str: '终极', repStr: '先进'},
{str: '王牌', repStr: '领先'},
{str: '销量冠军', repStr: '领先'},
{str: '永久', repStr: '长久'},
{str: '领袖品牌', repStr: '先进'},
{str: '领导品牌', repStr: '专业品牌'},
{str: '独一无二', repStr: '少有'},
{str: '绝无仅有', repStr: '少有'},
{str: '前无古人', repStr: '少有'},
{str: '最', repStr: '较'},
{str: '万能', repStr: '全能'},
{str: '治愈率', repStr: '见效率'},
{str: '有效率', repStr: '见效率'},
{str: '零', repStr: '低'},
{str: '复发', repStr: '反复'},
{str: '痊愈', repStr: '治好'},
{str: '治愈', repStr: '治好'},
{str: '根除', repStr: '治好'},
{str: '根治', repStr: '治好'},
{str: '百分百', repStr: '高'},
{str: '决对', repStr: '有效'},
{str: '彻底', repStr: '有效'},
{str: '泰斗', repStr: '先进'},
{str: '金标', repStr: '先进'},
{str: '国家示范', repStr: ''},
{str: '全国领先', repStr: ''},
{str: '行业顶尖', repStr: ''},
{str: '行业领先', repStr: ''},
{str: '领衔', repStr: ''},
{str: '问鼎', repStr: ''},
{str: '开创之举', repStr: ''},
{str: '完全', repStr: '有效'},
{str: '极佳', repStr: '有效'},
{str: '无痕', repStr: ''},
{str: '无创', repStr: ''},
{str: '不留疤', repStr: ''},
{str: '不留痕', repStr: ''},
{str: '无痛', repStr: '微痛'},
{str: '无副作用', repStr: '先进'},
{str: '永不反弹', repStr: ''},
{str: '立竿见影', repStr: ''},
{str: '承诺', repStr: ''},
{str: '确保', repStr: '保证'},
{str: '有保障', repStr: '先进'},
{str: '保证', repStr: '保证'},
{str: '可靠', repStr: ''},
{str: '长久', repStr: '有效'},
{str: '长效', repStr: '有效'},
{str: '特效', repStr: '有效'},
{str: '一次', repStr: '快速'},
{str: '全解决', repStr: ''},
{str: '全方位', repStr: '多方面'},
{str: '全面', repStr: '多方面'},
{str: '效果明显', repStr: '高效'},
{str: '效果显著', repStr: '高效'},
{str: '完美', repStr: '好'},
{str: '准确', repStr: '有效'},
{str: '精准', repStr: '有效'},
{str: '认可', repStr: '承认'},
{str: '无死角', repStr: ''},
{str: '尖端', repStr: '高端'},
{str: '全面改善', repStr: '高效'},
{str: '不反复', repStr: '低反复'},
{str: '当天见效', repStr: ''},
{str: '立马见效', repStr: ''},
{str: '马上起效', repStr: ''},
{str: '第一人', repStr: '负责人'},
{str: '首席', repStr: '负责人'},]

  var htmlStr = $('body').html()
  data.forEach(function (value, index, arr) {
    replaceStr(value.str, value.repStr)
  })

  function replaceStr(str, repStr) {
    var reg = new RegExp(str, 'g')
    htmlStr = htmlStr.replace(reg, repStr)
  }
  $('body').html(htmlStr)
})
