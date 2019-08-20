<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {
		font-family:"Bold";
		src: url(./common/font/SourceHanSansCN-Bold.otf);
	}
	@font-face {
		font-family:"Medium";
		src: url(./common/font/SourceHanSansCN-Medium.otf);
	}
	@font-face {
		font-family:"Regular";
		src: url(./common/font/SourceHanSansCN-Regular.otf);
	}
</style>
