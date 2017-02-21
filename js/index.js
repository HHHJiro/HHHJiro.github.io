var vm = new Vue({
	el: "#app",
	data:{
		flag:0,
		test:[{
				title:'静态demo,css相关',
				show:true,
				size:4,
				content:[{
					ctitle:'腾讯首页',
					href:'#'
					},
					{
					ctitle:'照片墙',
					href:'#'
					}]
			},
			{
				title:'原生javascript',
				size:4,
				show:true,
				content:[{
					ctitle:'js轮播图1',
					href:'#'
					},
					{
					ctitle:'js轮播图2',
					href:'#'
					},
					{
					ctitle:'js选项卡',
					href:'#'
					},
					{
					ctitle:'js日历',
					href:'#'
					},
					{
					ctitle:'原生js select插件',
					href:'#'
					}],
			}
			],
	},
	methods:{
		shownext: function(item){
			item.show = !item.show;
			if (item.show) {
				item.size = 4;
				this.flag = 0;
			}
			else{
				item.size = item.content.length * 32;
				this.flag = 1;
			}
			
		}
	}
})