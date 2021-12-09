# vuex_demo

> vuex

## 总结

``` bash
# 1.state 数据源
count: 0

# 2.mutations 改变 state 中的数据，集中监控所有数据的变化
add(state,step) { state.count++ }

# 3.actions 异步处理任务，通过 commit 触发 mutations 方法改变 state
addAsync(content, step) {
	setTimeout(() => {
		content.commit('add')
	}, 1000)
}

# template中的显示处理：
1. 直接调用 $store 使用
	{{ $store.getters.showNum }}
	{{ $store.state.count }}
2. 在 computed 中用 ...mapState ...mapGetters
	computed:{
		...mapState(['count'])
		...mapGetters(['showNum'])
	}
	{{ count }}
	{{ showNum }}
# 事件触发：
1. commit 调用某个 mutations 函数
	this.$store.commit(mutations中定义的方法名,可选参数)
2. dispatch 调用某个 actions 函数
	this.$store.dispatch(actions中定义的方法名,可选参数)
3. 在 methods 中用 ...mapMutations ...mapAcations
	methods: {
		...mapMutations(['sup','sup1'])
		...mapAcations(['supAsync','subAsync'])
	}
	模板中：<button @click="sup1"> -1 </button>
	methods中：sup1 () { this.sup() },
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
