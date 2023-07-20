<template>
	<uni-popup type="bottom" ref="areaChoose">
		<view class="mian getHeight" id="main">
			<view class="top getHeight" id="top">
				<text>请选择所在地区</text>
				<text class="iconfont close" @click.stop="close">&#xe7fa;</text>
			</view>
			<scroll-view scroll-x="true" @scroll="scroll" :show-scrollbar="false" class="nav getHeight" id="nav"
			 :scroll-into-view="scrollIntoView">
				<view @click="areaSelect(index)" :class="areaIndex == index ? 'nav-item nav-item-a' : 'nav-item'" v-for="(item, index) in list"
				 :key="index" :id="'area' + index">
					<text>{{ item }}</text>
				</view>
				<view class="bottomBorder" :style="'left:' + navBottomLeft + 'px'"></view>
			</scroll-view>
			<swiper class="swiper getHeight" :disable-touch="true" :current="current" :style="'height:' + swiperH + 'px'">
				<swiper-item v-for="(type, idx) in [1,2,3]" :key="idx" :id="'sw'+type">
					<scroll-view scroll-y="true" scroll-with-animation scroll-anchoring :scroll-into-view='id2' @scroll="scroll"
					 :show-scrollbar="false" class="swiper-list">
						<view class="area-item" v-for="(item, index) in getList" :key="index" :id="'area' + index">
							<text :class="id == item._id+type ? 'area-item-id area-item-id-sticky': 'area-item-id'" :id='item._id+type'>{{ item._id }}</text>
							<view class="swiper-list2">
								<text :class="proCode == item2.code ? 'area-item-name area-item-name-a' : 'area-item-name'" @click="itemSelect(item2, idx)"
								 v-for="(item2, index2) in item.data" :key="index2">
									<text class="iconfont" v-if="proCode == item2.code || cityCode == item2.code || disCode == item2.code">&#xe674;</text>
									{{ item2.name }}
								</text>
							</view>
						</view>
					</scroll-view>

				</swiper-item>
			</swiper>
			<view class="slider-right">
				<view class="slider-list">
					<text class="slider-item" v-for="(item, index) in (areaIndex == 0 ? provinceList : areaIndex == 1 ? cityList : areaIndex == 2 ? disList : townList)"
					 :key="index" @click="sliderSelect(item._id +(areaIndex+1))">{{ item._id }}</text>
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	export default {
		name: 'area-choose',
		data() {
			return {
				list: ['请选择', '', ''],
				areaIndex: 0,
				navBottomLeft: 0,
				scrollIntoView: 'area0',
				code: '440100',
				provinceList: [], //省
				proCode: -1,
				cityList: [],
				cityCode: -1,
				disList: [],
				disCode: -1,
				townList: [],
				townCode: -1,
				swiperH: 300, //列表高
				current: 0, //当前滑块
				id: '', //地址编号A、B、C、...
				id2: '',
				scrollTopList: [{
					id: 'A',
					top: 0
				}],
				scrollTopListAll: {}

			};
		},
		mounted() {

		},
		computed:{
			getList() {
				
				return this.areaIndex == 0 ? this.provinceList : this.areaIndex == 1 ? this.cityList : this.areaIndex == 2 ? this.disList : this.townList
			},
		},
		methods: {
			close() {
				this.$refs.areaChoose.close()
			},
			show() {
				this.$refs.areaChoose.open();
				this.provinceList = uni.getStorageSync('provinceList')
				if (!this.provinceList) {
					this.getData();
				} else {
					this.getScrollT(0, this.provinceList.length)
					this.current = 0;
					setTimeout(() => {
						this.areaSelect(0);
					}, 200)

				}

				setTimeout(() => {
					this.getSwiperH();
				}, 200);

			},
			onchange(e) {
				const value = e.detail.value;
			},
			scroll(e) {
				this.scrollTopList.some((item, index) => {
					if (e.detail.scrollTop > item.top) {
						this.id = item.id
					}
				})
			},
			areaSelect(index) {
				// 选中头部地址项
				this.areaIndex = index;
				this.current = index;
				//自动滚动
				this.scrollIntoView = 'area' + index;
				let widthAll = 0;
				for (let i = 0; i < index + 1; i++) {
					var query = uni.createSelectorQuery().in(this);
					var idView = '#area' + i;
					query.select(idView).boundingClientRect();
					query.exec(res => {
						if (i < index) {
							widthAll += res[0].width;
						}
						if (i == index) {
							this.navBottomLeft = widthAll + (res[0].width - uni.upx2px(60)) / 2;
						}
					});
				}
				this.scrollTopList = this.scrollTopListAll[index]
			},
			sliderSelect(id) {
				this.id2 = id
			},
			getSwiperH() {
				var query = uni.createSelectorQuery().in(this);
				query
					.selectAll('.getHeight')
					.boundingClientRect()
					.exec(res => {
						if (res[0].length > 0) {
							this.swiperH = res[0][0].height - res[0][1].height - res[0][2].height - uni.upx2px(20);
						} else {
							setTimeout(() => {
								this.getSwiperH();
							}, 200);
						}
					});
			},
			getScrollT(type, length) {
				var query = uni.createSelectorQuery().in(this);
				query
					.selectAll('#sw' + (type + 1) + ' .area-item-id')
					.boundingClientRect()
					.exec(res => {
						if (res[0].length == length) {
							this.scrollTopList = []
							let firstTop = res[0][0].top
							res[0].forEach((item, index) => {
								let obj = {
									id: item.id,
									top: item.top - firstTop
								}
								this.scrollTopList.push(obj)
							})
							this.scrollTopListAll[type] = this.scrollTopList
						} else {
							setTimeout(() => {
								this.getScrollT(type, length)
							}, 200)
						}

					});

			},
			itemSelect(item, type) {
				switch (type) {
					case 0:
						this.proCode = item.code;
						break;
					case 1:
						this.cityCode = item.code;
						break;
					case 2:
						this.disCode = item.code;
						break;
					case 3:
						this.townCode = item.code;

						break;
					default:
						break;
				}
				this.list.forEach((item2, index2) => {
					if (index2 == type) {
						this.$set(this.list, type, item.name);

						if (index2 < 2) {
							this.$set(this.list, type + 1, '请选择');
							this.getData(item.code, type + 1);
						} else {
							setTimeout(() => {
								this.areaSelect(type);
							}, 200);
						}
					}
					if (index2 > type + 1) {
						this.$set(this.list, index2, '');
					}
				});
				if (type == 2) {
					this.$refs.areaChoose.close()
					this.$emit('areaComplete', {
						address: this.list.join(''),
						proCode: this.proCode,
						cityCode: this.cityCode,
						disCode: this.disCode
					})
				}

			},

			getData(code = '', type = 0) {
				uniCloud
					.callFunction({
						name: 'user-address',
						data: {
							action: 'getArea',
							params: {
								code,
								type
							}
						}
					})
					.then(e => {
						switch (type) {
							case 0:
								this.provinceList = e.result.data;
								uni.setStorageSync('provinceList', e.result.data)
								break;
							case 1:
								this.cityList = e.result.data;
								break;
							case 2:
								this.disList = e.result.data;
								break;
							case 3:
								this.townList = e.result.data;
								break;
							default:
								break;
						}
						if (e.result.data.length > 0) {
							this.getScrollT(type, e.result.data.length)
						}

						this.current = type;
						this.areaSelect(type);
					})
					.catch(e => {
						console.log(e);
					});
			},

		}
	};
</script>

<style scoped lang="less">
	.mian {
		height: 85vh;
		width: 100%;
		background-color: #ffffff;
		border-radius: 20rpx 20rpx 0 0;
		position: relative;

		.top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-left: 30rpx;
			font-size: 32rpx;
			font-weight: bold;

			.iconfont {
				font-size: 40rpx;
			}

			.close {
				padding: 40rpx 30rpx 30rpx;
				z-index: 3;

			}
		}

		.nav {
			white-space: nowrap;
			width: 100%;
			position: relative;
			padding: 0rpx 20rpx;

			.bottomBorder {
				position: absolute;
				width: 60rpx;
				height: 6rpx;
				background-image: linear-gradient(to right, red, white);
				bottom: 0rpx;
				left: 0rpx;
				transition: left 0.5s ease;
			}

			.nav-item {
				padding: 10rpx 20rpx;
				display: inline-block;
				text-align: center;
				font-size: 28rpx;
			}

			.nav-item-a {
				color: rgb(201, 22, 35);
			}
		}

		.swiper {
			height: 1000rpx;
			margin-top: 20rpx;

			.swiper-list {
				height: 100%;
				display: flex;
				flex-direction: column;
				position: relative;

				.area-item {
					font-size: 28rpx;

					.area-item-id {
						padding: 20rpx 44rpx;
						border-bottom: 1rpx solid #f0ecf2;
						font-weight: bold;
						display: block;
					}

					.area-item-id-sticky {
						position: sticky;
						top: 0;
						background-color: #FFFFFF;
						transition: all 0.1s;

					}

					.swiper-list2 {
						display: flex;
						flex-direction: column;


						.area-item-name {
							padding: 20rpx 40rpx 0;
							font-weight: 400;

							.iconfont {
								color: rgb(201, 22, 35);
								margin-right: 10rpx;
							}
						}

						.area-item-name-a {
							color: rgb(201, 22, 35);
						}
					}
				}

			}
		}

		.slider-right {

			position: absolute;
			right: 0rpx;
			top: 80rpx;
			bottom: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 20rpx;

			.slider-list {
				display: flex;
				flex-direction: column;
				align-items: center;
				background-color: #ebe8ee;
				border-radius: 20rpx;
			}

			.slider-item {
				padding: 10rpx 10rpx;
				font-size: 18rpx;
				color: #24292E;

				&:first-child {
					padding-top: 20rpx;
				}

				&:last-child {
					padding-bottom: 20rpx;
				}
			}
		}
	}
</style>
