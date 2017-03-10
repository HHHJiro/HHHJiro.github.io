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
					href:'pages/chapters1/qq_index/html/qq.html'
					},
					{
					ctitle:'照片墙',
					href:'pages/chapters1/album/album.html'
					},
					{
						ctitle:'div属性改变',
						href:'pages/chapters1/change-div.html'
					},
					{
						ctitle:'css 三角形',
						href:'pages/chapters1/cssTriangle.html'
					},
					]
			},
			{
				title:'Chapter 2',
				size:4,
				show:true,
				content:[
					{
						ctitle:'字符串反转',
						href:'pages/chapters2/reverse.html'
					},
					{
						ctitle:'字符串数字求和',
						href:'pages/chapters2/numcount.html'
					},
					{
						ctitle:'字符串去重',
						href:'pages/chapters2/removeSame.html'
					},
					{
						ctitle:'字符串截取',
						href:'pages/chapters2/stringsub.html'
					},
					]
			},
			{
				title:'Chapter 3',
				size:4,
				show:true,
				content:[{
					ctitle:'js轮播图',
					href:'pages/chapters3/PicCarousel/PicCarousel.html'
					},
					{
						ctitle:'上传图片预览',
						href:'pages/chapters3/preview.html'
					},
					{
					ctitle:'js滚动图',
					href:'pages/chapters3/heroroll/framcc.html'
					},
					{
					ctitle:'js选项卡',
					href:'pages/chapters3/tab/tab2.html'
					},
					{
					ctitle:'js日历',
					href:'pages/chapters3/calendar/calendar_nooutjs.html'
					},
					{
					ctitle:'原生js select插件',
					href:'pages/chapters3/select/index.html'
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