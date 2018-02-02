// const arrow = function(param) {}

// const arrow = (param) => {}

// const arrow = param => {}

// const arrow = param => console.log(param)

// const arrow = param => ({param: param})

// const arrow = (param1, param2) => {}

// const arrow = ({id, movie}) => {
//   console.log(id, movie)
// }

const luck = {
  id: 2,
  say: function() {
    setTimeout(function() {
      console.log('id: ', this.id)
    }, 1000)
  },
  sayWithThis: function() {
    let that = this

    setTimeout(function() {
      console.log('id: ', that.id)
    }, 2000)
  },
  sayWithArrow: function() {
    setTimeout(() => {
      console.log('id: ', this.id)
    }, 3000)
  },
  sayWithGlobalArrow: () => {
    setTimeout(() => {
      console.log('id: ', this.id)
    }, 4000)
  }
}

luck.say()
luck.sayWithThis()
luck.sayWithArrow()
luck.sayWithGlobalArrow()


