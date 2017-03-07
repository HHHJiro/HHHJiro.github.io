var vm = new Vue({
	el: "#app",
	data:{
		flag:0,
		test:[{
				title:'Chapter 1',
				show:true,
				size:4,
				content:[{
					ctitle:'腾讯首页',
					href:'pages/cssabout/qq_index/html/qq.html'
					},
					{
					ctitle:'照片墙',
					href:'pages/cssabout/album/album.html'
					},
					{
						ctitle:'div属性改变',
						href:'pages/cssabout/change-div.html'
					},
					{
						ctitle:'字符串反转',
						href:'pages/cssabout/reverse.html'
					},
					{
						ctitle:'上传图片预览',
						href:'pages/cssabout/preview.html'
					}
					]
			},
			{
				title:'Chapter 2',
				size:4,
				show:true,
				content:[{
					ctitle:'js轮播图',
					href:'pages/jsabout/PicCarousel/PicCarousel.html'
					},
					{
					ctitle:'js滚动图',
					href:'pages/jsabout/heroroll/framcc.html'
					},
					{
					ctitle:'js选项卡',
					href:'pages/jsabout/tab/tab2.html'
					},
					{
					ctitle:'js日历',
					href:'pages/jsabout/calendar/calendar_nooutjs.html'
					},
					{
					ctitle:'原生js select插件',
					href:'pages/jsabout/select/index.html'
					}],
			}
			],
	},
	methods:{
		shownext: function(item){
			if (item.show == false) {
				item.show = !item.show;
				item.size = 4;
				this.flag = 0;
				return ; 
			}
			else{
				for (var i = this.test.length - 1; i >= 0; i--) {
					this.test[i].show = true 
					this.test[i].size = 4
					this.flag = 0
				}
				item.show = !item.show;
				item.size = item.content.length * 32;
				this.flag = 1;	
			}
		},
		doThis: function(link){
			window.open(link.href)
		}
	}
})