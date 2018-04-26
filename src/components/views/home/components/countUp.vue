<template>
  <div>
      <p :class="className" :style="{textAlign:'center',color:color,fontSize:countSize,fontWeight:countWeight}">
          <span :id='idName'>{{startVal}}</span>
            <span>{{unit}}</span>

      </p>
      <slot name='intro'></slot>
  </div>
</template>

<script>
import CountUp from 'countup'

function transformValue(value) {
  let endVal = 0
  let unit = ''
  if (value < 1000) {
    endVal = value
  } else if (value < 1000000) {
    endVal = parseInt(value / 1000)
    unit = 'K+'
  } else if (value < 10000000000) {
    endVal = parseInt(value / 1000000)
    unit = 'M+'
  } else if (value < 10000000000000) {
    endVal = parseInt(value / 1000000000)
    unit = 'B+'
  }
  return {
    val: endVal,
    unit
  }
}
export default {
  name: 'countUp',
  data() {
    return {
      unit: '',
      demo: {}
    }
  },
  props: {
    idName: String,
    className: String,
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      default: 0
    },
    decimals: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2
    },
    delay: {
      type: Number,
      default: 500
    },
    options: {
      type: Object,
      default: () => {
        return {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.'
        }
      }
    },
    color: String,
    countSize: {
      type: String,
      default: '30px'
    },
    countWeight: {
      type: Number,
      default: 700
    },
    introText: [String, Number]
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        let res = transformValue(this.endVal)
        let endVal = res.val
        this.unit = res.unit
        let demo = {}
        this.demo = demo = new CountUp(
          this.idName,
          this.startVal,
          endVal,
          this.decimals,
          this.duration,
          this.options
        )
        if (!demo.error) {
          demo.start()
        }
      }, this.delay)
    })
  },
  watch: {
    endVal(val) {
      let res = transformValue(val)
      let endVal = res.val
      this.unit = res.unit
      this.demo.update(endVal)
    }
  }
}
</script>
