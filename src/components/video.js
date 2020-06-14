/* eslint-disable */
export default {
  data () {
    return {
      a: {
        b: {
          c: 'third'
        }
      }
    }
  },
  methods: {
    getMix () {
      console.log('====', this.a)
    }
  }
}
